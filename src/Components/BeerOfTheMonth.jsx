import React from "react";
import "./BeerOfTheMonth.scss";
import Button from "./Button";
import Colors from "../utils/Colors";

function BeerOfTheMonth({ img, name, description }) {
  return (
    <div className="beerofthemonth">
      <div className="beerofthemonth-base">
        <h1 className="beerofthemonth-title"> {name}</h1>

        <div className="beerofthemonth-button">
          <Button
            size="xs"
            color={Colors.mainDark}
            textColor={Colors.mainWhite}
            name="Light"
          />
          <Button
            size="xs"
            color={Colors.mainDark}
            textColor={Colors.mainWhite}
            name="ABV:6%"
          />
          <Button
            size="xs"
            color={Colors.mainDark}
            textColor={Colors.mainWhite}
            name="IBU:5"
          />
        </div>

        <p className="beerofthemonth-description">{description}</p>
        <Button
          className="beerofthemonth-button-moreinfo"
          size="l"
          color={Colors.mainDark}
          textColor={Colors.mainGrey}
          name="More Info"
        />
      </div>
      <img className="beerofthemonth-img" src={img} alt="beer" />
    </div>
  );
}

export default BeerOfTheMonth;
