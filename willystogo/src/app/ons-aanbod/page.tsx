"use client"

import React from 'react'
import AnimatedHeader from '@/app/components/AnimatedHeader'
import TextOneImage from '@/app/components/TextOneImage'
import TextThreeImages from '@/app/components/TextThreeImages'
import { motion } from 'framer-motion'
import Spacer from '@/app/components/Spacer'
import SpacerBig from '@/app/components/SpacerBig'
import TextPopup from '@/app/components/textPopup'
import SmallTextPopup from '@/app/components/fixedTextPopup'
import TextSingleImageTall from '@/app/components/TextOneImageTall'

function Page() {
  return (
    <motion.div layout
      transition={{ type: "spring", ease: "easeInOut", duration: 0.8 }}
      className='mt-24 sm:mt-0'
    >
      <div className='px-16 mt-10 lg:mt-24 mb-0 lg:-mb-20'>
        <AnimatedHeader header="Ons Aanbod" className='text-4xl' />
      </div>

      <Spacer />
      
      <TextSingleImageTall documentId="buffetten" image="/imgs/ons-aanbod/aanreik.jpg" imagePosition="left" theme="dark" verticalPosition="below" />
      
      <Spacer />
      
      <div className='-mt-24 lg:mt-0'>
        <TextThreeImages documentId="satebar" images={['/imgs/ons-aanbod/willy.jpg', '/imgs/ons-aanbod/bbq.jpg', '/imgs/ons-aanbod/satebar.jpg']} imagesPosition='right' theme="dark"/>
      </div>

      <Spacer />
      
      <div>
        <TextOneImage documentId="eigen_event" image="/imgs/ons-aanbod/event.jpg" imagePosition="left" theme="dark" verticalPosition='below'/>
      </div>
      
      <SpacerBig />

      {/* Let op */}
      <SmallTextPopup documentId='let_op' imgPath='/imgs/ons-aanbod/popup-2.jpg' />
    </motion.div>
  )
}

export default Page