import React, { useEffect, useState } from "react";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { connect } from "react-redux";
import { SearchItem, setSideBar } from "../redux/actions";

function Header({ items, sidebar, Search,ShowSide }) {
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);

  useEffect(()=>{
    Search(search)
  }, [search, Search])


  return (
    <div className="header">
      <div className="head_info">
        <div onClick={() => ShowSide(!sidebar.showMenu)}>
          {sidebar.showMenu ? <FaTimes /> : <FaBars />}
        </div>
        <div>
          <h2>Food Items</h2>
        </div>
        <div className="search" onMouseEnter={()=>setShow(true)}>
          {show ?
          <input onMouseLeave={()=> setShow(false)} type='search' value={search} onChange={e =>setSearch(e.target.value)} />
          :<FaSearch  />
       }
        </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    Search: (data) => dispatch(SearchItem(data)),
    ShowSide:(data) => dispatch(setSideBar(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
