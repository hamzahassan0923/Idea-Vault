'use client'
import { authClient} from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import {
  User,
  Settings,
  LogOut,
  ChevronDown,
  LayoutDashboard,
} from "lucide-react";
import Image from "next/image";


const Navbar = () => {
  const [open, setOpen] = useState(false);
   const router = useRouter();
   const {data:session} = authClient.useSession()
  //  console.log( session);


  
  const handleLogOut = async() =>{
    await authClient.signOut();
      router.push("/")
  }
  return (
    <div className="sticky  top-0 z-999 w-full border-b border-white/10 bg-[#071024]/90 backdrop-blur-2xl">

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
              className="menu menu-sm dropdown-content mt-4 z-9999 w-56 rounded-2xl border border-white/10 bg-[#0b1120]/95 backdrop-blur-xl p-3 shadow-2xl"
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
                  href="/my-idea"
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
            <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
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
                href="/my-idea"
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

            {
              !session ? <><Link href="/login">
              <button className="btn btn-ghost text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-xl border border-white/10">
                Login
              </button>
            </Link>

            <Link href="/register">
              <button className="btn bg-linear-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 border-none text-white rounded-xl shadow-lg shadow-blue-500/20">
                Register
              </button>
            </Link></> : <>

            <div className="relative">
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 px-2 py-1.5 hover:bg-white/15 transition-all duration-300"
      >
       
        <Image
          src={session?.user?.image  || "https://images.unsplash.com/photo-1511367461989-f85a21fda167"}
          width={10}
          height={10}
          alt="profile"
          className="w-10 h-10 rounded-full object-cover border-2 border-blue-400"
        />

        <div className="hidden md:block text-left leading-tight">
          <h3 className="text-sm font-semibold text-white">
          {session?.user?.name}
          </h3>

          <p className="text-xs text-green-500">
            Active
          </p>
        </div>

        <ChevronDown
          className={`w-4 h-4 text-blue-200 transition duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      <div
        className={`absolute right-0 w-72  top-16  rounded-[28px] overflow-hidden border border-white/10 bg-[#0F172A]/95 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.45)] transition-all duration-300 origin-top-right z-50 ${
          open
            ? "opacity-100 scale-100 visible"
            : "opacity-0 scale-95 invisible"
        }`}
      >
        {/* Top Blur */}
        <div className="absolute inset-0 bg-linear-to-b from-blue-500/10 to-transparent pointer-events-none" />

        {/* Profile Card */}
        <div className="relative p-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <Image
              src={session?.user?.image || "/default-avatar.png"}
              alt="profile"
              width={10}
              height={10}
              className="w-14 h-14 rounded-2xl object-cover border-2 border-blue-400"
            />

            <div>
              <h2 className="text-white font-semibold text-lg">
               {session?.user?.name}
              </h2>

              <p className="text-sm text-blue-200">
                   {session?.user?.email}
              </p>
            </div>
          </div>
        </div>

        {/* Menu */}
        <div className="relative p-3 space-y-1">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-white/5 transition-all text-blue-50">
            <LayoutDashboard className="w-5 h-5 text-blue-300" />

            <span className="font-medium">
             <Link href={"/dashboard"}>DashBoard</Link>
            </span>
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-white/5 transition-all text-blue-50">
            <User className="w-5 h-5 text-blue-300" />

            <span className="font-medium">
            <Link href={"/profile"}>Profile</Link>
            </span>
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-white/5 transition-all text-blue-50">
            <Settings className="w-5 h-5 text-blue-300" />

            <span className="font-medium">
             <Link href={"/settings"}>Settings</Link>
            </span>
          </button>

          <div className="border-t border-white/10 my-2" />

          <button onClick={handleLogOut}  className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-red-500/10 transition-all text-red-400">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">
              Log Out
            </span>
          </button>
        </div>
      </div>
    </div> 
            </>
            }
                   
           
      
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;