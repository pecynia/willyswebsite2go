import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';

import { reviews } from '@/dictionaries/reviews';


function OtherReviews() {
  return (
    <div className="">
        {reviews.quotes.map((review, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? '-100%' : '100%' }}
            whileInView={{ opacity: 1, x: '0%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0, 0.71, 0.2, 1.01] }}
            className={`flex flex-col md:flex-row items-center max-w-6xl mx-auto m-16 bg-secondary-foreground ${index % 2 === 0 ? 'header-shadow-right ml-[15%]' : 'mr-[15%] header-shadow-left'}`}
          >
            {index % 2 !== 0 && (
                <div>
                    <Image
                        src={review.img.path}
                        alt={review.img.alt}
                        width={300}
                        height={200}
                        className="object-center object-cover"
                    />
              </div>
            )}
            <div className="flex-1 px-10 py-12 ">
                <h3 className="text-2xl font-bold">{review.companyName || review.author}</h3>
                <p className="italic">{review.date}</p>
                <p>{review.quote}</p>
                {review.companyName && <p className="font-bold">{review.author}</p>}
            </div>
            {index % 2 === 0 && (
                <div>
                    <Image
                        src={review.img.path}
                        alt={review.img.alt}
                        width={300}
                        height={200}
                        className="object-cover object-center"
                    />
                </div>
            )}
          </motion.div>
        ))}
      </div>
  )
}

export default OtherReviews