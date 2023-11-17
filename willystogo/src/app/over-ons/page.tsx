"use client"

import React from 'react'
import AnimatedHeader from '@/app/components/AnimatedHeader'
import TextOneImage from '@/app/components/TextOneImage'
import TextThreeImages from '@/app/components/TextThreeImages'
import LetOp from '@/app/components/textPopup'
import { motion } from 'framer-motion'
import Spacer from '@/app/components/Spacer'
import SpacerBig from '@/app/components/SpacerBig'
import SmallTextPopup from '@/app/components/fixedTextPopup'
import FixedTextPopup from '@/app/components/fixedTextPopup'

function page() {
  return (
    <motion.div layout
      transition={{ type: "spring", ease: "easeInOut", duration: 0.8 }}
    >
      <div className='px-16 mt-10 lg:mt-24 mb-0 lg:-mb-20'>
        <AnimatedHeader header="Over Ons" className='text-4xl' />
      </div>

      <SpacerBig />

      <SmallTextPopup documentId='restaurant-naar-partner' imgPath='/imgs/reviews/attract.jpg' />

      <Spacer />

      <div>
        <TextOneImage documentId="het-team" image="/imgs/tafel.jpg" imagePosition="right" theme="dark" verticalPosition='below'/>
      </div>

      <Spacer />

      <FixedTextPopup documentId='goed-om-te-weten' imgPath='/imgs/reviews/attract.jpg' />

        
    </motion.div>
  )
}

export default page