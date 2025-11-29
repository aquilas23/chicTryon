import React from "react";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import { FaMagic, FaImage, FaExchangeAlt } from "react-icons/fa";
import { FaScissors, FaPinterest, FaTiktok, FaFacebook } from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const VirtualTryOn = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full mt-10 flex flex-col items-center px-4 md:px-10">
      {/* HERO */}
      <div className="bg-gradient-to-br from-black via-gray-900 to-black rounded-3xl w-full max-w-6xl p-10 shadow-[0_0_40px_rgba(255,110,10,0.2)] border border-gray-700 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/3 flex justify-center">
          <AiOutlineCodeSandbox
            size={200}
            className="text-orange-500 drop-shadow-lg"
          />
        </div>

        <div className="w-full md:w-2/3 text-center md:text-left text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-4">
            AI Virtual Braid Try-On
          </h1>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl mx-auto md:mx-0">
            Upload your photo, select your braided style, and watch AI transform
            your look. Compare Before & After — see how any hairstyle fits your
            face naturally before going to a salon.
          </p>

          <button
            className="mt-6 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold text-lg px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition-all"
            onClick={() => navigate("/studio")}
          >
            Start Try-On →
          </button>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section className="mt-20 text-center w-full max-w-6xl">
        <h2 className="text-3xl font-bold text-white mb-10">How It Works</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              icon: <FaImage size={36} className="text-orange-400" />,
              title: "Upload Photo",
              desc: "Use a clear front-facing picture.",
            },
            {
              icon: <FaScissors size={36} className="text-orange-400" />,
              title: "Choose Style",
              desc: "Select braids, length, thickness & color.",
            },
            {
              icon: <FaMagic size={36} className="text-orange-400" />,
              title: "AI Transforms",
              desc: "Instant realistic hairstyle preview.",
            },
            {
              icon: <FaExchangeAlt size={36} className="text-orange-400" />,
              title: "Compare",
              desc: "Before vs After side-by-side.",
            },
          ].map((step, i) => (
            <div
              key={i}
              className="bg-gray-900 border border-gray-700 rounded-xl p-5 shadow-md hover:shadow-orange-500/30 transition hover:-translate-y-1"
            >
              <div className="mb-3">{step.icon}</div>
              <h4 className="font-bold text-white mb-1">{step.title}</h4>
              <p className="text-gray-400 text-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY + INSPIRATION */}
      <section className="mt-20 w-full max-w-6xl">
        <h2 className="text-3xl font-bold text-orange-500 text-center mb-6">
          Explore Looks & Save Ideas
        </h2>

        <p className="text-gray-300 text-center text-sm md:text-base max-w-3xl mx-auto mb-8">
          Browse real transformations in our Gallery, and keep your own AI
          results in Inspiration. Compare styles, share with friends, and choose
          your next salon look confidently.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <button
            onClick={() => navigate("/gallery")}
            className="w-full md:w-1/3 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold py-4 rounded-2xl shadow-lg hover:scale-105 transition-all"
          >
            Visit Gallery →
          </button>

          <button
            onClick={() => navigate("/inspiration")}
            className="w-full md:w-1/3 bg-gray-900 border border-gray-600 hover:border-orange-500 text-white font-bold py-4 rounded-2xl shadow-lg hover:scale-105 transition-all"
          >
            View Inspiration →
          </button>
        </div>
      </section>

      {/* PRICING */}
      <section className="mt-20 bg-gray-900 rounded-2xl w-full max-w-6xl p-10 border border-gray-700 shadow-xl">
        <h2 className="text-3xl font-bold text-orange-500 text-center mb-6">
          Pricing Overview
        </h2>

        <p className="text-gray-300 text-sm text-center mb-6">
          Prices vary depending on hairstyle, thickness, length & accessories.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center text-white text-sm">
          {[
            ["Box Braids", "$180+"],
            ["Boho Braids", "$230+"],
            ["Knotless Braids", "$210+"],
            ["Cornrows", "$140+"],
            ["Butterfly Locs", "$240+"],
            ["Bantu Knots", "$150+"],
            ["Crochet Braids", "$170+"],
            ["Tribal Braids", "$230+"],
          ].map(([style, price]) => (
            <div
              key={style}
              className="bg-black/40 p-4 rounded-lg border border-gray-700 hover:border-orange-500 transition"
            >
              <p className="font-bold">{style}</p>
              <p className="text-orange-400">{price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SHARE SECTION */}
      <section className="mt-20 w-full max-w-6xl text-center mb-16">
        <h2 className="text-2xl font-bold text-white mb-2">
          Share With Friends
        </h2>
        <p className="text-gray-400 text-sm max-w-lg mx-auto mb-6">
          Ask friends which style suits you best.
        </p>

        <div className="flex gap-4 justify-center">
          {[FaShareAlt, FaFacebook, FaTiktok, FaPinterest].map((Icon, i) => (
            <button
              key={i}
              className="p-3 rounded-full bg-gray-200 border border-gray-600 hover:bg-gray-700 hover:border-orange-500 transition"
            >
              <Icon size={22} />
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default VirtualTryOn;
