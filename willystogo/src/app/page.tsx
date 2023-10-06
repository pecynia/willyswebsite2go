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
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <div>
        <LoginButton />
        <LogoutButton />
        <AdminButton />
        <h1>Server Session</h1>
        <pre>{JSON.stringify(session)}</pre>

        <User />
      </div>
    </main>
  )
}