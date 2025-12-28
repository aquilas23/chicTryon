import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Heart, Share2 } from "lucide-react";

export default function MyGallery() {
  const [images, setImages] = useState([]);
  const [open, setOpen] = useState(null);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [loading, setLoading] = useState(true);

  const user = useSelector((state) => state.auth);

  useEffect(() => {
    const getGallery = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/gallery`,
          {
            headers: { Authorization: user.token },
          }
        );

        setImages(res.data.data || []);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    getGallery();
  }, []);

  /* 💛 Favorite Toggle */
  const toggleFavorite = (id) => {
    const updated = favorites.includes(id)
      ? favorites.filter((x) => x !== id)
      : [...favorites, id];

    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  /* ⬇ Download */
  const downloadImage = (url) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = "ChicTryOn_Image.jpg";
    a.click();
  };

  /* 🔥 Social Share */
  const shareInstagram = (url) => {
    window.open(
      `https://www.instagram.com/?url=${encodeURIComponent(url)}`,
      "_blank"
    );
  };
  const shareTiktok = (url) => {
    window.open(
      `https://www.tiktok.com/share?url=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-white pt-20 px-6 pb-14">
      <h1 className="text-4xl font-extrabold text-orange-600 text-center mb-10">
        My Gallery
      </h1>

      {/* ------------ Skeleton While Loading ------------- */}
      {loading && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 animate-pulse">
          {Array(8)
            .fill()
            .map((_, i) => (
              <div key={i} className="h-56 bg-gray-200 rounded-xl"></div>
            ))}
        </div>
      )}

      {/* ------------ Empty Placeholder ------------- */}
      {!loading && images.length === 0 && (
        <p className="text-gray-600 text-lg text-center">
          No images generated yet. ✨
        </p>
      )}

      {/* ------------ MAIN GALLERY GRID ------------- */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {images.map((img) => (
          <motion.div
            key={img._id}
            whileHover={{ scale: 1.03 }}
            className="bg-white shadow-md rounded-xl overflow-hidden cursor-pointer 
                       transition hover:shadow-lg relative group"
            onClick={() => setOpen(img)}
          >
            {/* Image - Uniform Height */}
            <div className="h-56 w-full overflow-hidden">
              <img
                src={img.generatedImg.url}
                className="w-full h-full object-cover group-hover:brightness-75 transition"
              />
            </div>

            {/* ❤️ Favorite button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleFavorite(img._id);
              }}
              className="absolute top-2 right-2 p-2 bg-white rounded-full shadow hover:scale-110 transition"
            >
              <Heart
                size={18}
                className={
                  favorites.includes(img._id)
                    ? "fill-red-500 text-red-500"
                    : "text-gray-700"
                }
              />
            </button>

            {/* Hover Actions */}
            <div className="text-center p-3">
              <p className="text-xs text-gray-600 font-medium">AI Preview</p>
              <div className="flex justify-center gap-3 mt-2 opacity-0 group-hover:opacity-100 transition">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    downloadImage(img.generatedImg.url);
                  }}
                  className="text-orange-600 text-sm font-semibold hover:text-orange-700"
                >
                  Download
                </button>
                <span className="text-gray-300">•</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(img._id);
                  }}
                  className="text-red-500 text-sm font-semibold hover:text-red-600"
                >
                  {favorites.includes(img._id) ? "Unfav" : "Fav"}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-[200]"
            onClick={() => setOpen(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-5xl relative 
                         overflow-y-auto max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setOpen(null)}
                className="absolute top-3 right-3 bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
              >
                <X size={18} />
              </button>

              <h2 className="text-2xl font-bold text-orange-600 text-center mb-6">
                Before & After Comparison
              </h2>

              {/* Comparison */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-semibold text-gray-600">
                    Original
                  </p>
                  <img
                    src={open.originalImg.url}
                    className="rounded-xl w-full h-[300px] object-cover shadow"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-600">
                    Generated
                  </p>
                  <img
                    src={open.generatedImg.url}
                    className="rounded-xl w-full h-[300px] object-cover shadow"
                  />
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <button
                  onClick={() => downloadImage(open.generatedImg.url)}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full flex items-center gap-2"
                >
                  <Download size={16} /> Download
                </button>

                <button
                  onClick={() => toggleFavorite(open._id)}
                  className={`px-5 py-2 rounded-full flex items-center gap-2 font-semibold
                    ${
                      favorites.includes(open._id)
                        ? "bg-red-500 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                >
                  <Heart size={16} />{" "}
                  {favorites.includes(open._id) ? "Unfavorite" : "Favorite"}
                </button>

                <button
                  onClick={() => shareInstagram(open.generatedImg.url)}
                  className="px-5 py-2 rounded-full flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white"
                >
                  <Share2 size={16} /> Instagram
                </button>

                <button
                  onClick={() => shareTiktok(open.generatedImg.url)}
                  className="px-5 py-2 rounded-full flex items-center gap-2 bg-black hover:bg-gray-900 text-white"
                >
                  <Share2 size={16} /> TikTok
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
