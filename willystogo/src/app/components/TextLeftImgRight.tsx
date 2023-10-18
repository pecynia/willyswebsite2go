"use client"

import { useEffect, useRef, useState } from "react"
import { useTransform, useScroll, motion } from "framer-motion"
import Image from "next/image"
import Lenis from "@studio-freight/lenis"
import EditorWrapper from "@/app/components/editor/EditorWrapper"

interface TextLeftImgRightProps {
  documentId: string
  images: string[]
}

const TextLeftImgRight: React.FC<TextLeftImgRightProps> = ({ documentId, images }) => {
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

  return (
    <div ref={container} className="mt-0 sm:mt-10 pl-8 sm:pl-24 min-h-[500px] grid grid-cols-1 md:grid-cols-5 gap-4 p-4 sm:p-16">
        <div className="header-shadow-left col-span-3 bg-secondary flex px-10 pt-4 pb-14">
            <EditorWrapper documentId={documentId} />
        </div>
        <div className="relative col-span-2 h-full">
            <motion.div 
                style={{ y: useTransform(scrollYProgress, [0, 1], [0, -dimension.height * 0.2]) }} 
                className="absolute w-full h-[45%] top-0 left-0">
                <Image src={images[0]} alt="Image 1" layout="fill" className="object-cover object-center"/>
            </motion.div>
            <motion.div 
                style={{ y: useTransform(scrollYProgress, [0, 1], [0, dimension.height * 0.2]) }} 
                className="absolute w-full h-[45%] bottom-0 left-0">
                <Image src={images[1]} alt="Image 2" layout="fill" className="object-cover object-center"/>
            </motion.div>
        </div>
    </div>
)


}

export default TextLeftImgRight
