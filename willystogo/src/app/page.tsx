import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import Image from 'next/image'

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <main className="flex flex-col items-center justify-center p-2">
      <div className="flex flex-col w-full flex-1 px-20">
        <Image
          src="/logo.png"
          alt="Logo"
          width={100}
          height={100}
          priority
        />

        <h1 className="text-2xl font-bold">
          Willys To Go
        </h1>

        <p className="mt-3 text-xl">
          Indonesische catering in Ede en omstreken
        </p>



      </div>
    </main>
  )
}