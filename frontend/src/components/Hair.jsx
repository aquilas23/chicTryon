import React from "react";
import { motion } from "framer-motion";
import Braids from "../data/braidData";

const Hair = ({ selected, onSelect }) => {
  const handleSelect = (index) => {
    onSelect(Braids[index].name);
  };

  return (
    <div className="mt-4 w-full flex flex-col items-center">
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-lg sm:text-xl font-semibold text-white mb-4"
      >
        Choose Your Braid Style
      </motion.p>

      <div
        className="grid grid-cols-2 sm:grid-cols-3 
        lg:grid-cols-[repeat(auto-fit,minmax(160px,1fr))]
        place-items-center gap-4 md:gap-6 px-1 md:px-4 w-full"
      >
        {Braids.map((val, ind) => {
          const isSelected = selected === val.name;
          return (
            <motion.button
              key={ind}
              onClick={() => handleSelect(ind)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className={`w-full rounded-xl py-3 px-4 text-xs sm:text-sm font-semibold font-homeHeading 
                shadow-md transition-all duration-300
                ${
                  isSelected
                    ? "bg-gradient-to-r from-orange-500 to-orange-700 text-white shadow-orange-500/40 border border-orange-300"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
            >
              {val.name}
            </motion.button>
          );
        })}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-5 text-sm text-gray-300 text-center"
      >
        Selected:{" "}
        <motion.span
          key={selected}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-orange-400 font-bold ml-1"
        >
          {selected}
        </motion.span>
      </motion.p>
    </div>
  );
};

export default Hair;
