import React from 'react'
import ReactDOM from 'react-dom/client'
import { ResetCSS } from 'zewide'

import App from './App'
import Providers from './Providers'

// 注入foca
import './store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <ResetCSS />
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
)
