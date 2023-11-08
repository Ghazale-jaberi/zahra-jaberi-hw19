// Modal.js
import React from "react";
import { createPortal } from "react-dom";

const Modal = ({ product, onClose }) => {
  return createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
        <button className="btn" onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById("modal-root") // این یک div مستقل در DOM می‌باشد
  );
};

export default Modal;
