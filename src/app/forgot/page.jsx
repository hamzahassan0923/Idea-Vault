"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Mail } from "lucide-react";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050816] via-[#071028] to-[#0b1120] flex items-center justify-center px-4 relative overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-8">

          {/* Back Button */}
          <Link
            href="/login"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Login
          </Link>

          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Mail className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white">
              Forgot Password?
            </h1>

            <p className="text-gray-400 mt-3 leading-relaxed">
              Don&apos;t worry. Enter your email address and we&apos;ll send you a reset link.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">

            <div>
              <label className="text-sm text-gray-300 mb-2 block">
                Email Address
              </label>

              <div className="flex items-center bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus-within:border-cyan-400 transition-all duration-300">
                <Mail className="w-5 h-5 text-cyan-400" />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent outline-none w-full ml-3 text-white placeholder:text-gray-500"
                />
              </div>
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white py-3 rounded-2xl font-semibold shadow-lg shadow-blue-500/20 transition-all duration-300"
            >
              Send Reset Link
            </motion.button>
          </form>

          {/* Footer */}
          <p className="text-center text-gray-400 text-sm mt-8">
            Remember your password?{" "}
            <Link
              href="/login"
              className="text-cyan-400 hover:text-blue-400 font-medium"
            >
              Login
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}