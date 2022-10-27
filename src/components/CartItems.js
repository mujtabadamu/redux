import React from "react";
import { connect, useDispatch } from "react-redux";
import { Cancel, DecreaseQty, IncreaseQty, RemoveToCart } from "../redux/actions";
import { AsideCard, ListIcon } from "../styled";
import EmptyState from "./ExptyState";

function CartItems({ products }) {
  const dispatch = useDispatch();

  const addTotalFn = (acc, currentVal) => {
    return acc + currentVal.price * currentVal.quantity;
  };
  const total = products?.reduce(addTotalFn, 0);

  return (
    <div>
      {products?.length === 0 ? (
        <div>
          <EmptyState />
        </div>
      ) : (
        <div>
          {products?.map((item) => {
            return (
              <AsideCard className="aside_cart" key={item.id}>
                <div>
                  <img src={item.images} width={"100%"} alt={item.id} />
                </div>
                <div>
                  <p className="item_name">
                    <ListIcon size={14} /> {item.name}
                  </p>
                  <table>
                    <tbody>
                      <tr>
                        <td
                          onClick={() => {
                            if (item.quantity > 1) {
                              dispatch(DecreaseQty(item));
                              
                            } else {
                              dispatch(RemoveToCart(item)); 
                            }
                          }}
                        >
                          -
                        </td>
                        <td>{item.quantity}</td>
                        <td
                          onClick={() =>
                            dispatch(IncreaseQty(item))
                          }
                        >
                          +
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="price">
                   ${(parseFloat(item.price) * parseFloat(item.quantity)).toFixed(2) }
                  </div>
              </AsideCard>
            );
          })}
          <div className="total">
            <p>Item Total</p>
            <p>${(total).toFixed(2)}</p>
          </div>

          <div className="checkout">
            <p>Checkout</p>
            <button className="hold">Hold</button>
            <button
              className="cancel"
              onClick={() => dispatch(Cancel())}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    products: state.foodItems,
  };
};

export default connect(mapStateToProps)(CartItems);
