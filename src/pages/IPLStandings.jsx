import React from 'react';
import kkrLogo from "../components/images/kkr.png";
import rrLogo from "../components/images/rr.png";
import cskLogo from "../components/images/csk.png";
import srhLogo from "../components/images/srh.png";
import dcLogo from "../components/images/dc.png";
import rcbLogo from "../components/images/rcb.png";
import lsgLogo from "../components/images/lsg.png";
import gtLogo from "../components/images/gt.png";
import pbksLogo from "../components/images/pk.png";
import miLogo from "../components/images/mi.png"

const IPLStandings = () => {
  // Sample team data
  const teams = [
    {
      "position": "1",
      "team": "KKR",
      "played": "13",
      "won": "9",
      "lost": "3",
      "points": "19"
    },
    {
      "position": "2",
      "team": "RR",
      "played": "12",
      "won": "8",
      "lost": "4",
      "points": "16"
    },
    {
      "position": "3",
      "team": "CSK",
      "played": "13",
      "won": "7",
      "lost": "6",
      "points": "14"
    },
    {
      "position": "4",
      "team": "SRH",
      "played": "12",
      "won": "7",
      "lost": "5",
      "points": "14"
    },
    {
      "position": "5",
      "team": "DC",
      "played": "14",
      "won": "7",
      "lost": "7",
      "points": "14"
    },
    {
      "position": "6",
      "team": "RCB",
      "played": "13",
      "won": "6",
      "lost": "7",
      "points": "12"
    },
    {
      "position": "7",
      "team": "LSG",
      "played": "13",
      "won": "6",
      "lost": "7",
      "points": "12"
    },
    {
      "position": "8",
      "team": "GT",
      "played": "13",
      "won": "5",
      "lost": "7",
      "points": "11"
    },
    {
      "position": "9",
      "team": "PBKS",
      "played": "13",
      "won": "5",
      "lost": "8",
      "points": "10"
    },
    {
      "position": "10",
      "team": "MI",
      "played": "13",
      "won": "4",
      "lost": "9",
      "points": "8"
    }
  ];
  const teamLogos = {
    "KKR": kkrLogo,
    "RR": rrLogo,
    "CSK": cskLogo,
    "SRH" :srhLogo,
    "DC" :dcLogo,
    "RCB" :rcbLogo,
    "LSG" :lsgLogo,
    "GT" :gtLogo,
    "PBKS" :pbksLogo,
    "MI" :miLogo,
  };
  // Function to generate class name based on team name
  const getTeamClass = (teamName) => {
    return teamName.toLowerCase(); // Example: 'CSK' will become 'csk'
  };

  return (
    <>
      <div className='flex flex-wrap justify-center'>
        {teams.map((team, index) => (
          <div key={index} className={`parent m-8 ${getTeamClass(team.team)}`}>
            <div className="parentcard">
              <div className="logo">
              <span className="parentcircle parentcircle3"></span>
                <span className="parentcircle parentcircle4"></span>
                <span className="parentcircle parentcircle5">
                <h1 className='text-2xl font-bold text-white'>{team.position}</h1>
                </span>
                {/* Use team logo image */}
                <img src={teamLogos[team.team]} alt={`${team.team} Logo`} />
                              </div>
              <div className="glass"></div>
              <div className="parentcontent flex text-center justify-center">
                <span className="title flex justify-center mt-6 text-5xl">{team.team}</span>
              </div>
              <div className="bottom">
                <div className='grid'>
                  <div className="social-buttons-container w-full">
                    {/* Sample social buttons */}
                    <button className="social-button .social-button1">{team.played}</button>
                    <button className="social-button .social-button2">{team.won}</button>
                    <button className="social-button .social-button3">{team.lost}</button>
                    <button className="social-button .social-button3">{team.points}</button>
                  </div>
                  <div className="social-buttons-container w-full mt-2 -mb-2">
                    <p className=' text-md'>Played</p>
                    <p className=' text-md'>Won</p>
                    <p className=' text-md'>Lost</p>
                    <p className=' text-md'>Points</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default IPLStandings;
