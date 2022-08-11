/*
 * @Author: linzeguang
 * @Date: 2022-08-11 16:07:35
 * @LastEditTime: 2022-08-11 18:18:33
 * @LastEditors: linzeguang
 * @Description: 全局 Providers
 */
import React, { PropsWithChildren } from 'react'
import { FocaProvider } from 'foca'

const Providers: React.FC<PropsWithChildren> = (props) => {
  return <FocaProvider>{props.children}</FocaProvider>
}

export default Providers
