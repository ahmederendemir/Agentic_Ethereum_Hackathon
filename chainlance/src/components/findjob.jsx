import { useState } from "react";
import { Link } from "react-router-dom";


import React from "react";
import jobs from "../data/jobs";

const FindJob = () => {
  return (
    <div className="min-h-screen bg-gray-950 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Find Job</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-bold mb-2">{job.title}</h2>
              <p className="text-gray-600 mb-2">{job.company}</p>
              <p className="text-gray-500 mb-4">{job.location}</p>
              <p className="text-gray-700">{job.description}</p>
              <button className="mt-4 bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-950 transition-colors duration-300">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindJob;