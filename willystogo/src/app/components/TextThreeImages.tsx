"use client"

import { useEffect, useRef, useState } from "react"
import { useTransform, useScroll, motion } from "framer-motion"
import Image from "next/image"
import Lenis from "@studio-freight/lenis"
import EditorWrapper from "@/app/components/editor/EditorWrapper"
import { twMerge } from "tailwind-merge"

interface ThreeImagesProps {
  documentId: string;
  images: [string, string, string];
  imagesPosition: "left" | "right";
  theme: "light" | "dark";
  verticalPosition?: "above" | "below";
  className?: string;
}

const TextThreeImages: React.FC<ThreeImagesProps> = ({ documentId, images, imagesPosition, theme, verticalPosition = "above", className }) => {
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
      return imagesPosition === "right" ? "header-shadow-left-light" : "header-shadow-left-right";
    }
    return imagesPosition === "right" ? "header-shadow-left" : "header-shadow-right";
  }

  const TextEditor = (
    <motion.div layout
      transition={{ duration: 0.7, delay: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
      className={twMerge(getShadowClass(), "col-span-full lg:col-span-2 bg-secondary-foreground  flex px-10 pt-4 pb-10 min-w-[200px] max-w-full", imagesPosition === 'left' && 'lg:order-2')}>
      <EditorWrapper documentId={documentId} />
    </motion.div>
  )

  const Images = (
    <div className={twMerge("pt-0 relative col-span-full lg:col-span-4 h-[500px] lg:h-full", imagesPosition === 'right' && 'lg:order-2')}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        // style={{ y: useTransform(scrollYProgress, [0, 1], [0, -dimension.height * 0.1]) }} 
        className="absolute w-[80%] md:w-[50%] h-[60%] md:h-[150%] top-[30%] md:top-[-15%] left-[5%]">
        <Image src={images[0]} priority alt="Image 1" fill className="object-cover object-center"/>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.4,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, dimension.height * 0.1]) }} 
        className="absolute w-[70%] md:w-[50%] h-[50%] md:h-[70%] top-[-5%] md:top-[0%] left-[25%] md:left-[50%]">
        <Image src={images[1]} alt="Image 2" fill className="object-cover object-center"/>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.9,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -dimension.height * 0.2]) }} 
        className="absolute w-[60%] md:w-[40%] h-[40%] md:h-[60%] lg:h-[70%] top-[100%] md:top-[100%] left-[12%] md:left-[35%]">
        <Image src={images[2]} alt="Image 3" fill className="object-cover object-center"/>
      </motion.div>
    </div>
  )

  return (
    <motion.div 
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: '0%' }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
      ref={container} 
      className="mt-0 sm:mt-10 pl-8 sm:pl-24 min-h-[500px] grid grid-cols-1 lg:grid-cols-6 gap-4 p-4 sm:p-16"
    >
      {verticalPosition === 'above' ? (imagesPosition === "left" ? Images : TextEditor) : null}
      {verticalPosition === 'below' ? (imagesPosition === "left" ? TextEditor : Images) : null}
      {verticalPosition === 'above' ? (imagesPosition === "left" ? TextEditor : Images) : null}
      {verticalPosition === 'below' ? (imagesPosition === "left" ? Images : TextEditor) : null}
    </motion.div>
  )
}

export default TextThreeImages;
