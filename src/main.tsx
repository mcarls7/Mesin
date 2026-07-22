import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import ErrorBoundary from './components/ErrorBoundary'
import Analytics from './components/Analytics'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
      <Analytics />
    </BrowserRouter>
  </StrictMode>,
)
