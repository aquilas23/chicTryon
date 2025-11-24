import React from 'react'
// import React from "react";
// import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import img from "../images/braids/crochet-braids/front.png";
const MainPage = () => {
    const navigate=useNavigate();
    function HandleOnVirtual(){
        navigate("/studio")
    }

  return (
    <div>
      {/* <div className="px-8"> */}
        <div className="flex">
          <div className="home-data w-3/4 pt-10 min-h-[83vh]  flex  flex-col  px-4">
          <div className='mt-[13vh]'>

            <p className="text-6xl font-homeHeading font-semibold tracking-wider ">
              Try African Braid Style
              <span>
                <br />
                In Real Time
              </span>
            </p>
            <p className="font-homeHeading font-medium text-gray-500 tracking-widest mt-4">
              Box Braids, Knotless, Locs, Twists and more
            </p>
          </div>

            <div className="flex gap-3 mt-10">
              <div>
                <button className="bg-gray-300 hover:bg-black hover:text-white rounded-xl p-2.5 border text-black font-homeHeading font-medium " onClick={()=>HandleOnVirtual()}>
                  Start Virtual Try-On
                </button>
              </div>
              <div>
                <button className="bg-orange-500 hover:bg-orange-600 rounded-xl font-homeHeading p-2.5 text-white font-medium" onClick={()=>navigate("/gallery")}>
                  Browse Styles First
                </button>
              </div>
            </div>
          </div>

          <div className="home-image w-1/4  flex  justify-center items-center " >
            <div className="rounded-xl ">
              <img
                src={img}
                alt=""
                className="w-full rounded-xl border border-1 mx-auto hover:scale-[1.04] transform-trasition duration-300"
              />
            </div>
          </div>
        </div>
      
      {/* </div> */}
        
    </div>
  );
}

export default MainPage