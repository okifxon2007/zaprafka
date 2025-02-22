import React from "react";

const Dashboardpagesklient = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <h1>Klient</h1>
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="py-3 px-4 text-left">ISMI</th>
              <th className="py-3 px-4 text-left">EMAIL</th>
              <th className="py-3 px-4 text-left">STATUS</th>
              <th className="py-3 px-4 text-left">BALANCE</th>
              <th className="py-3 px-4 text-center">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "newuse1r", email: "newuser@example.com", status: false, balance: 0 },
              { name: "newuser", email: "newuser@example.com", status: false, balance: 0 },
              { name: "Shohruhmirzo", email: "jamoliddinovshohruh1@mail.com", status: false, balance: 0 },
              { name: "Shohruhmirzo3311", email: "jamoliddinovshohruh1@mail.com", status: true, balance: 0 },
              { name: "UpdatedName", email: "updated@example.com", status: false, balance: 0 },
            ].map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-100 transition"
              >
                <td className="py-3 px-4">{item.name}</td>
                <td className="py-3 px-4">{item.email}</td>
                <td className="py-3 px-4">{item.status.toString()}</td>
                <td className="py-3 px-4">{item.balance}</td>
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

export default Dashboardpagesklient;
