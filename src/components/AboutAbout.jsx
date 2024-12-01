import AboutListeners from "../img/img3.png";
import Sparkle from "./SVG/Sparkle";

const AboutAbout = () => {
  return (
    <section className="pt-[200px] flex flex-col gap-24 relative items-center pb-36">
      <div className="flex flex-col gap-5 text-center">
        <h1 className="text-6xl font-bold">What our listeners say</h1>
        <h2 className="text-2xl text-[#4D4D4D]">
          Their experience throughout every platform
        </h2>
      </div>
      <img src={AboutListeners} alt="" />
      <div className="flex flex-col gap-20 text-center relative container">
        <h1 className="text-4xl font-bold">About and History</h1>
        <div className="absolute w-28 h-28 rotate-[270deg] left-[340px] -top-16">
          <Sparkle />
        </div>
        <div className="flex gap-5 text-start pb-20 border-b border-black">
          <p className="w-[570px] text-[#4c4c4c]">
            Eu non diam phasellus vestibulum lorem. Fringilla est ullamcorper
            eget nulla facilisi etiam dignissim. Id diam vel quam elementum
            pulvinar. <br/><br/>Elementum eu facilisis sed odio morbi quis commodo. Sed
            odio morbi quis commodo odio aenean sed adipiscing odio diam. uno
            fablotoson louw uit.
          </p>
          <p className="w-[570px] text-[#4c4c4c]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
            pellentesque at bibendum euismod tellus duis cursus dignissim odio.
            Sit vulputate et integer in. Sit vel, senectus iaculis morbi. Amet
            interdum imperdiet laoreet morbi tincidunt fermentum, libero. Ante
            enim eget. <br/><br/>Viverra at porttitor accumsan. Orci non here
          </p>
        </div>
      </div>
    </section>
  );
};
export default AboutAbout;
