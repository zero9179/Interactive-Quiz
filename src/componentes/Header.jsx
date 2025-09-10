import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed z-20 w-full px-6 sm:px-10 py-4 bg-zinc-900 shadow-lg shadow-zinc-800 text-white flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-xl sm:text-2xl font-bold">Interactive Quiz</h1>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-8 font-medium">
        <Link to="/" className="hover:text-yellow-400 transition">
          Home
        </Link>
        <Link to="/about" className="hover:text-yellow-400 transition">
          About
        </Link>
        <Link to="/quiz" className="hover:text-yellow-400 transition">
          Quiz
        </Link>
      </nav>

      {/* Mobile Hamburger */}
      <div
        className="md:hidden text-2xl cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="absolute top-16 right-4 w-48 bg-zinc-800 rounded-lg shadow-lg flex flex-col items-start p-4 gap-4 md:hidden">
          <Link
            to="/"
            className="hover:text-yellow-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-yellow-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/quiz"
            className="hover:text-yellow-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Quiz
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
