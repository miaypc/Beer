import React from "react";
import "./Location.scss";
import Button from "./Button";
import Colors from "../utils/Colors";
import Map from "./Images/Map.png";

function Location() {
  return (
    <div className="location">
      <img className="location-img" src={Map} alt="map" />
      <div className="location-rightside">
        <h1 className="location-title"> Location</h1>
        <p className="location-description">
          Send us some love to Invaiden Strasse 1 10116, Berlin, Germany
        </p>
        <a href="https://www.google.de/maps">
          <Button
            size="m"
            color={Colors.mainYellow}
            textColor={Colors.mainDark}
            name="direction"
          />
        </a>
      </div>
    </div>
  );
}

export default Location;
