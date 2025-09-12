import React from "react";

const OrderCard = ({ order }) => {
  const statusColors = {
    Delivered: "bg-green-100 text-green-700 border-green-400",
    Pending: "bg-yellow-100 text-yellow-700 border-yellow-400",
    Cancelled: "bg-red-100 text-red-700 border-red-400",
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-semibold text-purple-700">
          {order.thali}
        </h2>
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium border ${
            statusColors[order.status]
          }`}
        >
          {order.status}
        </span>
      </div>

      <ul className="list-disc list-inside text-gray-700 mb-4">
        {order.items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <div className="flex justify-between text-sm text-gray-600">
        <p>
          📅 {order.date} <br /> 🕒 {order.time}
        </p>
        <p className="text-lg font-bold text-gray-900">{order.price}</p>
      </div>
    </div>
  );
};

export default OrderCard;
