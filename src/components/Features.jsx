import ButtonBlack from "./ButtonBlack";
import Face from "./SVG/Face";
import Fire from "./SVG/Fire";
import Scribble from "./SVG/Scribble";
import SecondFace from "./SVG/SecondFace";
import SecondScribble from "./SVG/SecondScribble";
import SecondStar from "./SVG/SecondStar";
import ShiningStars from "./SVG/ShiningStars";
import ThirdScribble from "./SVG/ThirdScribble";

function FeaturesCard({ svg, title }) {
  return (
    <div className="flex flex-col gap-6 items-center max-w-[373px]">
      {svg}
      <div className="flex flex-col gap-3 items-center text-center">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p>
          Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod
          tempor.
        </p>
      </div>
    </div>
  );
}

function Features() {
  return (
    <section className="flex flex-col items-center gap-24 relative pt-[140px] pb-36">
      <div className="flex flex-col gap-5 text-center relative">
        <h1 className="text-6xl font-bold">Membership benefits</h1>
        <h2 className="text-2xl text-[#4D4D4D]">
          Become our sponsor and get all benefits
        </h2>
        <div className="absolute -top-44 right-36">
          <SecondScribble />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-5 gap-y-20">
        <FeaturesCard svg={<ThirdScribble />} title={"Topic by Request"} />
        <FeaturesCard svg={<ShiningStars />} title={"Exclusive Content"} />
        <FeaturesCard svg={<Face />} title={"Join the Community"} />
        <FeaturesCard svg={<SecondFace />} title={"Livestreaming Access"} />
        <FeaturesCard svg={<Fire />} title={"Exclusive Episodes & Merch"} />
        <FeaturesCard svg={<SecondStar/>} title={"And much more!"} />
      </div>
      <ButtonBlack text={"SEE PRICING"}/>
      <div className="absolute stroke-black -bottom-20 z-20">
        <Scribble />
      </div>
    </section>
  );
}
export default Features;
