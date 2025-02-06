import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useWallet } from "./walletcontext";

const Navbar = () => {
  const navigate = useNavigate();
  const { walletAddress, connectWallet, disconnectWallet } = useWallet();

  const handleProtectedRoute = (event, path) => {
    if (!walletAddress) {
      event.preventDefault();
      alert("Please connect your wallet first!");
    } else {
      navigate(path);
    }
  };

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
              onClick={(e) => handleProtectedRoute(e, "/find-job")}
              className="text-gray-950 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Find Job
            </Link>
            <Link
              to="/hire-someone"
              onClick={(e) => handleProtectedRoute(e, "/hire-someone")}
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
            {walletAddress ? (
              <>
                <button
                  onClick={disconnectWallet}
                  className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-950"
                >
                  {walletAddress.slice(0, 6) + "..." + walletAddress.slice(-4)}
                </button>
                <Link
                  to="/profile"
                  className="text-gray-950 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Profile
                </Link>
              </>
            ) : (
              <button
                onClick={connectWallet}
                className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-950"
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;