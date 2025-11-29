import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { studio_header } from "../data/Features";
import Hair from "./Hair";
import Color from "./Color";
import Length from "./Length";
import Thickeness from "./Thickeness";
import Accessory from "./Accessory";
import Texture from "./Texture";
import ImageGeneration from "./ImageGeneration";

import "./studio.css";

const basePrices = {
  "Box Braids": 180,
  "Boho Braids": 230,
  "Knotless Box Braids": 210,
  Cornrows: 140,
  "Fulani Braids": 230,
  "Senegalese Twists": 210,
  "Havana Twists": 200,
  "Faux Locs": 230,
  "Butterfly Locs": 240,
  "Bantu Knots": 150,
  "Stitch Braids": 190,
  Locs: 220,
  Twists: 200,
  "Crochet Braids": 170,
};

const thicknessModifier = {
  Thin: -0.1,
  Medium: 0,
  Thick: 0.25,
};

const lengthAddon = {
  Short: 0,
  Medium: 20,
  Long: 40,
};

const accessoriesAddon = {
  "Hair Shells": 15,
  "Hair Cuffs": 12,
  "Hair Ribbons": 8,
};

const Studio = () => {
  const navigate = useNavigate();

  const [activeHeaderIndex, setActiveHeaderIndex] = useState(0);

  const [selectedHair, setSelectedHair] = useState("None");
  const [selectedLength, setSelectedLength] = useState("Medium");
  const [selectedThickness, setSelectedThickness] = useState("Medium");
  const [selectedColor, setSelectedColor] = useState("Natural Black (1)");
  const [selectedAccessory, setSelectedAccessory] = useState("None");

  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadedPreview, setUploadedPreview] = useState(null);

  const [estimatedPrice, setEstimatedPrice] = useState(0);
  const [loading, setLoading] = useState(false);

  // PRICE CALCULATOR
  const calculatePrice = () => {
    if (!basePrices[selectedHair]) return 0;

    const base = basePrices[selectedHair];
    const thicknessCost = base * (thicknessModifier[selectedThickness] || 0);
    const lengthCost = lengthAddon[selectedLength] || 0;
    const accessoryCost = accessoriesAddon[selectedAccessory] || 0;

    const isPremiumColor =
      !selectedColor.includes("Black") && !selectedColor.includes("Brown");

    const colorCost = isPremiumColor ? base * 0.1 : 0;

    let final = base + thicknessCost + lengthCost + accessoryCost + colorCost;
    return Math.round(final);
  };

  useEffect(() => {
    setEstimatedPrice(calculatePrice());
  }, [
    selectedHair,
    selectedLength,
    selectedThickness,
    selectedColor,
    selectedAccessory,
  ]);

  const handleImageUpload = (file, preview) => {
    setUploadedImage(file);
    setUploadedPreview(preview);
  };

  const handleAIGenerate = async () => {
    if (!uploadedImage) return;
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("hair", selectedHair);
      formData.append("length", selectedLength);
      formData.append("thickness", selectedThickness);
      formData.append("color", selectedColor);
      formData.append("accessory", selectedAccessory);
      formData.append("image", uploadedImage);

      const response = await axios.post(
        "http://localhost:8000/api/studiodata",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

    navigate("/result", {
      state: {
        before: response.data.before, // Cloudinary URL
        after: response.data.after, // Cloudinary URL
        price: estimatedPrice,
      },
    });

    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="px-20 pt-4 ">
      <div className="bg-gradient-to-tl from-orange-200 via-black/100 to-black rounded-2xl h-[34rem] w-full shadow-xl relative overflow-hidden">
        <p className="font-homeHeading text-white text-xl text-center font-semibold pt-5">
          Virtual Try On Interface
        </p>

        {/* PRICE ESTIMATOR */}
        {/* PRICE ESTIMATOR */}
        <div
          className="absolute top-4 right-4 bg-gray-900/70 backdrop-blur-md px-1 py-1 
rounded-lg border border-orange-500 shadow-md w-[160px] text-center"
        >
          <p className="text-xs text-orange-400 font-semibold tracking-wide">
            Est. Price
          </p>
          <h2 className="text-2xl font-extrabold text-white leading-tight mt-1">
            ${estimatedPrice}
          </h2>
          <p className="text-[10px] text-gray-400 mt-1">auto-updated</p>
        </div>

        <div className="flex mt-6 h-[30rem]">
          {/* LEFT PANEL */}
          <div className="w-1/2 h-full flex flex-col items-center">
            <div className="bg-gray-800/60 p-2 rounded-full flex justify-center gap-3 text-sm shadow-lg backdrop-blur-md">
              {studio_header.map((val, ind) => (
                <button
                  key={ind}
                  onClick={() => setActiveHeaderIndex(ind)}
                  className={`px-5 py-2 rounded-full font-semibold transition-all duration-300
                    ${
                      activeHeaderIndex === ind
                        ? "bg-gradient-to-r from-orange-500 to-orange-700 text-white scale-105 shadow-lg"
                        : "text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-700"
                    }`}
                >
                  {val}
                </button>
              ))}
            </div>

            <div className="w-full h-full mt-6 overflow-y-auto px-10">
              {activeHeaderIndex === 0 && (
                <Hair selected={selectedHair} onSelect={setSelectedHair} />
              )}
              {activeHeaderIndex === 1 && (
                <Length
                  selected={selectedLength}
                  onSelect={setSelectedLength}
                />
              )}
              {activeHeaderIndex === 2 && (
                <Thickeness
                  selected={selectedThickness}
                  onSelect={setSelectedThickness}
                />
              )}
              {activeHeaderIndex === 3 && (
                <Color selected={selectedColor} onSelect={setSelectedColor} />
              )}
              {activeHeaderIndex === 4 && (
                <Accessory
                  selected={selectedAccessory}
                  onSelect={setSelectedAccessory}
                />
              )}
              {activeHeaderIndex === 5 && <Texture />}
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="w-1/2 h-full relative flex justify-center items-center p-4">
            <ImageGeneration onImageUpload={handleImageUpload} />

            <button
              onClick={handleAIGenerate}
              disabled={!uploadedImage || loading}
              className={`absolute bottom-6 px-10 py-3 font-bold rounded-xl shadow-lg transition-all duration-300
                ${
                  uploadedImage
                    ? "bg-gradient-to-r from-orange-600 to-orange-500 text-white hover:scale-105"
                    : "bg-gray-700 text-gray-400 cursor-not-allowed"
                }`}
            >
              {loading ? "Generating..." : "Generate AI Image"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studio;
