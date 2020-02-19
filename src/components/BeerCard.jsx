import React from "react";
import "./BeerCard.css";
import Button from "./Button";
import Colors from "../utils/Colors";

function BeerCard({ img, name, description }) {
  return (
    <div className="beercard">
      <section className="beercard-leftside"></section>
      <img className="beercard-img" src={img} alt="beer" />
      <div className="beercard-rightside">
        <h1 className="beercard-title"> {name}</h1>
        <div className="beercard-button">
          <Button
            color={Colors.mainDark}
            textColor={Colors.mainWhite}
            name="dark"
          />
          <Button
            color={Colors.mainYellow}
            textColor={Colors.mainDark}
            name="IPA"
          />
          <Button
            color={Colors.mainDark}
            textColor={Colors.mainWhite}
            name="6%"
          />
        </div>
        <p className="beercard-description">{description}</p>
      </div>

      {/* <Button name="more info" /> */}
    </div>
  );
}

export default BeerCard;
