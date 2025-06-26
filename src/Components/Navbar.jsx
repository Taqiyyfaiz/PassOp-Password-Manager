import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // optional, replace with your own icons if needed

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-zinc-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center gap-1">
          <span className="text-green-500">&lt;</span>
          Pass
          <span className="text-green-500">OP/&gt;</span>
          <span className="hidden sm:inline italic font-mono font-light text-base ml-2">
            = Your Own <span className="text-green-500">Password Manager</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
          <a href="#" className="hover:text-green-500 transition">Home</a>
          <a href="#" className="hover:text-green-500 transition">About</a>
          <a href="#" className="hover:text-green-500 transition">Contact</a>

          <a href="https://github.com/Taqiyyfaiz" target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-2 bg-green-700 hover:bg-green-500 text-white px-4 py-2 rounded-full ring-1 ring-white transition">
              <img className="invert w-5" src="./Icon/github.png" alt="GitHub" />
              <span className="font-medium">GitHub</span>
            </button>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a href="#" className="block hover:text-green-500 transition">Home</a>
          <a href="#" className="block hover:text-green-500 transition">About</a>
          <a href="#" className="block hover:text-green-500 transition">Contact</a>
          <a href="https://github.com/Taqiyyfaiz" target="_blank" rel="noopener noreferrer">
            <button className="mt-2 flex items-center gap-2 bg-green-700 hover:bg-green-500 text-white px-4 py-2 rounded-full ring-1 ring-white transition">
              <img className="invert w-5" src="./Icon/github.png" alt="GitHub" />
              <span className="font-medium">GitHub</span>
            </button>
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;