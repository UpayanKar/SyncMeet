
import StreamVideoProvider from '@/providers/StreamClientProvider'
import React, { Children, ReactNode } from 'react'

const RootLayout = ({children} : {children:ReactNode}) => {
  return (
    <StreamVideoProvider>
        {children}
    </StreamVideoProvider>
  )
}

export default RootLayout
