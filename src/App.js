import logo from './logo.svg';
import './App.css';
import Header from './Component/LandingPage/Header';
import Hero from './Component/LandingPage/Hero';
import Getvehicle from './Component/LandingPage/Getvehicle';
import Power from './Component/LandingPage/Power';
import Gallery from './Component/LandingPage/Gallery';
import Fordpass from './Component/LandingPage/Fordpass';
import Quality from './Component/LandingPage/Quality';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Getvehicle/>
      <Power/>  
      <Gallery/>   
      <Fordpass/> 
      <Quality/>
    </div>
  );
}

export default App;
