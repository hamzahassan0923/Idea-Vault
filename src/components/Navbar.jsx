import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-white/20 backdrop-blur border-b border-base-300 mx-auto w-10/12">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link href={'/'} >Home</Link></li>
        <li><Link href={"/ideas"}>Ideas</Link></li>
        <li><Link href={"/add-idea"}>Add Idea</Link></li>
        <li><Link href={"/my-ideas"}>My Ideas</Link></li>
        <li><Link href={"/my-interactions"}>My Interactions</Link></li>
       
      </ul>
    </div>
    <Link href={"/"} className="font-bold text-xl"> <span className="bg-linear-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              IdeaVault
            </span></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     <li><Link href={'/'} className="hover:text-blue-300 text-[16px]">Home</Link></li>
        <li><Link href={"/ideas"} className="hover:text-blue-300 text-[16px] ">Ideas</Link></li>
        <li><Link href={"/add-idea"} className="hover:text-blue-300 text-[16px] ">Add Idea</Link></li>
        <li><Link href={"/my-ideas"} className="hover:text-blue-300 text-[16px] ">My Ideas</Link></li>
        <li><Link href={"/my-interactions"} className="hover:text-blue-300 text-[16px] ">My Interactions</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <ul className='flex gap-4'>
         <li><Link href={"/login"}><button className="hover:text-blue-300 ">Login</button></Link></li>
         <li><Link href={"/register"}><button className='hover:text-blue-300'>Register</button></Link></li>
      
    </ul>
  </div>
</div>
    );
};

export default Navbar;