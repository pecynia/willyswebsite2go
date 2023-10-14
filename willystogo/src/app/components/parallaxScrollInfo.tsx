"use client"

import { useEffect, useRef, useState } from 'react';
import { useTransform, useScroll, motion } from 'framer-motion';
import Image from 'next/image';

const images = [
  "sates.jpg",
  "cocktails.jpg",
  "zanger.png",
  "vlam.png",
  "kratje.jpg",
  "yan_sate.jpg"
]

interface ColumnProps {
    images: string[];
    y: any;
    positionClass: string;
}

const ParallaxScrollInfo = () => {
  
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 1.5]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.5]);

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main className="h-[150vh] overflow-hidden bg-cover bg-center bg-primary">
      <div ref={gallery} className="h-[175vh] overflow-hidden bg-cover bg-center">
        <div className="relative top-[-12.5vh] h-[200vh] flex gap-[2vw] p-[2vw]">
          <Column images={[images[0], images[1], images[2]]} y={y} positionClass="top-[-40%]" />
          <Column images={[images[3], images[4], images[5]]} y={y2} positionClass="top-[-90%]" />
        </div>
      </div>
    </main>
  );
};

const Column: React.FC<ColumnProps> = ({ images, y, positionClass }) => {
    return (
      <motion.div 
        className={`relative h-full w-1/4 min-w-[250px] flex flex-col gap-[2vw] whitespace-nowrap ${positionClass}`}
        style={{ y }}
      >
        {images.map((src, i) => (
          <div key={i} className=" h-[33%] w-full relative rounded-[1vw] overflow-hidden">
            <Image src={`/imgs/${src}`} alt="image" fill />
          </div>
        ))}
      </motion.div>
    );
};

export default ParallaxScrollInfo;
