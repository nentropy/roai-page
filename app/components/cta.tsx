'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function Cta() {
  return (
    <section className="py-16 md:py-24 bg-blue-600 bg-opacity-90 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Navigate Regulations with Confidence?</h2>
          <p className="text-xl mb-8">Start using Roai today and ensure your projects are compliant.</p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 rounded-full">
            Get Started Now
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

