import React from "react";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaPhp } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { RiReactjsLine } from "react-icons/ri";
export const Skills = () => {
  return (
    <>
      <section className="mx-auto w-[80%] ">
        <h1 className="w-full font-bold text-3xl text-left my-2 font-inter">
          My Top Skills
        </h1>
        <div className="grid my-10 gap-4 grid-cols-3">
          <div className="p-4 flex items-center justify-center sm:justify-start gap-4 bg-gray-50 hover:bg-white dark:bg-darkPrimary hover:dark:bg-darkSecondary border rounded-sm border-gray-300 dark:border-neutral-700 transform origin-center md:origin-top group">
            <div className="relative transition group-hover:scale-110 sm:group-hover:scale-100 select-none pointer-events-none">
              <FaHtml5 className="w-7 h-7"/>
            </div>
            <p className="hidden sm:inline-flex text-sm md:text-base font-semibold select-none pointer-events-none">
              HTML
            </p>
          </div>
          <div className="p-4 flex items-center justify-center sm:justify-start gap-4 bg-gray-50 hover:bg-white dark:bg-darkPrimary hover:dark:bg-darkSecondary border rounded-sm border-gray-300 dark:border-neutral-700 transform origin-center md:origin-top group">
            <div className="relative transition group-hover:scale-110 sm:group-hover:scale-100 select-none pointer-events-none">
              <FaCss3Alt className="w-7 h-7"/>
            </div>
            <p className="hidden sm:inline-flex text-sm md:text-base font-semibold select-none pointer-events-none">
              CSS
            </p>
          </div>
          <div className="p-4 flex items-center justify-center sm:justify-start gap-4 bg-gray-50 hover:bg-white dark:bg-darkPrimary hover:dark:bg-darkSecondary border rounded-sm border-gray-300 dark:border-neutral-700 transform origin-center md:origin-top group">
            <div className="relative transition group-hover:scale-110 sm:group-hover:scale-100 select-none pointer-events-none">
              <FaJsSquare className="w-7 h-7"/>
            </div>
            <p className="hidden sm:inline-flex text-sm md:text-base font-semibold select-none pointer-events-none">
              Javascript
            </p>
          </div>
          <div className="p-4 flex items-center justify-center sm:justify-start gap-4 bg-gray-50 hover:bg-white dark:bg-darkPrimary hover:dark:bg-darkSecondary border rounded-sm border-gray-300 dark:border-neutral-700 transform origin-center md:origin-top group">
            <div className="relative transition group-hover:scale-110 sm:group-hover:scale-100 select-none pointer-events-none">
              <FaPhp className="w-7 h-7" />
            </div>
            <p className="hidden sm:inline-flex text-sm md:text-base font-semibold select-none pointer-events-none">
              PHP
            </p>
          </div>
          <div className="p-4 flex items-center justify-center sm:justify-start gap-4 bg-gray-50 hover:bg-white dark:bg-darkPrimary hover:dark:bg-darkSecondary border rounded-sm border-gray-300 dark:border-neutral-700 transform origin-center md:origin-top group">
            <div className="relative transition group-hover:scale-110 sm:group-hover:scale-100 select-none pointer-events-none">
              <SiMysql className="w-7 h-7"/>
            </div>
            <p className="hidden sm:inline-flex text-sm md:text-base font-semibold select-none pointer-events-none">
              MySQl
            </p>
          </div>
          <div className="p-4 flex items-center justify-center sm:justify-start gap-4 bg-gray-50 hover:bg-white dark:bg-darkPrimary hover:dark:bg-darkSecondary border rounded-sm border-gray-300 dark:border-neutral-700 transform origin-center md:origin-top group">
            <div className="relative transition group-hover:scale-110 sm:group-hover:scale-100 select-none pointer-events-none">
              <SiTailwindcss className="w-7 h-7"/>
            </div>
            <p className="hidden sm:inline-flex text-sm md:text-base font-semibold select-none pointer-events-none">
              Tailwind
            </p>
          </div>
          <div className="p-4 flex items-center justify-center sm:justify-start gap-4 bg-gray-50 hover:bg-white dark:bg-darkPrimary hover:dark:bg-darkSecondary border rounded-sm border-gray-300 dark:border-neutral-700 transform origin-center md:origin-top group">
            <div className="relative transition group-hover:scale-110 sm:group-hover:scale-100 select-none pointer-events-none">
              <FaJava className="w-7 h-7"/>
            </div>
            <p className="hidden sm:inline-flex text-sm md:text-base font-semibold select-none pointer-events-none">
              JAVA Programming
            </p>
          </div>
          <div className="p-4 flex items-center justify-center sm:justify-start gap-4 bg-gray-50 hover:bg-white dark:bg-darkPrimary hover:dark:bg-darkSecondary border rounded-sm border-gray-300 dark:border-neutral-700 transform origin-center md:origin-top group">
            <div className="relative transition group-hover:scale-110 sm:group-hover:scale-100 select-none pointer-events-none">
              <FaHtml5 className="w-7 h-7"/>
            </div>
            <p className="hidden sm:inline-flex text-sm md:text-base font-semibold select-none pointer-events-none">
              C
            </p>
          </div>
          <div className="p-4 flex items-center justify-center sm:justify-start gap-4 bg-gray-50 hover:bg-white dark:bg-darkPrimary hover:dark:bg-darkSecondary border rounded-sm border-gray-300 dark:border-neutral-700 transform origin-center md:origin-top group">
            <div className="relative transition group-hover:scale-110 sm:group-hover:scale-100 select-none pointer-events-none">
              <FaHtml5 className="w-7 h-7"/>
            </div>
            <p className="hidden sm:inline-flex text-sm md:text-base font-semibold select-none pointer-events-none">
              C++
            </p>
          </div>
          <div className="p-4 flex items-center justify-center sm:justify-start gap-4 bg-gray-50 hover:bg-white dark:bg-darkPrimary hover:dark:bg-darkSecondary border rounded-sm border-gray-300 dark:border-neutral-700 transform origin-center md:origin-top group">
            <div className="relative transition group-hover:scale-110 sm:group-hover:scale-100 select-none pointer-events-none">
              <RiReactjsLine className="w-7 h-7"/>
            </div>
            <p className="hidden sm:inline-flex text-sm md:text-base font-semibold select-none pointer-events-none">
              React js
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
