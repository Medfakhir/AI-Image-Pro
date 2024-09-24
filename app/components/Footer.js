// app/components/Footer.js

import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi'; // Social icons

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-12">
        {/* Copyright */}
        <p className="text-center md:text-left mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} AI Image Pro. All rights reserved.
        </p>

        {/* Links for privacy and terms */}
        <ul className="flex space-x-4 mb-4 md:mb-0">
          <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          <li><a href="#" className="hover:underline">Terms of Service</a></li>
        </ul>

        {/* Social Media Icons */}
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <FiFacebook size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <FiTwitter size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <FiInstagram size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <FiLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
