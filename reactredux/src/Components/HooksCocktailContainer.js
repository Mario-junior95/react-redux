import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCocktail } from "./redux/Cocktail/CocktailAction";

const HooksCocktailContainer = () => {
  const numOfCocktails = useSelector((state) => 
    state.cocktail.numOfCocktails);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Cocktails - {numOfCocktails}</h2>
      <button onClick={() => dispatch(buyCocktail())}>Buy Cocktails</button>
    </div>
  );
};

export default HooksCocktailContainer;
