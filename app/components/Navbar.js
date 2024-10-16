'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../libs/AuthContext';

export default function Navbar() {
  const { user, logout, loading } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto p-6 flex justify-between items-center">
        {/* AI-inspired animated logo with particle effect */}
        <Link href="/" className="ai-logo">
          MORPHEAI
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
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
      {/* Remaining Code Unchanged */}
    </header>
  );
}
