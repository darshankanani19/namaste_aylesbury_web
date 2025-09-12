import React from "react";

const Subscriptions = () => {
  const plans = [
    {
      name: "Weekly Plan",
      price: "₹650",
      desc: "Get fresh meals delivered every day for 7 days.",
    },
    {
      name: "Monthly Plan",
      price: "₹2400",
      desc: "30 days of hassle-free meals with free delivery.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Subscription Plans
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition duration-300"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {plan.name}
              </h2>
              <p className="text-gray-600 mb-4">{plan.desc}</p>
              <p className="text-xl font-bold text-indigo-600 mb-4">
                {plan.price}
              </p>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg shadow-md">
                Subscribe Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
