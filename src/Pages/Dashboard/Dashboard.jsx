import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex flex-wrap justify-between items-center bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center space-x-2">
          <div className="bg-green-500 text-white p-2 rounded-full flex items-center justify-center w-10 h-10">
            <span className="text-xl font-bold">₽</span>
          </div>
          <button className="text-green-600 font-semibold text-lg">Filial +</button>
        </div>

        
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>

        
        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-md border">
            <span className="text-green-600 font-semibold text-lg">Astatika</span>
            <span className="ml-2 text-gray-500 font-medium">17,003.0</span>
          </div>

          <div className="flex items-center bg-yellow-400 px-4 py-2 rounded-lg shadow-md">
            <span className="text-white font-semibold text-lg">Kassa</span>
            <span className="ml-2 text-white font-medium">0</span>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div
            className="bg-white p-4 flex justify-between items-center rounded-lg shadow-md border"
          >
            <span className="font-semibold text-gray-700">filial</span>
            <button className="text-gray-600 text-xl">⋮</button>
          </div>

      </div>
    </div>
  );
};

export default Dashboard;
