import React from "react";
import {  useDispatch } from "react-redux";
import { Data } from "../data/Data";
import { addToCart } from "../redux/actions";
import { ListIcon } from "../styled";

function Main() {
  const dispatch = useDispatch();
  return (
    <div className="main">
      {Data?.map((item) => {
        return (
          <div
            key={item.id}
            className="items"
            onClick={() => {
              dispatch(addToCart(item));
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

export default Main;
