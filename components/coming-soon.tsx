'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, CheckCircle, Code, Layout, Zap } from 'lucide-react'
import { apiConnector } from '@/lib/apiConnector' // Make sure you have your API connector to make requests.

export function ComingSoonComponent() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('') // To store error message

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage('') // Reset error message on new submission attempt.
    
    console.log('Email submitted:', email)

    try {
      // Call API here (adjust to your actual API)
      await apiConnector('POST', `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/websites/create`, { website: 'viora-tech', email })
      setIsSubmitted(true)
      setEmail('')
    } catch (e) {
      console.error(e)
      setErrorMessage('Something went wrong. Please try again later.') // Show error message if the request fails
    }
  }

  const services = [
    { icon: Code, text: 'Custom Website Development' },
    { icon: Layout, text: 'Responsive Design' },
    { icon: Zap, text: 'Fast & Efficient Solutions' },
  ]

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-teal-50 to-cyan-100 text-gray-800 p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-teal-600 mb-2">Viora Tech</h1>
        <h2 className="text-2xl font-semibold mb-4">Your Website Creation Partner</h2>
        <p className="text-lg mb-4 max-w-md mx-auto">
        {`We're gearing up to help you create stunning, functional websites with ease. 
          Our expert team is here to bring your web vision to life.`}
        </p>
        <div className="text-xl font-bold text-cyan-600 mb-8">Coming Soon!</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
      >
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
            <service.icon className="w-12 h-12 text-teal-500 mb-4" />
            <p className="text-center font-semibold">{service.text}</p>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="w-full max-w-md"
      >
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow"
              required
              aria-label="Email address"
            />
            <Button type="submit" className="bg-teal-600 hover:bg-teal-700 text-white">
              <Send className="w-4 h-4 mr-2" />
              Get Notified
            </Button>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center bg-green-100 text-green-700 p-4 rounded-md"
          >
            <CheckCircle className="w-6 h-6 mr-2" />
            <span>{`Thank you! We'll keep you updated on our launch.`}</span>
          </motion.div>
        )}
        
        {/* Error message display */}
        {errorMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-4 flex items-center justify-center bg-red-100 text-red-700 p-4 rounded-md"
          >
            <span>{errorMessage}</span>
          </motion.div>
        )}
      </motion.div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-12 text-sm text-gray-600"
      >
        © {new Date().getFullYear()} Viora Tech. All rights reserved.
      </motion.footer>
    </div>
  )
}
