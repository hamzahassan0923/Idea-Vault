"use client";

import React, { useState } from "react";
import {
  Lightbulb,
  DollarSign,
  Users,
  Trash2,
  SquarePen,
  X,
} from "lucide-react";
import Image from "next/image";

export default function MyIdeasPage() {
  const [selectedIdea, setSelectedIdea] = useState(null);

  const ideas = [
    {
      id: 1,
      ideaTitle: "Portable Bluetooth Speaker",
      shortDescription: "Compact wireless speaker with deep bass.",
      detailedDescription:
        "A waterproof portable Bluetooth speaker designed with AI sound balancing technology for premium audio experience.",
      category: "Audio",
      imageURL:
        "https://images.unsplash.com/photo-1545454675-3531b543be5d",
      estimatedBudget: "$4000 - $10000",
      targetAudience: "Music lovers and travelers",
      problemStatement:
        "Most portable speakers suffer from low battery life and poor bass quality.",
      proposedSolution:
        "Develop a smart speaker with optimized audio tuning and extended battery backup.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#06121f] text-white p-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

          <div>
            <h1 className="text-4xl font-bold flex items-center gap-3">
              <Lightbulb className="text-blue-400" size={38} />
              My Ideas
            </h1>

            <p className="text-gray-400 mt-2">
              Manage and track your startup ideas.
            </p>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 transition px-5 py-3 rounded-2xl font-semibold shadow-lg shadow-blue-900/40">
            Add New Idea
          </button>
        </div>

        {/* Table */}
        <div className="bg-[#0d1b2a] border border-blue-900 rounded-3xl overflow-x-auto shadow-2xl">

          <table className="w-full min-w-237.5">

            <thead className="bg-[#11243a] border-b border-blue-900">
              <tr className="text-blue-300">
                <th className="text-left p-5">PRODUCT</th>
                <th className="text-left p-5">CATEGORY</th>
                <th className="text-left p-5">BUDGET</th>
                <th className="text-left p-5">AUDIENCE</th>
                <th className="text-left p-5">ACTIONS</th>
              </tr>
            </thead>

            <tbody>
              {ideas.map((idea) => (
                <tr
                  key={idea.id}
                  className="border-b border-blue-950 hover:bg-[#12263f] transition duration-300"
                >

                  {/* Product */}
                  <td className="p-5">
                    <div className="flex items-center gap-4">

                      <Image
                        src={idea.imageURL}
                        alt={idea.ideaTitle}
                        width={50}
                        height={50}
                        className="w-20 h-20 rounded-2xl object-cover border border-blue-800"
                      />

                      <div>
                        <h2 className="font-bold text-lg text-white">
                          {idea.ideaTitle}
                        </h2>

                        <p className="text-sm text-gray-400 mt-1 max-w-xs">
                          {idea.shortDescription}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Category */}
                  <td className="p-5">
                    <span className="bg-blue-500/20 text-blue-300 border border-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                      {idea.category}
                    </span>
                  </td>

                  {/* Budget */}
                  <td className="p-5">
                    <div className="flex items-center gap-2 text-green-400 font-semibold">
                      <DollarSign size={18} />
                      {idea.estimatedBudget}
                    </div>
                  </td>

                  {/* Audience */}
                  <td className="p-5">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Users size={18} />
                      {idea.targetAudience}
                    </div>
                  </td>

                  {/* Actions */}
                  <td className="p-5">
                    <div className="flex gap-3">

                      {/* Update Button */}
                      <button
                        onClick={() => setSelectedIdea(idea)}
                        className="flex items-center gap-2 bg-blue-600/20 border border-blue-700 text-blue-300 px-4 py-2 rounded-xl hover:bg-blue-600/30 transition"
                      >
                        <SquarePen size={16} />
                        Update
                      </button>

                      {/* Delete Button */}
                      <button className="flex items-center gap-2 bg-red-500/10 border border-red-800 text-red-400 px-4 py-2 rounded-xl hover:bg-red-500/20 transition">
                        <Trash2 size={16} />
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        {selectedIdea && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">

            <div className="bg-[#0d1b2a] border border-blue-900 rounded-3xl w-full max-w-3xl p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]">

              {/* Close */}
              <button
                onClick={() => setSelectedIdea(null)}
                className="absolute top-5 right-5 text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>

              {/* Title */}
              <h2 className="text-3xl font-bold text-blue-300 mb-6">
                Update Idea
              </h2>

              {/* Form */}
              <div className="grid gap-5">

                <div>
                  <label className="block mb-2 text-gray-300">
                    Idea Title
                  </label>

                  <input
                    type="text"
                    defaultValue={selectedIdea.ideaTitle}
                    className="w-full bg-[#12263f] border border-blue-900 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300">
                    Short Description
                  </label>

                  <textarea
                    rows={3}
                    defaultValue={selectedIdea.shortDescription}
                    className="w-full bg-[#12263f] border border-blue-900 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300">
                    Detailed Description
                  </label>

                  <textarea
                    rows={5}
                    defaultValue={selectedIdea.detailedDescription}
                    className="w-full bg-[#12263f] border border-blue-900 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">

                  <div>
                    <label className="block mb-2 text-gray-300">
                      Category
                    </label>

                    <input
                      type="text"
                      defaultValue={selectedIdea.category}
                      className="w-full bg-[#12263f] border border-blue-900 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-gray-300">
                      Estimated Budget
                    </label>

                    <input
                      type="text"
                      defaultValue={selectedIdea.estimatedBudget}
                      className="w-full bg-[#12263f] border border-blue-900 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-gray-300">
                    Target Audience
                  </label>

                  <input
                    type="text"
                    defaultValue={selectedIdea.targetAudience}
                    className="w-full bg-[#12263f] border border-blue-900 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300">
                    Problem Statement
                  </label>

                  <textarea
                    rows={4}
                    defaultValue={selectedIdea.problemStatement}
                    className="w-full bg-[#12263f] border border-blue-900 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300">
                    Proposed Solution
                  </label>

                  <textarea
                    rows={4}
                    defaultValue={selectedIdea.proposedSolution}
                    className="w-full bg-[#12263f] border border-blue-900 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                  />
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-4 mt-4">

                  <button
                    onClick={() => setSelectedIdea(null)}
                    className="px-5 py-3 rounded-xl border border-gray-700 text-gray-300 hover:bg-gray-800 transition"
                  >
                    Cancel
                  </button>

                  <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl font-semibold shadow-lg shadow-blue-900/40">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}