// ProductList.js
import React from "react";
import { useProductContext } from "./ProductContext";

const ProductList = () => {
  const { state, dispatch } = useProductContext();

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", product });
  };

  return (
    <div>
      <h2 className="proh">Products</h2>
      <p className="prop">Order it for you or for your beloved ones </p>
      <ul>
        {state.products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: {product.price} $</p>
            <button onClick={() => addToCart(product)}>
            Add to cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
