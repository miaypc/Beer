import React from "react";
import "./BeerOrder.scss";
import Button from "./Button";
import Colors from "../utils/Colors";

function BeerOrder({ img, name, description, abv, ibu, srm }) {
  console.log(window.devicePixelRatio);
  return (
    <div className="beer-order-container">
      <div className="beer-order-left"></div>
      <img className="beer-order-img" src={img} alt="beer" />
      <div className="beer-order-right">
        <h1 className="beer-order-title"> {name}</h1>
        <div className="beer-order-button">
          <div className="beer-order-button-abv">
            <Button
              size="s"
              color={Colors.mainYellow}
              textColor={Colors.mainDark}
              name="ABV"
            />
            <p>{abv}</p>
          </div>
          <div className="beer-order-button-ibu">
            <Button
              size="s"
              color={Colors.mainYellow}
              textColor={Colors.mainDark}
              name="IBU"
            />
            <p>{ibu}</p>
          </div>
          <div className="beer-order-button-srm">
            <Button
              size="s"
              color={Colors.mainYellow}
              textColor={Colors.mainDark}
              name="SRM"
            />
            <p>{srm}</p>
          </div>
        </div>
        <p className="beer-order-description">{description}</p>
        <div className="beer-order-button-moreinfo">
          <Button
            size="xl"
            color={Colors.mainYellow}
            textColor={Colors.mainDark}
            name="Order"
          />
        </div>
      </div>
    </div>
  );
}

export default BeerOrder;
