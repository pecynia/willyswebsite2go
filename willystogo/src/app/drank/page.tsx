"use client"

import React from 'react'
import { motion } from 'framer-motion'
import AnimatedHeader from '@/app/components/AnimatedHeader'
import TextOneImage from '@/app/components/TextOneImage'
import TextThreeImages from '@/app/components/TextThreeImages'
import Spacer from '@/app/components/spacers/Spacer'
import SpacerBig from '@/app/components/spacers/SpacerBig'
import TextPopup from '@/app/components/textPopup'
import LandingVideo from '@/app/components/LandingVideo'
import SpacerStart from '../components/spacers/SpacerStart'

function Page() {
    return (
        <motion.div layout
            transition={{ type: "spring", ease: "easeInOut", duration: 0.8 }}
        >
            <LandingVideo videoPath='imgs/drank/cocktail_downsampled.webm' posterURL='imgs/drank/utils_frame.png' />
            

            <SpacerStart />


            <TextOneImage documentId="dranken_arrangement" image="/imgs/drank/arrangement.jpg" imagePosition="right" theme="dark" verticalPosition="below" />

            <Spacer />

            <div className='-mt-24 lg:mt-0 mb-28'>
                <TextThreeImages documentId="cocktails" images={['/imgs/drank/pop.gif', '/imgs/drank/cocktails.jpg', '/imgs/drank/staand.jpg']} imagesPosition='left' theme="dark" verticalPosition='below'/>
            </div>

            <SpacerStart />

            <TextPopup documentId="opruimen-naar-eigen-event" imgPath='/imgs/drank/willy.jpg' link='faciliteiten' buttonText='Overige Faciliteiten' />

        </motion.div>
  )
}

export default Page