import React from 'react';

const ProductCard = ({ product }) => {
  const { id, title, price, size, gender, image } = product;

  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <img src={image} alt={title} className="w-full h-32 object-cover mb-4" />
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      <p className="text-gray-600 mt-1 mb-4">{`$${price}`}</p>
      <p className="text-gray-600">{`Size: ${size}`}</p>
      <p className="text-gray-600">{`Gender: ${gender}`}</p>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold mt-4 py-2 px-4 rounded-md"
        onClick={() => handleAddToCart(id)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
