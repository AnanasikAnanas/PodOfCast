import logo from './logo.svg';
import './App.css';
import Header from './components/Header.jsx';
import Slider from './components/Slider.jsx';
import AboutLanding from './components/AboutLanding.jsx';
import Listeners from './components/Listeners.jsx';
import Features from './components/Features.jsx';
import Content from './components/Content.jsx';
import Pricing from './components/Pricing.jsx';
import Blog from './components/Blog.jsx';
import Cta from './components/Cta.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className=''>
      <Header/>
      <Slider/>
      <AboutLanding/>
      <Listeners/>
      <Features/>
      <Content/>
      <Pricing/>
      <Blog/>
      <Cta/>
      <Footer/>
    </div>
  );
}

export default App;
