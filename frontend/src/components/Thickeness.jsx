import React, { useState } from "react";

const Thickness = ({ onSelect }) => {
  const data = ["None", "Thin", "Medium", "Thick"];

  // ✅ Default selected = "None"
  const [selected, setSelected] = useState(0);

  const handleSelect = (index) => {
    setSelected(index);
    onSelect && onSelect(index === 0 ? "None" : data[index]);
  };

  return (
    <div className="text-white mt-8 flex flex-col items-center">
      <p className="text-xl font-semibold mb-8">Choose Hair Thickness</p>

      <div className="flex gap-3">
        {data.map((item, index) => (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            className={`px-4 py-2 rounded-full text-sm transition-all duration-300
              ${
                selected === index
                  ? "bg-orange-500 text-white scale-105 shadow-lg"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
          >
            {item}
          </button>
        ))}
      </div>

      <p className="mt-5 text-sm text-gray-300">
        Selected:{" "}
        <span className="text-white font-semibold">{data[selected]}</span>
      </p>
    </div>
  );
};

export default Thickness;
