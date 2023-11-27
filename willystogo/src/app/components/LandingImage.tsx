"use client"

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useTransform, useScroll, motion } from 'framer-motion'
import AnimatedWord from '@/app/components/animatedText'

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05
    }
  }
}

const LandingImage = () => {
  const ref = useRef(null)
  const [dimension, setDimension] = useState({width: 0, height: 0})
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const { height } = dimension
  const y = useTransform(scrollYProgress, [0, 1], [height * 0.5, 1])

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener("resize", resize)
    resize()

    return () => {
      window.removeEventListener("resize", resize)
    }
  }, [])

  const [isVisible, setIsVisible] = useState(true) // Default to true for initial animation
  const headingRef = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    )

    if (headingRef.current) {
      observer.observe(headingRef.current)
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current)
      }
    }
  }, [])


  return (
    <div className="-mb-40 md:mb-0 flex justify-center sm:justify-start space-x-4 space-y-10 overflow-hidden h-screen sm:h-screen" ref={ref}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        style={{ y }} 
        className={`absolute z-[-1] left-0 w-full h-full top-[-30%]`}
      >
        <Image 
          className="object-cover object-center -mt-2"
          src="/imgs/cocktails.jpg"
          alt="Willy's2Go Indonesische Catering"
          priority
          fill
        />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: '-100%' }}
        animate={{ opacity: 1, x: '0%' }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
        className="z-20 p-0 pt-24 sm:p-6 lg:p-8 overflow-hidden max-w-2xl w-3/4 md:w-3/4 lg:w-auto"
      >
        <div className="header-shadow-left pb-8 relative overflow-hidden bg-cover bg-center bg-secondary flex flex-col justify-start items-center text-left">
        <motion.div 
          ref={headingRef}
          className="text-4xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xsbg-secondary/60 p-6 sm:p-8 lg:p-10"
          variants={container}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {"Indonesische Catering".split(" ").map((word, index) => (
            <AnimatedWord key={index} word={word} />
          ))}
            <p className='text-lg sm:text-xl text-secondary-foreground'>
              Willys2Go is een Indonesische catering service in de regio Ede. Wij verzorgen de lekkerste Indonesische gerechten voor uw gelegenheid.
            </p>        
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default LandingImage
