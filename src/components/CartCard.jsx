import React from "react";

const CartCard = ({
  day,
  type,
  image,
  quantity,
  price,
  onIncrease,
  onDecrease,
  onRemove,
}) => {
  const isDecreaseDisabled = quantity <= 1;

  return (
    <div
      className="flex justify-between rounded-xl px-4 py-3 mb-3"
      style={{
        backgroundColor: "#F0EFF2",
        border: "2px dashed #C2C2C2",
      }}
    >
      {/* Left: Image & Details */}
      <div className="flex items-center gap-3">
        <img
          src={image}
          alt={type}
          className="w-13 h-13 rounded-full object-cover border border-gray-300"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
        <div>
          <p className="font-bold text-black text-base">{type}</p>
          <p className="text-[#E48542] font-bold text-sm">${price}</p>
        </div>
      </div>

      {/* Right: Quantity Controls & Remove */}
      <div className="flex flex-col items-center gap-2 sm:gap-3">
        <div className="flex items-center gap-3">
          <button
            onClick={onDecrease}
            disabled={isDecreaseDisabled}
            className="w-7 h-7 rounded-full flex items-center justify-center text-base font-bold"
            style={{
              backgroundColor: "#FADACB",
              color: "#E48542",
              cursor: isDecreaseDisabled ? "not-allowed" : "pointer",
            }}
          >
            −
          </button>

          <span className="font-bold text-black text-base">{quantity}</span>

          <button
            onClick={onIncrease}
            className="w-7 h-7 rounded-full flex items-center justify-center text-base font-bold"
            style={{
              backgroundColor: "#E48542",
              color: "#FFFFFF",
              cursor: "pointer",
            }}
          >
            +
          </button>
        </div>

        {/* 🗑️ Remove Button Styled */}
        <button
          onClick={onRemove}
          className="font-semibold h-7 w-20 rounded-full flex items-center justify-center transition"

          style={{
            backgroundColor: "#FF5C5C", // red background
            color: "#FFFFFF",           // white text
            cursor: "pointer",
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartCard;
