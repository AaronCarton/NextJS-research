'use client'
import { signIn, signOut } from 'next-auth/react'

export function LoginButton() {
  return (
    <button
      onClick={() => signIn()}
      className="mx-5 my-3 cursor-pointer rounded-full bg-blue-500 py-2 text-center font-semibold"
    >
      Login{' '}
    </button>
  )
}

export function LogoutButton() {
  return (
    <div
      className="w-full cursor-pointer p-4 transition-colors hover:bg-zinc-700"
      onClick={() => {
        signOut()
      }}
    >
      <span>Logout</span>
    </div>
  )
}
