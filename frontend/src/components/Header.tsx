import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const { isLoggedIn } = useAppContext();
  const [nav, setNav] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 w-full py-4 px-6 md:px-12 transition-all duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <span className="text-xl md:text-2xl font-extrabold tracking-tight">
          <Link to="/" className="text-blue-700 hover:opacity-90">
            DreamStayHub
          </Link>
        </span>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/about" className="text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors duration-200">
            About Us
          </Link>
          <Link to="/contact" className="text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors duration-200">
            Contact Us
          </Link>
          <Link to="/blog" className="text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors duration-200">
            Blog
          </Link>
          
          {isLoggedIn ? (
            <div className="flex items-center gap-6 pl-6 border-l border-slate-200">
              <Link to="/my-bookings" className="text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors duration-200">
                My Bookings
              </Link>
              <Link to="/my-hotel" className="text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors duration-200">
                My Hotels
              </Link>
              <SignOutButton />
            </div>
          ) : (
            <div className="pl-6 border-l border-slate-200">
              <Link
                to="/sign-in"
                className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 font-bold rounded text-sm transition-all duration-300"
              >
                Login
              </Link>
            </div>
          )}
        </nav>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={() => setNav(!nav)}
            className="text-slate-600 hover:text-blue-600 focus:outline-none p-1.5 transition-colors duration-200"
            aria-label="Toggle Menu"
          >
            {nav ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl flex flex-col items-center gap-4 py-8 px-6 text-center md:hidden transition-all duration-300 ${
          nav
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-4 invisible pointer-events-none"
        }`}
      >
        <Link to="/about" onClick={() => setNav(false)} className="text-slate-700 hover:text-blue-600 font-bold text-base py-1.5 w-full">
          About Us
        </Link>
        <Link to="/contact" onClick={() => setNav(false)} className="text-slate-700 hover:text-blue-600 font-bold text-base py-1.5 w-full">
          Contact Us
        </Link>
        <Link to="/blog" onClick={() => setNav(false)} className="text-slate-700 hover:text-blue-600 font-bold text-base py-1.5 w-full">
          Blog
        </Link>
        
        {isLoggedIn ? (
          <div className="flex flex-col items-center gap-4 w-full mt-2 pt-4 border-t border-slate-200">
            <Link to="/my-bookings" onClick={() => setNav(false)} className="text-slate-700 hover:text-blue-600 font-bold text-base py-1.5 w-full">
              My Bookings
            </Link>
            <Link to="/my-hotel" onClick={() => setNav(false)} className="text-slate-700 hover:text-blue-600 font-bold text-base py-1.5 w-full">
              My Hotels
            </Link>
            <div className="mt-2 w-full max-w-[200px]" onClick={() => setNav(false)}>
              <SignOutButton />
            </div>
          </div>
        ) : (
          <div className="w-full mt-2 pt-4 border-t border-slate-200">
            <Link
              to="/sign-in"
              onClick={() => setNav(false)}
              className="inline-block w-full max-w-[200px] px-6 py-2.5 text-center text-white bg-blue-600 font-bold rounded text-base"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
