"use client"

import React from 'react'
import AnimatedHeader from '@/app/components/AnimatedHeader'
import TextOneImage from '@/app/components/TextOneImage'
import TextThreeImages from '@/app/components/TextThreeImages'
import LetOp from '@/app/components/textPopup'
import { motion } from 'framer-motion'
import Spacer from '@/app/components/spacers/Spacer'
import SpacerBig from '@/app/components/spacers/SpacerBig'
import SmallTextPopup from '@/app/components/fixedTextPopup'
import FixedTextPopup from '@/app/components/fixedTextPopup'
import LightWidget from '@/app/components/LightWidget'
import SpacerStart from '../components/spacers/SpacerStart'

function page() {
  return (
    <motion.div layout
      transition={{ type: "spring", ease: "easeInOut", duration: 0.8 }}
    >
      {/* <div className='px-16 mt-10 lg:mt-24 mb-0 lg:-mb-20'>
        <AnimatedHeader header="Over Ons" className='text-4xl' />
      </div> */}

      <SpacerStart />

      <SmallTextPopup documentId='restaurant-naar-partner' imgPath='/imgs/over-ons/over-ons.png' />

      <SpacerBig />

      <div>
        <TextOneImage documentId="het-team" image="/imgs/over-ons/team.jpg" imagePosition="right" theme="dark" verticalPosition='below'/>
      </div>

      <SpacerBig />

      <LightWidget />

      <Spacer />

      <FixedTextPopup documentId='goed-om-te-weten' imgPath='/imgs/over-ons/pupop-pic.jpg' />

        
    </motion.div>
  )
}

export default page