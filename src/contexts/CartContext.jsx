import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) {
      throw new Error('useCartContext must be used within a CartProvider');
    }
    return context;
  };
