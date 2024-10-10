import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
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
import AnimatedNavbar from './Components/Navbars/AnimatedNavbar';
import { CssBaseline, Container, createTheme, ThemeProvider } from '@mui/material';

function App() {
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after a timeout
    }, 2000); // Adjust the duration as needed (2000ms = 2 seconds)

    return () => clearTimeout(timer); // Cleanup the timeout on unmount
  }, []);
  const theme = createTheme(); // Create a default theme
  return (
    <Router>
      <div className="App">
        <AnimatedCursor />
        {loading ? (
          <Loader /> // Show loader while loading
        ) : (
          <>
            <Routes>
              <Route path="/" element={<> 
                <ThemeProvider theme={theme}> {/* Wrap your application with ThemeProvider */}
                <CssBaseline />
                <AnimatedNavbar />
                <Container style={{ marginTop: '100px', padding: '20px' }}>
                </Container>
              </ThemeProvider>
              <BackgroundVideo /><IconCloudDemo /><Home /></>} />
              <Route path="/portfolio" element={<>
                <ThemeProvider theme={theme}> {/* Wrap your application with ThemeProvider */}
                <CssBaseline />
                <PortfolioNavbar />
                <Container style={{ marginTop: '100px', padding: '20px' }}>
                </Container>
              </ThemeProvider>
              <BackgroundMotion></BackgroundMotion> <Portfoliodemo /></>} />
              <Route path="/webdesign" element={<>

                     <ThemeProvider theme={theme}> {/* Wrap your application with ThemeProvider */}
                <CssBaseline />
                <PortfolioNavbar />
                <Container style={{ marginTop: '100px', padding: '20px' }}>
                </Container>
              </ThemeProvider>
              
              <BackgroundMotion></BackgroundMotion><Webdesign /></>} />
              <Route path="/appdesign" element={<>
                <ThemeProvider theme={theme}> {/* Wrap your application with ThemeProvider */}
                <CssBaseline />
                <PortfolioNavbar />
                <Container style={{ marginTop: '100px', padding: '20px' }}>
                </Container>
              </ThemeProvider>
              <BackgroundMotion></BackgroundMotion><Appdesign /></>} />
            </Routes>
            <FixedFooter />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
