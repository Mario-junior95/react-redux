import { combineReducers } from "redux";
import CakeReducer from "./Cake/CakeReducer";
import CocktailReducer from "./Cocktail/CocktailReducer";
import iceCreamReducer from "./IceCream/IceCreamReducer";

const rootReducer = combineReducers({
  cake: CakeReducer,
  iceCream: iceCreamReducer,
  cocktail: CocktailReducer,
});

export default rootReducer;
