import React from 'react'
import img from '../images/braids/bantu-knots/front.png'
import { useState } from 'react';
const Test = () => {
    const [onSlider,setOnSlider]=useState(false);
  return (
    <div className="min-h-screen bg-gray-500 flex  justify-center">
      <img
        className="  max-w-[400px] rounded-lg m-auto  hover:scale-[1.01]  transition-transform duration-500  cursor-pointer"
        src={img}
        alt=""
        onClick={() => setOnSlider(true)}
      />
      {onSlider && (
        <>
          <div className="fixed inset-0 z-[9999] bg-black/90 text-white flex items-center justify-center">
            <img className="max-w-sm" src={img} alt="" />
            <p className=" absolute top-5 right-10 hover:scale-[2.01] transition-transform duration-300 cursor-pointer" onClick={()=>setOnSlider(false)}>X</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Test