import React, { useState } from "react";

const Prixodmenu = ({ onClose }) => {
  

  const handleSave = () => {
    console.log("Prixod qo‘shildi:", { fuelType, quantity, totalAmount, carNumber, branch });
    onClose(); 
  };

  return (
    <div className="fixed right-0 top-0 h-full bg-white shadow-lg w-80 p-6 transition-transform transform translate-x-0">

      <div className="flex justify-between items-center border-b pb-2 mb-4">
        <h2 className="text-xl font-bold">Prixod qo‘shish</h2>
        <button className="text-red-500 text-2xl" onClick={onClose}>✖</button>
      </div>

 
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">Benzin turi:</label>
        <select
          className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          
        >
          <option value="" disabled>Tanlang</option>
          <option value="AI-92">AI-92</option>
          <option value="AI-95">AI-95</option>
          <option value="Dizel">Dizel</option>
        </select>
      </div>


      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">Miqdori (litr):</label>
        <input
          type="number"
          className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Litr miqdorini kiriting..."
        
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">Umumiy summa:</label>
        <input
          type="number"
          className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Summani kiriting..."
        
        />
      </div>

      {/* Avtomashina raqami */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">Avtomashina raqami:</label>
        <input
          type="text"
          className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Mashina raqamini kiriting..."
        
        />
      </div>

      {/* Filial tanlash */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">Filial:</label>
        <select
          className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="" disabled>Filial tanlang</option>
          <option value="Toshkent">Toshkent</option>
        
        </select>
      </div>


      <button
        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-all"
        onClick={handleSave}
      >
        Saqlash
      </button>
    </div>
  );
};

export default Prixodmenu;
