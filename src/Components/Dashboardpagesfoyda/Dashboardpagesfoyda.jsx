import React from "react";

const Dashboardpagesfoyda = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <h1>Foyda</h1>
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="py-3 px-4 text-left">YOGILGI</th>
              <th className="py-3 px-4 text-left">MIQDOR</th>
              <th className="py-3 px-4 text-left">TAN NARXI</th>
              <th className="py-3 px-4 text-left">SOTUV SUMMASI</th>
              <th className="py-3 px-4 text-left">FOYDA</th>
              <th className="py-3 px-4 text-left">VAQTI</th>
              <th className="py-3 px-4 text-center">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "AI-90", quantity: 1000, cost: 9000, sale: 10000, profit: 1000000, time: "Feb. 21, 2025, 6:16 p.m." },
              { name: "AI-80", quantity: 1, cost: 0, sale: 8400, profit: 8400, time: "Feb. 20, 2025, 8:43 p.m." },
              { name: "AI-80", quantity: 1000, cost: 7200, sale: 8400, profit: 1200000, time: "Feb. 20, 2025, 5:43 p.m." },
            ].map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-100 transition"
              >
                <td className="py-3 px-4">{item.name}</td>
                <td className="py-3 px-4">{item.quantity.toLocaleString("uz-UZ")} litr</td>
                <td className="py-3 px-4">{item.cost.toLocaleString("uz-UZ")} so'm</td>
                <td className="py-3 px-4">{item.sale.toLocaleString("uz-UZ")} so'm</td>
                <td className="py-3 px-4">{item.profit.toLocaleString("uz-UZ")} so'm</td>
                <td className="py-3 px-4">{item.time}</td>
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

export default Dashboardpagesfoyda;
