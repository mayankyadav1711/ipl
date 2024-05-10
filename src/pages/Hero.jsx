import React from "react";
import csk from "../components/images/csk.png"
import dhoni from "../components/images/msdhoni.png"
import kohli from "../components/images/kohli.png"
import rcb from "../components/images/rcb.jpeg"

const Hero = () => {

  return (
    <div className="mt-24">
    <h1 className="text-center lg:text-6xl md:text-6xl text-4xl mb-24 font-medium">Live Score</h1>
      <div className="lg:flex justify-center grid gap-20 md:gap-0">
      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg lg:h-auto h-40 rounded-xl  lg:w-auto pr-2 lg:pr-8 pt-3 lg:pt-9 md:m-20 lg:m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center flex items-center relative pb-4 lg:pb-0">
   {/* Dhoni Image on the left */}
   <img src={dhoni} className="lg:w-72 lg:h-72 md:w-60 md:h-60 w-48 h-48 drop-shadow-2xl md:mr-16" alt="Dhoni" style={{marginTop: '-6rem'}} />

  {/* Content on the right */}
  <div>
    <p className="font-medium text-black lg:text-xl md:text-2xl text-md mb-2 lg:mb-6">Chennai Super Kings</p>
    <div className="flex items-center">
      {/* Image */}
      <div className="mx-4 rounded-full border-2 border-blue-400 lg:w-16 lg:h-16 md:w-20 md:h-20 w-12 h-12 flex justify-center items-center">
        <img src={csk} className="lg:w-10 lg:h-8 md:w-12 md:h-10 w-8 h-6 rounded-full" alt="Team Logo" />
      </div>

      {/* Score and Run Rate */}
      <div className="grid gap-0">
        <p className="lg:text-2xl md:text-2xl text-lg font-bold lg:pl-4 md:pl-4 pl-2">176/4 (18)</p>
        <p className="lg:text-md md:text-lg text-[10px] text-gray-600 font-bold md:pl-4 lg:pl-4 pl-2">Run-rate : 943</p>
      </div>
    </div>
  </div>
 
</div>


<div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg lg:h-auto md:h-auto h-40 rounded-xl  lg:w-auto pr-2 lg:pr-8 pt-3 lg:pt-9 md:m-20 lg:m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center flex items-center relative pb-4 lg:pb-0">
  
  {/* Content on the right */}
  <div>
    <p className="font-medium text-black lg:text-xl md:text-2xl text-md mb-2 lg:mb-6 pl-6">Royal Challengers Bengaluru</p>
    <div className="flex items-center">
      {/* Image */}
      <div className="mx-4 rounded-full border-2 border-red-800 lg:w-16 lg:h-16 md:w-20 md:h-20 w-12 h-12 flex justify-center items-center">
        <img src={rcb} className="lg:w-10 lg:h-12 md:w-12 md:h-16 w-8 h-10 rounded-full" alt="Team Logo" />
      </div>

      {/* Score and Run Rate */}
      <div className="grid gap-0">
        <p className="lg:text-2xl md:text-2xl text-lg font-bold lg:pl-4 md:pl-4 pl-2">176/4 (18)</p>
        <p className="lg:text-md md:text-lg text-[10px] text-gray-600 font-bold md:pl-4 lg:pl-4 pl-2">Run-rate : 943</p>
      </div>
    </div>
  </div>
  {/* Dhoni Image on the left */}
  <img src={kohli} className="lg:w-72 lg:h-72 md:w-60 md:h-60 w-48 h-48 drop-shadow-2xl md:mr-16" alt="Dhoni" style={{marginTop: '-6rem'}} />

</div>
    </div>

    
     
    </div>
  );
};

export default Hero;
