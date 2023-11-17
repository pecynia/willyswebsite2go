"use client"

import React from "react"
import Slider from "react-slick"
import Image from "next/image"
import { reviews } from "@/dictionaries/reviews"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Button } from "@/app/components/ui/button"
import Link from "next/link"


const ReviewSlider: React.FC = () => {
    const settings = {
        dots: true,
        dotsClass: "slick-dots",
        infinite: true,
        speed: 500,
        draggable: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: true,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    }

    return (
        <div className="p-4 w-full px-4 md:px-16 relative pb-10">
            <h2 className="text-2xl font-bold mb-4 pl-4 text-primary">
                Reviews
            </h2>
            <Slider {...settings}>
                {reviews.quotes.map((review, index) => (
                    <div 
                        key={index} 
                        className="space-y-2 p-4 relative transition-all duration-300"
                    >
                        <div className="w-full h-72 relative overflow-hidden ">
                            <Image
                                src={review.img.path}
                                alt={review.img.alt}
                                className="object-cover object-center"
                                layout="fill"
                            />
                        </div>
                        <div className="flex items-center space-x-3 text-primary">
                            {review.logo && (
                                <img
                                    src={review.logo}
                                    alt={`${review.companyName || review.author} logo`}
                                    className="w-16 h-16 object-contain"
                                />
                            )}
                            <div>
                                <h3 className="font-youngSerif text-2xl py-2">{review.companyName || review.author}</h3>
                            </div>
                        </div>
                        
                        <p className="overflow-auto">{review.quote}</p>
                        <p className="italic font-light">{review.date}</p>
                        {review.companyName && <p className="font-bold pt-3">{review.author}</p>}
                    </div>
                ))}
            </Slider>
            <div className="flex justify-center items-center mt-8">
                <Button className="rounded-none">
                    <Link href="/ervaringen">
                        <p>Meer reviews</p>
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default ReviewSlider