"use client";

import { useEffect, useRef, useState } from "react";
import { useTransform, useScroll, motion } from "framer-motion";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import EditorWrapper from "@/app/components/editor/EditorWrapper";

interface TextLeftImgRightProps {
  documentId: string;
  images: string[];
}

const TextLeftImgRight: React.FC<TextLeftImgRightProps> = ({ documentId, images }) => {
  const container = useRef<HTMLDivElement | null>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      smoothTouch: true,
      normalizeWheel: true,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      lenis.destroy();
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div ref={container} className="mt-1 pl-24 h-[500px] flex justify-start p-16 items-center">
      <div className="header-shadow-left w-2/5 h-full bg-secondary flex px-10 pt-4 border-2">
        <EditorWrapper documentId={documentId} />
      </div>
      <div className="relative w-2/5 h-full flex-shrink-0 pl-32 border-2">
        <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, -dimension.height * 0.3]) }} className="absolute w-full h-full top-[40%]">
          <Image src={images[0]} alt="Image 1" fill className="object-cover object-center" />
        </motion.div>
        <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, dimension.height * 0.3]) }} className="absolute ml-64 w-[70%] h-[70%] top-[-30%]">
          <Image src={images[1]} alt="Image 2" fill className="object-cover object-center" />
        </motion.div>
      </div>
    </div>
  );
};

export default TextLeftImgRight;
