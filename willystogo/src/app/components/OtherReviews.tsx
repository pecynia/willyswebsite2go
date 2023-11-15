import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';

import { reviews } from '@/dictionaries/reviews';

function OtherReviews() {
  return (
    <div className="p-8">
        {reviews.quotes.map((review, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? '-100%' : '100%' }}
            whileInView={{ opacity: 1, x: '0%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0, 0.71, 0.2, 1.01] }}
            className={`flex flex-col md:flex-row items-center max-w-5xl mx-auto m-16 bg-secondary-foreground ${index % 2 === 0 ? 'header-shadow-left lg:ml-[15%]' : 'header-shadow-right lg:mr-[15%]'}`}
          >
            <div className={`${index % 2 === 0 ? 'order-2' : ''} w-full md:w-1/4 relative`} style={{ aspectRatio: '1 / 1.5' }}>
              <Image
                src={review.img.path}
                alt={review.img.alt}
                fill
                className="object-center object-cover"
              />
            </div>
            <div className="flex-1 px-10 py-12 ">
              <h3 className="text-2xl font-bold">{review.companyName || review.author}</h3>
              <p className="italic">{review.date}</p>
              <br />
              <p>{review.quote}</p>
              <br />
              {review.companyName && <p className="font-bold">{review.author}</p>}
            </div>
          </motion.div>
        ))}
      </div>
  )
}

export default OtherReviews
