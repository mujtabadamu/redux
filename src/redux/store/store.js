import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import foodReducers from "../reducers/foodReducers";
import { MenuReducers } from "../reducers/menuReducers";

const rootReducers = combineReducers({
  foodItems: foodReducers,
  menu: MenuReducers,
});
const store = createStore(rootReducers, applyMiddleware(logger));
export default store;
