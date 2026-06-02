"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const DashBoardPage = () => {
    const [activeTab, setActiveTab] = useState("overview");

    const stats = [
        { title: "Total Ideas", value: "128", color: "from-blue-500 to-cyan-500" },
        { title: "Active Users", value: "2.4K", color: "from-purple-500 to-pink-500" },
        { title: "Revenue", value: "$12.5K", color: "from-green-500 to-emerald-500" },
        { title: "Projects", value: "34", color: "from-orange-500 to-yellow-500" },
    ];

    const ideas = [
        "AI Security Camera",
        "Smart Cooling System",
        "Wireless Mouse Pro",
        "Smart LED Lamp",
    ];

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-black text-white p-6">

            {/* HEADER */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between mb-8"
            >
                <h1 className="text-3xl font-bold">📊 Dashboard</h1>

                <div className="flex gap-2 bg-white/10 p-1 rounded-xl">
                    {["overview", "analytics", "settings"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 rounded-lg text-sm transition ${activeTab === tab ? "bg-blue-500" : "hover:bg-white/10"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </motion.div>

            {/* STATS */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                {stats.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className={`p-5 rounded-2xl bg-linear-to-r ${item.color} shadow-lg`}
                    >
                        <p className="text-sm opacity-80">{item.title}</p>
                        <h2 className="text-2xl font-bold">{item.value}</h2>
                    </motion.div>
                ))}
            </div>

            {/* MAIN GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* LEFT PANEL */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="lg:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-6"
                >
                    <h2 className="text-xl font-semibold mb-4">📈 Activity Overview</h2>

                    <div className="h-64 flex items-end gap-3">
                        {[40, 70, 55, 90, 60, 80, 30].map((h, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: h + "%" }}
                                transition={{ delay: i * 0.1 }}
                                className="w-6 bg-blue-500 rounded-t-lg"
                            />
                        ))}
                    </div>
                </motion.div>

                {/* RIGHT PANEL */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-6"
                >
                    <h2 className="text-xl font-semibold mb-4">💡 Latest Ideas</h2>

                    <div className="space-y-3">
                        {ideas.map((idea, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ x: 5 }}
                                className="p-3 bg-white/10 rounded-xl cursor-pointer"
                            >
                                {idea}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* BOTTOM SECTION */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 bg-white/5 border border-white/10 rounded-2xl p-6"
            >
                <h2 className="text-xl font-semibold mb-3">⚡ Quick Actions</h2>

                <div className="flex flex-wrap gap-3">
                    {["Create Idea", "Upload File", "Generate Report", "AI Assistant"].map(
                        (btn, i) => (
                            <motion.button
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-xl"
                            >
                                {btn}
                            </motion.button>
                        )
                    )}
                </div>
            </motion.div>
        </div>
    );
}

export default DashBoardPage;