"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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

export default function ReviewsPage() {
  const headerAnim = useScrollAnimation();
  const ctaAnim = useScrollAnimation();
  const photosAnim = useScrollAnimation();
  const googleReviewsAnim = useScrollAnimation();
  const featuredAnim = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header with Gradient */}
      <section 
        ref={headerAnim.ref as React.RefObject<HTMLElement>}
        className={`bg-gradient-to-r from-purple-500 via-purple-400 to-cyan-400 text-white py-20 px-4 transition-all duration-1000 ${
          headerAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="relative inline-block mb-8">
            <h1 className="text-6xl md:text-7xl font-bold text-white opacity-30">TESTIMONIALS</h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-5xl md:text-6xl font-bold text-black" style={{ fontFamily: 'cursive' }}>Client</span>
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-white rounded-full p-3">
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-8 h-8" />
              </div>
              <div className="text-center mt-1">
                <div className="text-yellow-400 text-sm">★★★★★</div>
                <p className="text-xs text-white">5.0</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What past clients are saying - Featured Testimonials */}
      <section 
        ref={featuredAnim.ref as React.RefObject<HTMLElement>}
        className={`py-16 px-4 bg-white transition-all duration-1000 ${
          featuredAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">What past clients are saying</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {featuredTestimonials.map((testimonial, i) => (
              <FeaturedTestimonialCard key={i} {...testimonial} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Client Photos Collage */}
      <section 
        ref={photosAnim.ref as React.RefObject<HTMLElement>}
        className={`py-8 px-4 transition-all duration-1000 ${
          photosAnim.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full h-[600px] md:h-[800px] rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="/review.png" 
              alt="Client Photos Collage" 
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Google Reviews Grid */}
      <section 
        ref={googleReviewsAnim.ref as React.RefObject<HTMLElement>}
        className={`py-16 px-4 bg-gray-50 transition-all duration-1000 ${
          googleReviewsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Rating Header */}
          <div className="text-center mb-12">
            <div className="text-7xl font-bold mb-2">5.00</div>
            <div className="text-yellow-400 text-3xl mb-2">★★★★★</div>
          </div>

          {/* Google Review Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {googleReviews.map((review, i) => (
              <GoogleReviewCard key={i} {...review} index={i} />
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center">
            <button className="bg-white border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition">
              Load More
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        ref={ctaAnim.ref as React.RefObject<HTMLElement>}
        className={`py-16 px-4 transition-all duration-1000 ${
          ctaAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-4 border-purple-600 rounded-2xl p-12 text-center">
            <p className="text-purple-600 font-semibold mb-4 text-sm tracking-wider">READY TO TAKE THE NEXT STEP?</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Chat with OLA - No Pressure,<br />No BS, Real Advice
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you're buying a home or selling your property for top dollar, the journey starts with a conversation. 
              Click below to answer easy questions, and let's start planning together.
            </p>
            <a 
              href="tel:+16475295663" 
              className="inline-block bg-yellow-400 text-black px-8 py-3 rounded font-bold hover:bg-yellow-500 transition"
            >
              GRAB A SPOT TO CHAT
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

const featuredTestimonials = [
  {
    name: "Catherine Sananbria",
    location: "Rancho Cucamonga, CA",
    image: "CS",
    text: "He made the process not only a breeze but enjoyable as well! Finding our first home was an amazing experience and we were always at ease any of our anxiety and answer any questions we had. He's patient and kind and everything you could hope to find in a great realtor. We definitely recommend him to anyone looking to embark on this new journey of home ownership."
  },
  {
    name: "Akshay Shinde",
    location: "Pasadena, CA",
    image: "AS",
    text: "OLA helped us buying our first home in LA! He was patient and attentive with our needs and wants. He always made himself available to clarify any doubts or concerns throughout the process. He made the entire process super easy and convenient. Definitely recommend OLA and his team! A+ Service!!!"
  },
  {
    name: "Jessica Ruiz",
    location: "Whittier, CA",
    image: "JR",
    text: "I can't express how thankful and grateful we are for OLA. He always made himself available and was very patient with all our questions. He is someone who my family and I will never forget. My 3 year old still asks 'when can mr OLA come over to our new house'. From the bottom of my heart thank him for helping us thru this journey, we were truly in good hands."
  }
];

const googleReviews = [
  {
    name: "Marisol Rivera",
    initial: "MR",
    rating: 5,
    text: "Shout out to our Home Buying DREAM TEAM Vanessa & OLA!Seriously, if you ever considered home owning, hit up these two wonderful and AMAZING human be..."
  },
  {
    name: "jose malvaez",
    initial: "JM",
    rating: 5,
    text: "OLA introduced my wife and I to his team! Him and his team helped us with this amazing process of buying our first property! It is truly an incredib..."
  },
  {
    name: "Nuria Marroquin",
    initial: "NM",
    rating: 5,
    text: "OLA was a great person and very helpful in this process! He was very patient and very opened hearted .If you ever looking for someone to help you i..."
  },
  {
    name: "Tiffany Huazo",
    initial: "TH",
    rating: 5,
    text: "He is the best agent I have ever worked with. He really cares about his clients and goes above and beyond for them. I found my home buying experience ..."
  },
  {
    name: "akshay shinde",
    initial: "AS",
    rating: 5,
    text: "OLA helped us buying our first home in LA! He was patient and attentive with our needs and wants. He always made himself available to clarify any do..."
  },
  {
    name: "Jessica Ruiz",
    initial: "JR",
    rating: 5,
    text: "I can't express how thankful and grateful we are for OLA He always made himself available and was very patient with all our questions.He is someone ..."
  },
  {
    name: "K'kai Sanabria",
    initial: "KS",
    rating: 5,
    text: "By far the best decision me and my fiancé made, was to chose OLA as our realtor.He made the process not only a breeze but enjoyable as well. Finding..."
  },
  {
    name: "Faith T",
    initial: "FT",
    rating: 5,
    text: "OLA was amazing! He helped us find our dream home and made the entire process smooth and stress-free. Highly recommend!"
  }
];

function FeaturedTestimonialCard({ name, location, image, text, index }: { name: string; location: string; image: string; text: string; index?: number }) {
  const cardAnim = useScrollAnimation();
  
  return (
    <div 
      ref={cardAnim.ref as React.RefObject<HTMLDivElement>}
      className={`bg-white p-8 rounded-2xl border-4 border-purple-600 shadow-lg transition-all duration-700 ${
        cardAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${(index || 0) * 150}ms` }}
    >
      <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-gray-600">
        {image}
      </div>
      <p className="text-gray-700 text-sm leading-relaxed mb-6">{text}</p>
      <div className="text-center">
        <p className="font-bold text-lg">{name}</p>
        <p className="text-gray-500 text-sm">{location}</p>
        <div className="text-yellow-400 mt-2">★★★★★</div>
      </div>
    </div>
  );
}

function GoogleReviewCard({ name, initial, rating, text, index }: { name: string; initial: string; rating: number; text: string; index?: number }) {
  const cardAnim = useScrollAnimation();
  
  return (
    <div 
      ref={cardAnim.ref as React.RefObject<HTMLDivElement>}
      className={`bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition-all duration-700 ${
        cardAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${(index || 0) * 50}ms` }}
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl font-bold text-yellow-500">{rating}</span>
        <div className="text-yellow-400">★★★★★</div>
      </div>
      
      <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">{text}</p>
      <a href="#" className="text-blue-600 text-sm font-semibold">More</a>
      
      <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-200">
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold text-sm">
          {initial}
        </div>
        <span className="text-gray-800 font-medium text-sm">{name}</span>
        <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 ml-auto" />
      </div>
    </div>
  );
}
