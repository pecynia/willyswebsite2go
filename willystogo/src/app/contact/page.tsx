'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/app/components/ui/button';
import { contactInfo } from '@/dictionaries/contactInfo';

function Page() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className='flex flex-col items-center justify-center w-full py-36 relative'>
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
          className='header-shadow-right min-w-[60%] min-h-[20%] max-w-[80%] bg-secondary mb-20 pb-10 flex px-10 pt-4 z-10'
        >
          
          <div className='w-full pt-2'>
            <h1 className='text-center font-youngSerif text-3xl pt-4'>Bereik Ons</h1>
            <p className='pt-4 text-center'>Momenteel kunt u ons bereiken op <span className='font-bold'>{contactInfo.email}</span></p>
          </div>
        </motion.div>
      </div>
  )
}

export default Page;
