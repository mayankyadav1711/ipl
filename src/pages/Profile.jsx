import React from 'react';
import bg from "../components/images/motera.webp";
import dhoni from "../components/images/dhoni.png";

const playerData = [
    {
      name: "Mahendra Singh Dhoni",
      image: dhoni,
      stats: {
        sixes: 22,
        fours: 10,
        centuries: 89
      },
      overview: {
        matches: 263,
        iplDebut: 2008,
        dateOfBirth: "07 July 1981",
        specialization:"Wicketkeeper Batter"
      },
      bio: "MS Dhoni added another feather to his cap in 2021 edition of the league as CSK won their fourth title. Ahead of the 2022 edition of the league, MS Dhoni was one of the four retained players by the franchise and he was retained for a sum of INR 12 crore. A batting powerhouse, MS Dhoni possesses the ability to destroy different bowling attacks on his own. The calmness and composure in his demeanor along with a sharp cricketing brain accounts for a lethal combination on the cricketing field and the glistening silverware in the trophy cabinets at CSK are a testimony to his extraordinary leadership skills. He was the face of Chennai Super Kings for the first eight editions of the league, leading them to two titles (2010 & 2011) and four runner-up finishes. He then became the first player to be drafted by Rising Pune Supergiant in the ninth edition of the league. And, he once again became the first player to be retained by CSK ahead of the IPL Player Auction 2018. The 2018 season of the league had a fairytale ending with another glistening silverware added to the trophy cabinet of the Chennai Super Kings. The 2019 edition of the league too saw the CSK reach the finals of the tournament under MS Dhoni’s leadership. While MS Dhoni has hung up his boots on a 16-year illustrious career for Team India, he was seen donning the CSK colours once again in 2020."
    }
  ];
  

function Profile() {
  return (
    <main className="profile-page">
      <section className="relative block h-screen">
        <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{backgroundImage: `url('${bg}')`}}>
          <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
        </div>
        <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{ transform: 'translateZ(0px)' }}>
          <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
      </section>
      <section className="relative py-16 bg-blueGray-200">
        <div className="container mx-auto px-4">
          {playerData.map((player, index) => (
            <div key={index} className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-[25%]">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full px-4 lg:order-2 flex justify-center -mt-96">
                    <div className="relative">
                      <div style={{
                        position: 'relative',
                        overflow: 'hidden',
                        width: '30rem', // Adjust width as needed
                        height: 'auto', // Ensure the height is auto to maintain aspect ratio
                        borderRadius: '1rem', // Optional: add border radius
                      }}>
                        <img
                          alt={player.name}
                          src={player.image}
                          className='w-full h-full object-cover'
                        />
                        <div
                          style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            height: '40%', // Adjust the height of the gradient layer as needed
                            
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
  <div className="py-6 px-3 mt-32 sm:mt-0 flex justify-center">
    <div className="mr-4 p-3 text-center">
      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{player.stats.sixes}</span><span className="text-sm text-blueGray-400">Sixes</span>
    </div>
    <div className="mr-4 p-3 text-center">
      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{player.stats.fours}</span><span className="text-sm text-blueGray-400">Fours</span>
    </div>
    <div className="lg:mr-4 p-3 text-center">
      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{player.stats.centuries}</span><span className="text-sm text-blueGray-400">Centuries</span>
    </div>
  </div>
</div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
                    {player.name}
                  </h3>
                  <h5 className="font-semibold leading-normal mb-2 text-blueGray-700">
                    {player.overview.specialization}
                  </h5>
                  
                  <div className="w-full px-4 lg:order-1">
  <div className="flex flex-col justify-start py-4 lg:pt-4 pt-8">
    <div className="mb-2 text-blueGray-600">
      <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>Matches - {player.overview.matches}
    </div>
    <div className="mb-2 text-blueGray-600">
      <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>IPL Debut - {player.overview.iplDebut}
    </div>
    <div className="mb-2 text-blueGray-600">
      <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>Date of Birth - {player.overview.dateOfBirth}
    </div>
  </div>
</div>

                  {/* Additional details */}
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        {player.bio}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Profile;
