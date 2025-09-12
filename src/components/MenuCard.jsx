import React from "react";

const MenuCard = ({
  day,
  date,
  type,
  items,
  image,
  quantity,
  price,
  onIncrease,
  onDecrease,
  onAddToCart,
}) => {
  const isDecreaseDisabled = quantity <= 1;

  return (
    <div
      className="rounded-xl font-sans shadow-md border flex"
      style={{
        backgroundColor: "#F0EFF2",
        borderColor: "#EDD9CD",
        color: "#000000",
        height: "320px", // ✅ fixed height
        overflow: "hidden",
      }}
    >
      {/* Left: Image */}
      <div
        className="w-1/3 rounded-l-xl overflow-hidden flex justify-center items-center border-r"
        style={{
          backgroundColor: "#FFFFFF",
          borderColor: "#EDD9CD",
        }}
      >
        <img
          src={image}
          alt={type}
          className="object-cover w-full h-full"
          onError={(e) => (e.target.style.display = "none")}
        />
      </div>

      {/* Right: Content */}
      <div className="w-2/3 flex flex-col p-4 justify-between overflow-hidden">
        {/* Top Info (scrollable if needed) */}
        <div className="overflow-y-auto pr-2" style={{ maxHeight: "180px" }}>
          <h2 className="text-xl font-bold text-[#E48542] mb-1">{type}</h2>
          <p className="text-sm font-semibold text-[#E48542] mb-2">
            {day} - {date}
          </p>
          <ul className="list-disc list-inside text-sm text-black space-y-1">
            {items && items.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>

        {/* Bottom Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
          <div className="flex items-center gap-3">
            <button
              onClick={onDecrease}
              disabled={isDecreaseDisabled}
              className="w-8 h-8 rounded-full flex justify-center items-center text-xl font-bold transition"
              style={{
                backgroundColor: isDecreaseDisabled ? "#EDD9CD" : "#E48542",
                color: isDecreaseDisabled ? "#E48542" : "#FFFFFF",
                border: "1px solid #EDD9CD",
                cursor: isDecreaseDisabled ? "not-allowed" : "pointer",
              }}
            >
              −
            </button>
            <span className="font-semibold text-lg text-[#000000]">{quantity}</span>
            <button
              onClick={onIncrease}
              className="w-8 h-8 rounded-full flex justify-center items-center text-xl font-bold transition"
              style={{
                backgroundColor: "#E48542",
                color: "#FFFFFF",
                border: "1px solid #EDD9CD",
                cursor: "pointer",
              }}
            >
              +
            </button>
          </div>

          <div className="flex w-full sm:w-64 rounded-full overflow-hidden shadow-md transition cursor-pointer select-none">
            <div
              className="w-1/2 py-2 text-lg font-semibold flex items-center justify-center"
              style={{
                backgroundColor: "#E48542",
                color: "#FFFFFF",
              }}
            >
              ${price * quantity}
            </div>
            <div
              className="w-1/2 py-2 font-semibold text-sm flex items-center justify-center transition"
              style={{
                backgroundColor: "#EDD9CD",
                color: "#E48542",
              }}
              onClick={onAddToCart}
            >
              Add to Cart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
