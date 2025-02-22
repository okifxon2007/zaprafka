import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboardpagesklient from "../../Components/Dashboardpagesklient/Dashboardpagesklient";
import Yoqilgimenu from "../../Components/Yoqilgimenu/Yoqilgimenu";
import Rasxodmenu from "../../Components/Rasxodmenu/Rasxodmenu";
import Kamomatmenu from "../../Components/Kamomatmenu/Kamomatmenu";
import Nasiyamenu from "../../Components/Nasiyamenu/Nasiyamenu";
import Klientmenu from "../../Components/Klientlarmenu/Klientmenu";

const Dashboardpages = () => {
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [buttonTitle, setButtonTitle] = useState("+Benzin"); 

  const data = [
    { name: "Yoqligi", value: "", icon: "⛽" },
    { name: "Prixod", value: "1,121.0", icon: "💳" },
    { name: "Foyda", value: "9,332,400.0", icon: "💸" },
    { name: "Rasxod", value: "126,456.0", icon: "💵" },
    { name: "Kamomat", value: "", icon: "📂" },
    { name: "Nasiya", value: "", icon: "📃" },
    { name: "Klientlar", value: "3.0", icon: "👤" },
    { name: "Astatka", value: "1,121.0", icon: "➡️" },
  ];


  const handleCardClick = (name) => {
    setButtonTitle(name);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 relative">
      <div className="flex justify-between items-center">
        <button onClick={() => navigate("/dashboard")} className="bg-green-700 text-white px-4 py-2 rounded-lg">
          Dashboard
        </button>
        <h1 className="text-2xl font-bold">Med Kallej</h1>
        <button onClick={toggleMenu} className="bg-green-700 text-white px-4 py-2 rounded-lg">
          {buttonTitle}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {data.map((item, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(item.name)}
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
        <Dashboardpagesklient />
      </div>


      {menuOpen && (
        <div className="fixed right-0 top-0 h-full bg-white shadow-lg w-64 p-4 transition-transform transform translate-x-0">
          <Klientmenu title={buttonTitle} onClose={toggleMenu} />
        </div>
      )}
    </div>
  );
};

export default Dashboardpages;
