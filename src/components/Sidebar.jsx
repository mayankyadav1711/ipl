import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import logo from "../components/images/ipl-logo-new-old.png";

import { useStateContext } from "../contexts/ContextProvider";
import { MdScore } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { GiGroundbreaker } from "react-icons/gi";
import { MdEmojiEvents } from "react-icons/md";
import { MdEventNote , MdTableChart} from "react-icons/md";
const links = [
  {
    links: [
      {
        name: "Score",
        route: "livescore",
        icon: <MdScore />,
      },
      {
        name: "Table",
        route: "pointtable",
        icon: <MdTableChart />,
      },
      {
        name: "Teams",
        route: "teams",
        icon: <RiTeamFill />,
      },
      {
        name: "Stadiums",
        route: "stadiums",
        icon: <GiGroundbreaker />,
      },
      {
        name: "Results",
        route: "results",
        icon: <MdEmojiEvents />,
      },
      {
        name: "Matches",
        route: "matches",
        icon: <MdEventNote />,
      },
    ],
  },
];

const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } =
    useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-3 pl-4 pt-3 pb-2.5 rounded-lg  text-white bg-gray-800 text-lg m-2";
  const normalLink =
    "flex items-center gap-3 pl-4 pt-3 pb-2.5 rounded-lg text-lg text-gray-100 dark:text-gray-200  hover:bg-gray-800 m-2";

  return (
    <div className="flex h-screen text items-center align-end bg-transparent z-10000 w-[15rem]">
      <div
        className="pl-1 h-[72vh] overflow-hidden bg-gradient-to-b from-blue-400 to-blue-900 mr-6 rounded-tr-3xl rounded-br-3xl ml-0"
        style={{ paddingRight: "60px" }}
      >
        <>
          <div className="align-end items-end">
            <div className="flex justify-between items-center ">
              <Link
                to="/"
                className="items-center gap-3 ml-5 mt-4 flex text-xl font-extrabold tracking-tight text-white "
              >
                <img src={logo} alt="ipl" />
              </Link>
              <TooltipComponent content="Menu" position="BottomCenter">
                <button
                  type="button"
                  onClick={() => setActiveMenu(!activeMenu)}
                  style={{ color: "white" }}
                  className="text-xl rounded-full p-6 hover:bg-gray-600 mt-4 block lg:hidden"
                >
                  <MdOutlineCancel />
                </button>
              </TooltipComponent>
            </div>
            <div className=" flex justify-end items-end align-bottom mt-20">
              {links.map((item) => (
                <div>
                  {item.links.map((link) => (
                    <NavLink
  to={`/${link.route}`} // Using the route property instead of name
  key={link.name}
  onClick={handleCloseSideBar}
  style={({ isActive }) => ({
    backgroundColor: isActive ? currentColor : '',
  })}
  className={({ isActive }) => (isActive ? activeLink : normalLink)}
>
  {link.icon}
  <span className="capitalize">{link.name}</span>
</NavLink>

                  ))}
                </div>
              ))}
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Sidebar;
