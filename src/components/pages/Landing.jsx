import AboutLanding from "../AboutLanding";
import Blog from "../Blog";
import Content from "../Content";
import Cta from "../Cta";
import Features from "../Features";
import Footer from "../Footer";
import Header from "../Header";
import Listeners from "../Listeners";
import Pricing from "../Pricing";
import Slider from "../Slider";

const Landing = () => {
  return (
    <div>
      <Header />
      <Slider />
      <AboutLanding />
      <Listeners />
      <Features />
      <Content />
      <Pricing />
      <Blog />
      <Cta />
      <Footer />
    </div>
  );
};
export default Landing;