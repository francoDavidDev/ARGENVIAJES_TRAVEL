import React from "react";
import beachVid from "../assets/argentina.mp4";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        src={beachVid}
        autoPlay
        loop
        muted
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30">
        <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-blue-500 p-4">
          <h1>Viaje en primera clase</h1>
          <h2 className="py-4">
          <span className="text-yellow-500"> Argentina </span>    <br />Top 1% de las Mejores Ubicaciones</h2>
          <form className="flex justify-between items-center max-w-[700px] mx-auto w-full border p-1  rounded-md text-black bg-gray-100/90">
            <div>
              <input
                className="bg-transparent w-[300px] sm:w-[400px]  font-[Poppins] focus:outline-none "
                type="text"
                placeholder="Buscar destinos..."
              />
            </div>
            <div>
              <button>
                <AiOutlineSearch size={20} className="icon" style={{color:'#ffffff'}} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
