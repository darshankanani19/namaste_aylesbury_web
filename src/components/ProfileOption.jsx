import React from "react";

const ProfileOption = ({ icon, label, onClick, active }) => {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      className={`flex items-center gap-3 px-4 py-3 rounded-md cursor-pointer transition
        ${
          active
            ? "bg-[#FDD3BA] text-[#FF904D]"
            : "bg-[#F0EFF2] text-black hover:bg-[#e5e4e7]"
        }
      `}
    >
      <span className="text-xl">{icon}</span>
      <span className="font-medium">{label}</span>
    </div>
  );
};

export default ProfileOption;
