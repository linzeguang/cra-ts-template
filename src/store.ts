import { engines, Middleware, store } from 'foca'
import { createLogger } from 'redux-logger'

import { templateModel } from './stores'

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
