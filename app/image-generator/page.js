'use client';

import { useState, useEffect } from 'react';
import { FiDownload } from 'react-icons/fi';
import { AiOutlineClose, AiOutlineCheckCircle, AiOutlineSetting } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import { useAuth } from '../libs/AuthContext';
import LoadingSpinner from '../components/LoadingSpinner';

const MODE_IMAGES = {
  turbo: '/img/Turbo.jpg',
  flux: '/img/Flux.jpg',
  'flux-realism': '/img/flux-realism.jpg',
  'flux-anime': '/img/flux-anime.jpg',
  'flux-3d': '/img/flux-3d.jpg',
  'flux-disney': '/img/flux-disney.jpg',
  'flux-pixel': '/img/flux-pixel.jpg',
  'flux-4o': '/img/flux-4o.jpg',
  'any-dark': '/img/any-dark.jpg'
};

export default function ImageGenerator() {
  const { user, loading } = useAuth();
  const [prompt, setPrompt] = useState('');
  const [model, setModel] = useState('flux');
  const [width, setWidth] = useState(1024);
  const [height, setHeight] = useState(1024);
  const [numImages, setNumImages] = useState(1);
  const [version, setVersion] = useState('V1');
  const [aspectRatio, setAspectRatio] = useState('1:1');
  const [imageURLs, setImageURLs] = useState([]);
  const [loadingImage, setLoadingImage] = useState(false);
  const [error, setError] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  const handleAspectRatioChange = (e) => {
    const ratio = e.target.value;
    setAspectRatio(ratio);
    switch (ratio) {
      case '16:9':
        setWidth(1920);
        setHeight(1080);
        break;
      case '9:16':
        setWidth(1080);
        setHeight(1920);
        break;
      case '21:9':
        setWidth(2520);
        setHeight(1080);
        break;
      case '9:21':
        setWidth(1080);
        setHeight(2520);
        break;
      case '1:2':
        setWidth(1000);
        setHeight(2000);
        break;
      case '2:1':
        setWidth(2000);
        setHeight(1000);
        break;
      case '4:3':
        setWidth(1024);
        setHeight(768);
        break;
      case '3:2':
        setWidth(1500);
        setHeight(1000);
        break;
      default: // '1:1'
        setWidth(1024);
        setHeight(1024);
    }
  };

  const generateRandomSeed = () => Math.floor(Math.random() * 10000);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt) return;
  
    setLoadingImage(true);
    setError('');
    setImageURLs([]);
  
    try {
      // CORS Proxy URL
      const corsProxy = "https://cors-anywhere.herokuapp.com/";
  
      // Define the API URL depending on the version
      let apiUrl;
      if (version === 'V1') {
        apiUrl = (seed) =>
          `${corsProxy}https://image.pollinations.ai/prompt/${encodeURIComponent(`${prompt} ${seed}`)}?width=${width}&height=${height}&model=${model}&seed=${seed}&nologo=true`;
      } else {
        apiUrl = (uniquePrompt) =>
          `${corsProxy}https://api.airforce/imagine2?model=${model}&prompt=${encodeURIComponent(uniquePrompt)}&size=${aspectRatio}&nologo=true&timestamp=${Date.now()}`;
      }
  
      const responses = version === 'V1'
        ? await Promise.all(
            Array.from({ length: numImages }).map(() => {
              const uniqueSeed = generateRandomSeed();
              const url = apiUrl(uniqueSeed);
              return fetch(url);
            })
          )
        : await Promise.all(
            Array.from({ length: numImages }).map((_, index) => {
              const uniquePrompt = `${prompt} variation ${index + 1}`;
              const url = apiUrl(uniquePrompt);
              return fetch(url);
            })
          );
  
      const imageBlobs = await Promise.all(responses.map((response) => response.blob()));
      const imageObjectsURLs = imageBlobs.map((blob) => URL.createObjectURL(blob));
  
      imageObjectsURLs.forEach((url, index) => {
        console.log(`Image ${index + 1} URL (${version}): ${url}`);
      });
  
      setImageURLs(imageObjectsURLs);
    } catch (error) {
      console.error('Failed to generate images:', error);
      setError('Failed to generate images. Please try again.');
    }
  
    setLoadingImage(false);
  };

  const handleModelSelect = (selectedModel) => {
    setModel(selectedModel);
    setShowModal(false);
  };

  const closePreview = () => {
    setPreviewImage(null);
  };

  return (
    <div className="flex">
      <aside className="w-64 bg-white p-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Advanced Settings</h3>
        <div className="mb-6 flex items-center">
          <span className="text-gray-700 mr-2">Show Settings</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={showAdvanced}
              onChange={() => setShowAdvanced(!showAdvanced)}
            />
            <div
              className={`w-11 h-6 rounded-full transition peer-focus:ring-4 peer-focus:ring-purple-300 ${showAdvanced ? 'bg-green-500' : 'bg-gray-200'}`}
            ></div>
            <span
              className={`absolute left-[2px] top-[2px] h-5 w-5 bg-white rounded-full transition-transform ${showAdvanced ? 'translate-x-5 bg-green-600' : 'translate-x-0'}`}
            ></span>
          </label>
        </div>

        {showAdvanced && (
          <div className="transition-opacity duration-300 ease-in-out">
            <div className="mb-6">
              <label htmlFor="version" className="block text-left mb-2 font-semibold text-gray-700">Select Version</label>
              <select
                id="version"
                value={version}
                onChange={(e) => setVersion(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-300"
              >
                <option value="V1">Version 1</option>
                <option value="V2">Version 2</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="aspect-ratio" className="block text-left mb-2 font-semibold text-gray-700">Aspect Ratio</label>
              <select
                id="aspect-ratio"
                value={aspectRatio}
                onChange={handleAspectRatioChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-300"
              >
                <option value="1:1">1:1</option>
                <option value="16:9">16:9</option>
                <option value="9:16">9:16</option>
                <option value="21:9">21:9</option>
                <option value="9:21">9:21</option>
                <option value="1:2">1:2</option>
                <option value="2:1">2:1</option>
                <option value="4:3">4:3</option>
                <option value="3:2">3:2</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="model" className="block text-left mb-2 font-semibold text-gray-700">Selected Model</label>
              <button
                className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 px-4 rounded-lg hover:scale-105 hover:shadow-lg transition-all flex justify-between items-center"
                onClick={() => setShowModal(true)}
              >
                <span>{model}</span>
                <AiOutlineSetting className="text-white text-lg" />
              </button>
            </div>

            <div className="mb-6">
              <label className="block text-left mb-2 font-semibold text-gray-700">Number of Images</label>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((num) => (
                  <button
                    key={num}
                    type="button"
                    className={`py-2 px-4 rounded-lg text-white font-semibold ${numImages === num ? 'bg-purple-600' : 'bg-gray-300'} hover:bg-purple-500 transition-all`}
                    onClick={() => setNumImages(num)}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </aside>

      <section className="container mx-auto py-12 px-6 lg:px-12 text-center bg-gradient-to-b from-gray-50 to-gray-100 flex-1">
        <h2 className="text-5xl font-extrabold mb-8 text-gray-900">AI Image Generator</h2>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-12 bg-white p-10 rounded-lg shadow-lg">
          <textarea
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter a creative prompt..."
            className="w-full px-6 py-4 text-xl mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-300 resize-none"
            rows={6}
            required
          ></textarea>

          <button
            type="submit"
            className={`w-full py-4 text-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:scale-105 hover:shadow-lg transition-all ${loadingImage ? 'cursor-not-allowed opacity-50' : ''}`}
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
        {loadingImage && <p className="text-lg text-gray-500">Generating images...</p>}

        {imageURLs.length > 0 && (
          <div className={`mt-8 grid grid-cols-${numImages === 4 ? '4' : '1 md:grid-cols-2 lg:grid-cols-3'} gap-4`}>
            {imageURLs.map((url, index) => (
              <div key={index} className="relative bg-white p-4 rounded-lg shadow-lg hover:scale-105 transition-all group cursor-pointer">
                <img
                  src={url}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                  onClick={() => setPreviewImage(url)}
                />
                <a
                  href={url}
                  download={`generated_image_${index + 1}.jpg`}
                  className="absolute bottom-4 right-4 from-green-500 to-teal-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <FiDownload className="text-xl" />
                </a>
              </div>
            ))}
          </div>
        )}

        {previewImage && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex items-center justify-center z-50" onClick={closePreview}>
            <div className="relative max-w-4xl mx-auto p-6">
              <button className="absolute top-4 right-4 text-white hover:text-gray-400 transition" onClick={closePreview}>
                <AiOutlineClose size={32} />
              </button>
              <img src={previewImage} alt="Preview" className="rounded-lg w-full h-auto" />
              <a
                href={previewImage}
                download="preview_image.jpg"
                className="mt-4 inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-teal-500 text-white font-semibold rounded-lg hover:scale-105 transform transition"
              >
                <FiDownload className="mr-2 text-xl" /> Download Image
              </a>
            </div>
          </div>
        )}
      </section>

      {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white p-10 rounded-lg shadow-lg w-[650px] relative">
            <button
              className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 transition"
              onClick={() => setShowModal(false)}
            >
              <AiOutlineClose size={24} />
            </button>
            <h3 className="text-xl font-bold mb-6 text-gray-800">Select AI Model</h3>
            <div className="grid grid-cols-3 gap-6">
              {Object.entries(MODE_IMAGES).map(([key, imageSrc]) => (
                <button
                  key={key}
                  className={`relative p-4 bg-cover bg-center bg-no-repeat rounded-lg shadow-md hover:scale-105 transition-all hover:shadow-lg ${model === key ? 'ring-4 ring-purple-500' : ''}`}
                  style={{ backgroundImage: `url(${imageSrc})` }}
                  onClick={() => handleModelSelect(key)}
                >
                  <div className="absolute inset-0 bg-black opacity-25 rounded-lg"></div>
                  <h4 className="relative mt-4 text-center font-semibold text-white capitalize">{key.replace('-', ' ')}</h4>
                  {model === key && (
                    <AiOutlineCheckCircle className="absolute top-2 right-2 text-purple-500 text-2xl" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
