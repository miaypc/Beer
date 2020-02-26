import React from "react";
import "./BeerOfTheMonth.scss";
import Button from "./Button";
import Colors from "../utils/Colors";

function BeerOfTheMonth({ img, name, description }) {
  return (
    <div className="beer-of-the-month-container">
      <div className="beer-of-the-month-base">
        <img className="beer-of-the-month-img" src={img} alt="beer" />
        <div className="beer-of-the-month-right">
          <h1 className="beer-of-the-month-title"> {name}</h1>
          <div className="beer-of-the-month-button">
            <Button
              size="s"
              color={Colors.mainDark}
              textColor={Colors.mainWhite}
              name="Light"
            />
            <Button
              size="s"
              color={Colors.mainDark}
              textColor={Colors.mainWhite}
              name="ABV:6%"
            />
            <Button
              size="s"
              color={Colors.mainDark}
              textColor={Colors.mainWhite}
              name="IBU:5"
            />
          </div>

          <p className="beer-of-the-month-description">{description}</p>
        </div>
        <div className="beer-of-the-month-button-moreinfo">
          <Button
            size="l"
            color={Colors.mainDark}
            textColor={Colors.mainGrey}
            name="More Info"
          />
        </div>
      </div>
    </div>
  );
}

export default BeerOfTheMonth;
