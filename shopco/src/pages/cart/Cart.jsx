import React, { useState, useEffect } from 'react';
import { useCart } from '../../cartcontext/CartContext'; // Adjust to your hook's location
import { Link } from 'react-router-dom';

const Cart = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { cart, dispatch } = useCart();

  // Transition logic
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 0);
  }, []);

  const TRANSITION_DURATION = 300;
  const transitionClasses = `transition-all duration-${TRANSITION_DURATION}`;
  const classes = isVisible
    ? { cart: "translate-x-0", bg: "bg-black/70 backdrop-blur-sm" }
    : { cart: "translate-x-full invisible" };

  const closeCart = () => {
    setIsVisible(false);
    setTimeout(() => {
      // Add your toggle cart visibility logic here
    }, TRANSITION_DURATION);
  };

  const getSubtotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      {/* Full-page cart modal */}
      <div
        className={`fixed top-0 right-0 w-full md:w-96 bg-white h-full z-50 shadow-lg ${transitionClasses} ${classes.cart}`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <h2 className="text-lg font-bold">Shopping Cart</h2>
          <button onClick={closeCart} className="text-gray-600 hover:text-black">
            Close
          </button>
        </div>
        {cart.length > 0 ? (
          <>
            <ul className="p-4 space-y-4 overflow-y-auto">
              {cart.map((item) => (
                <li key={item.id} className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p>${item.price}</p>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => dispatch({ type: 'DECREMENT_QUANTITY', payload: item.id })}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      onClick={() => dispatch({ type: 'INCREMENT_QUANTITY', payload: item.id })}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="p-4 border-t">
              <div className="flex justify-between font-semibold">
                <span>Subtotal</span>
                <span>${getSubtotal().toFixed(2)}</span>
              </div>
              <button className="w-full bg-black text-white py-2 mt-4 rounded">
                Checkout
              </button>
            </div>
          </>
        ) : (
          <p className="p-4">Your cart is empty.</p>
        )}
      </div>
      {/* Background overlay */}
      {isVisible && (
        <div className="fixed inset-0 bg-black/50" onClick={closeCart} />
      )}
    </>
  );
};

export default Cart;
