import React from "react";

const Nasiyamenu = ({ onClose }) => {
  return (
    <div className="fixed right-0 top-0 h-full bg-white shadow-lg w-80 p-6 transition-transform transform translate-x-0">
      <div className="flex justify-between items-center border-b pb-2 mb-4">
        <h2 className="text-xl font-bold">Nasiya qo‘shish</h2>
        <button className="text-red-500 text-2xl" onClick={onClose}>✖</button>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">Nasiya nomi:</label>
        <input type="text" className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Nasiya nomini kiriting..." />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">Miqdori:</label>
        <input type="number" className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="0.0" />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">Izoh:</label>
        <textarea className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Izoh yozing..." rows="3"></textarea>
      </div>

      <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all">
        Saqlash
      </button>
    </div>
  );
};

export default Nasiyamenu;
