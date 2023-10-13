import Image from 'next/image'
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import EditorWrapper from '@/app/components/editor/EditorWrapper'
import Container from './components/ui/container'
import { Send } from 'lucide-react'
import { Button } from '@/app/components/ui/button'

export default async function Home() {

  const session = await getServerSession(authOptions)

  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <div className='p-4 sm:p-6 lg:p-8 rounded-lg overflow-hidden '>
          <div 
            style={{backgroundImage: `url('/imgs/landing-cta.png')`}}
            className='rounded-lg relative aspect-[5/4] md:aspect-[2.4/1] overflow-hidden bg-cover bg-center'
          >
            <div className='backdrop-blur-sm bg-white bg-opacity-20 rounded-lg h-full w-full flex flex-col justify-center items-center text-center gap-y-8'>
              <div className='font-bold text-4xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-black bg-secondary/60 p-4 rounded-lg'>
                <div className='pb-2'>
                  Indonesische Catering
                </div> 
                <Button size='lg' className='w-full py-6 text-xl'>
                  <Send className='mr-2' />
                  Boek nu
                </Button>
              </div>
            </div>

          </div>
        </div>
        <div className="mt-5">
              <EditorWrapper />
            </div>
      </div>
    </Container>
  )
}