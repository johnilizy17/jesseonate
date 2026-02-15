"use client";

import { useEffect, useRef, useState } from "react";

// Custom hook for scroll animations
function useScrollAnimation() {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isVisible };
}

export default function VideosPage() {
  const headerAnim = useScrollAnimation();
  const videosAnim = useScrollAnimation();
  const ctaAnim = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section 
        ref={headerAnim.ref as React.RefObject<HTMLElement>}
        className={`bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20 px-4 transition-all duration-1000 ${
          headerAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Video Library</h1>
          <p className="text-xl">
            Watch helpful videos about buying, selling, and investing in real estate
          </p>
        </div>
      </section>

      {/* Videos Grid */}
      <section 
        ref={videosAnim.ref as React.RefObject<HTMLElement>}
        className={`py-16 px-4 transition-all duration-1000 ${
          videosAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Categories */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <button className="px-6 py-2 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition">
              All Videos
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full font-semibold hover:bg-gray-300 transition">
              Home Buying
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full font-semibold hover:bg-gray-300 transition">
              Home Selling
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full font-semibold hover:bg-gray-300 transition">
              Market Updates
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full font-semibold hover:bg-gray-300 transition">
              Tips & Advice
            </button>
          </div>

          {/* Video Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, i) => (
              <VideoCard key={i} {...video} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        ref={ctaAnim.ref as React.RefObject<HTMLElement>}
        className={`py-16 px-4 bg-gray-50 transition-all duration-1000 ${
          ctaAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Have Questions?</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Let's discuss your real estate goals and how I can help you achieve them
          </p>
          <a 
            href="tel:+16475295663" 
            className="inline-block bg-yellow-400 text-black px-12 py-4 rounded-lg font-bold hover:bg-yellow-500 transition"
          >
            SCHEDULE A CONSULTATION
          </a>
        </div>
      </section>
    </div>
  );
}

const videos = [
  {
    title: "First Time Home Buyer Guide",
    description: "Everything you need to know about buying your first home in California",
    duration: "12:45",
    category: "Home Buying",
    thumbnail: "video1"
  },
  {
    title: "How to Sell Your Home Fast",
    description: "Tips and strategies to sell your property quickly and for top dollar",
    duration: "10:30",
    category: "Home Selling",
    thumbnail: "video2"
  },
  {
    title: "Understanding Escrow Process",
    description: "A complete breakdown of the escrow process from start to finish",
    duration: "8:15",
    category: "Tips & Advice",
    thumbnail: "video3"
  },
  {
    title: "California Market Update 2026",
    description: "Latest trends and insights in the California real estate market",
    duration: "15:20",
    category: "Market Updates",
    thumbnail: "video4"
  },
  {
    title: "Home Inspection Checklist",
    description: "What to look for during a home inspection and red flags to avoid",
    duration: "11:00",
    category: "Home Buying",
    thumbnail: "video5"
  },
  {
    title: "Staging Your Home to Sell",
    description: "Professional staging tips to make your home irresistible to buyers",
    duration: "9:45",
    category: "Home Selling",
    thumbnail: "video6"
  },
  {
    title: "Negotiation Strategies",
    description: "How to negotiate the best deal whether buying or selling",
    duration: "13:30",
    category: "Tips & Advice",
    thumbnail: "video7"
  },
  {
    title: "Investment Property Guide",
    description: "How to find and evaluate investment properties in California",
    duration: "16:00",
    category: "Tips & Advice",
    thumbnail: "video8"
  },
  {
    title: "Mortgage Pre-Approval Tips",
    description: "Steps to get pre-approved and strengthen your buying position",
    duration: "7:50",
    category: "Home Buying",
    thumbnail: "video9"
  }
];

function VideoCard({ title, description, duration, category, thumbnail, index }: { 
  title: string; 
  description: string; 
  duration: string; 
  category: string; 
  thumbnail: string;
  index?: number;
}) {
  const cardAnim = useScrollAnimation();
  
  return (
    <div 
      ref={cardAnim.ref as React.RefObject<HTMLDivElement>}
      className={`bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer ${
        cardAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${(index || 0) * 100}ms` }}
    >
      {/* Video Thumbnail */}
      <div className="relative aspect-video bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center group">
        <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition"></div>
        <div className="relative z-10">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition">
            <svg className="w-8 h-8 text-purple-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
          {duration}
        </div>
      </div>

      {/* Video Info */}
      <div className="p-4">
        <div className="mb-2">
          <span className="inline-block bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full font-semibold">
            {category}
          </span>
        </div>
        <h3 className="text-lg font-bold mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
      </div>
    </div>
  );
}
