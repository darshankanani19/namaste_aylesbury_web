import React from "react";

const OrderHistory = () => {
  // Dummy orders (replace with API later)
  const orders = [
    {
      id: "ORD12345",
      item: "Mini Thali",
      date: "2025-09-01",
      status: "Delivered",
      amount: "₹99",
    },
    {
      id: "ORD12346",
      item: "Full Thali",
      date: "2025-09-05",
      status: "In Progress",
      amount: "₹149",
    },
    {
      id: "ORD12347",
      item: "Monthly Subscription",
      date: "2025-09-10",
      status: "Pending",
      amount: "₹2400",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Order History
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="p-4 text-left">Order ID</th>
                <th className="p-4 text-left">Item</th>
                <th className="p-4 text-left">Date</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Amount</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="p-4">{order.id}</td>
                  <td className="p-4">{order.item}</td>
                  <td className="p-4">{order.date}</td>
                  <td
                    className={`p-4 font-medium ${
                      order.status === "Delivered"
                        ? "text-green-600"
                        : order.status === "In Progress"
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    {order.status}
                  </td>
                  <td className="p-4 font-semibold">{order.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
