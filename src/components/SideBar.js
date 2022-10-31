import React from "react";
import { NavLink } from "react-router-dom";
import { IoRestaurantOutline } from "react-icons/io5";
import { BsStar } from "react-icons/bs";
import { SlSettings } from "react-icons/sl";
import { SideBarBox } from "../styled";
import { connect } from "react-redux";
function SideBar({menu}) {
  return (
    <SideBarBox>
      <ul style={{display: menu.showMenu ? 'block' : 'none'}}>
        <li>
          <NavLink
            to={"/"}
            style={({ isActive }) => {
              return {
                background: isActive ? "#FEEEEB" : "",
                color: isActive ? "#FF9380" : "",
              };
            }}
          >
            <IoRestaurantOutline size={20} />
          </NavLink>
        </li>{" "}
        <li>
          <NavLink
            to={"/fav"}
            style={({ isActive }) => {
              return {
                background: isActive ? "#FEEEEB" : "",
                color: isActive ? "#FF9380" : "",
              };
            }}
          >
            <BsStar size={20} />
          </NavLink>
        </li>{" "}
        <li>
          <NavLink
            to={"/settings"}
            style={({ isActive }) => {
              return {
                background: isActive ? "#FEEEEB" : "",
                color: isActive ? "#FF9380" : "",
              };
            }}
          >
            {" "}
            <SlSettings size={20} />
          </NavLink>
        </li>
      </ul>
    </SideBarBox>
  );
}

const mapStateToProps = (state) => {
  return {
    menu: state.menu,
  };
};

export default connect(mapStateToProps, null)(SideBar);
