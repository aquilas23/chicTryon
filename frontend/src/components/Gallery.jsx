import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BRAIDS from "../data/braidData";

const Gallery = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  const filters = ["all", ...BRAIDS.map((b) => b.name)];

  const filteredBraids =
    selectedFilter === "all"
      ? BRAIDS
      : BRAIDS.filter((b) => b.name === selectedFilter);

  // SIMULATED LOADER
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timeout);
  }, [selectedFilter]);

  return (
    <div className="px-6 py-8 bg-gray-50 min-h-screen font-poppins">
      {/* TITLE */}
      <h1 className="text-xl font-semibold mb-6 text-gray-800 text-center">
        Braid Gallery
      </h1>

      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`px-3 py-1.5 rounded-full border text-xs transition-all duration-300 shadow-sm 
              ${
                selectedFilter === filter
                  ? "bg-orange-500 text-white shadow-md scale-105"
                  : "bg-white text-gray-500 font-medium hover:bg-orange-100"
              }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* LOADING SKELETON */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-[320px] bg-gray-300 rounded-xl shadow-md"
            ></div>
          ))}
        </div>
      ) : (
        /* IMAGE GRID */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-700">
          {filteredBraids.map((braid) => (
            <Link
              key={braid.id}
              to={`/gallery/${braid.id}`}
              className="cursor-pointer"
            >
              <div className="bg-white rounded-lg shadow-md border hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                {/* CARD HEADER */}
                <div className="px-3 py-2 border-b bg-gradient-to-r from-orange-500 to-orange-400 text-white">
                  <h3 className="text-sm font-medium">{braid.name}</h3>
                </div>

                {/* IMAGE GRID */}
                <div className="p-3">
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <img
                      src={braid.images.front}
                      loading="lazy"
                      alt={`${braid.name} front`}
                      className="rounded-md hover:scale-105 transition duration-300 shadow-sm w-full h-auto object-contain bg-gray-100 p-1"
                    />
                    <img
                      src={braid.images.back}
                      loading="lazy"
                      alt={`${braid.name} back`}
                      className="rounded-md hover:scale-105 transition duration-300 shadow-sm w-full h-auto object-contain bg-gray-100 p-1"
                    />
                    <img
                      src={braid.images.left}
                      loading="lazy"
                      alt={`${braid.name} left`}
                      className="rounded-md hover:scale-105 transition duration-300 shadow-sm w-full h-auto object-contain bg-gray-100 p-1"
                    />
                    <img
                      src={braid.images.right}
                      loading="lazy"
                      alt={`${braid.name} right`}
                      className="rounded-md hover:scale-105 transition duration-300 shadow-sm w-full h-auto object-contain bg-gray-100 p-1"
                    />
                  </div>

                  <img
                    src={braid.images.overall}
                    loading="lazy"
                    alt={`${braid.name} overall`}
                    className="rounded-lg w-full h-auto object-contain shadow-sm hover:scale-[1.02] transition duration-300 bg-gray-100 p-2"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
