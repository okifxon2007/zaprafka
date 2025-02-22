import React from "react";

const CreateOrder = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold text-center text-blue-600 mb-4">
          Create Order
        </h2>

        {/* Foydalanuvchi nomi */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Foydalanuvchi nomi
          </label>
          <select className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option>admin</option>
          </select>
        </div>

        {/* Miqdor */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Miqdor</label>
          <input
            type="number"
            placeholder="Miqdor kiriting"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Benzin turi */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Benzin turi</label>
          <input
            type="text"
            placeholder="Search and select..."
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* To'lov holati */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">To'lov holati</label>
          <select className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option>Pending</option>
          </select>
        </div>

        
        <button className="w-full bg-green-600 text-white py-2 rounded-lg text-lg font-semibold hover:bg-green-700 transition">
          Save Order
        </button>
      </div>
    </div>
  );
};

export default CreateOrder;
