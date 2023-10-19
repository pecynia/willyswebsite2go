import LandingImg from '@/app/components/landingImg'
import ParallaxScrollInfo from '@/app/components/parallaxScrollInfo'
import TextLeftImgRight from '@/app/components/TextLeftImgRight'
import SmallEditor from '@/app/components/SmallEditor'
import AnimatedHeader from './components/AnimatedHeader'

export default function Home() {
  return (
    <div style={{'--svg': 'hsl(var(--primary))'} as React.CSSProperties}>
      <LandingImg />
      <SmallEditor documentId="intro" />

      <ParallaxScrollInfo />
      <TextLeftImgRight documentId="test" images={['/imgs/sates.jpg', '/imgs/willy.png']} />
      
      <div className='h-screen bg-primary sticky'>
        <div className='flex justify-center items-center'>
          <AnimatedHeader header="Wat onze klanten zeggen" className="text-center text-4xl pt-16" />
        </div>
      </div>

    </div>
  )
}
