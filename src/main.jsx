import React from 'react'
import ReactDOM from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import App from './App.jsx'
import { initClickTracking } from './lib/track.js'
import { applyTheme, getSavedTheme } from './lib/theme.js'
import './index.css'

// Restore the visitor's saved light/dark choice
applyTheme(getSavedTheme())

// Record clicks on any element marked with data-track="..."
initClickTracking()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>,
)
