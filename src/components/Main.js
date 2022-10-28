import React, { useMemo, useState } from "react";
import {  connect } from "react-redux";
import { Data } from "../data/Data";
import { addToCart } from "../redux/actions";
import { ListIcon } from "../styled";

function Main({filteredItems, addToCart}) {
  // eslint-disable-next-line
  const [items, setItems] = useState(Data);


let search = useMemo(() => {
  return items.filter(item => {
    return item.name.toLowerCase().includes(filteredItems.toLowerCase())
  })
}, [items, filteredItems])

  return (
    <div className="main">
      {search?.map((item) => {
        return (
          <div
            key={item.id}
            className="items"
            onClick={() => {
              addToCart(item);
              item.quantity = 1
            }}>
            <img src={item.images} width="100%" alt={item.name} />
            <p className="item_name">
              <ListIcon /> {item.name}
            </p>
            <b>$ {item.price}</b>
          </div>
        );
      })}
    </div>
  );
} 

const mapStateToProps = (state) => {
  return {
    filteredItems: state.filteredItems
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    addToCart: (item) => dispatch(addToCart(item)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
