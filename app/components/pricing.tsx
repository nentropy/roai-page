'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '$99',
    features: [
      'Up to 5 projects',
      'Basic regulatory analysis',
      'Email support'
    ]
  },
  {
    name: 'Pro',
    price: '$299',
    features: [
      'Up to 20 projects',
      'Advanced regulatory analysis',
      'Priority support',
      'Custom reports'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Unlimited projects',
      'Full regulatory coverage',
      'Dedicated account manager',
      'API access'
    ]
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Pricing Plans
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-700 border-none shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                <CardHeader>
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="text-3xl font-bold">{plan.price}<span className="text-sm font-normal">/month</span></p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 mr-2 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    {plan.name === 'Enterprise' ? 'Contact Us' : 'Get Started'}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

