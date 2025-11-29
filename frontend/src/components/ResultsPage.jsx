import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaCopy,
  FaFacebookF,
  FaTiktok,
  FaPinterestP,
  FaDownload,
} from "react-icons/fa";

const ResultPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { before, after, price } = state || {};

  const shareUrl = after;

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    alert("🔗 Link copied to clipboard!");
  };

  const shareFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
      "_blank"
    );
  };

  const shareTikTok = () => {
    window.open(
      `https://www.tiktok.com/share?url=${encodeURIComponent(shareUrl)}`,
      "_blank"
    );
  };

  const sharePinterest = () => {
    window.open(
      `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
        shareUrl
      )}&media=${encodeURIComponent(after)}&description=AI+Hair+Transformation`,
      "_blank"
    );
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col items-center px-6 py-8">
      {/* TITLE */}
      <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
        AI Hairstyle Transformation
      </h1>

      {/* PRICE BOX */}
      <div className="mt-1 mb-6 px-4 py-2 rounded-lg bg-gray-900/70 shadow-md border border-orange-500 backdrop-blur-md">
        <p className="text-xs text-orange-400 text-center tracking-wide">
          Estimated Final Price
        </p>
        <h2 className="text-3xl font-extrabold text-white text-center mt-1">
          ${price}
        </h2>
      </div>

      {/* BEFORE / AFTER */}
      <div className="flex justify-center items-center gap-6 w-full h-[42vh]">
        <div className="relative w-[35%] h-full bg-gray-800/40 border border-gray-700 rounded-2xl shadow-lg flex justify-center items-center overflow-hidden">
          <span className="absolute top-1 left-1 px-2 py-1 bg-black/60 text-[10px] rounded-full text-orange-400 font-semibold">
            Before
          </span>
          <img
            src={before}
            alt="Before"
            className="object-contain h-full w-full p-2"
          />
        </div>

        <div className="relative w-[35%] h-full bg-gray-800/40 border border-orange-600 rounded-2xl shadow-lg flex justify-center items-center overflow-hidden">
          <span className="absolute top-1 left-1 px-2 py-1 bg-orange-600 text-[10px] rounded-full font-bold">
            After
          </span>
          <img
            src={after}
            alt="After"
            className="object-contain h-full w-full p-2"
          />
        </div>
      </div>

      {/* BUTTONS */}
      <div className="flex gap-6 mt-10">
        <button
          onClick={() => navigate("/")}
          className="px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl font-semibold transition-all duration-300"
        >
          Back to Studio
        </button>

        <button
          onClick={() => {
            const link = document.createElement("a");
            link.href = after;
            link.download = "AI_Hair_Transformation.jpg";
            link.click();
          }}
          className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:scale-105 rounded-xl font-bold transition-all duration-300 flex items-center gap-2"
        >
          <FaDownload /> Download
        </button>
      </div>

      {/* SOCIAL SHARE */}
      <div className="mt-8 flex items-center gap-4">
        <span className="text-sm text-gray-300">Share:</span>

        <button
          onClick={copyLink}
          className="p-3 bg-gray-700 hover:bg-gray-600 rounded-full hover:scale-110 transition"
        >
          <FaCopy size={18} />
        </button>

        <button
          onClick={shareFacebook}
          className="p-3 bg-blue-600 hover:scale-110 rounded-full text-white transition"
        >
          <FaFacebookF size={18} />
        </button>

        <button
          onClick={shareTikTok}
          className="p-3 bg-black hover:scale-110 rounded-full text-white border border-gray-600 transition"
        >
          <FaTiktok size={18} />
        </button>

        <button
          onClick={sharePinterest}
          className="p-3 bg-red-600 hover:scale-110 rounded-full text-white transition"
        >
          <FaPinterestP size={18} />
        </button>
      </div>
    </div>
  );
};

export default ResultPage;
