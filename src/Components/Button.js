import React from "react";
import "./Button.css";

const Button = ({ name, color, textColor }) => {
  const styles = {
    button: {
      backgroundColor: color,
      color: textColor
    }
  };
  return (
    <button className="button" style={styles.button}>
      {name}
    </button>
  );
};

export default Button;
