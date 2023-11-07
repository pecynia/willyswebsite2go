import LandingImage from '@/app/components/LandingImage'
import ParallaxScrollInfo from '@/app/components/parallaxScrollInfo'
import TextTwoImages from '@/app/components/TextTwoImages'
import SmallEditor from '@/app/components/SmallEditor'
import ReviewSliderWrapper from '@/app/components/ReviewSliderWrapper'
import LandingVideo from '@/app/components/LandingVideo'
import SpacerBig from '@/app/components/SpacerBig'
import Spacer from '@/app/components/Spacer'

export default function Home() {
  return (
    <div>
      {/* <LandingImage /> */}
      <LandingVideo />

      <SpacerBig />

      <SmallEditor documentId="intro" />

      <div className='mt-10'>
        <ParallaxScrollInfo />
      </div>
      
      <SpacerBig />

      <TextTwoImages documentId="test" images={['/imgs/sates.jpg', '/imgs/willy.png']} imagesPosition='right' theme="dark" />
      
      <SpacerBig />

      <ReviewSliderWrapper />
    </div>
  )
}
