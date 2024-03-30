// import logo from "./logo.svg";
import "./App.css";
import "./components/Hero/hero.css";
import Hero from "./components/Hero/Hero"; //import to connect the Hero.js file
import data from "./TravelData"; //import to connect the TravelData.js file

function App() {
  return (
    <div className="container">
      <Hero />
    </div>
  );
}

//export to index.js
export default App;
