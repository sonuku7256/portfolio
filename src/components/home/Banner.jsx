import React from "react";
import { Skills } from "../pages/Skills";
import image from "/src/assets/me_image.jpeg";
import { MdFileDownload } from "react-icons/md";

export const Banner = () => {
  const viewResume = () => {
    window.open("/Sonu Kr Pandit (MERN).pdf", "_blank");
  };
  return (
    <>
      <div className="hero-section container mx-auto px-5 sm:min-h-screen">
        <main className="select-none flex flex-col items-center justify-center min-h-screen md:min-h-0 md:translate-y-10 px-8">
          <div className="flex justify-center ">
            <img
              src={image}
              alt="image"
              className="w-60 h-60 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 rounded-full object-cover"
            />
          </div>
          <div className="flex justify-center font-bold my-6">
            <h2 className="text-gray-700 text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
              Sonu kr pandit
            </h2>
          </div>
          <div className="flex justify-center text-gray-700 font-bold flex-col text-center">
            <p className="text-1xl sm:text-base md:text-lg">
              Innovative Web Developer Pushing Boundaries with Code.
            </p>
            <p className="text-1xl sm:text-base md:text-lg mt-2">
              🎓 Master in Computer Applications | Eager to Explore Diverse Web
              Technologies.
            </p>
          </div>
          <div className="flex justify-center my-6">
            <button
              onClick={viewResume}
              className="flex items-center gap-2 px-4 py-2 rounded border hover:bg-gray-400 cursor-pointer"
            >
              <MdFileDownload className="text-lg" />
              Resume
            </button>
          </div>
        </main>
        <div className="hidden md:block">
          <Skills />
        </div>
        <section className="digital-magic w-full text-center px-4 py-8 dark:bg-darkPrimary">
          <h1 className="font-bold text-4xl">
            Let's Connect and Create Digital Magic!
          </h1>
          <div className="mx-auto max-w-2xl px-4">
            <p className="px-4 py-2 font-medium">
              Got something on your mind? Let's make it happen! Whether you need
              help with a project or just fancy a friendly chat, I'm all ears!
              🤝 ✉️
            </p>
          </div>
        </section>
        <section className="px-4">
          <div className="mx-auto mt-10 w-full max-w-2xl">
            <h1 className="text-2xl font-bold w-full text-center my-10">
              Connect with me
            </h1>
            <form className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-full relative">
                  <input
                    type="text"
                    name="firstName"
                    id="FirstName"
                    required
                    className="peer w-full border-b-2 border-gray-500 py-2 focus:outline-none"
                  />
                  <label
                    htmlFor="FirstName"
                    className="absolute left-0 top-2 text-gray-400 cursor-auto transition-all peer-focus:-top-3 peer-focus:text-sm peer-focus:text-black peer-valid:-top-4 peer-valid:text-sm"
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
                    className="peer w-full border-b-2 border-gray-500 py-2 focus:outline-none"
                  />
                  <label
                    htmlFor="lastname"
                    className="absolute left-0 top-2 text-gray-400 cursor-auto transition-all peer-focus:-top-3 peer-focus:text-sm peer-focus:text-black peer-valid:-top-4 peer-valid:text-sm"
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
                  className="peer w-full border-b-2 border-gray-500 py-2 focus:outline-none"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 top-2 text-gray-400 cursor-auto transition-all peer-focus:-top-3 peer-focus:text-sm peer-focus:text-black peer-valid:-top-4 peer-valid:text-sm"
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
                  className="peer w-full border-b-2 border-gray-500 py-2 focus:outline-none"
                />
                <label
                  htmlFor="subject"
                  className="absolute left-0 top-2 text-gray-400 cursor-auto transition-all peer-focus:-top-3 peer-focus:text-sm peer-focus:text-black peer-valid:-top-4 peer-valid:text-sm"
                >
                  Subject
                </label>
              </div>
              <div className="relative">
                <textarea
                  name="Message"
                  id="message"
                  required
                  className="peer w-full border-b-2 border-gray-500 py-2 focus:outline-none"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-0 top-2 text-gray-400 cursor-auto transition-all peer-focus:-top-3 peer-focus:text-sm peer-focus:text-black peer-valid:-top-4 peer-valid:text-sm"
                >
                  Message
                </label>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 sm:px-16 py-2 rounded bg-[#262626] text-white cursor-pointer transition"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </section>
        <hr className="mx-auto max-w-4xl border-gray-400 border-t-2 mt-10" />
      </div>
    </>
  );
};
