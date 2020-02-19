import React from "react";
import "./App.css";
// import MainPage from "./Pages/MainPage";
// import BeerCard from "./Components/BeerCard";
// import BeerExample from "./Components/Images/BeerExample.png";
import ButtonL from "./Components/ButtonL";
import ButtonS from "./Components/ButtonS";
import ButtonM from "./Components/ButtonM";
import ButtonXS from "./Components/ButtonXS";

function App() {
  return (
    <div className="App">
      {/* <MainPage /> */}
      {/* <BeerCard
        img={BeerExample}
        name="Imperial Black Belgian Ale"
        description="The International Phonetic Alphabet is an alphabetic system of phonetic notation based primarily on the Latin alphabet. It was devised by the International Phonetic Association in the late 19th century as a standardized representation of the sounds of spoken language. "
      /> */}
      <ButtonL name="Start Now" />
      <ButtonM name="More Info" />
      <ButtonS name="Done" />
      <ButtonXS name="ABV:6%" />
    </div>
  );
}

export default App;
