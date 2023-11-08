// ProductReducer.js
const productReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.product],
      };
    default:
      return state;
  }
};

export default productReducer;

  