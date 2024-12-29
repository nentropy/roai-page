'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Zap, Shield, TrendingUp } from 'lucide-react'

const features = [
  {
    name: 'Regulatory Compliance',
    description: 'Stay compliant with ever-changing regulations using our AI-powered analysis.',
    icon: Shield,
  },
  {
    name: 'Quick Evaluation',
    description: 'Evaluate your projects against regulatory requirements in minutes, not days.',
    icon: Zap,
  },
  {
    name: 'Risk Assessment',
    description: 'Identify potential risks and challenges before they become problems.',
    icon: CheckCircle,
  },
  {
    name: 'Market Insights',
    description: 'Gain valuable insights into market trends and opportunities for your project.',
    icon: TrendingUp,
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center text-purple-400"
        >
          Key Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start"
            >
              <div className="flex-shrink-0">
                <feature.icon className="h-6 w-6 text-blue-400" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-gray-200">{feature.name}</h3>
                <p className="mt-2 text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

