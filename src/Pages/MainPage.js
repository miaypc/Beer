import React from "react";
import "./MainPage.scss";
import Navbar from "../Components/Navbar";
import MainHeader from "../Components/MainHeader.js";
import BeerOfTheMonth from "../Components/BeerOfTheMonth";
import BeerExample from "../Components/Images/BeerExample.png";
import styled, { keyframes } from "styled-components";
import { bounceInDown, bounceInLeft, bounceInRight } from "react-animations";

const bounceInDownAnimation = keyframes`${bounceInDown}`;
const bounceInLeftAnimation = keyframes`${bounceInLeft}`;
const bounceInRightAnimation = keyframes`${bounceInRight}`;

const BounceInDownDiv = styled.div`
  animation: 2.5s ${bounceInDownAnimation};
`;
const BounceInLeftDiv = styled.div`
  animation: 1.5s ${bounceInLeftAnimation};
`;
const BounceInRrightDiv = styled.div`
  animation: 2s ${bounceInRightAnimation};
`;

function MainPage() {
  return (
    <div className="main-page-container">

      <BounceInDownDiv>
        <Navbar theme="dark" />
      </BounceInDownDiv>
      <BounceInLeftDiv>
        <MainHeader />
      </BounceInLeftDiv>
      <BounceInRrightDiv>
        <BeerOfTheMonth
          img={BeerExample}
          name="Imperial Black Belgian Ale"
          description="A widely available, sessionable craft beer style that showcases both malt and hops. Amber lagers are a medium-bodied lager with a toasty or caramel-like malt character."
        />
      </BounceInRrightDiv>
    </div>
  );
}

export default MainPage;
