import React, { PropsWithChildren } from 'react'
import { FocaProvider } from 'foca'

const Providers: React.FC<PropsWithChildren> = (props) => {
  return <FocaProvider>{props.children}</FocaProvider>
}

export default Providers
