import Image from 'next/image'
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import EditorComponent from '@/app/components/editor/EditorComponent'



export default async function Home() {

  const session = await getServerSession(authOptions)


  return (
    <main className="flex flex-col items-center justify-center p-2">
      <div className="flex flex-col w-full flex-1 px-20">
        <Image
          src="/logo.png"
          alt="Logo"
          width={200}
          height={50}
          priority
        />

        <h1 className="text-2xl font-bold">
          Willys To Go
        </h1>

        <p className="mt-3 text-xl">
          Indonesische catering in Ede en omstreken
        </p>

        <div className="mt-5 bg-white p-12 rounded-lg shadow-lg w-2/3">
          <EditorComponent editable={session ? true : false} />
        </div>
      </div>
    </main>
  )
}