# Page Designer PWA Integration - Low Level Design Document (Cursor Generated)

## Table of Contents

1. [Overview](#overview)
2. [Architecture Overview](#architecture-overview)
3. [Communication Protocol](#communication-protocol)
4. [Component Registry System](#component-registry-system)
5. [Design Mode Integration](#design-mode-integration)
6. [Metadata Infrastructure](#metadata-infrastructure)
7. [Performance Considerations](#performance-considerations)
8. [Separation of Concerns](#separation-of-concerns)
9. [Flexibility & Extensibility](#flexibility--extensibility)
10. [Security Considerations](#security-considerations)
11. [Error Handling](#error-handling)
12. [Testing Strategy](#testing-strategy)
13. [Deployment Considerations](#deployment-considerations)

## Overview

The Page Designer PWA Integration enables real-time editing of PWA storefronts through a bidirectional communication channel between the Angular-based Page Designer editor and React-based PWA storefronts. This integration supports composable commerce by allowing visual editing of headless commerce experiences.

### Key Objectives

- Enable live editing of PWA components from Page Designer
- Maintain separation between design-time and runtime concerns
- Provide flexible component registration and metadata management
- Ensure optimal performance during design operations
- Support extensible component architecture

## Architecture Overview

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    Page Designer (Angular)                      │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  │
│  │   Editor UI     │  │   Store         │  │   Effects       │  │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ iframe communication
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    PWA Storefront (React)                      │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  │
│  │ Smart Components│  │ Design Context  │  │ Component Reg.  │  │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

### Core Components

#### Page Designer Side

- **Iframe Service**: Manages communication with PWA iframe
- **Effects Layer**: Handles side effects and state synchronization
- **Store**: Manages editor state and component metadata
- **Directives**: Provides iframe integration and event handling

#### PWA Side

- **Smart Components**: Wrapped components with design capabilities
- **Design Context**: Provides design mode state and utilities
- **Component Registry**: Manages component registration and metadata
- **Parent Connection**: Handles communication with parent window

## Communication Protocol

### Message Structure

```typescript
interface Message {
    mType: string // Message type identifier
    mBody: any // Message payload
    timestamp?: number // Optional timestamp for ordering
    id?: string // Optional message ID for correlation
}
```

### Message Types

#### From PWA to Page Designer

```typescript
// Component Registration
{
  mType: 'builder-register-component',
  mBody: {
    name: string;
    inputs: ComponentInput[];
    canHaveChildren: boolean;
  }
}

// Component Selection
{
  mType: 'builder-component-selected',
  mBody: {
    id: string;  // Format: "ComponentName|componentId"
  }
}

// Component Highlighting
{
  mType: 'builder-component-highlighted',
  mBody: {
    id: string;
  }
}
```

#### From Page Designer to PWA

```typescript
// Drag State Management
{
  mType: 'builder-drag-state',
  mBody: {
    active: boolean;
  }
}

// Component Property Updates
{
  mType: 'builder-component-props-updated',
  mBody: {
    componentId: string;
    props: Record<string, any>;
  }
}
```

### Communication Implementation

#### Page Designer Iframe Service

```typescript
@Injectable()
export class IFrameTools {
    private _iFrame: HTMLIFrameElement

    eventMessageToEffect(type: string, body: any, writable: boolean): Action {
        const permitted = curry(IFrameTools.hasPermission)(writable)

        switch (type) {
            case 'builder-register-component':
                return new componentTypes.Add(body)
            case 'builder-component-selected':
                return new canvas.RequestSelect(body.id)
            case 'builder-component-highlighted':
                return new canvas.RequestHover(body.id)
            // ... other cases
        }
    }

    sendEvent(eventName: string, targetOrigin: string, body?: any) {
        if (this._iFrame?.contentWindow) {
            this._iFrame.contentWindow.postMessage(
                JSON.stringify({mType: eventName, mBody: body}),
                targetOrigin
            )
        }
    }
}
```

#### PWA Parent Connection

```typescript
export const useParentConnection = (
    isDesignMode: boolean,
    onMessage: (event: MessageEvent) => void
) => {
    const sendMessage = useCallback(
        (mType: string, mBody: any) => {
            if (isDesignMode && window.parent !== window) {
                window.parent.postMessage(JSON.stringify({mType, mBody}), '*')
            }
        },
        [isDesignMode]
    )

    useEffect(() => {
        if (!isDesignMode) return

        const handleMessage = (event: MessageEvent) => {
            onMessage(event)
        }

        window.addEventListener('message', handleMessage)
        return () => window.removeEventListener('message', handleMessage)
    }, [isDesignMode, onMessage])

    return {sendMessage}
}
```

## Component Registry System

### Registry Architecture

```typescript
interface ComponentRegistry {
    components: Map<string, ComponentDefinition>
    register(name: string, definition: ComponentDefinition): void
    get(name: string): ComponentDefinition | undefined
    getAll(): ComponentDefinition[]
}

interface ComponentDefinition {
    name: string
    inputs: ComponentInput[]
    canHaveChildren: boolean
    component: React.ComponentType
    metadata?: ComponentMetadata
}

interface ComponentInput {
    name: string
    type: 'text' | 'number' | 'boolean' | 'image' | 'markup' | 'select'
    required?: boolean
    defaultValue?: any
    options?: string[] // For select type
}
```

### Automatic Registration

#### Registry Generation Script

```javascript
// scripts/generate-registry.js
const files = glob.sync('packages/**/src/**/*.tsx', {
  cwd: ROOT,
  absolute: true,
  ignore: ['**/node_modules/**']
});

files.forEach((filePath) => {
  const code = fs.readFileSync(filePath, 'utf8');

  if (!code.includes('smartComponent(')) return;

  try {
    const parsed = reactDocgen.parse(code);
    const { displayName, props } = parsed;

    const inputs = Object.entries(props || {}).map(([name, prop]: any) => ({
      name,
      type: prop.type?.name || 'text'
    }));

    registrations.push(
      `PD.registerComponent(${displayName}, {
        name: "${displayName}",
        inputs: [${inputs.map(i => JSON.stringify(i)).join(', ')}],
        canHaveChildren: false
      });`
    );
  } catch (err) {
    console.warn(`⚠️ Could not parse ${filePath}: ${err.message}`);
  }
});
```

### Smart Component Wrapper

```typescript
export const smartComponent = (Component: React.ComponentType) => {
  const Wrapped = (props: any) => {
    const location = useLocation();
    const isDesignMode = useMemo(() => {
      const query = new URLSearchParams(location.search);
      return query.get('design') === 'true';
    }, [location.search]);

    const componentId = props.componentid ||
      `${Component.displayName || Component.name || 'Component'}`;

    const [dragActive, setDragActive] = useState(false);
    const [liveProps, setLiveProps] = useState(props);
    const [isMouseOver, setIsMouseOver] = useState(false);

    const handleMessage = useCallback((event: MessageEvent) => {
      let data;
      try {
        data = JSON.parse(event.data);
      } catch (error) {
        console.error('Failed to parse message data:', error);
        return;
      }

      const { mType, mBody } = data || {};

      switch (mType) {
        case 'builder-drag-state':
          setDragActive(!!mBody?.active);
          break;
        case 'builder-component-props-updated':
          if (mBody?.componentId === componentId) {
            setLiveProps((prev: any) => ({
              ...prev,
              ...mBody.props
            }));
          }
          break;
      }
    }, [componentId]);

    const { sendMessage } = useParentConnection(isDesignMode, handleMessage);

    // Event handlers for design interactions
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();

      document
        .querySelector('.pd-smart-component.pd-selected')
        ?.classList.remove('pd-selected');
      e.currentTarget.classList.add('pd-selected');

      sendMessage('builder-component-selected', {
        id: `${Component.displayName}|${componentId}`
      });
    };

    const handleMouseEnter = () => {
      setIsMouseOver(true);
      !dragActive && sendMessage('builder-component-highlighted', componentId);
    };

    // Render with design mode enhancements
    const classNames = [
      'pd-smart-component',
      props.canAcceptChildren ? DROP_REGION_CLASS : '',
      dragActive && isMouseOver && props.canAcceptChildren ? DROP_ACTIVE_CLASS : '',
    ].filter(Boolean).join(' ');

    return (
      <div
        className={classNames}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsMouseOver(false)}
        data-component-id={componentId}
      >
        <Component {...liveProps} />
      </div>
    );
  };

  return Wrapped;
};
```

## Design Mode Integration

### URL-Based Activation

```typescript
// Design mode detection
const isDesignMode = useMemo(() => {
    const query = new URLSearchParams(location.search)
    return query.get('design') === 'true'
}, [location.search])
```

### Design Context Provider

```typescript
interface DesignModeContextValue {
  isDesignMode: boolean;
  selectedComponent: string | null;
  highlightedComponent: string | null;
  setSelectedComponent: (id: string | null) => void;
  setHighlightedComponent: (id: string | null) => void;
}

const DesignModeContext = createContext<DesignModeContextValue | null>(null);

export const DesignModeProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
  const [highlightedComponent, setHighlightedComponent] = useState<string | null>(null);

  const location = useLocation();
  const isDesignMode = useMemo(() => {
    const query = new URLSearchParams(location.search);
    return query.get('design') === 'true';
  }, [location.search]);

  const value = useMemo(() => ({
    isDesignMode,
    selectedComponent,
    highlightedComponent,
    setSelectedComponent,
    setHighlightedComponent
  }), [isDesignMode, selectedComponent, highlightedComponent]);

  return (
    <DesignModeContext.Provider value={value}>
      {children}
    </DesignModeContext.Provider>
  );
};
```

## Metadata Infrastructure

### Component Type Definitions

```javascript
// metadata/componentTypes/hero.js
export const hero = {
    name: 'Hero Component',
    description: 'Hero banner component with image, title and call-to-action button',
    group: 'commerce_assets_pwa',
    attribute_definition_groups: [
        {
            id: 'heroContent',
            name: 'Hero Content',
            description: 'Hero banner content and styling',
            attribute_definitions: [
                {
                    id: 'title',
                    name: 'Hero Title',
                    description: 'The main title displayed in the hero section',
                    type: 'markup',
                    required: true
                },
                {
                    id: 'img',
                    name: 'Hero Image',
                    description: 'The hero background image',
                    type: 'image',
                    required: false
                }
            ]
        }
    ],
    region_definitions: [],
    id: 'commerce_assets_pwa.hero'
}
```

### Page Type Definitions

```javascript
// metadata/pageTypes/home.js
export const home = {
    name: 'Home Page',
    description: 'Main landing page for the store',
    id: 'commerce_assets_pwa.home',
    region_definitions: [
        {
            id: 'main',
            name: 'Main Content',
            description: 'Primary content area'
        },
        {
            id: 'sidebar',
            name: 'Sidebar',
            description: 'Secondary content area'
        }
    ]
}
```

### Metadata Generation

```javascript
// scripts/metadata/generate-page-metadata.js
const generateMetadata = () => {
    const componentTypes = {}
    const pageTypes = {}
    const aspectTypes = {}

    // Scan component directories
    const componentDirs = fs.readdirSync(COMPONENTS_DIR)
    componentDirs.forEach((dir) => {
        const metadataFile = path.join(COMPONENTS_DIR, dir, 'metadata.js')
        if (fs.existsSync(metadataFile)) {
            const metadata = require(metadataFile)
            componentTypes[metadata.id] = metadata
        }
    })

    // Generate consolidated metadata
    const output = {
        componentTypes,
        pageTypes,
        aspectTypes,
        generatedAt: new Date().toISOString()
    }

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2))
}
```

## Performance Considerations

### Message Batching

```typescript
// Batch multiple property updates to reduce message frequency
class MessageBatcher {
    private batchTimeout: NodeJS.Timeout | null = null
    private pendingMessages: Array<{type: string; body: any}> = []

    addMessage(type: string, body: any) {
        this.pendingMessages.push({type, body})

        if (!this.batchTimeout) {
            this.batchTimeout = setTimeout(() => {
                this.flush()
            }, 16) // ~60fps
        }
    }

    private flush() {
        if (this.batchTimeout) {
            clearTimeout(this.batchTimeout)
            this.batchTimeout = null
        }

        if (this.pendingMessages.length > 0) {
            // Send batched messages
            this.sendBatchedMessages(this.pendingMessages)
            this.pendingMessages = []
        }
    }
}
```

### Component Lazy Loading

```typescript
// Lazy load components only when needed in design mode
const LazySmartComponent = lazy(() => import('./SmartComponent'));

const ComponentWrapper = ({ componentName, ...props }) => {
  const { isDesignMode } = useDesignMode();

  if (!isDesignMode) {
    return <RegularComponent {...props} />;
  }

  return (
    <Suspense fallback={<ComponentSkeleton />}>
      <LazySmartComponent componentName={componentName} {...props} />
    </Suspense>
  );
};
```

### Memory Management

```typescript
// Clean up event listeners and references
useEffect(() => {
    if (!isDesignMode) return

    const handleMessage = (event: MessageEvent) => {
        // Handle message
    }

    window.addEventListener('message', handleMessage)

    return () => {
        window.removeEventListener('message', handleMessage)
        // Clean up any stored references
        setSelectedComponent(null)
        setHighlightedComponent(null)
    }
}, [isDesignMode])
```

### Virtual Scrolling for Large Lists

```typescript
// Use virtual scrolling for component palettes with many items
const VirtualComponentList = ({ components, onSelect }) => {
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 50 });

  const visibleComponents = components.slice(visibleRange.start, visibleRange.end);

  return (
    <div style={{ height: '400px', overflow: 'auto' }}>
      {visibleComponents.map((component, index) => (
        <ComponentItem
          key={component.id}
          component={component}
          onSelect={onSelect}
          style={{
            position: 'absolute',
            top: `${(visibleRange.start + index) * 40}px`
          }}
        />
      ))}
    </div>
  );
};
```

## Separation of Concerns

### Layer Separation

#### 1. Presentation Layer (UI Components)

```typescript
// Pure UI components without business logic
const HeroComponent = ({ title, image, ctaText, onCtaClick }) => (
  <div className="hero">
    <img src={image} alt={title} />
    <h1>{title}</h1>
    <button onClick={onCtaClick}>{ctaText}</button>
  </div>
);
```

#### 2. Design Layer (Smart Wrappers)

```typescript
// Design mode functionality wrapper
const SmartHero = smartComponent(HeroComponent)
```

#### 3. Communication Layer (Message Handling)

```typescript
// Isolated message handling logic
class MessageHandler {
    private handlers = new Map<string, (data: any) => void>()

    register(type: string, handler: (data: any) => void) {
        this.handlers.set(type, handler)
    }

    handle(message: Message) {
        const handler = this.handlers.get(message.mType)
        if (handler) {
            handler(message.mBody)
        }
    }
}
```

#### 4. State Management Layer

```typescript
// Centralized state management
interface DesignState {
    selectedComponent: string | null
    highlightedComponent: string | null
    dragState: DragState
    componentRegistry: ComponentRegistry
}

const designReducer = (state: DesignState, action: DesignAction): DesignState => {
    switch (action.type) {
        case 'SELECT_COMPONENT':
            return {...state, selectedComponent: action.payload}
        case 'HIGHLIGHT_COMPONENT':
            return {...state, highlightedComponent: action.payload}
        // ... other cases
    }
}
```

### Module Boundaries

```
src/
├── components/           # Pure UI components
├── design/              # Design mode functionality
│   ├── smartComponents/
│   ├── context/
│   └── hooks/
├── communication/       # Message handling
│   ├── handlers/
│   ├── types/
│   └── utils/
├── metadata/           # Component metadata
│   ├── componentTypes/
│   ├── pageTypes/
│   └── generators/
└── registry/           # Component registration
    ├── registry.ts
    ├── generators/
    └── types/
```

## Flexibility & Extensibility

### Plugin Architecture

```typescript
// Plugin system for extending functionality
interface DesignPlugin {
    name: string
    version: string
    initialize: (context: DesignContext) => void
    cleanup: () => void
}

class PluginManager {
    private plugins = new Map<string, DesignPlugin>()

    register(plugin: DesignPlugin) {
        this.plugins.set(plugin.name, plugin)
        plugin.initialize(this.context)
    }

    unregister(name: string) {
        const plugin = this.plugins.get(name)
        if (plugin) {
            plugin.cleanup()
            this.plugins.delete(name)
        }
    }
}
```

### Custom Component Types

```typescript
// Extensible component type system
interface ComponentTypeDefinition {
    name: string
    category: string
    icon?: string
    inputs: InputDefinition[]
    outputs?: OutputDefinition[]
    validation?: ValidationRule[]
    customRenderer?: React.ComponentType
}

// Register custom component types
PD.registerComponentType('custom-chart', {
    name: 'Custom Chart',
    category: 'Data Visualization',
    inputs: [
        {name: 'data', type: 'json', required: true},
        {name: 'chartType', type: 'select', options: ['bar', 'line', 'pie']}
    ],
    customRenderer: CustomChartRenderer
})
```

### Configuration-Driven Behavior

```typescript
// Configuration-based component behavior
interface ComponentConfig {
    designMode: {
        selectable: boolean
        draggable: boolean
        resizable: boolean
        deletable: boolean
        properties: PropertyConfig[]
    }
    runtime: {
        cacheable: boolean
        ssr: boolean
        hydration: 'eager' | 'lazy'
    }
}

const componentConfigs = new Map<string, ComponentConfig>()

// Apply configuration to components
const applyConfig = (component: React.ComponentType, config: ComponentConfig) => {
    // Apply design mode behavior
    if (config.designMode.selectable) {
        component = makeSelectable(component)
    }

    if (config.designMode.draggable) {
        component = makeDraggable(component)
    }

    return component
}
```

## Security Considerations

### Message Validation

```typescript
// Validate incoming messages
const validateMessage = (message: any): message is ValidMessage => {
    if (!message || typeof message !== 'object') return false
    if (typeof message.mType !== 'string') return false
    if (!ALLOWED_MESSAGE_TYPES.includes(message.mType)) return false

    // Validate message body based on type
    switch (message.mType) {
        case 'builder-component-selected':
            return typeof message.mBody?.id === 'string'
        case 'builder-component-props-updated':
            return (
                typeof message.mBody?.componentId === 'string' &&
                typeof message.mBody?.props === 'object'
            )
        default:
            return true
    }
}

// Use in message handler
const handleMessage = (event: MessageEvent) => {
    let data
    try {
        data = JSON.parse(event.data)
    } catch (error) {
        console.error('Invalid message format')
        return
    }

    if (!validateMessage(data)) {
        console.error('Invalid message content')
        return
    }

    // Process valid message
    processMessage(data)
}
```

### Origin Validation

```typescript
// Validate message origin
const ALLOWED_ORIGINS = ['http://localhost:8081', 'https://page-designer.example.com']

const validateOrigin = (origin: string): boolean => {
    return ALLOWED_ORIGINS.includes(origin)
}

// Use in message listener
window.addEventListener('message', (event) => {
    if (!validateOrigin(event.origin)) {
        console.error('Message from unauthorized origin:', event.origin)
        return
    }

    handleMessage(event)
})
```

### Content Security Policy

```html
<!-- CSP headers for iframe communication -->
<meta
    http-equiv="Content-Security-Policy"
    content="frame-ancestors 'self' http://localhost:8081 https://page-designer.example.com;"
/>
```

## Error Handling

### Graceful Degradation

```typescript
// Fallback behavior when design mode fails
const DesignModeWrapper = ({ children, fallback }) => {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  if (hasError) {
    console.warn('Design mode failed, falling back to runtime mode:', error);
    return fallback || children;
  }

  return (
    <ErrorBoundary
      onError={(error) => {
        setHasError(true);
        setError(error);
      }}
    >
      {children}
    </ErrorBoundary>
  );
};
```

### Error Recovery

```typescript
// Automatic recovery from communication errors
class CommunicationManager {
    private reconnectAttempts = 0
    private maxReconnectAttempts = 3
    private reconnectDelay = 1000

    private handleConnectionError = () => {
        if (this.reconnectAttempts < this.maxReconnectAttempts) {
            setTimeout(() => {
                this.reconnectAttempts++
                this.establishConnection()
            }, this.reconnectDelay * this.reconnectAttempts)
        } else {
            this.fallbackToRuntimeMode()
        }
    }

    private fallbackToRuntimeMode = () => {
        console.warn('Falling back to runtime mode due to connection issues')
        // Disable design mode features
        this.disableDesignMode()
    }
}
```

### Error Reporting

```typescript
// Centralized error reporting
class ErrorReporter {
    private errors: Error[] = []

    report(error: Error, context?: any) {
        this.errors.push(error)

        // Log error with context
        console.error('Design mode error:', {
            error: error.message,
            stack: error.stack,
            context,
            timestamp: new Date().toISOString()
        })

        // Send to monitoring service in production
        if (process.env.NODE_ENV === 'production') {
            this.sendToMonitoring(error, context)
        }
    }

    private sendToMonitoring = (error: Error, context?: any) => {
        // Implementation for production error reporting
    }
}
```

## Testing Strategy

### Unit Testing

```typescript
// Test smart component wrapper
describe('smartComponent', () => {
  it('should wrap component with design mode functionality', () => {
    const TestComponent = () => <div>Test</div>;
    const SmartTestComponent = smartComponent(TestComponent);

    const { container } = render(
      <DesignModeProvider>
        <SmartTestComponent />
      </DesignModeProvider>
    );

    expect(container.querySelector('.pd-smart-component')).toBeInTheDocument();
  });

  it('should handle component selection', () => {
    const mockSendMessage = jest.fn();
    jest.spyOn(useParentConnection, 'default').mockReturnValue({
      sendMessage: mockSendMessage
    });

    const TestComponent = () => <div>Test</div>;
    const SmartTestComponent = smartComponent(TestComponent);

    render(
      <DesignModeProvider>
        <SmartTestComponent />
      </DesignModeProvider>
    );

    fireEvent.click(screen.getByText('Test'));

    expect(mockSendMessage).toHaveBeenCalledWith('builder-component-selected', {
      id: 'TestComponent|TestComponent'
    });
  });
});
```

### Integration Testing

```typescript
// Test iframe communication
describe('Iframe Communication', () => {
    it('should handle message exchange between PD and PWA', async () => {
        // Setup iframe
        const iframe = document.createElement('iframe')
        document.body.appendChild(iframe)

        // Send message from PWA to PD
        const message = {
            mType: 'builder-component-selected',
            mBody: {id: 'test-component'}
        }

        iframe.contentWindow?.postMessage(JSON.stringify(message), '*')

        // Wait for response
        await waitFor(() => {
            expect(mockStore.dispatch).toHaveBeenCalledWith(
                expect.objectContaining({
                    type: 'canvas/REQUEST_SELECT',
                    payload: 'test-component'
                })
            )
        })
    })
})
```

### E2E Testing

```typescript
// Cypress E2E tests
describe('Page Designer PWA Integration', () => {
    it('should allow editing PWA components', () => {
        // Navigate to PWA with design mode
        cy.visit('/?design=true')

        // Wait for design mode to initialize
        cy.get('.pd-smart-component').should('be.visible')

        // Click on a component to select it
        cy.get('.pd-smart-component').first().click()

        // Verify component is selected
        cy.get('.pd-smart-component.pd-selected').should('exist')

        // Verify selection is communicated to PD
        cy.window().then((win) => {
            expect(win.parent.postMessage).toHaveBeenCalledWith(
                expect.stringContaining('builder-component-selected'),
                '*'
            )
        })
    })
})
```

## Deployment Considerations

### Environment Configuration

```typescript
// Environment-specific configuration
interface EnvironmentConfig {
    designMode: {
        enabled: boolean
        allowedOrigins: string[]
        maxMessageSize: number
        timeout: number
    }
    performance: {
        enableBatching: boolean
        batchTimeout: number
        enableLazyLoading: boolean
    }
    security: {
        enableOriginValidation: boolean
        enableMessageValidation: boolean
        enableCSP: boolean
    }
}

const getEnvironmentConfig = (): EnvironmentConfig => {
    switch (process.env.NODE_ENV) {
        case 'development':
            return {
                designMode: {
                    enabled: true,
                    allowedOrigins: ['http://localhost:*'],
                    maxMessageSize: 1024 * 1024,
                    timeout: 5000
                },
                performance: {
                    enableBatching: false,
                    batchTimeout: 16,
                    enableLazyLoading: false
                },
                security: {
                    enableOriginValidation: false,
                    enableMessageValidation: true,
                    enableCSP: false
                }
            }
        case 'production':
            return {
                designMode: {
                    enabled: true,
                    allowedOrigins: ['https://page-designer.example.com'],
                    maxMessageSize: 512 * 1024,
                    timeout: 3000
                },
                performance: {
                    enableBatching: true,
                    batchTimeout: 16,
                    enableLazyLoading: true
                },
                security: {
                    enableOriginValidation: true,
                    enableMessageValidation: true,
                    enableCSP: true
                }
            }
        default:
            return getEnvironmentConfig()
    }
}
```

### Build Optimization

```javascript
// webpack.config.js - Optimize for design mode
module.exports = {
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                designMode: {
                    test: /[\\/]design[\\/]/,
                    name: 'design-mode',
                    chunks: 'async',
                    priority: 10
                },
                components: {
                    test: /[\\/]components[\\/]/,
                    name: 'components',
                    chunks: 'async',
                    priority: 5
                }
            }
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.DESIGN_MODE_ENABLED': JSON.stringify(
                process.env.DESIGN_MODE_ENABLED === 'true'
            )
        })
    ]
}
```

### Monitoring and Observability

```typescript
// Performance monitoring
class PerformanceMonitor {
    private metrics = {
        messageLatency: [] as number[],
        componentLoadTime: [] as number[],
        memoryUsage: [] as number[]
    }

    measureMessageLatency = (startTime: number) => {
        const latency = performance.now() - startTime
        this.metrics.messageLatency.push(latency)

        if (latency > 100) {
            console.warn('Slow message processing:', latency)
        }
    }

    getMetrics = () => ({
        avgMessageLatency: this.average(this.metrics.messageLatency),
        avgComponentLoadTime: this.average(this.metrics.componentLoadTime),
        avgMemoryUsage: this.average(this.metrics.memoryUsage)
    })

    private average = (array: number[]) => array.reduce((a, b) => a + b, 0) / array.length
}
```

---

## Conclusion

This low-level design document provides a comprehensive technical foundation for the Page Designer PWA integration. The architecture emphasizes:

1. **Clear separation of concerns** between design-time and runtime functionality
2. **Performance optimization** through batching, lazy loading, and efficient communication
3. **Flexibility and extensibility** through plugin architecture and configuration-driven behavior
4. **Security** through message validation and origin checking
5. **Robust error handling** with graceful degradation and recovery mechanisms
6. **Comprehensive testing** strategy covering unit, integration, and E2E scenarios
7. **Production-ready deployment** considerations with environment-specific configurations

The integration successfully bridges the gap between traditional CMS editing and modern headless commerce experiences, enabling real-time visual editing of PWA storefronts while maintaining the performance and flexibility required for production use.
