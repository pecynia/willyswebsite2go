import LandingImg from '@/app/components/landingImg'
import ParallaxScrollInfo from '@/app/components/parallaxScrollInfo'
import TextTwoImages from '@/app/components/TextTwoImages'
import SmallEditor from '@/app/components/SmallEditor'
import ReviewSliderWrapper from './components/ReviewSliderWrapper'

export default function Home() {
  return (
    <div>
      <LandingImg />
      <SmallEditor documentId="intro" />

      <ParallaxScrollInfo />
      <TextTwoImages documentId="test" images={['/imgs/sates.jpg', '/imgs/willy.png']} imagesPosition='right'/>
      
      <ReviewSliderWrapper />
    </div>
  )
}
