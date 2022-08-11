/*
 * @Author: linzeguang
 * @Date: 2022-08-11 15:26:49
 * @LastEditTime: 2022-08-11 17:35:27
 * @LastEditors: linzeguang
 * @Description: 工程入口
 */

import App from './App'
import ReactDOM from 'react-dom/client'

import React from 'react'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
