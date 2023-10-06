import {
  LoginButton,
  LogoutButton,
  AdminButton
} from "@/app/components/buttons"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { User } from "@/app/components/user"

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-row items-center justify-center space-x-4">
        <LoginButton />
        <LogoutButton />
        <AdminButton />
      </div>
      <div className="flex flex-col items-center justify-center py-2">
          <h1>Server Session</h1>
          <pre>{JSON.stringify(session)}</pre>

          <User />
      </div>
    </main>
  )
}