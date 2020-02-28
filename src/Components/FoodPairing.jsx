import React from "react";
import FoodPic from "./Images/foodPic.svg";
import "./FoodPairing.css";

function FoodPairing({ foodPairings = [] }) {
  return (
    <div className="foodCardContainer">
      <div className="foodCard">
        <h3 className="h3text">Food Pairing</h3>
        <div className="foodImagesContainer">
          {foodPairings.slice(0, 3).map(item => (
            <div key={item} className="foodImageItem">
              <img src={FoodPic} alt="food pic" />
              <div>{item}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FoodPairing;
