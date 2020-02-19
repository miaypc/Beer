import React from "react";
import "./App.css";
import LogoForDarkTheme from "./Components/Logo/logoForDark.svg";
// import MainPage from "./Pages/MainPage";
import ButtonBig from "./Components/ButtonBig.js";
import Navbar from "./Components/Navbar.js";

function App() {
  return (
    <div className="App">
      <Navbar img={LogoForDarkTheme} />
      {/* <MainPage /> */}
      <ButtonBig name="more info" />
    </div>
  );
}

export default App;
