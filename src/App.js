import logo from './logo.svg';
import './App.css';
import Header from './Component/LandingPage/Header';
import Hero from './Component/LandingPage/Hero';
import Getvehicle from './Component/LandingPage/Getvehicle';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Getvehicle/>      
    </div>
  );
}

export default App;
