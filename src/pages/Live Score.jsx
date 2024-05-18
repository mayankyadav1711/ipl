import React, { useState, useEffect } from "react";
import { FaRunning } from "react-icons/fa";
import { MdSportsCricket } from "react-icons/md";
import { GiCricketBat } from "react-icons/gi";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { IoIosMore } from "react-icons/io";
import { IoIosRefresh } from "react-icons/io";

import { GrStatusGood } from "react-icons/gr";
const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
    <div className="loader"> <svg role="img" aria-label="Mouth and eyes come from 9:00 and rotate clockwise into position, right eye blinks, then all parts rotate and merge into 3:00" class="smiley" viewBox="0 0 128 128" width="128px" height="128px">
<defs>
<clipPath id="smiley-eyes">
<circle class="smiley__eye1" cx="64" cy="64" r="8" transform="rotate(-40,64,64) translate(0,-56)" />
<circle class="smiley__eye2" cx="64" cy="64" r="8" transform="rotate(40,64,64) translate(0,-56)" />
</clipPath>
<linearGradient id="smiley-grad" x1="0" y1="0" x2="0" y2="1">
<stop offset="0%" stop-color="#000" />
<stop offset="100%" stop-color="#fff" />
</linearGradient>
<mask id="smiley-mask">
<rect x="0" y="0" width="128" height="128" fill="url(#smiley-grad)" />
</mask>
</defs>
<g stroke-linecap="round" stroke-width="12" stroke-dasharray="175.93 351.86">
<g>
<rect fill="hsl(193,90%,50%)" width="128" height="64" clip-path="url(#smiley-eyes)" />
<g fill="none" stroke="hsl(193,90%,50%)">
    <circle class="smiley__mouth1" cx="64" cy="64" r="56" transform="rotate(180,64,64)" />
    <circle class="smiley__mouth2" cx="64" cy="64" r="56" transform="rotate(0,64,64)" />
</g>
</g>
<g mask="url(#smiley-mask)">
<rect fill="hsl(223,90%,50%)" width="128" height="64" clip-path="url(#smiley-eyes)" />
<g fill="none" stroke="hsl(223,90%,50%)">
    <circle class="smiley__mouth1" cx="64" cy="64" r="56" transform="rotate(180,64,64)" />
    <circle class="smiley__mouth2" cx="64" cy="64" r="56" transform="rotate(0,64,64)" />
