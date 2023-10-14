'use client';
import { useEffect, useRef, useState } from 'react';
import { useTransform, useScroll, motion } from 'framer-motion';
import styles from './page.module.scss';
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
    images: string[]
    y: any
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
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 2]);

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
    <main className={styles.main}>
      <div className={styles.spacer}></div>
      <div ref={gallery} className={styles.gallery}>
        <div className={styles.galleryWrapper}>
          <Column images={[images[0], images[1], images[2]]} y={y} />
          <Column images={[images[3], images[4], images[5]]} y={y2} />
        </div>
      </div>
      <div className={styles.spacer}></div>
    </main>
  );
};

const Column: React.FC<ColumnProps> = ({ images, y }) => {
    return (
    <motion.div 
      className={styles.column}
      style={{ y }}
    >
      {images.map((src, i) => (
        <div key={i} className={styles.imageContainer}>
          <Image src={`/imgs/${src}`} alt="image" fill />
        </div>
      ))}
    </motion.div>
  );
};

export default ParallaxScrollInfo;
