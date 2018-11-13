import React from "react";

import { ColorCell, ColorName } from "./ColorPaletteCell.module.css";
import findLuma from "../../../../app/utils/findLuma";

const colorPaletteCell = ({ name, hex, rgb, type, selectHanlder }) => {
  const returnType = type === "HEX" ? hex : rgb;
  let color = "#ddd";
  if (findLuma(hex) !== -1) {
    if (findLuma(hex) > 128) {
      color = "#333";
    }
  }
  return (
    <div
      className={[ColorCell, "child"].join(" ")}
      style={{ backgroundColor: hex }}
      onClick={() => selectHanlder(returnType)}
    >
      <span className={ColorName} style={{ color }}>
        {name.split(" ").map(word => (
          <span key={word + Math.random()}>{word} </span>
        ))}
      </span>
    </div>
  );
};
export default colorPaletteCell;
