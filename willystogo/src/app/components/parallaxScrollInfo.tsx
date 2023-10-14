"use client"

import { useEffect, useRef, useState } from 'react';
import { useTransform, useScroll, motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

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
    <main className="h-[90vh] sm:h-[125vh] lg:h-[170vh] overflow-hidden bg-cover bg-center bg-primary">
      <div ref={gallery} className="h-[175vh] overflow-hidden bg-cover bg-center">
        <div className="relative -top-12 h-[200vh] flex space-x-4 px-4">
          <Column images={[images[0], images[1], images[2]]} y={y} positionClass="top-[-40%]" />
          <Column images={[images[3], images[4], images[5]]} y={y2} positionClass="top-[-90%] sm:block hidden" />
        </div>
      </div>
    </main>
  );
};

const Column: React.FC<ColumnProps> = ({ images, y, positionClass }) => {
    return (
      <motion.div 
        className={`relative h-3/4 sm:h-full w-full lg:w-1/4 min-w-[250px] flex flex-col ${positionClass}`}
        style={{ y }}
      >
        {images.map((src, i) => (
          <div key={i} className="h-[33%] relative overflow-hidden rounded-xl">
            <Image src={`/imgs/${src}`} alt="image" fill className='object-cover object-center my-4 rounded-xl' />
          </div>
        ))}
      </motion.div>
    );
};




export default ParallaxScrollInfo;
