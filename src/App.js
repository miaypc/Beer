import React from "react";
import "./App.css";
import MainPage from "./Pages/MainPage";
import Footer from "./Components/Footer";
import ButtonBig from "./Components/ButtonBig";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <MainPage />
      <Navbar />
      <ButtonBig name="more info" />
      <Footer />
    </div>
  );
}

export default App;
