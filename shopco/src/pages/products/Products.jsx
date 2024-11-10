import React, { useState } from 'react';
import ItemCard from '../../components/itemcard/ItemCard'; // Import your ItemCard component
import Navbar from '../../components/navbar/Navbar';
import TopBanner from '../../components/topbanner/TopBanner';
import { useCart } from '../../cartcontext/CartContext';
import Toast from '../../components/toast/Toast';

const Products = () => {
  // Example product data
  const { addItemToCart } = useCart(); // Get the addItemToCart function from the context
  const [toastMessage, setToastMessage] = useState(null);


  // Handle the click to add an item to the cart
  

  const productData = [
    {
      id: 1,
      img: 'path-to-image1.jpg',
      title: 'Product 1',
      desc: 'A brief description of Product 1',
      newPrice: '29.99',
      oldPrice: '39.99',
      onSale: true,
    },
    {
      id: 2,
      img: 'path-to-image2.jpg',
      title: 'Product 2',
      desc: 'A brief description of Product 2',
      newPrice: '49.99',
      oldPrice: '59.99',
      onSale: true,
    },
    {
      id: 3,
      img: 'path-to-image2.jpg',
      title: 'Product 2',
      desc: 'A brief description of Product 2',
      newPrice: '49.99',
      oldPrice: '59.99',
      onSale: true,
    },
    {
      id: 4,
      img: 'path-to-image2.jpg',
      title: 'Product 2',
      desc: 'A brief description of Product 2',
      newPrice: '49.99',
      oldPrice: '59.99',
      onSale: true,
    },
    {
      id: 5,
      img: 'path-to-image2.jpg',
      title: 'Product 2',
      desc: 'A brief description of Product 2',
      newPrice: '49.99',
      oldPrice: '59.99',
      onSale: true,
    },
    {
      id: 6,
      img: 'path-to-image2.jpg',
      title: 'Product 2',
      desc: 'A brief description of Product 2',
      newPrice: '49.99',
      oldPrice: '59.99',
      onSale: true,
    },
    {
      id: 7,
      img: 'path-to-image2.jpg',
      title: 'Product 2',
      desc: 'A brief description of Product 2',
      newPrice: '49.99',
      oldPrice: '59.99',
      onSale: true,
    },
    {
      id: 8,
      img: 'path-to-image2.jpg',
      title: 'Product 2',
      desc: 'A brief description of Product 2',
      newPrice: '49.99',
      oldPrice: '59.99',
      onSale: true,
    },
    {
      id: 9,
      img: 'path-to-image2.jpg',
      title: 'Product 2',
      desc: 'A brief description of Product 2',
      newPrice: '49.99',
      oldPrice: '59.99',
      onSale: true,
    },
    {
      id: 10,
      img: 'path-to-image2.jpg',
      title: 'Product 2',
      desc: 'A brief description of Product 2',
      newPrice: '49.99',
      oldPrice: '59.99',
      onSale: true,
    },
    {
      id: 11,
      img: 'path-to-image2.jpg',
      title: 'Product 2',
      desc: 'A brief description of Product 2',
      newPrice: '49.99',
      oldPrice: '59.99',
      onSale: true,
    },
    {
      id: 12,
      img: 'path-to-image2.jpg',
      title: 'Product 2',
      desc: 'A brief description of Product 2',
      newPrice: '49.99',
      oldPrice: '59.99',
      onSale: true,
    },
    {
      id: 13,
      img: 'path-to-image2.jpg',
      title: 'Product 2',
      desc: 'A brief description of Product 2',
      newPrice: '49.99',
      oldPrice: '59.99',
      onSale: true,
    },
    {
      id: 14,
      img: 'path-to-image2.jpg',
      title: 'Product 2',
      desc: 'A brief description of Product 2',
      newPrice: '49.99',
      oldPrice: '59.99',
      onSale: true,
    },
    {
      id: 15,
      img: 'path-to-image2.jpg',
      title: 'Product 2',
      desc: 'A brief description of Product 2',
      newPrice: '49.99',
      oldPrice: '59.99',
      onSale: true,
    },
    {
      id: 16,
      img: 'path-to-image2.jpg',
      title: 'Product 2',
      desc: 'A brief description of Product 2',
      newPrice: '49.99',
      oldPrice: '59.99',
      onSale: true,
    },
    {
      id: 17,
      img: 'path-to-image2.jpg',
      title: 'Product 2',
      desc: 'A brief description of Product 2',
      newPrice: '49.99',
      oldPrice: '59.99',
      onSale: true,
    },
    {
      id: 18,
      img: 'path-to-image2.jpg',
      title: 'Product 2',
      desc: 'A brief description of Product 2',
      newPrice: '49.99',
      oldPrice: '59.99',
      onSale: true,
    },
    {
      id: 19,
      img: 'path-to-image2.jpg',
      title: 'Product 2',
      desc: 'A brief description of Product 2',
      newPrice: '49.99',
      oldPrice: '59.99',
      onSale: true,
    },
    {
      id: 20,
      img: 'path-to-image2.jpg',
      title: 'Product 2',
      desc: 'A brief description of Product 2',
      newPrice: '49.99',
      oldPrice: '59.99',
      onSale: true,
    },
    // Add more products as needed
  ];
  const handleAddToCart = (product) => {
    // Add the item to the cart
    addItemToCart(product);

    // Show the toast message
    setToastMessage(`${product.title} added to cart!`);
  };


  return (
    <div className="p-6">
        <TopBanner/>
        <Navbar/>
      <h2 className="text-2xl font-bold my-8">Products Page</h2>
      <p className="text-gray-600 mb-6">Here are the products available in our store.</p>
      
       {/* Toast Notification */}
       {toastMessage && <Toast message={toastMessage} onClose={() => setToastMessage(null)} />}

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Render each product using ItemCard */}
        {productData.map((product) => (
          <ItemCard
            key={product.id}
            product={product}
            addItemToCart={() => handleAddToCart(product)} // Pass the product to handleAddToCart
          />
        ))}
      </div>

      
    </div>
  );
};

export default Products;
