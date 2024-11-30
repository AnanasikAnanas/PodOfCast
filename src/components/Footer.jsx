import Logo from "../img/logo.png";
import Twitter from "./SVG/Twitter";
import Instagram from "./SVG/Instagram";
import TikTok from "./SVG/TikTok";
import GooglePodcasts from "./SVG/GooglePodcasts";
import YouTube from "./SVG/Youtube";
import FirstSpotify from "./SVG/FirstSpotify";
import AppStore from "./SVG/AppStore";
import GooglePlay from "./SVG/GooglePlay";

const Footer = () => {
  return (
    <section className="flex flex-col gap-[140px] container pt-[140px]">
      <div className="flex gap-[120px]">
        <div className="flex flex-col gap-10 max-w-[275px]">
          <div className="flex gap-6 items-end">
            <img src={Logo} alt="" />
            <p className="text-xs">©2021.</p>
          </div>
          <p className="text-sm text-[#4D4D4D] font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <nav className="flex gap-6">
            <Twitter />
            <Instagram />
            <TikTok />
          </nav>
        </div>
        <div className="flex gap-[120px]">
          <div className="grid grid-cols-2 gap-x-[90px] gap-y-5">
            <a href="#" className="hover:text-[#CD4631] duration-300	">
              About
            </a>
            <a href="#" className="hover:text-[#CD4631] duration-300	">
              Testimonials
            </a>
            <a href="#" className="hover:text-[#CD4631] duration-300	">
              Features
            </a>
            <a href="#" className="hover:text-[#CD4631] duration-300	">
              Episodes
            </a>
            <a href="#" className="hover:text-[#CD4631] duration-300	">
              Pricing
            </a>
            <a href="#" className="hover:text-[#CD4631] duration-300	">
              Blog
            </a>
          </div>
          <div>
            <div className="flex flex-col gap-6">
              <h5>Listen to episodes on your fav platform:</h5>
              <div className="flex justify-between w-[373px]">
                <GooglePodcasts />
                <FirstSpotify />
                <YouTube />
              </div>
              <div className="flex flex-col gap-5">
                <p>App available on:</p>
                <div className="flex gap-5">
                  <AppStore />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
