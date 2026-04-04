import React from "react";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaPhp } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { RiReactjsLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
export const Skills = () => {
  return (
    <>
      <section className="container mx-auto w-[80%] mt-12">
        <h1 className="w-full font-bold text-3xl text-left my-2 font-inter">
          My Top Skills
        </h1>
        <div className="grid my-10 gap-4 grid-cols-3">
          <div className="p-4 flex items-center justify-center sm:justify-start gap-4 bg-gray-100 hover:bg-white dark:bg-darkPrimary hover:dark:bg-darkSecondary border rounded-sm border-gray-300 dark:border-neutral-400 transform origin-center md:origin-top group">
            <div className="relative transition group-hover:scale-110 sm:group-hover ">
              <FaHtml5 className="w-7 h-7" />
            </div>
            <p className="hidden sm:inline-flex text-sm md:text-base font-semibold select-none pointer-events-none">
              HTML
            </p>
          </div>
          <div className="p-4 flex items-center justify-center sm:justify-start gap-4 bg-gray-100 hover:bg-white dark:bg-darkPrimary hover:dark:bg-darkSecondary border rounded-sm border-gray-300 dark:border-neutral-400 transform origin-center md:origin-top group">
            <div className="relative transition group-hover:scale-110 sm:group-hover">
              <FaCss3Alt className="w-7 h-7" />
            </div>
            <p className="hidden sm:inline-flex text-sm md:text-base font-semibold select-none pointer-events-none">
              CSS
            </p>
          </div>
          <div className="p-4 flex items-center justify-center sm:justify-start gap-4 bg-gray-100 hover:bg-white dark:bg-darkPrimary hover:dark:bg-darkSecondary border rounded-sm border-gray-300 dark:border-neutral-400 transform origin-center md:origin-top group">
            <div className="relative transition group-hover:scale-110 sm:group-hover ">
              <FaJsSquare className="w-7 h-7" />
            </div>
            <p className="hidden sm:inline-flex text-sm md:text-base font-semibold select-none pointer-events-none">
              Javascript
            </p>
          </div>
          <div className="p-4 flex items-center justify-center sm:justify-start gap-4 bg-gray-100 hover:bg-white dark:bg-darkPrimary hover:dark:bg-darkSecondary border rounded-sm border-gray-300 dark:border-neutral-400 transform origin-center md:origin-top group">
            <div className="relative transition group-hover:scale-110 sm:group-hover ">
              <FaPhp className="w-7 h-7" />
            </div>
            <p className="hidden sm:inline-flex text-sm md:text-base font-semibold select-none pointer-events-none">
              PHP
            </p>
          </div>
          <div className="p-4 flex items-center justify-center sm:justify-start gap-4 bg-gray-100 hover:bg-white dark:bg-darkPrimary hover:dark:bg-darkSecondary border rounded-sm border-gray-300 dark:border-neutral-400 transform origin-center md:origin-top group">
            <div className="relative transition group-hover:scale-110 sm:group-hover ">
              <SiMysql className="w-7 h-7" />
            </div>
            <p className="hidden sm:inline-flex text-sm md:text-base font-semibold select-none pointer-events-none">
              MySQl
            </p>
          </div>
          <div className="p-4 flex items-center justify-center sm:justify-start gap-4 bg-gray-100 hover:bg-white dark:bg-darkPrimary hover:dark:bg-darkSecondary border rounded-sm border-gray-300 dark:border-neutral-400 transform origin-center md:origin-top group">
            <div className="relative transition group-hover:scale-110 sm:group-hover ">
              <SiTailwindcss className="w-7 h-7" />
            </div>
            <p className="hidden sm:inline-flex text-sm md:text-base font-semibold select-none pointer-events-none">
              Tailwind CSS
            </p>
          </div>
          <div className="p-4 flex items-center justify-center sm:justify-start gap-4 bg-gray-100 hover:bg-white dark:bg-darkPrimary hover:dark:bg-darkSecondary border rounded-sm border-gray-300 dark:border-neutral-400 transform origin-center md:origin-top group">
            <div className="relative transition group-hover:scale-110 sm:group-hover ">
              <FaJava className="w-7 h-7" />
            </div>
            <p className="hidden sm:inline-flex text-sm md:text-base font-semibold select-none pointer-events-none">
              JAVA Programming
            </p>
          </div>
          <div className="p-4 flex items-center justify-center sm:justify-start gap-4 bg-gray-100 hover:bg-white dark:bg-darkPrimary hover:dark:bg-darkSecondary border rounded-sm border-gray-300 dark:border-neutral-400 transform origin-center md:origin-top group">
            <div className="relative transition group-hover:scale-110 sm:group-hover ">
              <RiReactjsLine className="w-7 h-7" />
            </div>
            <p className="hidden sm:inline-flex text-sm md:text-base font-semibold select-none pointer-events-none">
              React js
            </p>
          </div>
          <div className="p-4 flex items-center justify-center sm:justify-start gap-4 bg-gray-100 hover:bg-white dark:bg-darkPrimary hover:dark:bg-darkSecondary border rounded-sm border-gray-300 dark:border-neutral-400 transform origin-center md:origin-top group">
            <div className="relative transition group-hover:scale-110 sm:group-hover">
              <FaGithub className="w-7 h-7" />
            </div>
            <p className="hidden sm:inline-flex text-sm md:text-base font-semibold select-none pointer-events-none">
              Github
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
