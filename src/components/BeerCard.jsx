import React from "react";
import "./BeerCard.css";
import Button from "./Button";
import Colors from "../utils/Colors";

function BeerCard({ img, name, description }) {
  return (
    <div className="beercard">
      <div className="beercard-base">
        <section className="beercard-leftside"></section>
        <section className="beercard-rightside">
          <h1 className="beercard-title"> {name}</h1>
          <div className="beercard-button">
            <Button
              color={Colors.mainDark}
              textColor={Colors.mainWhite}
              name="dark"
            />
            <Button
              color={Colors.mainDark}
              textColor={Colors.mainWhite}
              name="IPA"
            />
            <Button
              color={Colors.mainDark}
              textColor={Colors.mainWhite}
              name="6%"
            />
          </div>
          <p className="beercard-description">{description}</p>
        </section>
      </div>
      <img className="beercard-img" src={img} alt="beer" />
      {/* <Button
        className="beercard-button-moreinfo"
        color={Colors.mainYellow}
        textColor={Colors.mainDark}
        name="More Info"
      /> */}
    </div>
  );
}

export default BeerCard;
