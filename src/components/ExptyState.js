import React from "react";
import { FaUtensils } from "react-icons/fa";
import { EmptyStateBox } from "../styled";

function ExptyState() {
  return (
    <EmptyStateBox>
      <p>
        <FaUtensils size={70} />
      </p>
      <p>Your cart is empty</p>
      <p>Please add some item from the menu</p>
    </EmptyStateBox>
  );
}

export default ExptyState;
