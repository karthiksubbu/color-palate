import React, { Component } from "react";
import { connect } from "react-redux";

import {
  toggleSelectedColor,
  toggleColorType,
  toggleFocusMode
} from "./controlsActions";
import ControlsCheckBox from "./ControlsCheckBox/ControlsCheckBox";
import { ControlsStyle, ColorType } from "./Controls.module.css";

class Controls extends Component {
  render() {
    const {
      colors,
      selectedColors,
      type,
      focusMode,
      toggleSelectedColor,
      toggleColorType,
      toggleFocusMode
    } = this.props;
    const colorsList = Object.keys(colors).map(color => {
      return (
        <ControlsCheckBox
          key={color}
          checked={selectedColors.includes(color)}
          color={colors[color][0].hex}
          name={color}
          toggleSelectedColor={toggleSelectedColor}
        />
      );
    });
    return (
      <div className={ControlsStyle}>
        {focusMode === 'ON' ?
          <style>
          {
            `.parent:hover .child:not(:hover) {
              filter: grayscale(0.9);
            }`
          }
          </style> : ''
        }
        <h4>Controls</h4>
        <h6 className="ml2 mr3">Colors</h6>
        {colorsList}
        <h6 className="ml3">
          <span>type: </span>
          <button className={ColorType} onClick={toggleColorType}>
            {type}
          </button>
        </h6>
        <h6 className="ml3">
          <span>Focus Mode: </span>
          <button className={ColorType} onClick={toggleFocusMode}>
            {focusMode}
          </button>
        </h6>
        <h6 className="ml3">
          Note: Every Row is Scrollable
        </h6>
      </div>
    );
  }
}

const mapState = ({ colors, controlsConfig }) => ({
  colors,
  selectedColors: controlsConfig.selectedColors,
  type: controlsConfig.type,
  focusMode: controlsConfig.focusMode
});
const actions = { toggleSelectedColor, toggleColorType, toggleFocusMode };

export default connect(
  mapState,
  actions
)(Controls);
