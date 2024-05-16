import React, {useEffect,useState} from 'react';
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
import Loader from "../components/Loader"
const IPLStandings = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchTeamsData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/ipl-points-table");
        const data = await response.json();
        
        setTeams(data);
        setLoading(false); // Update loading state once data is fetched

      } catch (error) {
        console.error("Error fetching teams data:", error);
      }
    };

    fetchTeamsData();
  }, []);



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
      {loading ? (
         <Loader/>
        ) : (
      <div className='flex flex-wrap justify-center mt-20'>
        {teams.map((team, index) => (
          <div key={index} className={`parent m-8 ${getTeamClass(team.team)}`}>
            <div className="parentcard">
              <div className="logo">
              <span className="parentcircle parentcircle3"></span>
                <span className="parentcircle parentcircle4"></span>
                <span className="parentcircle parentcircle5">
                <h1 className='text-4xl font-extrabold text-white text-stroke-black' >{team.position}</h1>
                </span>
                {/* Use team logo image */}
                <img src={teamLogos[team.team]} alt={`${team.team} Logo`} />
                              </div>
              <div className="glass"></div>
              <div className="parentcontent flex text-center justify-center">
                {/* <span className="title flex justify-center mt-6 text-5xl">{team.team}</span> */}
              </div>
              <div className="bottom">
                <div className='grid'>
                  <div className="social-buttons-container w-full">
                    {/* Sample social buttons */}
                    <button className="social-button .social-button1 bg-white">{team.played}</button>
                    <button className="social-button .social-button2 bg-green-400">{team.won}</button>
                    <button className="social-button .social-button3 bg-red-400">{team.lost}</button>
                    <button className="social-button .social-button3 bg-white">{team.points}</button>
                  </div>
                  <div className="social-buttons-container w-full mt-2 -mb-2 ">
                    <p className=' text-md text-white '>Played</p>
                    <p className=' text-md text-white'>Won</p>
                    <p className=' text-md text-white'>Lost</p>
                    <p className=' text-md text-white'>Points</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
    </>
  );
};

export default IPLStandings;
