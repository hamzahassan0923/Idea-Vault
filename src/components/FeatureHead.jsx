"use client";

import { motion } from "framer-motion";

const FeatureHead = () => {
    return (
        <div className="mt-10">
                <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
            Top Rated
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900">
            New Features
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Explore powerful tools and modern features designed to help
            innovators build the future faster.
          </p>
        </motion.div>
        </div>
    );
};

export default FeatureHead;