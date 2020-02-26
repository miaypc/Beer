import React from "react";
import "./Button.css";

const Button = ({ name, color, textColor, size }) => {
  const styles = {
    button: {
      backgroundColor: color,
      color: textColor
    },
    xs: {
      padding: "0.1em 0.8em",
      fontSize: "0.8em"
    },
    s: {
      padding: "0.2em 1em",
      fontSize: "1em"
    },
    m: {
      padding: "0.2em 1.2em",
      fontSize: "1.2em"
    },
    l: {
      padding: "0.2em 1.4em",
      fontSize: "1.6em"
    },

    xl: {
      padding: "0.2em 1.5em",
      fontSize: "2em"
    }
  };
  console.log(styles[size]);
  return (
    <button className="button" style={{ ...styles[size], ...styles.button }}>
      {name}
    </button>
  );
};

export default Button;
