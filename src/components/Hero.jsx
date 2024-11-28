import React from "react";
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <div className="text-white">
      <div className="flex max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex-col justify-center">
        <p className="text-[#00df90] font-bold p-2">
          Growing your business is easier than you think.
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow With Data
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast , Flexible financing for
          </p>
          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl md:pl-4 font-bold pl-2"
            strings={["BTB", "B2C", "B2B", "SME"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          scelerisque, urna sed
        </p>
        <button className="bg-[#00df90] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
            Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
