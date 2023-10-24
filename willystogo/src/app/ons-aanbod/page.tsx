"use client"

import React from 'react'
import AnimatedHeader from '@/app/components/AnimatedHeader'
import TextOneImage from '@/app/components/TextOneImage'
import TextThreeImages from '@/app/components/TextThreeImages'
import LetOp from '@/app/components/LetOp'
import { motion } from 'framer-motion'

function page() {
  return (
    <motion.div layout
      transition={{ type: "spring", ease: "easeInOut", duration: 0.8 }}
    >
      <div className='px-16 mt-10 lg:mt-24 mb-0 lg:-mb-20'>
        <AnimatedHeader header="Ons Aanbod" className='text-4xl' />
      </div>
      
      <TextOneImage documentId="buffetten" image="/imgs/cocktails.jpg" imagePosition="left" theme="dark" verticalPosition="below" />
      
      <div className='-mt-24 lg:mt-0'>
        <TextThreeImages documentId="satebar" images={['/imgs/sates.jpg', '/imgs/willy.png', '/imgs/cocktails.jpg']} imagesPosition='right' theme="dark"/>
      </div>
      
      <div className='sticky'>
        <TextOneImage documentId="eigen_event" image="/imgs/cocktails.jpg" imagePosition="left" theme="dark" verticalPosition='below'/>
      </div>

      {/* Let op */}
      <LetOp />
    </motion.div>
  )
}

export default page