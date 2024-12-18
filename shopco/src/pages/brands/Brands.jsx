import React, { useState } from "react";
import { X } from "lucide-react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import ItemCard from "../../components/itemcard/ItemCard"; // Reuse the ItemCard component
import { useCart } from "../../cartcontext/CartContext"; // Import the Cart Context

const Brands = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);

  const brands = [
    {
      id: 1,
      name: "Gucci",
      description: "Italian luxury fashion house known for contemporary luxury.",
      founded: "1921, Florence, Italy",
      logo: "/images/gucci-logo.png",
      products: [
        {
          id: 1,
          img: "/images/marmont-bag.jpg",
          title: "GG Marmont Bag",
          category: "Bags",
          newPrice: 2300,
          oldPrice: 2500,
          onSale: true,
          desc: "Matelassé leather shoulder bag with Double G hardware.",
        },
        {
          id: 2,
          img: "/images/princetown-loafers.jpg",
          title: "Princetown Loafers",
          category: "Shoes",
          newPrice: 890,
          oldPrice: 990,
          onSale: true,
          desc: "Leather slippers with Horsebit detail.",
        },
        {
          id: 3,
          img: "/images/wool-jacket.jpg",
          title: "Wool Jacket",
          category: "Jackets",
          newPrice: 3200,
          oldPrice: 3500,
          onSale: true,
          desc: "Web stripe wool jacket with patch.",
        },
      ],
    },
    {
      id: 2,
      name: "Prada",
      description:
        "Italian luxury fashion house specializing in leather goods, travel accessories, shoes, and ready-to-wear.",
      founded: "1913, Milan, Italy",
      logo: "/images/prada-logo.png",
      products: [
        {
          id: 4,
          img: "/images/galleria-bag.jpg",
          title: "Galleria Bag",
          category: "Bags",
          newPrice: 3200,
          oldPrice: 3600,
          onSale: true,
          desc: "Double-handle Saffiano leather bag.",
        },
        {
          id: 5,
          img: "/images/platform-loafers.jpg",
          title: "Platform Loafers",
          category: "Shoes",
          newPrice: 995,
          oldPrice: 1100,
          onSale: true,
          desc: "Brushed leather platform loafers.",
        },
      ],
    },
    {
      id: 3,
      name: "Dior",
      description: "Luxury French fashion house known for timeless elegance.",
      founded: "1946, Paris, France",
      logo: "/images/dior-logo.png",
      products: [
        {
          id: 6,
          img: "/images/dior-saddle-bag.jpg",
          title: "Saddle Bag",
          category: "Bags",
          newPrice: 3500,
          oldPrice: 4000,
          onSale: true,
          desc: "Iconic saddle bag with modern embroidery details.",
        },
        {
          id: 7,
          img: "/images/dior-jacket.jpg",
          title: "Tailored Wool Jacket",
          category: "Jackets",
          newPrice: 5000,
          oldPrice: 5300,
          onSale: false,
          desc: "Classic tailored jacket with wool and silk blend.",
        },
      ],
    },
    {
      id: 4,
      name: "Chanel",
      description: "Pioneer in luxury fashion, renowned for timeless designs.",
      founded: "1909, Paris, France",
      logo: "/images/chanel-logo.png",
      products: [
        {
          id: 8,
          img: "/images/chanel-handbag.jpg",
          title: "Classic Handbag",
          category: "Bags",
          newPrice: 6200,
          oldPrice: 6800,
          onSale: true,
          desc: "Iconic quilted handbag with double C lock.",
        },
        {
          id: 9,
          img: "/images/chanel-dress.jpg",
          title: "Little Black Dress",
          category: "Dresses",
          newPrice: 4200,
          oldPrice: 4500,
          onSale: false,
          desc: "The iconic little black dress with a modern twist.",
        },
      ],
    },
  ];

  return (
    <div>
      <Navbar />
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
            <div className="flex border-2 border-solid border-black p-5 justify-between items-center mb-8">
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
                <ItemCard
                  key={product.id}
                  product={product} // Pass product data to ItemCard
                />
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Brands;
