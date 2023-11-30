"use client"

import React from 'react'
import { motion } from 'framer-motion'
import AnimatedHeader from '@/app/components/AnimatedHeader'
import TextOneImage from '@/app/components/TextOneImage'
import TextThreeImages from '@/app/components/TextThreeImages'
import Spacer from '@/app/components/Spacer'
import SpacerBig from '@/app/components/SpacerBig'
import TextPopup from '@/app/components/textPopup'
import LandingVideo from '@/app/components/LandingVideo'

function Page() {
    return (
        <motion.div layout
            transition={{ type: "spring", ease: "easeInOut", duration: 0.8 }}
        >
            <LandingVideo videoPath='imgs/drank/4k-cocktail.mp4' />
            
            {/* <div className='relative px-16 mt-10 lg:mt-24 mb-0 lg:-mb-20'>
                <AnimatedHeader header="Drank" className='text-4xl' />
            </div> */}

            <SpacerBig />


            <TextOneImage documentId="dranken_arrangement" image="/imgs/drank/arrangement.png" imagePosition="right" theme="dark" verticalPosition="below" />

            <Spacer />

            <div className='-mt-24 lg:mt-0 mb-28'>
                <TextThreeImages documentId="cocktails" images={['/imgs/drank/cocktails.jpg', '/imgs/drank/cocktails.jpg', '/imgs/drank/cocktail_small.jpg']} imagesPosition='left' theme="dark" verticalPosition='below'/>
            </div>

            <SpacerBig />

            <TextPopup documentId="opruimen-naar-eigen-event" imgPath='/imgs/drank/willy.jpg' link='faciliteiten' buttonText='Overige Faciliteiten' />

        </motion.div>
  )
}

export default Page