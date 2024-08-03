// src/Component/Header.js
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="flex space-x-4">
        <li>
          <Link to="/Imageslider" className="hover:text-gray-400">
            Imageslider
          </Link>
        </li>
        <li>
          <Link to="/LoadMore" className="hover:text-gray-400">
            LoadMore
          </Link>
        </li>
        {/* Add links for other projects */}
      </ul>
    </nav>
  );
}

export default Header;
