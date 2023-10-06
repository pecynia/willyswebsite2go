import {
  LoginButton,
  LogoutButton,
  AdminButton
} from "@/app/components/buttons"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { User } from "@/app/components/user"
import Image from 'next/image'

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      
      <div>
        <Image
          src="/logo.png"
          alt="Willy's To Go"
          width={200}
          height={200}
        />
      </div>

      <div className="flex flex-row items-center justify-center space-x-4">
        <LoginButton />
        <LogoutButton />
        <AdminButton />
      </div>
      <div className="flex flex-col items-center justify-center py-2">
          <User />
      </div>
    </main>
  )
}