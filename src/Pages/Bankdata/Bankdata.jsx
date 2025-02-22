import React from 'react';

const Bankdata = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Enter Bank Data
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Bank Name
            </label>
            <input
              type="text"
              placeholder="Enter Bank Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Quantity
            </label>
            <input
              type="number"
              defaultValue="1"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Description
            </label>
            <textarea
              placeholder="Enter Description"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            ></textarea>
          </div>

          <button className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-md hover:bg-blue-600 transition">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Bankdata;
