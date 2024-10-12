'use client';

import { FiArrowRight, FiImage, FiSettings, FiStar, FiBriefcase } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 opacity-75"></div>
        <h1 className="text-6xl font-extrabold mb-6 relative z-10">Unleash Creativity with MorpheAI</h1>
        <p className="text-xl mb-8 relative z-10">AI-powered image generation at your fingertips. Create with cutting-edge technology in various styles.</p>
        <button onClick={() => router.push('/image-generator')} className="relative z-10 bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-4 rounded-lg text-lg font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-transform mb-4">
          Get Started for Free
        </button>
        <button onClick={() => router.push('/about')} className="relative z-10 text-white border border-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-purple-700 hover:scale-105 transition-transform">
          Learn More
        </button>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-12">Why Choose MorpheAI?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FeatureCard icon={<FiStar />} title="Versatile Styles" description="Choose from a variety of styles, including Realism, Anime, and Pixel Art." />
          <FeatureCard icon={<FiSettings />} title="Advanced AI Models" description="Access multiple AI models tailored to your creative needs." />
          <FeatureCard icon={<FiImage />} title="Customizable Options" description="Adjust aspect ratios, models, and other settings with ease." />
          <FeatureCard icon={<FiArrowRight />} title="Fast and Reliable" description="Experience speedy image generation with minimal downtime." />
          <FeatureCard icon={<FiSettings />} title="No Expertise Required" description="User-friendly platform suitable for everyone." />
          <FeatureCard icon={<FiStar />} title="Free to Start" description="Explore MorpheAI with no upfront cost." />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gradient-to-br from-white to-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-12">Generate Images in 3 Simple Steps</h2>
        <div className="flex flex-col md:flex-row justify-around items-center max-w-6xl mx-auto">
          <StepCard step="1" title="Select a Model" description="Choose from our diverse AI models." />
          <StepCard step="2" title="Enter Your Prompt" description="Describe what you want, and MorpheAI will bring it to life." />
          <StepCard step="3" title="Download & Share" description="Instantly download and share your creation." />
        </div>
      </section>

      {/* New Use Cases Section */}
      <section className="py-24 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-12">Explore Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <UseCaseCard icon={<FiBriefcase />} title="Marketing & Branding" description="Create stunning visuals for social media, ads, and more." />
          <UseCaseCard icon={<FiImage />} title="Digital Art" description="Bring your digital art concepts to life with AI-powered creativity." />
          <UseCaseCard icon={<FiStar />} title="Content Creation" description="Enhance blogs, articles, and multimedia with unique images." />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white text-center">
        <h2 className="text-4xl font-bold mb-12">What Our Users Say</h2>
        <div className="flex flex-col md:flex-row justify-around items-center max-w-6xl mx-auto">
          <TestimonialCard name="User 1" feedback="MorpheAI made it so easy to generate stunning images. I’m amazed at the quality!" />
          <TestimonialCard name="User 2" feedback="The variety of styles is incredible. I’ve created everything from pixel art to realistic portraits." />
        </div>
      </section>

      {/* Get Started */}
      <section className="py-24 bg-purple-700 text-white text-center">
        <h2 className="text-5xl font-bold mb-8">Ready to Start Creating?</h2>
        <button onClick={() => router.push('/image-generator')} className="bg-white text-purple-700 px-8 py-4 rounded-lg text-lg font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-transform">
          Generate Your First Image
        </button>
      </section>
    </div>
  );
}

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform">
    <div className="text-3xl mb-4 text-blue-600">{icon}</div>
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

const StepCard = ({ step, title, description }) => (
  <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg mb-6 md:mb-0 transition-transform hover:scale-105">
    <h4 className="text-xl font-bold mb-2">Step {step}</h4>
    <h5 className="text-lg font-semibold">{title}</h5>
    <p>{description}</p>
  </div>
);

const UseCaseCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform">
    <div className="text-3xl mb-4 text-blue-600">{icon}</div>
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

const TestimonialCard = ({ name, feedback }) => (
  <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-transform hover:scale-105">
    <p className="italic">"{feedback}"</p>
    <p className="mt-4 font-bold">- {name}</p>
  </div>
);
