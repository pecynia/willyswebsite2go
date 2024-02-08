"use client"

import React from 'react'
import AnimatedHeader from '@/app/components/AnimatedHeader'
import TextOneImage from '@/app/components/TextOneImage'
import TextThreeImages from '@/app/components/TextThreeImages'
import { motion } from 'framer-motion'
import Spacer from '@/app/components/spacers/Spacer'
import SpacerBig from '@/app/components/spacers/SpacerBig'
import TextPopup from '@/app/components/textPopup'
import SmallTextPopup from '@/app/components/fixedTextPopup'
import TextSingleImageTall from '@/app/components/TextOneImageTall'

import Willy from '../../../public/imgs/ons-aanbod/willy.jpg'
import Bbq from '../../../public/imgs/ons-aanbod/bbq.jpg'
import Satebar from '../../../public/imgs/ons-aanbod/satebar.jpg'

import { Space } from 'lucide-react'
import TextTwoImagesTall from '@/app/components/TextTwoImagesTall'

import EditorWrapper from '../components/editor/EditorClient'

function Page() {
  return (
    <motion.div layout
      transition={{ type: "spring", ease: "easeInOut", duration: 0.8 }}
      className='mt-24 sm:mt-0'
    >

      <Spacer />
      
      <TextSingleImageTall image="/imgs/ons-aanbod/aanreik.jpg" imagePosition="left" theme="dark" verticalPosition="below" >
        <EditorWrapper documentId="buffetten" />
      </TextSingleImageTall>
      {/* <TextTwoImagesTall documentId="buffetten" images={["/imgs/ons-aanbod/aanreik.jpg", "/imgs/ons-aanbod/bufet.jpg"]} imagesPosition='left' theme="dark"  /> */}


      <SpacerBig />
      <SpacerBig />
      {/* <SpacerBig /> */}
      {/* <Spacer /> */}
      
      <div className='-mt-24 lg:mt-0'>
        <TextThreeImages images={[Willy, Satebar, Bbq]} imagesPosition='right' theme="dark">
          <EditorWrapper documentId="satebar" />
        </TextThreeImages>
      </div>

      <SpacerBig />
      <SpacerBig />
      
      <div>
        <TextOneImage image="/imgs/ons-aanbod/event.jpg" imagePosition="left" theme="dark" verticalPosition='below'>
          <EditorWrapper documentId="eigen-event" />
        </TextOneImage>
      </div>
      
      <SpacerBig />


      {/* Let op */}
      <SmallTextPopup imgPath='/imgs/ons-aanbod/popup-2.jpg' >
        <EditorWrapper documentId='let_op' />
      </SmallTextPopup>
    </motion.div>
  )
}

export default Page