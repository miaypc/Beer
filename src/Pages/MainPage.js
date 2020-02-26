import React from "react";
import "./MainPage.scss";
import Navbar from "../Components/Navbar";
import MainHeader from "../Components/MainHeader.js";
import BeerOfTheMonth from "../Components/BeerOfTheMonth";
import BeerExample from "../Components/Images/BeerExample.png";

function MainPage() {
  return (
    <div className="main-page-container">
      <Navbar theme="dark" />
      <MainHeader />

      <BeerOfTheMonth
        img={BeerExample}
        name="Imperial Black Belgian Ale"
        description="A widely available, sessionable craft beer style that showcases both malt and hops. Amber lagers are a medium-bodied lager with a toasty or caramel-like malt character."
      />
    </div>
  );
}

export default MainPage;
