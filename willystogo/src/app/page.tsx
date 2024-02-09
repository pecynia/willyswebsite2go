import TextTwoImages from '@/app/components/TextTwoImages'
import ReviewSliderWrapper from '@/app/components/ReviewSliderWrapper'
import LandingVideo from '@/app/components/LandingVideo'
import SpacerBig from '@/app/components/spacers/SpacerBig'
import Spacer from '@/app/components/spacers/Spacer'
import SmallTextPopup from '@/app/components/fixedTextPopup'
import EditorServer from '@/app/components/editor/EditorServer'

export const revalidate = 360

export default function Home() {
  return (
    <div>
      <LandingVideo videoPathWebm="/imgs/home/verkort_downsampled.webm" videoPathMP4='/imgs/home/verkort.mp4' posterURL='/imgs/home/utils_frame.png' />

      <Spacer />

      <TextTwoImages images={['/imgs/home/sate.jpg', '/imgs/evenementen/vorkje/bakje-2.jpg']} imagesPosition='right' theme="dark">
        <EditorServer documentId="intro" />
      </TextTwoImages>

      
      <SpacerBig />

      <SmallTextPopup imgPath='/imgs/home/popup.jpg' >
        <EditorServer documentId="test" />
      </SmallTextPopup>

      <Spacer />
      
      <ReviewSliderWrapper />

    </div>
  )
}
