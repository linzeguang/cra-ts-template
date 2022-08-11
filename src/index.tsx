/*
 * @Author: linzeguang
 * @Date: 2022-08-11 15:26:49
 * @LastEditTime: 2022-08-11 18:50:54
 * @LastEditors: linzeguang
 * @Description: 工程入口
 */

import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

// 注入foca
import './store'

import Providers from 'Providers'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
)
