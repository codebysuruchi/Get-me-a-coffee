"use client"
import { SessionProvider } from "next-auth/react"

export default function SessionWrappper({ children }){

  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}