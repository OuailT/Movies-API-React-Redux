import './App.css';
import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/HeroSection/HeroSection';

function App() {
  return (
    <main className="App">
      <div className="page-wrapper">
        <Navbar/>
        <HeroSection/>
      </div>
    </main>
  );
}

export default App;






// const SEARCHAPI =
//     "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";