import LandingImg from '@/app/components/landingImg'
import ParallaxScrollInfo from '@/app/components/parallaxScrollInfo'
import TextLeftImgRight from '@/app/components/TextLeftImgRight'
import SmallEditor from '@/app/components/SmallEditor'
import AnimatedHeader from '@/app/components/AnimatedHeader'
import ReviewSlider from '@/app/components/ReviewSlider'

export default function Home() {
  return (
    <div style={{'--svg': 'hsl(var(--primary))'} as React.CSSProperties}>
      <LandingImg />
      <SmallEditor documentId="intro" />

      <ParallaxScrollInfo />
      <TextLeftImgRight documentId="test" images={['/imgs/sates.jpg', '/imgs/willy.png']} />
      
      <div className='h-screen bg-secondary sticky'>
        <div className='flex flex-col justify-center items-center pt-10'>
          <AnimatedHeader header="Wat onze klanten zeggen" className="text-center text-4xl" />
          <ReviewSlider />
        </div>
      </div>
    </div>
  )
}
