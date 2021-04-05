import { combineReducers } from "redux";
import CakeReducer from "./Cake/CakeReducer";
import CocktailReducer from "./Cocktail/CocktailReducer";
import iceCreamReducer from "./IceCream/IceCreamReducer";
import UserReducer from "./User/UserReducer";

const rootReducer = combineReducers({
  cake: CakeReducer,
  iceCream: iceCreamReducer,
  cocktail: CocktailReducer,
  users: UserReducer,
});

export default rootReducer;
