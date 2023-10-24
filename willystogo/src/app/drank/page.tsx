"use client"

import React from 'react'
import { motion } from 'framer-motion'
import AnimatedHeader from '@/app/components/AnimatedHeader'
import TextOneImage from '@/app/components/TextOneImage'
import TextThreeImages from '@/app/components/TextThreeImages'

function page() {
    return (
        <motion.div layout
            transition={{ type: "spring", ease: "easeInOut", duration: 0.8 }}
        >
            <div className='relative px-16 mt-10 lg:mt-24 mb-0 lg:-mb-20'>
                <AnimatedHeader header="Drank" className='text-4xl' />
            </div>


            <TextOneImage documentId="dranken_arrangement" image="/imgs/cocktails.jpg" imagePosition="right" theme="dark" verticalPosition="below" />

            <div className='-mt-24 lg:mt-0 mb-28'>
                <TextThreeImages documentId="cocktails" images={['/imgs/cocktails.jpg', '/imgs/willy.png', '/imgs/sates_2.jpg']} imagesPosition='left' theme="dark" verticalPosition='below'/>
            </div>

        </motion.div>
  )
}

export default page