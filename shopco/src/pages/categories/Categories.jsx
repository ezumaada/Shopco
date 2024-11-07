import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const CategoryNav = ({ activeCategory, setActiveCategory }) => {
  const categories = ['casual', 'work', 'gym', 'party'];
  
  return (
    <nav className="mb-8">
      <ul className="flex space-x-8 justify-center">
        {categories.map((category) => (
          <li key={category}>
            <button 
              onClick={() => setActiveCategory(category)}
              className={`text-lg capitalize transition duration-300 relative pb-2
                ${activeCategory === category ? 'text-black' : 'text-gray-500 hover:text-gray-800'}`}
            >
              {category}
              <div className="absolute bottom-0 left-0 w-full transition-all duration-300">
                <hr className={`bg-red-500 h-[3px] transition-transform duration-300
                  ${activeCategory === category ? 'scale-x-100' : 'scale-x-0'}`} 
                />
              </div>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const CasualContent = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-2">T-Shirts</h3>
      <p className="text-gray-600">Comfortable everyday wear</p>
    </div>
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-2">Jeans</h3>
      <p className="text-gray-600">Classic denim collection</p>
    </div>
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-2">Sneakers</h3>
      <p className="text-gray-600">Casual footwear</p>
    </div>
  </div>
);

const WorkContent = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-2">Suits</h3>
      <p className="text-gray-600">Professional attire</p>
    </div>
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-2">Blazers</h3>
      <p className="text-gray-600">Formal wear</p>
    </div>
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-2">Dress Shoes</h3>
      <p className="text-gray-600">Business footwear</p>
    </div>
  </div>
);

const GymContent = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-2">Athletic Wear</h3>
      <p className="text-gray-600">Performance clothing</p>
    </div>
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-2">Sports Shoes</h3>
      <p className="text-gray-600">Training footwear</p>
    </div>
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-2">Accessories</h3>
      <p className="text-gray-600">Workout essentials</p>
    </div>
  </div>
);

const PartyContent = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-2">Dresses</h3>
      <p className="text-gray-600">Evening wear</p>
    </div>
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-2">Accessories</h3>
      <p className="text-gray-600">Party essentials</p>
    </div>
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-2">Formal Shoes</h3>
      <p className="text-gray-600">Party footwear</p>
    </div>
  </div>
);

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState('casual');

  const renderContent = () => {
    switch (activeCategory) {
      case 'work':
        return <WorkContent />;
      case 'gym':
        return <GymContent />;
      case 'party':
        return <PartyContent />;
      default:
        return <CasualContent />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Navbar/>
      <h1 className="text-3xl font-bold text-center mb-8">Categories</h1>
      <CategoryNav 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
      />
      <div className="mt-8 mb-3">
        {renderContent()}
      </div>
      <Footer/>
    </div>
  );
};

export default Categories;