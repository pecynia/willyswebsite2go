"use client"

import { redirect } from "next/navigation"
import { useSession } from "next-auth/react"

export default function Profile() {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
        redirect("/api/auth/signin?callbackUrl=/admin")
      },      
  })

  if (status === "loading") {
    return <p>Loading....</p>
  }


  return (
    <div className="flex flex-col items-center justify-center py-2">
        <h1>Admin</h1>
        <p>Only accessible to authenticated users</p>
    </div>
  )
}