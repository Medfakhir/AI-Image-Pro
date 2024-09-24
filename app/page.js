'use client'; // Client component for animations

import Link from 'next/link'; // Import Link for navigation
import { FiImage, FiZap, FiLayers } from 'react-icons/fi'; // Import icons for features
import { motion } from 'framer-motion'; // Import framer-motion for animations

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-gray-100 min-h-screen flex flex-col items-center justify-center px-6 lg:px-12">
      
      {/* Hero Section */}
      <section className="relative text-center mb-16 w-full max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl font-extrabold text-blue-600 mb-6 leading-tight">
            Welcome to <span className="text-indigo-600">AI Pro Image Generator</span>
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Effortlessly create stunning AI-generated images in just a few clicks.
          </p>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Link 
              href="/image-generator"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transform transition-all"
            >
              Start Generating Images
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center mb-16">
        
        {/* Feature 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition"
        >
          <FiImage className="text-blue-600 text-5xl mb-4 mx-auto" />
          <h3 className="text-2xl font-bold mb-4">Stunning AI Images</h3>
          <p className="text-gray-600">
            Generate high-quality images tailored to your prompt with state-of-the-art AI.
          </p>
        </motion.div>

        {/* Feature 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition"
        >
          <FiZap className="text-blue-600 text-5xl mb-4 mx-auto" />
          <h3 className="text-2xl font-bold mb-4">Fast & Powerful</h3>
          <p className="text-gray-600">
            Experience fast and efficient image generation powered by advanced AI models.
          </p>
        </motion.div>

        {/* Feature 3 */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition"
        >
          <FiLayers className="text-blue-600 text-5xl mb-4 mx-auto" />
          <h3 className="text-2xl font-bold mb-4">Multiple Models</h3>
          <p className="text-gray-600">
            Choose from a variety of AI models for different styles and artistic needs.
          </p>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 w-full text-center mb-16">
        <motion.h2 
          className="text-4xl font-bold text-gray-800 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          How It Works
        </motion.h2>
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          <motion.div 
            className="p-6 rounded-lg shadow-lg bg-gray-50"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-indigo-600 mb-4">Step 1</h3>
            <p className="text-gray-600">Enter your creative prompt and let our AI do the rest.</p>
          </motion.div>

          <motion.div 
            className="p-6 rounded-lg shadow-lg bg-gray-50"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-bold text-indigo-600 mb-4">Step 2</h3>
            <p className="text-gray-600">Choose the desired AI model for the style you want.</p>
          </motion.div>

          <motion.div 
            className="p-6 rounded-lg shadow-lg bg-gray-50"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-bold text-indigo-600 mb-4">Step 3</h3>
            <p className="text-gray-600">Download and share your stunning AI-generated image.</p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full max-w-6xl mx-auto text-center py-16  from-gray-100 to-gray-50 mb-16">
        <motion.h2 
          className="text-4xl font-bold text-gray-800 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Pricing Plans
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Free Plan */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Free Plan</h3>
            <p className="text-gray-600 mb-6">Perfect for personal use.</p>
            <p className="text-3xl font-bold text-gray-900">$0</p>
            <p className="text-gray-600 mt-2">10 images/month</p>
            <Link href="/signup" className="block mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Get Started
            </Link>
          </div>

          {/* Pro Plan */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Pro Plan</h3>
            <p className="text-gray-600 mb-6">Ideal for professionals.</p>
            <p className="text-3xl font-bold text-gray-900">$15/month</p>
            <p className="text-gray-600 mt-2">100 images/month</p>
            <Link href="/signup" className="block mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Get Started
            </Link>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Enterprise Plan</h3>
            <p className="text-gray-600 mb-6">Best for large teams.</p>
            <p className="text-3xl font-bold text-gray-900">$50/month</p>
            <p className="text-gray-600 mt-2">Unlimited images</p>
            <Link href="/signup" className="block mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Get Started
            </Link>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="w-full max-w-6xl mx-auto text-left py-12">
        <motion.h2 
          className="text-4xl font-bold text-gray-800 mb-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">What is AI Pro Image Generator?</h3>
            <p className="text-gray-700">AI Pro Image Generator is an advanced tool that allows you to generate stunning images using AI by simply entering a prompt.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">How many images can I generate for free?</h3>
            <p className="text-gray-700">With the free plan, you can generate up to 10 images per month.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">Can I upgrade or cancel my plan anytime?</h3>
            <p className="text-gray-700">Yes, you can upgrade or cancel your plan at any time through your account dashboard.</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
