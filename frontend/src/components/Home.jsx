import React from 'react'
import img from '../images/braids/crochet-braids/front.png'
import VirtualTryOn from './VirtualTryOn';
import MainPage from './MainPage';
const Home = () => {
  return (
    <div>
      <div className="px-24 mt-0">
        <MainPage></MainPage>
      </div>
      <hr className="border border-300 w-full" />
      <div className="px-24 mt-0">
        <VirtualTryOn className="px-24 mt-0"></VirtualTryOn>
      </div>
    </div>
  );
}

export default Home