import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import Navbar from './Components/Navbars/Navbar';
import BackgroundVideo from './Components/Background/BackgroundVideo';
import IconCloudDemo from './Components/AnimationComponents/IconCloudDemo';
import FixedFooter from './Components/Footer/FixedFooter';
import Home from './Components/Home/Main';
import Portfoliodemo from "./Components/Portfolio/Portfoliodemo";
import PortfolioNavbar from "./Components/Navbars/PortfolioNavbar";
import Webdesign from "./Components/Services/Web/Webdesign";
import Appdesign from "./Components/Services/App/Appdesign";
import Loader from './Components/Loader'; // Import the Loader component
import BackgroundMotion from "./Components/Background/BackgroundMotion";

function App() {
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after a timeout
    }, 2000); // Adjust the duration as needed (2000ms = 2 seconds)

    return () => clearTimeout(timer); // Cleanup the timeout on unmount
  }, []);

  return (
    <Router>
      <div className="App">
        <AnimatedCursor />
        {loading ? (
          <Loader /> // Show loader while loading
        ) : (
          <>
            <Routes>
              <Route path="/" element={<><Navbar /><BackgroundVideo /><IconCloudDemo /><Home /></>} />
              <Route path="/portfolio" element={<><PortfolioNavbar /><BackgroundMotion></BackgroundMotion> <Portfoliodemo /></>} />
              <Route path="/webdesign" element={<><PortfolioNavbar /><BackgroundMotion></BackgroundMotion><Webdesign /></>} />
              <Route path="/appdesign" element={<><PortfolioNavbar /><BackgroundMotion></BackgroundMotion><Appdesign /></>} />
            </Routes>
            <FixedFooter />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
