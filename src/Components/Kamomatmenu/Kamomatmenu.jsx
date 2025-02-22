import React from "react";

const Kamomatmenu = ({ onClose }) => {
  return (
    <div className="fixed right-0 top-0 h-full bg-white shadow-lg w-80 p-6 transition-transform transform translate-x-0">
      <div className="flex justify-between items-center border-b pb-2 mb-4">
        <h2 className="text-xl font-bold">Kamomat qo‘shish</h2>
        <button className="text-red-500 text-2xl" onClick={onClose}>✖</button>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">Filial:</label>
        <select className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="" disabled>Filial tanlang</option>
          <option value="Toshkent">Toshkent</option>
          <option value="Samarqand">Samarqand</option>
          <option value="Buxoro">Buxoro</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">Benzin:</label>
        <select className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="" disabled>Benzin tanlang</option>
          <option value="AI-92">AI-92</option>
          <option value="AI-95">AI-95</option>
          <option value="DT">DT</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">Miqdor (litr):</label>
        <input type="number" className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Miqdor kiriting..." />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">Sabab:</label>
        <textarea className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Sababni yozing..." rows="3"></textarea>
      </div>

      <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all">
        Saqlash
      </button>
    </div>
  );
};

export default Kamomatmenu;
