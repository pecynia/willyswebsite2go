"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { twMerge } from "tailwind-merge"


function AnimatedHeader({ header, className }: { header: string, className?: string }) {
    return (
        <motion.div 
            className={twMerge("font-youngSerif text-primary pb-1", className)}
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: '0%' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0, 0.71, 0.2, 1.01] }}
        >
            {header}
        </motion.div>
    )
}

export default AnimatedHeader