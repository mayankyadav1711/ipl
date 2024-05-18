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
const sampleData = [
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
    "played": "13",
    "won": "8",
    "lost": "5",
    "points": "16"
  },
  {
    "position": "3",
    "team": "SRH",
    "played": "13",
    "won": "7",
    "lost": "5",
    "points": "15"
  },
  {
    "position": "4",
    "team": "CSK",
    "played": "13",
    "won": "7",
    "lost": "6",
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
    "team": "LSG",
    "played": "14",
    "won": "7",
    "lost": "7",
    "points": "14"
  },
  {
    "position": "7",
    "team": "RCB",
    "played": "13",
    "won": "6",
    "lost": "7",
    "points": "12"
  },
  {
    "position": "8",
    "team": "GT",
    "played": "14",
    "won": "5",
    "lost": "7",
    "points": "12"
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
    "played": "14",
    "won": "4",
    "lost": "10",
    "points": "8"
  }
]
const IPLStandings = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  // useEffect(() => {
  //   const fetchTeamsData = async () => {
  //     try {
  //       const response = await fetch("/api/ipl-points-table");
  //       const data = await response.json();
        
  //       setTeams(data);
  //       setLoading(false); // Update loading state once data is fetched

  //     } catch (error) {
  //       console.error("Error fetching teams data:", error);
  //     }
  //   };

  //   fetchTeamsData();
  // }, []);
  useEffect(() => {
    const fetchTeamsData = async () => {
      try {
       
        
        setTeams(sampleData);
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
      <div className='flex flex-wrap justify-center mt-28'>
        {teams.map((team, index) => (
          <div key={index} className={`parent m-2 mb-10 ${getTeamClass(team.team)}`}>
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
