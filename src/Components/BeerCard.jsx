import React from "react";
import "./BeerCard.scss";
import Button from "./Button";
import Colors from "../utils/Colors";

function BeerCard({ img, name, description }) {
  return (
    <div className="beercard-container">
      <div className="beercard-left">
        <img className="beercard-img" src={img} alt="beer" />
      </div>
      <div className="beercard-right">
        <h1 className="beercard-title">{name}</h1>

        <div className="beercard-buttons">
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
        <div className="beercard-button-moreinfo">
          <Button
            size="l"
            color={Colors.mainYellow}
            textColor={Colors.mainDark}
            name="More Info"
          />
        </div>
      </div>
    </div>
  );
}

export default BeerCard;
