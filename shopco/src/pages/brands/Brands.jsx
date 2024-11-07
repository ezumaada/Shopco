import React, { useState } from 'react';
import { ShoppingBag, X } from 'lucide-react';

const Brands = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);

  const brands = [
    {
      id: 1,
      name: 'Gucci',
      description: 'Italian luxury fashion house known for contemporary luxury.',
      founded: '1921, Florence, Italy',
      logo: '/images/gucci-logo.png',
      products: [
        {
          id: 1,
          name: 'GG Marmont Bag',
          category: 'Bags',
          price: 2300,
          description: 'Matelassé leather shoulder bag with Double G hardware.',
          image: '/images/marmont-bag.jpg'
        },
        {
          id: 2,
          name: 'Princetown Loafers',
          category: 'Shoes',
          price: 890,
          description: 'Leather slippers with Horsebit detail.',
          image: '/images/princetown-loafers.jpg'
        },
        {
          id: 3,
          name: 'Wool Jacket',
          category: 'Jackets',
          price: 3200,
          description: 'Web stripe wool jacket with patch.',
          image: '/images/wool-jacket.jpg'
        }
      ]
    },
    {
      id: 2,
      name: 'Prada',
      description: 'Italian luxury fashion house specializing in leather goods, travel accessories, shoes, and ready-to-wear.',
      founded: '1913, Milan, Italy',
      logo: '/images/prada-logo.png',
      products: [
        {
          id: 4,
          name: 'Galleria Bag',
          category: 'Bags',
          price: 3200,
          description: 'Double-handle Saffiano leather bag.',
          image: '/images/galleria-bag.jpg'
        },
        {
          id: 5,
          name: 'Platform Loafers',
          category: 'Shoes',
          price: 995,
          description: 'Brushed leather platform loafers.',
          image: '/images/platform-loafers.jpg'
        }
      ]
    }
  ];

  const handleAddToCart = (product) => {
    // Implement your cart functionality here
    console.log(`Added ${product.name} to cart`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {!selectedBrand ? (
        // Brands Overview
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="cursor-pointer hover:shadow-lg transition-shadow rounded-lg border p-4"
              onClick={() => setSelectedBrand(brand)}
            >
              <header>
                <h2 className="text-2xl font-bold">{brand.name}</h2>
              </header>
              <section>
                <p className="text-gray-600 mb-4">{brand.description}</p>
                <p className="text-sm text-gray-500">Founded: {brand.founded}</p>
              </section>
            </div>
          ))}
        </div>
      ) : (
        // Brand Products View
        <div>
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">{selectedBrand.name}</h1>
              <p className="text-gray-600">{selectedBrand.description}</p>
            </div>
            <button 
              onClick={() => setSelectedBrand(null)}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
            >
              <X size={20} />
              Close
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedBrand.products.map((product) => (
              <div key={product.id} className="overflow-hidden rounded-lg border shadow-sm">
                <header className="relative">
                  <div className="h-48 bg-gray-100 mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl p-4">{product.name}</h3>
                </header>
                <section className="px-4 py-2">
                  <p className="text-gray-600 mb-2">{product.description}</p>
                  <p className="text-lg font-bold">${product.price.toLocaleString()}</p>
                  <p className="text-sm text-gray-500 mb-4">{product.category}</p>
                </section>
                <footer className="px-4 py-2 bg-gray-50">
                  <button 
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg p-2"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingBag size={20} />
                    Add to Cart
                  </button>
                </footer>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Brands;
