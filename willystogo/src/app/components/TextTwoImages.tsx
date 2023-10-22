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
  className?: string;
}

const TextTwoImages: React.FC<TwoImagesProps> = ({ documentId, images, imagesPosition, theme, className }) => {
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
      return imagesPosition === "left" ? "header-shadow-right-light" : "header-shadow-left-light";
    }
    return imagesPosition === "left" ? "header-shadow-right" : "header-shadow-left";
  }

  const TextEditor = (
    <div className={twMerge(getShadowClass(), "col-span-3 lg:col-span-2 bg-secondary flex px-10 pt-4 pb-14")}>
      <EditorWrapper documentId={documentId} />
    </div>
  )

  const Images = (
    <div className="relative col-span-2 lg:col-span-3 h-full -z-1">
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -dimension.height * 0.2]) }} 
        className="absolute w-[100%] h-[40%] top-[50%] left-[10%] lg:w-[80%] lg:h-[70%] lg:top-[35%]">
        <Image src={images[0]} alt="Image 1" fill className="object-cover object-center"/>
      </motion.div>
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, dimension.height * 0.5]) }} 
        className="absolute w-[80%] h-[40%] bottom-[70%] left-[30%] lg:w-[60%] lg:h-[60%] lg:top-[-20%] lg:left-[25%]">
        <Image src={images[1]} alt="Image 2" fill className="object-cover object-center"/>
      </motion.div>
    </div>
  )

  return (
    <div ref={container} className="mt-0 sm:mt-10 pl-8 sm:pl-24 min-h-[500px] grid grid-cols-1 md:grid-cols-5 gap-4 p-4 sm:p-16">
      {imagesPosition === "left" ? Images : TextEditor}
      {imagesPosition === "left" ? TextEditor : Images}
    </div>
  )
}

export default TextTwoImages
