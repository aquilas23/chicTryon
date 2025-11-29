import React from "react";
import { FaStar, FaRing, FaRibbon } from "react-icons/fa";

const Accessory = ({ selected, onSelect }) => {
  const accessories = [
    {
      name: "None",
      icon: null,
      description: "No accessories applied to the braids.",
    },
    {
      name: "Hair Shells",
      icon: <FaStar size={26} />,
      description: "Shell accents often used in African braid styles.",
    },
    {
      name: "Hair Cuffs",
      icon: <FaRing size={26} />,
      description: "Metallic cuffs for a bold, royal look.",
    },
    {
      name: "Hair Ribbons",
      icon: <FaRibbon size={26} />,
      description: "Colorful ribbons for a playful, expressive finish.",
    },
  ];

  const handleSelect = (index) => {
    onSelect(accessories[index].name); // send name to parent
  };

  const currentIndex = accessories.findIndex((a) => a.name === selected);

  return (
    <div className="text-white mt-6 flex flex-col items-center">
      <p className="text-xl font-semibold mb-6">Choose Accessory</p>

      <p className="text-xs text-gray-400 mb-4 text-center">
        Select an accessory to enhance your braided style.
      </p>

      <div className="flex gap-4">
        {accessories.map((item, index) => (
          <div
            key={index}
            onClick={() => handleSelect(index)}
            className={`cursor-pointer w-32 h-32 rounded-2xl p-4 flex flex-col justify-center items-center text-center border transition-all duration-300
            ${
              currentIndex === index
                ? "bg-orange-500 border-orange-300 scale-105 shadow-lg"
                : "bg-gray-800 border-gray-600 hover:bg-gray-700"
            }`}
          >
            <div className="text-white">{item.icon ? item.icon : "—"}</div>
            <h3 className="mt-2 font-bold text-sm">{item.name}</h3>
          </div>
        ))}
      </div>

      <p className="mt-5 text-sm text-gray-300 max-w-xs text-center">
        Selected: <span className="font-semibold text-white">{selected}</span>
      </p>
    </div>
  );
};

export default Accessory;
