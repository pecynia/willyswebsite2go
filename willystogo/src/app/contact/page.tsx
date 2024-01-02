'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import ContactForm from '@/app/components/ContactForm'

function Page() {
  return (
    <div className='flex flex-col items-center justify-center w-full py-28 relative'>
        <Image 
            src="/imgs/reviews/attract.jpg"
            alt="Image" 
            fill
            className="object-cover object-center"
        />
        <motion.div 
          initial={{ opacity: 0, y: '100%' }} // Starts off-screen to the left
          whileInView={{ opacity: 1, y: '0%' }} // Comes in to view
          transition={{ type: "spring", ease: "easeInOut", duration: 0.5 }}
          viewport={{ once: true }}
          className=' min-w-[80%] lg:min-w-[50%] min-h-[20%] max-w-[80%] bg-secondary mb-20 pb-10 flex px-10 pt-4 z-10'
        >
          <div className='w-full pt-2'>
            <ContactForm />
          </div>
        </motion.div>
      </div>
  )
}

export default Page
