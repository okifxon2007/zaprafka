import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Yanvar", uv: 4000 },
  { name: "Fevral", uv: 3000 },
  { name: "Mart", uv: 5000 },
  { name: "Aprel", uv: 7000 },
  { name: "May", uv: 6000 },
];

const Dashboardcharts = () => {
  return (
    <div className="w-full h-80 flex justify-center items-center bg-white shadow-lg p-4 rounded-lg">
      <ResponsiveContainer width="90%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" fill="#4F46E5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Dashboardcharts;
