import React, { useState } from "react";
import ProfileOption from "../components/ProfileOption";

import EditProfile from "../components/EditProfile";
import Address from "../components/Address";
import CartPage from "../pages/CartPage";
import OrderHistory from "../pages/OrderHistory";
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
        return <CartPage />;
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
    <div className="w-full min-h-screen bg-[#f9f9f9] p-4 md:p-8 flex justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT: Main Content */}
        <div className="bg-white p-5 sm:p-6 rounded-xl shadow-sm col-span-2 order-2 lg:order-1">
          {renderLeftContent()}
        </div>

        {/* RIGHT: Sidebar Menu */}
        <div className="bg-white rounded-xl shadow-sm p-5 sm:p-6 flex flex-col items-center order-1 lg:order-2 lg:sticky top-8 h-fit">
          {/* Avatar */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#E48542] text-white flex items-center justify-center text-3xl font-semibold mb-4">
            G
          </div>

          {/* User Info */}
          <div className="text-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Guest User</h2>
            <p className="text-sm text-gray-600 break-all">guestuser@gmail.com</p>
          </div>

          {/* Profile Navigation */}
          <nav className="w-full space-y-2">
            {options.map(({ key, icon, label }) => (
              <ProfileOption
                key={key}
                icon={icon}
                label={label}
                onClick={() => setSelectedSection(key)}
                active={selectedSection === key}
              />
            ))}
          </nav>

          {/* Login Button */}
          <button
  className="mt-6 w-full bg-[#FDD3BA] hover:bg-[#FF904D] text-[#EFC4A7] font-semibold py-2 rounded-full transition"
>
  Login
</button>


        </div>
      </div>
    </div>
  );
};

export default Profile;
