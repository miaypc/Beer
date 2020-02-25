import React from "react";
import FoodPic from "./Images/foodPic.svg";
import "./FoodPairing.css";

function FoodPairing() {
  return (
    <div className="foodCardContainer">
      <div className="foodCard">
        <h3 className="h3text">Food Pairing</h3>
        <div className="foodImagesContainer">
          <div className="foodImageItem">
            <img src={FoodPic} alt="food pic" />
            <div>Tandoori lamb with pomegranate</div>
          </div>
          <div className="foodImageItem">
            <img src={FoodPic} alt="food pic" />
            <div>Tandoori lamb with pomegranate</div>
          </div>
          <div className="foodImageItem">
            <img src={FoodPic} alt="food pic" />
            <div>Tandoori lamb with pomegranate</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodPairing;
