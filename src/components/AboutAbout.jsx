import AboutListeners from "../img/img3.png";
import SecondScribble from "./SVG/SecondScribble";
import Sparkle from "./SVG/Sparkle";
import FirstAvatarHost from "../img/avatar1.png";
import SecondAvatarHost from "../img/avatar3.png";
import Face from "./SVG/Face";
import SecondStar from "./SVG/SecondStar";

function HostCard({number, img, svg, title }) {
  return (
    <div className="p-4 rounded-lg border-2 border-black host-card flex gap-5 relative w-[570px] h-[520px]">
      <img src={img} alt="" className="w-[259px]" />
      <div className="absolute top-4 right-4 w-[130px]">{svg}</div>
      <div className="flex flex-col gap-2.5 justify-end">
        <div className="flex flex-col gap-5 pb-5 border-b border-black">
          <div className="flex flex-col gap-1.5">
            <p className="text-sm">{number}</p>
            <h3 className="text-4xl font-bold">{title}</h3>
          </div>
          <p className="text-sm text-[#4D4D4D]">
            Lorem ipsum dolor sit amet con sectet piscing elit, sed do eiusmod
            tempor rarylet podofcast.
          </p>
        </div>
        <div className="flex gap-5 justify-center">
          <p className="text-xs text-[#4D4D4D] font-bold">follow me:</p>
        </div>
      </div>
    </div>
  );
}

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
        <h2 className="text-4xl font-bold">About and History</h2>
        <div className="absolute w-28 h-28 rotate-[270deg] left-[340px] -top-16">
          <Sparkle />
        </div>
        <div className="flex gap-5 text-start pb-20 border-b border-black">
          <p className="w-[570px] text-[#4c4c4c]">
            Eu non diam phasellus vestibulum lorem. Fringilla est ullamcorper
            eget nulla facilisi etiam dignissim. Id diam vel quam elementum
            pulvinar. <br />
            <br />
            Elementum eu facilisis sed odio morbi quis commodo. Sed odio morbi
            quis commodo odio aenean sed adipiscing odio diam. uno fablotoson
            louw uit.
          </p>
          <p className="w-[570px] text-[#4c4c4c]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
            pellentesque at bibendum euismod tellus duis cursus dignissim odio.
            Sit vulputate et integer in. Sit vel, senectus iaculis morbi. Amet
            interdum imperdiet laoreet morbi tincidunt fermentum, libero. Ante
            enim eget. <br />
            <br />
            Viverra at porttitor accumsan. Orci non here
          </p>
        </div>
      </div>
      <div className="relative">
        <h2 className="text-4xl font-bold">Founder and Main Host</h2>
        <div className="absolute w-[98.89px] h-[98.89px] -top-16 -right-12 rotate-[15deg]">
          <SecondScribble />
        </div>
      </div>
      <div className="flex gap-5">
        <HostCard
          img={FirstAvatarHost}
          svg={<Face />}
          number={"Host 1"}
          title={"Porter Severus"}
        />
        <HostCard img={SecondAvatarHost} svg={<SecondStar/>} number={"Host 2"} title={"Marques Keith"}/>
      </div>
    </section>
  );
};
export default AboutAbout;
