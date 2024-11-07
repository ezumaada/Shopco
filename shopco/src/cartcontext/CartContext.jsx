import React, { createContext, useContext, useState } from 'react';

// Create the CartContext
const CartContext = createContext();

// Helper function to find if an item exists in the cart
const findItemIndex = (items, sku) => items.findIndex(item => item.sku === sku);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  // Add item to cart
  const addItemToCart = (item) => {
    const index = findItemIndex(items, item.sku);
    if (index >= 0) {
      // If the item already exists, increase quantity
      const updatedItems = [...items];
      updatedItems[index].quantity += item.quantity;
      setItems(updatedItems);
    } else {
      // Otherwise, add a new item to the cart
      setItems([...items, item]);
    }
  };

  // Remove item from cart
  const removeItemFromCart = (sku) => {
    const updatedItems = items.filter(item => item.sku !== sku);
    setItems(updatedItems);
  };

  // Adjust item quantity
  const adjustItemQuantity = (sku, quantity, operation) => {
    const index = findItemIndex(items, sku);
    if (index >= 0) {
      const updatedItems = [...items];
      if (operation === 'increment') {
        updatedItems[index].quantity += 1;
      } else if (operation === 'decrement' && updatedItems[index].quantity > 1) {
        updatedItems[index].quantity -= 1;
      }
      setItems(updatedItems);
    }
  };

  // Get the subtotal (sum of all item prices * quantity)
  const getSubtotal = () => {
    return items.reduce((total, item) => {
      const price = item.onSale ? item.salePrice : item.regularPrice;
      return total + price * item.quantity;
    }, 0).toFixed(2); // Round to 2 decimal places
  };

  // Toggle cart visibility (can be used if you want to show/hide the cart)
  const toggleIsCartActive = () => {
    // Handle cart visibility logic (if necessary)
    // This can be handled through a state, for example:
    // setCartActive(!cartActive);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItemToCart,
        removeItemFromCart,
        adjustItemQuantity,
        getSubtotal,
        toggleIsCartActive,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCart = () => {
  return useContext(CartContext);
};
