const CompanyInfo = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm md:col-span-2 flex flex-col md:flex-row gap-8 items-center">
  {/* Logo on Left (1/3 width) */}
  <div className="w-full md:w-1/3 flex justify-center md:justify-center items-center">
    <img
      src="src/assets/logo.png"
      alt="Namaste Aylesbury Logo"
      className="w-64 h-64 object-contain"
    />
  </div>

  {/* Text Content (2/3 width) */}
  <div className="w-full md:w-2/3 text-gray-800 space-y-4 text-justify">
    <p>
      <strong>Namaste Aylesbury</strong> is a dedicated vegetarian meal delivery service,
      bringing freshly made delicious meals directly to offices across Aylesbury and
      surrounding areas. Designed for busy professionals who value health,
      sustainability, and convenience, Namaste Aylesbury offers a rotating menu of
      prepared meals.
    </p>
    <p>
      Our meals are crafted each morning and delivered just in time for lunch, ensuring
      maximum freshness and flavor. Whether you're looking for a light salad, a hearty
      grain bowl, or a global vegetarian dish with a twist, Namaste Aylesbury delivers
      satisfying options that fuel your day — without compromising your values.
    </p>
    <p>
      We cater exclusively to workplaces, making it easy for Aylesbury businesses to
      support employee wellness and sustainability. With flexible delivery schedules and
      no prep required, eating well at work has never been easier.
    </p>
    <p>
      <strong>Healthy. Fresh. Meals. Delivered to your desk !!</strong>
    </p>
  </div>
</div>
  );
};

export default CompanyInfo;
