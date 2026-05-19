import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="sticky  top-0 z-[999] w-full border-b border-white/10 bg-[#071024]/90 backdrop-blur-2xl">
      
      <div className="navbar w-full px-4 lg:px-10">

        {/* Navbar Start */}
        <div className="navbar-start">
          
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-white lg:hidden hover:bg-blue-500/10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-4 z-[9999] w-56 rounded-2xl border border-white/10 bg-[#0b1120]/95 backdrop-blur-xl p-3 shadow-2xl"
            >
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-xl"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/ideas"
                  className="text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-xl"
                >
                  Ideas
                </Link>
              </li>

              <li>
                <Link
                  href="/add-idea"
                  className="text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-xl"
                >
                  Add Idea
                </Link>
              </li>

              <li>
                <Link
                  href="/my-ideas"
                  className="text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-xl"
                >
                  My Ideas
                </Link>
              </li>

              <li>
                <Link
                  href="/my-interactions"
                  className="text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-xl"
                >
                  My Interactions
                </Link>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <Link href="/" className="text-2xl font-extrabold tracking-wide">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              IdeaVault
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1">
            
            <li>
              <Link
                href="/"
                className="text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-xl transition-all duration-300"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/ideas"
                className="text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-xl transition-all duration-300"
              >
                Ideas
              </Link>
            </li>

            <li>
              <Link
                href="/add-idea"
                className="text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-xl transition-all duration-300"
              >
                Add Idea
              </Link>
            </li>

            <li>
              <Link
                href="/my-ideas"
                className="text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-xl transition-all duration-300"
              >
                My Ideas
              </Link>
            </li>

            <li>
              <Link
                href="/my-interactions"
                className="text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-xl transition-all duration-300"
              >
                My Interactions
              </Link>
            </li>
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          <div className="flex items-center gap-3">
            
            <Link href="/login">
              <button className="btn btn-ghost text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-xl border border-white/10">
                Login
              </button>
            </Link>

            <Link href="/register">
              <button className="btn bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 border-none text-white rounded-xl shadow-lg shadow-blue-500/20">
                Register
              </button>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;