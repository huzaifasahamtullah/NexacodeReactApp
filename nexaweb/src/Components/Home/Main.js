
import About from '../Aboutus/About';
import Services from '../Aboutus/Services';
import ContactComponent from '../Aboutus/ContactComponent';
import GraphicWorkSlider from '../AnimationComponents/GraphicWorkSlider';
import HowWeDoItSection from '../Aboutus/HowWeDoItSection';
import Pricing from '../Aboutus/Pricing';
import DigitalMarketingPricing from '../Aboutus/DigitalMarketingPricing';

function Main() {
  return (
    <>
      <About></About>
      <Services />
      <Pricing />
      <DigitalMarketingPricing />
      <HowWeDoItSection />
      <GraphicWorkSlider />
      <ContactComponent />
    </>
  );
}

export default Main;
