import Hero from '../img/Hero.svg'
import Stars from '../img/Stars.png'
import firstCover from '../img/cover.png'
import secondCover from '../img/cover2.png'
import thirdCover from '../img/cover3.png'
import fourthCover from '../img/cover4.png'
import fifthCover from '../img/cover5.png'
import sixthCover from '../img/cover6.png'
import Spotify from '../img/Spotify.png'
import Google from '../img/Google Podcast.png'
import YouTube from '../img/Youtube.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/free-mode';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import Scrible from '../img/Scribble.svg'

const Slider = () => {
    return(
        <section className="firstBg pt-16 slider pb-[140px]">
            <img src={Hero} alt="" className='absolute'/>
            <div className="flex flex-col gap-[50px] items-center">
                <h1 className="text-[96px] font-bold text-center tracking-tighter leading-tight">Your Daily
                <span className="text-[#CD4631]"><br/>Podcast</span></h1>
                <img src={Stars} alt="" className='absolute ml-[1300px] mt-[100px]'/>
                <p className="max-w-[374px] text-center font-medium">We cover all kinds of categories and
                a weekly special guest.</p>
                <button className='subscribe-2 px-12 py-6 border-2 rounded-lg border-black bg-black font-bold text-white'>SUBSCRIBE</button>
            </div>
            <Swiper
            className='mt-[120px] mb-[120px]'
                spaceBetween={20}
                slidesPerView={4}
                loop={true}
                freeMode={true}
                grabCursor={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                modules={[FreeMode]}
                >
                <SwiperSlide className='max-w-fit'><img src={firstCover} alt="" /></SwiperSlide>
                <SwiperSlide className='max-w-fit'><img src={secondCover} alt="" /></SwiperSlide>
                <SwiperSlide className='max-w-fit'><img src={thirdCover} alt="" /></SwiperSlide>
                <SwiperSlide className='max-w-fit'><img src={fourthCover} alt="" /></SwiperSlide>
                <SwiperSlide className='max-w-fit'><img src={fifthCover} alt="" /></SwiperSlide>
                <SwiperSlide className='max-w-fit'><img src={sixthCover} alt="" /></SwiperSlide>
            </Swiper>
            <div className='container py-10 border-y-2 border-black flex items-center justify-between'>
                <h2 className='text-[22px] font-bold'>Supported by:</h2>
                <div className='flex gap-5'>
                    <a href="#" className='px-[73px]'><img src={Spotify} alt="" /></a>
                    <a href="#" className='px-[73px]'><img src={Google} alt="" /></a>
                    <a href="#" className='px-[73px]'><img src={YouTube} alt="" /></a>
                </div>
            </div>
            <img src={Scrible} alt="" className='absolute ml-[960px] mt-[65px]'/>
        </section>
    )
}

export default Slider;