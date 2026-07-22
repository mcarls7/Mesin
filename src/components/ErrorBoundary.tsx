import { Component, type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: unknown) {
    console.error('Application error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-midnight">
          <div className="text-center">
            <h1 className="font-display text-4xl md:text-5xl text-gold mb-4">Something went wrong</h1>
            <p className="text-text-muted mb-8">Please refresh the page or try again later.</p>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-gold to-ember text-midnight font-bold hover:shadow-lg hover:shadow-gold/20 transition-all"
            >
              Try Again
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
