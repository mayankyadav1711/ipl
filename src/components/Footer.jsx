import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <div className="mt-8 flex flex-col items-center font-sans">
    <h1 className="text-lg font-semibold mb-4">
      Made by {" "}
      
      <Link to="https://www.linkedin.com/in/mayankyadav17/" target="_blank" className="text-blue-600 font-medium">
        Mayank Yadav
      </Link>{" "}
      and{" "}
      <Link to="https://www.linkedin.com/in/divyakaurani/" target="_blank" className="text-blue-600 font-medium">
        Divya Kaurani 
        
      </Link>
    </h1>
    <p className="mt-4 text-sm text-gray-600">
      Follow us on LinkedIn for more updates!
    </p>
  </div>
);

export default Footer;
