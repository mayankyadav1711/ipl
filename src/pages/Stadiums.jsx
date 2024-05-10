import React,{useState, useRef} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { Pagination, EffectCoverflow } from "swiper/modules";
import stadium from "../components/images/motera.webp"

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
                            // depth: 100,
                            // modifier: 1,
                        }}
                        modules={[EffectCoverflow, Pagination]}
                        pagination={{
                            clickable: true,
                        }}
                        className="mySwiper landingPageSwiper w-[70%] overflow-hidden md:h-[500px] h-auto  flex md:flex-row flex-col items-center justify-center rounded-xl"
                    >
                            return (
                              <>
                                <SwiperSlide  className="w-full h-full">
                                    <img src={stadium} alt="img" className="w-full h-full object-cover object-center" />
                                </SwiperSlide>
                                <SwiperSlide  className="w-full h-full">
                                    <img src={stadium} alt="img" className="w-full h-full object-cover object-center" />
                                </SwiperSlide>
                                <SwiperSlide  className="w-full h-full">
                                    <img src={stadium} alt="img" className="w-full h-full object-cover object-center" />
                                </SwiperSlide>
                                <SwiperSlide  className="w-full h-full">
                                    <img src={stadium} alt="img" className="w-full h-full object-cover object-center" />
                                </SwiperSlide>
                                <SwiperSlide  className="w-full h-full">
                                    <img src={stadium} alt="img" className="w-full h-full object-cover object-center" />
                                </SwiperSlide>
                                <SwiperSlide  className="w-full h-full">
                                    <img src={stadium} alt="img" className="w-full h-full object-cover object-center" />
                                </SwiperSlide>
                                </>
                            );
                    </Swiper>

                   
                             
                            </div>
    </>
  );
};

export default Stadiums;