</g>
</g>
</g>
</svg></div>
</div>
  )
}
//sample API response
const dataSample = [
  {
    "id": "043bb613-d8ee-4287-9ccb-a298a0f9c389",
    "dateTimeGMT": "2024-05-18T14:00:00",
    "matchType": "t20",
    "status": "Chennai Super Kings opt to bowl",
    "ms": "live",
    "t1": "Chennai Super Kings [CSK]",
    "t2": "Royal Challengers Bengaluru [RCB]",
    "t1s": "",
    "t2s": "78/1 (9.4)",
    "t1img": "https://g.cricapi.com/iapi/135-637852956181378533.png?w=48",
    "t2img": "https://g.cricapi.com/iapi/21439-638468478038395955.jpg?w=48",
    "series": "Indian Premier League 2024"
  }
]
const LiveScore = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  const teamCaptains = {
    "Chennai Super Kings [CSK]":
      "https://documents.iplt20.com/ipl/IPLHeadshot2024/57.png",
    "Royal Challengers Bengaluru [RCB]":
      "https://documents.iplt20.com/ipl/IPLHeadshot2024/2.png",
    "Mumbai Indians [MI]":
      "https://documents.iplt20.com/ipl/IPLHeadshot2024/54.png",
    "Rajasthan Royals [RR]":
      "https://documents.iplt20.com/ipl/IPLHeadshot2024/190.png",
    "Sunrisers Hyderabad [SRH]":
      "https://documents.iplt20.com/ipl/IPLHeadshot2024/33.png",
    "Kolkata Knight Riders [KKR]":
      "https://documents.iplt20.com/ipl/IPLHeadshot2024/12.png",
    "Lucknow Super Giants [LSG]":
      "https://documents.iplt20.com/ipl/IPLHeadshot2024/19.png",
    "Gujarat Titans [GT]":
      "https://documents.iplt20.com/ipl/IPLHeadshot2024/62.png",
    "Delhi Capitals [DC]":
      "https://documents.iplt20.com/ipl/IPLHeadshot2024/18.png",
    "Punjab Kings [PBKS]":
      "https://documents.iplt20.com/ipl/IPLHeadshot2024/11.png",
  };

  const teamLogos = {
    "Chennai Super Kings [CSK]":
      "https://scores.iplt20.com/ipl/teamlogos/CSK.png",
    "Royal Challengers Bengaluru [RCB]":
      "https://scores.iplt20.com/ipl/teamlogos/aFPMviEPyJ1710927747rcb.png",
    "Mumbai Indians [MI]": "https://scores.iplt20.com/ipl/teamlogos/MI.png",
    "Rajasthan Royals [RR]": "https://scores.iplt20.com/ipl/teamlogos/RR.png",
    "Sunrisers Hyderabad [SRH]":
      "https://scores.iplt20.com/ipl/teamlogos/SRH.png",
    "Kolkata Knight Riders [KKR]":
      "https://scores.iplt20.com/ipl/teamlogos/KKR.png",
    "Lucknow Super Giants [LSG]":
      "https://scores.iplt20.com/ipl/teamlogos/gPLvfvSC1X1711457972LSG.png",
    "Gujarat Titans [GT]": "https://scores.iplt20.com/ipl/teamlogos/GT.png",
    "Delhi Capitals [DC]": "https://scores.iplt20.com/ipl/teamlogos/DC.png",
    "Punjab Kings [PBKS]": "https://scores.iplt20.com/ipl/teamlogos/PBKS.png",
  };

  // useEffect(() => {
  //   const fetchLiveScore = async () => {
  //     try {
  //       const response = await fetch("/api/livescore");
  //       const data = await response.json();
  //       setMatches(data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching live score:", error);
  //     }
  //   };

  //   fetchLiveScore();
  // }, []);
  useEffect(() => {
    const fetchLiveScore = async () => {
      try {
     
        setMatches(dataSample);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching live score:", error);
      }
    };

    fetchLiveScore();
  }, []);

  const calculateRunRate = (scoreString) => {
    const [runsString, oversString] = scoreString.split("/");
    const runsScored = parseInt(runsString);

    let oversPlayed;

    if (oversString.includes("(")) {
      const match = oversString.match(/\((\d+(\.\d+)?)\)/);
      oversPlayed = match ? parseFloat(match[1]) : NaN;
    } else {
      oversPlayed = parseFloat(oversString);
    }

    if (isNaN(oversPlayed) || oversPlayed === 0 || isNaN(runsScored)) {
      return "N/A";
    }
    const runRate = runsScored / oversPlayed;
    return runRate.toFixed(2);
  };

  const calculateStrikeRate = (scoreString) => {
    const [runsString, oversString] = scoreString.split("/");
    const runsScored = parseInt(runsString);

    let oversPlayed;

    if (oversString.includes("(")) {
      const match = oversString.match(/\((\d+(\.\d+)?)\)/);
      oversPlayed = match ? parseFloat(match[1]) : NaN;
    } else {
      oversPlayed = parseFloat(oversString);
    }

    if (isNaN(oversPlayed) || oversPlayed === 0 || isNaN(runsScored)) {
      return "N/A";
    }
    const ballsFaced = oversPlayed * 6;
    const strikeRate = (runsScored / ballsFaced) * 100;
    return strikeRate.toFixed(2);
  };

  const getWicketsLost = (scoreString) => {
    const [, oversString] = scoreString.split("/");
    const wicketsLost = oversString.split(" ")[1]?.slice(1, -1) || "0";
    return wicketsLost;
  };

  const handleRefresh = async () => {
    setLoading(true);

    try {
      const response = await fetch("/api/aa");
      const data = await response.json();
      setMatches(data);
    } catch (error) {
      console.error("Error fetching live score:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="mt-48">
          <div className="flex justify-center mb-4 ">
            <button
              type="button"
              onClick={handleRefresh}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center mr-16"
            >
              <IoIosRefresh className="mr-2" />
              Refresh
            </button>
          </div>
          <div className="lg:flex justify-center flex-wrap gap-4">
            {matches.map((match) => (
              <div key={match.id} className="flex flex-wrap justify-center gap-4">
              <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl p-4 lg:w-auto h-60 md:w-80 w-full flex flex-col lg:flex-row items-center ">
  <img
    src={teamCaptains[match.t1]}
    className="w-72 h-72 drop-shadow-2xl mb-4 lg:mr-4"
    alt={match.t1}
    style={{marginTop:"-10rem"}}
  />
  <div className="lg:w-3/4 flex flex-col items-start">
    <p className="font-medium text-black text-xl mb-2">
      {match.t1}
    </p>
    <div className="flex items-center mb-2">
      <div className="rounded-full border-2 border-blue-400 w-16 h-16 flex justify-center items-center mr-4">
        <img
          src={teamLogos[match.t1]}
          className="w-12 h-12 rounded-full"
          alt="Team Logo"
        />
      </div>
      <div className="text-center">
        <p className="text-2xl font-bold">
          {match.t1s}
        </p>
        <p className="text-gray-600 font-bold">
          Run-rate: {match.t1s ? calculateRunRate(match.t1s) : "Yet to bat"}
        </p>
      </div>
    </div>
  </div>
</div>


<div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl p-4 lg:w-auto h-60 md:w-80 w-full flex flex-col lg:flex-row items-center ">

  <div className="lg:w-3/4 flex flex-col items-start">
    <p className="font-medium text-black text-xl mb-2">
      {match.t2}
    </p>
    <div className="flex items-center mb-2">
      <div className="rounded-full border-2 border-red-800 w-16 h-16 flex justify-center items-center mr-4">
        <img
          src={teamLogos[match.t2]}
          className="w-12 h-12 rounded-full"
          alt="Team Logo"
        />
      </div>
      <div className="text-center">
        <p className="text-2xl font-bold">
          {match.t2s || "Yet to bat"}
        </p>
        <p className="text-gray-600 font-bold">
          Run-rate: {match.t2s && match.t2s !== "" ? calculateRunRate(match.t2s) : match.t2s ? "Yet to bat" : ""}
        </p>
      </div>
      
    </div>
    
  </div>
  <img
    src={teamCaptains[match.t2]}
    className="w-72 h-72 drop-shadow-2xl mb-4 lg:mr-4"
    alt={match.t2}
    style={{marginTop:"-10rem"}}
 />
</div>


               <div className="flex flex-wrap justify-center gap-6 mt-4">
  <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg w-auto p-6 rounded-2xl flex items-center justify-between text-center">
    <button
      type="button"
      style={{ color: "#2154bce6", backgroundColor: "#e5fafb" }}
      className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
    >
      <GiCricketBat />
    </button>
    <div className="text-left">
      <p className="mt-3 text-lg font-semibold ml-4">
        {calculateStrikeRate(match.t2s)}
      </p>
      <p className="text-xl font-bold text-gray-800 mt-1 ml-4">
        Strike Rate
      </p>
    </div>
  </div>

  <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 pt-9 rounded-2xl flex items-center justify-between text-center">
    <button
      type="button"
      style={{ color: "#2154bce6", backgroundColor: "#e5fafb" }}
      className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
    >
      <img src={wicket} width={20} />
    </button>
    <div className="text-left">
      <p className="mt-3 text-lg font-semibold ml-4">
        0
      </p>
      <p className="text-xl font-bold text-gray-800 mt-1 ml-4">
        Wickets Lost
      </p>
    </div>
  </div>

  <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 pt-9 rounded-2xl flex items-center justify-between text-center">
    <button
      type="button"
      style={{ color: "#2154bce6", backgroundColor: "#e5fafb" }}
      className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
    >
      <GrStatusGood />
    </button>
    <div className="text-left">
      <p className="mt-3 ml-4 text-lg font-semibold">
        {match.status}
      </p>
      <p className="text-xl font-bold text-gray-800 mt-1 ml-4">
        Match Status
      </p>
    </div>
  </div>
</div>

              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default LiveScore;
