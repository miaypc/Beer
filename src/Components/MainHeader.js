import React from "react";
import "./MainHeader.css";
import Button from "./Button";
import Colors from "../utils/Colors";

function MainHeader() {
  return (
    <div className="main-header-style">
      <h1 className="find-beer-header">Find The Perfect Beer</h1>

      <div className="main-header-button">
        <Button
          size="xl"
          color={Colors.mainYellow}
          textColor={Colors.mainDark}
          name="Start Now"
        />
      </div>
      <div className="beer-of-the-month-text">Beer Of The Month</div>
    </div>
  );
}

export default MainHeader;
