import Logo from "../img/logo.png";
import ArrowDown from "../img/Arrow - Down.svg";
import { Link, Route } from "react-router";
import { BrowserRouter as Router } from "react-router";

function Header() {
  return (
    <div className="firstBg">
      <header className="container flex items-center h-18 justify-between font-bold">
        <img src={Logo} alt="" />
        <nav className="flex gap-16">
          <a href="#">Episodes</a>
          <Link to="/about">About</Link>
          <a href="#" className="flex gap-1">
            More <img src={ArrowDown} alt="" />
          </a>
        </nav>
        <div className="flex gap-5">
          <button className="px-6 py-3 border-2 rounded-lg border-black">
            RECENT EPISODES
          </button>
          <button className="subscribe px-6 py-3 border-2 rounded-lg border-black bg-black text-white">
            SUBSCRIBE
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
