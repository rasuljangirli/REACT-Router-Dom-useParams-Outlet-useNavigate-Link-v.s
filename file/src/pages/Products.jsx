import React from "react";
import { products } from "../data/products";
import ProductItem from "../components/ProductItem";
import "../css/product.css";

function Product() {
  return (
    <div>
      <div>
        <h1>Product Information</h1>
      </div>
      <hr />
      <div className="product_item">
        {products &&
          products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}

export default Product;
