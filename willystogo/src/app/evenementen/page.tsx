"use client"

import React from 'react'
import { motion } from 'framer-motion'

import AnimatedHeader from '@/app/components/AnimatedHeader'
import TextThreeImages from '@/app/components/TextThreeImages'
import LetOp from '@/app/components/textPopup'
import Spacer from '@/app/components/Spacer'
import SpacerBig from '@/app/components/SpacerBig'
import SmallTextPopup from '@/app/components/fixedTextPopup'

function page() {
  return (
    <motion.div layout
      transition={{ type: "spring", ease: "easeInOut", duration: 0.8 }}
    >
      <div className='px-16 mt-10 lg:mt-24 mb-0 lg:-mb-20'>
        <AnimatedHeader header="Evenementen" className='text-4xl' />
      </div>

      <SpacerBig />

      <div className=''>
        <TextThreeImages documentId="vlegeldag" images={['/imgs/sates.jpg', '/imgs/willy.png', '/imgs/sates_2.jpg']} imagesPosition='right' theme="dark"/>
      </div>

      <SpacerBig />
      <SpacerBig />
      <Spacer />


      <div className=''>
        <TextThreeImages documentId="heideweek-culinair" images={['/imgs/sates.jpg', '/imgs/willy.png', '/imgs/sates_2.jpg']} imagesPosition='left' theme="dark"/>
      </div>

      <SpacerBig />
      <SpacerBig />
      <Spacer />

      <div className=''>
        <TextThreeImages documentId="vorkje-prikken" images={['/imgs/sates.jpg', '/imgs/willy.png', '/imgs/sates_2.jpg']} imagesPosition='right' theme="dark"/>
      </div>

      <SpacerBig />
      <SpacerBig />

      <SmallTextPopup documentId="eigen-event" imgPath='/imgs/cocktails.jpg' link='contact' buttonText='Neem contact op' />
        
    </motion.div>
  )
}

export default page