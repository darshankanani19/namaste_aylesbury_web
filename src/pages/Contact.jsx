import React from "react";

const Contact = () => {
  return (
    <div className="w-full min-h-screen  flex items-center justify-center ">
      <div className="max-w-6xl w-full bg-white shadow-xl rounded-2xl p-6 md:p-10 flex flex-col md:flex-row gap-8">
        
        {/* Left Section - Contact Form */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            We’d love to hear from you!
          </h2>
          <p className="text-gray-600 mb-6">
            Let’s get in touch
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="col-span-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#E48542]"
            />
            <input
              type="text"
              placeholder="Title"
              className="col-span-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#E48542]"
            />
            <input
              type="email"
              placeholder="Email"
              className="col-span-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#E48542]"
            />
            <input
              type="tel"
              placeholder="+91"
              className="col-span-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#E48542]"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="col-span-1 md:col-span-2 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#E48542]"
            ></textarea>
            <button
              type="submit"
              className="bg-[#E48542] hover:bg-[#d97435] text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 w-fit"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Section - Contact Info with Logo */}
        <div className="flex-1 bg-gray-100 rounded-xl p-6 md:p-8 shadow-md flex flex-col items-center text-center">
          {/* Logo */}
          <img
            src="src/assets/logo.png"
            alt="Namaste Aylesbury Logo"
            className="w-24 h-24 object-contain mb-4"
          />
          <p className="text-gray-700 mb-6">
            <strong>Let's Connect</strong><br />
            Have questions or need assistance? We're just a message away. Reach out to us and we’ll get back to you shortly.
          </p>
          <div className="space-y-4 text-gray-800 text-left w-full">
            <div className="flex items-center gap-3">
              <span>📧</span>
              <span>namasteaylesbury@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <span>📞</span>
              <span>+44 7494 221272</span>
            </div>
            <div className="flex items-start gap-3">
              <span>📍</span>
              <span>Aylesbury, Buckinghamshire,<br />United Kingdom</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
