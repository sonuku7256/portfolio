import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div>
        <section>
          <nav className="flex items-center justify-center text-gray-500 text-sm">
            <ul className="flex mx-auto my-2 px-3 gap-3">
              <li className="font-bold px-2 text-black hover:bg-gray-200 rounded transition">
                <Link to="/">Home</Link>
              </li>
              <li className="px-2 rounded hover:bg-gray-200 transition">
                <Link to="/About">About</Link>
              </li>
              <li className="px-2 rounded hover:bg-gray-200 transition">
                <Link to="/Stats">Stats</Link>
              </li>
              <li className="px-2 rounded hover:bg-gray-200 transition">
                <Link to="/Utilities">Utilities</Link>
              </li>
              <li className="px-2 rounded hover:bg-gray-200 transition">
                <Link to="/Blogs">Blogs</Link>
              </li>
              <li className="px-2 rounded hover:bg-gray-200 transition">
                <Link to="/Certificates">Certificates</Link>
              </li>
              <li className="px-2 rounded hover:bg-gray-200 transition">
                <Link to="/Privacy">Privacy</Link>
              </li>
            </ul>
          </nav>
        </section>
      </div>
    </>
  );
};
