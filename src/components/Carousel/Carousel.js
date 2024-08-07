import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Fade} from "react-reveal";
import CarouselCard from "./CarouselCard";

export default function Carousel() {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0
  };
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="carousel">
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <CarouselCard
                cardInfo={{
                  title: "Google Certified TensorFlow Developer",
                  subtitle:
                    "Certified developer skilled in using TensorFlow to build advanced machine learning models for tasks such as image recognition, object detection, text recognition, and natural language processing",
                  image: "https://noverdy.github.io/images/project/sort.png",
                  imageAlt: "TensorFlow Developer Certificate Logo"
                }}
                isDark={false}
              />
            </div>
            <div>
              <CarouselCard
                cardInfo={{
                  title: "Google Certified TensorFlow Developer",
                  subtitle:
                    "Certified developer skilled in using TensorFlow to build advanced machine learning models for tasks such as image recognition, object detection, text recognition, and natural language processing",
                  image: "https://noverdy.github.io/images/project/sort.png",
                  imageAlt: "TensorFlow Developer Certificate Logo"
                }}
                isDark={false}
              />
            </div>
            <div>
              <CarouselCard
                cardInfo={{
                  title: "Google Certified TensorFlow Developer",
                  subtitle:
                    "Certified developer skilled in using TensorFlow to build advanced machine learning models for tasks such as image recognition, object detection, text recognition, and natural language processing",
                  image: "https://noverdy.github.io/images/project/sort.png",
                  imageAlt: "TensorFlow Developer Certificate Logo"
                }}
                isDark={false}
              />
            </div>
            <div>
              <CarouselCard
                cardInfo={{
                  title: "Google Certified TensorFlow Developer",
                  subtitle:
                    "Certified developer skilled in using TensorFlow to build advanced machine learning models for tasks such as image recognition, object detection, text recognition, and natural language processing",
                  image: "https://noverdy.github.io/images/project/sort.png",
                  imageAlt: "TensorFlow Developer Certificate Logo"
                }}
                isDark={false}
              />
            </div>
          </Slider>
        </div>
      </div>
    </Fade>
  );
}
