import { useNavigate } from "react-router-dom";
import bgImage from "../assets/hero-image.png";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] rounded-xl overflow-hidden flex items-center justify-start px-4 sm:px-6 md:px-12">
      {/* Background Image with Blur */}
      <div
        className="absolute inset-0 bg-center bg-cover filter blur-sm scale-105"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Yellow Overlay */}
      <div className="absolute inset-0 bg-opacity-50"></div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-xl text-left">
        <button className="bg-white text-yellow-500 px-3 py-1 rounded-lg font-semibold mb-4 text-sm sm:text-base">
          Meal Magic
        </button>

        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 leading-snug sm:leading-tight">
          Freshly made delicious meals... Delivered!
        </h1>

        <p className="text-sm sm:text-base text-white mb-6 max-w-md">
          Savor the goodness of wholesome, delicious meals crafted with care and passion,
          delivered fresh and right to your doorstep every single day.
        </p>

        <button
          onClick={() => navigate("/menu")}
          className="bg-white text-yellow-500 px-4 py-2 rounded-lg font-semibold text-sm sm:text-base hover:bg-yellow-100 transition"
        >
          Explore Menu →
        </button>
      </div>
    </section>
  );
}
