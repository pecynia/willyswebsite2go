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

import Willy from '../../../public/imgs/ons-aanbod/willy.jpg'
import Bbq from '../../../public/imgs/ons-aanbod/bbq.jpg'
import Satebar from '../../../public/imgs/ons-aanbod/satebar.jpg'

import { Space } from 'lucide-react'
import TextTwoImages from '@/app/components/TextTwoImages'
import TextTwoImagesTall from '@/app/components/TextTwoImagesTall'

function Page() {
  return (
    <motion.div layout
      transition={{ type: "spring", ease: "easeInOut", duration: 0.8 }}
      className='mt-24 sm:mt-0'
    >
      {/* <div className='px-16 mt-10 lg:mt-24 mb-0 lg:-mb-20'>
        <AnimatedHeader header="Ons Aanbod" className='text-4xl' />
      </div> */}

      <Spacer />
      
      <TextSingleImageTall documentId="buffetten" image="/imgs/ons-aanbod/aanreik.jpg" imagePosition="left" theme="dark" verticalPosition="below" />
      {/* <TextTwoImagesTall documentId="buffetten" images={["/imgs/ons-aanbod/aanreik.jpg", "/imgs/ons-aanbod/bufet.jpg"]} imagesPosition='left' theme="dark"  /> */}


      <SpacerBig />
      <SpacerBig />
      {/* <SpacerBig /> */}
      {/* <Spacer /> */}
      
      <div className='-mt-24 lg:mt-0'>
        <TextThreeImages documentId="satebar" images={[Willy, Satebar, Bbq]} imagesPosition='right' theme="dark"/>
      </div>

      <SpacerBig />
      <SpacerBig />
      
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