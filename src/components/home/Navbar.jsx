import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative lg:text-xl lg:flex z-50">

      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-14">
          <ul className="hidden md:flex gap-4 text-gray-600">
            <li className="hover:bg-gray-200 px-2 rounded font-bold">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:bg-gray-200 px-2 rounded">
              <Link to="/About">About</Link>
            </li>
            <li className="hover:bg-gray-200 px-2 rounded">
              <Link to="/Stats">Stats</Link>
            </li>
            <li className="hover:bg-gray-200 px-2 rounded">
              <Link to="/Skills">Skills</Link>
            </li>
            <li className="hover:bg-gray-200 px-2 rounded">
              <Link to="/Utilities">Utilities</Link>
            </li>
            <li className="hover:bg-gray-200 px-2 rounded">
              <Link to="/Certificates">Certificates</Link>
            </li>
          </ul>
          <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
            {open ? "✖" : "☰"}
          </button>
        </div>
        <div
          className={`md:hidden absolute left-0 top-14 w-full bg-white shadow-md overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <ul className="flex flex-col text-gray-600">
            <li className="border-b">
              <Link
                onClick={() => setOpen(false)}
                className="block px-4 py-3 hover:bg-gray-100"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="border-b">
              <Link
                onClick={() => setOpen(false)}
                className="block px-4 py-3 hover:bg-gray-100"
                to="/About"
              >
                About
              </Link>
            </li>
            <li className="border-b">
              <Link
                onClick={() => setOpen(false)}
                className="block px-4 py-3 hover:bg-gray-100"
                to="/Stats"
              >
                Stats
              </Link>
            </li>
            <li className="border-b">
              <Link
                onClick={() => setOpen(false)}
                className="block px-4 py-3 hover:bg-gray-100"
                to="/Utilities"
              >
                Utilities
              </Link>
            </li>

            <li className="border-b">
              <Link
                onClick={() => setOpen(false)}
                className="block px-4 py-3 hover:bg-gray-100"
                to="/Certificates"
              >
                Certificates
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
