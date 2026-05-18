"use client";
import {
  Lightbulb,
  Rocket,
  Users,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: <Lightbulb size={34} />,
    title: "Creative Ideas",
    description:
      "Explore innovative startup ideas and discover modern business opportunities.",
  },
  {
    icon: <Rocket size={34} />,
    title: "Launch Fast",
    description:
      "Turn your ideas into reality with inspiration from successful startups.",
  },
  {
    icon: <Users size={34} />,
    title: "Community",
    description:
      "Connect with creators, entrepreneurs, and passionate innovators.",
  },
  {
    icon: <TrendingUp size={34} />,
    title: "Trending Startups",
    description:
      "Stay updated with the latest startup trends and future technologies.",
  },
];

export default function Section() {
  return (
    <section className="bg-[#0f172a] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-5">
            Why Choose{" "}
            <span className="bg-linear-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              IdeaVault
            </span>
            ?
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Discover powerful startup ideas, connect with creative people,
            and build the next big innovation with confidence.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-[#1e293b] border border-slate-700 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-cyan-500/10"
            >
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-[#1e293b] rounded-3xl p-10 text-center border border-slate-700">
            <h3 className="text-5xl font-extrabold text-cyan-400 mb-3">
              500+
            </h3>
            <p className="text-gray-400 text-lg">
              Startup Ideas Shared
            </p>
          </div>

          <div className="bg-[#1e293b] rounded-3xl p-10 text-center border border-slate-700">
            <h3 className="text-5xl font-extrabold text-cyan-400 mb-3">
              10K+
            </h3>
            <p className="text-gray-400 text-lg">
              Active Innovators
            </p>
          </div>

          <div className="bg-[#1e293b] rounded-3xl p-10 text-center border border-slate-700">
            <h3 className="text-5xl font-extrabold text-cyan-400 mb-3">
              120+
            </h3>
            <p className="text-gray-400 text-lg">
              Startup Categories
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 bg-linear-to-r from-cyan-500 to-blue-600 rounded-[40px] p-12 md:p-16 text-center shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Ready to Build Your Dream Startup?
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-gray-100 leading-relaxed mb-10">
            Join IdeaVault today and explore creative startup ideas,
            future innovations, and opportunities that inspire success.
          </p>

          <button className="inline-flex items-center gap-2 bg-white text-black font-bold px-8 py-4 rounded-full hover:bg-gray-200 transition duration-300">
            <Link href={"/add-idea"}>Create Idea</Link>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}