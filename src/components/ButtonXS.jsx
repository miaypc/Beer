import React from "react";
import "./Button.css";

const ButtonXS = ({ name, color, textColor }) => {
  const styles = {
    button: {
      backgroundColor: color,
      color: textColor
    }
  };
  return (
    <button className="button-xs button" style={styles.button}>
      {name}
    </button>
  );
};

export default ButtonXS;
