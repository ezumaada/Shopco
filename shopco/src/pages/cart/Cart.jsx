import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // You still need Link for routing
import { useCart } from "../../cartcontext/CartContext"; // Assuming you have a CartContext to manage cart state

export function Cart() {
  const [isVisible, setIsVisible] = useState(false);
  const {
    items,
    handleAdjustItemQuantity,
    handleRemoveItemFromCart,
    toggleIsCartActive,
    getSubtotal,
  } = useCart(); // Assuming you have a useCart hook

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
      {/* The shopping cart modal */}
      <div
        className={`z-[1000] fixed top-0 bg-white h-full w-full leading-5 right-0 text-sm max-w-xs md:max-w-xl flex flex-col py-5 md:py-10 ${transitionClasses} ${classes.cart}`}
        data-testid="cart"
      >
        {/* Header */}
        <div className="px-7 md:px-16 mb-6 md:mb-9 flex justify-between items-start">
          <div>
            <span className="text-2xl md:text-3xl text-black font-bold tracking-tighter mr-5 font-headings inline-block">
              Shopping Bag
            </span>
            {/* Stars image can be replaced with a simple element */}
            <div className="max-h-8 md:max-h-12 inline-block">
              <img
                src="https://via.placeholder.com/150x30?text=5+Stars" // Example placeholder image URL
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
                    <li key={item.sku} className="flex gap-4 md:gap-8 mb-10">
                      <div className="shrink-0 bg-white">
                        <img
                          src={item.img}
                          className="w-12 md:w-20 max-w-full h-20 object-contain"
                        />
                      </div>

                      <div className="flex flex-col gap-y-3 md:gap-y-6">
                        {/* Item Title and Remove Button */}
                        <div className="flex gap-x-4 items-start">
                          <Link
                            className="leading-4 font-medium line-clamp-3 md:line-clamp-none"
                            data-testid="itemTitle"
                            to={`product/${item.sku}`}
                          >
                            {item.name}
                          </Link>

                          <button
                            className="text-slate-400 hover:text-slate-900 transition-colors duration-150"
                            onClick={() => handleRemoveItemFromCart(item.sku)}
                            title="Remove item"
                          >
                            <svg
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                          </button>
                        </div>

                        {/* Item Price and Quantity */}
                        <div className="flex justify-between items-end">
                          <p className="font-bold text-sm md:text-base leading-5">
                            ${item.onSale ? item.salePrice : item.regularPrice}
                          </p>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2">
                            <button
                              className="px-2 py-1 bg-gray-200 rounded"
                              onClick={() =>
                                handleAdjustItemQuantity(item.sku, item.quantity, "decrement")
                              }
                            >
                              -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              className="px-2 py-1 bg-gray-200 rounded"
                              onClick={() =>
                                handleAdjustItemQuantity(item.sku, item.quantity, "increment")
                              }
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
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
                  $ {getSubtotal()}
                </span>
              </div>

              <div>
                <button
                  className="mb-3 w-full flex justify-center gap-x-2 bg-primary text-white px-4 py-2 rounded-md"
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
              to="/products" // Adjust this path to the correct route for your shop or product listing page
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
}
