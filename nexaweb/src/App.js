import logo from './logo.svg';
import './App.css';
import BackgroundVideo from './Components/Background/BackgroundVideo';

import Navbar from './Components/Navbars/Navbar';

function App() {
  return (
    <div className="App">
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <Navbar></Navbar>
      <BackgroundVideo></BackgroundVideo>
    </div>
  );
}

export default App;
