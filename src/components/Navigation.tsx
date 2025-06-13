'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Globe, Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out',
          isScrolled 
            ? 'glass-dark shadow-lg border-b border-white/10' 
            : 'bg-transparent'
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
      >
        <nav className="container mx-auto px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3 group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative">
                <div className="w-10 h-10 planet-gradient-2 rounded-xl flex items-center justify-center glow-teal group-hover:glow-teal transition-all duration-300">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -inset-2 planet-gradient-2 rounded-xl opacity-20 group-hover:opacity-40 blur-lg transition-all duration-300"></div>
              </div>
              <span className="font-bold text-2xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Planet
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['Features', 'About', 'Community', 'Resources'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors duration-300 font-medium relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 planet-gradient-2 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.button
                className="px-6 py-2.5 text-gray-300 hover:text-white transition-all duration-300 font-medium relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Log in
                <span className="absolute inset-0 rounded-lg bg-white/5 scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </motion.button>
              
              <motion.button
                className="btn-planet px-8 py-3 rounded-full font-semibold text-sm tracking-wide relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <span className="relative z-10">Join Planet</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden w-10 h-10 flex items-center justify-center text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              className="absolute top-20 left-4 right-4 glass-dark rounded-2xl p-6 border border-white/10"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-4">
                {['Features', 'About', 'Community', 'Resources'].map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-white hover:text-teal-400 transition-colors duration-300 font-medium py-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </motion.a>
                ))}
                <hr className="border-white/20 my-4" />
                <motion.button
                  className="w-full text-center text-gray-300 hover:text-white transition-colors duration-300 font-medium py-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  Log in
                </motion.button>
                <motion.button
                  className="w-full btn-planet py-3 rounded-full font-semibold"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  Join Planet
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 