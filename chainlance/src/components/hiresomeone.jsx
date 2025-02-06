import React, { useState } from "react";
import { useWallet } from "./walletcontext";

const HireSomeone = ({ addJob }) => {
  const { walletAddress } = useWallet();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [offer, setOffer] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!walletAddress) {
      alert("Please connect your wallet first!");
      return;
    }

    const newJob = {
      id: Date.now(),
      owner: walletAddress,
      worker: null,
      title,
      description,
      offer, 
      taskPool: [],
    };

    addJob(newJob);
    alert("Job created successfully!");
    setTitle("");
    setDescription("");
    setOffer("");
  };

  return (
    <div className="min-h-screen bg-gray-950 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl text-white font-bold text-center mb-8">Hire Someone</h1>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Job Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter job title"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Job Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter job description"
              rows="4"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="offer" className="block text-sm font-medium text-gray-700">Offer</label>
            <input
              type="text"
              id="offer"
              value={offer}
              onChange={(e) => setOffer(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter job offer (optional)"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Create Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default HireSomeone;
