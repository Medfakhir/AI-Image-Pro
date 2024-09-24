// app/features/page.js

import { FaRocket, FaCogs, FaHighlighter } from 'react-icons/fa';

export default function Features() {
  return (
    <div className="bg-gradient-to-r from-blue-100 via-white to-blue-100 min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-12 shadow-lg">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-extrabold tracking-tight text-center">Features of AI Pro Image Generator</h1>
          <p className="text-center text-lg mt-4 font-light">Unleash the power of AI to create stunning visuals effortlessly.</p>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Why Choose AI Pro Image Generator?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center mb-4 text-blue-600">
                <FaRocket className="text-5xl" />
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-800">Fast Image Generation</h3>
              <p className="mt-4 text-center text-gray-600">
                Generate high-quality images in seconds with the power of advanced AI models.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center mb-4 text-blue-600">
                <FaCogs className="text-5xl" />
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-800">Multiple AI Models</h3>
              <p className="mt-4 text-center text-gray-600">
                Choose from a variety of AI models including Flux, Turbo, Realism, and Anime.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center mb-4 text-blue-600">
                <FaHighlighter className="text-5xl" />
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-800">High-Quality Images</h3>
              <p className="mt-4 text-center text-gray-600">
                Receive stunning high-resolution images tailored to your needs and preferences.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center mb-4 text-blue-600">
                <FaCogs className="text-5xl" />
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-800">Customizable Output</h3>
              <p className="mt-4 text-center text-gray-600">
                Set custom dimensions, styles, and prompts for personalized and unique results.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center mb-4 text-blue-600">
                <FaHighlighter className="text-5xl" />
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-800">Download & Share</h3>
              <p className="mt-4 text-center text-gray-600">
                Easily download your images and share them with your friends, colleagues, or clients.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center mb-4 text-blue-600">
                <FaRocket className="text-5xl" />
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-800">Cloud-Powered AI</h3>
              <p className="mt-4 text-center text-gray-600">
                Powered by cloud-based AI models for reliable, fast, and seamless performance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
