
import './App.css';
import Food from './components/Food';
import HeadLineCards from './components/HeadLineCards';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
  <div>
    <Navbar/>
    <Hero/>
    <HeadLineCards/>
    <Food/>
  </div>
  );
}

export default App;
