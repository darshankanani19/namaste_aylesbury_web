import React from "react";

const Explore = () => {
  const items = [
    {
      title: "Mini Thali",
      desc: "A perfect balanced meal with 2 sabji, dal, rice, roti, salad, and sweet.",
      price: "₹99",
      img: "https://via.placeholder.com/200x150", // replace with your thali image
    },
    {
      title: "Full Thali",
      desc: "A wholesome thali with 3 sabji, dal, rice, roti, papad, salad, sweet, and buttermilk.",
      price: "₹149",
      img: "https://via.placeholder.com/200x150",
    },
    {
      title: "Weekly Subscription",
      desc: "7 days of freshly cooked meals delivered at your doorstep.",
      price: "₹650",
      img: "https://via.placeholder.com/200x150",
    },
    {
      title: "Monthly Subscription",
      desc: "30 days of meals with free delivery and customizable menu options.",
      price: "₹2400",
      img: "https://via.placeholder.com/200x150",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-10">
          Explore Our Menu
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-xl rounded-2xl overflow-hidden transition duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-indigo-600">
                    {item.price}
                  </span>
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-md">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
