"use client"

import { useEffect, useRef, useState } from "react"
import { useTransform, useScroll, motion } from "framer-motion"
import Image from "next/image"
import Lenis from "@studio-freight/lenis"
import EditorWrapper from "@/app/components/editor/EditorWrapper"
import { twMerge } from "tailwind-merge"

interface SingleImageProps {
  documentId: string
  image: string
  imagePosition: "left" | "right"
  theme: "light" | "dark"
  className?: string
}

const TextSingleImage: React.FC<SingleImageProps> = ({ documentId, image, imagePosition, theme, className }) => {
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
      return imagePosition === "left" ? "header-shadow-right-light" : "header-shadow-left-light"
    }
    return imagePosition === "left" ? "header-shadow-right" : "header-shadow-left"
  }

  const TextEditor = (
      <div className={twMerge(getShadowClass(), "col-span-3 lg:col-span-2 bg-secondary flex px-10 pt-4 pb-14")}>
          <EditorWrapper documentId={documentId} />
      </div>
  )

  const SingleImg = (
    <div className="relative col-span-2 lg:col-span-3 h-full -z-1">
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -dimension.height * 0.2]) }} 
        className={twMerge("absolute w-full h-full top-[10%] left-0", className)}
      >
        <Image src={image} alt="Image" fill className="object-cover object-center"/>
      </motion.div>
    </div>
  )

  return (
    <div ref={container} className="mt-0 space-x-10 sm:mt-10 pl-8 sm:pl-24 min-h-[500px] grid grid-cols-1 md:grid-cols-5 gap-4 p-4 sm:p-16">
      {imagePosition === "left" ? SingleImg : TextEditor}
      {imagePosition === "left" ? TextEditor : SingleImg}
    </div>
  )
}

export default TextSingleImage
