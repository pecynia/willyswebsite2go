import React from 'react'
import TextOneImage from '@/app/components/TextOneImage'
import TextThreeImages from '@/app/components/TextThreeImages'
import Spacer from '@/app/components/spacers/Spacer'
import SpacerBig from '@/app/components/spacers/SpacerBig'
import SmallTextPopup from '@/app/components/fixedTextPopup'
import TextSingleImageTall from '@/app/components/TextOneImageTall'

import Willy from '../../../public/imgs/ons-aanbod/willy.jpg'
import Bbq from '../../../public/imgs/ons-aanbod/bbq.jpg'
import Satebar from '../../../public/imgs/ons-aanbod/satebar.jpg'

import EditorServer from '@/app/components/editor/EditorServer'

export const revalidate = 360

function Page() {
  return (
    <div>

      <Spacer />

      <TextSingleImageTall image="/imgs/ons-aanbod/aanreik.jpg" imagePosition="left" theme="dark" verticalPosition="below">
        <EditorServer documentId="buffetten" />
      </TextSingleImageTall>

      <SpacerBig />
      <SpacerBig />

      <div className='-mt-24 lg:mt-0'>
        <TextThreeImages images={[Willy, Satebar, Bbq]} imagesPosition='right' theme="dark">
          <EditorServer documentId="satebar" />
        </TextThreeImages>
      </div>

      <SpacerBig />
      <SpacerBig />

      <div>
        <TextOneImage image="/imgs/ons-aanbod/event.jpg" imagePosition="left" theme="dark" verticalPosition='below'>
          <EditorServer documentId="eigen_event" />
        </TextOneImage>
      </div>

      <SpacerBig />

      {/* Let op */}
      <SmallTextPopup imgPath='/imgs/ons-aanbod/popup-2.jpg'>
        <EditorServer documentId="let_op" />
      </SmallTextPopup>
    </div>
  )
}

export default Page