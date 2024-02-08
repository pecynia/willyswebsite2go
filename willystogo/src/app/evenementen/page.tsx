import React from 'react'
import TextThreeImages from '@/app/components/TextThreeImages'
import Spacer from '@/app/components/spacers/Spacer'
import SpacerBig from '@/app/components/spacers/SpacerBig'
import SmallTextPopup from '@/app/components/fixedTextPopup'
import SpacerStart from '@/app/components/spacers/SpacerStart'
import EditorServer from '@/app/components/editor/EditorServer'

export const revalidate = 360

function Page() {
  return (
    <div>

      <SpacerStart />

      <div className=''>
        <TextThreeImages images={['/imgs/evenementen/vlegeldag.jpg', '/imgs/evenementen/willyenyan.jpg', '/imgs/evenementen/sates.jpg']} imagesPosition='right' theme="dark">
          <EditorServer documentId="vlegeldag" />
        </TextThreeImages>
      </div>

      <SpacerStart />
      <SpacerBig />
      <Spacer />


      <div className=''>
        <TextThreeImages images={['/imgs/evenementen/summerbeach/groep2.jpg', '/imgs/evenementen/summerbeach/satebar2.jpg', '/imgs/evenementen/summerbeach/dames2.png']} imagesPosition='left' theme="dark">
          <EditorServer documentId="summer-beach" />
        </TextThreeImages>
      </div>

      <SpacerBig />
      <SpacerBig />
      <Spacer />

      <div className=''>
        <TextThreeImages images={['/imgs/evenementen/heideweek/duimpje.jpg', '/imgs/evenementen/heideweek/willy_2.jpg', '/imgs/evenementen/heideweek/willy.jpg']} imagesPosition='right' theme="dark">
          <EditorServer documentId="heideweek-culinair" />
        </TextThreeImages>
      </div>

      <SpacerStart />
      <SpacerBig />
      <Spacer />

      <div className=''>
        <TextThreeImages images={['/imgs/evenementen/vorkje/bakje-1.jpg', '/imgs/evenementen/vorkje/satebar.jpg', '/imgs/evenementen/vorkje/sate.jpg']} imagesPosition='left' theme="dark">
          <EditorServer documentId="vorkje-prikken" />
        </TextThreeImages>
      </div>

      <SpacerStart />
      <SpacerBig />

      <SmallTextPopup imgPath='/imgs/evenementen/vorkje/bakje-1.jpg' link='contact' buttonText='Neem contact op'>
        <EditorServer documentId="eigen-event" />
      </SmallTextPopup>
        
    </div>
  )
}

export default Page