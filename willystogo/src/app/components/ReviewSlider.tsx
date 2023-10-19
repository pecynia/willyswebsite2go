"use client"

import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { ArrowRightCircle, ArrowLeftCircle } from "lucide-react";
import reviewsData from "@/dictionaries/reviews.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class ReviewSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1280, // lg
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 1024, // md
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 768, // sm
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    };

    return (
      <div className="p-4 w-4/5 md:w-3/4 lg:w-2/3">
        <h2 className="text-2xl font-bold mb-4 text-primary-foreground">Reviews</h2>
        <Slider {...settings}>
          {reviewsData.quotes.map((review, index) => (
            <div key={index} className=" space-x-4 bg-secondary p-4 ">
              <div className="w-full h-48 relative">
                <Image src={review.img.path} alt={review.img.alt} className="object-cover object-center" fill />
              </div>
              <h3 className="font-semibold">{review.companyName}</h3>
              <p className="text-sm">{review.quote}</p>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
