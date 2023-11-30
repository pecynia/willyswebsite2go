"use client"

import React from 'react';
import AnimatedHeader from '@/app/components/AnimatedHeader';
import { motion } from 'framer-motion';

import SpacerBig from '@/app/components/SpacerBig';
import SmallTextPopup from '@/app/components/fixedTextPopup';
import Spacer from '@/app/components/Spacer';
import OtherReviews from '@/app/components/OtherReviews';

function ReviewsPage() {
  return (
    <motion.div layout
      transition={{ type: "spring", ease: "easeInOut", duration: 0.8 }}
    >
      <div className='px-16 mt-10 lg:mt-24 mb-0 lg:-mb-20'>
        <AnimatedHeader header="Ervaringen" className='text-4xl' />
      </div>

      <SpacerBig />

      <SmallTextPopup documentId='lukkien-review' imgPath='/imgs/ervaringen/lukkien.png' link='/ervaringen/lukkien' buttonText='Lees meer' />

      {/* Different other reviews */}
      <OtherReviews />

    </motion.div>
  )
}

export default ReviewsPage;
