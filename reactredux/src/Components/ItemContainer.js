import React from "react";
import { connect } from "react-redux";
import { buyCake } from "./redux/Cake/CakeActions";
import { buyIceCream } from "./redux/IceCream/IceCreamAction";

const ItemContainer = (props) => {
  return (
    <div>
      <h2>Item - {props.item}</h2>
      <button onClick={props.buyItem}>buy Items</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCream;

  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const itemDispatch = ownProps.cake
    ? () => {
        dispatch(buyCake());
      }
    : () => {
        dispatch(buyIceCream());
      };

  return {
    buyItem: itemDispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
