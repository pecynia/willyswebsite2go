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

const TextTwoImages: React.FC<TwoImagesProps> = ({ documentId, images, imagesPosition, theme, verticalPosition = "above", className }) => {
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
      return imagesPosition === "right" ? "header-shadow-right-light" : "header-shadow-left-light";
    }
    return imagesPosition === "right" ? "header-shadow-right" : "header-shadow-left";
  }

  const TextEditor = (
    <div className={twMerge(getShadowClass(), "col-span-full lg:col-span-2 bg-secondary flex px-10 pt-4 pb-14 min-w-[200px] max-w-full", imagesPosition === 'left' && 'lg:order-2')}>
      <EditorWrapper documentId={documentId} />
    </div>
  )

  const Images = (
    <div className={twMerge("pt-20 lg:pt-0 relative col-span-full lg:col-span-3 h-[500px] lg:h-full", imagesPosition === 'right' && 'lg:order-2')}>
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -dimension.height * 0.2]) }} 
        className="absolute w-[60%] h-[70%] top-[30%] left-[5%] lg:w-[80%] lg:h-[70%] lg:top-[35%]">
        <Image src={images[0]} alt="Image 1" fill className="object-cover object-center"/>
      </motion.div>
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, dimension.height * 0.5]) }} 
        className="absolute w-[70%] h-[80%] top-[-25%] left-[25%] lg:w-[60%] lg:h-[60%] lg:top-[-20%] lg:left-[25%]">
        <Image src={images[1]} alt="Image 2" fill className="object-cover object-center"/>
      </motion.div>

    </div>
  )

  return (
    <div ref={container} className="mt-0 sm:mt-10 pl-8 sm:pl-24 min-h-[500px] grid grid-cols-1 lg:grid-cols-5 gap-4 p-4 sm:p-16">
      {verticalPosition === 'above' ? (imagesPosition === "left" ? Images : TextEditor) : null}
      {verticalPosition === 'below' ? (imagesPosition === "left" ? TextEditor : Images) : null}
      {verticalPosition === 'above' ? (imagesPosition === "left" ? TextEditor : Images) : null}
      {verticalPosition === 'below' ? (imagesPosition === "left" ? Images : TextEditor) : null}
    </div>
  )
}

export default TextTwoImages;
