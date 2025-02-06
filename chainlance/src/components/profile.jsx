import React from "react";
import { useWallet } from "./walletcontext";
import { Link } from "react-router-dom";

const Profile = () => {
  const { walletAddress } = useWallet();

  return (
    <div className="h-screen flex flex-col items-center bg-gray-950 py-8">
      <h1 className="text-4xl font-bold text-white mb-8">My Profile</h1>
      
      <div className="mb-8">
        <p className="text-lg text-gray-300">
          Wallet Address: 
          <span className="font-semibold text-white">
            {walletAddress ? walletAddress.slice(0, 6) + "..." + walletAddress.slice(-4) : "Not connected"}
          </span>
        </p>
      </div>

      <div className="w-full max-w-5xl px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Given Tasks</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/my-jobs" className="text-gray-500 hover:underline">
                  a
                </Link>
              </li>
              <li>
                <Link to="/my-jobs" className="text-gray-500 hover:underline">
                  a
                </Link>
              </li>
              <li>
                <Link to="/my-jobs" className="text-gray-500 hover:underline">
                  a
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Taken Task</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/received-jobs" className="text-gray-500 hover:underline">
                  b
                </Link>
              </li>
              <li>
                <Link to="/received-jobs" className="text-gray-500 hover:underline">
                  b
                </Link>
              </li>
              <li>
                <Link to="/received-jobs" className="text-gray-500 hover:underline">
                  b
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;