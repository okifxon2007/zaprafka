import React from "react";

const Hisobot = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-xl font-bold text-blue-600 text-center mb-4">
        Kundalik Hisobot
      </h2>
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="py-3 px-4 text-left">Sana</th>
              <th className="py-3 px-4 text-left">Filial</th>
              <th className="py-3 px-4 text-left">Operator</th>
              <th className="py-3 px-4 text-left">Benzin</th>
              <th className="py-3 px-4 text-left">Kun Boshi</th>
              <th className="py-3 px-4 text-left">Kun Oxiri</th>
              <th className="py-3 px-4 text-left">Kassa</th>
              <th className="py-3 px-4 text-left">Xarajat</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 text-center">
              <td className="py-3 px-4">2025-02-21</td>
              <td className="py-3 px-4">Toshkent</td>
              <td className="py-3 px-4">Aliyev Jasur</td>
              <td className="py-3 px-4">AI-95</td>
              <td className="py-3 px-4">5000L</td>
              <td className="py-3 px-4">3000L</td>
              <td className="py-3 px-4">15,000,000 UZS</td>
              <td className="py-3 px-4">2,000,000 UZS</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Hisobot;
