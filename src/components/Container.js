import React from "react";
import { connect } from "react-redux";
import CartItems from "./CartItems";
import Main from "./Main";
import SideBar from "./SideBar";

function Container({ menu }) {
  return (
    <div className="container">
      <div
        className="side"
        style={{ display: menu.showMenu ? "block" : "none " }}>
        <SideBar />
      </div>
      <div className="">
        <Main />
      </div>
      <div className="aside">
        <CartItems />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    menu: state.menu,
  };
};

export default connect(mapStateToProps, null)(Container);
