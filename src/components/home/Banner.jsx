import React from "react";
import { Skills } from "../pages/Skills";
// import { Navbar } from "./Navbar";
import image from "/src/assets/image.jpeg";
import { MdFileDownload } from "react-icons/md";
export const Banner = () => {
  const downloadCV = () => {};
  return (
    <>
      <div className="hero-section ">
        <main>
          <div className="flex items-center justify-center mt-10">
            <img
              src={image}
              alt="image"
              className="w-60 h-60 rounded-full object-cover"
            />
          </div>
          <div className="flex justify-center items-center font-bold my-6">
            <h2 className="text-gray-700 text-5xl">Sonu kr pandit</h2>
          </div>
          <div className="flex justify-center items-center text-gray-700 font-bold flex-col">
            <div>
              <p>Innovative Web Developer Pushing Boundaries with Code 😉✌️</p>
            </div>
            <div>
              <p>
                🎓 Master in Computer Application | Eager to Explore Diverse Web
                Technologies.
              </p>
            </div>
          </div>
          <div className="flex justify-center my-5">
            <button
              type="file"
              onClick={downloadCV}
              className="px-6 py-2 rounded border cursor-pointer hover:bg-gray-400 hover:text-white"
            >
              {/* <MdFileDownload /> */}
              Resume
            </button>
          </div>
        </main>

        <Skills />

        <section className="digital-magic w-full-width text-center dark:bg-darkPrimary ">
          <h1 className="font-bold text-4xl">
            Let's Connect and Create Digital Magic 🧙 🌠!
          </h1>
          <div className="mx-30">
            <p className="px-4 py-2 font-medium">
              Got something on your mind? Let's make it happen! ✨ Whether you
              need help with a project or just fancy a friendly chat, I'm all
              ears! 🤝 ✉️
            </p>
          </div>
        </section>

        <section className="flex flex-col w-full mx-auto px-5 dark:bg-darkPrimary">
          <div className="w-full mx-auto mt-5">
            <h1 className="text-2xl font-bold w-full text-center my-2">
              Connect with me
            </h1>
            <form action="" className=" grid justify-center items-center ">
              <div className="flex justify-center items-center">
                <div className="">
                  <label htmlFor="FirstName">First name</label> 
                  <input type="text" className="" />
                </div>
                <div>
                  <input type="text" />
                  <label htmlFor="LirstName">Lirst name</label>
                </div>
              </div>
              <div>
                <input type="email" />
                <label htmlFor="email">Email</label>
              </div>
              <div>
                <input type="subject" />
                <label htmlFor="subject">Subject</label>
              </div>
              <div>
                <textarea name="" id=""></textarea>
                <label htmlFor="message">Message</label>
              </div>
              <div>
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};
