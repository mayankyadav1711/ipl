import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white bg-gray-800 text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-100 dark:text-gray-200  hover:bg-gray-800 m-2';

  return (
    <div className="flex h-screen items-center align-middle bg-transparent">
      <div className="pl-3 h-[80vh] overflow-auto bg-gradient-to-b from-blue-400 to-blue-900 my-4 rounded-tr-3xl rounded-br-3xl ml-0" style={{ paddingRight: '60px' }}>
        {activeMenu && (
          <>
            <div className="flex justify-between items-center">
              <Link to="/" onClick={handleCloseSideBar} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight text-white ">
                <SiShopware /> <span>IPL</span>
              </Link>
              <TooltipComponent content="Menu" position="BottomCenter">
                <button
                  type="button"
                  onClick={() => setActiveMenu(!activeMenu)}
                  style={{ color: "white" }}
                  className="text-xl rounded-full p-3 hover:bg-gray-600 mt-4 block lg:hidden"
                >
                  <MdOutlineCancel />
                </button>
              </TooltipComponent>
            </div>
            <div className="mt-10 ">
              {links.map((item) => (
                <div key={item.title}>
                  <p className="text-gray-100 dark:text-gray-700 m-3 mt-4 uppercase">
                    {item.title}
                  </p>
                  {item.links.map((link) => (
                    <NavLink
                      to={`/${link.name}`}
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
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
