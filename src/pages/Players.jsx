import React from 'react';

const Players = () => {
  // Player data
  const players = [
    {
        "name": "MS Dhoni",
      "role": "Wicketkeeper Batter",
      "playercode": "1",
      "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/57.png",
        "team":"CSK"
      },
      {
        "name": "Rajat Patidar",
        "role": "Batter",
        "playercode": "5471",
        "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/597.png",
        "team":"RCB"
      },
      {
        "name": "Virat Kohli",
        "role": "Batter",
        "playercode": "164",
        "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/2.png",
        "team":"RCB"
      },
      {
        "name": "Rishabh Pant",
      "role": "Wicketkeeper Batter",
      "playercode": "2972",
      "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/18.png",
        "team":"DC"
      },
      {
        "name": "Shubman Gill",
        "role": "Batter",
        "playercode": "3761",
        "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/62.png",
        "team":"GT"
      },
      {
        "name": "Shikhar Dhawan",
      "role": "Batter",
      "playercode": "41",
      "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/11.png",
        "team":"PK"
      },
      {
        "name": "Rinku Singh",
      "role": "Batter",
      "playercode": "3830",
      "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/152.png",
        "team":"KKR"
      },
      {
        "name": "Rohit Sharma",
      "role": "Batter",
      "playercode": "107",
      "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/6.png",
        "team":"MI"
      },
      {
        "name": "KL Rahul",
      "role": "Wicketkeeper Batter",
      "playercode": "1125",
      "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/19.png",
        "team":"LSG"
      },
      {
        "name": "Sanju Samson",
      "role": "Wicketkeeper Batter",
      "playercode": "258",
      "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/190.png",
        "team":"RR"
      },
      {
        "name": "Washington Sundar",
      "role": "All-rounder",
      "playercode": "2973",
      "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/20.png",
        "team":"SRH"
      },
      {
        "name": "Cameron Green",
        "role": "All-Rounder",
        "playercode": "5602",
        "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/550.png",
        "team":"RCB"
      },
      {
        "name": "Swapnil Singh",
        "role": "Bowling all-rounder",
        "playercode": "3180",
        "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/1483.png",
        "team":"RCB"
      },
      {
        "name": "Mayank Dagar",
        "role": "All-rounder",
        "playercode": "2968",
        "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/1547.png",
        "team":"RCB"
      },
      {
        "name": "Manoj Bhandage",
        "role": "All-Rounder",
        "playercode": "5645",
        "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/1485.png",
        "team":"RCB"
      },
      {
        "name": "Akash Deep",
        "role": "Bowler",
        "playercode": "14800",
        "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/1007.png",
        "team":"RCB"
      },
      {
        "name": "Alzarri Joseph",
        "role": "Bowler",
        "playercode": "3098",
        "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/229.png",
        "team":"RCB"
      },
      {
        "name": "Lockie Ferguson",
        "role": "Bowler",
        "playercode": "3729",
        "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/69.png",
        "team":"RCB"
      },
      {
        "name": "Mohammed Siraj",
        "role": "Bowler",
        "playercode": "3840",
        "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/63.png",
        "team":"RCB"
      },
      {
        "name": "Yash Dayal",
        "role": "",
        "playercode": "20591",
        "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/978.png",
        "team":"RCB"
      },
      {
        "name": "Tom Curran",
        "role": "Bowler",
        "playercode": "3646",
        "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/309.png",
        "team":"RCB"
      },
      {
        "name": "Reece Topley",
        "role": "Bowler",
        "playercode": "5607",
        "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/574.png",
        "team":"RCB"
      },
      {
        "name": "Himanshu Sharma",
        "role": "Bowler",
        "playercode": "5628",
        "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/1568.png",
        "team":"RCB"
      },
      {
        "name": "Vyshak Vijay Kumar",
        "role": "Bowler",
        "playercode": "1097",
        "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/2034.png",
        "team":"RCB"
      },
      {
        "name": "Rajan Kumar",
        "role": "Bowler",
        "playercode": "5657",
        "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/1503.png",
        "team":"RCB"
      }
  ];

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
     
      <div className="inline-block justify-center items-center">
        {/* Separate the name and role into different <p> elements */}
        <p className="block max-w-[150px]">{player.name}</p>
        <p className="block max-w-[150px] ml-2">{player.role}</p>
        <button class="btn-53">
  <div class="original">Know More</div>
  <div class="letters">
    
    <span>C</span>
    <span>L</span>
    <span>I</span>
    <span>C</span>
    <span>K</span>
  </div>
</button> 
      </div>
      <div className="cover flex flex-col"> 
        <img src={player.image} className="w-[100%] drop-shadow-2xl" alt={player.name} />
        {/* Display the name and role on different lines */}
        <p className='mt-4'>{player.name}</p>
      

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