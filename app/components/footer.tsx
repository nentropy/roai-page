'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-gray-400 py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">&copy; 2023 Roai. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <Link href="/privacy" className="text-sm hover:text-purple-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm hover:text-purple-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-sm hover:text-purple-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

