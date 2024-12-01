import Hero from "../img/Hero.svg";
import Stars from "../components/SVG/Stars";

function AboutCard({ count, text }) {
  return (
    <div className="flex flex-col gap-5 border-2 rounded-lg items-center justify-center border-black w-[373px] h-[235px] mt-[140px] about-card-shadow z-20 bg-white">
      <h2 className="text-6xl text-[#CD4631] font-bold">
        {count}
        <span className="text-black">K</span>
      </h2>
      <p className="text-[#4D4D4D]">{text}</p>
    </div>
  );
}

const AboutHome = () => {
  return (
    <section className="firstBg pt-16 slider pb-[240px] flex flex-col items-center relative z-10">
      <img src={Hero} alt="" className="absolute left-0" />
      <div className="flex flex-col gap-[50px] items-center">
        <h1 className="text-8xl font-bold text-center tracking-tighter leading-tight">
          About
          <span className="text-[#CD4631]">
            <br />
            Pod of Cast
          </span>
        </h1>
        <div className="absolute right-0 top-100">
          <Stars />
        </div>
        <p className="max-w-[766px] text-center font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam–quis.
        </p>
        <div className="flex gap-5">
          <button className="subscribe-2 px-12 py-6 border-2 rounded-lg border-black font-bold text-sm">
            BECOME SPONSOR
          </button>
          <button className="subscribe-2 px-12 py-6 border-2 rounded-lg border-black bg-black font-bold text-white text-sm">
            SUBSCRIBE
          </button>
        </div>
      </div>
      <div className="flex gap-5 absolute -bottom-28">
        <AboutCard count={"76"} text={"Community Members"} />
        <AboutCard count={"128"} text={"Podcast Subscribers"} />
        <AboutCard count={"59"} text={"Daily Listeners"} />
      </div>
    </section>
  );
};
export default AboutHome;