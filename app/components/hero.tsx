'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="pt-16 pb-8 md:pt-24 md:pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Navigate Regulations with AI-Powered Insights
            </h1>
            <p className="text-xl mb-6 text-gray-300">
              Roai helps small to medium businesses evaluate projects in an evolving regulatory landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-gray-700 text-white border-gray-600 focus:border-blue-500"
              />
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                Get Started
              </Button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-5/12"
          >
            <div className="relative w-full h-64 md:h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <svg className="w-3/4 h-3/4 text-white opacity-20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,89.1,-0.5C88.1,15.3,83.5,30.6,75.2,43.9C66.9,57.3,54.8,68.6,40.7,76.6C26.6,84.6,10.3,89.3,-5.4,88.1C-21.1,86.9,-42.2,79.8,-58.4,68.5C-74.6,57.2,-85.8,41.7,-91.6,24.4C-97.4,7,-97.7,-12.3,-92.7,-30.5C-87.7,-48.7,-77.4,-65.9,-62.3,-74.4C-47.3,-82.9,-27.6,-82.7,-9.7,-81.1C8.3,-79.5,30.5,-83.5,44.7,-76.4Z" transform="translate(100 100)" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

