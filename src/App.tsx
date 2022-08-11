/*
 * @Author: linzeguang
 * @Date: 2022-08-11 15:26:49
 * @LastEditTime: 2022-08-11 18:54:27
 * @LastEditors: linzeguang
 * @Description: App 入口
 */

import React from 'react'
import { useComputed, useLoading, useModel } from 'foca'
import { templateModel } from 'model'

const App: React.FC = () => {
  const { num1, num2 } = useModel(templateModel)
  const sum = useComputed(templateModel.sum)
  const loading = useLoading(templateModel.fetchNum)

  return (
    <div>
      <div>loading: {loading ? 'loading...' : 'OK'}</div>
      <div>num1: {num1}</div>
      <div>num2: {num2}</div>
      <div>sum: {sum}</div>
    </div>
  )
}

export default App
