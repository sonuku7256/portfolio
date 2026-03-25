import React from "react";
import { Skills } from "../pages/Skills";
// import { Navbar } from "./Navbar";
import image from "/src/assets/image.jpeg";
import { MdFileDownload } from "react-icons/md";
export const Banner = () => {
  const downloadCV = () => {};
  return (
    <>
      <div className="hero-section container mx-auto">
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
        <section className="w-full mx-auto min-h-screen">
          <div className="mx-auto mt-10 w-full max-w-2xl">
            <h1 className="text-2xl font-bold w-full text-center my-10">
              Connect with me
            </h1>
            <form className="space-y-6">
              <div className="flex gap-4">
                <div className="w-full relative">
                  <input
                    type="text"
                    name="firstName"
                    id="FirstName"
                    required
                    className="peer w-full border-b border-gray-600 px-4 py-2 focus:outline-none"
                  />
                  <label
                    htmlFor="FirstName"
                    className="absolute left-2 top-2 text-gray-400 cursor-auto text-sm transition-all peer-focus:-top-3 peer-focus:text-sm peer-focus:text-black peer-valid:-top-4 peer-valid:text-sm"
                  >
                    First Name
                  </label>
                </div>
                <div className="w-full relative">
                  <input
                    type="text"
                    name="LastName"
                    id="lastname"
                    required
                    className="peer w-full border-b border-gray-600 px-4 py-2 focus:outline-none"
                  />
                  <label
                    htmlFor="lastname"
                    className="absolute left-2 top-2 text-gray-400 cursor-auto text-sm transition-all peer-focus:-top-3 peer-focus:text-sm peer-focus:text-black peer-valid:-top-4 peer-valid:text-sm"
                  >
                    Last Name
                  </label>
                </div>
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="Email"
                  id="email"
                  required
                  className="peer w-full border-b border-gray-600 px-4 py-2 focus:outline-none"
                />
                <label
                  htmlFor="email"
                  className="absolute left-2 top-2 text-gray-400 cursor-auto text-sm transition-all peer-focus:-top-3 peer-focus:text-sm peer-focus:text-black peer-valid:-top-4 peer-valid:text-sm"
                >
                  Email
                </label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="Subject"
                  id="subject"
                  required
                  className="peer w-full border-b border-gray-600 px-4 py-2 focus:outline-none"
                />
                <label
                  htmlFor="subject"
                  className="absolute left-2 top-2 text-gray-400 cursor-auto text-sm transition-all peer-focus:-top-3 peer-focus:text-sm peer-focus:text-black peer-valid:-top-4 peer-valid:text-sm"
                >
                  Subject
                </label>
              </div>
              <div className="relative">
                <textarea
                  name="Message"
                  id="message"
                  required
                  className="peer w-full border-b border-gray-600 px-4 py-2 focus:outline-none"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-2 top-2 text-gray-400 cursor-auto text-sm transition-all peer-focus:-top-3 peer-focus:text-sm peer-focus:text-black peer-valid:-top-4 peer-valid:text-sm"
                >
                  Message
                </label>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-40 py-2 rounded bg-[#262626] text-dark  text-white cursor-pointer transition"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};
