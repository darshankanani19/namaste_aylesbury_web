import React, { useState } from "react";

const EditProfile = () => {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    console.log("Profile updated:", form);
  };

  return (
    <div className="w-full bg-[#F8F8F8] rounded-xl p-6">
      <h2 className="text-lg font-semibold text-black mb-6">Edit Profile</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name & Phone - Two Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full border border-[#F0EFF2] rounded-md px-4 py-2 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">Phone</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your phone"
              className="w-full border border-[#F0EFF2] rounded-md px-4 py-2 focus:outline-none"
            />
          </div>
        </div>

        {/* Email - Full Width */}
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full border border-[#F0EFF2] rounded-md px-4 py-2 focus:outline-none"
          />
        </div>

        {/* Save Button */}
        <div>
          <button
            type="submit"
            className="bg-[#F0C6A0] text-white font-medium py-2 px-6 rounded-md cursor-pointer"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
