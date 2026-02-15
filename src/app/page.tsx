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

export default function HomePage() {
  const heroAnim = useScrollAnimation();
  const portfolioAnim = useScrollAnimation();
  const aboutAnim = useScrollAnimation();
  const testimonialsAnim = useScrollAnimation();
  const reviewsAnim = useScrollAnimation();
  const ctaAnim = useScrollAnimation();
  const detailsAnim = useScrollAnimation();

  return (
    <div>
      {/* Hero Section */}
      <section
        ref={heroAnim.ref as React.RefObject<HTMLElement>}
        className={`bg-black text-white py-16 px-4 transition-all duration-1000 relative overflow-hidden ${heroAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 animate-gradient"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10">
          <div className="space-y-6">
            <p className="text-sm tracking-wider mb-4 animate-fade-in-scale">DID YOU KNOW...</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
              You Can Move<br />In <span className="text-purple-600 inline-block hover-scale">Under</span> 45 Days
            </h1>
            <p className="text-lg mb-8 animate-fade-in-scale" style={{ animationDelay: '0.2s' }}>
              Whether it's your first time moving or a seasoned seller, I can help you <span className="font-semibold">start</span>
            </p>
            <a href="tel:+16475295663" className="inline-block bg-yellow-400 text-black px-8 py-3 rounded font-semibold hover:bg-yellow-500 transition-all duration-300 hover-lift hover:scale-110 animate-bounce-in" style={{ animationDelay: '0.4s' }}>
              CALL/TEXT: (647) 529-5663
            </a>
            <div className="flex items-center gap-4 mt-8 animate-fade-in-scale" style={{ animationDelay: '0.6s' }}>
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gray-600 border-2 border-black hover-scale transition-all duration-300 overflow-hidden relative" style={{ animationDelay: `${0.7 + i * 0.1}s` }}>
                    <Image
                      src={`/${i}.png`}
                      alt={`Client ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full bg-gray-600 border-2 border-black hover-scale transition-all duration-300 overflow-hidden relative" style={{ animationDelay: '1.0s' }}>
                  <Image
                    src="/4.jpg"
                    alt="OLA"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 hover-scale">
                <span className="text-yellow-400 animate-pulse">★</span>
                <span className="font-bold">5.0</span>
              </div>
            </div>
          </div>
          <div className="relative animate-rotate-in" style={{ animationDelay: '0.3s' }}>
            <div className="absolute -top-4 -right-4 bg-white text-black px-6 py-3 rounded-full font-semibold border-4 border-purple-600 z-10 animate-float hover-glow">
              30 Day Escrow 🎉
            </div>
            <div className="bg-gray-700 rounded-lg h-96 overflow-hidden hover-lift transition-all duration-500 hover:bg-gray-600 relative group">
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                <div className="animate-shimmer absolute inset-0"></div>
              </div>
              <Image
                src="/user.jpg"
                alt="OLA - Real Estate Expert"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section
        ref={portfolioAnim.ref as React.RefObject<HTMLElement>}
        className={`relative overflow-hidden py-8 transition-all duration-1000 delay-200 ${portfolioAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
      >
        {/* First Row - Scrolls Left */}
        <div className="flex animate-scroll-left hover:pause mb-0" style={{background:"#000"}}>
          {[...properties.slice(0, 6), ...properties.slice(0, 6)].map((property, i) => (
            <PropertyCard key={`row1-${i}`} {...property} />
          ))}
        </div>

        {/* Second Row - Scrolls Right */}
        <div className="flex animate-scroll-right hover:pause">
          {[...properties.slice(6), ...properties.slice(6)].map((property, i) => (
            <PropertyCard key={`row2-${i}`} {...property} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section
        ref={aboutAnim.ref as React.RefObject<HTMLElement>}
        className={`bg-purple-600 text-white transition-all duration-1000 ${aboutAnim.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
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
                  <div className="w-12 h-12 rounded-full bg-gray-600 overflow-hidden relative hover-scale transition-all duration-300">
                    <Image
                      src="/user.jpg"
                      alt="OLA"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-white">OLA</p>
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
                <p className="text-blue-400 text-sm">@OLAAllAccess</p>
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
                  <div className="absolute inset-8 rounded-full bg-gray-600 overflow-hidden group hover-scale transition-all duration-500">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                      <div className="animate-shimmer absolute inset-0"></div>
                    </div>
                    <div className="relative w-full h-full">
                      <Image
                        src="/user.jpg"
                        alt="OLA - Realtor"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
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

      {/* How It Works Section */}
      <section className="bg-gray-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black inline-block relative">
              How It Works
              <span className="absolute bottom-0 left-0 w-full h-1 bg-cyan-400"></span>
            </h2>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 - Discovery */}
            <div className="text-center">
              {/* Large Number */}
              <div className="text-[150px] md:text-[180px] font-black leading-none mb-4">
                1
              </div>

              {/* Title with Arrow */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-green-400 text-2xl">▶</span>
                <h3 className="text-2xl md:text-3xl font-bold">Discovery</h3>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-base leading-relaxed">
                Set up a phone call to get to know each other. No obligations, no signatures. Free info for you.
              </p>
            </div>

            {/* Step 2 - Meet Up */}
            <div className="text-center">
              {/* Large Number */}
              <div className="text-[150px] md:text-[180px] font-black leading-none mb-4">
                2
              </div>

              {/* Title with Arrow */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-purple-400 text-2xl">▶</span>
                <h3 className="text-2xl md:text-3xl font-bold">Meet Up</h3>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-base leading-relaxed">
                In person consultation to reveal numbers & strategize a plan for you and your family's next move.
              </p>
            </div>

            {/* Step 3 - Start */}
            <div className="text-center">
              {/* Large Number */}
              <div className="text-[150px] md:text-[180px] font-black leading-none mb-4">
                3
              </div>

              {/* Title with Arrow */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-yellow-400 text-2xl">▶</span>
                <h3 className="text-2xl md:text-3xl font-bold">Start</h3>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-base leading-relaxed">
                Guidance through negotiations, inspections, and closing - ensuring a successful transaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        ref={testimonialsAnim.ref as React.RefObject<HTMLElement>}
        className={`py-16 px-4 bg-white transition-all duration-1000 ${testimonialsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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
        className={`py-16 px-4 bg-gray-50 transition-all duration-1000 delay-200 ${reviewsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Rating Header */}
          <div className="text-center mb-12">
            <div className="text-7xl font-bold mb-2 animate-bounce-in">5.00</div>
            <div className="text-yellow-400 text-3xl animate-pulse">★★★★★</div>
          </div>

          {/* Google Review Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {googleReviews.map((review, i) => (
              <GoogleReviewCard key={i} {...review} index={i} />
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a href="tel:+16475295663" className="inline-block bg-green-500 text-white px-12 py-4 rounded font-bold hover:bg-green-600 transition-all duration-300 hover-lift hover:scale-110 animate-bounce-in">
              CALL/TEXT: (647) 529-5663
            </a>
          </div>
        </div>
      </section>

      {/* Wanna Know More Details Section */}
      <section
        ref={detailsAnim.ref as React.RefObject<HTMLElement>}
        className={`bg-black text-white py-16 px-4 transition-all duration-1000 ${detailsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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
            <div className="animate-fade-in-scale">
              <div className="mb-4">
                <span className="text-green-500 font-bold text-xs tracking-widest inline-block border-b-2 border-green-500 pb-1">STEP 1</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 flex items-start gap-3">
                <span className="text-green-500 text-4xl leading-none mt-1 animate-pulse">▶</span>
                <span className="leading-tight">The Phone Call</span>
              </h3>
              <p className="text-gray-600 text-base">
                Think of this step as our "first date" — but without the awkward silences.
              </p>
            </div>

            {/* Right Side - Benefits */}
            <div className="space-y-6">
              <div className="flex gap-3 items-start hover-lift transition-all duration-300 p-3 rounded-lg hover:bg-gray-50 animate-fade-in-scale" style={{ animationDelay: '0.1s' }}>
                <span className="text-green-500 text-xl font-bold flex-shrink-0 mt-1">→</span>
                <div>
                  <p className="font-bold text-base mb-1">No pressure, no contracts.</p>
                  <p className="text-gray-600 text-sm">No pushy sales vibes, just honest advice.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start hover-lift transition-all duration-300 p-3 rounded-lg hover:bg-gray-50 animate-fade-in-scale" style={{ animationDelay: '0.2s' }}>
                <span className="text-green-500 text-xl font-bold flex-shrink-0 mt-1">→</span>
                <div>
                  <p className="font-bold text-base mb-1">Ask me anything.</p>
                  <p className="text-gray-600 text-sm">Whether it's about interest rates or "What's escrow?" I've got answers.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start hover-lift transition-all duration-300 p-3 rounded-lg hover:bg-gray-50 animate-fade-in-scale" style={{ animationDelay: '0.3s' }}>
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
      <section className="bg-gradient-to-br from-purple-600 to-blue-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-scale">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Call or text me directly - no forms, no waiting, just real conversation
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-bounce-in" style={{ animationDelay: '0.4s' }}>
            <a
              href="tel:+16475295663"
              className="group inline-flex items-center px-10 py-5 bg-white text-purple-600 font-bold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-110 text-xl"
            >
              📞 Call: (647) 529-5663
            </a>
            <a
              href="sms:+16475295663"
              className="group inline-flex items-center px-10 py-5 bg-yellow-400 text-black font-bold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-110 text-xl"
            >
              💬 Text: (647) 529-5663
            </a>
          </div>

          <p className="mt-8 text-blue-100 text-sm animate-fade-in-scale" style={{ animationDelay: '0.6s' }}>
            Available 7 days a week • Quick response guaranteed
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaAnim.ref as React.RefObject<HTMLElement>}
        className={`py-16 px-4 transition-all duration-1000 ${ctaAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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
      {/* Newsletter Section */}
      {/* Contact Section - Call/Text CTA */}
      <section className="bg-black text-white py-16 px-4 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 animate-gradient"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-lg mb-6 animate-fade-in-scale">
            Join 5,000+ home-owners and home-buyers getting interest rate updates through 1 text a week
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <input
              type="text"
              placeholder="Enter Full Name..."
              className="flex-1 px-4 py-3 rounded bg-transparent border border-gray-600 text-white placeholder-gray-500 hover:border-purple-500 focus:border-purple-500 focus:outline-none transition-all duration-300"
            />
            <input
              type="tel"
              placeholder="Enter Mobile Number..."
              className="flex-1 px-4 py-3 rounded bg-transparent border border-gray-600 text-white placeholder-gray-500 hover:border-purple-500 focus:border-purple-500 focus:outline-none transition-all duration-300"
            />
          </div>
          <a href="tel:+16475295663" className="mt-6 bg-yellow-400 text-black px-12 py-3 rounded font-semibold hover:bg-yellow-500 transition-all duration-300 hover-lift hover:scale-110 animate-bounce-in inline-block" style={{ animationDelay: '0.4s' }}>
            KEEP ME UPDATED
          </a>
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
    text: "OLA sold my LA triplex quickly! His expertise stood out as soon as we met. Highly recommend using him!"
  },
  {
    name: "Catherine Sananbria",
    location: "Rancho Cucamonga, CA",
    title: "Stress Free with OLA",
    text: "OLA made finding a home easy and stress-free. He's sharp, kind, and an amazing realtor. Call him now!!"
  },
  {
    name: "Akshay Shinde",
    location: "Pasadena, CA",
    title: "A+ Service",
    text: "OLA made buying our first home so easy! He was attentive, and always available for us. He's your guy"
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

const properties = [
  { city: "La Habra, CA", type: "Represented Seller & Buyer", image: "/media/66daa191766f98674f3052fa.png" },
  { city: "Downey, CA", type: "Represented Seller & Buyer", image: "/media/66daa191766f98cff73052f9.png" },
  { city: "Whittier, CA", type: "Represented Buyer", image: "/media/66daa191766f98f7783052fb.png" },
  { city: "Anaheim, CA", type: "Represented Seller", image: "/media/66daa19184ef295ccae7f842.png" },
  { city: "Buena Park, CA", type: "Represented Seller", image: "/media/66daa19184ef298582e7f841.png" },
  { city: "Pico Rivera, CA", type: "Represented Buyer", image: "/media/66daa191ab806e1090360d78.png" },
  { city: "Hemet, CA", type: "Represented Buyer", image: "/media/66daa191ab806e2d87360d7a.png" },
  { city: "Ontario, CA", type: "Represented Buyer", image: "/media/66daa191ab806e4121360d79.png" },
  { city: "Cucamonga, CA", type: "Represented Buyer", image: "/media/66daa191f10da417bee81df1.png" },
  { city: "Anaheim, CA", type: "Represented Seller & Buyer", image: "/media/66daa191f10da4b4fce81df0.png" },
  { city: "Moval, CA", type: "Represented Seller", image: "/media/675136d7a5d0e703c784e25b.jpg" },
  { city: "Norwalk, CA", type: "Represented Buyer", image: "/media/67529fd8ed7e7798d799ecb4.jpg" }
];

function GoogleReviewCard({ name, initial, rating, text, index }: { name: string; initial: string; rating: number; text: string; index?: number }) {
  const cardAnim = useScrollAnimation();

  return (
    <div
      ref={cardAnim.ref as React.RefObject<HTMLDivElement>}
      className={`bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-xl hover-lift transition-all duration-700 group ${cardAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      style={{ transitionDelay: `${(index || 0) * 100}ms` }}
    >
      {/* Rating */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl font-bold text-yellow-500 group-hover:scale-110 transition-transform duration-300">{rating}</span>
        <div className="text-yellow-400 group-hover:scale-110 transition-transform duration-300">★★★★★</div>
      </div>

      {/* Review Text */}
      <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">
        {text}
      </p>
      <a href="#" className="text-blue-600 text-sm font-semibold hover:text-blue-800 transition-colors duration-300">More</a>

      {/* Reviewer Info */}
      <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-200">
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold text-sm hover-scale transition-all duration-300">
          {initial}
        </div>
        <span className="text-gray-800 font-medium text-sm">{name}</span>
        <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 ml-auto group-hover:scale-110 transition-transform duration-300" />
      </div>
    </div>
  );
}

function PropertyCard({ city, type, image }: { city: string; type: string; image: string }) {
  return (
    <div className="relative h-48 w-64 bg-gray-700 overflow-hidden flex-shrink-0 group hover-lift transition-all duration-500">
      {/* Property Image */}
      <Image
        src={image}
        alt={`${city} property`}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-500 z-10"></div>
      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
        <div className="animate-shimmer absolute inset-0"></div>
      </div>
      <div className="absolute bottom-4 left-4 text-white transform group-hover:translate-y-[-4px] transition-transform duration-300 z-30">
        <p className="font-bold text-sm">{city}</p>
        <p className="text-xs">{type}</p>
      </div>
      {/* Hover overlay */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500 transition-all duration-300 z-20"></div>
    </div>
  );
}

function TestimonialCard({ name, location, title, text, index }: { name: string; location: string; title: string; text: string; index?: number }) {
  const cardAnim = useScrollAnimation();

  return (
    <div
      ref={cardAnim.ref as React.RefObject<HTMLDivElement>}
      className={`bg-white p-6 rounded-lg border-4 border-purple-600 shadow-lg transition-all duration-700 hover-lift hover-glow group ${cardAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      style={{ transitionDelay: `${(index || 0) * 150}ms` }}
    >
      <div className="w-20 h-20 rounded-full bg-gray-300 mx-auto mb-4 hover-scale transition-all duration-300 group-hover:shadow-lg"></div>
      <h3 className="text-xl font-bold text-center mb-2 group-hover:text-purple-600 transition-colors duration-300">"{title}"</h3>
      <p className="text-gray-700 text-center mb-4">{text}</p>
      <p className="text-center font-semibold">- {name}</p>
      <p className="text-center text-gray-500 text-sm italic">{location}</p>
      <div className="text-yellow-400 text-center mt-2 group-hover:scale-110 transition-transform duration-300">★★★★★</div>
    </div>
  );
}
