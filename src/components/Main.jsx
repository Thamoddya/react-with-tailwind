import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const Main = () => {
  return (
    <div className="w-full bg-section h-[65vh] sm:h-[80vh] md:h-[90vh] bg-cover bg-center">
      <div className="flex flex-col text-start justify-center h-[65vh] sm:h-[80vh] md:h-[100vh] max-w-[640px] md:max-w-[840px] px-[20px]">
        <h1 className="text-4xl md:text-7xl xl:text-6xl font-bold text-white">
          Find an experienced <br /> handyman near
          <br /> you
        </h1>
        <p className="text-1xl font-medium md:font-normal font-sans mt-4  text-white">
          Fill a short form and get free quotes for a handyman service near
          you.Fill a short form and get free quotes for a handyman service near
          youFill a short form and get free quotes for a handyman service near
          you.
        </p>
        <button className="self-start bg-white text-black px-4 py-3 mt-4 rounded-sm">
          Find a handyman near me
          <BsArrowRight size={20} className="inline-block ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Main;
