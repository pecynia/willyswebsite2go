"use client"

import React from 'react'
import AnimatedHeader from '@/app/components/AnimatedHeader'
import TextOneImage from '@/app/components/TextOneImage'
import TextThreeImages from '@/app/components/TextThreeImages'
import LetOp from '@/app/components/LetOp'
import { motion } from 'framer-motion'
import Spacer from '@/app/components/Spacer'

function page() {
  return (
    <motion.div layout
      transition={{ type: "spring", ease: "easeInOut", duration: 0.8 }}
    >
      <div className='px-16 mt-10 lg:mt-24 mb-0 lg:-mb-20'>
        <AnimatedHeader header="Over Ons" className='text-4xl' />
      </div>
        
    </motion.div>
  )
}

export default page