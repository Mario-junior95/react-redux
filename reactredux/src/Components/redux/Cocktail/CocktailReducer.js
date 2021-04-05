import { BUY_COCKTAIL } from "./CocktailType";

const initialCocktailState = {
  numOfCocktails: 30,
};

const CocktailReducer = (state = initialCocktailState, action) => {
  switch (action.type) {
    case BUY_COCKTAIL:
      return {
        ...state,
        numOfCocktails: state.numOfCocktails - 1,
      };

    default:
      return state;
  }
};

export default CocktailReducer;
