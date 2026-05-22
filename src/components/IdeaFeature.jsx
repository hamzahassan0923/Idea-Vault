"use client";

import { Search, Sparkles, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

const categories = [
  "All",
  "AI",
  "Tech",
  "Business",
  "Health",
  "Education",
  "Finance",
];

const IdeaFeature =()=> {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-125 h-125 bg-blue-500/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-100 h-100 bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm mb-6 backdrop-blur-xl">
            <Sparkles size={18} />
            Explore Creative Startup Ideas
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Discover Future <br />
            <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Ideas Vault
            </span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Search, filter, and explore powerful startup ideas,
            innovative concepts, and futuristic products.
          </p>
        </div>

        {/* Search & Filter Container */}
        <div className="relative mb-14">
          <div className="absolute inset-0 bg-linear-to-r from-blue-500/20 to-cyan-500/10 blur-3xl rounded-[40px]" />

          <div className="relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-4xl p-5 md:p-7">
            <div className="flex flex-col lg:flex-row gap-5">
              {/* Search Input */}
              <div className="relative flex-1 group">
                <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-focus-within:opacity-100 transition-all rounded-2xl" />

                <div className="relative">
                  <Search
                    size={22}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    placeholder="Search innovative ideas..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-[#0b1225]/80 border border-white/10 rounded-2xl py-5 pl-14 pr-5 text-white placeholder:text-gray-500 outline-none focus:border-blue-500 transition-all"
                  />
                </div>
              </div>

              {/* Filter Dropdown */}
              <div className="relative lg:w-70 group">
                <div className="absolute inset-0 bg-cyan-500/10 blur-xl opacity-0 group-focus-within:opacity-100 transition-all rounded-2xl" />

                <div className="relative">
                  <SlidersHorizontal
                    size={20}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <select
                    value={selectedCategory}
                    onChange={(e) =>
                      setSelectedCategory(e.target.value)
                    }
                    className="w-full appearance-none bg-[#0b1225]/80 border border-white/10 rounded-2xl py-5 pl-14 pr-5 text-white outline-none focus:border-cyan-500 transition-all"
                  >
                    {categories.map((category) => (
                      <option
                        key={category}
                        value={category}
                        className="bg-[#0b1225]"
                      >
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Quick Categories */}
            <div className="flex flex-wrap gap-3 mt-6">
              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => setSelectedCategory(item)}
                  className={`px-5 py-2 rounded-full border transition-all duration-300 text-sm ${
                    selectedCategory === item
                      ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/20"
                      : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold">
              Trending Ideas
            </h2>

            <p className="text-gray-400 mt-2">
              Discover modern and creative startup concepts.
            </p>
          </div>

          <button className="hidden md:flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
            <Sparkles size={18} />
            Explore More
          </button>
        </div>

        {/* Your Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
          {/* Add Your Cards Here */}
        </div>
      </div>
    </div>
  );
}

export default IdeaFeature;