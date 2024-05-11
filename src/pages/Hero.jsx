import React, { useState, useEffect, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { Pagination, EffectCoverflow } from "swiper/modules";
import stadium from "../components/images/motera.webp";

const Hero = () => {
  const [count, setCount] = useState(0);
  const [counting, setCounting] = useState(true);

  // Increment the counter quickly from 1 to 1000
  useEffect(() => {
    let i = 1;
    const interval = setInterval(() => {
      setCount(i);
      i++;
      if (i > 100) {
        clearInterval(interval);
        setCounting(false);
      }
    }, 10);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className=" flex flex-col items-center justify-center gap-14 w-full h-full">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            // depth: 100,
            // modifier: 1,
          }}
          modules={[EffectCoverflow, Pagination]}
          pagination={{
            clickable: true,
          }}
          className="mySwiper landingPageSwiper w-full overflow-hidden md:h-[500px] h-auto  flex md:flex-row flex-col items-center justify-center rounded-xl"
        >
          return (
          <>
            <SwiperSlide className="w-full h-full">
              <img
                src={stadium}
                alt="img"
                className="w-full h-full object-cover object-center"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <img
                src={stadium}
                alt="img"
                className="w-full h-full object-cover object-center"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <img
                src={stadium}
                alt="img"
                className="w-full h-full object-cover object-center"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <img
                src={stadium}
                alt="img"
                className="w-full h-full object-cover object-center"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <img
                src={stadium}
                alt="img"
                className="w-full h-full object-cover object-center"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <img
                src={stadium}
                alt="img"
                className="w-full h-full object-cover object-center"
              />
            </SwiperSlide>
          </>
          );
        </Swiper>
      </div>
<div className="lg:flex grid mt-8 mx-4 lg:mx-8 justify-end items-center align-middle">

      <div className="container relative inline-block w-full h-32 lg:w-60 lg:h-48 bg-gradient-to-b from-blue-400 to-blue-900 rounded-xl shadow-lg overflow-hidden cursor-pointer">
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="text-white text-5xl font-bold">{count}</div>
  </div>
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 shine transition-all duration-1000 ease-in-out transform origin-top rotate-12"></div>
  </div>
</div>

{/* Swiper Banner  */}
<div className="container flex flex-col items-center justify-center gap-14 w-full lg:w-[60%] h-60 lg:mx-8">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            // depth: 100,
            // modifier: 1,
          }}
          modules={[EffectCoverflow, Pagination]}
          pagination={{
            clickable: true,
          }}
          className="mySwiper landingPageSwiper w-full overflow-hidden md:h-[500px] h-auto  flex md:flex-row flex-col items-center justify-center rounded-xl"
        >
          return (
          <>
            <SwiperSlide className="w-full h-full">
              <img
                src={stadium}
                alt="img"
                className="w-full h-full object-cover object-center"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <img
                src={stadium}
                alt="img"
                className="w-full h-full object-cover object-center"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <img
                src={stadium}
                alt="img"
                className="w-full h-full object-cover object-center"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <img
                src={stadium}
                alt="img"
                className="w-full h-full object-cover object-center"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <img
                src={stadium}
                alt="img"
                className="w-full h-full object-cover object-center"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <img
                src={stadium}
                alt="img"
                className="w-full h-full object-cover object-center"
              />
            </SwiperSlide>
          </>
          );
        </Swiper>
      </div>

      <div className="container relative inline-block w-full h-32 lg:w-60 lg:h-48 bg-gradient-to-b from-blue-400 to-blue-900 rounded-xl shadow-lg overflow-hidden cursor-pointer">
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="text-white text-5xl font-bold">{count}</div>
  </div>
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 shine transition-all duration-1000 ease-in-out transform origin-top rotate-12"></div>
  </div>
</div>

</div>
<style jsx>{`
  .shine:hover {
    transform: translateX(100%) rotate(-12deg);
    opacity: 1;
  }

  .shine {
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0.5) 50%,
      transparent 70%
    );
  }
`}</style>

    </>
  );
};

export default Hero;
