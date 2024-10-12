'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../libs/AuthContext'; // Import the useAuth hook

export default function Navbar() {
  const { user, logout, loading } = useAuth(); // Get user, loading, and logout from context
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile sidebar menu toggle

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto p-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          MorpheAI
        </Link>

        {/* Hamburger icon for mobile */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li>
            <Link href="/" className="hover:text-blue-500">Home</Link>
          </li>
          <li>
            <Link href="/features" className="hover:text-blue-500">Features</Link>
          </li>
          <li>
            <Link href="/#contact" className="hover:text-blue-500">Contact</Link>
          </li>
        </ul>

        {/* Conditional buttons based on authentication */}
        {!user ? (
          <Link href="/login" className="hidden md:block py-2 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:scale-105 hover:shadow-lg transition-transform">
            Get Started
          </Link>
        ) : (
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-gray-800">Hello, {user.user_metadata?.name || user.email}</span>
            <button 
              onClick={logout}
              className="py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
            >
              Logout
            </button>
          </div>
        )}
      </nav>

      {/* Sidebar for mobile */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-blue-800 text-white transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
        <div className="p-6">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <ul className="mt-6 space-y-4">
            <li>
              <Link href="/" className="block hover:text-blue-300">Home</Link>
            </li>
            <li>
              <Link href="/features" className="block hover:text-blue-300">Features</Link>
            </li>
            <li>
              <Link href="/#contact" className="block hover:text-blue-300">Contact</Link>
            </li>
          </ul>

          {/* Add user info inside the menu */}
          {user && (
            <div className="mt-8">
              <span className="block">Hello, {user.user_metadata?.name || user.email}</span>
            </div>
          )}
        </div>

        {/* Logout button at the bottom */}
        {user && (
          <div className="absolute bottom-0 w-full p-6 bg-blue-700">
            <button 
              onClick={logout}
              className="w-full py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
            >
              Logout
            </button>
          </div>
        )}
      </div>

      {/* Background overlay when menu is open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
}
