import { combineReducers } from "redux";

import colorsReducer from "../../features/Colors/colorsReducer";
import controlsReducer from "../../features/Controls/controlsReducer";
import quoteReducer from "../../features/Quotes/quotesReducer";

export default combineReducers({
  colors: colorsReducer,
  controlsConfig: controlsReducer,
  quotes: quoteReducer
});
