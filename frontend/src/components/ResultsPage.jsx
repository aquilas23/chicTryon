import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaCopy,
  FaFacebookF,
  FaTiktok,
  FaPinterestP,
  FaDownload,
  FaArrowLeft,
} from "react-icons/fa";

const ResultPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { before, after, price } = state || {};

  // If user opens page directly without state
  if (!before || !after) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-slate-100 px-4">
        <p className="text-lg mb-4">No result data found.</p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 rounded-full bg-orange-500 hover:bg-orange-600 text-sm font-semibold"
        >
          Go back to Studio
        </button>
      </div>
    );
  }

  const shareUrl = after;

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    alert("Link copied to clipboard!");
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

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = after;
    link.download = "AI_Hair_Transformation.jpg";
    link.click();
  };

  return (
    <div className="min-h-screen w-full   text-slate-50 flex justify-center px-4 py-8">
      <div className="w-full max-w-6xl space-y-8">
        {/* TOP BAR / BREADCRUMB */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-orange-400 text-gray-900 transition"
          >
            <FaArrowLeft size={14} />
            Back to Studio
          </button>

          <span className="text-xs text-slate-400 uppercase tracking-[0.18em] text-gray-900">
            RESULT SUMMARY
          </span>
        </div>

        {/* HEADER BLOCK */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-600">
              AI Hairstyle Transformation
            </h1>
            <p className="text-sm md:text-base text-slate-300 mt-1 max-w-xl text-slate-400">
              Here’s a preview of your selected look. Use this as a reference
              when visiting your stylist or salon.
            </p>
          </div>

          {/* PRICE CARD */}
          <div className="px-5 py-3 rounded-2xl bg-slate-100/80 border border-orange-500/70 shadow-md text-right min-w-[180px]">
            <p className="text-xs text-orange-400 tracking-wide">
              Estimated Service Price
            </p>
            <p className="text-3xl font-extrabold text-slate-600 mt-1">${price}</p>
            <p className="text-[11px] text-slate-600 mt-1">
              Final cost may vary based on salon & extras.
            </p>
          </div>
        </div>

        {/* MAIN CONTENT LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT: IMAGES */}
          <div className="lg:col-span-2 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* BEFORE */}
              <div className="relative bg-slate-100/80 border border-slate-700 rounded-2xl shadow-lg overflow-hidden h-[40vh] flex items-center justify-center ">
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 text-[11px] font-semibold text-orange-300">
                  Before
                </span>
                <img
                  src={before}
                  alt="Before"
                  className="w-full h-full object-contain p-3 rounded-2xl"
                />
              </div>

              {/* AFTER */}
              <div className="relative bg-slate-100/80 border border-orange-500/80 rounded-2xl shadow-lg overflow-hidden h-[40vh] flex items-center justify-center">
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-orange-500 text-[11px] font-semibold text-white">
                  After (AI Preview)
                </span>
                <img
                  src={after}
                  alt="After"
                  className="w-full h-full object-contain p-3"
                />
              </div>
            </div>

            {/* NOTE / TIP */}
            <div className="px-4 py-3 rounded-xl bg-slate-100/80 border border-slate-700 text-xs md:text-sm text-slate-300">
              💡 <span className="font-semibold text-slate-900">Salon Tip:</span> 
              <span className="text-slate-600">

              
                {" "}Show this
              "Before & After" preview to your stylist to discuss time, hair
              preparation, and any add-ons like color, accessories, or extra
              length.
              </span>
            </div>
          </div>

          {/* RIGHT: DETAILS & ACTIONS */}
          <div className="space-y-4">
            {/* SUMMARY CARD */}
            <div className="rounded-2xl bg-slate-100/80 border border-slate-700 p-5 shadow-md">
              <h2 className="text-lg font-semibold text-white mb-2 text-slate-700">
                Session Summary
              </h2>
              <ul className="text-sm text-slate-300 space-y-2 text-slate-500">
                <li>
                  • AI generated hairstyle preview based on your preferences.
                </li>
                <li>
                  • Use this image as visual guidance at your next salon visit.
                </li>
                <li>
                  • Price shown is an estimate, not a final booking quote.
                </li>
              </ul>
            </div>

            {/* ACTION BUTTONS */}
            <div className="rounded-2xl bg-slate-100/80 border border-slate-700 p-5 shadow-md space-y-4">
              <p className="text-sm font-semibold text-slate-800">
                What would you like to do next?
              </p>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => navigate("/")}
                  className="px-5 py-2 rounded-full bg-slate-800 hover:bg-slate-700 text-sm font-semibold text-slate-100 transition"
                >
                  Adjust Style in Studio
                </button>

                <button
                  onClick={handleDownload}
                  className="px-5 py-2 rounded-full bg-orange-500 hover:bg-orange-600 text-sm font-semibold text-white flex items-center gap-2 transition"
                >
                  <FaDownload size={14} />
                  Download Preview
                </button>
              </div>
            </div>

            {/* SHARE CARD */}
            <div className="rounded-2xl bg-slate-100/80 border border-slate-700 p-5 shadow-md">
              <p className="text-sm font-semibold text-slate-700 mb-2">
                Share this look
              </p>
              <p className="text-xs text-slate-600 mb-3">
                Send this preview to friends or post on social media to get
                opinions before booking your appointment.
              </p>

              <div className="flex items-center gap-3 flex-wrap">
                <button
                  onClick={copyLink}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 hover:bg-slate-700 text-xs font-semibold transition"
                >
                  <FaCopy size={13} />
                  Copy Link
                </button>

                <button
                  onClick={shareFacebook}
                  className="p-2.5 rounded-full bg-[#1877F2] hover:bg-[#145fcc] transition"
                >
                  <FaFacebookF size={14} />
                </button>

                <button
                  onClick={shareTikTok}
                  className="p-2.5 rounded-full bg-black border border-slate-600 hover:bg-slate-900 transition"
                >
                  <FaTiktok size={14} />
                </button>

                <button
                  onClick={sharePinterest}
                  className="p-2.5 rounded-full bg-[#E60023] hover:bg-[#b8001c] transition"
                >
                  <FaPinterestP size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTNOTE */}
        <p className="text-[11px] text-slate-500 text-center mt-4">
          This is an AI-generated visualization. Final results may vary based on
          your natural hair, stylist technique, and salon services.
        </p>
      </div>
    </div>
  );
};

export default ResultPage;
