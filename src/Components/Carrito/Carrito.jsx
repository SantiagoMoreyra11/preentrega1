import React from "react";
import { FiShoppingCart } from "react-icons/fi";

const Carrito = () => {
  return (
    <div style={{ position: "absolute", right: "10%" }}>
      <span>15</span>
      <FiShoppingCart size={25} color="black" />
    </div>
  );
};

export default Carrito;
