import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
const Players = () => {
  const [players, setPlayers] = useState([]);
 
  const teamname = window.location.pathname.split('/').pop(); // Extract teamname from URL path

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/getteam/${teamname}`);
        if (!response.ok) {
          throw new Error('Failed to fetch player data');
        }
        const data = await response.json();
        setPlayers(data.players);
      } catch (error) {
        console.error('Error fetching players:', error);
      }
    };

    fetchPlayers();
  }, [teamname]);

  // Filter players based on roles
  const batters = players.filter(player => player.role.includes("Batter") || player.role.includes("Wicketkeeper Batter"));
  const allRounders = players.filter(player => player.role.includes("All-rounder"));
  const bowlers = players.filter(player => player.role.includes("Bowler"));

  return (
    <div className="container lg:m-6 mt-6">
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold mb-4">Players</h2>

        {/* Display Batters */}
        <div>
          <h3 className="text-xl font-bold mb-2">Batters </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {batters.map((player, index) => (
              <Link to={`/teams/${teamname}/${player.playercode}`}>
              <div key={index} className={`book justify-center text-center `}>
                <div className="inline-block">
                  <p className="block max-w-[150px]">{player.name}</p>
                  <p className="block max-w-[150px] ml-2">{player.role}</p>
                </div>
                <div className="cover flex flex-col"> 
                  <img src={player.image} className="w-[100%] drop-shadow-2xl" alt={player.name} />
                  <p className='mt-4'>{player.name}</p>
                </div>
              </div>
              </Link> 
            ))}
          </div>
        </div>

        {/* Display All-rounders */}
        <div>
          <h3 className="text-xl font-bold mb-2">All-rounders</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {allRounders.map((player, index) => (
              <div key={index} className={`book justify-center text-center `}>
                <div className="inline-block">
                  <p className="block max-w-[150px]">{player.name}</p>
                  <p className="block max-w-[150px] ml-2">{player.role}</p>
                </div>
                <div className="cover flex flex-col"> 
                  <img src={player.image} className="w-[100%] drop-shadow-2xl" alt={player.name} />
                  <p className='mt-4'>{player.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Display Bowlers */}
        <div>
          <h3 className="text-xl font-bold mb-2">Bowlers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {bowlers.map((player, index) => (
              <div key={index} className={`book justify-center text-center `}>
                <div className="inline-block">
                  <p className="block max-w-[150px]">{player.name}</p>
                  <p className="block max-w-[150px] ml-2">{player.role}</p>
                </div>
                <div className="cover flex flex-col"> 
                  <img src={player.image} className="w-[100%] drop-shadow-2xl" alt={player.name} />
                  <p className='mt-4'>{player.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Players;
