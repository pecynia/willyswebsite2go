"use client"

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import EditorWrapper from '@/app/components/editor/EditorWrapper';
import { twMerge } from 'tailwind-merge';
import YoutubeComp from './YoutubeComp';

interface TextVideoProps {
  documentId: string;
  videoId: string;
  imagePosition?: 'left' | 'right';
  theme?: 'light' | 'dark';
  verticalPosition?: 'above' | 'below';
  className?: string;
}

const TextOneVideo: React.FC<TextVideoProps> = ({ documentId, videoId, imagePosition = 'left', theme = 'dark', verticalPosition = 'above', className }) => {
  const container = useRef<HTMLDivElement | null>(null);

  const getShadowClass = () => {
    if (theme === 'light') {
      return imagePosition === 'right' ? 'header-shadow-left-light' : 'header-shadow-right-light';
    }
    return imagePosition === 'right' ? 'header-shadow-left' : 'header-shadow-right';
  };

  const textEditor = (
    <motion.div layout
      transition={{ duration: 0.7, delay: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
      className={twMerge(getShadowClass(), 'mb-20 col-span-full lg:col-span-2 bg-secondary-foreground pb-10 flex px-10 pt-4 min-w-[200px] max-w-full', imagePosition === 'left' && 'lg:order-2')}>
      <EditorWrapper documentId={documentId} />
    </motion.div>
  );

  const videoComp = (
    <YoutubeComp videoId={videoId} />
  );

  return (
    <motion.div       
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: '0%' }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
      ref={container} 
      className="mt-0 space-x-0 lg:space-x-10 lg:mt-24 pl-8 lg:pl-24 min-h-[500px] grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-10 p-4 lg:p-16"
    >
        <>
          {verticalPosition === 'above' && videoComp}
          {textEditor}
          {verticalPosition === 'below' && videoComp}
        </>
    </motion.div>
  );
  
};

export default TextOneVideo;
