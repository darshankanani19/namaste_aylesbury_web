export default function EditProfile() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <form className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
        <input type="text" placeholder="Full Name" className="w-full border p-2 rounded mb-3"/>
        <input type="email" placeholder="Email" className="w-full border p-2 rounded mb-3"/>
        <input type="tel" placeholder="Phone" className="w-full border p-2 rounded mb-3"/>
        <button className="bg-orange-400 text-white px-4 py-2 rounded-lg">Save</button>
      </form>
    </div>
  );
}
