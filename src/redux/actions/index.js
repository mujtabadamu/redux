import { CARTS } from "../constants";

export const setSideBar = (data) => {
  return {
    type: CARTS.SET_MENU,
    payload: data,
  };
};

export const addToCart = (data) => {
  return {
    type: CARTS.ADD_TO_CART,
    payload: data,
  };
};
