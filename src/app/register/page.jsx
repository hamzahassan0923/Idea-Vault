"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { User, Mail, Lock, Link as LinkIcon } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const RegisterPage = () => {
    const router = useRouter();

    const handleRegistration = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const registerData = Object.fromEntries(formData.entries());
        // console.log(registerData);
        // return
        const { data, error } = await authClient.signUp.email({

            ...registerData
           

        });
          
        if(error){
             toast.error('Register Failed')
             return
        };
        window.location.href = "/";

    }

    return (
        <div className="min-h-screen bg-linear-to-br from-[#050816] via-[#071028] to-[#0b1120] flex items-center justify-center px-4 overflow-hidden relative">

            {/* Glow */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>

            <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md relative z-10"
            >
                <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-8 mt-4 mb-10">

                    {/* Title */}
                    <div className="text-center mb-4">
                        <h1 className="text-4xl font-bold text-white">
                            Create Account
                        </h1>
                        <p className="text-gray-400 mt-2">
                            Join IdeaVault and start sharing ideas
                        </p>
                    </div>

                    <form onSubmit={handleRegistration} className="space-y-5">

                        {/* Name */}
                        <div>
                            <label className="text-sm text-gray-300 mb-2 block">Name</label>
                            <div className="flex items-center bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus-within:border-cyan-400">
                                <User className="w-5 h-5 text-cyan-400" />
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    className="bg-transparent outline-none w-full ml-3 text-white placeholder:text-gray-500"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="text-sm text-gray-300 mb-2 block">Email</label>
                            <div className="flex items-center bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus-within:border-cyan-400">
                                <Mail className="w-5 h-5 text-cyan-400" />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="bg-transparent outline-none w-full ml-3 text-white placeholder:text-gray-500"
                                />
                            </div>
                        </div>

                        {/* URL */}
                        <div>
                            <label className="text-sm text-gray-300 mb-2 block">Image URL</label>
                            <div className="flex items-center bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus-within:border-cyan-400">
                                <LinkIcon className="w-5 h-5 text-cyan-400" />
                                <input
                                    type="text"
                                    name="image"
                                    placeholder="https://your-img"
                                    className="bg-transparent outline-none w-full ml-3 text-white placeholder:text-gray-500"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="text-sm text-gray-300 mb-2 block">Password</label>
                            <div className="flex items-center bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus-within:border-cyan-400">
                                <Lock className="w-5 h-5 text-cyan-400" />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Create password"
                                    className="bg-transparent outline-none w-full ml-3 text-white placeholder:text-gray-500"
                                />
                            </div>
                        </div>



                        {/* Button */}
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            type="submit"
                            className="w-full bg-linear-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-2xl font-semibold"
                        >
                           Create Account
                        </motion.button>
                    </form>

                    {/* Login link */}
                    <p className="text-center text-gray-400 text-sm mt-6">
                        Already have an account?{" "}
                        <Link href="/login" className="text-cyan-400">
                            Login
                        </Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default RegisterPage;