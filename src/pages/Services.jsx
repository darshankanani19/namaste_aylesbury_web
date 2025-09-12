import React from "react";

const Services = () => {
  const services = [
    {
      title: "Fast Delivery",
      desc: "Get your order delivered quickly with our efficient delivery system.",
      icon: "🚀",
    },
    {
      title: "Fresh Meals",
      desc: "We prepare fresh and hygienic meals daily with top-quality ingredients.",
      icon: "🥗",
    },
    {
      title: "Easy Subscription",
      desc: "Choose weekly or monthly meal plans with flexible customization options.",
      icon: "📅",
    },
    {
      title: "24/7 Support",
      desc: "Our team is available anytime to resolve your queries and help you.",
      icon: "💬",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-10">
          Our Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-xl rounded-2xl p-6 text-center transition duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
