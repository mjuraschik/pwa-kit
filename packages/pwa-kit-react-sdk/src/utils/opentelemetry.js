/*
 * Copyright (c) 2025, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import {trace, context, SpanStatusCode} from '@opentelemetry/api'
import {hrTimeToMilliseconds, hrTimeToTimeStamp} from '@opentelemetry/core'
import logger from './logger-instance'
import {getOTELConfig, getServiceName} from './opentelemetry-config'

export const logSpanData = (span, event = 'start', res = null) => {
    // Safety check for valid span
    if (!span || !span.spanContext || typeof span.spanContext !== 'function') {
        logger.warn('Invalid span object, skipping span data logging', {
            namespace: 'opentelemetry.logSpanData',
            additionalProperties: {
                spanName: span?.name || 'unknown',
                event: event
            }
        })
        return
    }

    const spanContext = span.spanContext()
    const startTime = span.startTime

    // Safety check for spanContext
    if (!spanContext || !spanContext.traceId || !spanContext.spanId) {
        logger.warn('Invalid span context, skipping span data logging', {
            namespace: 'opentelemetry.logSpanData',
            additionalProperties: {
                spanName: span.name,
                event: event,
                spanContext: spanContext
            }
        })
        return
    }

    // Safety check for startTime
    if (!startTime || !Array.isArray(startTime) || startTime.length < 2) {
        logger.warn('Invalid span startTime, skipping span data logging', {
            namespace: 'opentelemetry.logSpanData',
            additionalProperties: {
                spanName: span.name,
                event: event,
                startTime: startTime
            }
        })
        return
    }

    const endTime = event === 'start' ? startTime : span.endTime
    let duration
    if (event === 'start') {
        duration = 0
    } else {
        try {
            duration = hrTimeToMilliseconds(span.duration)
        } catch (error) {
            logger.warn('Failed to convert duration to milliseconds, using fallback', {
                namespace: 'opentelemetry.logSpanData',
                additionalProperties: {
                    spanName: span.name,
                    event: event,
                    error: error.message,
                    duration: span.duration
                }
            })
            duration = 0
        }
    }

    // Convert startTime to timestamp with additional safety check
    let timestamp
    try {
        // Double-check that startTime is valid before calling hrTimeToTimeStamp
        if (startTime && Array.isArray(startTime) && startTime.length >= 2) {
            timestamp = hrTimeToTimeStamp(startTime)
        } else {
            throw new Error('startTime is not in the expected format')
        }
    } catch (error) {
        logger.warn('Failed to convert startTime to timestamp, using fallback', {
            namespace: 'opentelemetry.logSpanData',
            additionalProperties: {
                spanName: span.name,
                event: event,
                error: error.message,
                startTime: startTime
            }
        })
        timestamp = Date.now() * 1000000 // Fallback to current time in nanoseconds
    }

    // Create the span data object that matches the expected format
    const spanData = {
        traceId: spanContext.traceId,
        parentId: span.parentSpanId,
        name: span.name,
        id: spanContext.spanId,
        kind: span.kind,
        timestamp: timestamp,
        duration: duration,
        attributes: {
            'service.name': getServiceName(),
            ...(span.attributes || {}),
            event: event // Add event type to distinguish start/end
        },
        status: {code: event === 'start' ? SpanStatusCode.UNSET : SpanStatusCode.OK},
        events: [],
        links: [],
        start_time: startTime,
        end_time: endTime,
        forwardTrace: getOTELConfig().b3TracingEnabled
    }

    // Inject B3 headers into response if available
    if (
        res &&
        typeof res.setHeader === 'function' &&
        process.env.DISABLE_B3_TRACING !== 'true' &&
        event === 'start'
    ) {
        try {
            res.setHeader('x-b3-traceid', spanContext.traceId)
            res.setHeader('x-b3-spanid', spanContext.spanId)
            res.setHeader('x-b3-sampled', '1')

            if (span.parentSpanId) {
                res.setHeader('x-b3-parentspanid', span.parentSpanId)
            }
        } catch (error) {
            logger.warn('Failed to set B3 headers', {
                namespace: 'opentelemetry.logSpanData',
                additionalProperties: {
                    error: error.message,
                    spanName: span.name
                }
            })
        }
    }

    // Only log if this is an end event or if it's a start event for a new span
    if (event === 'end' || !Object.prototype.hasOwnProperty.call(span.attributes || {}, 'event')) {
        logger.info('OpenTelemetry span data', {
            namespace: 'opentelemetry.logSpanData',
            additionalProperties: spanData
        })
    }
}

/**
 * Creates a new span with the given name and options
 * @param {string} name - The name of the span
 * @param {Object} options - Span options
 * @returns {Span} The created span
 */
