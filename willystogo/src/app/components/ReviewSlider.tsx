"use client"

import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Image from "next/image"
import Link from "next/link"

import { reviews } from "@/dictionaries/reviews"
import { Button } from "@/app/components/ui/button"
import { ArrowBigLeft, ArrowBigRight } from "lucide-react"

function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style, display: "block", right: "0", zIndex: 10 }} onClick={onClick}>
            <ArrowBigRight size={48} />
        </div>
    );
}

function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style, display: "block", left: "0", zIndex: 10 }} onClick={onClick}>
            <ArrowBigLeft size={48} />
        </div>
    );
}
  


const ReviewSlider: React.FC = () => {
    const settings = {
        dots: true,
        dotsClass: "slick-dots",
        infinite: true,
        speed: 500,
        draggable: true,
        slidesToShow: 3,
        arrows: true,
        focusOnSelect: true,
        slidesToScroll: 1,
        pauseOnHover: true,
        autoplay: true,
        autoplaySpeed: 1000,
        // nextArrow: <ArrowBigRight size={48} />,
        // prevArrow: <ArrowBigLeft size={48} />,
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
                                fill
                            />
                        </div>
                        <div className="flex items-center space-x-3 text-primary">
                            {review.logo && (
                                <Image
                                    src={review.logo}
                                    alt={`${review.companyName || review.author} logo`}
                                    className="w-16 h-16 object-contain"
                                    width={64}
                                    height={64}
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