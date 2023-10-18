import LandingImg from '@/app/components/landingImg'
import ParallaxScrollInfo from '@/app/components/parallaxScrollInfo'
import TextLeftImgRight from '@/app/components/TextLeftImgRight'
import SmallEditor from '@/app/components/SmallEditor'

export default function Home() {
  return (
    <div style={{'--svg': 'hsl(var(--primary))'} as React.CSSProperties}>
      <LandingImg />
      <SmallEditor documentId="intro" />

      <ParallaxScrollInfo />
      <TextLeftImgRight documentId="test" images={['/imgs/sates.jpg', '/imgs/willy.png']} />
      
      <div className='h-screen'/>

    </div>
  )
}
