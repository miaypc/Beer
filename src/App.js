import React from "react";
import "./App.css";
import LogoForDarkTheme from "./Components/Logo/logoForDark.svg";
// import MainPage from "./Pages/MainPage";

import Navbar from "./Components/Navbar.js";

import BeerCard from "./Components/BeerCard";
import BeerExample from "./Components/Images/BeerExample.png";
// import Button from "./Components/Button";
import MainPage from "./Pages/MainPage";


function App() {
  return (
    <div className="App">
      <MainPage />
      {/* <BeerCard
        img={BeerExample}
        name="Imperial Black Belgian Ale"
        description="The International Phonetic Alphabet is an alphabetic system of phonetic notation based primarily on the Latin alphabet. It was devised by the International Phonetic Association in the late 19th century as a standardized representation of the sounds of spoken language. "
      />
      {/* <Button size="l" color="blue" textColor="black" name="TESTTTTT" />
      <Button size="m" color="yellow" textColor="black" name="More Info" />
      <Button size="s" color="yellow" textColor="black" name="Done" />
      <Button size="xs" color="yellow" textColor="black" name="ABV:6%" /> */}

    </div>
  );
}

export default App;
