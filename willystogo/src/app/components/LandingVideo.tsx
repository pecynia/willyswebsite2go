"use client"

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedWord from '@/app/components/animatedText'

function LandingVideo() {
  const [isVisible, setIsVisible] = useState(true);
  const headingRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-screen top-0">
      <video 
          playsInline 
          autoPlay 
          muted 
          loop 
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover 0"
      >
        <source src="/imgs/full_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative flex flex-col justify-center items-center w-full top-[80%]">
        <motion.div 
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: '0%' }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
        >
          <div className=''>
            <p className='text-7xl font-youngSerif text-white px-12 py-4'>Indonesische Catering</p>
          </div>

        </motion.div>
      </div>

      {/* <div className="absolute top-24 left-16">
        <motion.div 
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: '0%' }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
            className="flex p-0 pt-24 md:p-6 lg:p-8 max-w-2xl w-3/4 md:w-3/4 lg:w-auto"
        >
          <div className="header-shadow-left pb-8 relative bg-cover bg-center bg-secondary flex flex-col justify-start items-center text-left">
            <motion.div 
                ref={headingRef}
                className="text-4xl md:text-5xl lg:text-6xl md:max-w-xl max-w-xs p-6 md:p-8 lg:p-10"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
            >
              {"Indonesische Catering".split(" ").map((word, index) => (
                  <AnimatedWord key={index} word={word} />
              ))}
              <p className='text-lg md:text-xl text-primary'>
                Willys2Go is een Indonesische catering service in de regio Ede. Wij verzorgen de lekkerste Indonesische gerechten voor uw gelegenheid.
              </p>        
            </motion.div>
          </div>
        </motion.div>
      </div> */}
    </div>
  )
}

export default LandingVideo
