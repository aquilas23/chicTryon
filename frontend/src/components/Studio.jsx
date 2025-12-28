import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";

import { studio_header } from "../data/Features";
import Hair from "./Hair";
import Color from "./Color";
import Length from "./Length";
import Thickeness from "./Thickeness";
import Accessory from "./Accessory";
import Texture from "./Texture";
import ImageGeneration from "./ImageGeneration";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";

import "./studio.css";
import { useSelector } from "react-redux";

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

const thicknessModifier = { Thin: -0.1, Medium: 0, Thick: 0.25 };
const lengthAddon = { Short: 0, Medium: 20, Long: 40 };
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
  const [estimatedPrice, setEstimatedPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.auth);
  console.log(user);

  const calculatePrice = () => {
    if (!basePrices[selectedHair]) return 0;

    const base = basePrices[selectedHair];
    const thicknessCost = base * (thicknessModifier[selectedThickness] || 0);
    const lengthCost = lengthAddon[selectedLength] || 0;
    const accessoryCost = accessoriesAddon[selectedAccessory] || 0;
    const isPremiumColor =
      !selectedColor.includes("Black") && !selectedColor.includes("Brown");

    const colorCost = isPremiumColor ? base * 0.1 : 0;

    return Math.round(
      base + thicknessCost + lengthCost + accessoryCost + colorCost
    );
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

  const handleImageUpload = (file) => setUploadedImage(file);

  const handleAIGenerate = async () => {
    if (user) {
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
          `${import.meta.env.VITE_API_URL}/api/studiodata`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: user.token,
            },
            // Authorization: user.token,
          }
        );

        navigate("/result", {
          state: {
            before: response.data.before,
            after: response.data.after,
            price: estimatedPrice,
          },
        });
      } catch (err) {
        console.error(err);
      }
    } else {
      navigate("/login", {
        state: { message: "Please login to complete the action" },
      });
    }

    setLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="px-3 sm:px-6 md:px-16 pt-4"
    >
      <div className="bg-gradient-to-tl from-orange-200 via-black to-black rounded-2xl md:h-[34rem] shadow-xl relative overflow-hidden">
        {/* HEADER + PRICE WRAPPER */}
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2 sm:gap-4 px-4 pt-4 mb-3">
          <p className="font-homeHeading text-white text-xl sm:text-2xl md:text-3xl font-bold text-center sm:text-left sm:pl-20">
            Virtual Try-On Interface
          </p>

          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gray-900/70 backdrop-blur-md px-3 py-2 rounded-lg border border-orange-500 shadow-md text-center w-[140px] sm:w-[160px]"
          >
            <p className="text-[10px] sm:text-xs text-orange-400 font-semibold">
              Est. Price
            </p>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">
              <CountUp end={estimatedPrice} duration={1} prefix="$" />
            </h2>
          </motion.div>
        </div>

        {/* MAIN LAYOUT */}
        <div className="flex flex-col md:flex-row md:h-[30rem]">
          {/* LEFT PANEL */}
          <div className="w-full md:w-2/3 flex flex-col items-center bg-black/20 p-3 relative">
            {/* TABS */}
            <motion.div className="flex flex-wrap justify-center items-center gap-2 mb-3">
              <GrFormPreviousLink
                onClick={() =>
                  setActiveHeaderIndex((s) => (s !== 0 ? s - 1 : 4))
                }
                size={35}
                className="text-gray-400 hover:text-orange-600 cursor-pointer"
              />

              <div className="bg-gray-800/60 p-2 rounded-full flex flex-wrap justify-center gap-2 text-xs sm:text-sm shadow-lg backdrop-blur-md">
                {studio_header.map((val, ind) => (
                  <button
                    key={ind}
                    onClick={() => setActiveHeaderIndex(ind)}
                    className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full font-semibold transition-all duration-300 
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

              <GrFormNextLink
                onClick={() =>
                  setActiveHeaderIndex((s) => (s !== 4 ? s + 1 : 0))
                }
                size={35}
                className="text-gray-400 hover:text-orange-600 cursor-pointer"
              />
            </motion.div>

            {/* CONTENT AREA WITH TRANSITIONS */}
            <div className="w-full flex-1 overflow-y-auto px-4 md:px-10 pb-24 custom-scroll">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeHeaderIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35 }}
                >
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
                    <Color
                      selected={selectedColor}
                      onSelect={setSelectedColor}
                    />
                  )}
                  {activeHeaderIndex === 4 && (
                    <Accessory
                      selected={selectedAccessory}
                      onSelect={setSelectedAccessory}
                    />
                  )}
                  {activeHeaderIndex === 5 && <Texture />}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* CTA BUTTON */}
            <button
              onClick={handleAIGenerate}
              disabled={!uploadedImage || loading}
              className={`sticky bottom-3 w-[65%] md:w-[45%] mt-3 py-2 px-4 rounded-full text-sm font-semibold shadow transition-all duration-300 text-center
                ${
                  uploadedImage
                    ? "bg-orange-500 hover:bg-orange-600 text-white"
                    : "bg-gray-600 text-gray-300 cursor-not-allowed"
                }`}
            >
              {loading ? "Please wait…" : "Generate AI Image"}
            </button>
          </div>

          {/* RIGHT PANEL */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
            className="w-full md:w-1/3 flex justify-center items-center p-4 bg-black/20"
          >
            <ImageGeneration onImageUpload={setUploadedImage} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Studio;
