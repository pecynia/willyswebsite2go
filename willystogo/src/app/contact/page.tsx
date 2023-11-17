'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/app/components/ui/button';

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
          
          <form className='w-full pt-2'>
            <div className='text-center'>
              <h1 className='text-3xl font-youngSerif'>Contact</h1>
            </div>
            {/* Name Input */}
            <motion.div 
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: '0%' }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
            >
              <input 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Naam'
                className='border-2 border-black rounded-lg p-2'
              />
            </motion.div>
            {/* Email Input */}
            <motion.div 
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: '0%' }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
              className='mt-3'
            >
              <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email'
                className='border-2 border-black rounded-lg p-2'
              />
            </motion.div>
            {/* Message Input */}
            <motion.div 
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: '0%' }}
              transition={{ duration: 0.5, delay: 0.32, ease: [0, 0.71, 0.2, 1.01] }}
              className='mt-3'
            >
              <textarea 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Bericht'
                className='border-2 border-black rounded-lg h-40 p-2 w-full'
              />
            </motion.div>
            {/* Submit Button */}
            <motion.div 
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: '0%' }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
            >
              <Button 
                className='border-2 border-black rounded-lg p-2'
              >
                Verstuur
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
  )
}

export default Page;
