import React from 'react';
import ItemCard from '../../components/itemcard/ItemCard'; // Import your ItemCard component
import Navbar from '../../components/navbar/Navbar';
import TopBanner from '../../components/topbanner/TopBanner';

const Products = () => {
  // Example product data
  const productData = [
    {
      id: 1,
      img: 'path-to-image1.jpg',
      title: 'Product 1',
      desc: 'A brief description of Product 1',
      newPrice: '29.99',
      oldPrice: '39.99',
    },
    {
      id: 2,
      img: 'path-to-image2.jpg',
      title: 'Product 2',
      desc: 'A brief description of Product 2',
      newPrice: '49.99',
      oldPrice: '59.99',
    },
    {
      id: 3,
      img: 'path-to-image2.jpg',
      title: 'Product 2',
      desc: 'A brief description of Product 2',
      newPrice: '49.99',
      oldPrice: '59.99',
    },
    {
      id: 4,
      img: 'path-to-image2.jpg',
      title: 'Product 2',
      desc: 'A brief description of Product 2',
      newPrice: '49.99',
      oldPrice: '59.99',
    },
    {
      id: 5,
      img: 'path-to-image2.jpg',
      title: 'Product 2',
      desc: 'A brief description of Product 2',
      newPrice: '49.99',
      oldPrice: '59.99',
    },
    {
      id: 6,
      img: 'path-to-image2.jpg',
      title: 'Product 2',
      desc: 'A brief description of Product 2',
      newPrice: '49.99',
      oldPrice: '59.99',
    },
    {
      id: 7,
      img: 'path-to-image2.jpg',
      title: 'Product 2',
      desc: 'A brief description of Product 2',
      newPrice: '49.99',
      oldPrice: '59.99',
    },
    {
      id: 8,
      img: 'path-to-image2.jpg',
      title: 'Product 2',
      desc: 'A brief description of Product 2',
      newPrice: '49.99',
      oldPrice: '59.99',
    },
    {
      id: 9,
      img: 'path-to-image2.jpg',
      title: 'Product 2',
      desc: 'A brief description of Product 2',
      newPrice: '49.99',
      oldPrice: '59.99',
    },
    {
      id: 10,
      img: 'path-to-image2.jpg',
      title: 'Product 2',
      desc: 'A brief description of Product 2',
      newPrice: '49.99',
      oldPrice: '59.99',
    },
    {
      id: 11,
      img: 'path-to-image2.jpg',
      title: 'Product 2',
      desc: 'A brief description of Product 2',
      newPrice: '49.99',
      oldPrice: '59.99',
    },
    {
      id: 12,
      img: 'path-to-image2.jpg',
      title: 'Product 2',
      desc: 'A brief description of Product 2',
      newPrice: '49.99',
      oldPrice: '59.99',
    },
    {
      id: 13,
      img: 'path-to-image2.jpg',
      title: 'Product 2',
      desc: 'A brief description of Product 2',
      newPrice: '49.99',
      oldPrice: '59.99',
    },
    {
      id: 14,
      img: 'path-to-image2.jpg',
      title: 'Product 2',
      desc: 'A brief description of Product 2',
      newPrice: '49.99',
      oldPrice: '59.99',
    },
    {
      id: 15,
      img: 'path-to-image2.jpg',
      title: 'Product 2',
      desc: 'A brief description of Product 2',
      newPrice: '49.99',
      oldPrice: '59.99',
    },
    {
      id: 16,
      img: 'path-to-image2.jpg',
      title: 'Product 2',
      desc: 'A brief description of Product 2',
      newPrice: '49.99',
      oldPrice: '59.99',
    },
    {
      id: 17,
      img: 'path-to-image2.jpg',
      title: 'Product 2',
      desc: 'A brief description of Product 2',
      newPrice: '49.99',
      oldPrice: '59.99',
    },
    {
      id: 18,
      img: 'path-to-image2.jpg',
      title: 'Product 2',
      desc: 'A brief description of Product 2',
      newPrice: '49.99',
      oldPrice: '59.99',
    },
    {
      id: 19,
      img: 'path-to-image2.jpg',
      title: 'Product 2',
      desc: 'A brief description of Product 2',
      newPrice: '49.99',
      oldPrice: '59.99',
    },
    {
      id: 20,
      img: 'path-to-image2.jpg',
      title: 'Product 2',
      desc: 'A brief description of Product 2',
      newPrice: '49.99',
      oldPrice: '59.99',
    },
    // Add more products as needed
  ];

  return (
    <div className="p-6">
        <TopBanner/>
        <Navbar/>
      <h2 className="text-2xl font-bold my-8">Products Page</h2>
      <p className="text-gray-600 mb-6">Here are the products available in our store.</p>
      
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Render each product using ItemCard */}
        {productData.map((product) => (
          <ItemCard
            key={product.id}
            img={product.img}
            title={product.title}
            desc={product.desc}
            newPrice={product.newPrice}
            oldPrice={product.oldPrice}
          />
        ))}
      </div>

      
    </div>
  );
};

export default Products;
