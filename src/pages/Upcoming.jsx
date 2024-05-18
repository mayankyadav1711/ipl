import React, { useState, useEffect } from 'react';
import csk from "../components/images/csk.png";
import rcb from "../components/images/rcb.png";
import vs from "../components/images/versus.png";
import trophy from "../components/images/trophy.svg";
import Loader from "../components/Loader.jsx";
//sample API response 
const sampleData = [
    {
      "date": "18",
      "time": "7:30",
      "venue": "M Chinnaswamy Stadium, Bengaluru",
      "homeTeam": "Royal Challengers Bengaluru",
      "awayTeam": "Chennai Super Kings"
    },
    {
      "date": "19",
      "time": "3:30",
      "venue": "Rajiv Gandhi International Stadium, Hyderabad",
      "homeTeam": "Sunrisers Hyderabad",
      "awayTeam": "Punjab Kings"
    },
    {
      "date": "19",
      "time": "7:30",
      "venue": "Barsapara Cricket Stadium, Guwahati",
      "homeTeam": "Rajasthan Royals",
      "awayTeam": "Kolkata Knight Riders"
    },
    {
      "date": "21",
      "time": "7:30",
      "venue": "Narendra Modi Stadium, Ahmedabad",
      "homeTeam": "TBD",
      "awayTeam": "TBD"
    },
    {
      "date": "22",
      "time": "7:30",
      "venue": "Narendra Modi Stadium, Ahmedabad",
      "homeTeam": "TBD",
      "awayTeam": "TBD"
    },
    {
      "date": "24",
      "time": "7:30",
      "venue": "MA Chidambaram Stadium, Chennai",
      "homeTeam": "TBD",
      "awayTeam": "TBD"
    },
    {
      "date": "26",
      "time": "7:30",
      "venue": "MA Chidambaram Stadium, Chennai",
      "homeTeam": "TBD",
      "awayTeam": "TBD"
    }
  ]
const teamLogos = {
    "Chennai Super Kings": "https://scores.iplt20.com/ipl/teamlogos/CSK.png",
    "Royal Challengers Bengaluru": "https://scores.iplt20.com/ipl/teamlogos/aFPMviEPyJ1710927747rcb.png",
    "Mumbai Indians": "https://scores.iplt20.com/ipl/teamlogos/MI.png",
    "Rajasthan Royals": "https://scores.iplt20.com/ipl/teamlogos/RR.png",
    "Sunrisers Hyderabad": "https://scores.iplt20.com/ipl/teamlogos/SRH.png",
    "Kolkata Knight Riders": "https://scores.iplt20.com/ipl/teamlogos/KKR.png",
    "Lucknow Super Giants": "https://scores.iplt20.com/ipl/teamlogos/gPLvfvSC1X1711457972LSG.png",
    "Gujarat Titans": "https://scores.iplt20.com/ipl/teamlogos/GT.png",
    "Delhi Capitals": "https://scores.iplt20.com/ipl/teamlogos/DC.png",
    "Punjab Kings": "https://scores.iplt20.com/ipl/teamlogos/PBKS.png",
    "TBD": "https://scores.iplt20.com/ipl/teamlogos/default-team-logo.png?v=4"
    // Add more team logos here as needed
};

const formatDateTime = (date, time) => {
    return `May ${date} at ${time}`;
};


