      "use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";      
import Image from "next/image";

const IPage = ({idea}) => {
 
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-3xl bg-white shadow-xl border border-blue-100"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <Image
          src={"https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop"}
          width={50}
          height={50}
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
        <p className="text-gray-600 leading-relaxed">
          {idea.shortDescription}
        </p>

        {/* Bottom */}
        <div className="mt-6 flex items-center justify-between">
          <button className="rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-md transition duration-300 hover:shadow-2xl">
            View Details
          </button>

        </div>
      </div>

      {/* Glow Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-blue-500/5 pointer-events-none"></div>
    </motion.div>
  );
};

export default IPage;


 //     <div>
    // <motion.div
    //   whileHover={{ y: -10 }}
    //   transition={{ duration: 0.3 }}
    //   className="group relative overflow-hidden rounded-3xl border border-blue-100 bg-white p-6 shadow-lg"
    // >
    //   {/* Glow Effect */}
    //   <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl group-hover:bg-blue-500/30 transition duration-500"></div>

    //   {/* Top */}
    //   <div className="flex items-center justify-between relative z-10">
    //     <div className="flex items-center gap-3">
    //       <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 to-indigo-600 text-white shadow-md">
    //         <Sparkles size={22} />
    //       </div>

    //       <div>
    //         <h2 className="text-xl font-bold text-gray-800">
    //           AI Resume Builder
    //         </h2>

    //         <p className="text-sm text-gray-500">
    //           AI Powered Startup Idea
    //         </p>
    //       </div>
    //     </div>

    //     <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600">
    //       AI
    //     </span>
    //   </div>

    //   {/* Description */}
    //   <p className="relative z-10 mt-5 leading-relaxed text-gray-600">
    //     Generate professional ATS-friendly resumes instantly using AI and smart
    //     automation tools.
    //   </p>

    //   {/* Bottom */}
    //   <div className="relative z-10 mt-6 flex items-center justify-between">
    //     <button className="rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 px-5 py-2.5 font-medium text-white shadow-md transition duration-300 hover:shadow-xl">
    //       View Details
    //     </button>

    //     <motion.div
    //       whileHover={{ rotate: 45 }}
    //       className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600 transition"
    //     >
    //       <ArrowUpRight size={20} />
    //     </motion.div>
    //   </div>

    //   {/* Hover Border */}
    //   <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-blue-300 transition duration-500"></div>
    // </motion.div>
  
    //     </div>