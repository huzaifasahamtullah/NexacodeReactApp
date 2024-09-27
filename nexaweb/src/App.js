import logo from './logo.svg';
import './App.css';
import BackgroundVideo from './Components/Background/BackgroundVideo';
import Navbar from './Components/Navbars/Navbar';
import Services from './Components/Aboutus/Services';

function App() {
  return (
    <div className="App">
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <Navbar></Navbar>
      <BackgroundVideo></BackgroundVideo>
      <Services></Services>
    </div>
  );
}

export default App;
