import React, { useState } from "react";
import { studio_header } from "../data/Features";
import Hair from "./Hair";
import Color from "./Color";
import Length from "./Length";
import Thickeness from "./Thickeness";
import Accessory from "./Accessory";
import Texture from "./Texture";
import ImageGeneration from "./ImageGeneration";
import "./studio.css";

const Studio = () => {
  const [activeHeaderIndex, setActiveHeaderIndex] = useState(0);

  // ✅ Saved Selections
  const [selectedHair, setSelectedHair] = useState("None");
  const [selectedLength, setSelectedLength] = useState("None");
  const [selectedThickness, setSelectedThickness] = useState("None");
  const [selectedColor, setSelectedColor] = useState("None");
  const [selectedAccessory, setSelectedAccessory] = useState("None");

  console.log(
    selectedHair,
    selectedLength,
    selectedThickness,
    selectedColor,
    selectedAccessory
  );

  return (
    <div className="px-20 pt-4 min-h-screen">
      <div className="bg-gradient-to-tl from-orange-200 via-black/100 to-black rounded-2xl h-[34rem] w-full shadow-xl">
        <p className="font-homeHeading text-white text-xl text-center font-semibold pt-5">
          Virtual Try On Interface
        </p>

        {/* ✅ MAIN AREA */}
        <div className="flex mt-6 h-[30rem]">
          {/* ✅ LEFT SECTION */}
          <div className="w-1/2 h-full flex flex-col items-center">
            {/* ✅ Stylish Navigation */}
            <div className="bg-gray-800/60 p-2 rounded-full flex justify-center gap-3 text-sm shadow-lg backdrop-blur-md">
              {studio_header.map((val, ind) => (
                <button
                  key={ind}
                  onClick={() => setActiveHeaderIndex(ind)}
                  className={`
                    px-5 py-2 rounded-full font-semibold transition-all duration-300
                    ${
                      activeHeaderIndex === ind
                        ? "bg-gradient-to-r from-orange-500 to-orange-700 text-white scale-105 shadow-lg"
                        : "text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-700"
                    }
                  `}
                >
                  {val}
                </button>
              ))}
            </div>

            {/* ✅ Dynamic Component Rendering */}
            <div className="w-full h-full mt-6 overflow-y-auto px-10">
              {activeHeaderIndex === 0 && <Hair onSelect={setSelectedHair} />}
              {activeHeaderIndex === 1 && (
                <Length onSelect={setSelectedLength} />
              )}
              {activeHeaderIndex === 2 && (
                <Thickeness onSelect={setSelectedThickness} />
              )}
              {activeHeaderIndex === 3 && <Color onSelect={setSelectedColor} />}
              {activeHeaderIndex === 4 && (
                <Accessory onSelect={setSelectedAccessory} />
              )}
              {activeHeaderIndex === 5 && <Texture />}
            </div>
          </div>

          {/* ✅ RIGHT SECTION (Image Display Area) */}
          <div className="w-1/2 h-full flex items-center justify-center p-8">
            <ImageGeneration />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studio;
