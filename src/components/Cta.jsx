import ButtonBlack from "./ButtonBlack";
import BlackGooglePodcast from "./SVG/BlackGooglePodcast";
import BlackSpotify from "./SVG/BlackSpotify";
import BlackYoutube from "./SVG/BlackYoutube";
import Play from "../img/play.png";
import HomeImg from "../img/Home.png";
import SecondSparkle from "./SVG/SecondSparkle";
import Vector from "./SVG/Vector";

const Cta = () => {
  return (
    <section className="flex flex-col relative items-center pt-32 gap-36 pb-36 bg-[#EDF3F7]">
      <div className="w-[140px] h-[140px] absolute left-2 rotate-[15deg] top-[300px] z-20">
        <SecondSparkle />
      </div>
      <div className="w-16 h-16 absolute left-32 rotate-[60deg] top-[290px] z-20">
        <SecondSparkle />
      </div>
      <div className="w-[26px] h-[26px] absolute left-28 rotate-[60deg] top-64 z-20">
        <SecondSparkle />
      </div>
      <img
        src={HomeImg}
        alt=""
        className="absolute left-0 w-[373px] bottom-0 z-10"
      />
      <img
        src={Play}
        alt=""
        className="absolute right-0 w-[373px] bottom-0 z-10"
      />
      <div className="absolute bottom-0 z-0 right-28">
        <Vector/>
      </div>
      <div className="flex flex-col gap-5 text-center relative items-center">
        <p className="text-sm text-[#CD4631] font-bold px-1.5 py-[3px] border-[1px] border-[#CD4631] rounded-[4px] w-fit ">
          BETA
        </p>
        <h1 className="text-5xl font-bold max-w-[486px]">
          Available now Pod of Cast App
        </h1>
        <h2 className="text-2xl text-[#4D4D4D]">
          We just launched our podcast app!
        </h2>
      </div>
      <div className="flex flex-col gap-6 items-center">
        <ButtonBlack text={"DOWNLOAD NOW"} />
        <div className="flex flex-col gap-2.5 items-center">
          <p className="text-sm text-[#4D4D4D] font-semibold">
            Content also available on:
          </p>
          <div className="flex gap-5">
            <BlackGooglePodcast />
            <BlackSpotify />
            <BlackYoutube />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Cta;
