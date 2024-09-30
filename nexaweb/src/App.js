import BackgroundVideo from './Components/Background/BackgroundVideo';
import Navbar from './Components/Navbars/Navbar';
import Services from './Components/Aboutus/Services';
import About from './Components/Aboutus/About';
import FixedFooter from './Components/Footer/FixedFooter';
import AnimatedCursor from "react-animated-cursor";
import ExampleComponent from './Components/AnimationComponents/ExampleComponent';
import IconCloudDemo from './Components/AnimationComponents/IconCloudDemo';

function App() {
  return (
    <div className="App">
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="0, 0, 255"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          {
            target: ".custom",
            options: {
              innerSize: 12,
              outerSize: 12,
              color: "255, 255, 255",
              outerAlpha: 0.3,
              innerScale: 0.7,
              outerScale: 5,
            },
          },
        ]}
      />
      <Navbar></Navbar>
      <BackgroundVideo></BackgroundVideo>
      <ExampleComponent></ExampleComponent>
      <IconCloudDemo />
      <About></About>
      <Services></Services>
      <FixedFooter></FixedFooter>
    </div>
  );
}

export default App;
