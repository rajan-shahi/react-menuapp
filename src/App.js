import "./App.css";
import Category from "./components/Category";
import Food from "./components/Food";
import HeadLineCards from "./components/HeadLineCards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Copyright from "./components/Copyright";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadLineCards />
      <Food />
      <Category />
      <Copyright/>
    </div>
  );
}

export default App;
