import React from 'react';

const ItemCard = (props) => {
  return (
    <div className="max-w-xs md:max-w-sm lg:max-w-md p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="overflow-hidden rounded-t-lg">
        <img
          src={props.img}
          alt="Product Image"
          className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800">{props.title}</h3>
        <p className="text-sm md:text-base text-gray-600">{props.desc}</p>
        
        <div className="flex justify-between items-center mt-2">
          <h4 className="text-lg font-bold text-gray-900">${props.newPrice}</h4>
          {props.oldPrice && (
            <p className="text-sm text-gray-500 line-through">${props.oldPrice}</p>
          )}
        </div>

        <button className="w-full mt-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
