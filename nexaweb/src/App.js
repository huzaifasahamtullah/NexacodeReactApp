import BackgroundVideo from './Components/Background/BackgroundVideo';
import Navbar from './Components/Navbars/Navbar';
import Services from './Components/Aboutus/Services';
import About from './Components/Aboutus/About';
import FixedFooter from './Components/Footer/FixedFooter';
import AnimatedCursor from "react-animated-cursor";
import IconCloudDemo from './Components/AnimationComponents/IconCloudDemo';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import GraphicWorkSlider from './Components/AnimationComponents/GraphicWorkSlider';
import ContactComponent from './Components/Aboutus/ContactComponent';

// Create a theme
const theme = createTheme();
function App() {
  return (
    <div className="App">
      <AnimatedCursor
        innerSize={10}     // Set inner cursor size
        outerSize={20}     // Set outer cursor size
        color="100, 100, 200" // Set color to a nicer blue (RGB format)
        outerAlpha={0.4}    // Slightly increase outer transparency
        innerScale={0.9}    // Reduced scaling for a tighter inner cursor
        outerScale={4}      // Smooth outer cursor effect
        clickables={[
          "a",
          "button",
          "input",
          "textarea",
          "select",
          ".link",
          ".custom" // Removed specific type inputs and unnecessary options
        ]}
      />
      <Navbar></Navbar>
      <BackgroundVideo></BackgroundVideo>
      <IconCloudDemo />
      <About></About>
      <Services></Services>
      <GraphicWorkSlider />
      <ContactComponent/>
      <FixedFooter></FixedFooter>
    </div>
  );
}

export default App;
