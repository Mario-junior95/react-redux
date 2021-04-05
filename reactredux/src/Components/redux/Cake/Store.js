import { createStore, applyMiddleware } from "redux";
import Logger from "redux-logger";

import rootReducer from "../rootReducer";

const store = createStore(rootReducer, applyMiddleware(Logger));

export default store;
