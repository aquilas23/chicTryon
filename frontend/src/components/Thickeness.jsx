import React from "react";

const Thickness = ({ selected, onSelect }) => {
  const data = ["None", "Thin", "Medium", "Thick"];

  const handleSelect = (index) => {
    onSelect(data[index]); // send name to parent
  };

  const currentIndex = data.indexOf(selected); // determine active button index

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
                currentIndex === index
                  ? "bg-orange-500 text-white scale-105 shadow-lg"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
          >
            {item}
          </button>
        ))}
      </div>

      <p className="mt-5 text-sm text-gray-300">
        Selected: <span className="text-white font-semibold">{selected}</span>
      </p>
    </div>
  );
};

export default Thickness;
