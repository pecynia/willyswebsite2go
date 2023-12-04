"use client"

import AnimatedHeader from '@/app/components/AnimatedHeader'
import SpacerBig from '@/app/components/SpacerBig'
import Spacer from '@/app/components/SpacerBig'
import TextOneImage from '@/app/components/TextOneImage'
import TextOneVideo from '@/app/components/TextOneVideo'
import { motion } from 'framer-motion'
import React from 'react'

function Page() {
  return (
    <motion.div layout
      transition={{ type: "spring", ease: "easeInOut", duration: 0.8 }}
    >
      <div className='px-16 mt-10 lg:mt-24 mb-0 lg:-mb-20'>
        <AnimatedHeader header="Het verhaal van Lukkien" className='text-4xl' />
      </div>

      <Spacer />
      
      <div className='px-10'>
        <TextOneVideo documentId="lukkien-eisen" videoId='8h8Vpfitn0g' imagePosition="right" theme="dark" verticalPosition='below'/>
      </div>

      <div className='px-10'>
        <TextOneVideo documentId="lukkien-quote" videoId='OjM1pOAtT4c' imagePosition="left" theme="dark" verticalPosition='below'/>
      </div>

      <SpacerBig />


    </motion.div>
  )
}

export default Page