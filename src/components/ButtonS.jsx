import React from "react";
import "./Button.css";

const ButtonS = ({ name, color, textColor }) => {
  const styles = {
    button: {
      backgroundColor: color,
      color: textColor
    }
  };
  return (
    <button className="button-s button" style={styles.button}>
      {name}
    </button>
  );
};

export default ButtonS;
