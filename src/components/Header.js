import React from "react";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { connect, useDispatch } from "react-redux";
import { setSideBar } from "../redux/actions";

function Header({ items, sidebar }) {
  const dispatch = useDispatch();

  return (
    <div className="header">
      <div className="head_info">
        <div onClick={() => dispatch(setSideBar(!sidebar.showMenu))}>
          {sidebar.showMenu ? <FaTimes /> : <FaBars />}
        </div>
        <div>
          <h2>Food Items</h2>
        </div>
        <div className="search">{<FaSearch />}</div>
      </div>
      <div className="cart_header">
        Cart <span className="total_icon">{items.length}</span>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.foodItems,
    sidebar: state.menu,
  };
};

export default connect(mapStateToProps, null)(Header);