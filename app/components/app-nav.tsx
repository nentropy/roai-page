'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, Home, FileText, BarChart, Settings, HelpCircle } from 'lucide-react'

const navItems = [
  { name: 'Dashboard', icon: Home, href: '/app' },
  { name: 'Projects', icon: FileText, href: '/app/projects' },
  { name: 'Analytics', icon: BarChart, href: '/app/analytics' },
  { name: 'Settings', icon: Settings, href: '/app/settings' },
  { name: 'Help', icon: HelpCircle, href: '/app/help' },
]

export default function AppNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/app" className="text-2xl font-bold">Roai App</Link>
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="flex items-center space-x-1 hover:text-blue-400 transition-colors">
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="block py-2 px-4 hover:bg-gray-700 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <div className="flex items-center space-x-2">
              <item.icon className="w-4 h-4" />
              <span>{item.name}</span>
            </div>
          </Link>
        ))}
      </motion.div>
    </nav>
  )
}

