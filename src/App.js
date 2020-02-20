import React from "react";
import "./App.css";
import MainPage from "./Pages/MainPage";
// import MainHeader from "./Components/MainHeader.js";
// import BeerCard from "./Components/BeerCard";
// import BeerExample from "./Components/Images/BeerExample.png";

function App() {
  return (
    <div className="App">
      <MainPage />
      {/* <BeerCard
        img={BeerExample}
        name="Imperial Black Belgian Ale"
        description="The International Phonetic Alphabet is an alphabetic system of phonetic notation based primarily on the Latin alphabet. It was devised by the International Phonetic Association in the late 19th century as a standardized representation of the sounds of spoken language. "
      /> */}
    </div>
  );
}

export default App;
