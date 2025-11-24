import React, { useState } from "react";

const Length = ({ onSelect }) => {
  // ✅ Added "None" as first option
  const lengths = ["None", "Short", "Medium", "Long"];

  // ✅ Default = None (index 0)
  const [value, setValue] = useState(0);

  const handleChange = (index) => {
    setValue(index);

    // ✅ Send value to parent (Studio.jsx)
    onSelect && onSelect(index === 0 ? "None" : lengths[index]);
  };

  return (
    <div className="text-white mt-6 flex flex-col items-center">
      <p className="text-lg font-semibold mb-4">Select Hair Length</p>

      {/* ✅ Slider */}
      <div className="w-full max-w-md px-4">
        <input
          type="range"
          min="0"
          max="3"
          step="1"
          value={value}
          onChange={(e) => handleChange(Number(e.target.value))}
          className="w-full accent-orange-500 h-2"
        />

        {/* ✅ Labels under slider */}
        <div className="flex justify-between text-xs mt-2">
          {lengths.map((len, index) => (
            <span
              key={index}
              className={`${
                value === index
                  ? "text-orange-400 font-semibold"
                  : "text-gray-500"
              }`}
            >
              {len}
            </span>
          ))}
        </div>
      </div>

      {/* ✅ Selected Text */}
      <p className="mt-4 text-sm text-gray-300">
        Selected:{" "}
        <span className="font-semibold text-white">{lengths[value]}</span>
      </p>
    </div>
  );
};

export default Length;
