import {
  TOGGLE_SELECTED_COLOR,
  TOGGLE_COLOR_TYPE,
  TOGGLE_FOCUS_MODE
} from "./controlsConstants";

export const toggleSelectedColor = color => ({
  type: TOGGLE_SELECTED_COLOR,
  payload: {
    color
  }
});

export const toggleColorType = () => ({
  type: TOGGLE_COLOR_TYPE
});

export const toggleFocusMode = () => ({
  type: TOGGLE_FOCUS_MODE
});
