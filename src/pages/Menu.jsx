import React, { useState } from "react";
import "../styles.css"; // Ensure styles are imported
import MenuCard from "../components/MenuCard";
import CartCard from "../components/CartCard";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

const thaliData = {
  "Mini Thali": {
    Mon: ["1 sabji", "2 roti/Steam Rice", "Salad/Pickel", "Papad"],
    Tue: ["1 sabji", "2 roti/Steam Rice", "Salad/Pickel", "Papad"],
    Wed: ["1 sabji", "2 roti/Steam Rice", "Salad/Pickel", "Papad"],
    Thu: ["1 sabji", "2 roti/Steam Rice", "Salad/Pickel", "Papad"],
    Fri: ["1 sabji", "2 roti/Steam Rice", "Salad/Pickel", "Papad"],
  },
  "Full Thali": {
    Mon: ["4 Chapati", "Dal Fry", "Rice", "Paneer Sabji", "Salad"],
    Tue: ["4 Chapati", "Paneer Curry", "Dal", "Rice", "Sweet"],
    Wed: ["4 Chapati", "Veg Sabji", "Dal Tadka", "Rice", "Salad"],
    Thu: ["4 Chapati", "Mix Veg", "Dal Fry", "Rice", "Sweet"],
    Fri: ["4 Chapati", "Chole", "Jeera Rice", "Paneer Sabji", "Salad"],
  },
};

const prices = {
  "Mini Thali": 6,
  "Full Thali": 10,
};

const taxRate = 0.05;

const thaliImages = {
  "Mini Thali": "src/assets/miniThali.png", // ensure correct public path or import
  "Full Thali": "src/assets/fullThali.png",
};

const Menu = () => {
  const todayIndex = new Date().getDay() - 1;
  const defaultDay = todayIndex >= 0 && todayIndex <= 4 ? todayIndex : 0;

  const [selectedDay, setSelectedDay] = useState(defaultDay);
  const [selectedOption, setSelectedOption] = useState("Mini Thali");
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState({});

  const handleAddToCart = () => {
    const key = `${days[selectedDay]}-${selectedOption}`;
    setCart((prev) => {
      const prevQty = prev[key]?.qty || 0;
      return {
        ...prev,
        [key]: {
          day: days[selectedDay],
          option: selectedOption,
          qty: prevQty + quantity,
          price: prices[selectedOption],
        },
      };
    });
    setQuantity(1);
  };

  const changeQuantity = (delta) => {
    setQuantity((q) => Math.max(1, q + delta));
  };

  const updateCartQuantity = (key, delta) => {
    setCart((prev) => {
      const item = prev[key];
      if (!item) return prev;
      const newQty = item.qty + delta;
      if (newQty <= 0) {
        const { [key]: _, ...rest } = prev;
        return rest;
      }
      return {
        ...prev,
        [key]: {
          ...item,
          qty: newQty,
        },
      };
    });
  };

  const subtotal = Object.values(cart).reduce(
    (acc, { qty, price }) => acc + qty * price,
    0
  );
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  const currentDay = days[selectedDay];
  const selectedItems = thaliData[selectedOption][currentDay];
  const selectedImage = thaliImages[selectedOption];
  const selectedPrice = prices[selectedOption];

  return (
    <div
      className="min-h-screen font-sans text-black overflow-x-hidden"
    >

      <div  >
        <main className="max-w-7xl flex-1 flex flex-col lg:flex-row gap-8 overflow-hidden">
          <section className="flex-1 bg-white rounded-xl p-6 shadow-md border border-[#EDD9CD] overflow-auto">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-2xl font-bold text-[#E48542]">Menu</h2>
              <div className="flex gap-3 text-sm">
                {["Mini Thali", "Full Thali"].map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSelectedOption(option);
                      setQuantity(1);
                    }}
                    className="px-3 py-1 rounded font-semibold transition"
                    style={{
                      backgroundColor: selectedOption === option ? "#EDD9CD" : "#F0EFF2",
                      color: selectedOption === option ? "#E48542" : "#000000",
                      border: selectedOption === option ? "1px solid #E48542" : "1px solid transparent",
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3 mb-4">
              {days.map((day, i) => (
                <button
                  key={day}
                  onClick={() => {
                    setSelectedDay(i);
                    setSelectedOption("Mini Thali");
                    setQuantity(1);
                  }}
                  className="px-4 py-1.5 rounded-full font-semibold text-sm transition"
                  style={{
                    backgroundColor: i === selectedDay ? "#EDD9CD" : "#F0EFF2",
                    color: i === selectedDay ? "#E48542" : "#000000",
                    border: i === selectedDay ? "1px solid #E48542" : "1px solid transparent",
                  }}
                >
                  {day}
                </button>
              ))}
            </div>



            <MenuCard
              day={currentDay}
              date={new Date().toLocaleDateString()}
              type={selectedOption}
              items={selectedItems}
              image={selectedImage}
              quantity={quantity}
              price={selectedPrice}
              onIncrease={() => changeQuantity(1)}
              onDecrease={() => changeQuantity(-1)}
              onAddToCart={handleAddToCart}
            />
          </section>

          <aside className="w-full lg:w-96 bg-white rounded-xl p-6 shadow-md border border-[#EDD9CD] flex flex-col overflow-auto">
            <h3 className="text-xl font-bold text-[#E48542] mb-4">My Order</h3>

            {Object.keys(cart).length === 0 ? (
              <p className="text-gray-600">Cart is empty</p>
            ) : (
              <>
                <div className="border border-dashed rounded-md p-3 mb-6 overflow-y-auto max-h-65 hide-scrollbar">
                  {Object.entries(cart).map(([key, { day, option, qty, price }]) => (
                    <CartCard
                      key={key}
                      day={day}
                      type={option}
                      image={thaliImages[option]}
                      quantity={qty}
                      price={price}
                      onIncrease={() => updateCartQuantity(key, 1)}
                      onDecrease={() => updateCartQuantity(key, -1)}
                      onRemove={() => {
    setCart((prev) => {
      const { [key]: _, ...rest } = prev;
      return rest;
    });
  }}
                    />
                  ))}
                </div>

                <div className="text-sm text-gray-700 mb-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (5%)</span>
                    <span className="font-semibold">${tax.toFixed(2)}</span>
                  </div>
                </div>
                <div className="flex justify-between font-bold text-[#E48542] text-lg mb-6 border-t border-[#EDD9CD] pt-2">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                <button
                  className="py-2 rounded-full font-semibold transition"
                  style={{
                    backgroundColor: "#E48542",
                    color: "#FFFFFF",
                  }}
                >
                  Place Order
                </button>
              </>
            )}
          </aside>
        </main>
      </div>
    </div>
  );
};

export default Menu;
