"use client"

import React from 'react'
import TextOneImage from '@/app/components/TextOneImage'
import TextThreeImages from '@/app/components/TextThreeImages'
import { motion } from 'framer-motion'
import Spacer from '@/app/components/spacers/Spacer'
import SpacerBig from '@/app/components/spacers/SpacerBig'
import SmallTextPopup from '@/app/components/fixedTextPopup'
import SpacerStart from '../components/spacers/SpacerStart'
import EditorWrapper from '../components/editor/EditorClient'

function Page() {
  return (
    <motion.div layout
      transition={{ type: "spring", ease: "easeInOut", duration: 0.8 }}
    >

      <SpacerStart />
      
      <div>
        <TextOneImage image="/imgs/faciliteiten/team.jpg" imagePosition="right" theme="dark" verticalPosition='below'>
          <EditorWrapper documentId="mogelijk_interessant" />
        </TextOneImage>
      </div>

      <SpacerBig />

      <div className=''>
        <TextThreeImages images={['/imgs/faciliteiten/toeschouwers.jpg', '/imgs/faciliteiten/kind.jpg', '/imgs/faciliteiten/chili.jpg']} imagesPosition='right' theme="dark">
          <EditorWrapper documentId="zoals_beloofd" />
        </TextThreeImages>
      </div>

      <SpacerStart />
      <Spacer />

      <SmallTextPopup imgPath='/imgs/faciliteiten/willy.jpg' link='' buttonText='' >
        <EditorWrapper documentId='faciliteiten_ps' />
      </SmallTextPopup>

        
      
    </motion.div>
  )
}

export default Page