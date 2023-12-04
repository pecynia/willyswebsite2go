import TextTwoImages from '@/app/components/TextTwoImages'
import ReviewSliderWrapper from '@/app/components/ReviewSliderWrapper'
import LandingVideo from '@/app/components/LandingVideo'
import SpacerBig from '@/app/components/SpacerBig'
import Spacer from '@/app/components/Spacer'
import SmallTextPopup from '@/app/components/fixedTextPopup'

export default function Home() {
  return (
    <div>
      <LandingVideo videoPath="/imgs/home/verkort.mp4"/>

      <Spacer />

      {/* <SmallEditor documentId="intro" />

      <div className='mt-10'>
        <ParallaxScrollInfo />
      </div> */}

      <TextTwoImages documentId="intro" images={['/imgs/home/sate.jpg', '/imgs/evenementen/vorkje/bakje-2.jpg']} imagesPosition='right' theme="dark" />

      
      <SpacerBig />

      <SmallTextPopup documentId='test' imgPath='/imgs/home/popup.jpg' />

      <Spacer />
      
      <ReviewSliderWrapper />

    </div>
  )
}
