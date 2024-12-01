import FirstImgBlog from "../img/img.png";
import SecondImgBlog from "../img/img2.png";
import ButtonBlack from "./ButtonBlack";
import Scribble from "./SVG/Scribble";
import SecondScribble from "./SVG/SecondScribble";
import ThirdStar from "./SVG/ThirdStar";

function CardBlog({ img, title, theme, date, firstTag, secondTag }) {
  return (
    <div className="p-4 rounded-lg border-2 border-black gap-10 flex flex-col card-blog z-50">
      <img src={img} alt="" />
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h5 className="text-sm  text-[#4D4D4D]">{theme}</h5>
            <h2 className="text-4xl font-bold">{title}</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minimvel iam, quis nostrud exercitation ullamco laboris...
          </p>
        </div>
        <div className="flex justify-between items-center pt-5 border-t border-[#4D4D4D]">
          <div className="flex gap-1.5">
            <p className="px-3 py-1.5 border border-[#4D4D4D] rounded-[4px] text-xs text-[#4D4D4D]">
              {firstTag}
            </p>
            <p className="px-3 py-1.5 border border-[#4D4D4D] rounded-[4px] text-xs text-[#4D4D4D] ">
              {secondTag}
            </p>
          </div>
          <p className="text-xs text-[#4D4D4D]">{date}</p>
        </div>
      </div>
    </div>
  );
}
const Blog = () => {
  return (
    <section className="flex flex-col relative items-center pt-32 gap-24 pb-36">
      <div className="flex flex-col gap-5 text-center relative">
        <h1 className="text-5xl font-bold">Article and News</h1>
        <h2 className="text-2xl text-[#4D4D4D]">News, tips, tricks and more</h2>
      </div>
      <div className="flex gap-5 container relative">
        <div className="absolute -left-24 -top-20 z-0">
          <ThirdStar />
        </div>
        <CardBlog
          img={FirstImgBlog}
          title={"Setup your own podcast"}
          theme={"PODCAST"}
          date={"Sep 14, 2021"}
          firstTag={"business"}
          secondTag={"startup"}
        />
        <CardBlog
          img={SecondImgBlog}
          title={"Doodle artwork 101"}
          theme={"TIPS & TRICK"}
          date={"TIPS & TRICK"}
          firstTag={"art"}
          secondTag={"creative"}
        />
        <div className="absolute -right-44 -bottom-16 rotate-[130deg]">
          <SecondScribble />
        </div>
      </div>
      <ButtonBlack text={"BROWSE ALL"} />
      <div className="absolute stroke-[#CD4631] -bottom-20 z-20">
        <Scribble />
      </div>
    </section>
  );
};
export default Blog;
