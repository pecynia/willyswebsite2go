import { Send } from 'lucide-react'
import { Button } from '@/app/components/ui/button'
import Image from 'next/image'

import LandingImg from '@/app/components/landingImg'
import ParallaxScrollInfo from '@/app/components/parallaxScrollInfo'

export default function Home() {
  return (
    <div className=''>
      <LandingImg />

      <div className='h-screen bg-white flex justify-center items-center'>
        hoi
      </div>

      <ParallaxScrollInfo />
      <div className='h-screen bg-white flex justify-center items-center'>
        hoi
      </div>
    </div>
  )
}
