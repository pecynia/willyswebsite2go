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
import SpacerStart from '@/app/components/spacers/SpacerStart'
import EditorWrapper from '../components/editor/EditorWrapper'

function Page() {
    return (
        <motion.div layout
            transition={{ type: "spring", ease: "easeInOut", duration: 0.8 }}
        >
            <LandingVideo videoPath='imgs/drank/cocktail_downsampled.webm' posterURL='imgs/drank/utils_frame.png' />
            

            <SpacerStart />

            <TextOneImage image="/imgs/drank/arrangement.jpg" imagePosition="right" theme="dark" verticalPosition="below" >
                <EditorWrapper documentId="dranken_arrangement" />
            </TextOneImage>

            <Spacer />

            <div className='-mt-24 lg:mt-0 mb-28'>
                <TextThreeImages images={['/imgs/drank/pop.gif', '/imgs/drank/cocktails.jpg', '/imgs/drank/staand.jpg']} imagesPosition='left' theme="dark" verticalPosition='below'>
                    <EditorWrapper documentId='cocktails' />
                </TextThreeImages>
            </div>

            <SpacerStart />

            <TextPopup imgPath='/imgs/drank/willy.jpg' link='faciliteiten' buttonText='Overige Faciliteiten'>
                <EditorWrapper documentId='opruimen-naar-eigen-event' />
            </TextPopup>

        </motion.div>
  )
}

export default Page