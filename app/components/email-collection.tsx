'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function EmailCollection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Subscribing...')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setStatus('Thank you for subscribing!')
        setEmail('')
      } else {
        const data = await response.json()
        setStatus(data.error || 'An error occurred. Please try again.')
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.')
    }
  }

  return (
    <section className="bg-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center text-purple-400"
        >
          Stay Updated
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl mb-8 text-center text-gray-300"
        >
          Subscribe to our newsletter for the latest updates and insights.
        </motion.p>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onSubmit={handleSubmit}
          className="max-w-md mx-auto"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow bg-gray-700 text-white border-gray-600 focus:border-purple-400"
            />
            <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white">
              Subscribe
            </Button>
          </div>
          {status && <p className="mt-4 text-center text-gray-300">{status}</p>}
        </motion.form>
      </div>
    </section>
  )
}

