import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="text-gray-600 ml-55 font-medium">
      <div className="p-5 grid md:grid-cols-2">
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                className="inline-block px-2 hover:text-black transition"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="inline-block px-2 hover:text-black rounded transition"
                to="/About"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="inline-block px-2 hover:text-black rounded transition"
                to="/Stats"
              >
                Stats
              </Link>
            </li>
            <li>
              <Link
                className="inline-block px-2 hover:text-black rounded transition"
                to="/Utilities"
              >
                Utilities
              </Link>
            </li>
            <li>
              <Link
                className="inline-block px-2 hover:text-black rounded transition"
                to="/Certificates"
              >
                Certificates
              </Link>
            </li>
            <li>
              <Link
                className="inline-block px-2 hover:text-black rounded transition"
                to="/Privacy"
              >
                Privacy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Me</h3>
          <ul className="space-y-2">
            <li>
              <a
                className="inline-block px-2  hover:text-black rounded transition"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/sonu-kr-pandit/"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className="inline-block px-2 hover:text-black rounded transition"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/sonuku7256"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
