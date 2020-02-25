import React from "react";
import "./BeerCard.scss";
import Button from "./Button";
import Colors from "../utils/Colors";

function BeerCard({ img, name, description }) {
  return (
    <div className="beercard-container">
      <div className="beercard-container-background bg-yellow"></div>
      <div className="beercard-container-background bg-white"></div>

      <img className="beercard-img" src={img} alt="beer" />
      <div className="beercard-infos-container">
        {/* <section className="beercard-leftside"></section>
        <section className="beercard-rightside"> */}
        <h1 className="beercard-title">{name}</h1>
        <div className="beercard-buttons-container">
          <Button
            size="xs"
            color={Colors.mainDark}
            textColor={Colors.mainWhite}
            name="dark"
          />
          <Button
            size="xs"
            color={Colors.mainDark}
            textColor={Colors.mainWhite}
            name="IPA"
          />
          <Button
            size="xs"
            color={Colors.mainDark}
            textColor={Colors.mainWhite}
            name="6%"
          />
        </div>
        <p className="beercard-description">{description}</p>
        {/* </section> */}
      </div>

      {/* <div className="beercard-button-moreinfo">
        <Button
          size="l"
          color={Colors.mainYellow}
          textColor={Colors.mainDark}
          name="More Info"
        />
      </div>  */}
    </div>
  );
}

export default BeerCard;
