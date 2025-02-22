import React, { useState } from "react";

const Buyurtmatarix = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      
      <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-lg">
        <h1 className="text-xl font-bold tracking-wide">My CRM</h1>
        <button
          className="md:hidden block text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-6 absolute md:relative top-16 left-0 md:top-0 md:left-auto w-full md:w-auto bg-gray-800 md:bg-transparent text-center md:text-left transition-all duration-300 ease-in-out`}
        >
          <a
          onClick={()=>document.getElementById('my_modal_3').showModal()}
            href="#"
            className="block py-3 md:inline-block px-4 hover:bg-gray-700 rounded-md transition duration-300"
          >
            Shohruhmirzo ⌄
          </a>
          <a
            href="#"
            className="block py-3 md:inline-block px-4 hover:bg-gray-700 rounded-md transition duration-300"
          >
            0 UZS
          </a>
          <a
            href="#"
            className="block py-3 md:inline-block px-4 hover:bg-gray-700 rounded-md transition duration-300"
          >
            Buyurtmalar tarixi
          </a>
        </div>
      </nav>

      
      <div className="flex items-center justify-center mt-4">
        <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-xl text-center">
          <h2 className="text-2xl font-extrabold text-gray-800">
            Buyurtmalar tarixi
          </h2>
          
        </div>

        <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg text-center mb-4">Edit Profile</h3>
    
    <div className="space-y-3">
      <label className="block text-sm font-medium">Username</label>
      <input type="text" className="input input-bordered w-full" />
      
      <label className="block text-sm font-medium">First Name</label>
      <input type="text" className="input input-bordered w-full" />
      
      <label className="block text-sm font-medium">Last Name</label>
      <input type="text" className="input input-bordered w-full" />
      
      <label className="block text-sm font-medium">Email</label>
      <input type="email" className="input input-bordered w-full"/>
    </div>

    <div className="mt-4 flex justify-between items-center">
      <button className="btn btn-primary w-full">Save Changes</button>
    </div>

    <div className="mt-3 text-center">
      <button className="btn btn-link text-red-500">🚪 Logout</button>
    </div>
  </div>
</dialog>



      </div>
    </div>
  );
};

export default Buyurtmatarix;
