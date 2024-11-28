import Sparkle from "./SVG/Sparkle";
import "../App.css";
import Star from "./SVG/Star";
import Scribble from "./SVG/Scribble";
import ButtonBlack from "./ButtonBlack";

function Price({ title, price, popular }) {
  const cardClass = popular ? "color-popular" : "";
  return (
    <div
      className={`pt-[60px] pb-[30px] px-10 rounded-lg border-2 border-black flex flex-col gap-[90px] w-fit ${cardClass}`}
    >
      <div className="flex flex-col gap-5 ">
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="text-sm text-[#4D4D4D]">
          Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.
        </p>
      </div>
      <div className="flex justify-between items-center">
        <ButtonBlack text={"SUBSCRIBE"}/>
        <p className="text-sm text-[#4D4D4D] font-bold flex flex-col text-center">
          <span className="text-2xl text-[#CD4631]">{price}</span>/month
        </p>
      </div>
    </div>
  );
}

function Benefits({ popular, first, second, third, fourth, fifth }) {
  const cardClass = popular ? "color-popular" : "";
  return (
    <div
      className={`pt-[60px] pb-[30px] px-10 rounded-lg border-2 border-black flex flex-col gap-5 ${cardClass} h-[312px]`}
    >
      <h3 className="text-sm text-[#4D4D4D] font-bold">What’s included:</h3>
      <div className="flex flex-col gap-2.5">
        <p className="font-bold">{first}</p>
        <p className="font-semibold">{second}</p>
        <p className="font-semibold">{third}</p>
        <p className="font-semibold">{fourth}</p>
        <p className="font-semibold">{fifth}</p>
      </div>
    </div>
  );
}

const Pricing = () => {
  return (
    <section className="flex flex-col relative items-center pt-32 gap-24 pb-36">
      <div className="flex flex-col gap-5 text-center relative">
        <h1 className="text-5xl font-bold">Become our sponsor</h1>
        <h2 className="text-2xl text-[#4D4D4D]">
          Get exclusive episodes, merch and more
        </h2>
        <div className="absolute w-32 h-32 rotate-[270deg] -left-20 -top-20">
          <Sparkle />
        </div>
      </div>
      <div className="flex gap-5 container relative z-50">
        <div className="flex flex-col gap-5">
          <Price title={"Member"} price={"$9.99"} />
          <Benefits
            second={"• Exclusive Content"}
            third={"• 5% Discount on Merch"}
            fourth={"• Join the Community"}
            fifth={"• Livestreaming Access"}
          />
        </div>
        <div className="flex flex-col gap-5">
          <Price title={"Family"} price={"$14.99"} popular />
          <Benefits
            popular
            first={"• Everything in Tier 1"}
            second={"• Free tickets to Events"}
            third={"• Limited Edition Merch"}
            fourth={"• Promote your Product"}
            fifth={"• Request Topic"}
          />
        </div>
        <div className="z-50 relative flex flex-col gap-5">
          <Price title={"Official"} price={"$29.99"} />
          <Benefits
            first={"• Everything in Tier 2"}
            second={"• Exclusive Badge on Livestreaming"}
            third={"• Become an Official Sponsor"}
            fourth={"• Early Access to All Episodes"}
            fifth={"• Free Stikers and Merch"}
          />
        </div>
        <div className="absolute z-10 -right-20 -top-16 flex flex-col gap-5">
          <Star />
        </div>
      </div>
      <div className="absolute stroke-black -bottom-20 z-20">
        <Scribble />
      </div>
    </section>
  );
};
export default Pricing;
