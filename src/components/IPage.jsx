"use client";

import { useState } from "react";
import { Search, Sparkles, Filter } from "lucide-react";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const IPage = ({ idea }) => {

  return (
    <div >


      {/* Cards */}

      <div >
        <motion.div
          whileHover={{ y: -10 }}
          transition={{ duration: 0.3 }}
          className="group relative overflow-hidden rounded-3xl bg-blue-950 shadow-xl border border-blue-100 h-full "
        >
          {/* Image */}
          <div className="relative overflow-hidden">
            <Image
              src={idea.imageURL}
              width={800}
              height={600}
                quality={75}
              alt="AI Startup"
              className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
            {/* Category */}
            <span className="absolute top-4 right-4 rounded-full bg-blue-500/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
              {idea.category}
            </span>
            {/* Title on image */}
            <div className="absolute bottom-4 left-4 text-white">
              <h2 className="text-2xl font-bold">
                {idea.ideaTitle}
              </h2>
              <p className="mt-1 text-sm text-blue-100">
                {idea.estimatedBudget}
              </p>
            </div>
          </div>
          {/* Content */}
          <div className="p-6">
            <p className="text-white leading-relaxed">
              {idea.shortDescription}
            </p>
            {/* Bottom */}
            <div className="mt-6 flex items-center justify-between">
              <button className="rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-md transition duration-300 hover:shadow-2xl">
                <Link href={`/ideas/${idea._id}`}>View Details</Link>
              </button>
            </div>
          </div>
          {/* Glow Hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-blue-500/5 pointer-events-none"></div>
        </motion.div>
      </div>

    </div>
  );
}


export default IPage;
