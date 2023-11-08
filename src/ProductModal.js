// ProductModal.js
import React from 'react';
import ReactDOM from 'react-dom';

const ProductModal = ({ product, onClose }) => {
  const modalRoot = document.getElementById('modal-root');

  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="close-button">
          Close
        </button>
        <h2>{product.name}</h2>
        <img src={product.image} alt={product.name} />
        <p>Price: ${product.price}</p>
        <p>Product Description: {product.description}</p>
        {}
      </div>
    </div>,
    modalRoot
  );
};

export default ProductModal;
