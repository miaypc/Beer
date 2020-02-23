import React from "react";
import "./ButtonBig.css";

const ButtonBig = ({ name }) => {
  return (
    <div>
      <button className="button">{name}</button>
    </div>
  );
};

export default ButtonBig;
