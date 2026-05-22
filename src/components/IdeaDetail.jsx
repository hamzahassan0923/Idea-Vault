"use client"

import { motion, px } from "framer-motion"
import {
  Cpu,
  BadgeDollarSign,
  Target,
  ShieldAlert,
  Sparkles,
  Tags,
  Layers3,
  Zap,
} from "lucide-react"
import Image from "next/image"

const IdeaDetail =({idea})=> {
 

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-blue-950 to-black text-white px-6 py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 mb-5">
              <Cpu size={18} />
              {idea.category}
            </div>

            <h1 className="text-5xl md:text-6xl font-black leading-tight bg-linear-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent mb-6">
              {idea.ideaTitle}
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl">
              {idea.shortDescription}
            </p>

            <div className="flex flex-wrap gap-3">
              {idea.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all duration-300 text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-20 rounded-full" />

            <div className="relative overflow-hidden rounded-[30px] border border-white/10 shadow-2xl">
              <Image
                src={idea.imageURL}
                 width={800}
                 height={600}
                   quality={75}
                alt={idea.ideaTitle}
                className="w-full h- object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 w-full p-6">
                <div className="flex items-center gap-3 text-cyan-300 mb-2">
                  <Zap size={20} />
                  AI Powered Cooling Optimization
                </div>

                <p className="text-slate-300 text-sm">
                  Silent cooling with RGB liquid technology.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-14">
          <InfoCard
            icon={<Layers3 size={24} />}
            title="Detailed Description"
            content={idea.detailedDescription}
          />

          <InfoCard
            icon={<BadgeDollarSign size={24} />}
            title="Estimated Budget"
            content={idea.estimatedBudget}
          />

          <InfoCard
            icon={<Target size={24} />}
            title="Target Audience"
            content={idea.targetAudience}
          />

          <InfoCard
            icon={<ShieldAlert size={24} />}
            title="Problem Statement"
            content={idea.problemStatement}
          />
        </div>

        {/* Proposed Solution */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 p-8 rounded-[30px] bg-white/5 border border-white/10 backdrop-blur-xl"
        >
          <div className="flex items-center gap-3 mb-5 text-cyan-300">
            <Sparkles size={28} />
            <h2 className="text-3xl font-bold text-white">
              Proposed Solution
            </h2>
          </div>

          <p className="text-slate-300 text-lg leading-relaxed">
            {idea.proposedSolution}
          </p>
        </motion.div>

        {/* Tags Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 p-8 rounded-[30px] border border-white/10 bg-linear-to-r from-cyan-500/10 to-blue-500/10"
        >
          <div className="flex items-center gap-3 mb-5 text-cyan-300">
            <Tags size={24} />
            <h2 className="text-2xl font-bold text-white">
              Technology Stack
            </h2>
          </div>

          <div className="flex flex-wrap gap-4">
            {idea.tags.map((tag, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="px-5 py-3 rounded-2xl bg-black/30 border border-white/10 backdrop-blur-lg"
              >
                {tag}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function InfoCard({ icon, title, content }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-7 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-500/40 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-4 text-cyan-300">
        {icon}
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>

      <p className="text-slate-300 leading-relaxed">
        {content}
      </p>
    </motion.div>
  )
}
export default IdeaDetail;
