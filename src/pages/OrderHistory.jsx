import React from "react";
import { useNavigate } from "react-router-dom";

const orderHistoryData = [
  {
    id: 1,
    type: "Mini Thali",
    image: "src/assets/miniThali.png", // replace with actual path
    price: 6,
    delivered: true,
  },
  {
    id: 2,
    type: "Full Thali",
    image: "src/assets/fullThali.png", // replace with actual path
    price: 9,
    delivered: false,
  },
];

const OrderHistory = () => {
  const navigate = useNavigate();

  const handleMakeOrder = () => {
    navigate("/menu");
  };

  return (
    <div className="bg-[#F9F9F9] rounded-xl p-4 sm:p-6">
      <h2 className="text-lg sm:text-xl font-bold text-black mb-4">History</h2>

      <div className="space-y-4">
        {orderHistoryData.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-2 border-dashed border-[#C2C2C2] rounded-xl px-4 py-3"
          >
            {/* Left: Image and Info */}
            <div className="flex items-center gap-3">
              <img
                src={item.image}
                alt={item.type}
                className="w-12 h-12 rounded-full object-cover border border-gray-300"
              />
              <div>
                <p className="font-bold text-black text-base">{item.type}</p>
                <p className="text-sm text-gray-500">View more</p>
              </div>
            </div>

            {/* Right: Price & Delivery Status */}
            <div className="text-right">
              <p className="text-[#E48542] font-bold">${item.price}</p>
              <p
                className={`text-sm font-semibold ${
                  item.delivered ? "text-green-600" : "text-red-600"
                }`}
              >
                {item.delivered ? "Delivered" : "Not Delivered"}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <hr className="my-6 border-t border-dotted border-gray-300" />

      {/* Button */}
      <div className="text-center">
        <button
        onClick={handleMakeOrder}
        className="bg-[#FF904D] text-white font-semibold px-8 py-2 rounded-full transition hover:bg-[#e87b3d]"
      >
        Make Order
      </button>
      </div>
    </div>
  );
};

export default OrderHistory;
