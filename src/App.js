import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, createBrowserRouter } from 'react-router-dom';
import Landing from "./components/pages/Landing.jsx";
import About from "./components/pages/About.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Landing />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
// ]);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* подстановочный путь */}
        <Route path="/" element={<Landing/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
