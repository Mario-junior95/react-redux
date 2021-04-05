import { combineReducers } from "redux";
import CakeReducer from "./Cake/CakeReducer";
import iceCreamReducer from "./IceCream/IceCreamReducer";

const rootReducer = combineReducers({
  cake: CakeReducer,
  iceCream: iceCreamReducer,
});

export default rootReducer;
