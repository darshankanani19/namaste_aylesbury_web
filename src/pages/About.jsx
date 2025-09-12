import React from "react";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-4xl bg-white shadow-lg rounded-2xl p-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          About Us
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Welcome to our platform! We are dedicated to delivering high-quality
          services and providing the best user experience possible.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Our mission is to simplify your daily tasks and provide solutions that
          are reliable, scalable, and easy to use. We focus on innovation,
          customer satisfaction, and long-term trust.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          In the future, we will be connecting real-time data and APIs so that
          you can get the most updated and dynamic content right here. Stay
          tuned for upcoming updates!
        </p>
      </div>
    </div>
  );
};

export default About;
