import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import ProductItem from "../components/ProductItem";

function ProductDetails() {
  const { id } = useParams();
  // console.log(id);
  return (
    <div>
      <h1>Product Dateils</h1>

      {products &&
        products.map((product) => {
          if (product.id == id) {
            return <ProductItem key={id} product={product} />;
          }
        })}
    </div>
  );
}

export default ProductDetails;
