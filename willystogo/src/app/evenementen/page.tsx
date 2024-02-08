"use client"

import React from 'react'
import { motion } from 'framer-motion'

import AnimatedHeader from '@/app/components/AnimatedHeader'
import TextThreeImages from '@/app/components/TextThreeImages'
import LetOp from '@/app/components/textPopup'
import Spacer from '@/app/components/spacers/Spacer'
import SpacerBig from '@/app/components/spacers/SpacerBig'
import SmallTextPopup from '@/app/components/fixedTextPopup'
import SpacerStart from '../components/spacers/SpacerStart'
import EditorWrapper from '../components/editor/EditorWrapper'

function Page() {
  return (
    <motion.div layout
      transition={{ type: "spring", ease: "easeInOut", duration: 0.8 }}
    >
      {/* <div className='px-16 mt-10 lg:mt-24 mb-0 lg:-mb-20'>
        <AnimatedHeader header="Evenementen" className='text-4xl' />
      </div> */}

      <SpacerStart />

      <div className=''>
        <TextThreeImages images={['/imgs/evenementen/vlegeldag.jpg', '/imgs/evenementen/willyenyan.jpg', '/imgs/evenementen/sates.jpg']} imagesPosition='right' theme="dark">
          <EditorWrapper documentId="vlegeldag" />
        </TextThreeImages>
      </div>

      <SpacerStart />
      <SpacerBig />
      <Spacer />


      <div className=''>
        <TextThreeImages images={['/imgs/evenementen/summerbeach/groep2.jpg', '/imgs/evenementen/summerbeach/satebar2.jpg', '/imgs/evenementen/summerbeach/dames2.png']} imagesPosition='left' theme="dark">
          <EditorWrapper documentId="summer-beach" />
        </TextThreeImages>
      </div>

      <SpacerBig />
      <SpacerBig />
      <Spacer />


      <div className=''>
        <TextThreeImages images={['/imgs/evenementen/heideweek/duimpje.jpg', '/imgs/evenementen/heideweek/willy_2.jpg', '/imgs/evenementen/heideweek/willy.jpg']} imagesPosition='right' theme="dark">
          <EditorWrapper documentId="heideweek-culinair" />
        </TextThreeImages>
      </div>

      <SpacerStart />
      <SpacerBig />
      <Spacer />

      <div className=''>
        <TextThreeImages images={['/imgs/evenementen/vorkje/bakje-1.jpg', '/imgs/evenementen/vorkje/satebar.jpg', '/imgs/evenementen/vorkje/sate.jpg']} imagesPosition='left' theme="dark">
          <EditorWrapper documentId="vorkje-prikken" />
        </TextThreeImages>
      </div>

      <SpacerStart />
      <SpacerBig />

      <SmallTextPopup imgPath='/imgs/evenementen/vorkje/bakje-1.jpg' link='contact' buttonText='Neem contact op' >
        <EditorWrapper documentId='eigen-event' />
      </SmallTextPopup>
        
    </motion.div>
  )
}

export default Page