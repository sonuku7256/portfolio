import React from "react";

export const Stats = () => {
  return (
    <section className="px-4 py-10 md:py-16 bg-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 text-start">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 ">
            Statistics
          </h1>
          <p className="text-gray-600 mt-3 text-sm md:text-base">
            These are my personal stats from GitHub.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-blue-600">04</h2>
            <p className="text-gray-600 mt-2">GitHub Repos</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-green-600">0</h2>
            <p className="text-gray-600 mt-2">GitHub Gists</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-purple-600">0</h2>
            <p className="text-gray-600 mt-2">Followers</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-red-500">0</h2>
            <p className="text-gray-600 mt-2">Stars</p>
          </div>
        </div>
      </div>
    </section>
  );
};
