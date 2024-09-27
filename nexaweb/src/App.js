import logo from './logo.svg';
import './App.css';
import BackgroundVideo from './Components/Background/BackgroundVideo';
import Navbar from './Components/Navbars/Navbar';
import Services from './Components/Aboutus/Services';
import About from './Components/Aboutus/About';
import FixedFooter from './Components/Footer/FixedFooter';

function App() {
  return (
    <div className="App">
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <Navbar></Navbar>
      <BackgroundVideo></BackgroundVideo>
      <About></About>
      <Services></Services>
      <FixedFooter></FixedFooter>
    </div>
  );
}

export default App;
