import React from "react";

const Klientmenu = ({ onClose }) => {
  return (
    <div className="fixed right-0 top-0 h-full bg-white shadow-lg w-96 p-6 transition-transform transform translate-x-0">
      <div className="flex justify-between items-center border-b pb-2 mb-4">
        <h2 className="text-xl font-bold">Klient qo‘shish</h2>
        <button className="text-red-500 text-2xl" onClick={onClose}>✖</button>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">Password:</label>
        <input type="password" className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">Last login:</label>
        <input type="text" className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>

      <div className="mb-4 flex items-center">
        <input type="checkbox" className="mr-2" />
        <label className="text-gray-700 font-semibold">Superuser status:</label>
      </div>

      

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">Groups:</label>
        <select className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-24" multiple>
          <option>Products | bank | Can add</option>
          <option>Products | bank | Can change</option>
          <option>Products | bank | Can delete</option>
          <option>Products | bank | Can view</option>
          <option>Products | Benzin turi | Can add</option>
        </select>
      </div>

     

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">User permissions:</label>
        <select className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-24" multiple>
          <option>Products | bank | Can add</option>
          <option>Products | bank | Can change</option>
          <option>Products | bank | Can delete</option>
         
        </select>
      </div>

      <p className="text-gray-500 text-sm mb-4">Specific permissions for this user.</p>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">Username:</label>
        <input type="text" className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all">
        Saqlash
      </button>
    </div>
  );
};

export default Klientmenu;
