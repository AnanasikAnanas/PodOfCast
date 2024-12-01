import Header from "../Header";
import Hero from "../../img/Hero.svg";
import Scribble from "../SVG/Scribble";
import Stars from "../SVG/Stars";

const About = () => {
  return (
    <main>
      <Header />
      <section className="firstBg pt-16 slider pb-[140px] flex flex-col items-center relative">
        <img src={Hero} alt="" className="absolute left-0" />
        <div className="flex flex-col gap-[50px] items-center">
          <h1 className="text-[96px] font-bold text-center tracking-tighter leading-tight">
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
      </section>
    </main>
  );
};
export default About;
