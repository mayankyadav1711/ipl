import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <div className="mt-8 flex flex-col items-center font-sans bottom-0">
    <h1 className="text-lg font-semibold mb-4">
      Made by {" "}
      
      <a href="https://www.linkedin.com/in/mayankyadav17/" target="_blank" className="text-blue-600 font-medium">
        Mayank Yadav
      </a>{" "}
      and{" "}
      <a href="https://www.linkedin.com/in/divyakaurani/" target="_blank" className="text-blue-600 font-medium">
        Divya Kaurani 
        
      </a>
    </h1>
    <p className="mt-4 text-sm text-gray-600">
      Follow us on LinkedIn for more updates!
    </p>
  </div>
);

export default Footer;