export const createSpan = (name, options = {}) => {
    try {
        const tracer = trace.getTracer(getServiceName())

        // Create a new span with the current context
        const span = tracer.startSpan(
            name,
            {
                ...options,
                attributes: {
                    ...options.attributes,
                    'service.name': getServiceName()
                }
            },
            context.active()
        )

        // Validate the created span
        if (
            !span ||
            !span.startTime ||
            !Array.isArray(span.startTime) ||
            span.startTime.length < 2
        ) {
            logger.warn('OpenTelemetry span not properly initialized, skipping', {
                namespace: 'opentelemetry',
                additionalProperties: {spanName: name}
            })
            return null
        }

        // Set the new span as active and log span data
        try {
            logSpanData(span, 'start')
            return trace.setSpan(context.active(), span)
        } catch (error) {
            logger.error('Failed to log span data', {
                namespace: 'opentelemetry',
                additionalProperties: {
                    spanName: name,
                    error: error.message
                }
            })
            return trace.setSpan(context.active(), span)
        }
    } catch (error) {
        logger.error('Failed to create span', {
            namespace: 'opentelemetry',
            additionalProperties: {
                spanName: name,
                error: error.message
            }
        })
        return null
    }
}

/**
 * Creates a child span with the given name and attributes
 * @param {string} name - The name of the span
 * @param {Object} attributes - The attributes to add to the span
 * @returns {Span} The created span
 */
export const createChildSpan = (name, attributes = {}) => {
    try {
        const tracer = trace.getTracer(getServiceName())
        const ctx = context.active()
        const parentSpan = trace.getSpan(ctx)

        // Don't create duplicate spans
        if (parentSpan?.attributes?.performance_mark === name) {
            return parentSpan
        }

        const {performance_mark, performance_detail, ...otherAttributes} = attributes

        const spanAttributes = {
            'service.name': getServiceName(),
            ...otherAttributes
        }

        if (performance_mark) {
            spanAttributes['performance.mark'] = performance_mark
            spanAttributes['performance.type'] = 'start'
            spanAttributes['performance.detail'] =
                typeof performance_detail === 'string'
                    ? performance_detail
                    : JSON.stringify(performance_detail)
        }

        const span = tracer.startSpan(
            name,
            {
                attributes: spanAttributes
            },
            parentSpan ? ctx : undefined
        )

        // Validate the created span
        if (
            !span ||
            !span.startTime ||
            !Array.isArray(span.startTime) ||
            span.startTime.length < 2
        ) {
            logger.warn('OpenTelemetry child span not properly initialized, skipping', {
                namespace: 'opentelemetry',
                additionalProperties: {spanName: name}
            })
            return null
        }

        // Log span data with error handling
        try {
            logSpanData(span, 'start')
        } catch (error) {
            logger.error('Failed to log child span data', {
                namespace: 'opentelemetry',
                additionalProperties: {
                    spanName: name,
                    error: error.message
                }
            })
        }
        return span
    } catch (error) {
        logger.error('Error creating OpenTelemetry span', {
            namespace: 'opentelemetry',
            additionalProperties: {
                spanName: name,
                error: error.message,
                stack: error.stack
            }
        })
        return null
    }
}

