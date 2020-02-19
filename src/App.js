import React from "react";
import "./App.css";
import Footer from "./Components/Footer";
import ButtonBig from "./Components/ButtonBig";
import Navbar from "./Components/Navbar";
import LogoForDarkTheme from "./Components/Logo/logoForDark.svg";
// import MainPage from "./Pages/MainPage";
import BeerCard from "./Components/BeerCard";
import BeerExample from "./Components/Images/BeerExample.png";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ButtonBig name="more info" />
      <Navbar img={LogoForDarkTheme} />
      {/* <MainPage /> */}
      <BeerCard
        img={BeerExample}
        name="Imperial Black Belgian Ale"
        description="The International Phonetic Alphabet is an alphabetic system of phonetic notation based primarily on the Latin alphabet. It was devised by the International Phonetic Association in the late 19th century as a standardized representation of the sounds of spoken language. "
      />
      <Footer />
    </div>
  );
}

export default App;
