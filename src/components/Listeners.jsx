import Sparking from "./SVG/Sparking";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Swiperslide from "./Swiperslide";
import { useState } from "react";
import ArrowSlider from "./SVG/ArrowSlider";
import Scribble from "./SVG/Scribble";

function Listeners() {
  const [swiper, setSwiper] = useState();
  return (
    <section className="flex flex-col items-center bg-[#EDF3F7] gap-24 relative">
      <div className="flex flex-col gap-5 pt-36 text-center relative">
        <div className="absolute -left-24 top-20">
          <Sparking />
        </div>
        <h1 className="text-6xl font-bold">What our listeners say</h1>
        <h2 className="text-2xl text-[#4D4D4D]">
          Their experience throughout every platform
        </h2>
      </div>
      <div className="w-full container flex flex-col gap-10 relative">
        <div>
          <Swiper
            onSwiper={setSwiper}
            spaceBetween={20}
            loop={true}
            slidesPerView={2.5}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <Swiperslide />
            </SwiperSlide>
            <SwiperSlide>
              <Swiperslide />
            </SwiperSlide>
            <SwiperSlide>
              <Swiperslide />
            </SwiperSlide>
            <SwiperSlide>
              <Swiperslide />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="flex gap-5 container relative pb-24">
          <div
            onClick={() => swiper.slidePrev()}
            className="stroke-black cursor-pointer"
          >
            <ArrowSlider />
          </div>
          <div
            onClick={() => swiper.slideNext()}
            className="stroke-[#CD4631] rotate-180 cursor-pointer"
          >
            <ArrowSlider />
          </div>
        </div>
      </div>
      <div className="absolute stroke-black -bottom-20">
        <Scribble />
      </div>
    </section>
  );
}
export default Listeners;
