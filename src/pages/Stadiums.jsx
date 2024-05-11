import React, { useState, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { Pagination, EffectCoverflow } from "swiper/modules";
import stadium from "../components/images/motera.webp";

const stadiumImages = [
  {
    image:
      "https://www.iplt20.com/assets/images/stadiumimage/Chennai-new.jpg",
    name: "Chepauk Stadium",
    capacity: "33500",
  },
  {
    image:
      "https://www.iplt20.com/assets/images/stadiumimage/Narendra-new.jpg",
    name: "Narendra Modi Stadium",
    capacity: "110000",
  },
  {
    image:
      "https://www.iplt20.com/assets/images/stadiumimage/eden-garden-small-new.jpg",
    name: "Eden Gardens",
    capacity: "80000",
  },
  {
    image:
      "https://www.iplt20.com/assets/images/stadiumimage/Wankhede-Stadium-new.jpg",
    name: "Wankhede Stadium",
    capacity: "33108",
  },
  {
    image:
      "https://www.iplt20.com/assets/images/stadiumimage/M.Chinnaswamy-Stadium.jpg",
    name: "M. Chinnaswamy Stadium",
    capacity: "40000",
  },
  {
    image:
      "https://www.iplt20.com/assets/images/stadiumimage/Arun-Jaitley-Stadium-Delhi.jpg",
    name: "Arun Jaitley Stadium",
    capacity: "55000",
  },
  {
    image:
      "https://www.iplt20.com/assets/images/stadiumimage/DY-Patil-Stadium.jpg",
    name: "DY Patil Stadium",
    capacity: "55000",
  },

  // Add other images and names here
];
const Stadiums = () => {
    
  return (
    <>
      <div className="container flex align-middle items-center justify-center gap-14 w-full h-full">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
          }}
          modules={[EffectCoverflow, Pagination]}
          pagination={{ clickable: true }}
          className="mySwiper landingPageSwiper w-[70%] overflow-hidden md:h-[500px] h-auto  flex md:flex-row flex-col items-center justify-center rounded-xl"
        >
          {stadiumImages.map((stadium, index) => (
            <SwiperSlide key={index} className="w-full h-full">
              <img
                src={stadium.image}
                alt={`stadium-${index}`}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white">
                {stadium.name}
              </div>
              <div className="absolute top-0 right-0 p-4 bg-black bg-opacity-50 text-white">
                Capacity : {stadium.capacity}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Stadiums;
