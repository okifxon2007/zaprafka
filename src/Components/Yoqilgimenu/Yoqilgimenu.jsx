
import React, { useState } from "react";

const Yoqilgimenu = ({ onClose }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [branch, setBranch] = useState("");

  const handleSave = () => {
    console.log("Yoqilg'i qo‘shildi:", { name, price, branch });
    onClose(); 
  };

  return (
    <div className="fixed right-0 top-0 h-full bg-white shadow-lg w-80 p-6 transition-transform transform translate-x-0">
      <div className="flex justify-between items-center border-b pb-2 mb-4">
        <h2 className="text-xl font-bold">Yoqilg‘i qo‘shish</h2>
        <button className="text-red-500 text-2xl" onClick={onClose}>✖</button>
      </div>


      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">Filial:</label>
        <select
          className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
        >
          <option value="" disabled>Filial tanlang</option>
          <option value="Toshkent">Toshkent</option>
          <option value="Samarqand">Samarqand</option>
          <option value="Buxoro">Buxoro</option>
        </select>
      </div>

      
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">Nom:</label>
        <input
          type="text"
          className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Yoqilg‘i nomini kiriting..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>


      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">Sotuv summasi:</label>
        <input
          type="number"
          className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Summani kiriting..."
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

s
      <button
        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-all"
        onClick={handleSave}
      >
        Saqlash
      </button>
    </div>
  );
};

export default Yoqilgimenu;
