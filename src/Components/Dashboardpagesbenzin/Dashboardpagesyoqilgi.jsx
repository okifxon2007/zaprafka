import React from "react";

const Dashboardpagesyoqilgi = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <h1>Yoqilg'i</h1>
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="py-3 px-4 text-left">NOMI</th>
              <th className="py-3 px-4 text-left">NARXI</th>
              <th className="py-3 px-4 text-center">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {[{ name: "AI-80", price: 8400 }, { name: "AI-90", price: 10000 }].map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-100 transition"
              >
                <td className="py-3 px-4">{item.name}</td>
                <td className="py-3 px-4">{item.price.toLocaleString("uz-UZ")}</td>
                <td className="py-3 px-4 text-center flex justify-center gap-2">
                  <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition">
                    ✏️
                  </button>
                  <button className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition">
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboardpagesyoqilgi;
