"use client"

import React from 'react'
import AnimatedHeader from '@/app/components/AnimatedHeader'
import TextOneImage from '@/app/components/TextOneImage'
import TextThreeImages from '@/app/components/TextThreeImages'
import LetOp from '@/app/components/textPopup'
import { motion } from 'framer-motion'
import Spacer from '@/app/components/Spacer'
import SpacerBig from '@/app/components/SpacerBig'
import TextPopup from '@/app/components/textPopup'
import FixedTextPopup from '@/app/components/fixedTextPopup'
import SmallTextPopup from '@/app/components/fixedTextPopup'

function Page() {
  return (
    <motion.div layout
      transition={{ type: "spring", ease: "easeInOut", duration: 0.8 }}
    >
      <div className='px-16 mt-10 lg:mt-24 mb-0 lg:-mb-20'>
        <AnimatedHeader header="Faciliteiten" className='text-4xl' />
      </div>
      
      <div>
        <TextOneImage documentId="mogelijk_interessant" image="/imgs/tafel.jpg" imagePosition="right" theme="dark" verticalPosition='below'/>
      </div>

      <SpacerBig />

      <div className=''>
        <TextThreeImages documentId="zoals_beloofd" images={['/imgs/sates.jpg', '/imgs/willy.png', '/imgs/sates_2.jpg']} imagesPosition='right' theme="dark"/>
      </div>

      <Spacer />

      <SmallTextPopup documentId="faciliteiten_ps" imgPath='/imgs/cocktails.jpg' link='' buttonText='' />
        
      
    </motion.div>
  )
}

export default Page