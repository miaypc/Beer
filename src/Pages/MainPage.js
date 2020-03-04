import React from "react";
import "./MainPage.scss";
import Navbar from "../Components/Navbar";
import MainHeader from "../Components/MainHeader.js";
import BeerOfTheMonth from "../Components/BeerOfTheMonth";
import BeerExample from "../Components/Images/beer14.png";
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
          name="Alpha Dog"
          description="A fusion of caramel malt flavours and punchy New Zealand hops. A session beer you can get your teeth into."
        />
      </BounceInRrightDiv>
    </div>
  );
}

export default MainPage;
