import React from "react";
import { FaUtensils } from "react-icons/fa";

function ExptyState() {
  return (
    <div className="emptyState">
      <p>
        <FaUtensils size={70} />
      </p>
      <p>Your cart is empty</p>
      <p>Please add some item from the menu</p>
    </div>
  );
}

export default ExptyState;
