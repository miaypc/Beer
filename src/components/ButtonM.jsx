import React from "react";
import "./Button.css";

const ButtonM = ({ name, color, textColor }) => {
  const styles = {
    button: {
      backgroundColor: color,
      color: textColor
    }
  };
  return (
    <button className="button-m button" style={styles.button}>
      {name}
    </button>
  );
};

export default ButtonM;
