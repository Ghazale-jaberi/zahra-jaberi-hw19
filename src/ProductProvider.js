// ProductProvider.js
const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productReducer, {
      products: [
        { id: 1, name: 'محصول 1', price: 100, image: 'image1.jpg' },
        { id: 2, name: 'محصول 2', price: 20, image: 'image2.jpg' },
        // سایر محصولات
      ],
      cart: [],
    });
  
    return (
      <ProductContext.Provider value={{ state, dispatch }}>
        {children}
      </ProductContext.Provider>
    );
  };
  