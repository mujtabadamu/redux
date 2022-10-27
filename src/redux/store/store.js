import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import foodReducers from "../reducers/foodReducers";
import { MenuReducers } from "../reducers/menuReducers";
import searchReducer from "../reducers/searchReducer";

const rootReducers = combineReducers({
  foodItems: foodReducers,
  menu: MenuReducers,
  filteredItems: searchReducer
});
const store = createStore(rootReducers, applyMiddleware(logger));
export default store;
