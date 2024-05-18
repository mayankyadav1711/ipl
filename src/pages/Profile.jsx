import React, { useState, useEffect } from "react";
import bg from "../components/images/motera.webp";
import dhoni from "../components/images/dhoni.png";
import Loader from "../components/Loader"
import toast from 'react-hot-toast';
//sample API response 
const sampleData = {
  "player": {
    "name": "MS Dhoni",
    "nationality": "Indian",
    "overview": [
      {
        "IPL Debut": "2008"
      },
      {
        "Specialization": "Wicketkeeper Batter"
      },
      {
        "Date of Birth": "07 July 1981"
      },
      {
        "Matches": "264"
      }
    ],
    "about": "MS Dhoni added another feather to his cap in 2021 edition of the league as CSK won their fourth title. \nAhead of the 2022 edition of the league, MS Dhoni was one of the four retained players by the franchise and he was retained for a sum of INR 12 crore. \nA batting powerhouse, MS Dhoni possesses the ability to destroy different bowling attacks on his own. The calmness and composure in his demeanor along with a sharp cricketing brain accounts for a lethal combination on the cricketing field and the glistening silverware in the trophy cabinets at CSK are a testimony to his extraordinary leadership skills. \n\nHe was the face of Chennai Super Kings for the first eight editions of the league, leading them to two titles (2010 & 2011) and four runner-up finishes. He then became the first player to be drafted by Rising Pune Supergiant in the ninth edition of the league. And, he once again became the first player to be retained by CSK ahead of the IPL Player Auction 2018. The 2018 season of the league had a fairytale ending with another glistening silverware added to the trophy cabinet of the Chennai Super Kings. \n\nThe 2019 edition of the league too saw the CSK reach the finals of the tournament under MS Dhoni’s leadership. \n\nWhile MS Dhoni has hung up his boots on a 16-year illustrious career for Team India, he was seen donning the CSK colours once again in 2020.",
    "image": "https://documents.iplt20.com/ipl/IPLHeadshot2024/57.png"
  }
}
const Profile = () => {
  const [playerData, setPlayerData] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState(bg);
  const [playAudio, setPlayAudio] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state

  // useEffect(() => {
  //   const fetchPlayerData = async () => {
  //     try {
  //       // Extract teamname and playercode from the URL
  //       const urlParams = window.location.pathname.split("/");
  //       const teamname = urlParams[2];
  //       const playercode = urlParams[3];

  //       const response = await fetch(
  //         `/api/player/${teamname}/${playercode}`
  //       );
  //       const data = await response.json();
  //       setPlayerData([data.player]); // Wrap player data in an array
  //       setBackgroundImage(getBackgroundImage(teamname));
  //       setLoading(false); // Update loading state once data is fetched

  //       if (teamname === "chennai-super-kings" && playercode === "1") {
  //         setPlayAudio(true);
  //         toast.success("Thala Supremacy 😎");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching player data:", error);
  //     }
  //   };

  //   fetchPlayerData();
  // }, []);
  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
      
       const teamname = "chennai-super-kings";
       
        setPlayerData([sampleData.player]); // Wrap player data in an array
        setBackgroundImage(getBackgroundImage(teamname));
        setLoading(false); // Update loading state once data is fetched
        
       
          setPlayAudio(true);
          toast.success("Thala Supremacy 😎");
        
      } catch (error) {
        console.error("Error fetching player data:", error);
      }
    };

    fetchPlayerData();
  }, []);

  const getBackgroundImage = (teamname) => {
    // Mapping object of team names and their background image URLs
    const teamBackgrounds = {
      "chennai-super-kings":
        "https://4kwallpapers.com/images/walls/thumbs_3t/4938.png",
      "mumbai-indians":
        "https://4kwallpapers.com/images/walls/thumbs_3t/4934.png",
      "delhi-capitals":
        "https://i.pinimg.com/736x/33/1a/5a/331a5a63cf1b7f78f53433ae778e1ca3.jpg",
      "sunrisers-hyderabad":
        "https://wallpapers.com/images/high/sunrisers-hyderabad-orange-and-white-logo-die68jcmuvtg8iir.webp",
      "royal-challengers-bangalore":
        "https://4kwallpapers.com/images/walls/thumbs_3t/4937.png",
      "gujarat-titans": "https://wallpapercave.com/wp/wp11073261.jpg",
      "kolkata-knight-riders":
        "https://4kwallpapers.com/images/walls/thumbs_3t/4940.png",
      "lucknow-super-giants":
        "https://imgk.timesnownews.com/media/Lucknow_Super_Giants_logo_1.png",
      "punjab-kings":
        "https://i.pinimg.com/736x/58/6e/a0/586ea0e5338219f6d4cebda77d789932.jpg",
      "rajasthan-royals":
        "https://wallpapers.com/images/high/rajasthan-royals-pink-background-pq1ac3zfrvq4wy4f.webp",
    };

    // Check if the team name exists in the mapping object
    if (teamname in teamBackgrounds) {
      return teamBackgrounds[teamname];
    } else {
      // Return default background image if team name not found
      return bg;
    }
  };

  return (
    <> 
    {loading ? (
    <Loader/>
   ) : (
    <main className="profile-page">
      <section className="relative block h-screen">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-20 bg-black"
          ></span>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
          style={{ transform: "translateZ(0px)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
      <section className="relative py-16 bg-blueGray-200">
        <div className="container mx-auto px-4">
          {playerData.map((player, index) => (
            <div
              key={index}
              className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-[25%]"
            >
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full px-4 lg:order-2 flex justify-center -mt-96">
                    <div className="relative">
                      <div
                        style={{
                          position: "relative",
                          overflow: "hidden",
                          width: "30rem",
                          height: "auto",
                          borderRadius: "1rem",
                        }}
                      >
                        <img
                          alt={player.name}
                          src={player.image}
                          className="w-full h-full object-cover"
                          
                        />
                        <div
                          style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            width: "100%",
                            height: "40%", // Adjust the height of the gradient layer as needed
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  {/* <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0 flex justify-center">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                         " Sixes : 100"
                        </span>
                        <span className="text-sm text-blueGray-400">Sixes</span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        "Fours : 200"
                        </span>
                        <span className="text-sm text-blueGray-400">Fours</span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          "Centuries : 500"
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Centuries
                        </span>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
                    {player.name}
                  </h3>
                

                  <div className="w-full px-4 lg:order-1">
                    <div className="flex flex-col justify-start py-4 lg:pt-4 pt-8">
                      {player.overview.map((item, index) => (
                        <div key={index} className="mb-2 text-blueGray-600">
                          {Object.entries(item).map(([key, value]) => (
                            <React.Fragment key={key}>
                              <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                             <span style={{
                              fontWeight: "bold",
                             }}> {key} </span> : {value}
                              <br />
                            </React.Fragment>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Additional details */}
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        {player.about}
                      </p>
                    </div>
                  </div>
                </div>
                {playAudio && (
                  <div className="audio-player text-center">
                    <audio autoPlay hidden>
                      <source
                        src="https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/Thala%20Theme%20Song%20_%20Bole%20Jo%20Koyal%20Bago%20Mein%20(Lyrics)%20-%20Rawmats%20Chudi%20jo%20Khanke.mp3?alt=media&token=a385f17a-99c9-463c-9d7c-4c37e3a52d51"
                        type="audio/mpeg"
                      />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )}
        </>
  );
};

export default Profile;
