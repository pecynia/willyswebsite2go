import React from 'react'
import SmallTextPopup from '@/app/components/fixedTextPopup'
import OtherReviews from '@/app/components/OtherReviews'
import SpacerStart from '@/app/components/spacers/SpacerStart'
import EditorServer from '@/app/components/editor/EditorServer'

export const revalidate = 360

function Page() {
    return (
    <div>
      <SpacerStart />

      <SmallTextPopup imgPath='/imgs/ervaringen/lukkien.png' link='/ervaringen/lukkien' buttonText='Lees meer'>
        <EditorServer documentId="lukkien-review" />
      </SmallTextPopup>

      {/* Different other reviews */}
      <div className=''>
        <OtherReviews />
      </div>


    </div>
  )
}

export default Page
