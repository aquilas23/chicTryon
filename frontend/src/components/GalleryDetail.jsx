import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import BRAIDS from "../data/braidData";

const GalleryDetail = () => {
  const { id } = useParams();
  const braid = BRAIDS.find((b) => b.id === id);

  const [openSlider, setOpenSlider] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!braid) return <div className="p-6 font-poppins">Braid not found.</div>;

  const imageList = [
    braid.images.front,
    braid.images.back,
    braid.images.left,
    braid.images.right,
    braid.images.overall,
  ];

  const captions = [
    "Front View",
    "Back View",
    "Left Side",
    "Right Side",
    "Full Look",
  ];

  const openImage = (i) => {
    setCurrentIndex(i);
    setOpenSlider(true);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % imageList.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
  };

  return (
    <div className="px-4 sm:px-6 py-8 bg-gray-50 min-h-screen font-poppins">
      {/* Back */}
      <div className="max-w-3xl mx-auto mb-4">
        <Link to="/gallery" className="text-orange-600 text-sm hover:underline">
          ← Back
        </Link>
      </div>

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 mb-6">
        {braid.name}
      </h1>

      {/* Card */}
      <div className="max-w-3xl mx-auto bg-white border rounded-2xl shadow-md p-5 sm:p-8">
        {/* Desc */}
        <p className="text-gray-600 text-sm sm:text-base text-center mb-8 leading-relaxed">
          {braid.description}
        </p>

        {/* Full Look Big Image */}
        <div className="w-full flex justify-center mb-8">
          <img
            src={braid.images.overall}
            alt="Full View"
            onClick={() => openImage(4)}
            className="rounded-xl shadow-lg max-h-[380px] sm:max-h-[480px] w-full object-contain cursor-pointer hover:scale-[1.01] transition"
          />
        </div>

        {/* Small Images Title */}
        <h2 className="text-lg font-medium text-gray-700 mb-4">Views</h2>

        {/* Thumbnails */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {imageList.slice(0, 4).map((img, idx) => (
            <div key={idx} className="text-center">
              <img
                src={img}
                alt=""
                onClick={() => openImage(idx)}
                className="rounded-lg border shadow-sm cursor-pointer object-contain w-full max-h-[150px] hover:shadow-md hover:scale-[1.02] transition"
              />
              <p className="text-[11px] text-gray-500 mt-1">{captions[idx]}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ------------------ LIGHTBOX ------------------ */}
      {openSlider && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999] flex flex-col items-center justify-center px-4">
          {/* Close */}
          <button
            className="absolute top-5 right-5 text-white text-3xl hover:scale-110"
            onClick={() => setOpenSlider(false)}
          >
            ✕
          </button>

          {/* Image */}
          <img
            src={imageList[currentIndex]}
            className="max-h-[70vh] sm:max-h-[80vh] w-auto rounded-xl object-contain shadow-2xl mb-4"
          />

          <p className="text-white text-sm opacity-90 mb-3">
            {captions[currentIndex]}
          </p>

          {/* Controls */}
          <div className="flex items-center gap-14">
            <button
              onClick={prevImage}
              className="text-white text-4xl hover:scale-110 transition"
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              className="text-white text-4xl hover:scale-110 transition"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryDetail;
