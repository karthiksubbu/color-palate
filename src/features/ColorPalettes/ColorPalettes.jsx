import React, { Component } from "react";
import { connect } from "react-redux";

import findLuma from '../../app/utils/findLuma'
import ColorPalette from "./ColorPalette/ColorPalette";
import {
  EmptyColorList,
  Modal,
  QuoteText,
  ModalClose,
  None,
  ColorHEX,
  ColorRGB,
  ClipBoardErrorStyles
} from "./ColorPalettes.module.css";

class ColorPalettes extends Component {
  state = {
    copied: false,
    copiedColor: "",
    clipBoardError: false
  };
  selectHanlder = color => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(color)
        .then(() => {
          this.setState({
            copied: true,
            copiedColor: color
          });
        })
        .catch(error => {
          this.setState({ clipBoardError: true, copiedColor: color });
        });
    } else {
      this.setState({ clipBoardError: true, copiedColor: color });
    }
  };
  hideModalHandler = () => {
    this.setState({
      copied: false
    });
  };
  render() {
    const { copied, copiedColor, clipBoardError } = this.state;
    const { displayColors, type, quotes, colors } = this.props;
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    let copiedHEXColor = null;
    let copiedRGBColor = null;
    let copiedHEXColorText = null;
    let copiedRGBColorText = null;
    if (clipBoardError) {
      const copiedColorObj = Object.keys(colors)
        .reduce((acc, el) => [...acc, ...colors[el]], [])
        .find(color => {
          if (copiedColor === color.hex || copiedColor === color.rgb)
            return true;
          return false;
        });
      copiedHEXColor = copiedColorObj.hex;
      copiedRGBColor = copiedColorObj.rgb;
      copiedHEXColorText = findLuma(copiedHEXColor) > 128 ? '#222' : '#eee'
      copiedRGBColorText = findLuma(copiedRGBColor) > 128 ? '#222' : '#eee'
    }
    const displayColorsList = displayColors.map(colorRow => (
      <div
        key={colorRow[0].hex}
        className="Row"
        style={{ marginBottom: "-4px" }}
      >
        <ColorPalette
          type={type}
          colorRow={colorRow}
          selectHanlder={this.selectHanlder}
        />
      </div>
    ));
    return (
      <div className="Colors parent" style={{ paddingTop: "70px" }}>
        <div
          className={[Modal, copied ? "" : None].join(" ")}
          style={{ background: copiedColor }}
        >
          <span className={ModalClose} onClick={this.hideModalHandler}>
            &#x2715;
          </span>
          <span className={QuoteText}>{quote}</span>
        </div>
        {clipBoardError && (
          <div className={ClipBoardErrorStyles}>
            Unable to copy to clipboard, Here is your color :{" "}
            <span className={ColorHEX} style={{ backgroundColor: copiedHEXColor, color: copiedHEXColorText }}>{copiedHEXColor}</span>
            <span className={ColorRGB} style={{ backgroundColor: copiedRGBColor, color: copiedRGBColorText }}>{copiedRGBColor}</span>
          </div>
        )}
        {displayColorsList.length > 0 ? (
          displayColorsList
        ) : (
          <div className={EmptyColorList}>Please Selects Colors</div>
        )}
      </div>
    );
  }
}

const mapState = ({ colors, controlsConfig, quotes }) => {
  const displayColors = [];
  controlsConfig.selectedColors.forEach(color => {
    displayColors.push(colors[color]);
  });
  return {
    colors,
    displayColors,
    type: controlsConfig.type,
    quotes
  };
};

export default connect(
  mapState,
  null
)(ColorPalettes);
