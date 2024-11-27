import FirstCover from "../img/cover.png";
import SecondCover from "../img/cover2.png";
import ThirdCover from "../img/cover3.png";
import FourthCover from "../img/cover4.png";
import FifthCover from "../img/cover5.png";
import SixthCover from "../img/cover6.png";
import Avatar from "../img/avatar.png";
import SecondAvatar from "../img/avatar2.png";
import Scribble from "./SVG/Scribble";
import Sparkle from "./SVG/Sparkle";

function CardContent({ img, id, title, firsttag, secondtag }) {
  return (
    <div className="border-2 border-black bg-white p-4 rounded-xl flex flex-col gap-5 content-card">
      <div className="flex gap-5">
        <img src={img} alt="" className="w-[166px] h-[166px]" />
        <div className="flex flex-col gap-4 py-4">
          <div className="flex flex-col gap-1 border-b-1 ">
            <h3 className="text-base text-[#CD4631] font-bold ">{id}</h3>
            <h2 className="text-2xl font-bold border-b border-black pb-3 title-card-content">
              {title}
            </h2>
            <p className="text-[#4D4D4D] text-sm font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-1.5">
          <div className="px-3 py-1.5 border border-black rounded text-xs font-semibold">
            {firsttag}
          </div>
          <div className="px-3 py-1.5 border border-black rounded text-xs font-semibold">
            {secondtag}
          </div>
        </div>
        <div className="flex gap-2.5 items-center">
          <p className="text-[#4D4D4D] text-xs font-bold ">Hosted by:</p>
          <div className="flex relative">
            <img src={Avatar} alt="" className="rounded-full" />
            <img src={SecondAvatar} alt="" className="rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

const Content = () => {
  return (
    <section className="firstBg pt-[140px] flex flex-col gap-24 relative items-center">
      <div className="flex flex-col gap-5 text-center">
        <h1 className="text-5xl font-bold">Recent Episodes</h1>
        <h2 className="text-2xl text-[#4D4D4D]">
          Available on your favorite platform
        </h2>
      </div>
      <div className="grid grid-cols-2 container relative gap-5">
        <div className="absolute -right-40 -top-40"><Sparkle/></div>
        <CardContent
          img={FirstCover}
          id={"Eps. 6"}
          title={"Pandemic Becoming Endemic"}
          firsttag={"covid-19"}
          secondtag={"health"}
        />
        <CardContent
          img={SixthCover}
          id={"Eps. 5"}
          title={"Tesla Autopilot Controversy"}
          firsttag={"automation"}
          secondtag={"tech"}
        />
        <CardContent
          img={FifthCover}
          id={"Eps. 4"}
          title={"Women's Rights? Is it alright?"}
          firsttag={"women’s rights"}
        />
        <CardContent
          img={SecondCover}
          id={"Eps. 3"}
          title={"How to Deal with Self–Confidence"}
          firsttag={"self-esteem"}
          secondtag={"health"}
        />
        <CardContent
          img={FourthCover}
          id={"Eps. 2"}
          title={"Type of Social Classes of People"}
          firsttag={"social class"}
          secondtag={"wealth"}
        />
        <CardContent img={ThirdCover} id={"Eps. 1"} title={"Are you a Perplexed Mind Person?"} firsttag={"mind-behaviour"} secondtag={"health"}/>
      </div>
      <button className="px-9 py-5 bg-black rounded-lg subscribe-2 text-white text-sm font-bold w-fit mb-36">BROWSE ALL EPISODES</button>
      <div className="absolute stroke-black -bottom-20 z-20">
        <Scribble />
      </div>
    </section>
  );
};
export default Content;
