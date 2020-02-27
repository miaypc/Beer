import React from "react";
import "./Location.scss";
import Button from "./Button";
import Colors from "../utils/Colors";
import Map from "./Images/Map.png";

function Location() {
  return (
    <div className="location">
      <a href="https://www.google.de/maps/place/BrewDog+Berlin+Mitte/@52.4855434,13.3119842,12z/data=!4m8!1m2!2m1!1sbrewdog!3m4!1s0x47a851efdefd0be9:0xaf25960fc71d9287!8m2!3d52.5328614!4d13.3958047">
        <img className="location-img" src={Map} alt="map" />
      </a>

      <div className="location-rightside">
        <h1 className="location-title"> Location</h1>
        <p className="location-description">
          Send us some love to Invaiden Strasse 1 10116, Berlin, Germany
        </p>
        <a href="https://www.google.de/maps/place/BrewDog+Berlin+Mitte/@52.4855434,13.3119842,12z/data=!4m8!1m2!2m1!1sbrewdog!3m4!1s0x47a851efdefd0be9:0xaf25960fc71d9287!8m2!3d52.5328614!4d13.3958047">
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
