import React from 'react'
import Braids from "../data/braidData";
const Hair = () => {
  return (
    <div>
      <div className="grid grid-cols-3 place-items-center mt-6 gap-6 ">
        {Braids.map((val, ind) => {
          return (
            <div>
              <button className="w-[11rem] bg-orange-400 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-700 transition-all duration-300 rounded-lg py-2 px-10 text-xs font-semibold text-gray-700 font-homeHeading">
                {val.name}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Hair