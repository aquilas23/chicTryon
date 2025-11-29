import React from "react";

const Color = ({ selected, onSelect }) => {
  const colors = [
    {
      name: "Natural Black (1)",
      code: "#0A0A0A",
      description: "Classic deep black for traditional African braids.",
    },
    {
      name: "Off-Black (1B)",
      code: "#2C2C2C",
      description: "Soft black shade, most commonly used in braids.",
    },
    {
      name: "Dark Brown (2)",
      code: "#4B352A",
      description: "Warm natural shade with subtle earthy tones.",
    },
    {
      name: "Burgundy (99J)",
      code: "#6A0F21",
      description: "Rich wine-red shade for a bold fashion look.",
    },
    {
      name: "Honey Blonde (27)",
      code: "#D6A96A",
      description: "Golden highlight shade, perfect for stylish braids.",
    },
    {
      name: "Ombre 1B → 27",
      code: "linear-gradient(to bottom, #2C2C2C, #D6A96A)",
      description: "Modern ombre transition from dark to blonde.",
    },
  ];

  const handleSelect = (index) => {
    onSelect(colors[index].name); // send value to parent
  };

  const currentIndex = colors.findIndex((c) => c.name === selected);

  return (
    <div className="text-white mt-6 flex flex-col items-center">
      <p className="text-xl font-semibold mb-4">Choose Braid Color</p>

      <p className="text-xs text-gray-400 mb-4 text-center">
        Select a color that matches your braided style.
      </p>

      {/* Swatch Grid */}
      <div className="grid grid-cols-3 gap-4">
        {colors.map((item, index) => (
          <div
            key={index}
            onClick={() => handleSelect(index)}
            className={`w-16 h-16 rounded-full cursor-pointer border-2 transition-all duration-300
              ${
                currentIndex === index
                  ? "scale-110 border-orange-500 shadow-lg"
                  : "border-gray-600 hover:scale-105"
              }`}
            style={{
              background: item.code.includes("gradient")
                ? item.code
                : item.code,
              backgroundColor: !item.code.includes("gradient")
                ? item.code
                : undefined,
            }}
          ></div>
        ))}
      </div>

      <p className="mt-6 text-sm text-gray-300 text-center max-w-xs">
        Selected: <span className="font-semibold text-white">{selected}</span>
      </p>
    </div>
  );
};

export default Color;
