"use client"

import { signIn, signOut } from "next-auth/react"
import Link from "next/link"

export const LoginButton = () => {
  return (
    <button 
      className="rounded-md bg-blue-500 text-white px-4 py-2"
      onClick={() => signIn()}>
      Sign in
    </button>
  )
}
export const LogoutButton = () => {
  return (
    <button 
      className="rounded-md bg-blue-500 text-white px-4 py-2"
      onClick={() => signOut()}>
      Sign Out
    </button>
  )
}

export const AdminButton = () => {
  return (
    <Link href="/admin">
      <button className="rounded-md bg-blue-500 text-white px-4 py-2"
      >Admin</button>
    </Link>
  )
}
