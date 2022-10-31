import React from 'react'
import { connect } from 'react-redux';
import { CartBox } from '../styled';

function Cart({items}) {
  return (
    <CartBox>
        Cart <span className="total_icon">{items.length}</span>
    </CartBox>
  )
}

const mapStateToProps = (state) => {
    return {
      items: state.foodItems,
      sidebar: state.menu,
    };
  };

export default connect(mapStateToProps, null)(Cart)