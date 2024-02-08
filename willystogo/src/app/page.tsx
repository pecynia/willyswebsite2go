import TextTwoImages from '@/app/components/TextTwoImages'
import ReviewSliderWrapper from '@/app/components/ReviewSliderWrapper'
import LandingVideo from '@/app/components/LandingVideo'
import SpacerBig from '@/app/components/spacers/SpacerBig'
import Spacer from '@/app/components/spacers/Spacer'
import SmallTextPopup from '@/app/components/fixedTextPopup'
import EditorWrapper from './components/editor/EditorClient'

export default function Home() {
  return (
    <div>
      <LandingVideo videoPath="/imgs/home/verkort_downsampled.webm" posterURL='/imgs/home/utils_frame.png' />

      <Spacer />

      {/* <SmallEditor documentId="intro" />

      <div className='mt-10'>
        <ParallaxScrollInfo />
      </div> */}

      <TextTwoImages images={['/imgs/home/sate.jpg', '/imgs/evenementen/vorkje/bakje-2.jpg']} imagesPosition='right' theme="dark" >
        <EditorWrapper documentId='intro' />
      </TextTwoImages>

      
      <SpacerBig />

      <SmallTextPopup imgPath='/imgs/home/popup.jpg'>
        <EditorWrapper documentId='test' />
      </SmallTextPopup>

      <Spacer />
      
      <ReviewSliderWrapper />

    </div>
  )
}
