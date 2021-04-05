import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "./redux/IceCream/IceCreamAction";

const IceCreamContainer = (props) => {
  return (
    <div>
      <h2>Num of IceCream - {props.numOfIceCream}</h2>
      <button onClick={props.buyIceCream}>BUY IceCream</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfIceCream: state.iceCream.numOfIceCream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => {
      dispatch(buyIceCream());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
