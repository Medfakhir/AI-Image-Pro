'use client';

import Link from 'next/link';
import { useAuth } from '../libs/AuthContext'; // Import the useAuth hook

export default function Navbar() {
  const { user, logout, loading } = useAuth(); // Get user, loading, and logout from context

  if (loading) {
    return <p>Loading...</p>; // Display loading state
  }

  if (!user) {
    // If no user is logged in, show the "Get Started" link
    return (
      <header className="bg-white shadow-md">
        <nav className="container mx-auto p-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            AI Image Pro
          </Link>
          <ul className="flex space-x-6 text-lg">
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
          <Link href="/login" className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Get Started
          </Link>
        </nav>
      </header>
    );
  }

  // If user is logged in, show their name and logout button
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto p-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          AI Image Pro
        </Link>
        <ul className="flex space-x-6 text-lg">
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
        <div className="flex items-center space-x-4">
          <span className="text-gray-800">Hello, {user.user_metadata?.name || user.email}</span>
          <button 
            onClick={logout}
            className="py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
}
