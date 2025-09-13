import React, { useState } from "react";
import ProfileOption from "../components/ProfileOption";

import EditProfile from "../components/EditProfile";
import Address from "../components/Address";
import OrderCart from "../components/OrderCart";
import OrderHistory from "../components/OrderHistory";
import Setting from "../components/Setting";
import CompanyInfo from "../components/CompanyInfo";

const Profile = () => {
  const [selectedSection, setSelectedSection] = useState("about");

  const renderLeftContent = () => {
    switch (selectedSection) {
      case "edit":
        return <EditProfile />;
      case "address":
        return <Address />;
      case "cart":
        return <OrderCart />;
      case "history":
        return <OrderHistory />;
      case "setting":
        return <Setting />;
      default:
        return <CompanyInfo />;
    }
  };

  const options = [
    { key: "edit", icon: "✏️", label: "Edit Profile" },
    { key: "address", icon: "🏠", label: "Address" },
    { key: "cart", icon: "🛒", label: "Order Cart" },
    { key: "history", icon: "📦", label: "Order History" },
    { key: "setting", icon: "⚙️", label: "Setting" },
  ];

  return (
    <div className="w-full min-h-screen p-4 md:p-8 flex justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-white p-6 rounded-xl shadow-sm md:col-span-2 order-2 md:order-1">
          {renderLeftContent()}
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center order-1 md:order-2">
          <div className="w-20 h-20 rounded-full bg-[#E48542] text-white flex items-center justify-center text-3xl font-semibold mb-4">
            G
          </div>
          <div className="text-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Guest User</h2>
            <p className="text-sm text-gray-600">guestuser@gmail.com</p>
          </div>

          {/* Dynamic Profile Options */}
          <div className="w-full space-y-3">
            {options.map(({ key, icon, label }) => (
              <ProfileOption
                key={key}
                icon={icon}
                label={label}
                onClick={() => setSelectedSection(key)}
                active={selectedSection === key}
              />
            ))}
          </div>

          <button className="mt-6 bg-[#E48542] hover:bg-[#d97435] text-white font-semibold py-2 px-8 rounded-full transition">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
