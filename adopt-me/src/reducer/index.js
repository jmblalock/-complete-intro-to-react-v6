import { combineReducers } from "redux";
import location from "./location";
import theme from "./theme";
import breed from "./breed";
import animal from "./animal";

export default combineReducers({
  location,
  theme,
  animal,
  breed,
});
