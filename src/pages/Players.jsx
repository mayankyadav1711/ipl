import React from 'react';

const Players = () => {
  // Player data
  const cskplayers = [
    {
      "name": "Ruturaj Gaikwad",
      "role": "Batter",
      "playercode": "5443",
      "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/102.png",
      "team":"CSK"
    },
    {
      "name": "Devon Conway",
      "role": "Batter",
      "playercode": "20572",
      "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/601.png",
      "team":"CSK"
    },
    {
      "name": "MS Dhoni",
      "role": "Wicketkeeper Batter",
      "playercode": "1",
      "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/57.png",
      "team":"CSK"
    },
    {
        "name": "Ajinkya Rahane",
        "role": "Batter",
        "playercode": "135",
        "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/44.png",
        "team":"CSK"
      },
      {
        "name": "Shaik Rasheed",
        "role": "Batter",
        "playercode": "5612",
        "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/778.png",
        "team":"CSK"
      },
      {
        "name": "Sameer Rizvi",
        "role": "Batter",
        "playercode": "20689",
        "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/1229.png",
        "team":"CSK"
      },
      {
        "name": "Avanish Rao Aravelly",
        "role": "Wicketkeeper Batter",
        "playercode": "20715",
        "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/2794.png",
        "team":"CSK"
      },
      {
        "name": "Ravindra Jadeja",
        "role": "All-rounder",
        "playercode": "9",
        "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/46.png",
        "team":"CSK"
      },
      {
        "name": "Mitchell Santner",
        "role": "All-rounder",
        "playercode": "1903",
        "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/75.png",
        "team":"CSK"
      },
      {
        "name": "Moeen Ali",
        "role": "All-rounder",
        "playercode": "1735",
        "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/206.png",
        "team":"CSK"
      },
      {
        "name": "Shivam Dube",
        "role": "All-rounder",
        "playercode": "5431",
        "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/211.png",
        "team":"CSK"
      },
      {
        "name": "Nishant Sindhu",
        "role": "All-Rounder",
        "playercode": "5615",
        "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/791.png",
        "team":"CSK"
      },
      {
        "name": "Ajay Mandal",
        "role": "All-Rounder",
        "playercode": "5811",
        "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/1931.png",
        "team":"CSK"
      },
      {
        "name": "Rachin Ravindra",
        "role": "allRounder",
        "playercode": "20684",
        "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/724.png",
        "team":"CSK"
      },
      {
        "name": "Shardul Thakur",
        "role": "allRounder",
        "playercode": "1745",
        "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/105.png",
        "team":"CSK"
      },
      {
        "name": "Daryl Mitchell",
        "role": "All-rounder",
        "playercode": "20617",
        "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/83.png",
        "team":"CSK"
      },
      {
        "name": "Richard Gleeson",
        "role": "Bowler",
        "playercode": "20730",
        "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/1219.png",
        "team":"CSK"
      },
      {
        "name": "Rajvardhan Hangargekar",
        "role": "Bowler",
        "playercode": "20571",
        "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/783.png",
        "team":"CSK"
      },
      {
        "name": "Deepak Chahar",
        "role": "Bowler",
        "playercode": "140",
        "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/91.png",
        "team":"CSK"
      },
      {
        "name": "Maheesh Theekshana",
        "role": "Bowler",
        "playercode": "20570",
        "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/629.png",
        "team":"CSK"
      },
      {
        "name": "Mukesh Choudhary",
        "role": "Bowler",
        "playercode": "20575",
        "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/970.png",
        "team":"CSK"
      },
      {
        "name": "Mustafizur Rahman",
        "role": "Bowler",
        "playercode": "1594",
        "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/258.png",
        "team":"CSK"
      },
      {
        "name": "Prashant Solanki",
        "role": "Bowler",
        "playercode": "20576",
        "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/972.png",
        "team":"CSK"
      },
      {
        "name": "Simarjeet Singh",
        "role": "Bowler",
        "playercode": "10789",
        "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/622.png",
        "team":"CSK"
      },
      {
        "name": "Tushar Deshpande",
        "role": "Bowler",
        "playercode": "3257",
        "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/539.png",
        "team":"CSK"
      },
      {
        "name": "Matheesha Pathirana",
        "role": "Bowler",
        "playercode": "20627",
        "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/1014.png",
        "team":"CSK"
      }
  ];
  const rcbplayers = [
    {
      "name": "Ruturaj Gaikwad",
      "role": "Batter",
      "playercode": "5443",
      "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/102.png",
      "team":"PK"
    },
    {
      "name": "Devon Conway",
      "role": "Batter",
      "playercode": "20572",
      "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/601.png",
      "team":"RR"
    },
    {
      "name": "MS Dhoni",
      "role": "Wicketkeeper Batter",
      "playercode": "1",
      "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/57.png",
      "team":"SRH"
    },
    
  ];
  const players = [...cskplayers, ...rcbplayers];
  const allRounders = players.filter(player => player.role.includes("All-rounder"));
  const batsmen = players.filter(player => player.role.includes("Batter") && !player.role.includes("Wicketkeeper"));
  const wicketkeeperBatsmen = players.filter(player => player.role.includes("Wicketkeeper Batter"));
  const bowlers = players.filter(player => player.role.includes("Bowler"));

  return (
    <div className="container lg:m-6 mt-6">
      <div className="flex flex-col gap-6">
       {/* All-rounders */}
{/* All-rounders */}
<h2 className="text-2xl font-bold mb-4">All-rounders</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  {allRounders.map((player, index) => (
    <div key={index} className={`book justify-center text-center ${player.team.toLowerCase()}`}>
      <div className="inline-block">
        {/* Separate the name and role into different <p> elements */}
        <p className="block max-w-[150px]">{player.name}</p>
        <p className="block max-w-[150px] ml-2">{player.role}</p>
      </div>
      <div className="cover flex flex-col"> 
        <img src={player.image} className="w-[100%] drop-shadow-2xl" alt={player.name} />
        {/* Display the name and role on different lines */}
        <p className='mt-4'>{player.name}</p>
        <p>{player.role}</p>
      </div>
    </div>
  ))}
</div>



        {/* Batsmen */}
        <h2 className="text-2xl font-bold mb-4">Batsmen</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {wicketkeeperBatsmen.map((player, index) => (
            <div key={index} className={`book justify-center text-center ${player.team.toLowerCase()}`}>
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
          {batsmen.map((player, index) => (
            <div key={index} className={`book justify-center text-center ${player.team.toLowerCase()}`}>
              <div className="inline-block">
                <p className="inline">{player.name}</p>
                <p className="inline ml-2">{player.role}</p>
              </div>
              <div className="cover flex flex-col"> 
                <img src={player.image} className="w-[100%] drop-shadow-2xl" alt={player.name} />
                <p className='mt-4'>{player.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bowlers */}
        <h2 className="text-2xl font-bold mb-4">Bowlers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {bowlers.map((player, index) => (
            <div key={index} className={`book justify-center text-center ${player.team.toLowerCase()}`}>
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
  );
};

export default Players;