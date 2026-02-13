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

export default function HomePage() {
  const heroAnim = useScrollAnimation();
  const portfolioAnim = useScrollAnimation();
  const aboutAnim = useScrollAnimation();
  const testimonialsAnim = useScrollAnimation();
  const reviewsAnim = useScrollAnimation();
  const detailsAnim = useScrollAnimation();

  return (
    <div>
      {/* Hero Section */}
      <section 
        ref={heroAnim.ref as React.RefObject<HTMLElement>}
        className={`bg-black text-white py-16 px-4 transition-all duration-1000 ${
          heroAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm tracking-wider mb-4">DID YOU KNOW...</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              You Can Move<br />In <span className="text-purple-600">Under</span> 45 Days
            </h1>
            <p className="text-lg mb-8">
              Whether it's your first time moving or a seasoned seller, I can help you <span className="font-semibold">start</span>
            </p>
            <a href="/schedule" className="inline-block bg-yellow-400 text-black px-8 py-3 rounded font-semibold hover:bg-yellow-500 transition">
              GRAB A SPOT TO CHAT
            </a>
            <div className="flex items-center gap-4 mt-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gray-600 border-2 border-black"></div>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">★</span>
                <span className="font-bold">5.0</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -right-4 bg-white text-black px-6 py-3 rounded-full font-semibold border-4 border-purple-600 z-10">
              30 Day Escrow 🎉
            </div>
            <div className="bg-gray-700 rounded-lg h-96 flex items-center justify-center">
              {/* Placeholder for hero image */}
              <span className="text-gray-500">Hero Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section 
        ref={portfolioAnim.ref as React.RefObject<HTMLElement>}
        className={`relative overflow-hidden py-8 transition-all duration-1000 delay-200 ${
          portfolioAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* First Row - Scrolls Left */}
        <div className="flex animate-scroll-left mb-0">
          {[...properties.slice(0, 6), ...properties.slice(0, 6)].map((property, i) => (
            <PropertyCard key={`row1-${i}`} {...property} />
          ))}
        </div>
        
        {/* Second Row - Scrolls Right */}
        <div className="flex animate-scroll-right">
          {[...properties.slice(6), ...properties.slice(6)].map((property, i) => (
            <PropertyCard key={`row2-${i}`} {...property} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section 
        ref={aboutAnim.ref as React.RefObject<HTMLElement>}
        className={`bg-purple-600 text-white transition-all duration-1000 ${
          aboutAnim.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="grid md:grid-cols-2">
          {/* Left Side - Image */}
          <div className="relative bg-gray-200 min-h-[600px] flex items-center justify-center">
            {/* Background property images */}
            <div className="absolute inset-0 grid grid-cols-3 opacity-50">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-gray-400"></div>
              ))}
            </div>
            
            {/* Main content */}
            <div className="relative z-10 flex flex-col items-center">
              {/* Instagram Card */}
              <div className="bg-black rounded-2xl p-4 mb-8 w-80">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gray-600"></div>
                  <div className="flex-1">
                    <p className="font-bold text-white">jessetek</p>
                    <div className="flex gap-4 text-xs text-gray-400">
                      <span><strong className="text-white">421</strong> posts</span>
                      <span><strong className="text-white">15.4K</strong> followers</span>
                      <span><strong className="text-white">1,448</strong> following</span>
                    </div>
                  </div>
                </div>
                <p className="text-white font-bold mb-1">OLA</p>
                <p className="text-gray-300 text-sm mb-2">
                  On a mission to inspire and help people move, invest, and elevate their lifestyle through Real Estate 🏡
                </p>
                <p className="text-blue-400 text-sm">@JesseAllAccess</p>
              </div>

              {/* Laurel Wreath Frame with Photo */}
              <div className="relative">
                {/* Laurel Wreath SVG or Image placeholder */}
                <div className="relative w-80 h-80">
                  {/* Laurel decoration */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full border-8 border-gray-400 rounded-full opacity-30"></div>
                  </div>
                  
                  {/* Photo */}
                  <div className="absolute inset-8 rounded-full bg-gray-600 overflow-hidden flex items-center justify-center">
                    <span className="text-gray-400">Jesse Photo</span>
                  </div>
                </div>

                {/* Banner */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-400 px-12 py-3 text-center" style={{ clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)' }}>
                  <p className="font-bold text-2xl text-gray-800 tracking-wider">OLA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Text */}
          <div className="p-12 md:p-16 flex flex-col justify-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Hi! I'm Realtor,<br />OLA.
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              As a homeowner, I remember how overwhelming the home-buying process felt...like tackling a lego puzzle without instructions. 
              That experience inspired me to help others navigate buying and selling with confidence and ease. Everyone deserves a trusted 
              guide who truly understands the journey and can make it feel less daunting.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              After plenty of firsthand experience and research, I developed a <span className="underline decoration-2">streamlined</span> approach to simplify every step. 
              From managing the details to decoding market trends, <span className="font-bold">I'm here to make your experience smooth, stress-free, and even enjoyable.</span> With the 
              right mix of expertise, humor, and heart, my mission is to help you take that next big step with confidence.
            </p>
            <a href="/services" className="inline-block bg-yellow-400 text-black px-8 py-4 rounded font-bold hover:bg-yellow-500 transition text-center">
              I WANT TO SEE THE PATH
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        ref={testimonialsAnim.ref as React.RefObject<HTMLElement>}
        className={`py-16 px-4 bg-white transition-all duration-1000 ${
          testimonialsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-green-500 text-center font-semibold mb-2">BUT FIRST...</p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">See What My Clients Said</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredTestimonials.map((testimonial, i) => (
              <TestimonialCard key={i} {...testimonial} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section 
        ref={reviewsAnim.ref as React.RefObject<HTMLElement>}
        className={`py-16 px-4 bg-gray-50 transition-all duration-1000 delay-200 ${
          reviewsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Rating Header */}
          <div className="text-center mb-12">
            <div className="text-7xl font-bold mb-2">5.00</div>
            <div className="text-yellow-400 text-3xl">★★★★★</div>
          </div>

          {/* Google Review Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {googleReviews.map((review, i) => (
              <GoogleReviewCard key={i} {...review} index={i} />
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a href="/schedule" className="inline-block bg-green-500 text-white px-12 py-4 rounded font-bold hover:bg-green-600 transition">
              TALK TO OLA - NO PRESSURE
            </a>
          </div>
        </div>
      </section>

      {/* Wanna Know More Details Section */}
      <section 
        ref={detailsAnim.ref as React.RefObject<HTMLElement>}
        className={`bg-black text-white py-16 px-4 transition-all duration-1000 ${
          detailsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            <span className="text-cyan-400">Wanna Know More Details?</span>
          </h2>
          <p className="text-lg text-white">
            Here's what you're going to <span className="font-bold">accomplish...</span>
          </p>
        </div>
      </section>

      {/* Phone Call Section - Full White Background */}
      <section className="bg-white text-black py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Side - Step */}
            <div>
              <div className="mb-4">
                <span className="text-green-500 font-bold text-xs tracking-widest inline-block border-b-2 border-green-500 pb-1">STEP 1</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 flex items-start gap-3">
                <span className="text-green-500 text-4xl leading-none mt-1">▶</span>
                <span className="leading-tight">The Phone Call</span>
              </h3>
              <p className="text-gray-600 text-base">
                Think of this step as our "first date" — but without the awkward silences.
              </p>
            </div>

            {/* Right Side - Benefits */}
            <div className="space-y-6">
              <div className="flex gap-3 items-start">
                <span className="text-green-500 text-xl font-bold flex-shrink-0 mt-1">→</span>
                <div>
                  <p className="font-bold text-base mb-1">No pressure, no contracts.</p>
                  <p className="text-gray-600 text-sm">No pushy sales vibes, just honest advice.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-green-500 text-xl font-bold flex-shrink-0 mt-1">→</span>
                <div>
                  <p className="font-bold text-base mb-1">Ask me anything.</p>
                  <p className="text-gray-600 text-sm">Whether it's about interest rates or "What's escrow?" I've got answers.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-green-500 text-xl font-bold flex-shrink-0 mt-1">→</span>
                <div>
                  <p className="font-bold text-base mb-1">Walk away smarter.</p>
                  <p className="text-gray-600 text-sm">Even if we don't move forward, you'll leave with insights to help you in your journey.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-black text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg mb-6">
            Join 5,000+ home-owners and home-buyers getting interest rate updates through 1 text a week
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <input 
              type="text" 
              placeholder="Enter Full Name..." 
              className="flex-1 px-4 py-3 rounded bg-transparent border border-gray-600 text-white placeholder-gray-500"
            />
            <input 
              type="tel" 
              placeholder="Enter Mobile Number..." 
              className="flex-1 px-4 py-3 rounded bg-transparent border border-gray-600 text-white placeholder-gray-500"
            />
          </div>
          <button className="mt-6 bg-yellow-400 text-black px-12 py-3 rounded font-semibold hover:bg-yellow-500 transition">
            KEEP ME UPDATED
          </button>
        </div>
      </section>
    </div>
  );
}

const featuredTestimonials = [
  {
    name: "Vicky Zadian",
    location: "Los Angeles, CA",
    title: "Very Skilled Realtor",
    text: "Jesse sold my LA triplex quickly! His expertise stood out as soon as we met. Highly recommend using him!"
  },
  {
    name: "Catherine Sananbria",
    location: "Rancho Cucamonga, CA",
    title: "Stress Free with Jesse",
    text: "Jesse made finding a home easy and stress-free. He's sharp, kind, and an amazing realtor. Call him now!!"
  },
  {
    name: "Akshay Shinde",
    location: "Pasadena, CA",
    title: "A+ Service",
    text: "Jesse made buying our first home so easy! He was attentive, and always available for us. He's your guy"
  }
];

const googleReviews = [
  {
    name: "Marisol Rivera",
    initial: "MR",
    rating: 5,
    text: "Shout out to our Home Buying DREAM TEAM Vanessa & Jesse!Seriously, if you ever considered home owning, hit up these two wonderful and AMAZING human be..."
  },
  {
    name: "jose malvaez",
    initial: "JM",
    rating: 5,
    text: "Jesse introduced my wife and I to his team! Him and his team helped us with this amazing process of buying our first property! It is truly an incredib..."
  },
  {
    name: "Nuria Marroquin",
    initial: "NM",
    rating: 5,
    text: "Jesse was a great person and very helpful in this process! He was very patient and very opened hearted .If you ever looking for someone to help you i..."
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
    text: "Jesse helped us buying our first home in LA! He was patient and attentive with our needs and wants. He always made himself available to clarify any do..."
  },
  {
    name: "Jessica Ruiz",
    initial: "JR",
    rating: 5,
    text: "I can't express how thankful and grateful we are for Jesse He always made himself available and was very patient with all our questions.He is someone ..."
  },
  {
    name: "K'kai Sanabria",
    initial: "KS",
    rating: 5,
    text: "By far the best decision me and my fiancé made, was to chose Jesse as our realtor.He made the process not only a breeze but enjoyable as well. Finding..."
  },
  {
    name: "Faith T",
    initial: "FT",
    rating: 5,
    text: "Jesse was amazing! He helped us find our dream home and made the entire process smooth and stress-free. Highly recommend!"
  }
];

const properties = [
  { city: "La Habra, CA", type: "Represented Seller & Buyer" },
  { city: "Downey, CA", type: "Represented Seller & Buyer" },
  { city: "Whittier, CA", type: "Represented Buyer" },
  { city: "Anaheim, CA", type: "Represented Seller" },
  { city: "Buena Park, CA", type: "Represented Seller" },
  { city: "Pico Rivera, CA", type: "Represented Buyer" },
  { city: "Hemet, CA", type: "Represented Buyer" },
  { city: "Ontario, CA", type: "Represented Buyer" },
  { city: "Cucamonga, CA", type: "Represented Buyer" },
  { city: "Anaheim, CA", type: "Represented Seller & Buyer" },
  { city: "Moval, CA", type: "Represented Seller" },
  { city: "Norwalk, CA", type: "Represented Buyer" }
];

function GoogleReviewCard({ name, initial, rating, text, index }: { name: string; initial: string; rating: number; text: string; index?: number }) {
  const cardAnim = useScrollAnimation();
  
  return (
    <div 
      ref={cardAnim.ref as React.RefObject<HTMLDivElement>}
      className={`bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-700 ${
        cardAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${(index || 0) * 100}ms` }}
    >
      {/* Rating */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl font-bold text-yellow-500">{rating}</span>
        <div className="text-yellow-400">★★★★★</div>
      </div>
      
      {/* Review Text */}
      <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">
        {text}
      </p>
      <a href="#" className="text-blue-600 text-sm font-semibold">More</a>
      
      {/* Reviewer Info */}
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

function PropertyCard({ city, type }: { city: string; type: string }) {
  return (
    <div className="relative h-48 w-64 bg-gray-700 overflow-hidden flex-shrink-0">
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="absolute bottom-4 left-4 text-white">
        <p className="font-bold text-sm">{city}</p>
        <p className="text-xs">{type}</p>
      </div>
    </div>
  );
}

function TestimonialCard({ name, location, title, text, index }: { name: string; location: string; title: string; text: string; index?: number }) {
  const cardAnim = useScrollAnimation();
  
  return (
    <div 
      ref={cardAnim.ref as React.RefObject<HTMLDivElement>}
      className={`bg-white p-6 rounded-lg border-4 border-purple-600 shadow-lg transition-all duration-700 ${
        cardAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${(index || 0) * 150}ms` }}
    >
      <div className="w-20 h-20 rounded-full bg-gray-300 mx-auto mb-4"></div>
      <h3 className="text-xl font-bold text-center mb-2">"{title}"</h3>
      <p className="text-gray-700 text-center mb-4">{text}</p>
      <p className="text-center font-semibold">- {name}</p>
      <p className="text-center text-gray-500 text-sm italic">{location}</p>
      <div className="text-yellow-400 text-center mt-2">★★★★★</div>
    </div>
  );
}
