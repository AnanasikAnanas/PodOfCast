import Spotify from "./SVG/Spotify";
import SecondAvatar from '../img/avatar2.png'

function Swiperslide() {
  return (
    <div className="p-10 rounded-lg bg-white flex flex-col gap-6">
      <h2 className="text-9xl text-[#CD4631] h-[64px]">“</h2>
      <p className="text-2xl font-semibold">
        Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor
        incidi ut labore et dolore magna aliqua.{" "}
      </p>
      <div className="flex gap-3 items-center">
        <div className="flex gap-3 items-center">
          <img src={SecondAvatar} alt="" className="rounded-full" />
          <p>Luna lovegood</p>
        </div>
        <div className="flex items-center gap-2">
          <Spotify/>
          <p className="text-sm font-bold">Spotify</p>
        </div>
      </div>
    </div>
  );
}
export default Swiperslide;
