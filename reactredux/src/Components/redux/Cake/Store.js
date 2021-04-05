import { createStore, applyMiddleware } from "redux";
import Logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../rootReducer";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(Logger, thunk))
);

export default store;
