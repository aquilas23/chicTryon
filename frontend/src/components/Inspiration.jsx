import React, { useEffect, useState } from "react";
import axios from "axios";

const Inspiration = () => {
  const [items, setItems] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/inspiration")
      .then((res) => {
        setItems(res.data.reverse());
        setTimeout(() => setLoading(false), 1200); // smooth skeleton timeout
      })
      .catch((err) => console.log(err));
  }, []);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-gray-100 text-white px-4 sm:px-8 py-8">
      <h1 className="text-2xl sm:text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
        Inspiration Gallery
      </h1>

      {/* LOADING SKELETON */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-[350px] bg-gray-300 rounded-2xl shadow-md"
            ></div>
          ))}
        </div>
      ) : (
        /* GRID */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openModal(index)}
              className="cursor-pointer bg-gray-900 rounded-2xl p-5 border border-gray-700 shadow-lg hover:shadow-orange-600/20 hover:scale-105 transition"
            >
              <h3 className="text-lg font-bold text-orange-500 mb-4 text-center">
                {item.hair}
              </h3>

              {/* BEFORE / AFTER IMAGE PAIR */}
              <div className="flex justify-center gap-4 mb-4">
                <div className="relative">
                  <span className="absolute top-1 left-1 bg-black/70 px-2 py-0.5 text-[10px] rounded-full text-orange-400 font-semibold z-10">
                    Before
                  </span>
                  <img
                    loading="lazy"
                    src={item.before}
                    className="w-36 sm:w-40 h-48 sm:h-52 rounded-lg object-cover border border-gray-600"
                    alt="Before"
                  />
                </div>

                <div className="relative">
                  <span className="absolute top-1 left-1 bg-orange-600 px-2 py-0.5 text-[10px] rounded-full text-white font-bold z-10">
                    After
                  </span>
                  <img
                    loading="lazy"
                    src={item.after}
                    className="w-36 sm:w-40 h-48 sm:h-52 rounded-lg object-cover border border-orange-600"
                    alt="After"
                  />
                </div>
              </div>

              <p className="text-xs text-gray-400 text-center">
                {new Date(item.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* MODAL VIEW */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md flex justify-center items-center z-50 px-2">
          <button
            className="absolute top-5 right-5 text-3xl font-bold text-white hover:text-orange-500"
            onClick={closeModal}
          >
            ✕
          </button>

          {/* NAV ARROWS */}
          <button
            className="hidden sm:block absolute left-4 md:left-10 text-4xl md:text-5xl text-gray-300 hover:text-white"
            onClick={prevImage}
          >
            ❮
          </button>
          <button
            className="hidden sm:block absolute right-4 md:right-10 text-4xl md:text-5xl text-gray-300 hover:text-white"
            onClick={nextImage}
          >
            ❯
          </button>

          {/* CONTENT */}
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-[90%] md:w-[80%] lg:w-[65%]">
            <div className="relative w-full sm:w-1/2 flex justify-center items-center">
              <span className="absolute top-2 bg-gray-800 px-3 py-1 text-xs sm:text-sm rounded-full text-orange-400 font-bold">
                BEFORE
              </span>
              <img
                src={items[currentIndex].before}
                loading="lazy"
                className="w-full max-h-[70vh] object-contain border-2 border-gray-600 rounded-xl"
              />
            </div>

            <div className="relative w-full sm:w-1/2 flex justify-center items-center">
              <span className="absolute top-2 bg-orange-600 px-3 py-1 text-xs sm:text-sm rounded-full text-white font-bold">
                AFTER
              </span>
              <img
                src={items[currentIndex].after}
                loading="lazy"
                className="w-full max-h-[70vh] object-contain border-2 border-orange-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inspiration;
