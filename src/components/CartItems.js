import React from "react";
import { FaTimes } from "react-icons/fa";
import { connect } from "react-redux";
import { Cancel, DecreaseQty, IncreaseQty, RemoveToCart } from "../redux/actions";
import { AsideCard, ListIcon } from "../styled";
import EmptyState from "./ExptyState";

function CartItems({ products, Remove, Increase, Decrease, Cancel }) {
  const total = products?.reduce((acc, currVal)=> acc + currVal.price * currVal.quantity, 0);

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
                              Decrease(item);
                              
                            } else {
                              Remove(item); 
                            }
                          }}
                        >
                          -
                        </td>
                        <td>{item.quantity}</td>
                        <td
                          onClick={() =>
                            Increase(item)
                          }
                        >
                          +
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="price">
                  <div onClick={()=> Remove(item)} style={{color:"red", cursor:'pointer'} }><FaTimes /></div>
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
              onClick={() => Cancel()}
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

const mapDispatchToProps = (dispatch) => {
  return{
    Remove:(item)=> dispatch(RemoveToCart(item)),
    Increase:(item)=> dispatch(IncreaseQty(item)),
    Decrease:(item)=> dispatch(DecreaseQty(item)),
    Cancel:()=>dispatch(Cancel()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartItems);
