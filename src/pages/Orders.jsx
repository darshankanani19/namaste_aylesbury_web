import React from "react";
import OrderCard from "../components/OrderCard";

// Demo data (replace with API later)
const orders = [
  {
    id: 1,
    thali: "Mini Thali",
    items: ["2 Chapati", "Dal Fry", "Rice", "Salad"],
    price: "₹70",
    status: "Delivered",
    date: "2025-09-10",
    time: "12:45 PM",
  },
  {
    id: 2,
    thali: "Full Thali",
    items: ["4 Chapati", "Paneer Curry", "Dal", "Rice", "Sweet"],
    price: "₹120",
    status: "Pending",
    date: "2025-09-11",
    time: "1:15 PM",
  },
  {
    id: 3,
    thali: "Mini Thali",
    items: ["2 Chapati", "Veg Sabji", "Rice", "Papad"],
    price: "₹70",
    status: "Cancelled",
    date: "2025-09-09",
    time: "8:30 PM",
  },
];

const Orders = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-purple-700 mb-6">My Orders</h1>

      <div className="grid gap-6">
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
