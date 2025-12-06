import React, { useState } from "react";

const ImageGeneration = ({ onImageUpload, generatedImage }) => {
  const [imageUrl, setImageUrl] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImageUrl(previewUrl);
      onImageUpload(file, previewUrl);
    }
  };

  const hasAnyImage = imageUrl || generatedImage;

  return (
    <div className="w-full h-full flex flex-col items-center justify-start px-3 sm:px-6 py-4">
      {/* EMPTY STATE / UPLOAD BOX */}
      {!hasAnyImage && (
        <div
          className="flex flex-col items-center justify-center w-full 
          h-[35vh] sm:h-[40vh] md:h-[45vh] 
          border-2 border-dashed border-gray-600 rounded-2xl p-4 text-center bg-black/30"
        >
          <p className="text-gray-300 text-sm mb-2 font-semibold">
            Start your hairstyle transformation
          </p>

          <p className="text-gray-500 text-[11px] sm:text-xs max-w-[260px] mb-4">
            Upload a clear front-facing photo for the most accurate AI preview.
            Good lighting & visible hair outline help create realistic results.
          </p>

          <label
            className="cursor-pointer bg-orange-500 hover:bg-orange-600
            text-white text-sm font-semibold py-2 px-5 rounded-full shadow-md
            transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Upload Image
            <input
              type="file"
              accept="image/*"
              onChange={handleUpload}
              className="hidden"
            />
          </label>
        </div>
      )}

      {/* IMAGE PREVIEW */}
      {hasAnyImage && (
        <div
          className="w-full h-[35vh] sm:h-[40vh] md:h-[45vh]
          bg-gray-900/40 border border-gray-700 rounded-2xl flex items-center justify-center 
          overflow-hidden shadow-xl mt-2"
        >
          <img
            src={generatedImage || imageUrl}
            alt="Preview"
            className="max-h-full max-w-full object-contain rounded-xl transition-all duration-500"
          />
        </div>
      )}

      {/* CHANGE IMAGE BUTTON */}
      <label
        className="mt-4 cursor-pointer flex items-center gap-2
        bg-gray-800 border border-gray-600 hover:border-orange-500
        hover:bg-gray-700 text-white text-xs sm:text-sm font-semibold py-2 px-5
        rounded-full shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-orange-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12V4m0 0l-4 4m4-4l4 4"
          />
        </svg>
        Change Image
        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          className="hidden"
        />
      </label>
    </div>
  );
};

export default ImageGeneration;
