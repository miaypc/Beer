import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import "./DiscreteSlider.scss";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "0 auto",
    maxWidth: "100%"
  },
  margin: {
    height: theme.spacing(3)
  }
}));

const marks = [
  {
    value: 0,
    label: "0"
  },
  {
    value: 5,
    label: "<5%"
  },
  {
    value: 10,
    label: "<10%"
  },
  {
    value: 15,
    label: "<14,5%"
  }
];

function valuetext(value) {
  return `${value}%`;
}

function valueLabelFormat(value) {
  return marks.findIndex(mark => mark.value === value);
}

export default function DiscreteSlider({ onChange }) {
  const classes = useStyles();
  return (
    <div className={classes.root + " sliderComponent"}>
      <div className="slider">
        <Typography id="discrete-slider-restrict" gutterBottom>
          Alcohol Level
        </Typography>
        <Slider
          defaultValue={0}
          valueLabelFormat={valueLabelFormat}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider-restrict"
          step={null}
          valueLabelDisplay="on"
          marks={marks}
          min={0}
          max={15}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
