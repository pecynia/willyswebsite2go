"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import EditorWrapper from '@/app/components/editor/EditorWrapper'

function LetOp() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-96 relative'>
        <Image 
            src="/imgs/cocktails.jpg" 
            alt="Image" 
            fill
            className="object-cover object-center"
        />
        <motion.div 
          initial={{ opacity: 0, y: '100%' }} // Starts off-screen to the left
          whileInView={{ opacity: 1, y: '0%' }} // Comes in to view
          transition={{ type: "spring", ease: "easeInOut", duration: 0.8 }}
          className='header-shadow-right min-w-[50%] min-h-[20%] max-w-[80%] bg-secondary flex items-center px-10 pt-4 z-10'
        >
            <EditorWrapper documentId="let_op" />
        </motion.div>
      </div>
  )
}

export default LetOp