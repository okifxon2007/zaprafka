import React, { useState } from "react";

const Operatorhome = () => {
  const [prices, setPrices] = useState({ "AI-80": 8400.0, "AI-90": 10000.0 });
  const [data, setData] = useState({
    "AI-80": { start: 0, end: 0, daily: 0, kassa: 0 },
    "AI-90": { start: 0, end: 0, daily: 0, kassa: 0 },
  });

  const [payments, setPayments] = useState({ Uzcard: 0, Humo: 0, Naqd: 0 });
  
  const calculateData = (fuel, newStart, newEnd) => {
    const price = prices[fuel];
    let daily = Math.max(newEnd - newStart, 0);
    
    if (newEnd === 0 && newStart > 0) {
      daily = -(newStart);
    }
    
    const kassa = daily * price;
    return { daily, kassa };
  };
  
  const handleChange = (fuel, key, value) => {
    const newValue = parseFloat(value) || 0;
    const newData = { ...data, [fuel]: { ...data[fuel], [key]: newValue } };
    newData[fuel] = {
      ...newData[fuel],
      ...calculateData(fuel, newData[fuel].start, newData[fuel].end),
    };
    setData(newData);
  };

  const handlePriceChange = (fuel, value) => {
    const newPrice = parseFloat(value) || 0;
    setPrices((prevPrices) => ({ ...prevPrices, [fuel]: newPrice }));
    setData((prevData) => ({
      ...prevData,
      [fuel]: {
        ...prevData[fuel],
        ...calculateData(fuel, prevData[fuel].start, prevData[fuel].end),
      },
    }));
  };

  const totalKassa = Object.values(data).reduce((acc, fuel) => acc + fuel.kassa, 0);
  const totalPayments = Object.values(payments).reduce((acc, val) => acc + val, 0);
  const difference = totalKassa - totalPayments;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6">
      <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md">
  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition" onClick={()=>document.getElementById('my_modal_2').showModal()}>
    +Bank
  </button>
  <h2 className="text-2xl font-bold text-center text-gray-800">Operator</h2>
  <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition" onClick={()=>document.getElementById('my_modal_3').showModal()}>
    +Rasxod
  </button>
</div>





<dialog id="my_modal_2" className="modal">
  <div className="modal-box bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
    <h3 className="font-bold text-xl text-center text-gray-800 mb-4">Add Bank</h3>

    <div className="space-y-3">
      <input
        type="text"
        placeholder="Name"
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="number"
        placeholder="Summa"
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <textarea
        placeholder="Description"
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      ></textarea>
      
      <button className="w-full bg-green-500 text-white py-3 rounded-lg shadow-md hover:bg-green-600 transition">
        Add Bank
      </button>
    </div>
  </div>

  <form method="dialog" className="modal-backdrop">
    <button className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition">
      ✕
    </button>
  </form>
</dialog>









<dialog id="my_modal_3" className="modal">
  <div className="modal-box bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
    <form method="dialog">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-red-500 hover:bg-red-100">
        ✕
      </button>
    </form>

    <h1 className="font-bold text-xl text-center text-gray-800 mb-4">Add Expense</h1>

    <div className="space-y-3">
      <input
        type="text"
        placeholder="Name"
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="number"
        placeholder="Summa"
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <textarea
        placeholder="Description"
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      ></textarea>
      
      <button className="w-full bg-red-500 text-white py-3 rounded-lg shadow-md hover:bg-red-600 transition">
        Add Expense
      </button>
    </div>
  </div>
</dialog>






        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {Object.keys(data).map((fuel) => (
            <div key={fuel} className="border p-4 rounded-lg shadow-sm bg-gray-50">
              <h3 className="text-xl font-bold text-blue-600 text-center mb-4">{fuel}</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium">Narx (so'm)</label>
                  <input
                    type="number"
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
                    value={prices[fuel]}
                    onChange={(e) => handlePriceChange(fuel, e.target.value)}
                  />
                </div>




                {["start", "end"].map((field) => (
                  <div key={field}>
                    <label className="block text-sm font-medium">
                      {field === "start" ? "Kun Boshi" : "Kun Oxiri"}
                    </label>
                    <input
                      type="number"
                      className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
                      value={data[fuel][field]}
                      onChange={(e) => handleChange(fuel, field, e.target.value)}
                    />
                  </div>
                ))}






                <div>
                  <label className="block text-sm font-medium">Kunlik</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md bg-gray-200"
                    readOnly
                    value={data[fuel].daily.toFixed(2)}
                  />
                </div>





                <div>
                  <label className="block text-sm font-medium">Kassa</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md bg-gray-200"
                    readOnly
                    value={data[fuel].kassa.toFixed(2)}
                  />
                </div>
              </div>
            </div>
          ))}




        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 p-4 bg-gray-50 rounded-lg shadow-sm">
          {Object.keys(payments).map((pay) => (
            <div key={pay}>
              <label className="block text-sm font-medium">{pay}:</label>
              <input
                type="number"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
                value={payments[pay]}
                onChange={(e) =>
                  setPayments({ ...payments, [pay]: parseFloat(e.target.value) || 0 })
                }
              />
            </div>
          ))}
        </div>



        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <label className="block text-sm font-medium">Total Kassa:</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md bg-gray-200"
              readOnly
              value={totalKassa.toFixed(2)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Farq:</label>
            <input
              type="text"
              className={`w-full p-2 border rounded-md ${
                difference < 0 ? "bg-red-300" : difference > 0 ? "bg-green-300" : "bg-gray-200"
              }`}
              readOnly
              value={difference.toFixed(2)}
            />
           <div className="flex justify-center">
  <button
    type="submit"
    className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300 mt-6 ml-16"
  >
    Submit
  </button>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Operatorhome;
