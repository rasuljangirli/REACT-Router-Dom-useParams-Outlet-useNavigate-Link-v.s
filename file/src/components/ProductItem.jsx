import React from "react";
import "../css/productItem.css";
import { useNavigate } from "react-router-dom";

function ProductItem({ product }) {
  const { id, name, marka, amout } = product;
  const navigate = useNavigate();
  return (
    <div className="product_Item_two">
      <div>Name: {name}</div>
      <div>Marka: {marka}</div>
      <div>Amout: {amout}</div>
      <button onClick={() => navigate(`/product-details/${id}`)}>
        Click details
      </button>
    </div>
  );
}

export default ProductItem;
