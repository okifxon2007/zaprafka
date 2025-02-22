import React from "react";

const Operatorhome = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6">

        <div className="flex justify-between items-center bg-teal-600 text-white p-4 rounded-t-lg">
          <button className="bg-white text-teal-600 px-4 py-2 rounded shadow hover:bg-gray-100" onClick={()=>document.getElementById('my_modal_3').showModal()}>
            + Bank
          </button>
          <h2 className="text-2xl font-bold">Operator</h2>
          <button className="bg-white text-teal-600 px-4 py-2 rounded shadow hover:bg-gray-100" onClick={()=>document.getElementById('my_modal_4').showModal()}>
            + Raxod
          </button>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {["AI-80", "AI-90"].map((fuel) => (
            <div key={fuel} className="border p-4 rounded-lg shadow-sm bg-gray-50">
              <h3 className="text-xl font-bold text-blue-600 text-center mb-4">
                {fuel}
              </h3>
              <div className="space-y-3">
                {["Narx", "Kun Boshi", "Kun Oxiri", "Kunlik", "Kassa"].map(
                  (field) => (
                    <div key={field}>
                      <label className="block text-sm font-medium">{field}</label>
                      <input
                        type="text"
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        defaultValue={field === "Narx" ? (fuel === "AI-80" ? "8400.0" : "10000.0") : "0.0"}
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 p-4 bg-gray-50 rounded-lg shadow-sm">
          {["Uzcard", "Humo", "Naqd"].map((pay) => (
            <div key={pay}>
              <label className="block text-sm font-medium">{pay}:</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                defaultValue="0"
              />
            </div>
          ))}
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {["Total Kassa", "Difference"].map((summary) => (
            <div key={summary}>
              <label className="block text-sm font-medium">{summary}:</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                defaultValue="0.00"
              />
            </div>
          ))}
        </div>

        
        <div className="mt-6">
          <button className="w-full bg-teal-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-teal-700 transition">
            Submit
          </button>
        </div>
      </div>

     <dialog id="my_modal_3" className="modal">
  <div className="modal-box p-6 shadow-lg rounded-lg">

    <form method="dialog">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
        ✕
      </button>
    </form>


    <h3 className="font-bold text-lg text-center text-blue-600">Add Bank</h3>


    <form className="mt-4">
      
      <div className="mb-4">
        <label className="block text-sm font-medium">Name:</label>
        <input
          type="text"
          placeholder="Enter name"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Quantity:</label>
        <input
          type="number"
          placeholder="Enter quantity"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>


      <div className="mb-4">
        <label className="block text-sm font-medium">Description:</label>
        <textarea
          placeholder="Enter description"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows="3"
        ></textarea>
      </div>

      
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
      >
        Add Bank
      </button>
    </form>
  </div>
</dialog>


<dialog id="my_modal_4" className="modal">
<div className="modal-box p-6 shadow-lg rounded-lg">
<form className="mt-4">
<h3 className="font-bold text-lg text-center text-blue-600">Add expence</h3>
      <div className="mb-4">
        <label className="block text-sm font-medium">Name:</label>
        <input
          type="text"
          placeholder="Enter name"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Amount:</label>
        <input
          type="number"
          placeholder="Enter quantity"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>


      <div className="mb-4">
        <label className="block text-sm font-medium">Description:</label>
        <textarea
          placeholder="Enter description"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows="3"
        ></textarea>
      </div>

      
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
      >
        Add expence
      </button>
    </form>
    </div>
</dialog>
      
    </div>
  );
};

export default Operatorhome;
