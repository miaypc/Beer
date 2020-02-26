import React from "react";
import "./App.css";
// import ContactUs from "./Pages/ContactUsPage";
// import LogoForDarkTheme from "./Components/Logo/logoForDark.svg";
// import MainPage from "./Pages/MainPage";
// import Navbar from "./Components/Navbar.js";
import BeerCard from "./Components/BeerCard";
import BeerExample from "./Components/Images/BeerExample.png";
// import Button from "./Components/Button";
import BeerOfTheMonth from "./Components/BeerOfTheMonth";
// import ContactUsPage from "./Pages/ContactUsPage";
import BeerOrder from "./Components/BeerOrder";

function App() {
  return (
    <div className="App">
      {/* <Navbar img={LogoForDarkTheme} /> */}
      {/* <MainPage /> */}
      <BeerCard
        img={BeerExample}
        name="Imperial Black Belgian Ale"
        description="The International Phonetic Alphabet is an alphabetic system of phonetic notation based primarily on the Latin alphabet. It was devised by the International Phonetic Association in the late 19th century as a standardized representation of the sounds of spoken language. "
      />
      {/* <BeerOfTheMonth
        img={BeerExample}
        name="Imperial Black Belgian Ale"
        description="The International Phonetic Alphabet is an alphabetic system of phonetic notation based primarily on the Latin alphabet. It was devised by the International Phonetic Association in the late 19th century as a standardized representation of the sounds of spoken language. "
      /> */}
      {/* <BeerOrder
        img={BeerExample}
        name="Imperial Black Belgian Ale"
        abv="6%"
        ibu="40"
        srm="Pale"
        description="A widely available, sessionable craft beer style that showcases both malt and hops. Amber lagers are a medium-bodied lager with a toasty or caramel-like malt character."
      /> */}
      {/* // <ContactUsPage /> */}
    </div>
  );
}

export default App;
