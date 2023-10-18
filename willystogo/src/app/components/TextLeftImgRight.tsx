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
    <div ref={container} className="mt-0 sm:mt-10 pl-8 sm:pl-24 h-[500px] flex justify-start p-4 sm:p-16 items-center">
      <div className="header-shadow-left w-full md:w-3/5 lg:w-2/5 sm:h-full md:h-[140%] mt-0 md:mt-24 lg:h-full bg-secondary flex px-10 pt-4">
        <EditorWrapper documentId={documentId} />
      </div>
      <div className="relative w-2/5 h-full flex-shrink-0 pl-2 md:ml-12 lg:pl-8 hidden md:block">
        <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, -dimension.height * 0.2]) }} className="absolute top-[40%] ml-0 lg:ml-8 w-[100%] h-[70%] md:w-[100%] md:h-[90%] lg:w-[80%] lg:h-[100%]">
          <Image src={images[0]} alt="Image 1" fill className="object-cover object-center" />
        </motion.div>
        <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, dimension.height * 0.2]) }} className="absolute ml-16 md:ml-20 lg:ml-48 w-[70%] h-[50%] md:w-[80%] md:h-[60%] lg:w-[70%] lg:h-[70%]">
          <Image src={images[1]} alt="Image 2" fill className="object-cover object-center" />
        </motion.div>
      </div>
    </div>
  );
};

export default TextLeftImgRight;
