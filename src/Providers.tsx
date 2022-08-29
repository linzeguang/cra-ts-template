import React, { PropsWithChildren } from 'react'
import { FocaProvider } from 'foca'
import { ModalProvider, MotionProvider, theme, Web3Provider } from 'zewide'

import { ThemeProvider } from '@emotion/react'

const Providers: React.FC<PropsWithChildren> = (props) => {
  return (
    <Web3Provider>
      <FocaProvider>
        <ThemeProvider theme={theme}>
          <MotionProvider>
            <ModalProvider>{props.children}</ModalProvider>
          </MotionProvider>
        </ThemeProvider>
      </FocaProvider>
    </Web3Provider>
  )
}

export default Providers
