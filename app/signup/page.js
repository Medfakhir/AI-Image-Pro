'use client'; // To mark this as a client-side component

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import from next/navigation for the App Router
import { supabase } from '../libs/supabase'; // Assuming supabase is initialized in your libs folder
import Link from 'next/link'; // Import the Link component

export default function SignupPage() {
  const [name, setName] = useState(''); // State for the name
  const [email, setEmail] = useState(''); // State for the email
  const [password, setPassword] = useState(''); // State for the password
  const [error, setError] = useState(null); // State for handling errors
  const [loading, setLoading] = useState(false); // Loading state during signup
  const router = useRouter(); // Initialize router for redirection

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
  
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
  
      if (error) throw error;
  
      // Redirect to the verification page after successful signup
      router.push('/verify-email'); // Custom page to inform about email verification
  
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Sign Up</h2>

        {error && <p className="text-red-500 mb-4 text-center">{error}</p>} {/* Display any errors */}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)} // Update name state
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className={`w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading} // Disable button when loading
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account? <Link href="/login" className="text-blue-600 hover:underline">Log in</Link>
        </p>
      </div>
    </section>
  );
}
