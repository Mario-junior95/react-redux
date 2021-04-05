import React from "react";
import "./App.css";
import CakeContainer from "./Components/CakeContainer";
import { Provider } from "react-redux";
import store from "./Components/redux/Cake/Store";
import HooksCakeContainer from "./Components/HooksCakeContainer";
import IceCreamContainer from "./Components/IceCreamContainer";
import CocktailContainer from "./Components/CocktailContainer";
import HooksCocktailContainer from "./Components/HooksCocktailContainer";
import NewCakeContainer from "./Components/NewCakeContainer";
import ItemContainer from "./Components/ItemContainer";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer cake />
        <ItemContainer />
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <CocktailContainer />
        <HooksCocktailContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
};

export default App;
