import React from "react";

import { ColorBox, Checked } from "./ControlsCheckBox.module.css";

const controlsCheckBox = ({ checked, color, name, toggleSelectedColor }) => {
  const classes = [ColorBox, checked ? Checked : ""];
  return (
    <div
      className={classes.join(" ")}
      style={{ backgroundColor: color }}
      onClick={() => toggleSelectedColor(name)}
    />
  );
};

export default controlsCheckBox;
