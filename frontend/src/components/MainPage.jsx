import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../images/braids/crochet-braids/front.webp";

const MainPage = () => {
  const navigate = useNavigate();

  function HandleOnVirtual() {
    navigate("/studio");
  }

  return (
    <div className="w-full min-h-screen px-4 md:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between min-h-[83vh]">
        {/* TEXT SECTION */}
        <div className="w-full md:w-3/4 pt-10 flex flex-col text-center md:text-left">
          <div className="mt-[10vh]">
            <p className="text-4xl md:text-5xl lg:text-6xl font-homeHeading font-semibold tracking-wider leading-tight">
              Try African Braid Style
              <br />
              <span>In Real Time</span>
            </p>

            <p className="font-homeHeading text-sm md:text-base lg:text-lg font-medium text-gray-500 tracking-widest mt-4">
              Box Braids, Knotless, Locs, Twists and more
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-10 justify-center md:justify-start">
            <button
              className="bg-gray-300 hover:bg-black hover:text-white rounded-xl p-2.5 border text-black font-homeHeading font-medium transition"
              onClick={() => HandleOnVirtual()}
            >
              Start Virtual Try-On
            </button>

            <button
              className="bg-orange-500 hover:bg-orange-600 rounded-xl font-homeHeading p-2.5 text-white font-medium transition"
              onClick={() => navigate("/gallery")}
            >
              Browse Styles First
            </button>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="w-full md:w-1/3 flex justify-center items-center mt-10 md:mt-0">
          <img
            src={img}
            alt=""
            className="w-[80%] sm:w-[60%] md:w-full rounded-xl border mx-auto hover:scale-[1.04] transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
