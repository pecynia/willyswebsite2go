import React from 'react'
import TextOneImage from '@/app/components/TextOneImage'
import TextThreeImages from '@/app/components/TextThreeImages'
import Spacer from '@/app/components/spacers/Spacer'
import SpacerBig from '@/app/components/spacers/SpacerBig'
import SmallTextPopup from '@/app/components/fixedTextPopup'
import SpacerStart from '@/app/components/spacers/SpacerStart'
import EditorServer from '@/app/components/editor/EditorServer'

export const revalidate = 86400

function Page() {
  return (
    <div>

      <SpacerStart />
      
      <div>
        <TextOneImage image="/imgs/faciliteiten/team.jpg" imagePosition="right" theme="dark" verticalPosition='below'>
          <EditorServer documentId="mogelijk_interessant" />
        </TextOneImage>
      </div>

      <SpacerBig />

      <div className=''>
        <TextThreeImages images={['/imgs/faciliteiten/toeschouwers.jpg', '/imgs/faciliteiten/kind.jpg', '/imgs/faciliteiten/chili.jpg']} imagesPosition='right' theme="dark">
          <EditorServer documentId="zoals_beloofd" />
        </TextThreeImages>
      </div>

      <SpacerStart />
      <Spacer />

      <SmallTextPopup imgPath='/imgs/faciliteiten/willy.jpg'>
        <EditorServer documentId="faciliteiten_ps" />
      </SmallTextPopup>
        
      
    </div>
  )
}

export default Page