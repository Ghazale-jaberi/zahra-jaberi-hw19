// ProductContext.js
import React, { createContext, useReducer, useContext } from 'react';

const ProductContext = createContext();

export const useProductContext = () => {
  return useContext(ProductContext);
};

const productReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.product],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.productId),
      };
    default:
      return state;
  }
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, {
    products: [
      { id: 1, name: 'Spiced Mint', price: 9.99, image: './1.png' },
      { id: 2, name: 'Clean Laven', price: 9.99, image: './2.png' },
      { id: 3, name: 'Juicy Lemon', price: 9.99, image: './3.png' },
     
    ],
    cart: [],
  });

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
