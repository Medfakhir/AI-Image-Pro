'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '../libs/AuthContext';
import { useRouter } from 'next/navigation'; // Ensure you're using the correct hook
import Link from 'next/link'; // Import Link for navigation

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { login, user, loading } = useAuth();
  const router = useRouter();

  // Redirect to the image generator page if user is already logged in
  useEffect(() => {
    console.log('User:', user);
    console.log('Loading:', loading);

    if (!loading && user) {
      console.log('Redirecting to /image-generator');
      router.push('/image-generator'); // Redirect user to the image generator
    }
  }, [user, loading, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await login(email, password); // Call login function
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (user) {
    return <p>Redirecting...</p>;
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Login</h2>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* Add link to signup page */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link href="/signup" className="text-blue-600 hover:underline">
              Sign up here
            </Link>
          </p>
        </div>

        {/* Add link to forgot password page */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Forgot your password?{' '}
            <Link href="/forgot-password" className="text-blue-600 hover:underline">
              Reset here
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
