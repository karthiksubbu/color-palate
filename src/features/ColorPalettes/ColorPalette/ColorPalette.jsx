import React from "react";

import ColorPaletteCell from "./ColorPaletteCell/ColorPaletteCell";

import { ColorPaletteStyle } from "./ColorPalette.module.css";

const colorPalette = ({ colorRow, selectHanlder, type }) =>
  colorRow.map(color => (
    <div key={color.hex} className={ColorPaletteStyle}>
      <ColorPaletteCell type={type} {...color} selectHanlder={selectHanlder} />
    </div>
  ));

export default colorPalette;
