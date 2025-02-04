import React from "react";
import { Link } from "react-router-dom";


const HireFindBtn = () => {
  return (
    <div className="flex h-screen">
      <a
        href="/find-job" 
        className="flex-1 flex items-center justify-center bg-gray-900 text-white text-4xl font-bold transition-all duration-300 hover:bg-gray-950"
      >
        Find Job
      </a>

      <a
        href="/hire-someone" 
        className="flex-1 flex items-center justify-center bg-gray-900 text-white text-4xl font-bold transition-all duration-300 hover:bg-gray-950"
      >
        Hire Someone
      </a>
    </div>
  );
};

export default HireFindBtn;