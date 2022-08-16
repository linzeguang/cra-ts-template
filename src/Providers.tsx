import React, { PropsWithChildren } from 'react'
import { FocaProvider } from 'foca'
import { ThemeProvider } from 'styled-components'
import { MotionProvider, Web3Provider } from 'zewide'
import { theme } from 'zewide'

const Providers: React.FC<PropsWithChildren> = (props) => {
  return (
    <Web3Provider>
      <FocaProvider>
        <ThemeProvider theme={theme}>
          <MotionProvider>{props.children}</MotionProvider>
        </ThemeProvider>
      </FocaProvider>
    </Web3Provider>
  )
}

export default Providers
