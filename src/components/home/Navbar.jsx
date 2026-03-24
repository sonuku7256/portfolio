import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex text-gray-700 items-center justify-content-center">
      <ul className="flex mx-auto my-2 px-2 gap-6">
        <li className="font-bold">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Stats">Stats</Link>
        </li>
        <li>
          <Link to="/Utilities">Utilities</Link>
        </li>
        <li>
          <Link to="/Blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/Certificates">Certificates</Link>
        </li>
        <li>
          <Link to="/Privacy">Privacy</Link>
        </li>
      </ul>
    </nav>
  );
};
