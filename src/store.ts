/*
 * @Author: linzeguang
 * @Date: 2022-08-11 18:14:34
 * @LastEditTime: 2022-08-11 18:38:15
 * @LastEditors: linzeguang
 * @Description: 集成 foca.js 状态管理
 */
import { engines, Middleware, store } from 'foca'
import { templateModel } from 'model'
import { createLogger } from 'redux-logger'

// 中间件
const middleware: Middleware[] = []

if (process.env.NODE_ENV !== 'production') {
  middleware.push(
    createLogger({
      collapsed: true,
      diff: true,
      duration: true,
      logErrors: true,
    }),
  )
}

// 初始化store
store.init({
  // 控制台日志
  compose: 'redux-devtools',
  // 中间件
  middleware,
  // 持久化
  persist: [
    {
      key: `template_${process.env.NODE_ENV}`,
      version: __BUILD_TIME__,
      engine: engines.localStorage, // 或 engines.sessionStorage
      models: [templateModel],
    },
  ],
})

if (module.hot) {
  module.hot.accept(() => {
    console.log('Hot updated: store')
  })
}
