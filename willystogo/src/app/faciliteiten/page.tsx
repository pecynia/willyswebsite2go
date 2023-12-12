"use client"

import React from 'react'
import TextOneImage from '@/app/components/TextOneImage'
import TextThreeImages from '@/app/components/TextThreeImages'
import { motion } from 'framer-motion'
import Spacer from '@/app/components/spacers/Spacer'
import SpacerBig from '@/app/components/spacers/SpacerBig'
import SmallTextPopup from '@/app/components/fixedTextPopup'
import SpacerStart from '../components/spacers/SpacerStart'

function Page() {
  return (
    <motion.div layout
      transition={{ type: "spring", ease: "easeInOut", duration: 0.8 }}
    >

      <SpacerStart />
      
      <div>
        <TextOneImage documentId="mogelijk_interessant" image="/imgs/faciliteiten/team.jpg" imagePosition="right" theme="dark" verticalPosition='below'/>
      </div>

      <SpacerBig />

      <div className=''>
        <TextThreeImages documentId="zoals_beloofd" images={['/imgs/faciliteiten/toeschouwers.jpg', '/imgs/faciliteiten/kind.jpg', '/imgs/faciliteiten/chili.jpg']} imagesPosition='right' theme="dark"/>
      </div>

      <SpacerStart />
      <Spacer />

      <SmallTextPopup documentId="faciliteiten_ps" imgPath='/imgs/faciliteiten/willy.jpg' link='' buttonText='' />
        
      
    </motion.div>
  )
}

export default Page