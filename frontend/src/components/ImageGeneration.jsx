import React, { useState } from "react";
import defaultImage from "../images/braids/boho-braids/front.png";

const ImageGeneration = () => {
  const [imageUrl, setImageUrl] = useState(defaultImage);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    console.log(file)
    if (file) {
      const imgURL = URL.createObjectURL(file);
      setImageUrl(imgURL);
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center  p-4">
      {/* ✅ Smaller Image Box */}
      <div className="w-full h-[70%] bg-gray-900/40 border border-gray-700 rounded-2xl flex items-center justify-center overflow-hidden shadow-xl">
        <img
          src={imageUrl}
          alt="Preview"
          className="max-h-full max-w-full object-contain rounded-xl transition-all duration-500 animate-floating"
        />
      </div>

      {/* Upload Button */}
      <label className="mt-4 cursor-pointer bg-orange-400 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-700 transition-all duration-300 text-gray-800 hover:text-white text-sm font-semibold py-2 px-6 rounded-lg shadow-md">
        Upload Your Image
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
