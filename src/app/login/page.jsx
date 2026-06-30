
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Lock, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";


const LoginPage = () => {
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const loginData = Object.fromEntries(formData.entries());
       console.log(formData);
       console.log(loginData);

        const { data, error } = await authClient.signIn.email({

            ...loginData
            

        });
                
        if(error){
             toast.error('Login Failed')
             return
        };
         window.location.href = "/";
    }
    return (

       <div>
    
         <div className="min-h-screen bg-linear-to-br from-[#050816] via-[#0b1120] to-[#071028] flex items-center justify-center px-4 overflow-hidden relative">
         

            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-md relative z-10 mt-2 mb-10"
            >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl p-8">

                    {/* Logo */}
                    

                    {/* Heading */}
                    <div className="text-center mb-4">
                        <h1 className="text-4xl font-bold text-white">
                            Welcome Back
                        </h1>

                        <p className="text-gray-400 mt-2">
                            Login to continue your journey
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleLogin} className="space-y-5">


                        {/* Email */}
                        <div>
                            <label className="text-sm text-gray-300 mb-2 block">
                                Email Address
                            </label>

                            <div className="flex items-center bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus-within:border-blue-500 transition">
                                <Mail className="w-5 h-5 text-blue-400" />

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="bg-transparent outline-none w-full ml-3 text-white placeholder:text-gray-500"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="text-sm text-gray-300 mb-2 block">
                                Password
                            </label>

                            <div className="flex items-center bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus-within:border-blue-500 transition">
                                <Lock className="w-5 h-5 text-blue-400" />

                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter your Password"
                                    required
                                    minLength={6}
                                    className="bg-transparent outline-none w-full ml-3 text-white placeholder:text-gray-500"
                                />
                            </div>
                        </div>

                       

                        {/* Remember */}
                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 text-gray-400 cursor-pointer">
                                <input type="checkbox" className="checkbox checkbox-sm checkbox-primary" />
                                Remember me
                            </label>
                        </div>

                        {/* Login Button */}
                        <motion.button
                            whileTap={{ scale: 0.97 }}
                            whileHover={{ scale: 1.02 }}
                            type="submit"
                            className="w-full bg-linear-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                        >
                            Login
                        </motion.button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-4 my-6">
                        <div className="flex-1 h-1px bg-white/10"></div>
                        <span className="text-gray-500 text-sm">OR</span>
                        <div className="flex-1 h-1px bg-white/10"></div>
                    </div>

                    {/* Social Login */}
                    <button className="w-full border border-white/10 hover:border-blue-500 bg-white/5 py-3 rounded-xl flex items-center justify-center gap-3 text-white transition-all duration-300">
                          <svg aria-label="Google logo" className="rounded-2xl" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Continue with Google
                    </button>

                    {/* Footer */}
                    <p className="text-center text-gray-400 text-sm mt-8">
                        Don&apos;t have an account?{" "}
                        <Link
                            href="/register"
                            className="text-blue-400 hover:text-cyan-300 font-medium"
                        >
                            Register
                        </Link>
                    </p>
                </div>
            </motion.div>
        </div>
       </div>
    );
};
export default LoginPage;