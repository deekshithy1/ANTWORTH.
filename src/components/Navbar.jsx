import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-3/4 max-w-5xl h-16 bg-white/70 backdrop-blur-md border border-white/20 shadow-lg rounded-full px-6 flex items-center justify-between transition-all">
      
      {/* Logo */}
      <Link to="/" className="text-2xl font-black tracking-tighter text-gray-900">
        AntWorth
      </Link>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
        {['Home', 'About', 'Services', 'Contact'].map((item) => (
          <Link 
            key={item} 
            // to={`/${item.toLowerCase().replace(' ', '')}`} 
            className="hover:text-black transition-colors"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Action Button */}
      <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition-transform active:scale-95">
        Explore More
      </button>
    </nav>
  );
};

export default Navbar;