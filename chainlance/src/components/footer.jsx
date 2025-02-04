import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about-us" className="hover:text-gray-400">
                About Us
                </Link>
              </li>
              <li>
                <Link to="/find-job" className="hover:text-gray-400">
                Find Job
                </Link>
              </li>
              <li>
                <Link to="/hire-someone" className="hover:text-gray-400">
                Hire Someone
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>Email: </li>
              <li>Phone: </li>
              <li>Address: </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <i className="fab fa-facebook">FACEBOOK</i>
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <i className="fab fa-twitter">TWITTER</i>
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <i className="fab fa-instagram">INSTAGRAM</i>
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <i className="fab fa-linkedin">LINKEDIN</i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} CHAINLANCE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;