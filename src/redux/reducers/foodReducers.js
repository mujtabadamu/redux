import { CARTS } from "../constants";

const foodReducers = (cart = [], action) => {
  if (action.type === CARTS.ADD_TO_CART) {
    let tempcart = cart.filter((item) => item.id === action.payload.id);
    if (tempcart.length < 1) {
      return [...cart, action.payload];
    } else {
      return cart;
    }
  }
  if (action.type === CARTS.REMOVE_TO_CART) {
    return cart.filter((item) => item.id !== action.payload.id);
  }
  if (action.type === CARTS.CANCEL) {
    return cart = []
  }
  if (action.type === CARTS.INCREASE) {
    let tempcart = cart.map((item) => {
      if (item.id === action.payload.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    
    return tempcart;
  }
  if (action.type === CARTS.DECREASE) {
    let tempcart = cart.map((item) => {
      if (item.id === action.payload.id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    return tempcart;
  }

  return cart;
};

export default foodReducers;
