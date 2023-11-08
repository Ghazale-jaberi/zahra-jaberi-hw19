import React, { useState } from "react";
import { useProductContext } from "./ProductContext";
import Modal from "./Modal"; // 

const ShoppingCart = () => {
  const { state, dispatch } = useProductContext();
  const [selectedProduct, setSelectedProduct] = useState(null); // 

  const removeFromCart = (productId) => {
    dispatch({ type: "REMOVE_FROM_CART", productId });
  };

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="card">
      <h2>Cart Items</h2>
      {state.cart.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          {product.name} - <span>${product.price}</span>
          <button className="btn" onClick={() => removeFromCart(product.id)}>
            Remove
          </button>
          <button className="btn2" onClick={() => openModal(product)}>Check-out</button>
        </div>
      ))}
      
      {selectedProduct && (
        <Modal product={selectedProduct} onClose={closeModal} />
      )}
    </div>
  );
};

export default ShoppingCart;
