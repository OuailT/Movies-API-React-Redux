import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/HeroSection/HeroSection';
import PopUpMovie from './Components/PopUpMovie/PopUpMovie';
import Checkout from './Components/Checkout/Checkout';

function App() {
  // Create a state to toggle classes
  const [isToggle, setIsToggle] = useState(false);
  console.log("hello world");

  //Create a variables to toggle class
  const showClass = isToggle ? "show" : "";

  const toggleHandler = () => setIsToggle(!isToggle);

  return (
    <main className= "App" >
    
      <div className="page-wrapper">
        <Navbar/>
        <HeroSection toggleHandler={toggleHandler}/>
        <PopUpMovie showClass={showClass} toggleHandler={toggleHandler}/>
        <Checkout/>
      </div>
    </main>
  );
}

export default App;






// const SEARCHAPI =
//     "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";