"use client"

import { useEffect, useRef, useState, useLayoutEffect } from 'react'

import { useTransform, useScroll, motion } from 'framer-motion'
import Image from 'next/image'
import Lenis from '@studio-freight/lenis'
import EditorWrapper from '@/app/components/editor/EditorWrapper'

const images = [
  "sates.jpg",
  "cocktails.jpg",
  "zanger.png",
  "vlam.png",
  "kratje.jpg",
  "yan_sate.jpg"
]

interface ColumnProps {
    images: string[]
    y: any
    positionClass: string
}

interface TextboxProps {
    y: any
    isActive: boolean
}

const Textbox: React.FC<TextboxProps> = ({ y, isActive }) => (
  <motion.div 
    initial={{ opacity: 0, x: '100%' }}
    animate={{ opacity: 1, x: '0%' }}
    transition={{ duration: 0.7, delay: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
    className={`header-shadow-right absolute right-0 top-24 mr-12 my-4 w-2/5 min-h-[20%] max-h-[80%] mb-12 bg-secondary p-4 hidden lg:block ${isActive ? 'fixed' : ''}`}
    style={{ y }}
  >
      <EditorWrapper documentId="intro"/>
  </motion.div>
)



const Column: React.FC<ColumnProps> = ({ images, y, positionClass }) => (
  <motion.div
    initial={{ opacity: 0, x: '-100%' }}
    animate={{ opacity: 1, x: '0%' }}
    transition={{ duration: 0.7, delay: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
    className={`relative h-3/4 sm:h-full w-full lg:w-1/4 min-w-[250px] flex flex-col ${positionClass}`}
    style={{ y }}
  >
    {images.map((src, i) => (
      <div key={i} className="h-[33%] relative overflow-hidden">
        <Image src={`/imgs/${src}`} alt="image" fill className='object-cover object-center my-4'/>
      </div>
    ))}
  </motion.div>
)

const ParallaxScrollInfo = () => {
  const gallery = useRef<HTMLDivElement | null>(null)
  const [dimension, setDimension] = useState({ width: 0, height: 0 })
  const [textboxY, setTextboxY] = useState(0)
  const [isTextboxInView, setIsTextboxInView] = useState(false)
  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, dimension.height * 1.5])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, dimension.height * 3.5])

  useEffect(() => {
    const handleScroll = () => {
      if (!gallery.current) return

      const galleryTop = gallery.current.getBoundingClientRect().top
      const galleryHeight = gallery.current.getBoundingClientRect().height
      const isInView = galleryTop <= 0 && galleryTop > -galleryHeight + window.innerHeight

      setIsTextboxInView(isInView)
      if (isInView) setTextboxY(-galleryTop)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
      lenis.destroy() // Ensure Lenis instance is destroyed to prevent any potential memory leaks
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <div>
      <div className="-mb-1 min-h-[110vh] sm:min-h-[125vh] lg:min-h-[150vh] overflow-hidden bg-cover bg-center bg-primary-secondary-foreground">
      <div ref={gallery} className="h-[175vh] bg-cover bg-center relative z-10 pb-32 lg:pb-1/3">
          <div className="relative -top-12 h-[250vh] flex space-x-4 px-4">
            <Column images={[images[0], images[4], images[2]]} y={y} positionClass="top-[-40%]" />
            <Column images={[images[3], images[1], images[5]]} y={y2} positionClass="top-[-90%] sm:block hidden" />
          </div>
          <Textbox y={textboxY} isActive={isTextboxInView} />
          <div className={`hidden lg:block ${isTextboxInView ? 'block' : 'hidden'} w-2/5 h-1/2 mb-12`}></div>
        </div>
      </div>
    </div>
  )
}

export default ParallaxScrollInfo
