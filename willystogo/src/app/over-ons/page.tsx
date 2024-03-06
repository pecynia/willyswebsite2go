import React from 'react'
import TextOneImage from '@/app/components/TextOneImage'
import Spacer from '@/app/components/spacers/Spacer'
import SpacerBig from '@/app/components/spacers/SpacerBig'
import SmallTextPopup from '@/app/components/fixedTextPopup'
import FixedTextPopup from '@/app/components/fixedTextPopup'
import LightWidget from '@/app/components/LightWidget'
import SpacerStart from '../components/spacers/SpacerStart'
import EditorServer from '@/app/components/editor/EditorServer'


function page() {
  return (
    <div>

      <SpacerStart />

      <SmallTextPopup imgPath='/imgs/over-ons/over-ons.png'>
        <EditorServer documentId="restaurant-naar-partner" />
      </SmallTextPopup>


      <SpacerBig />

      <div>
        <TextOneImage image="/imgs/over-ons/team.jpg" imagePosition="right" theme="dark" verticalPosition='below'>
          <EditorServer documentId="het-team" />
        </TextOneImage>
      </div>

      <SpacerBig />

      <LightWidget />

      <Spacer />

      <FixedTextPopup imgPath='/imgs/over-ons/pupop-pic.jpg'>
        <EditorServer documentId="goed-om-te-weten" />
      </FixedTextPopup>

        
    </div>
  )
}

export default page