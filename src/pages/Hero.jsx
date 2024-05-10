import React from "react";
import csk from "../components/images/csk.png"
import dhoni from "../components/images/msdhoni.png"
import kohli from "../components/images/kohli.png"
import rcb from "../components/images/rcb.jpeg"
import { FaRunning } from "react-icons/fa";
import { MdSportsCricket } from "react-icons/md";
import { GiCricketBat } from "react-icons/gi";

const dummyRecords = [
    {
      teamName: "Team A",
      name: "Player 1",
      runs: 50,
      fours: 8,
      sixes: 2,
      strikeRate: 125.0,
      status: "Active"
    },
    {
      teamName: "Team B",
      name: "Player 2",
      runs: 40,
      fours: 6,
      sixes: 1,
      strikeRate: 110.0,
      status: "Inactive"
    },
    {
      teamName: "Team C",
      name: "Player 3",
      runs: 70,
      fours: 12,
      sixes: 3,
      strikeRate: 150.0,
      status: "Active"
    },
    {
      teamName: "Team D",
      name: "Player 4",
      runs: 60,
      fours: 10,
      sixes: 2,
      strikeRate: 130.0,
      status: "Active"
    },
    {
      teamName: "Team E",
      name: "Player 5",
      runs: 45,
      fours: 7,
      sixes: 1,
      strikeRate: 115.0,
      status: "Inactive"
    },
  ];
  

const Hero = () => {
  return (
    <div className="mt-24">
    <h1 className="text-center lg:text-6xl md:text-6xl text-4xl mb-24 font-medium">Live Score</h1>
      <div className="lg:flex justify-center grid gap-20 md:gap-0">
      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg lg:h-auto h-40 rounded-xl  lg:w-auto  pt-3 md:m-20 lg:m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center flex items-center relative pb-4 lg:pb-0">
   {/* Dhoni Image on the left */}
   <img src={dhoni} className="lg:w-72 lg:h-72 md:w-60 md:h-60 w-48 h-48 drop-shadow-2xl mr-0 lg:mr-2 md:mr-16" alt="Dhoni" style={{marginTop: '-6rem'}} />

  {/* Content on the right */}
  <div className="mr-4">
    <p className="font-medium text-black lg:text-xl md:text-2xl text-md mb-2 lg:mb-6">Chennai Super Kings</p>
    <div className="flex items-center">
      {/* Image */}
      <div className="lg:mx-4 rounded-full border-2 border-blue-400 lg:w-16 lg:h-16 md:w-20 md:h-20 w-12 h-12 flex justify-center items-center">
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


<div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg lg:h-auto md:h-auto h-40 rounded-xl  lg:w-auto pr-2 lg:pr-8 pt-3 md:m-20 lg:m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center flex items-center relative pb-4 lg:pb-0">
  
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

    <div className="flex m-3 flex-wrap justify-center gap-6 items-center">
         
   

    <div className="bg-white h-auto w-auto dark:text-gray-200 dark:bg-secondary-dark-bg md:w-48 p-6 pt-9 rounded-2xl flex items-center justify-between text-center">
              <button
                type="button"
                style={{ color: "#2154bce6", backgroundColor: "#e5fafb" }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                <FaRunning />
              </button>
              <div className="text-left">
    <p className="mt-3">
      <span className="text-lg font-semibold">10</span>
    </p>
    <p className="text-xl font-bold text-gray-800 mt-1">Twos</p>
  </div>
            </div>
            <div className="bg-white h-auto w-auto dark:text-gray-200 dark:bg-secondary-dark-bg md:w-48 p-6 pt-9 rounded-2xl flex items-center justify-between text-center">
              <button
                type="button"
                style={{ color: "#2154bce6", backgroundColor: "#e5fafb" }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                <MdSportsCricket />
              </button>
              <div className="text-left">
    <p className="mt-3">
      <span className="text-lg font-semibold">9</span>
    </p>
    <p className="text-xl font-bold text-gray-800 mt-1">Sixes</p>
  </div>
            </div>
            <div className="bg-white h-auto w-auto dark:text-gray-200 dark:bg-secondary-dark-bg md:w-48 p-6 pt-9 rounded-2xl flex items-center justify-between text-center">
              <button
                type="button"
                style={{ color: "#2154bce6", backgroundColor: "#e5fafb" }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                <GiCricketBat />
              </button>
              <div className="text-left">
    <p className="mt-3">
      <span className="text-lg font-semibold">10</span>
    </p>
    <p className="text-xl font-bold text-gray-800 mt-1">Fours</p>
  </div>
            </div>
        </div>
        <div className=" overflow-x-auto">
  <table className="table-fixed rounded-3xl ml-4 ">
    {/* Table Head */}
    <thead className="sticky top-0 bg-white text-black rounded-3xl">
  <tr>
    <th className="px-4 py-2" colSpan="7">Playing - Batsman</th>
  </tr>
  <tr>
    <th className="px-4 py-2">Team Name</th>
    <th className="px-4 py-2">Name</th>
    <th className="px-4 py-2">Runs</th>
    <th className="px-4 py-2">Fours</th>
    <th className="px-4 py-2">Sixes</th>
    <th className="px-4 py-2">Strike Rate</th>
    <th className="px-4 py-2">Status</th>
  </tr>
</thead>

    {/* Table Body */}
    <tbody className="divide-y divide-blue-100">
      {/* Dummy Records */}
      {dummyRecords.map((record, index) => (
        <tr key={index} className={index % 2 === 0 ? 'bg-blue-50' : 'bg-blue-200'}>
          <td className="px-4 py-2">{record.teamName}</td>
          <td className="px-4 py-2">{record.name}</td>
          <td className="px-4 py-2">{record.runs}</td>
          <td className="px-4 py-2">{record.fours}</td>
          <td className="px-4 py-2">{record.sixes}</td>
          <td className="px-4 py-2">{record.strikeRate}</td>
          <td className="px-4 py-2">{record.status}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </div>
  );
};

export default Hero;
