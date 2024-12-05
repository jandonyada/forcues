"use client"
import React from 'react'
import { SessionProvider } from 'next-auth/react'

const Provider = ({ children, session }) => { // higher-order component; we'll be wrapping other components within it
  return (
    <SessionProvider session={session}> {/*session goes in here*/}
      {children}
    </SessionProvider> // within it, we must render the children
  )
}

export default Provider