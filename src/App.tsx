import React, { useEffect } from 'react'
import { useComputed, useLoading, useModel } from 'foca'
import { templateModel } from 'model'

const App: React.FC = () => {
  const { num1, num2 } = useModel(templateModel)
  const sum = useComputed(templateModel.sum)
  const loading = useLoading(templateModel.fetchNum)

  useEffect(() => {
    templateModel.fetchNum()
  }, [])

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
