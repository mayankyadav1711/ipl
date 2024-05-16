import React, { useEffect } from 'react';
import ipl from "../components/images/ipl-logo-new-old.png"



const Navbar = () => {



  // const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="flex justify-center bg-gradient-to-r mb-4 from-blue-400 to-blue-900 p-2 relative">
<img src={ipl} width={100}/>
 
    </div>
  );
};

export default Navbar;
