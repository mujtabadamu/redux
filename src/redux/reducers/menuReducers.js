import { CARTS } from "../constants";

const initialState = {
  showMenu: false,
};

export const MenuReducers = (state = initialState, action) => {
  if (action.type === CARTS.SET_MENU ) {
    return { ...state, showMenu: action.payload };
  } else {
    return state;
  }
};
