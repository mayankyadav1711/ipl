import React, {useEffect,useState} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { Pagination, EffectCoverflow } from "swiper/modules";
import stadium from "../components/images/motera.webp";
const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
    <div className="loader"> <svg role="img" aria-label="Mouth and eyes come from 9:00 and rotate clockwise into position, right eye blinks, then all parts rotate and merge into 3:00" class="smiley" viewBox="0 0 128 128" width="128px" height="128px">
<defs>
<clipPath id="smiley-eyes">
<circle class="smiley__eye1" cx="64" cy="64" r="8" transform="rotate(-40,64,64) translate(0,-56)" />
<circle class="smiley__eye2" cx="64" cy="64" r="8" transform="rotate(40,64,64) translate(0,-56)" />
</clipPath>
<linearGradient id="smiley-grad" x1="0" y1="0" x2="0" y2="1">
<stop offset="0%" stop-color="#000" />
<stop offset="100%" stop-color="#fff" />
</linearGradient>
<mask id="smiley-mask">
<rect x="0" y="0" width="128" height="128" fill="url(#smiley-grad)" />
</mask>
</defs>
<g stroke-linecap="round" stroke-width="12" stroke-dasharray="175.93 351.86">
<g>
<rect fill="hsl(193,90%,50%)" width="128" height="64" clip-path="url(#smiley-eyes)" />
<g fill="none" stroke="hsl(193,90%,50%)">
    <circle class="smiley__mouth1" cx="64" cy="64" r="56" transform="rotate(180,64,64)" />
    <circle class="smiley__mouth2" cx="64" cy="64" r="56" transform="rotate(0,64,64)" />
</g>
</g>
<g mask="url(#smiley-mask)">
<rect fill="hsl(223,90%,50%)" width="128" height="64" clip-path="url(#smiley-eyes)" />
<g fill="none" stroke="hsl(223,90%,50%)">
    <circle class="smiley__mouth1" cx="64" cy="64" r="56" transform="rotate(180,64,64)" />
    <circle class="smiley__mouth2" cx="64" cy="64" r="56" transform="rotate(0,64,64)" />
</g>
</g>
</g>
</svg></div>
</div>
  )
}
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
  const [currentImage, setCurrentImage] = useState(stadiumImages[0].image);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const images = stadiumImages.map(stadium => stadium.image);
    const promises = images.map(image => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image;
        img.onload = () => resolve();
        img.onerror = () => reject();
      });
    });

    Promise.all(promises)
      .then(() => {
        setIsLoading(false);
      })
      .catch(error => console.error('Error loading images', error));
  }, []);
  return (
    <>
    {isLoading ? (
       <Loader/>
      ) : (
    <div className="relative w-full h-screen flex justify-center items-center">
      {/* Dynamic background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${currentImage})` }}
      >
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Swiper Carousel */}
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
        onSlideChange={(swiper) => {
          // Update currentImage state when carousel slide changes
          setCurrentImage(stadiumImages[swiper.activeIndex].image);
        }}
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
  )}
    </>
  );
};

export default Stadiums;

