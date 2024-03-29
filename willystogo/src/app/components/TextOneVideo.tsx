"use client"

import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import EditorWrapper from '@/app/components/editor/EditorWrapper'
import { twMerge } from 'tailwind-merge'
import YoutubeComp from './YoutubeComp'
import Lenis from '@studio-freight/lenis'

interface TextVideoProps {
  children: React.ReactNode
  videoId: string
  imagePosition?: 'left' | 'right'
  theme?: 'light' | 'dark'
  verticalPosition?: 'above' | 'below'
  className?: string
}

const TextOneVideo: React.FC<TextVideoProps> = ({ children, videoId, imagePosition = 'left', theme = 'dark', verticalPosition = 'above', className }) => {
  const container = useRef<HTMLDivElement | null>(null)
  const [dimension, setDimension] = useState({ width: 0, height: 0 })
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  })

  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      smoothTouch: true,
      normalizeWheel: true,
    })

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener("resize", resize)
    requestAnimationFrame(raf)
    resize()

    return () => {
      lenis.destroy()
      window.removeEventListener("resize", resize)
    }
  }, [])
  
  const getShadowClass = () => {
    if (theme === 'light') {
      return imagePosition === 'right' ? 'header-shadow-left-light' : 'header-shadow-right-light'
    }
    return imagePosition === 'right' ? 'header-shadow-left' : 'header-shadow-right'
  }

  const textEditor = (
    <motion.div layout
      transition={{ duration: 0.7, delay: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
      className={twMerge(getShadowClass(), 'mb-20 col-span-full lg:col-span-2 bg-secondary-foreground pb-10 flex px-10 pt-4 min-w-[200px] max-w-full', imagePosition === 'left' ? 'lg:col-start-4  lg:order-2' : '')}>
      {children}
    </motion.div>
  )

  const videoComp = (
    <div className={twMerge("relative col-span-full lg:col-span-3 h-full -mt-10", imagePosition === 'right' ? 'lg:order-2' : '')}>
      <motion.div layout
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        className=""
      >
        <YoutubeComp videoId={videoId} />
      </motion.div>
    </div>
  )
  return (
    <motion.div       
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: '0%' }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
      ref={container} 
      className="mt-0 space-x-0 lg:space-x-10 lg:mt-24 pl-8 lg:pl-24 min-h-[500px] grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-10 p-4 lg:p-16"
    >
        <>
          {verticalPosition === 'above' && videoComp}
          {textEditor}
          {verticalPosition === 'below' && videoComp}
        </>
    </motion.div>
  )
  
}

export default TextOneVideo
