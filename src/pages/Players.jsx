import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader"
const teamBackgrounds = {
  "chennai-super-kings": {
    bgImage: "https://4kwallpapers.com/images/walls/thumbs_3t/4938.png",
    textColor: "black"
  },
  "mumbai-indians": {
    bgImage: "https://4kwallpapers.com/images/walls/thumbs_3t/4934.png",
    textColor: "white"
  },
  "delhi-capitals": {
    bgImage: "https://i.pinimg.com/736x/33/1a/5a/331a5a63cf1b7f78f53433ae778e1ca3.jpg",
    textColor: "white"
  },
  "sunrisers-hyderabad": {
    bgImage: "https://wallpapers.com/images/high/sunrisers-hyderabad-orange-and-white-logo-die68jcmuvtg8iir.webp",
    textColor: "black"
  },
  "royal-challengers-bangalore": {
    bgImage: "https://4kwallpapers.com/images/walls/thumbs_3t/4937.png",
    textColor: "white"
  },
  "gujarat-titans": {
    bgImage: "https://wallpapercave.com/wp/wp11073261.jpg",
    textColor: "white"
  },
  "kolkata-knight-riders": {
    bgImage: "https://4kwallpapers.com/images/walls/thumbs_3t/4940.png",
    textColor: "white"
  },
  "lucknow-super-giants": {
    bgImage: "https://imgk.timesnownews.com/media/Lucknow_Super_Giants_logo_1.png",
    textColor: "black"
  },
  "punjab-kings": {
    bgImage: "https://i.pinimg.com/736x/58/6e/a0/586ea0e5338219f6d4cebda77d789932.jpg",
    textColor: "white"
  },
  "rajasthan-royals": {
    bgImage: "https://wallpapers.com/images/high/rajasthan-royals-pink-background-pq1ac3zfrvq4wy4f.webp",
    textColor: "black"
  }
};
const Players = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  const teamname = window.location.pathname.split("/").pop(); // Extract teamname from URL path

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/getteam/${teamname}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch player data");
        }
        const data = await response.json();
        setPlayers(data.players);
        setLoading(false); // Update loading state once data is fetched

      } catch (error) {
        console.error("Error fetching players:", error);
      }
    };

    fetchPlayers();
  }, [teamname]);

  // Filter players based on roles
  const batters = players.filter(
    (player) =>
      player.role.includes("Batter") ||
      player.role.includes("Wicketkeeper Batter")
  );
  const allRounders = players.filter((player) =>
    player.role.includes("All-rounder")
  );
  const bowlers = players.filter((player) => player.role.includes("Bowler"));
  const { bgImage, textColor } = teamBackgrounds[teamname] || {};
  return (
    <> 
    {loading ? (
    <Loader/>
   ) : (
    <div className="container lg:m-6 mt-6 ">
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold mb-4">Players</h2>

        {/* Display Batters */}
        <div>
          <h3 className="text-xl font-bold mb-2">Batters </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {batters.map((player, index) => (
              <Link to={`/teams/${teamname}/${player.playercode}`}>
                <div key={index} className={`book justify-center text-center `}
                 style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                
                    backgroundRepeat: 'no-repeat',
                    color: textColor
                  }}>
                  <div className="inline-block">
                    {/* <p className="block max-w-[150px]">{player.name}</p> */}
                    {/* <svg
                      width={150}
                      xmlns="http://www.w3.org/2000/svg"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      image-rendering="optimizeQuality"
                      shape-rendering="geometricPrecision"
                      text-rendering="geometricPrecision"
                      viewBox="0 0 6.827 6.827"
                    >
                      <path
                        fill="#424242"
                        d="m3.252 1.02.186-.14a.132.132 0 0 1 .184.025l.874 1.154.004.414-.398-.115-.875-1.154a.132.132 0 0 1 .025-.184z"
                      />
                      <path
                        fill="#424242"
                        d="M0 0h.175v1.132H0z"
                        transform="scale(.78676) rotate(-37.171 7.29 -6.71)"
                      />
                      <path
                        fill="#424242"
                        d="M4.835 2.783c-.034.209-1.106.626-1.108.116.595-.466 1.293-.045.853-.463-.345.065-.769-.018-1.022.212a.59.59 0 0 1-.26.316c-.126.068-.252.072-.39.07-.069 0-.187-.006-.249.023-.049.023-.071.077-.086.125-.09.295-.09.568-.086.871.004.29.003.56-.07.844l-.008.033-.544.73c-.045.062-.056.128-.02.196a.214.214 0 0 0 .131.104.17.17 0 0 0 .18-.054l.63-.74c.03-.042.071-.16.09-.212.032-.09.06-.182.092-.272l.094-.269.476.488.058.916v.004a.19.19 0 0 0 .078.118.199.199 0 0 0 .141.032h.002a.19.19 0 0 0 .118-.073.26.26 0 0 0 .037-.15l-.006-.953v-.003c-.02-.07-.17-.26-.214-.319a2.661 2.661 0 0 1-.128-.173l-.044-.065.019-.077a.61.61 0 0 0 .01-.05l.096-.633c.52-.153.954.067 1.252-.558a.1.1 0 0 0 0-.055.112.112 0 0 0-.025-.047.1.1 0 0 0-.097-.032z"
                      />
                      <path
                        fill="#64b5f6"
                        fill-rule="nonzero"
                        d="M3.44 2.397a.48.48 0 0 1-.473.49h-.011a.48.48 0 0 1-.479-.474v-.011a.48.48 0 0 1 .474-.478h.011a.48.48 0 0 1 .478.473z"
                      />
                      <path fill="none" d="M0 0h6.827v6.827H0z" />
                      <path fill="none" d="M.853.853h5.12v5.12H.853z" />
                    </svg> */}
                    <p className="block max-w-[150px] ml-2 text-center">
                      {player.role}
                    </p>
                  </div>
                  <div className="cover flex flex-col"
                   style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    color: textColor
                  }}>
                    <img
                      src={player.image}
                      className="w-[100%] drop-shadow-2xl"
                      alt={player.name}
                    />
                    <p className="mt-4">{player.name}</p>
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
              <div key={index} className={`book justify-center text-center `}
               style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
            
                    backgroundRepeat: 'no-repeat',
                    color: textColor
                  }}>
                <div className="inline-block">
                  {/* <p className="block max-w-[150px]">{player.name}</p> */}
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="cricket"
                  >
                    <path
                      fill="#78bd53"
                      d="M10.16,20.33a3,3,0,0,1-5,2.23,3,3,0,1,1,4-4.46A2.94,2.94,0,0,1,10.16,20.33Z"
                    ></path>
                    <path
                      fill="#78bd53"
                      d="M6.16 20.33a2.94 2.94 0 0 1-1 2.23 3 3 0 0 1 0-4.46A2.94 2.94 0 0 1 6.16 20.33zM10.16 20.33a2.94 2.94 0 0 1-1 2.23 3 3 0 0 1 0-4.46A2.94 2.94 0 0 1 10.16 20.33z"
                    ></path>
                    <path
                      fill="#fbc47c"
                      d="M19.2,21.91l-2.59,1.5A1,1,0,0,1,15.24,23l-5-8.66,2.27-.33a1,1,0,0,0,.64-.37l1.42-1.8,5,8.66A1,1,0,0,1,19.2,21.91Z"
                    ></path>
                    <path
                      fill="#e0e1ef"
                      d="M14.57,11.89l-1.42,1.8a1,1,0,0,1-.64.37l-2.27.33L7.69,10a1.67,1.67,0,0,1-.22-.84,1.65,1.65,0,0,1,.17-.75A1.67,1.67,0,0,0,7.59,6.8l-3-5.29,1.73-1,3,5.29a1.68,1.68,0,0,0,1.35.83A1.69,1.69,0,0,1,12,7.47Z"
                    ></path>
                    <path
                      fill="#2d80c4"
                      d="M7.64,8.38A1.67,1.67,0,0,0,7.59,6.8l-3-5.29,1.73-1,3,5.29a1.68,1.68,0,0,0,1.35.83Z"
                    ></path>
                    <path
                      fill="#bd632e"
                      d="M7.91,7.65h0a1.75,1.75,0,0,0,2-1.15h0"
                    ></path>
                    <path d="M20,20.3l-5-8.66L12.46,7.22A2.19,2.19,0,0,0,10.7,6.13a1.18,1.18,0,0,1-.94-.58L6.71.26A.51.51,0,0,0,6.4,0,.5.5,0,0,0,6,.07l-1.73,1a.5.5,0,0,0-.18.68L7.16,7a1.17,1.17,0,0,1,0,1.11,2.23,2.23,0,0,0,.06,2.06l2.55,4.42,5,8.66a1.5,1.5,0,0,0,2.05.54l2.59-1.5a1.49,1.49,0,0,0,.55-2ZM5.23,1.69l.86-.5L8.89,6a2.15,2.15,0,0,0,.42.5,1.23,1.23,0,0,1-1.06.61A2.12,2.12,0,0,0,8,6.55Zm2.9,8A1.18,1.18,0,0,1,8,9.13a1.15,1.15,0,0,1,.12-.53,2.12,2.12,0,0,0,.15-.42h0A2.23,2.23,0,0,0,10.18,7a2.06,2.06,0,0,0,.46.08,1.19,1.19,0,0,1,1,.59L14,11.84l-1.21,1.53a.52.52,0,0,1-.32.19l-1.93.28ZM19.19,21.17a.49.49,0,0,1-.23.3h0L16.36,23A.48.48,0,0,1,16,23a.5.5,0,0,1-.3-.23l-4.63-8,1.55-.22a1.52,1.52,0,0,0,1-.55l1-1.22,4.63,8A.49.49,0,0,1,19.19,21.17Zm-9.7-3.44h0a3.57,3.57,0,0,0-4.65,0,3.49,3.49,0,0,0,0,5.21h0A3.49,3.49,0,0,0,9.5,17.73Zm-4.33,4.1v0l0-.07a2.42,2.42,0,0,1-.19-.33l-.06-.14a2.48,2.48,0,0,1-.1-.32s0-.09,0-.14a2.3,2.3,0,0,1,0-1s0-.09,0-.14a2.47,2.47,0,0,1,.11-.33l.06-.13a2.43,2.43,0,0,1,.21-.36l0,0,0,0a2.51,2.51,0,0,1,0,3Zm3.25.65a2.57,2.57,0,0,1-2.5,0,3.45,3.45,0,0,0,0-4.31,2.45,2.45,0,0,1,2.51,0,3.45,3.45,0,0,0,0,4.31Zm1.2-2.63a2.3,2.3,0,0,1,0,1s0,.09,0,.14a2.46,2.46,0,0,1-.11.33l-.06.13a2.42,2.42,0,0,1-.21.36l0,0,0,0a2.51,2.51,0,0,1,0-3v0l0,.07a2.41,2.41,0,0,1,.19.33l.06.14a2.47,2.47,0,0,1,.1.32S9.6,19.81,9.61,19.86Z"></path>
                  </svg> */}
                  <p className="block max-w-[150px] ml-2">{player.role}</p>
                </div>
                <div className="cover flex flex-col"
                 style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    color: textColor
                  }}>
                  <img
                    src={player.image}
                    className="w-[100%] drop-shadow-2xl"
                    alt={player.name}
                  />
                  <p className="mt-4">{player.name}</p>
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
              <div key={index} className={`book justify-center text-center `}
               style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
               
                    backgroundRepeat: 'no-repeat',
                    color: textColor
                  }}>
                <div className="inline-block">
                  {/* <p className="block max-w-[150px]">{player.name}</p> */}
                  {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                    <circle cx="25" cy="25" r="24" fill="#e42f26" />
                    <path
                      fill="#bf2026"
                      d="M43.1 9.3s0 .1 0 0L9.4 43.1l-.1.1c-.2-.2-.5-.4-.7-.6-.4-.4-.8-.8-1.2-1.1-.2-.2-.4-.4-.6-.7 0 0 0-.1.1-.1C41.2 6.3 40.6 6.9 40.7 6.9c.6.5 1.3 1.2 1.8 1.8.2.1.4.4.6.6z"
                    />
                    <path
                      fill="#921a1c"
                      d="M42.5 8.6 8.6 42.5c-.4-.4-.8-.8-1.2-1.1l34-33.9c.4.3.8.7 1.1 1.1z"
                    />
                    <circle
                      cx="11.5"
                      cy="43.6"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 11.463 43.598)"
                    />
                    <circle
                      cx="13.6"
                      cy="41.4"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 13.629 41.431)"
                    />
                    <path
                      fill="#d8e6e9"
                      d="M13.8 41.3c-.1-.1-.3-.1-.5 0l-2 2c-.1.1-.1.3 0 .5.1.1.3.1.5 0l2-2c.1-.2.1-.4 0-.5z"
                    />
                    <circle
                      cx="15.2"
                      cy="39.9"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 15.207 39.854)"
                    />
                    <circle
                      cx="17.4"
                      cy="37.7"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 17.373 37.687)"
                    />
                    <path
                      fill="#d8e6e9"
                      d="M17.5 37.5c-.1-.1-.3-.1-.5 0l-2 2c-.1.1-.1.3 0 .5.1.1.3.1.5 0l2-2c.2-.1.2-.3 0-.5z"
                    />
                    <circle
                      cx="19"
                      cy="36.1"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 18.951 36.11)"
                    />
                    <circle
                      cx="21.1"
                      cy="33.9"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 21.118 33.943)"
                    />
                    <path
                      fill="#d8e6e9"
                      d="M21.3 33.8c-.1-.1-.3-.1-.5 0l-2 2c-.1.1-.1.3 0 .5.1.1.3.1.5 0l2-2c.1-.2.1-.4 0-.5z"
                    />
                    <circle
                      cx="22.7"
                      cy="32.4"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 22.696 32.365)"
                    />
                    <circle
                      cx="24.9"
                      cy="30.2"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 24.862 30.198)"
                    />
                    <path
                      fill="#d8e6e9"
                      d="M25 30c-.1-.1-.3-.1-.5 0l-2 2c-.1.1-.1.3 0 .5.1.1.3.1.5 0l2-2c.1-.1.1-.3 0-.5z"
                    />
                    <circle
                      cx="26.4"
                      cy="28.6"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 26.44 28.62)"
                    />
                    <circle
                      cx="28.6"
                      cy="26.5"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 28.607 26.454)"
                    />
                    <path
                      fill="#d8e6e9"
                      d="M28.8 26.3c-.1-.1-.3-.1-.5 0l-2 2c-.1.1-.1.3 0 .5.1.1.3.1.5 0l2-2c.1-.2.1-.4 0-.5z"
                    />
                    <circle
                      cx="30.2"
                      cy="24.9"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 30.185 24.876)"
                    />
                    <circle
                      cx="32.4"
                      cy="22.7"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 32.351 22.71)"
                    />
                    <path
                      fill="#d8e6e9"
                      d="M32.5 22.6c-.1-.1-.3-.1-.5 0l-2 2c-.1.1-.1.3 0 .5.1.1.3.1.5 0l2-2c.1-.2.1-.4 0-.5z"
                    />
                    <circle
                      cx="33.9"
                      cy="21.1"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 33.93 21.132)"
                    />
                    <circle
                      cx="36.1"
                      cy="19"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 36.096 18.965)"
                    />
                    <path
                      fill="#d8e6e9"
                      d="M36.2 18.8c-.1-.1-.3-.1-.5 0l-2 2c-.1.1-.1.3 0 .5.1.1.3.1.5 0l2-2c.2-.2.2-.4 0-.5z"
                    />
                    <circle
                      cx="37.7"
                      cy="17.4"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 37.674 17.387)"
                    />
                    <circle
                      cx="39.8"
                      cy="15.2"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 39.84 15.22)"
                    />
                    <path
                      fill="#d8e6e9"
                      d="M40 15.1c-.1-.1-.3-.1-.5 0l-2 2c-.1.1-.1.3 0 .5.1.1.3.1.5 0l2-2c.1-.2.1-.4 0-.5z"
                    />
                    <circle
                      cx="41.4"
                      cy="13.6"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 41.418 13.643)"
                    />
                    <circle
                      cx="43.6"
                      cy="11.5"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 43.585 11.477)"
                    />
                    <path
                      fill="#d8e6e9"
                      d="M43.7 11.3c-.1-.1-.3-.1-.5 0l-2 2c-.1.1-.1.3 0 .5.1.1.3.1.5 0l2-2c.2-.2.2-.4 0-.5z"
                    />
                    <circle
                      cx="13.5"
                      cy="45.3"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 13.464 45.34)"
                    />
                    <circle
                      cx="15.6"
                      cy="43.2"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 15.63 43.173)"
                    />
                    <path
                      fill="#d8e6e9"
                      d="M15.8 43c-.1-.1-.3-.1-.5 0l-2 2c-.1.1-.1.3 0 .5.1.1.3.1.5 0l2-2c.1-.2.1-.4 0-.5z"
                    />
                    <circle
                      cx="17.1"
                      cy="41.7"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 17.079 41.725)"
                    />
                    <circle
                      cx="19.2"
                      cy="39.6"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 19.245 39.559)"
                    />
                    <path
                      fill="#d8e6e9"
                      d="M19.4 39.4c-.1-.1-.3-.1-.5 0l-2 2c-.1.1-.1.3 0 .5.1.1.3.1.5 0l2-2c.1-.2.1-.4 0-.5z"
                    />
                    <circle
                      cx="20.8"
                      cy="38"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 20.823 37.98)"
                    />
                    <circle
                      cx="23"
                      cy="35.8"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 22.99 35.815)"
                    />
                    <path
                      fill="#d8e6e9"
                      d="M23.1 35.7c-.1-.1-.3-.1-.5 0l-2 2c-.1.1-.1.3 0 .5.1.1.3.1.5 0l2-2c.2-.2.2-.4 0-.5z"
                    />
                    <circle
                      cx="24.6"
                      cy="34.2"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 24.568 34.237)"
                    />
                    <circle
                      cx="26.7"
                      cy="32.1"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 26.734 32.07)"
                    />
                    <path
                      fill="#d8e6e9"
                      d="M26.9 31.9c-.1-.1-.3-.1-.5 0l-2 2c-.1.1-.1.3 0 .5.1.1.3.1.5 0l2-2c.1-.2.1-.4 0-.5z"
                    />
                    <circle
                      cx="28.3"
                      cy="30.5"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 28.312 30.492)"
                    />
                    <circle
                      cx="30.5"
                      cy="28.3"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 30.479 28.326)"
                    />
                    <path
                      fill="#d8e6e9"
                      d="M30.6 28.2c-.1-.1-.3-.1-.5 0l-2 2c-.1.1-.1.3 0 .5.1.1.3.1.5 0l2-2c.2-.2.2-.4 0-.5z"
                    />
                    <circle
                      cx="32.1"
                      cy="26.7"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 32.057 26.748)"
                    />
                    <circle
                      cx="34.2"
                      cy="24.6"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 34.223 24.581)"
                    />
                    <path
                      fill="#d8e6e9"
                      d="M34.4 24.4c-.1-.1-.3-.1-.5 0l-2 2c-.1.1-.1.3 0 .5.1.1.3.1.5 0l2-2c.1-.1.1-.3 0-.5z"
                    />
                    <circle
                      cx="35.8"
                      cy="23"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 35.8 23.003)"
                    />
                    <circle
                      cx="38"
                      cy="20.8"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 37.967 20.837)"
                    />
                    <path
                      fill="#d8e6e9"
                      d="M38.1 20.7c-.1-.1-.3-.1-.5 0l-2 2c-.1.1-.1.3 0 .5.1.1.3.1.5 0l2-2c.1-.2.1-.4 0-.5z"
                    />
                    <circle
                      cx="39.5"
                      cy="19.3"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 39.545 19.259)"
                    />
                    <circle
                      cx="41.7"
                      cy="17.1"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 41.712 17.093)"
                    />
                    <path
                      fill="#d8e6e9"
                      d="M41.9 16.9c-.1-.1-.3-.1-.5 0l-2 2c-.1.1-.1.3 0 .5.1.1.3.1.5 0l2-2c.1-.1.1-.3 0-.5z"
                    />
                    <circle
                      cx="43.2"
                      cy="15.6"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 43.16 15.645)"
                    />
                    <circle
                      cx="45.3"
                      cy="13.5"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 45.326 13.478)"
                    />
                    <path
                      fill="#d8e6e9"
                      d="M45.5 13.3c-.1-.1-.3-.1-.5 0l-2 2c-.1.1-.1.3 0 .5.1.1.3.1.5 0l2-2c.1-.1.1-.4 0-.5z"
                    />
                    <circle
                      cx="4.7"
                      cy="36.5"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 4.67 36.546)"
                    />
                    <circle
                      cx="6.8"
                      cy="34.4"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 6.837 34.38)"
                    />
                    <path
                      fill="#d8e6e9"
                      d="M7 34.2c-.1-.1-.3-.1-.5 0l-2 2c-.1.1-.1.3 0 .5.1.1.3.1.5 0l2-2c.1-.1.1-.3 0-.5z"
                    />
                    <circle
                      cx="8.3"
                      cy="32.9"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 8.285 32.932)"
                    />
                    <circle
                      cx="10.5"
                      cy="30.8"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 10.452 30.765)"
                    />
                    <path
                      fill="#d8e6e9"
                      d="M10.6 30.6c-.1-.1-.3-.1-.5 0l-2 2c-.1.2-.1.4 0 .5.1.1.3.1.5 0l2-2c.1-.2.1-.4 0-.5z"
                    />
                    <circle
                      cx="12"
                      cy="29.2"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 12.03 29.187)"
                    />
                    <circle
                      cx="14.2"
                      cy="27"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 14.196 27.021)"
                    />
                    <path
                      fill="#d8e6e9"
                      d="M14.4 26.9c-.1-.1-.3-.1-.5 0l-2 2c-.1.1-.1.3 0 .5.1.1.3.1.5 0l2-2c.1-.2.1-.4 0-.5z"
                    />
                    <circle
                      cx="15.8"
                      cy="25.4"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 15.774 25.443)"
                    />
                    <circle
                      cx="17.9"
                      cy="23.3"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 17.94 23.277)"
                    />
                    <path
                      fill="#d8e6e9"
                      d="M18.1 23.1c-.1-.1-.3-.1-.5 0l-2 2c-.1.1-.1.3 0 .5.1.1.3.1.5 0l2-2c.1-.2.1-.4 0-.5z"
                    />
                    <circle
                      cx="19.5"
                      cy="21.7"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 19.519 21.699)"
                    />
                    <circle
                      cx="21.7"
                      cy="19.5"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 21.685 19.532)"
                    />
                    <path
                      fill="#d8e6e9"
                      d="M21.8 19.4c-.1-.1-.3-.1-.5 0l-2 2c-.1.1-.1.3 0 .5.1.1.3.1.5 0l2-2c.2-.2.2-.4 0-.5z"
                    />
                    <circle
                      cx="23.3"
                      cy="18"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 23.263 17.954)"
                    />
                    <circle
                      cx="25.4"
                      cy="15.8"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 25.43 15.788)"
                    />
                    <path
                      fill="#d8e6e9"
                      d="M25.6 15.6c-.1-.1-.3-.1-.5 0l-2 2c-.1.1-.1.3 0 .5.1.1.3.1.5 0l2-2c.1-.1.1-.3 0-.5z"
                    />
                    <circle
                      cx="27"
                      cy="14.2"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 27.008 14.21)"
                    />
                    <circle
                      cx="29.2"
                      cy="12"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 29.174 12.044)"
                    />
                    <path
                      fill="#d8e6e9"
                      d="M29.3 11.9c-.1-.1-.3-.1-.5 0l-2 2c-.1.1-.1.3 0 .5.1.1.3.1.5 0l2-2c.2-.2.2-.4 0-.5z"
                    />
                    <circle
                      cx="30.8"
                      cy="10.5"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 30.752 10.466)"
                    />
                    <circle
                      cx="32.9"
                      cy="8.3"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 32.919 8.3)"
                    />
                    <path
                      fill="#d8e6e9"
                      d="M33.1 8.1c-.1-.1-.3-.1-.5 0l-2 2c-.1.1-.1.3 0 .5.1.1.3.1.5 0l2-2c.1-.1.1-.3 0-.5z"
                    />
                    <path
                      fill="#921a1c"
                      d="M34 6.5c-.2.2-.2.5 0 .8.2.2.5.2.8 0 .4-.6-.3-1.3-.8-.8zM36.2 4.3c-.5.5.3 1.3.8.8.1-.2-.3-1.3-.8-.8z"
                    />
                    <path
                      fill="#d8e6e9"
                      d="M36.2 4.5c-1.6 1.8-2.4 2.1-2 2.5.4.4.7-.4 2.5-2 .1-.1-.2-.8-.5-.5z"
                    />
                    <circle
                      cx="6.4"
                      cy="38.5"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 6.413 38.548)"
                    />
                    <circle
                      cx="8.6"
                      cy="36.4"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 8.58 36.381)"
                    />
                    <path
                      fill="#d8e6e9"
                      d="M8.7 36.2c-.1-.1-.3-.1-.5 0l-2 2c-.1.1-.1.3 0 .5.1.1.3.1.5 0l2-2c.2-.1.2-.3 0-.5z"
                    />
                    <circle
                      cx="10.2"
                      cy="34.8"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 10.157 34.804)"
                    />
                    <circle
                      cx="12.3"
                      cy="32.6"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 12.324 32.637)"
                    />
                    <path
                      fill="#d8e6e9"
                      d="M12.5 32.5c-.1-.1-.3-.1-.5 0l-2 2c-.1.1-.1.3 0 .5.1.1.3.1.5 0l2-2c.1-.2.1-.4 0-.5z"
                    />
                    <circle
                      cx="13.9"
                      cy="31.1"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 13.902 31.06)"
                    />
                    <circle
                      cx="16.1"
                      cy="28.9"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 16.068 28.893)"
                    />
                    <path
                      fill="#d8e6e9"
                      d="M16.2 28.7c-.1-.1-.3-.1-.5 0l-2 2c-.1.1-.1.3 0 .5.1.1.3.1.5 0l2-2c.1-.1.1-.3 0-.5z"
                    />
                    <circle
                      cx="17.6"
                      cy="27.3"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 17.646 27.315)"
                    />
                    <circle
                      cx="19.8"
                      cy="25.1"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 19.812 25.148)"
                    />
                    <path
                      fill="#d8e6e9"
                      d="M20 25c-.1-.1-.3-.1-.5 0l-2 2c-.1.1-.1.3 0 .5.1.1.3.1.5 0l2-2c.1-.2.1-.4 0-.5z"
                    />
                    <circle
                      cx="21.4"
                      cy="23.6"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 21.39 23.57)"
                    />
                    <circle
                      cx="23.6"
                      cy="21.4"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 23.557 21.404)"
                    />
                    <path
                      fill="#d8e6e9"
                      d="M23.7 21.2c-.1-.1-.3-.1-.5 0l-2 2c-.1.1-.1.3 0 .5.1.1.3.1.5 0l2-2c.1-.1.1-.3 0-.5z"
                    />
                    <circle
                      cx="25.1"
                      cy="19.8"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 25.135 19.826)"
                    />
                    <circle
                      cx="27.3"
                      cy="17.7"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 27.301 17.66)"
                    />
                    <path
                      fill="#d8e6e9"
                      d="M27.5 17.5c-.1-.1-.3-.1-.5 0l-2 2c-.1.1-.1.3 0 .5.1.1.3.1.5 0l2-2c.1-.2.1-.4 0-.5z"
                    />
                    <circle
                      cx="28.9"
                      cy="16.1"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 28.88 16.082)"
                    />
                    <circle
                      cx="31"
                      cy="13.9"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 31.046 13.915)"
                    />
                    <path
                      fill="#d8e6e9"
                      d="M31.2 13.8c-.1-.1-.3-.1-.5 0l-2 2c-.1.1-.1.3 0 .5.1.1.3.1.5 0l2-2c.1-.2.1-.4 0-.5z"
                    />
                    <circle
                      cx="32.6"
                      cy="12.3"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 32.624 12.337)"
                    />
                    <circle
                      cx="34.8"
                      cy="10.2"
                      r=".5"
                      fill="#921a1c"
                      transform="rotate(-45.001 34.79 10.171)"
                    />
                    <path
                      fill="#d8e6e9"
                      d="M34.9 10c-.1-.1-.3-.1-.5 0l-2 2c-.1.1-.1.3 0 .5.1.1.3.1.5 0l2-2c.2-.2.2-.4 0-.5z"
                    />
                    <path
                      fill="#921a1c"
                      d="M36 8.2c-.2.2-.2.5 0 .8.2.2.5.2.8 0 .4-.5-.3-1.3-.8-.8zM38.2 6c-.5.5.3 1.3.8.8.1-.2-.3-1.2-.8-.8z"
                    />
                    <path
                      fill="#d8e6e9"
                      d="m38.2 6.3-2 2c-.1.1-.1.3 0 .5.1.1.3.1.5 0l2-2c.3-.4-.2-.8-.5-.5z"
                    />
                    <path
                      fill="#010101"
                      d="M49 25c0 13.3-10.8 24-24 24-7.6 0-14.5-3.6-18.8-9.1C10.3 43.1 15.4 45 21 45c13.3 0 24-10.7 24-24 0-5.6-1.9-10.8-5.2-14.8C45.4 10.6 49 17.4 49 25z"
                      opacity=".1"
                    />
                    <path
                      fill="#fff"
                      d="M41.2 16.1c0 13.6-11.5 24.7-25.7 24.7-3.6 0-7-.7-10-1.9-3-4.2-4.5-9-4.5-13.9C1 5.5 22.9-5.5 38.5 5.2c1.7 3.3 2.7 7 2.7 10.9z"
                      opacity=".1"
                    />
                    <path
                      fill="#fff"
                      d="M35.4 10.3C35.4 24 23.9 35 9.6 35c-2.4 0-4.7-.3-6.8-.9C1.6 31.3 1 28.2 1 25 1 7.8 18.5-3.7 34.2 2.8c.8 2.4 1.2 4.9 1.2 7.5z"
                      opacity=".1"
                    />
                    <ellipse
                      cx="16.4"
                      cy="16.9"
                      fill="#fff"
                      opacity=".1"
                      rx="12.7"
                      ry="8.3"
                      transform="rotate(-45.001 16.444 16.908)"
                    />
                  </svg> */}
                  <p className="block max-w-[150px] ml-2">{player.role}</p>
                </div>
                <div className="cover flex flex-col"
                 style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    color: textColor
                  }}>
                  <img
                    src={player.image}
                    className="w-[100%] drop-shadow-2xl"
                    alt={player.name}
                  />
                  <p className="mt-4">{player.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )}
        </>
  );
};

export default Players;
