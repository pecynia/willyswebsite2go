"use client"

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { ArrowRightCircle, ArrowLeftCircle } from "lucide-react";
import reviewsData from "@/dictionaries/reviews.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";

interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

function SampleNextArrow(props: ArrowProps) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`absolute top-1/2 right-2 z-10 ${className}`}
            style={{ ...style }}
            onClick={onClick}
        >
            <ArrowRightCircle size={24} />
        </div>
    );
}

function SamplePrevArrow(props: ArrowProps) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`absolute top-1/2 left-2 z-10 ${className}`}
            style={{ ...style }}
            onClick={onClick}
        >
            <ArrowLeftCircle size={24} />
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
        slidesToScroll: 1,
        pauseOnHover: true,
        autoplay: true,
        autoplaySpeed: 1500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
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
    };

    // Feedback: add the author of the review, make it bigger, make sure the button appears on the image when hovered over. Set the text to primary-foreground when hovered over
    return (
      <div className="p-4 w-full px-12 relative">
          <h2 className="text-2xl font-bold mb-4 pl-4 text-primary">
              Reviews
          </h2>
          <Slider {...settings}>
              {reviewsData.quotes.map((review, index) => (
                  <div 
                      key={index} 
                      className="space-x-4 p-4 hover:bg-opacity-60 hover:bg-primary transition-all duration-300 relative group"
                  >
                      <div className="w-full h-48 relative">
                          <Image
                              src={review.img.path}
                              alt={review.img.alt}
                              className="object-cover object-center"
                              fill
                          />
                      </div>
                      <h3 className="font-semibold">{review.companyName}</h3>
                      <p className="text-sm">{review.quote}</p>
                      <Link href={`/ervaringen-en-recensies#${review.id}`}>
                        <Button 
                            variant="secondary" 
                            className="rounded-none hover:bg-primary shadow-none"
                        >
                          Bekijk meer
                        </Button>
                      </Link>
                  </div>
              ))}
          </Slider>
      </div>
  );
};

export default ReviewSlider;
