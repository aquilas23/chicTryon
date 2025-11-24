// import React from 'react'
import { AiOutlineCodeSandbox } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
// import  { ReactComponent as MyIcon }  from '../assets/virtual.svg'
const VirtualTryOn = () => {
    const Navigate=useNavigate()
  return (
    <div className="min-h-screen w-full  mt-8">
      <div className=" flex  bg-gradient-to-tl from-orange-200  via-black/100 to-black rounded-2xl h-[20rem]">
        <div className=" w-2/5 flex items-center">
          <AiOutlineCodeSandbox size={200} className="text-orange-400 mx-auto">
            {" "}
          </AiOutlineCodeSandbox>
        </div>
        <div>
          <p className="text-white mt-10 mb-5 text-4xl font-semibold font-homeHeading">
            AI-ready Virtual Try On{" "}
          </p>
          <p className="text-gray-300 ">
            Upload your photo and instantly preview stunning hairstyles.
            <br className="" />
            Our AI maps styles to your facial features with realistic precision.
            <br />
            See your new look before you ever step into a salon.
          </p>

          <button className="bg-orange-400 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-700 transition-all duration-300 mt-10 rounded-lg p-2 px-4 font-semibold text-xl" onClick={()=>Navigate('/studio')}>
            Try on!
          </button>
        </div>
      </div>
    </div>
  );
}

export default VirtualTryOn