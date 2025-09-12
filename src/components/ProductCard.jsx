import React from "react";

const ProductCard = ({ title, items, price }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 text-center">
      <h2 className="text-xl font-semibold text-purple-700 mb-4">{title}</h2>
      <ul className="text-gray-700 mb-4 space-y-2">
        {items.map((item, idx) => (
          <li key={idx}>🍽 {item}</li>
        ))}
      </ul>
      <p className="text-lg font-bold text-gray-900 mb-4">{price}</p>
      <button className="px-6 py-2 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition">
        Order Now
      </button>
    </div>
  );
};

export default ProductCard;
