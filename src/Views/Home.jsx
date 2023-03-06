import React from "react";
import Searchbar from "../Components/Searchbar";

const Home = () => {
  return (
    <div>
      {/* Hero section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Find freelancers for your projects
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Get your projects done by talented freelancers from around the
              world.
            </p>
            <div className="mt-6 flex justify-center">
              <div className="inline-flex rounded-md shadow">
                <button
                  className="py-4 px-6 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
                  type="button"
                >
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Searchbar />

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Popular services
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Service cards */}
            <div className="bg-white shadow-md rounded-lg hover:shadow-lg transition duration-300">
              <div className="p-4">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  Logo design
                </div>
                <a
                  href="#"
                  className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                >
                  Creative logo design for your business
                </a>
                <p className="mt-2 text-gray-500">Starting at $50</p>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg hover:shadow-lg transition duration-300">
              <div className="p-4">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  Website development
                </div>
                <a
                  href="#"
                  className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                >
                  Custom website development for your business
                </a>
                <p className="mt-2 text-gray-500">Starting at $500</p>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg hover:shadow-lg transition duration-300">
              <div className="p-4">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  Social media marketing
                </div>
                <a
                  href="#"
                  className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                >
                  Expert social media marketing services for your business
                </a>
                <p className="mt-2 text-gray-500">Starting at $250</p>
              </div>
            </div>
            {/* Add more service cards here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
