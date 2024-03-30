// import logo from "./logo.svg";
import "./App.css";
import "./components/Hero/hero.css";
import Hero from "./components/Hero/Hero"; //import to connect the Hero.js file
import TravelBlog from "./components/TravelBlog/TravelBlog"; //import to connect the TravelBlog.js file
import "./components/TravelBlog/Travelblog.css";
import data from "./TravelData"; //import to connect the TravelData.js file

function App() {
  const locations = data.map((item) => {
    return (
      <TravelBlog
        key={item.id} //unique key for .map()
        placeHeading={item.placeHeading}
        placeImg1={item.placeImg1}
        placeImg2={item.placeImg2}
        placeImg3={item.placeImg3}
        placeDescription={item.placeDescription}
        backgroundColor={item.backgroundColor}
      />
    );
  });

  return (
    <div className="container">
      <Hero />
      <section className="travel-locations">{locations}</section>
    </div>
  );
}

//export to index.js
export default App;
