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
  return {
    ...state,
    type: (state.type === "RGB") ? "HEX" : "RGB"
  }
};

const toggleFocusMode = state => {
  return {
    ...state,
    focusMode: (state.focusMode === "OFF") ? "ON" : "OFF"
  }
};

export default createReducer(initState, {
  [TOGGLE_SELECTED_COLOR]: toggleSelectedColor,
  [TOGGLE_COLOR_TYPE]: toggleColorType,
  [TOGGLE_FOCUS_MODE]: toggleFocusMode
});
