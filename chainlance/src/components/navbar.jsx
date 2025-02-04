import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800">
              CHAINLANCE
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/find-job"
              className="text-gray-950 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Find Job
            </Link>
            <Link
              to="/hire-someone"
              className="text-gray-950 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Hire Someone
            </Link>
            <Link
              to="/about-us"
              className="text-gray-950 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              About Us
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/wallet"
              className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-950"
            >
              Connect Wallet
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;