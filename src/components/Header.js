import React, { useEffect, useState } from "react";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { connect } from "react-redux";
import { SearchItem, setSideBar } from "../redux/actions";
import { HeaderBox } from "../styled";

function Header({  sidebar, Search,ShowSide }) {
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);

  useEffect(()=>{
    Search(search)
  }, [search, Search])


  return (
    <HeaderBox>
     
        <div className="menuIcon" onClick={() => ShowSide(!sidebar.showMenu)}>
          {sidebar.showMenu ? <FaTimes size={18} /> : <FaBars size={18} />}
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
     
    
    </HeaderBox>
  );
}

const mapStateToProps = (state) => {
  return {
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
