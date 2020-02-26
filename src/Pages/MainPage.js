import React from "react";
import "./MainPage.scss";
import Navbar from "../Components/Navbar";
import MainHeader from "../Components/MainHeader.js";

function MainPage() {
  return (
    <div className="main-page-container">
      <Navbar theme="dark" />
      <MainHeader />
    </div>
  );
}

export default MainPage;
