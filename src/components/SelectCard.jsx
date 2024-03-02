import React from "react";

import { PLACES } from '../data/data';

const SelectCard = () => {
  return (
   <>
      {PLACES.map((item, index) => {
        return (
          <div className="relative" key={index}>
            <img className="w-full h-full object-cover" src={item.image} alt="/" />
            <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
              <p className="left-4 bottom-4 text-2xl font-bold text-white absolute">
                {item.title}
              </p>
            </div>
          </div>
        );
      })}
    
    </>
  );
  
};

export default SelectCard;
