import React from "react";
import "./Button.css";

const ButtonL = ({ name, color, textColor }) => {
  const styles = {
    button: {
      backgroundColor: color,
      color: textColor
    }
  };
  return (
    <button className="button-l button" style={styles.button}>
      {name}
    </button>
  );
};

export default ButtonL;
