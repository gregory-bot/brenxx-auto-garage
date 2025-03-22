import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    // Clear the cart from localStorage on initial load
    localStorage.removeItem('cart');
    return [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (i) =>
          i.id === item.id &&
          i.serviceType === item.serviceType &&
          i.vehicleType === item.vehicleType
      );
      if (existingItem) {
        return prevItems; // If the item already exists, don't add it again
      }
      return [...prevItems, item]; // Add the new item to the cart
    });
  };

  const removeFromCart = (itemId, serviceType, vehicleType) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) =>
          !(
            item.id === itemId &&
            item.serviceType === serviceType &&
            item.vehicleType === vehicleType
          )
      )
    );
  };

  const clearCart = () => {
    setCartItems([]); // Clear all items from the cart
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        totalItems: cartItems.length,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}