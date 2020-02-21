import React from "react";
import "./MainPage.css";
import Navbar from "../Components/Navbar";
import BackgroundPicture from "../Components/Images/Group.svg";
import LogoForDarkTheme from "../Components/Logo/logoForDark.svg";
import MainHeader from "../Components/MainHeader.js";

function MainPage() {
  const style = {
    backgroundStyle: {
      backgroundImage: `url(${BackgroundPicture})`
    }
  };
  return (
    <div>
      <div className="toto" style={style.backgroundStyle}>
        <Navbar img={LogoForDarkTheme} />
        <MainHeader />
      </div>
    </div>
  );
}

export default MainPage;
