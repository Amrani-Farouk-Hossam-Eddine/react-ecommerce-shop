import { createContext, useState } from "react";
import { PRODUCTS } from "../Products";

export const ShopContxt = createContext({});
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContxtProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (id) => {
    setCartItems((cartItems) => ({ ...cartItems, [id]: cartItems[id] + 1 }));
  };

  const removeFromCart = (id) => {
    setCartItems((cartItems) => ({ ...cartItems, [id]: cartItems[id] - 1 }));
  };

  const updateCartItemCount = (newAmount, id) => {
    setCartItems((cartItems) => ({ ...cartItems, [id]: newAmount }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }

    return totalAmount;
  };

  return (
    <ShopContxt.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemCount,
        getTotalCartAmount,
      }}
    >
      {children}
    </ShopContxt.Provider>
  );
};

export default ShopContxt;
