'use client'

import { useSession } from 'next-auth/react'

export default function AuthCheck({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession()

  console.log(session, status)

  if (status === 'authenticated') {
    return <>hewwo</>
  } else {
    return <>Not logged in to see this</>
  }
}
