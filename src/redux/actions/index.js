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

export const IncreaseQty = (data) => {
  return {
    type: CARTS.INCREASE,
    payload: data,
  };
};

export const DecreaseQty = (data) => {
  return {
    type: CARTS.DECREASE,
    payload: data,
  };
};

export const RemoveToCart = (data) => {
  return {
    type: CARTS.REMOVE_TO_CART,
    payload: data,
  };
};


export const Cancel = () => {
  return {
    type: CARTS.CANCEL,
  };
};

export const SearchItem = (data) => {
  return {
    type: CARTS.SEARCH,
    payload:data
  };
};
