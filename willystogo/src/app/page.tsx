import LandingImg from '@/app/components/landingImg'
import ParallaxScrollInfo from '@/app/components/parallaxScrollInfo'

export default function Home() {
  return (
    <div className='scroll-smooth antialiased'>
      <LandingImg />

      <div className='h-10 bg-secondary flex justify-center items-center'>
        <h2 className='text-primary font-youngSerif text-2xl'>Willy's To Go</h2>
      </div>

      <ParallaxScrollInfo />
      <div className='h-screen bg-white flex justify-center items-center'>
        hoi
      </div>
    </div>
  )
}
