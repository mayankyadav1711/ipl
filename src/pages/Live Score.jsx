import React, { useState, useEffect } from "react";
import csk from "../components/images/csk.png";
import dhoni from "../components/images/msdhoni.png";
import kohli from "../components/images/kohli.png";
import rcb from "../components/images/rcb.png";
import { FaRunning } from "react-icons/fa";
import { MdSportsCricket } from "react-icons/md";
import { GiCricketBat } from "react-icons/gi";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { IoIosMore } from "react-icons/io";
import Loader from "../components/Loader";
const LiveScore = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  const teamCaptains = {
    "Chennai Super Kings [CSK]":
      "https://documents.iplt20.com/ipl/IPLHeadshot2024/102.png",
    "Royal Challengers Bengaluru [RCB]":
      "https://documents.iplt20.com/ipl/IPLHeadshot2024/94.png",
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
  useEffect(() => {
    const fetchLiveScore = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/aa");
        const data = await response.json();
        setMatches(data);
        setLoading(false); // Update loading state once data is fetched
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

    // Check if the oversString includes parentheses
    if (oversString.includes("(")) {
      // Extract the overs value from within the parentheses
      const match = oversString.match(/\((\d+(\.\d+)?)\)/);
      oversPlayed = match ? parseFloat(match[1]) : NaN;
    } else {
      // If no parentheses, assume the oversString is the overs value
      oversPlayed = parseFloat(oversString);
    }

    if (isNaN(oversPlayed) || oversPlayed === 0 || isNaN(runsScored)) {
      return "N/A";
    }
    console.log(runsScored, oversPlayed);
    const runRate = runsScored / oversPlayed;
    return runRate.toFixed(2);
  };

  const calculateStrikeRate = (scoreString) => {
    const [runsString, oversString] = scoreString.split("/");
    const runsScored = parseInt(runsString);

    let oversPlayed;

    // Check if the oversString includes parentheses
    if (oversString.includes("(")) {
      // Extract the overs value from within the parentheses
      const match = oversString.match(/\((\d+(\.\d+)?)\)/);
      oversPlayed = match ? parseFloat(match[1]) : NaN;
    } else {
      // If no parentheses, assume the oversString is the overs value
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
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="mt-48">
          {/* <h1 className="text-center lg:text-6xl md:text-6xl text-4xl mb-24 font-medium">
      Live Score
    </h1> */}
          <div className="lg:flex justify-center grid gap-20 md:gap-0">
            {matches.map((match) => (
              <div
                key={match.id}
                className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg lg:h-auto h-40 rounded-xl  lg:w-auto  pt-3 md:m-20 lg:m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center flex items-center relative pb-4 lg:pb-0"
              >
                {/* Dhoni Image on the left */}
                <img
                  src={teamCaptains[match.t1]}
                  className="lg:w-72 lg:h-72 md:w-60 md:h-60 w-48 h-48 drop-shadow-2xl mr-0 lg:mr-2 md:mr-16"
                  alt={match.t1}
                  style={{ marginTop: "-6rem" }}
                />

                {/* Content on the right */}
                <div className="mr-4">
                  <p className="font-medium text-black lg:text-xl md:text-2xl text-md mb-2 lg:mb-6">
                    {match.t1}
                  </p>
                  <div className="flex items-center">
                    {/* Image */}
                    <div className="lg:mx-4 rounded-full border-2 border-blue-400 lg:w-16 lg:h-16 md:w-20 md:h-20 w-12 h-12 flex justify-center items-center">
                      <img
                        src={teamLogos[match.t1]}
                        className="lg:w-10 lg:h-8 md:w-12 md:h-10 w-8 h-6 rounded-full"
                        alt="Team Logo"
                      />
                    </div>

                    {/* Score and Run Rate */}
                    <div className="grid gap-0">
                      <p className="lg:text-2xl md:text-2xl text-lg font-bold lg:pl-4 md:pl-4 pl-2">
                        {match.t1s}
                      </p>
                      <p className="lg:text-md md:text-lg text-[10px] text-gray-600 font-bold md:pl-4 lg:pl-4 pl-2">
                        Run-rate :{" "}
                        {match.t1s ? calculateRunRate(match.t1s) : "Yet to bat"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content for the second team */}
                <div>
                  <p className="font-medium text-black lg:text-xl md:text-2xl text-md mb-2 lg:mb-6 pl-6">
                    {match.t2}
                  </p>
                  <div className="flex items-center">
                    {/* Image */}
                    <div className="mx-4 rounded-full border-2 border-red-800 lg:w-16 lg:h-16 md:w-20 md:h-20 w-12 h-12 flex justify-center items-center">
                      <img
                        src={teamLogos[match.t2]}
                        className="lg:w-10 lg:h-12 md:w-12 md:h-16 w-8 h-10 rounded-full"
                        alt="Team Logo"
                      />
                    </div>

                    {/* Score and Run Rate */}
                    <div className="grid gap-0">
                      <p className="lg:text-2xl md:text-2xl text-lg font-bold lg:pl-4 md:pl-4 pl-2">
                        {match.t2s || "Yet to bat"}
                      </p>
                      <p className="lg:text-md md:text-lg text-[10px] text-gray-600 font-bold md:pl-4 lg:pl-4 pl-2">
                        Run-rate :{" "}
                        {match.t2s && match.t2s !== ""
                          ? calculateRunRate(match.t2s)
                          : match.t2s
                          ? "Yet to bat"
                          : ""}
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  src={teamCaptains[match.t2]}
                  className="lg:w-72 lg:h-72 md:w-60 md:h-60 w-48 h-48 drop-shadow-2xl md:mr-16"
                  alt={match.t2}
                  style={{ marginTop: "-6rem" }}
                />
              </div>
            ))}
          </div>

          <div className="flex m-3 flex-wrap justify-center gap-6 items-center">
            {matches.map((match) => (
              <>
                <div className="bg-white h-auto w-auto dark:text-gray-200 dark:bg-secondary-dark-bg md:w-48 p-6 pt-9 rounded-2xl flex items-center justify-between text-center">
                  <button
                    type="button"
                    style={{ color: "#2154bce6", backgroundColor: "#e5fafb" }}
                    className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
                  >
                    <GiCricketBat />
                  </button>
                  <div className="text-left">
                    <p className="mt-3">
                      <span className="text-lg font-semibold">
                        {calculateStrikeRate(match.t1s)}
                      </span>
                    </p>
                    <p className="text-xl font-bold text-gray-800 mt-1">
                      Strike Rate
                    </p>
                  </div>
                </div>
                <div className="bg-white h-auto w-auto dark:text-gray-200 dark:bg-secondary-dark-bg md:w-48 p-6 pt-9 rounded-2xl flex items-center justify-between text-center">
                  <button
                    type="button"
                    style={{ color: "#2154bce6", backgroundColor: "#e5fafb" }}
                    className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
                  >
                    <GoPrimitiveDot />
                  </button>
                  <div className="text-left">
                    <p className="mt-3">
                      <span className="text-lg font-semibold">
                        {getWicketsLost(match.t1s)}
                      </span>
                    </p>
                    <p className="text-xl font-bold text-gray-800 mt-1">
                      Wickets Lost
                    </p>
                  </div>
                </div>
                <div className="bg-white h-auto w-auto dark:text-gray-200 dark:bg-secondary-dark-bg md:w-48 p-6 pt-9 rounded-2xl flex items-center justify-between text-center">
                  <button
                    type="button"
                    style={{ color: "#2154bce6", backgroundColor: "#e5fafb" }}
                    className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
                  >
                    <IoIosMore />
                  </button>
                  <div className="text-left">
                    <p className="mt-3">
                      <span className="text-lg font-semibold">
                        {match.status}
                      </span>
                    </p>
                    <p className="text-xl font-bold text-gray-800 mt-1">
                      Match Status
                    </p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default LiveScore;
