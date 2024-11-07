import React from 'react';

const ItemCard = ({ product={}, addItemToCart }) => {
  // Destructure the product props
  const { id, img, title, desc, newPrice, oldPrice, onSale } = product;
  if (!product || !id) {
    return <div>Product information is missing</div>;  // You can customize this fallback UI
  }
  const handleAddToCart = () => {
    // Create the item object to be added to the cart
    const itemToAdd = {
      sku: id, // Using id as the SKU
      name: title,
      image: img,
      regularPrice: oldPrice,
      salePrice: newPrice,
      quantity: 1,
      onSale: onSale,
    };

    // Call the addItemToCart function
    addItemToCart(itemToAdd);
  };

  return (
    <div className="border rounded-lg p-4">
      <img src={img} alt={title} className="w-full h-48 object-cover mb-4" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-500">{desc}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-lg font-bold">${onSale ? newPrice : oldPrice} {onSale && <span className="line-through ml-2 text-gray-500">${oldPrice}</span>} </span>
        <button
          onClick={handleAddToCart}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
