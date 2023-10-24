import LandingImage from '@/app/components/LandingImage'
import ParallaxScrollInfo from '@/app/components/parallaxScrollInfo'
import TextTwoImages from '@/app/components/TextTwoImages'
import SmallEditor from '@/app/components/SmallEditor'
import ReviewSliderWrapper from '@/app/components/ReviewSliderWrapper'
import LandingVideo from '@/app/components/LandingVideo'

export default function Home() {
  return (
    <div>
      {/* <LandingImage /> */}
      <LandingVideo />
      <SmallEditor documentId="intro" />

      <ParallaxScrollInfo />
      <TextTwoImages documentId="test" images={['/imgs/sates.jpg', '/imgs/willy.png']} imagesPosition='right' theme="dark" />
      
      <ReviewSliderWrapper />
    </div>
  )
}
