import React from "react";

export const About = () => {
  return (
    <section className="px-4 py-10 md:py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6">
          About me
        </h1>
        <div className="text-gray-600 text-base md:text-lg leading-relaxed space-y-4 text-start font-medium">
          <p>
            I am Sonu Kumar Pandit, a passionate full stack web developer
            currently pursuing my Master of Computer Application (MCA). I have a
            strong foundation in web technologies including HTML, CSS,
            JavaScript, and React.js, along with backend development using
            Node.js and Express.js.
          </p>

          <p>
            I enjoy building responsive and user-friendly web applications that
            solve real-world problems. My projects, such as an online e-paan
            store and a travel booking platform, reflect my ability to develop
            practical and scalable solutions.
          </p>

          <p>
            I am a quick learner with strong time management and teamwork
            skills, always eager to explore new technologies and enhance my
            development expertise. My goal is to contribute to innovative
            projects while continuously growing as a developer.
          </p>
        </div>
      </div>
    </section>
  );
};
