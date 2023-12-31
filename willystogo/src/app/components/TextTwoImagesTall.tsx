"use client"

import { useEffect, useRef, useState } from "react"
import { useTransform, useScroll, motion } from "framer-motion"
import Image from "next/image"
import Lenis from "@studio-freight/lenis"
import EditorWrapper from "@/app/components/editor/EditorWrapper"
import { twMerge } from "tailwind-merge"

interface TwoImagesProps {
  documentId: string;
  images: [string, string];
  imagesPosition: "left" | "right";
  theme: "light" | "dark";
  verticalPosition?: "above" | "below";
  className?: string;
}

const TextTwoImagesTall: React.FC<TwoImagesProps> = ({ documentId, images, imagesPosition, theme, verticalPosition = "above", className }) => {
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
      className={twMerge(getShadowClass(), "col-span-full lg:col-span-2 bg-secondary-foreground flex px-10 pt-4 pb-10 min-w-[200px] max-w-full", imagesPosition === 'left' && 'lg:order-2')}>
      <EditorWrapper documentId={documentId} />
    </motion.div>
  )

  const Images = (
    <div className={twMerge("pt-20 lg:pt-0 relative col-span-full lg:col-span-3 h-[500px] lg:h-full", imagesPosition === 'right' && 'lg:order-2')}>
        <motion.div 
            className={twMerge("w-[70%] md:w-[40%] lg:w-[55%] lg:h-[40rem] h-full lg:absolute top-[5%] lg:left-[5%] mx-auto lg:ml-10 lg:mr-0 flex-shrink-0", className)}
        >
        <Image src={images[0]} alt="Image 1" fill className="object-cover object-center"/>
      </motion.div>
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, dimension.height * 0.1]) }} 
        className="absolute w-[55%] h-[75%] top-[-15%] left-[35%] lg:w-[35%] lg:h-[110%] lg:top-[45%] lg:left-[55%]">
        <Image src={images[1]} priority alt="Image 2" fill className="object-cover object-center"/>
      </motion.div>

    </div>
  )

  return (
    <motion.div 
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: '0%' }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
      ref={container} 
      className="mt-0 sm:mt-10 pl-8 sm:pl-24 min-h-[500px] grid grid-cols-1 lg:grid-cols-5 gap-4 p-4 sm:p-16">
      {verticalPosition === 'above' ? (imagesPosition === "left" ? Images : TextEditor) : null}
      {verticalPosition === 'below' ? (imagesPosition === "left" ? TextEditor : Images) : null}
      {verticalPosition === 'above' ? (imagesPosition === "left" ? TextEditor : Images) : null}
      {verticalPosition === 'below' ? (imagesPosition === "left" ? Images : TextEditor) : null}
    </motion.div>
  )
}

export default TextTwoImagesTall;
