import React, { useEffect } from 'react'
import { useComputed, useLoading, useModel } from 'foca'
import { templateModel } from 'model'
import {
  Box,
  Button,
  connections,
  encrypt,
  FlexRow,
  toThousand,
  useAuth,
  useLocalStorage,
} from 'zewide'

import { useWeb3React } from '@web3-react/core'

const App: React.FC = () => {
  const { account } = useWeb3React()
  const { login, logout, selectedWallet, status } = useAuth()
  const { num1, num2 } = useModel(templateModel)
  const sum = useComputed(templateModel.sum)
  const loading = useLoading(templateModel.fetchNum)
  const [count, setCount] = useLocalStorage('count', 0)

  useEffect(() => {
    templateModel.fetchNum()
  }, [])

  return (
    <Box>
      <div>loading: {loading ? 'loading...' : 'OK'}</div>
      <div>num1: {num1}</div>
      <div>num2: {num2}</div>
      <div>sum: {sum}</div>
      <div>
        count: {count}
        <Button onClick={() => setCount(count + 1)}>+</Button>
        <Button onClick={() => setCount(count - 1)}>-</Button>
      </div>
      <div>toThousand: {toThousand(10000000000)}</div>
      <div>account: {account}</div>
      <div>account: {encrypt(account || '')}</div>
      <div>selectedWallet: {selectedWallet}</div>
      <div>status: {status}</div>
      <Button onClick={() => logout()}>disconnect</Button>
      <FlexRow>
        {connections.map((connection) => (
          <Button key={connection.type} onClick={() => login(connection)}>
            {connection.type}
          </Button>
        ))}
      </FlexRow>
    </Box>
  )
}

export default App
