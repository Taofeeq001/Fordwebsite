import logo from './logo.svg';
import './App.css';
import Header from './Component/LandingPage/Header';
import Hero from './Component/LandingPage/Hero';
import Getvehicle from './Component/LandingPage/Getvehicle';
import Power from './Component/LandingPage/Power';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Getvehicle/>
      <Power/>      
    </div>
  );
}

export default App;
