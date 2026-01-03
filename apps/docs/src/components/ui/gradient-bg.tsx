import React from "react";
import classes from "./gradient-bg.module.css";

const GradientBg = () => {
  return (
    <span className={classes.gradientBg}>
      <span className={classes.fade}></span>
    </span>
  );
};

export default GradientBg;
