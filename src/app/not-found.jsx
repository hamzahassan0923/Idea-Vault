"use client";

import Link from "next/link";
import { AlertTriangle, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#06121f] flex items-center justify-center px-6">

      <div className="w-full max-w-2xl bg-[#0d1b2a] border border-blue-900 rounded-3xl p-10 text-center shadow-2xl">

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-blue-500/20 p-6 rounded-full border border-blue-800">
            <AlertTriangle
              size={70}
              className="text-blue-400"
            />
          </div>
        </div>

        {/* 404 */}
        <h1 className="text-8xl font-extrabold text-blue-400 mb-4">
          404
        </h1>

        {/* Title */}
        <h2 className="text-3xl font-bold text-white mb-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-lg leading-8 mb-8">
          The page you are looking for does not exist
          or may have been moved.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

          <Link href="/">
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-2xl font-semibold shadow-lg shadow-blue-900/40 text-white">
              <Home size={20} />
              Go Home
            </button>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="border border-blue-800 text-blue-300 hover:bg-blue-900/30 transition px-6 py-3 rounded-2xl font-semibold"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}