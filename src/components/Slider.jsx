import Hero from "../img/Hero.svg";
import firstCover from "../img/cover.png";
import secondCover from "../img/cover2.png";
import thirdCover from "../img/cover3.png";
import fourthCover from "../img/cover4.png";
import fifthCover from "../img/cover5.png";
import sixthCover from "../img/cover6.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import Scrible from "../img/Scribble.svg";
import Stars from "./SVG/Stars";
import FirstSpotify from "./SVG/FirstSpotify";
import GooglePodcasts from "./SVG/GooglePodcasts";
import YouTube from "./SVG/Youtube";
import Scribble from "./SVG/Scribble";

const Slider = () => {
  return (
    <section className="firstBg pt-16 slider pb-[140px] flex flex-col items-center relative">
      <img src={Hero} alt="" className="absolute left-0" />
      <div className="flex flex-col gap-[50px] items-center">
        <h1 className="text-[96px] font-bold text-center tracking-tighter leading-tight">
          Your Daily
          <span className="text-[#CD4631]">
            <br />
            Podcast
          </span>
        </h1>
        <div className="absolute right-0 top-100">
          <Stars />
        </div>
        <p className="max-w-[374px] text-center font-medium">
          We cover all kinds of categories and a weekly special guest.
        </p>
        <button className="subscribe-2 px-12 py-6 border-2 rounded-lg border-black bg-black font-bold text-white">
          SUBSCRIBE
        </button>
      </div>
      <Swiper
        className="mt-[120px] mb-[120px] w-full"
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        freeMode={true}
        grabCursor={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[FreeMode]}
      >
        <SwiperSlide className="max-w-fit">
          <img src={firstCover} alt="" />
        </SwiperSlide>
        <SwiperSlide className="max-w-fit">
          <img src={secondCover} alt="" />
        </SwiperSlide>
        <SwiperSlide className="max-w-fit">
          <img src={thirdCover} alt="" />
        </SwiperSlide>
        <SwiperSlide className="max-w-fit">
          <img src={fourthCover} alt="" />
        </SwiperSlide>
        <SwiperSlide className="max-w-fit">
          <img src={fifthCover} alt="" />
        </SwiperSlide>
        <SwiperSlide className="max-w-fit">
          <img src={sixthCover} alt="" />
        </SwiperSlide>
      </Swiper>
      <div className="container py-10 border-y-2 border-black flex items-center justify-between relative">
        <h2 className="text-2xl font-bold">Supported by:</h2>
        <div className="flex w-[865px] justify-center gap-40">
          <div className=" w-[128px]">
            <FirstSpotify />
          </div>
          <div className=" w-[198px]">
            <GooglePodcasts/>
          </div>
          <div className=" w-[128px]">
              <YouTube />
          </div>
        </div>
      </div>
      <div className="absolute -bottom-20 stroke-[#CD4631]">
        <Scribble></Scribble>
      </div>
    </section>
  );
};

export default Slider;
