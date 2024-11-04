import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import casual from '../../assets/images/casual.png';
import formal from '../../assets/images/formal.png';
import party from '../../assets/images/party.png';
import gym from '../../assets/images/gym.png';

const BrowseSection = () => {
  return (
    <div className="mx-[10vw] bg-pink-100 my-5 py-6">
      <h1 className="text-center font-bold text-3xl mb-4">BROWSE BY DRESS STYLE</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img src={casual} alt="casual" className="w-full h-auto object-cover" />
        <img src={formal} alt="formal" className="w-full h-auto object-cover" />
        <img src={party} alt="party" className="w-full h-auto object-cover" />
        <img src={gym} alt="gym" className="w-full h-auto object-cover" />
      </div>
      
      <div className="text-center mt-8">
        {/* Link to the Products page */}
        <Link to="/products">
          <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
            View All Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BrowseSection;
