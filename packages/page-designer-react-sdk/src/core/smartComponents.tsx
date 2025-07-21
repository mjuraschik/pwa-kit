import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react'
import {useLocation} from 'react-router-dom'
import {useParentConnection} from './parentConnection'

const DROP_REGION_CLASS = 'pd-drop-region'
const DROP_ACTIVE_CLASS = 'pd-drop-active'
const DROP_INDICATOR_ABOVE = 'pd-drop-indicator--above'
const DROP_INDICATOR_BELOW = 'pd-drop-indicator--below'

export const smartComponent = (Component: React.ComponentType) => {
    const Wrapped = (props: any) => {
        const location = useLocation()
        const isDesignMode = useMemo(() => {
            const query = new URLSearchParams(location.search)
            return query.get('design') === 'true'
        }, [location.search])

        const ref = useRef<HTMLDivElement>(null)

        const componentId =
            props.componentId || `${Component.displayName || Component.name || 'Component'}`

        const [dragActive, setDragActive] = useState(false)
        const [dropPosition, setDropPosition] = useState<'above' | 'below' | null>(null)
        const [liveProps, setLiveProps] = useState(props)

        const handleMessage = useCallback((event: MessageEvent) => {
            const {mType, mBody} = event.data || {}

            switch (mType) {
                case 'builder-drag-state':
                    setDragActive(!!mBody?.active)
                    break
                case 'builder-component-props-updated':
                    if (mBody?.componentId === componentId) {
                        setLiveProps((prev: any) => ({
                            ...prev,
                            ...mBody.props
                        }))
                    }
                    break
                default:
                    break
            }
        }, [componentId])

        const {sendMessage} = useParentConnection(isDesignMode, handleMessage)

        const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
            e.preventDefault()
            e.stopPropagation()

            document.querySelector('.pd-smart-component.pd-selected')?.classList.remove('pd-selected')
            e.currentTarget.classList.add('pd-selected')

            sendMessage('builder-component-selected', {id: `${Component.displayName}|${componentId}`})
        }

        const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
            if (!dragActive) return
            const rect = e.currentTarget.getBoundingClientRect()
            const y = e.clientY - rect.top
            setDropPosition(y < rect.height / 2 ? 'above' : 'below')
        }

        const handleMouseLeave = () => {
            setDropPosition(null)
        }

        const handleHover = () => {
            sendMessage('builder-component-highlighted', componentId)
        }

        useEffect(() => {
            if (!isDesignMode) return

            const handleClickOutside = (e: MouseEvent) => {
                const wrapper = document.querySelector('.pd-smart-component.pd-selected')
                if (wrapper && !wrapper.contains(e.target as Node)) {
                    wrapper.classList.remove('pd-selected')
                }
            }

            document.addEventListener('click', handleClickOutside)
            return () => document.removeEventListener('click', handleClickOutside)
        }, [isDesignMode])

        const dropLineAbove = dragActive && dropPosition === 'above'
        const dropLineBelow = dragActive && dropPosition === 'below'

        const classNames = [
            'pd-smart-component',
            DROP_REGION_CLASS,
            dragActive ? DROP_ACTIVE_CLASS : '',
            dropLineAbove ? DROP_INDICATOR_ABOVE : '',
            dropLineBelow ? DROP_INDICATOR_BELOW : ''
        ].filter(Boolean).join(' ')

        return (
            <div
                ref={ref}
                className={classNames}
                onClick={handleClick}
                onMouseOver={handleHover}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
                data-component-id={componentId}
            >
                {dropLineAbove && <div className="pd-drop-line pd-drop-line--above" />}
                {dropLineBelow && <div className="pd-drop-line pd-drop-line--below" />}
                <Component {...liveProps} />
            </div>
        )
    }

    Wrapped.displayName = `Smart(${Component.displayName || Component.name || 'Component'})`
    return Wrapped
}
