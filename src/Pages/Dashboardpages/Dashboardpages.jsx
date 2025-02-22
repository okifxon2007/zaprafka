import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboardpagesyoqilgi from "../../Components/Dashboardpagesbenzin/Dashboardpagesyoqilgi";
import Dashboardpagesprixod from "../../Components/Dashboardpagesprixod/Dashboardpagesprixod";
import Dashboardpagesfoyda from "../../Components/Dashboardpagesfoyda/Dashboardpagesfoyda";
import Dashboardpagesrasxod from "../../Components/Dashboardpagesrasxod/Dashboardpagesrasxod";
import Dashboardpageskamomat from "../../Components/Dashboardpageskamomat/Dashboardpageskamomat";
import Dashboardpagesnasiya from "../../Components/Dashboardpagesnasiya/Dashboardpagesnasiya";
import Dashboardpagesklient from "../../Components/Dashboardpagesklient/Dashboardpagesklient";

const Dashboardpages = () => {
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState(null);

  const data = [
    { name: "Yoqligi", value: "", icon: "\u26FD" },
    { name: "Prixod", value: "1,121.0", icon: "\ud83d\udcb3" },
    { name: "Foyda", value: "9,332,400.0", icon: "\ud83d\udcb8" },
    { name: "Rasxod", value: "126,456.0", icon: "\ud83d\udcb5" },
    { name: "Kamomat", value: "", icon: "\ud83d\udcc2" },
    { name: "Nasiya", value: "", icon: "\ud83d\udcc3" },
    { name: "Klientlar", value: "3.0", icon: "\ud83d\udc64" },
    { name: "Astatka", value: "1,121.0", icon: "\u27A1" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
    

    <div className="flex justify-between">
    <button
        onClick={() => navigate("/dashboard")}
        className="bg-green-700 text-white px-4 py-2 rounded-lg mb-4"
      >
        Dashboard
      </button>


      <h1 className="text-2xl font-bold text-center ">Med Kallej</h1>
      
      <button
        className="bg-green-700 text-white px-4 py-2 rounded-lg mb-4"
      >
        +Benzin
      </button>
    </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {data.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedCard(index)}
            className={`p-4 border rounded-lg shadow-lg flex items-center justify-between cursor-pointer transition-all duration-300 ${
              selectedCard === index ? "bg-green-500 text-white" : "bg-white"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <div className="text-center">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-600">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-white p-4 rounded-lg shadow-lg overflow-x-auto">
        <Dashboardpagesklient></Dashboardpagesklient>
       
      </div>
    </div>
  );
};

export default Dashboardpages;
