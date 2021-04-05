import React from "react";
import { buyIceCream } from "./redux/IceCream/IceCreamAction";
import { connect } from "react-redux";
import { buyCocktail } from "./redux/Cocktail/CocktailAction";

const CocktailContainer = (props) => {
  return (
    <div>
      <h2>Number of Cocktail - {props.numOfCocktails} </h2>
      <button onClick={props.buyCocktail}>BUY COCKTAIL</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { numOfCocktails: state.cocktail.numOfCocktails };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCocktail: () => {
      dispatch(buyCocktail());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CocktailContainer);
