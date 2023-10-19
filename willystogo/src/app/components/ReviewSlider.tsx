"use client"

import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { ArrowRightCircle, ArrowLeftCircle } from "lucide-react";
import reviews from '@/dictionaries/reviews.json'

interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

// Custom Arrow components for the Slider
function SampleNextArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: "block", color: "black" }} onClick={onClick}>
      <ArrowRightCircle size={24} />
    </div>
  );
}

function SamplePrevArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: "block", color: "black" }} onClick={onClick}>
      <ArrowLeftCircle size={24} />
    </div>
  );
}

export default class ReviewSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1, // Default for small screens
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000, // 2 seconds
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 768, // md
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 1024, // lg
          settings: {
            slidesToShow: 3,
          }
        }
      ]
    };
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Recencies</h2>
        <Slider {...settings}>
          {reviews.quotes.map((review, index) => (
            <div key={index} className="relative h-60 lg:h-80 rounded-md overflow-hidden shadow-lg p-4">
              <Image src={review.img.path} alt={review.img.alt} className="object-cover object-center" layout="fill" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4">
                <h3 className="text-white font-semibold">{review.companyName}</h3>
                <p className="text-white mt-2">{review.quote}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
