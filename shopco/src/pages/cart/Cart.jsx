import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../cartcontext/CartContext";

const Cart = () => {
  const [isVisible, setIsVisible] = useState(false);
  const {
    items,
    adjustItemQuantity,
    removeItemFromCart,
    toggleIsCartActive,
    getSubtotal,
  } = useCart();

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

  function handleCloseTransition() {
    setIsVisible(false);
    setTimeout(() => {
      toggleIsCartActive();
    }, TRANSITION_DURATION);
  }

  return (
    <>
      {/* Full-page cart modal */}
      <div
        className={`z-[1000] fixed top-0 left-0 bg-white h-full w-full leading-5 right-0 text-sm max-w-full flex flex-col py-5 md:py-10 ${transitionClasses} ${classes.cart}`}
        data-testid="cart"
      >
        {/* Header */}
        <div className="px-7 md:px-16 mb-6 md:mb-9 flex justify-between items-start">
          <div>
            <span className="text-2xl md:text-3xl text-black font-bold tracking-tighter mr-5 font-headings inline-block">
              Shopping Bag
            </span>
            <div className="max-h-8 md:max-h-12 inline-block">
              <img
                src="https://via.placeholder.com/150x30?text=5+Stars"
                alt="Stars"
                className="max-h-8 md:max-h-12 inline-block"
              />
            </div>
          </div>

          <button
            className="cursor-pointer text-black hover:text-gray-400 transition-colors ease-in-out duration-200"
            onClick={handleCloseTransition}
            title="close"
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              className="w-8 h-8 md:w-9 md:h-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {items.length > 0 ? (
          <>
            {/* Cart Items List */}
            <div className="px-7 md:px-16 grow overflow-hidden flex">
              <div className="overflow-y-auto flex-auto">
                <ul className="mr-2">
                  {items.map((item) => (
                    <li key={item.sku || item.id} className="flex gap-4 md:gap-8 mb-10">
                      {/* Item content */}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Subtotal and Checkout Button */}
            <div className="border-t border-slate-300 pt-4 md:pt-6 px-7 md:px-16 text-black">
              <div className="text-sm md:text-base flex justify-between pb-3 md:pb-6 items-center">
                <span className="font-semibold">Subtotal:</span>
                <span className="font-bold md:text-lg" data-testid="subtotal">
                  ${isNaN(getSubtotal()) ? "0.00" : getSubtotal().toFixed(2)}
                </span>
              </div>

              <div>
                <button
                  className="mb-3 w-full flex justify-center gap-x-2 bg-black text-white px-4 py-2 rounded-md"
                >
                  <span>CHECKOUT</span>
                  <span>
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="px-7 md:px-16 grow font-medium">
            No items have been added to your bag.
            <Link
              to="/products"
              className="mt-4 inline-block text-primary font-bold hover:text-primary-dark transition-colors"
            >
              Continue shopping
            </Link>
          </div>
        )}
      </div>

      {/* Background overlay */}
      {isVisible && (
        <div
          className="fixed inset-0 bg-black/50"
          onClick={handleCloseTransition}
        />
      )}
    </>
  );
};

export default Cart;