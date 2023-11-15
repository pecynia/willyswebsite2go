"use client"

import AnimatedHeader from '@/app/components/AnimatedHeader'
import TextOneImage from '@/app/components/TextOneImage'
import TextOneVideo from '@/app/components/TextOneVideo'
import { motion } from 'framer-motion'
import React from 'react'

function page() {
  return (
    <motion.div layout
      transition={{ type: "spring", ease: "easeInOut", duration: 0.8 }}
    >
      <div className='px-16 mt-10 lg:mt-24 mb-0 lg:-mb-20'>
        <AnimatedHeader header="Het verhaal van Lukkien" className='text-4xl' />
      </div>

      <div>
        <TextOneVideo documentId="lukkien-eisen" videoId='a8b3EN0R-M4' imagePosition="right" theme="dark" verticalPosition='below'/>
      </div>


    </motion.div>
  )
}

export default page