import logo from './logo.svg';
import './App.css';
import Header from './components/Header.jsx';
import Slider from './components/Slider.jsx';
import AboutLanding from './components/AboutLanding.jsx';
import Listeners from './components/Listeners.jsx';
import Features from './components/Features.jsx';

function App() {
  return (
    <div className=''>
      <Header/>
      <Slider/>
      <AboutLanding/>
      <Listeners/>
      <Features/>
    </div>
  );
}

export default App;
