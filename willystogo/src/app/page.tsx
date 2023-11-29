import LandingImage from '@/app/components/LandingImage'
import ParallaxScrollInfo from '@/app/components/parallaxScrollInfo'
import TextTwoImages from '@/app/components/TextTwoImages'
import SmallEditor from '@/app/components/SmallEditor'
import ReviewSliderWrapper from '@/app/components/ReviewSliderWrapper'
import LandingVideo from '@/app/components/LandingVideo'
import SpacerBig from '@/app/components/SpacerBig'
import Spacer from '@/app/components/Spacer'
import SmallTextPopup from '@/app/components/fixedTextPopup'

export default function Home() {
  return (
    <div>
      {/* <LandingImage /> */}
      <LandingVideo />

      <Spacer />

      {/* <SmallEditor documentId="intro" />

      <div className='mt-10'>
        <ParallaxScrollInfo />
      </div> */}

      <TextTwoImages documentId="intro" images={['/imgs/home/sate.jpg', '/imgs/home/satebar.jpg']} imagesPosition='right' theme="dark" />

      
      <SpacerBig />

      <SmallTextPopup documentId='test' imgPath='/imgs/home/popup.jpg' />

      <Spacer />
      
      <ReviewSliderWrapper />
    </div>
  )
}
