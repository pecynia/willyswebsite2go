"use client"

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/app/components/ui/button';
import { Send } from 'lucide-react';
import { useTransform, useScroll, motion } from 'framer-motion';

const LandingImg = () => {
  const ref = useRef(null);
  const [dimension, setDimension] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [height * 0.5, 1]);

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
    <div className="flex justify-start space-x-4 space-y-10 overflow-hidden" ref={ref}>
      <motion.div style={{ y }} className={`absolute z-[-1] left-0 w-full h-full top-[-10%]`}>
        <Image 
          className="object-cover object-center -mt-2"
          src="/imgs/cocktails.jpg"
          alt="Willy's2Go Indonesische Catering"
          priority
          fill
        />
      </motion.div>
      <div className="z-20 p-4 sm:p-6 lg:p-8 rounded-lg overflow-hidden max-w-2xl w-3/4 md:w-3/4 lg:w-auto">
        <div className="rounded-3xl relative overflow-hidden bg-cover bg-center backdrop-blur-md bg-white bg-opacity-20 flex flex-col justify-start items-center text-center gap-y-8">
          <div className="text-4xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-black bg-secondary/60 p-6 sm:p-8 lg:p-10 rounded-lg">
            <h2 className="pb-2 font-youngSerif text-white">Indonesische Catering</h2>
            <Button className="w-3/4 py-6 text-lg hover:bg-primary">
              <Send className="mr-2" />
              <span className="textWithAnimatedUnderline">Bereik Ons</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingImg;
