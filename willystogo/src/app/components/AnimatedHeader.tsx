"use client"

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedWord from '@/app/components/animatedText'
import { twMerge } from "tailwind-merge"

// const container = {
//     hidden: {},
//     visible: {
//         transition: {
//             staggerChildren: 0.1
//         }
//     }
// }

function AnimatedHeader({ header, className }: { header: string, className?: string }) {
    // const headingRef = useRef(null);
    // const [isVisible, setIsVisible] = useState(true);

    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         ([entry]) => {
    //             setIsVisible(entry.isIntersecting);
    //         },
    //         {
    //             root: null,
    //             rootMargin: '0px',
    //             threshold: 0.1
    //         }
    //     )

    //     if (headingRef.current) {
    //         observer.observe(headingRef.current);
    //     }

    //     return () => {
    //         if (headingRef.current) {
    //             observer.unobserve(headingRef.current);
    //         }
    //     };
    // }, []);


    return (
        <motion.div 
            // ref={headingRef}
            className={twMerge("font-youngSerif text-primary pb-1", className)}
            // variants={container}
            // initial="hidden"
            // animate={isVisible ? "visible" : "hidden"}
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: '0%' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0, 0.71, 0.2, 1.01] }}
        >
            {header}
            {/* {header.split(" ").map((word, index) => (
                <AnimatedWord key={index} word={word} className={className} />
            ))}        */}
        </motion.div>
    )
}

export default AnimatedHeader