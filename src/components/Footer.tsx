import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Main Content - Centered Layout */}
        <div className="max-w-4xl mx-auto">
          {/* Brand & Profile */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-purple-500 shadow-2xl shadow-purple-500/50 hover:scale-110 transition-transform duration-300">
                <Image 
                  src="/user.jpg" 
                  alt="OLA" 
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
            </div>
            <h3 className="text-5xl font-black text-white mb-2">OLA</h3>
            <p className="text-cyan-400 font-semibold text-xl mb-6">Expert Realtor in California</p>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              On a mission to inspire and help people move, invest, and elevate their lifestyle through Real Estate 🏡
            </p>
          </div>

          {/* Contact & Stats Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <h4 className="text-xl font-bold text-white mb-6 text-center">Get In Touch</h4>
              <a 
                href="sms:+16475295663" 
                className="flex items-center justify-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-3xl">💬</span>
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-400">Text Me Anytime</p>
                  <p className="text-2xl font-bold">(647) 529-5663</p>
                </div>
              </a>
            </div>

            {/* Quick Stats */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
              <h4 className="text-xl font-bold text-white mb-6 text-center">Why Choose Me</h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-4xl font-black text-cyan-400 mb-1">5.0</div>
                  <div className="text-yellow-400 text-lg mb-1">★★★★★</div>
                  <p className="text-xs text-gray-400">Rating</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-cyan-400 mb-1">100+</div>
                  <p className="text-xs text-gray-400 mt-3">Happy Clients</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-cyan-400 mb-1">24/7</div>
                  <p className="text-xs text-gray-400 mt-3">Available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center mb-12">
            <h4 className="text-xl font-bold text-white mb-6">Follow My Journey</h4>
            <div className="flex gap-6 justify-center">
              <a href="https://www.instagram.com/olaotuburealestate" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-pink-500/50">
                <svg className="w-7 h-7" fill="white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-red-500/50">
                <svg className="w-7 h-7" fill="white" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/50">
                <svg className="w-7 h-7" fill="white" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © 2026 Ola Otubu Real Estate. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
