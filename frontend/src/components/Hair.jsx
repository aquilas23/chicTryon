import React from "react";
import Braids from "../data/braidData";

const Hair = ({ selected, onSelect }) => {
  const handleSelect = (index) => {
    onSelect(Braids[index].name); // Send name string to parent
  };

  return (
    <div className="mt-6">
      <div className="grid grid-cols-3 place-items-center gap-6">
        {Braids.map((val, ind) => (
          <button
            key={ind}
            onClick={() => handleSelect(ind)}
            className={`w-[11rem] rounded-lg py-2 px-10 text-xs font-semibold font-homeHeading transition-all duration-300
              ${
                selected === val.name
                  ? "bg-gradient-to-r from-orange-500 to-orange-700 text-white scale-105 shadow-lg"
                  : "bg-orange-400 text-gray-800 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-700"
              }`}
          >
            {val.name}
          </button>
        ))}
      </div>

      <p className="mt-5 text-sm text-gray-300 text-center">
        Selected: <span className="text-white font-semibold">{selected}</span>
      </p>
    </div>
  );
};

export default Hair;
