import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "./redux/Cake/CakeActions";

const HooksCakeContainer = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);

  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>BUY CAKE</button>
    </div>
  );
};

export default HooksCakeContainer;
