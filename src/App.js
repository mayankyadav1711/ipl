import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import { IPLStandings } from "./pages";
import "./App.css";
import { useStateContext } from "./contexts/ContextProvider";
import Hero from "./pages/Hero";
import LiveScore from "./pages/Live Score";
import Stadiums from "./pages/Stadiums";
import Teams from "./pages/Teams";
import Players from "./pages/Players";
import Events from "./pages/Events";
import Upcoming from "./pages/Upcoming";
import Profile from "./pages/Profile";
import toast, { Toaster } from 'react-hot-toast';
const App = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <>
      <Toaster
  position="top-center"
  reverseOrder={false}
  gutter={8}
  containerClassName=""
  containerStyle={{ zIndex: '9999999999' }} // Ensure the container has a high z-index
  toastOptions={{
    className: '',
    duration: 5000,
    style: {
      background: 'white',
      color: 'black',
      fontSize: '16px',
    },
    success: {
      duration: 3000,
     
    },
  }}
/>
      <div className="fixed top-0 w-full z-50">
        <Navbar />
      </div>
      <div className={currentMode === "Dark" ? "dark" : ""}>
        <BrowserRouter>
          <div className="flex relative dark:bg-main-dark-bg">
            <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
              <TooltipComponent content="Settings" position="Top">
                <button
                  type="button"
                  onClick={() => setThemeSettings(true)}
                  className=""
                >
                  {/* <FiSettings /> */}
                </button>
              </TooltipComponent>
            </div>

            <div className=" fixed sidebar dark:bg-secondary-dark-bg lg:bg-main-bg bg-transparent flex justify-center align-middle items-center">
              <Sidebar />
            </div>

            <div
              className={
                activeMenu
                  ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen lg:ml-60 w-full  "
                  : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
              }
            >
              <div>
                {themeSettings && <ThemeSettings />}

                <Routes>
                  {/* dashboard  */}
                  <Route path="/" element={<Hero />} />
                  <Route path="/livescore" element={<LiveScore />} />

                  {/* pages  */}
                  <Route path="/stadiums" element={<Stadiums />} />
                  <Route path="/teams" element={<Teams />} />

                  <Route path="/teams/:teamname" element={<Players />} />
                  <Route path="/results" element={<Events />} />
                  <Route path="/matches" element={<Upcoming />} />
                  <Route
                    path="/teams/:teamname/:playercode"
                    element={<Profile />}
                  />
                  <Route path="/pointtable" element={<IPLStandings />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
