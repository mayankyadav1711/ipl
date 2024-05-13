import React, { useState } from 'react';
import csk from "../components/images/csk.png"
import rcb from "../components/images/rcb.png"
import vs from "../components/images/versus.png"
import motera from "../components/images/motera.webp"
import trophy from "../components/images/trophy.svg"

const Events = () => {
    const [activeTab, setActiveTab] = useState('stats');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div className="w-[25rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">Select tab</label>
                <select id="tabs" className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>Match</option>
                    <option>Venue</option>
                    <option>Results</option>
                </select>
            </div>
            <ul className="text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse" role="tablist">
                <li className="w-full">
                    <button onClick={() => handleTabClick('stats')} type="button" role="tab" aria-controls="stats" aria-selected={activeTab === 'stats'} className={`inline-block w-full p-4 rounded-ss-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 ${activeTab === 'stats' ? 'text-gray-900 dark:text-white' : ''}`}>Match</button>
                </li>
                <li className="w-full">
                    <button onClick={() => handleTabClick('about')} type="button" role="tab" aria-controls="about" aria-selected={activeTab === 'about'} className={`inline-block w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 ${activeTab === 'about' ? 'text-gray-900 dark:text-white' : ''}`}>Venue</button>
                </li>
                <li className="w-full">
                    <button onClick={() => handleTabClick('faq')} type="button" role="tab" aria-controls="faq" aria-selected={activeTab === 'faq'} className={`inline-block w-full p-4 rounded-se-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 ${activeTab === 'faq' ? 'text-gray-900 dark:text-white' : ''}`}>Results</button>
                </li>
            </ul>
            <div id="fullWidthTabContent" className="border-t border-gray-200 dark:border-gray-600">
                <div className={`p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800 ${activeTab === 'stats' ? 'block' : 'hidden'}`} id="stats" role="tabpanel" aria-labelledby="stats-tab">
                    <div className="flex justify-between items-center mb-6">
                    <div className="flex flex-col items-center">
                            <img src={csk} alt="CSK Logo" className="w-20 mb-2" />
                            <p className="text-xl font-semibold">CSK</p>
                        </div>
                        <img src={vs} alt='v/s' className="w-10" />
                        <div className="flex flex-col items-center">
                            <img src={rcb} alt="RCB Logo" className="w-12 mb-2" />
                            <p className="text-xl font-semibold">RCB</p>
                        </div>
                        
                    </div>
                    <div>
                            <p className="text-md text-gray-900"><strong>Date:</strong> May 15, 2024</p>
                            <p className="text-md text-gray-900"><strong>Time:</strong> 7:00 PM</p>
                            <p className="text-md text-gray-900"><strong>Venue:</strong> Stadium XYZ</p>
                        </div>
                    </div>
                    <div id="fullWidthTabContent" className="border-t border-gray-200 dark:border-gray-600">
                <div className={`p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800 ${activeTab === 'about' ? 'block' : 'hidden'}`} id="about" role="tabpanel" aria-labelledby="about-tab">
                    <div className="relative group">
                        <img src={motera} alt='stadium' className="w-full h-auto rounded-lg" />
                        {/* Overlay layer */}
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 rounded-lg transition-opacity duration-300"></div>
                        {/* Square with arrow icon */}
                        <div className="absolute bottom-4 right-4 flex items-center justify-center bg-white opacity-0 group-hover:opacity-100 rounded-lg p-2 transition-opacity duration-300">
                        <h1>Motera Stadium</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 ml-2 text-gray-800 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 15v-3l8 4-8 4v-3H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v7a2 2 0 01-2 2h-6"/>
                            </svg>
                        </div>
                    </div>
                </div>
                </div>
                <div className={`items-center justify-center flex p-4 bg-white rounded-lg dark:bg-gray-800 ${activeTab === 'faq' ? 'block' : 'hidden'}`} id="faq" role="tabpanel" aria-labelledby="faq-tab">
                   <img src={trophy} alt='winner' className='w-40' />
                   <h1 className='font-bold text-xl'>Chennai Super Kings</h1>
                </div>
            </div>
        </div>
    );
};

export default Events;
