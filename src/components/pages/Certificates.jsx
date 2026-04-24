import certificate from "../../assets/js.jpg";
import jscertificate from "../../assets/img.jpg";
import internship from "../../assets/internship.jpeg";

export const Certificates = () => {
  return (
    <section className="px-4 py-5 md:py-10 bg-gray-100  select-none">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl text-start md:text-5xl font-bold text-gray-800 mb-4">
          Certificates
        </h1>
        <p className="text-gray-600 mb-8 text-start">
          I've participated in contests and courses and earned certifications in
          many skills.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-2">
          <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <img
              src={certificate}
              alt="FSD certificates"
              className="w-full object-cover hover:scale-105 transition duration-300"
            />
          </div>
          <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <img
              src={internship}
              alt="Internship Certificates"
              className="w-full object-cover hover:scale-105 transition duration-300"
            />
          </div>
          <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <img
              src={jscertificate}
              alt="JavaScript certificates"
              className="w-full object-cover hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
