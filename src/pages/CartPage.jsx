import React, { useEffect, useState } from "react";
// import axios from "axios"; // Uncomment when API is ready
import CartCard from "../components/CartCard";
import { useNavigate } from "react-router-dom";
// const API_BASE = "http://localhost:8000"; // Uncomment when using FastAPI

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  // 💾 Dummy product data
  const dummyProducts = [
    {
      id: 1,
      type: "Mini Thali",
      image:
        "src/assets/miniThali.png",
      quantity: 1,
      price: 6,
    },
    {
      id: 2,
      type: "Full Thali",
      image:
        "src/assets/fullThali.png",
      quantity: 1,
      price: 9,
    },

  ];

  useEffect(() => {
    // 🟢 Load dummy data initially
    setCartItems(dummyProducts);

    // 🛑 API fetch disabled for now
    /*
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${API_BASE}/products`);
        const productData = res.data.map((p) => ({
          ...p,
          quantity: 1,
        }));
        setCartItems(productData);
      } catch (err) {
        console.error("Failed to fetch products", err);
      }
    };
    fetchProducts();
    */
  }, []);

  const handleIncrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  const handlePlaceOrder = async () => {
    const orderPayload = {
      items: cartItems.map((item) => ({
        id: item.id,
        quantity: item.quantity,
      })),
      subtotal,
      tax,
      total,
    };

    // 🛑 API call disabled for now
    /*
    try {
      const res = await axios.post(`${API_BASE}/order`, orderPayload);
      alert("✅ Order placed successfully!");
      console.log(res.data);
    } catch (err) {
      console.error("Failed to place order", err);
      alert("❌ Failed to place order.");
    }
    */

    // 🔁 Simulate success for now
    alert("✅ Order placed successfully (simulated)!");
    console.log(orderPayload);
  };
const navigate = useNavigate();

  const handleMakeOrder = () => {
    navigate("/menu");
  };
  return (
    <div className="min-h-screen bg-white px-4 sm:px-10 py-6 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4 text-black">Cart</h2>

      {/* Cart Items */}
      <div className="flex flex-col">
        {cartItems.map((item) => (
          <CartCard
            key={item.id}
            image={item.image}
            type={item.type}
            quantity={item.quantity}
            price={item.price}
            onIncrease={() => handleIncrease(item.id)}
            onDecrease={() => handleDecrease(item.id)}
            onRemove={() => handleRemove(item.id)}
          />
        ))}
      </div>

      {/* Divider */}
      <hr className="my-4 border-dotted border-t border-gray-400" />

      {/* Price Summary */}
      <div className="text-black text-sm sm:text-base">
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Tax (5%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold mt-2 text-lg">
          <span>Total</span>
          <span className="text-green-600">${total.toFixed(2)}</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6">
        {/* Place Order Button */}
        <button
          onClick={handlePlaceOrder}
          className="w-full px-4 py-2 rounded-full font-semibold transition bg-[#E48542] text-white hover:bg-[#d97435]"
        >
          Place Order
        </button>

        {/* Add More Button */}
        <button
        onClick={handleMakeOrder}
      className="w-full px-4 py-2 rounded-full font-semibold transition bg-[#E48542] text-white hover:bg-[#d97435]"
        >
        Add More
      </button>
      </div>

    </div>
  );
};

export default CartPage;
