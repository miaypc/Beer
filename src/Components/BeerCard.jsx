import React from "react";
import "./BeerCard.scss";
import Button from "./Button";
import Colors from "../utils/Colors";

function BeerCard({ img, name, description, abv, srm, ibu }) {
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
            name={`ibu ${ibu}`}
          />
          <Button
            size="xs"
            color={Colors.mainDark}
            textColor={Colors.mainWhite}
            name={srm}
          />
          <Button
            size="xs"
            color={Colors.mainDark}
            textColor={Colors.mainWhite}
            name={`${abv}%`}
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
