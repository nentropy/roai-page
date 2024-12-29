'use client'

import { motion } from 'framer-motion'

export default function InfoPanel() {
  return (
    <section className="bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center text-purple-400"
        >
          About Roai
        </motion.h2>
        <div className="text-lg text-gray-300 space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Roai is an AI-powered Project Feasibility Evaluator designed to help businesses
            assess the viability of their projects in an ever-evolving regulatory landscape.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Our cutting-edge AI technology analyzes your project details against current
            regulations, market trends, and industry standards to provide you with
            comprehensive insights and recommendations.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Whether you're a small startup or a medium-sized enterprise, Roai empowers you
            to make informed decisions, mitigate risks, and optimize your project's chances
            of success.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

