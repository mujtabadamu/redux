import React from "react";
import { connect } from "react-redux";
import { GridBox } from "../styled";
import Cart from "./Cart";
import CartItems from "./CartItems";
import Header from "./Header";
import Main from "./Main";
import SideBar from "./SideBar";

function Container({ menu }) {
  return (
    <GridBox>
        <Header />
        <Cart />
        <SideBar />
        <Main />
        <CartItems /> 
    </GridBox>
  );
}

const mapStateToProps = (state) => {
  return {
    menu: state.menu,
  };
};

export default connect(mapStateToProps, null)(Container);
