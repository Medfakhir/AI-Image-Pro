'use client';

import { useState, useEffect } from 'react';
import { FiDownload } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import { supabase } from '../libs/supabase';
import { useAuth } from '../libs/AuthContext'; // Import useAuth from context

export default function ImageGenerator() {
  const { user, loading } = useAuth(); // Include loading and user from context
  const [prompt, setPrompt] = useState('');
  const [model, setModel] = useState('flux'); // Default model
  const [width, setWidth] = useState(1024); // Default width
  const [height, setHeight] = useState(1024); // Default height
  const [imageURL, setImageURL] = useState('');
  const [croppedImageURL, setCroppedImageURL] = useState(''); // Cropped image URL
  const [loadingImage, setLoadingImage] = useState(false);
  const [error, setError] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false); // Toggle advanced settings
  const router = useRouter();

  // Authentication check: Ensure user is logged in
  useEffect(() => {
    if (!loading && !user) {
      router.push('/login'); // Redirect to login only if user is not found and loading is complete
    }
  }, [user, loading, router]);

  // Show a loading message while the user info is being fetched
  if (loading) {
    return <p>Loading...</p>;
  }

  const generateRandomSeed = () => Math.floor(Math.random() * 10000);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!prompt) return;

    setLoadingImage(true);
    setError('');
    setImageURL('');
    setCroppedImageURL('');

    try {
      const encodedPrompt = encodeURIComponent(`${prompt} ${generateRandomSeed()}`);
      const seed = generateRandomSeed();

      const apiUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=${width}&height=${height}&model=${model}&nologo=true&seed=${seed}`;

      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error('Failed to fetch image');

      const imageBlob = await response.blob();
      const imageObjectURL = URL.createObjectURL(imageBlob);
      setImageURL(imageObjectURL);
      cropImage(imageObjectURL);

    } catch (error) {
      setError('Failed to generate image. Please try again.');
    }

    setLoadingImage(false);
  };

  const cropImage = (imageSrc) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const image = new Image();
    image.src = imageSrc;

    image.onload = () => {
      const cropHeight = image.height - 50; // Adjust height for cropping out logo
      const cropWidth = image.width;
      canvas.width = cropWidth;
      canvas.height = cropHeight;
      ctx.drawImage(image, 0, 0, cropWidth, cropHeight, 0, 0, cropWidth, cropHeight);
      const croppedImage = canvas.toDataURL('image/jpeg');
      setCroppedImageURL(croppedImage);
    };
  };

  return (
    <section className="container mx-auto py-12 px-6 lg:px-12 text-center bg-gradient-to-b from-gray-50 to-gray-100">
      <h2 className="text-5xl font-extrabold mb-8 text-gray-900">AI Image Generator</h2>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto mb-12 bg-white p-8 rounded-lg shadow-2xl">
        <input
          id="prompt"
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter a creative prompt..."
          className="w-full px-4 py-3 mb-6 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300"
          required
        />

        <div className="flex items-center justify-end mb-6">
          <span className="text-gray-700 mr-2">Advanced Settings</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={showAdvanced}
              onChange={() => setShowAdvanced(!showAdvanced)}
            />
            <div
              className={`w-11 h-6 rounded-full transition peer-focus:ring-4 peer-focus:ring-blue-300 ${
                showAdvanced ? 'bg-green-500' : 'bg-gray-200'
              }`}
            ></div>
            <span
              className={`absolute left-[2px] top-[2px] h-5 w-5 bg-white rounded-full transition-transform ${
                showAdvanced ? 'translate-x-5 bg-green-600' : 'translate-x-0'
              }`}
            ></span>
          </label>
        </div>

        {showAdvanced && (
          <div className="transition-opacity duration-300 ease-in-out">
            <div className="mb-6">
              <label htmlFor="model" className="block text-left mb-2 font-semibold text-gray-700">Select AI Model</label>
              <select
                id="model"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                <option value="turbo">Turbo</option>
                <option value="flux">Flux</option>
                <option value="flux-realism">Flux-Realism</option>
                <option value="flux-anime">Flux-Anime</option>
                <option value="flux-3d">Flux-3D</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label htmlFor="width" className="block text-left mb-2 font-semibold text-gray-700">Width</label>
                <input
                  id="width"
                  type="number"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  placeholder="Width"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="height" className="block text-left mb-2 font-semibold text-gray-700">Height</label>
                <input
                  id="height"
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="Height"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300"
                  required
                />
              </div>
            </div>
          </div>
        )}

        <button
          type="submit"
          className={`w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg hover:opacity-90 hover:scale-105 transform transition-all ${loadingImage ? 'cursor-not-allowed opacity-50' : ''}`}
          disabled={loadingImage}
        >
          {loadingImage ? (
            <div className="inline-block h-6 w-6 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
          ) : (
            'Generate Image'
          )}
        </button>
      </form>

      {error && <p className="text-lg text-red-500">{error}</p>}
      {loadingImage && <p className="text-lg text-gray-500">Generating image...</p>}

      {croppedImageURL && !loadingImage && (
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">Generated Image (Cropped):</h3>
          <img
            src={croppedImageURL}
            alt="Cropped AI Image"
            className="w-full max-w-3xl mx-auto rounded-lg shadow-lg transition-all hover:scale-105 transform max-h-[600px] object-cover"
          />
          <a
            href={croppedImageURL}
            download="generated_image.jpg"
            className="mt-6 inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-lg hover:scale-105 hover:shadow-2xl transform transition"
          >
            <FiDownload className="mr-2 text-xl" /> Download Image
          </a>
        </div>
      )}
    </section>
  );
}
