"use client"

import React from 'react'
import AnimatedHeader from '@/app/components/AnimatedHeader'
import TextOneImage from '@/app/components/TextOneImage'
import TextThreeImages from '@/app/components/TextThreeImages'
import LetOp from '@/app/components/LetOp'
import { motion } from 'framer-motion'
import Spacer from '@/app/components/Spacer'
import SpacerBig from '@/app/components/SpacerBig'

function page() {
  return (
    <motion.div layout
      transition={{ type: "spring", ease: "easeInOut", duration: 0.8 }}
    >
      <div className='px-16 mt-10 lg:mt-24 mb-0 lg:-mb-20'>
        <AnimatedHeader header="Ons Aanbod" className='text-4xl' />
      </div>
      
      <TextOneImage documentId="buffetten" image="/imgs/buffetten.jpg" imagePosition="left" theme="dark" verticalPosition="below" />
      
      <Spacer />
      
      <div className='-mt-24 lg:mt-0'>
        <TextThreeImages documentId="satebar" images={['/imgs/sates.jpg', '/imgs/willy.png', '/imgs/sates_2.jpg']} imagesPosition='right' theme="dark"/>
      </div>

      <Spacer />
      
      <div>
        <TextOneImage documentId="eigen_event" image="/imgs/tafel.jpg" imagePosition="left" theme="dark" verticalPosition='below'/>
      </div>
      
      <SpacerBig />

      {/* Let op */}
      <LetOp />
    </motion.div>
  )
}

export default page