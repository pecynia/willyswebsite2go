"use client"

import { useEffect, useRef, useState } from "react"
import { useTransform, useScroll, motion } from "framer-motion"
import Image from "next/image"
import Lenis from "@studio-freight/lenis"
import EditorWrapper from "@/app/components/editor/EditorWrapper"
import { twMerge } from "tailwind-merge"

interface SingleImageProps {
  children: React.ReactNode
  image: string
  imagePosition?: "left" | "right"
  theme?: "light" | "dark"
  verticalPosition?: "above" | "below";
  className?: string
}

const TextSingleImageTall: React.FC<SingleImageProps> = ({ children, image, imagePosition = "left", theme = "dark", verticalPosition= "above", className }) => {
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
    if (theme === "light") {
      return imagePosition === "right" ? "header-shadow-left-light" : "header-shadow-right-light"
    }
    return imagePosition === "right" ? "header-shadow-left" : "header-shadow-right"
  }

  const TextEditor = (
    <motion.div layout
      transition={{ duration: 0.7, delay: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
      className={twMerge(getShadowClass(), "mb-20 col-span-full lg:col-span-3 bg-secondary-foreground pb-10 flex px-10 pt-4 min-w-[200px] max-w-full", imagePosition === 'left' && 'lg:order-2')}>
        {children}
    </motion.div>
  )

  const SingleImg = (
    <div className={twMerge("pt-20 lg:pt-0 relative col-span-full lg:col-span-3 h-[500px] lg:h-full", imagePosition === 'right' && 'lg:order-2')}>
      <motion.div layout
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        ref={container}
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -dimension.height * 0.2]) }} 
        className={twMerge("w-[70%] md:w-[40%] lg:w-[55%] lg:h-[40rem] h-full lg:absolute top-[15%] lg:left-[10%] mx-auto lg:ml-10 lg:mr-0 flex-shrink-0", className)}
      >
        <Image src={image} alt="Image" fill className="object-cover object-center"/>
      </motion.div>
    </div>
  )

  return (
    <motion.div       
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: '0%' }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
      ref={container} 
      className="mt-0 space-x-0 lg:space-x-10 lg:mt-24 pl-8 lg:pl-24 min-h-[500px] grid grid-cols-1 lg:grid-cols-6 gap-4 lg:gap-5 p-4 lg:p-16"
    >
      {verticalPosition === 'above' ? SingleImg : TextEditor}
      {verticalPosition === 'below' ? SingleImg : TextEditor}
    </motion.div>
  )
}

export default TextSingleImageTall;
