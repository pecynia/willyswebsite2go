import React from 'react'
import AnimatedHeader from '@/app/components/AnimatedHeader'
import ReviewSlider from '@/app/components/ReviewSlider'

function ReviewSliderWrapper() {
  return (
    <div className='bg-secondary sticky mb-10'>
        <div className='flex flex-col justify-center items-center pt-10'>
            <AnimatedHeader header="Wat onze klanten zeggen" className="text-center text-4xl px-6" />
            <ReviewSlider />
        </div>
    </div>
  )
}

export default ReviewSliderWrapper