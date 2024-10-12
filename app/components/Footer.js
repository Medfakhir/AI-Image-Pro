// app/components/Footer.js

import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-12">
        
        {/* Copyright */}
        <p className="text-center md:text-left mb-4 md:mb-0 font-semibold">
          &copy; {new Date().getFullYear()} MorpheAI. All rights reserved.
        </p>

        {/* Links for privacy and terms */}
        <ul className="flex space-x-4 mb-4 md:mb-0">
          <li>
            <a href="#" className="hover:text-gray-200 transition-colors">Privacy Policy</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-200 transition-colors">Terms of Service</a>
          </li>
        </ul>

        {/* Social Media Icons */}
        <div className="flex space-x-6">
          <a href="#" className="text-gray-300 hover:text-white transition-transform transform hover:scale-110">
            <FiFacebook size={24} />
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-transform transform hover:scale-110">
            <FiTwitter size={24} />
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-transform transform hover:scale-110">
            <FiInstagram size={24} />
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-transform transform hover:scale-110">
            <FiLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
