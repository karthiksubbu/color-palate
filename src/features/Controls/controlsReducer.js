import {
  TOGGLE_SELECTED_COLOR,
  TOGGLE_COLOR_TYPE,
  TOGGLE_FOCUS_MODE
} from "./controlsConstants";
import createReducer from "../../app/store/createReducer";

const initState = {
  selectedColors: [],
  type: "HEX",
  focusMode: "OFF"
};

const toggleSelectedColor = (state = initState, { color }) => {
  if (!state.selectedColors.includes(color)) {
    return {
      ...state,
      selectedColors: [...state.selectedColors, color]
    };
  }
  return {
    ...state,
    selectedColors: [...state.selectedColors.filter(c => c !== color)]
  };
};

const toggleColorType = state => {
  if (state.type === "HEX") {
    return {
      ...state,
      type: "RGB"
    };
  } else if (state.type === "RGB") {
    return {
      ...state,
      type: "HEX"
    };
  }
};

const toggleFocusMode = state => {
  if (state.focusMode === "ON") {
    return {
      ...state,
      focusMode: "OFF"
    };
  }
  return {
    ...state,
    focusMode: "ON"
  }
};

export default createReducer(initState, {
  [TOGGLE_SELECTED_COLOR]: toggleSelectedColor,
  [TOGGLE_COLOR_TYPE]: toggleColorType,
  [TOGGLE_FOCUS_MODE]: toggleFocusMode
});
