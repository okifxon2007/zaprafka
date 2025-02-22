import React from "react";

const Kirim = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">

        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
          Kirimni qo‘shish
        </h2>


        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Filial:</label>
          <select className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option>Med Kollej</option>
            <option>Boshqa Filial</option>
          </select>
        </div>


        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Benzin:</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            defaultValue="AI-80"
          />
        </div>


        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Miqdor (litr):</label>
          <input
            type="number"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            defaultValue="1"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Avtomashina raqami:</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Avtomashina raqami"
          />
        </div>


        <button className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
          Saqlash
        </button>
      </div>

      
    </div>
  );
};

export default Kirim;