/**
 * Ends a span and logs its data
 * @param {Span} span - The span to end
 */
export const endSpan = (span) => {
    if (!span) {
        return
    }

    // Safety check for valid span
    if (!span.end || typeof span.end !== 'function') {
        logger.warn('Invalid span object, cannot end span', {
            namespace: 'opentelemetry',
            additionalProperties: {
                spanName: span?.name || 'unknown'
            }
        })
        return
    }

    try {
        span.end()

        // Log completion data
        logSpanData(span, 'end')
    } catch (error) {
        logger.error('Error ending OpenTelemetry span', {
            namespace: 'opentelemetry',
            additionalProperties: {
                error: error.message,
                stack: error.stack
            }
        })
    }
}

/**
 * Creates a span for performance measurement
 * @param {string} name - The name of the performance span
 * @param {Function} fn - The function to measure
 * @param {Object} res - The response object (optional)
 * @returns {Promise<any>} The result of the function
 */
export const tracePerformance = async (name, fn, res = null) => {
    const tracer = trace.getTracer(getServiceName())
    // Create the root span
    const rootSpan = tracer.startSpan(name, {
        attributes: {
            'service.name': getServiceName()
        }
    })

    // Create a new context with the root span
    const ctx = trace.setSpan(context.active(), rootSpan)

    // Log start event
    logSpanData(rootSpan, 'start', res)

    try {
        // Run the function within the context of the root span
        const result = await context.with(ctx, async () => {
            try {
                return await fn()
            } catch (error) {
                rootSpan.setStatus({
                    code: SpanStatusCode.ERROR,
                    message: error.message
                })
                throw error
            }
        })

        rootSpan.end()

        // Log completion data
        logSpanData(rootSpan, 'end', res)

        return result
    } catch (error) {
        rootSpan.end()

        // Log error completion
        logSpanData(rootSpan, 'end', res)

        throw error
    }
}

/**
 * Traces a performance metric
 * @param {string} name - The name of the metric
 * @param {number} duration - The duration of the metric in milliseconds
 * @param {Object} attributes - Additional attributes for the metric
 */
export const logPerformanceMetric = (name, duration, attributes = {}) => {
    try {
        const tracer = trace.getTracer(getServiceName())
        const ctx = context.active()
        const parentSpan = trace.getSpan(ctx)

        if (!parentSpan) {
            logger.warn('No parent span found in context', {
                namespace: 'opentelemetry',
                additionalProperties: {metricName: name}
            })
            return
        }

        // Extract and normalize performance details
        const {performance_mark, performance_detail, ...otherAttributes} = attributes

        // Build metric attributes
        const metricAttributes = {
            'service.name': getServiceName(),
            'metric.duration': duration,
            ...otherAttributes
        }

        if (performance_mark) {
            metricAttributes['performance.mark'] = performance_mark
            metricAttributes['performance.type'] = 'end'
            metricAttributes['performance.detail'] =
                typeof performance_detail === 'string'
                    ? performance_detail
                    : JSON.stringify(performance_detail)
        }

        // Create and immediately end the metric span
        const span = tracer.startSpan(
            name,
            {
                attributes: metricAttributes
            },
            ctx
        )

        span.end()

        // Log completion data
        logSpanData(span, 'end')
    } catch (error) {
        logger.error('Error logging performance metric', {
            namespace: 'opentelemetry',
            additionalProperties: {
                metricName: name,
                error: error.message,
                stack: error.stack
            }
        })
    }
}

/**
 * Traces a performance operation
 * @param {string} name - The name of the operation
 * @param {Function} fn - The function to trace
 * @returns {Promise<any>} The result of the function
 */
export const traceChildPerformance = async (name, fn) => {
    const span = createChildSpan(name)
    if (!span) {
        return fn()
    }

    try {
        const result = await fn()
        endSpan(span)
        return result
    } catch (error) {
        span.setStatus({
            code: SpanStatusCode.ERROR,
            message: error.message
        })
        endSpan(span)
        throw error
    }
}
