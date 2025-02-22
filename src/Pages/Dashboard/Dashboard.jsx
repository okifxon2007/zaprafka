import React from "react";
import { useNavigate } from "react-router-dom";
import Dashboardcharts from "../../Components/Dashboardcharts/Dashboardcharts";
const Dashboard = () => {
  const nav = useNavigate();

  function ondashpage() {
    nav('/dashboardpages');
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex flex-wrap justify-between items-center bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center space-x-2">
          <div className="bg-green-500 text-white p-2 rounded-full flex items-center justify-center w-10 h-10">
            <span className="text-xl font-bold">₽</span>
          </div>
          <button className="text-green-600 font-semibold text-lg" onClick={() => document.getElementById('my_modal_3').showModal()}>Filial +</button>
        </div>

        <dialog id="my_modal_3" className="modal">
          <div className="modal-box p-6 bg-white rounded-lg shadow-lg">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>

            <h2 className="text-lg font-semibold mb-4">Yangi Filial Qo‘shish</h2>

            <input type="text" placeholder="Nomi" className="w-full border p-2 rounded mb-3 focus:outline-blue-500" />
            <input type="text" placeholder="Joylashuv" className="w-full border p-2 rounded mb-3 focus:outline-blue-500" />
            <input type="text" placeholder="Menedjer" className="w-full border p-2 rounded mb-3 focus:outline-blue-500" />
            <input type="tel" placeholder="Telefon raqam" className="w-full border p-2 rounded mb-3 focus:outline-blue-500" />

            <button className="w-full bg-blue-600 text-white p-2 rounded mt-3 hover:bg-blue-700 transition">Saqlash</button>
          </div>
        </dialog>

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
          onClick={ondashpage}
          className="bg-white p-4 flex justify-between items-center rounded-lg shadow-md border cursor-pointer"
        >
          <span className="font-semibold text-gray-700">filial</span>
          <button
            className="text-gray-600 text-xl w-[50px]"
            onClick={(e) => {
              e.stopPropagation(); 
              document.getElementById('my_modal_2').showModal();
            }}
          >
            ⋮
          </button>
        </div>

        <dialog id="my_modal_2" className="modal">
  <div className="modal-box relative flex flex-col items-center text-center">
    <form method="dialog">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>

    <div className="text-4xl mb-2">ℹ️</div>
    <h1 className="font-bold text-2xl">Information</h1>
    <p className="py-4 text-gray-600">Do you want to edit or delete this item?</p>

    <div className="flex justify-center gap-4 mt-4">
      <button
        className="btn btn-primary flex items-center gap-2"
        onClick={() => document.getElementById('edit_form').classList.toggle('hidden')}
      >
        ✏️ Edit
      </button>
      <button className="btn btn-error flex items-center gap-2">🗑️ Delete</button>
    </div>

   
    <div id="edit_form" className="hidden w-full mt-4">
      <input type="text" placeholder="Nomi" className="w-full border p-2 rounded mb-3 focus:outline-blue-500" />
      <input type="text" placeholder="Joylashuv" className="w-full border p-2 rounded mb-3 focus:outline-blue-500" />
      <input type="text" placeholder="Menedjer" className="w-full border p-2 rounded mb-3 focus:outline-blue-500" />
      <input type="tel" placeholder="Telefon raqam" className="w-full border p-2 rounded mb-3 focus:outline-blue-500" />

      <button className="w-full bg-blue-600 text-white p-2 rounded mt-3 hover:bg-blue-700 transition">
        Saqlash
      </button>
    </div>
  </div>
</dialog>




      </div>
     <div className="mt-10">
     <Dashboardcharts></Dashboardcharts>
     </div>
    </div>
  );
};

export default Dashboard;
