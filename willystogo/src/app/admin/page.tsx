"use client"

import { redirect } from "next/navigation"
import { useSession } from "next-auth/react"
import Tiptap from "@/app/components/tipTap"
import { LoadingScreen } from "@/app/components/loading"

export default function Profile() {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
        redirect("/api/auth/signin?callbackUrl=/admin")
      },      
  })

  if (status === "loading") {
    return <LoadingScreen />
  }

  return (
    <div className="flex flex-col items-center justify-center py-36">
        <h1 className="text-4xl font-bold pb-4">Admin</h1>
        <p>Welkom bij de admin pagina</p>
    </div>
  )
}