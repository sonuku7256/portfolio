import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="text-gray-600 font-medium px-4 sm:px-6 md:px-55">
      <div className="py-5 grid grid-cols-2 md:grid-cols-2 gap-6">
        <div className="md:text-start">
          <h3 className="text-lg font-semibold mb-3 px-2">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link className="inline-block px-2 hover:text-black transition" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className="inline-block px-2 hover:text-black transition"
                to="/About"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="inline-block px-2 hover:text-black transition"
                to="/Stats"
              >
                Stats
              </Link>
            </li>
            <li>
              <Link
                className="inline-block px-2 hover:text-black transition"
                to="/Skills"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                className="inline-block px-2 hover:text-black transition"
                to="/Utilities"
              >
                Utilities
              </Link>
            </li>
            <li>
              <Link
                className="inline-block px-2 hover:text-black transition"
                to="/Certificates"
              >
                Certificates
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div className="md:text-start">
          <h3 className="text-lg font-semibold mb-3 px-2">Follow Me</h3>
          <ul className="space-y-2">
            <li>
              <a
                className="inline-block px-2 hover:text-black transition"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/sonu-kr-pandit/"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className="inline-block px-2 hover:text-black transition"
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
