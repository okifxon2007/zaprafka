import React from "react";

const Dashboardpagesprixod = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <h1>Prixod</h1>
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="py-3 px-4 text-left">YOGILGI</th>
              <th className="py-3 px-4 text-left">MIQDOR</th>
              <th className="py-3 px-4 text-left">NARX</th>
              <th className="py-3 px-4 text-left">SUMMA</th>
              <th className="py-3 px-4 text-left">VAQTI</th>
              <th className="py-3 px-4 text-left">MASHINA</th>
              <th className="py-3 px-4 text-center">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "AI-80", quantity: 1, price: 8400, total: 0, time: "Feb. 20, 2025, 8:43 p.m.", car: "7777777" },
              { name: "AI-80", quantity: 1000, price: 8400, total: 7200, time: "Feb. 20, 2025, 5:43 p.m.", car: "000" },
              { name: "AI-90", quantity: 1000, price: 10000, total: 9000, time: "Feb. 21, 2025, 6:16 p.m.", car: "000" },
            ].map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-100 transition"
              >
                <td className="py-3 px-4">{item.name}</td>
                <td className="py-3 px-4">{item.quantity.toLocaleString("uz-UZ")}</td>
                <td className="py-3 px-4">{item.price.toLocaleString("uz-UZ")}</td>
                <td className="py-3 px-4">{item.total.toLocaleString("uz-UZ")}</td>
                <td className="py-3 px-4">{item.time}</td>
                <td className="py-3 px-4">{item.car}</td>
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

export default Dashboardpagesprixod;