const Upcoming = () => {
    const [activeTab, setActiveTab] = useState('stats');
    const [matchResults, setMatchResults] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        fetchMatchResults();
    }, []);

    // const fetchMatchResults = async () => {
    //     try {
    //         const response = await fetch('/api/new-matches');
    //         if (!response.ok) {
    //             throw new Error('Failed to fetch match results');
    //         }
    //         const data = await response.json();
    //         const matchesWithActiveTab = data.map(match => ({ ...match, activeTab: 'stats' }));

    //         setMatchResults(matchesWithActiveTab);
    //         setLoading(false); // Update loading state once data is fetched

    //     } catch (error) {
    //         console.error('Error fetching match results:', error);
    //     }
    // };
    const fetchMatchResults = async () => {
        try {
           
           
            const matchesWithActiveTab = sampleData.map(match => ({ ...match, activeTab: 'stats' }));

            setMatchResults(matchesWithActiveTab);
            setLoading(false); // Update loading state once data is fetched

        } catch (error) {
            console.error('Error fetching match results:', error);
        }
    };

    const handleTabClick = (matchIndex, tabId) => {
        setMatchResults(prevMatchResults => {
            const updatedMatchResults = [...prevMatchResults];
            updatedMatchResults[matchIndex].activeTab = tabId;
            return updatedMatchResults;
        });
    };

    return (
        <> 
         {loading ? (
         <Loader/>
        ) : (
        <div className='container ml-8 mt-20 flex flex-wrap gap-6'>
            {matchResults.map((match, index) => (
                <div key={index} className="w-[25rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="sm:hidden">
                        <label htmlFor={`tabs-${index}`} className="sr-only">Select tab</label>
                        <select id={`tabs-${index}`} className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option>Match</option>
                            <option>Venue</option>
                        </select>
                    </div>
                    <ul className="text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse" role="tablist">
                        <li className="w-full">
                            <button onClick={() => handleTabClick(index, 'stats')} type="button" role="tab" aria-controls={`stats-${index}`} aria-selected={match.activeTab === 'stats'} className={`inline-block w-full p-4 rounded-ss-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 ${match.activeTab === 'stats' ? 'text-gray-900 dark:text-white' : ''}`}>Match</button>
                        </li>
                        <li className="w-full">
                            <button onClick={() => handleTabClick(index, 'about')} type="button" role="tab" aria-controls={`about-${index}`} aria-selected={match.activeTab === 'about'} className={`inline-block w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 ${match.activeTab === 'about' ? 'text-gray-900 dark:text-white' : ''}`}>Venue</button>
                        </li>
                    </ul>
                    <div className="border-t border-gray-200 dark:border-gray-600">
                        <div className={`p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800 ${match.activeTab === 'stats' ? 'block' : 'hidden'}`} id={`stats-${index}`} role="tabpanel" aria-labelledby={`stats-tab-${index}`}>
                            <div className="flex justify-between items-center mb-6">
                            <div className="flex flex-col items-center h-40">
                                    <img src={teamLogos[match.homeTeam]} alt="Home Team Logo" className="w-20 mb-2" />
                                    <p className="text-xl font-semibold text-center w-36">{match.homeTeam}</p>
                                </div>
                                <img src={vs} alt='v/s' className="w-10" />
                                <div className="flex flex-col items-center h-40">
                                    <img src={teamLogos[match.awayTeam]} alt="Away Team Logo" className="w-20 mb-2" />
                                    <p className="text-xl font-semibold text-center w-36">{match.awayTeam}</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-md text-gray-900"><strong>Date:</strong> {formatDateTime(match.date, match.time)}</p>
                                <p className="text-md text-gray-900"><strong>Venue:</strong> {match.venue}</p>
                            </div>
                        </div>
                        <div className={`p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800 ${match.activeTab === 'about' ? 'block' : 'hidden'}`} id={`about-${index}`} role="tabpanel" aria-labelledby={`about-tab-${index}`}>
                            <div className="relative group">
                                <img src="https://img.freepik.com/free-photo/sport-football-arena-background_1409-5719.jpg?t=st=1715682039~exp=1715685639~hmac=88d6bfe0671c4462906aa9c50d206789369fc1623f30ad5e88886c38771aa748&w=740" alt='stadium' className="w-full h-auto rounded-lg" />
                                {/* Overlay layer */}
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 rounded-lg transition-opacity duration-300"></div>
                                {/* Square with arrow icon */}
                                <div className="absolute bottom-4 right-4 flex items-center justify-center bg-white opacity-0 group-hover:opacity-100 rounded-lg p-2 transition-opacity duration-300">
                                    <h1>{match.venue}</h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 ml-2 text-gray-800 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 15v-3l8 4-8 4v-3H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v7a2 2 0 01-2 2h-6"/>
                                    </svg>
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

export default Upcoming;
