import React from "react";

const lengthOptions = ["None", "Short", "Medium", "Long"];

const Length = ({ selected, onSelect }) => {
  // Convert word to slider index
  const currentIndex = lengthOptions.indexOf(selected);

  const handleSliderChange = (e) => {
    onSelect(lengthOptions[e.target.value]); // convert number to name
  };

  return (
    <div className="mt-6 flex flex-col items-center">
      <p className="text-white font-semibold mb-4">Select Hair Length</p>

      <input
        type="range"
        min="0"
        max="3"
        step="1"
        value={currentIndex}
        onChange={handleSliderChange}
        className="w-3/4 accent-orange-500 cursor-pointer"
      />

      {/* Labels under the slider */}
      <div className="flex justify-between w-3/4 mt-2 text-white text-xs font-semibold">
        {lengthOptions.map((label, index) => (
          <span
            key={index}
            className={`${
              currentIndex === index
                ? "text-orange-500 font-bold"
                : "text-gray-300"
            }`}
          >
            {label}
          </span>
        ))}
      </div>

      {/* Selected Text */}
      <p className="mt-4 text-sm text-gray-300">
        Selected Length:{" "}
        <span className="text-orange-400 font-semibold">{selected}</span>
      </p>
    </div>
  );
};

export default Length;
