import React from "react";
import MainPage from "./MainPage";
import VirtualTryOn from "./VirtualTryOn";

const Home = () => {
  return (
    <div className="w-full">
      {/* Main hero section */}
      <div className="px-4 md:px-16 lg:px-24">
        <MainPage />
      </div>

      <hr className="border border-gray-700 w-full mt-6" />

      {/* Virtual try-on section */}
      <div className="px-4 md:px-16 lg:px-24 mt-6 mb-10">
        <VirtualTryOn />
      </div>
    </div>
  );
};

export default Home;
