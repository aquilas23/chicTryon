import React from "react";
import Braids from "../data/braidData";
import {studio_header} from "../data/Features"
import { useState } from "react";
import Hair from "./Hair";
import Color from "./Color";
import Length from "./Length";
import Thickeness from "./Thickeness";
import Accessory from "./Accessory";
import Texture from "./Texture";
import './studio.css'
const Studio = () => {

  const [activeHeader,setActiveHeader]=useState("studio-header")
  const [activeHeaderIndex,setActiveHeaderIndex]=useState(0)
  // console.log(Braids)
  console.log(studio_header)

  return (
    <div className="px-20 pt-4 min-h-screen">
      <div className="bg-gradient-to-tl from-orange-200  via-black/100 to-black rounded-2xl h-[34rem] w-full">
        <p className="font-homeHeading text-white text-xl text-center font-semibold pt-5 ">
          Virtual Try On Interface
        </p>
        <div className="flex mt-4">
          <div className="w-3/5  h-64">
            <div className="mx-16 h-[350px] ">
              <p className="text-white font-semibold font-homeHeading text-center">
                Customize your Style
              </p>
              <br />
              <div className="bg-gray-700 p-1 rounded-xl text-white  font-semibold text-gray-300 flex justify-center  gap-1 text-sm   ">
                {studio_header.map((val, ind) => {
                  return (
                    <div key={ind}>
                      <button
                        className={`  w-24 py-1 rounded-xl  ${
                          activeHeaderIndex === ind
                            ? "bg-black border transition-all duration-500"
                            : "hover:bg-gradient-to-r hover:from-gray-500 hover:to-red-700 transition-all duration-300"
                        }`}
                        onClick={() => {
                          console.log(ind);
                          setActiveHeaderIndex(ind);
                        }}
                      >
                        {" "}
                        {val}
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* data of selected Feature */}
              {activeHeaderIndex === 0 && <Hair></Hair>}

              {activeHeaderIndex === 1 && <Length></Length>}
              {activeHeaderIndex === 2 && <Thickeness></Thickeness>}
              {activeHeaderIndex === 3 && <Color></Color>}
              {activeHeaderIndex === 4 && <Accessory></Accessory>}
              {activeHeaderIndex === 5 && <Texture></Texture>}
            </div>
          </div>
          <div className="w-2/5  h-64">
            {/* <p className='bg-gray-100'>hello</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studio;
