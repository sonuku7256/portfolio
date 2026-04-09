import React from "react";
import { SiTailwindcss } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { SiBrave } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
export const Utilities = () => {
  return (
    <section className="px-4 py-10 md:py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-start mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            Utilities
          </h1>
          <p className="text-gray-600 mt-3 text-sm md:text-base">
            Here are the technologies and tools I use daily. This list keeps
            evolving.
          </p>
        </div>
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-6">
            System
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            <div className="bg-white shadow-md rounded-xl p-4 text-center hover:shadow-lg transition">
              <img
                src="https://cdn-icons-png.flaticon.com/512/888/888882.png"
                alt="Windows"
                className="w-12 mx-auto mb-2"
              />
              <p className="text-gray-600">Windows</p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-4 text-center hover:shadow-lg transition">
              <VscVscode
                className="w-14 h-14 mx-auto"
                style={{ color: "#38bdf8" }}
              />
              <p className="text-gray-600">VS Code</p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-4 text-center hover:shadow-lg transition">
              <FaGithub
                className="w-14 h-14 mx-auto"
                style={{ color: "#38bd" }}
              />
              <p className="text-gray-600">Github</p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-4 text-center hover:shadow-lg transition">
              <SiBrave
                className="w-14 h-14 mx-auto"
                style={{ color: "#FB542B" }}
              />
              <p className="text-gray-600">Brave</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-6">
            Softwares & Applications
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            <div className="bg-white shadow-md rounded-xl p-4 text-center hover:shadow-lg transition">
              <img
                src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                alt="JavaScript"
                className="w-12 mx-auto mb-2"
              />
              <p className="text-gray-600">JavaScript</p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-4 text-center hover:shadow-lg transition">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
                alt="React"
                className="w-12 mx-auto mb-2"
              />
              <p className="text-gray-600">React</p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-4 text-center hover:shadow-lg transition">
              <SiTailwindcss className="mx-auto h-13 w-10" />
              <p className="text-gray-600">Tailwind CSS</p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-4 text-center hover:shadow-lg transition">
              <SiMysql
                className="mx-auto h-10 w-14"
                style={{ color: "#38bdf8" }}
              />
              <p className="text-gray-600">MySql</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
