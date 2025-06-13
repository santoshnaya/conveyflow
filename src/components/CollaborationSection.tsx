'use client'

import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { Home, Zap, User } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function CollaborationSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Pin section during scroll
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        pin: true,
        pinSpacing: false
      })

      // Animate elements
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1
        }
      })

      tl.fromTo(cardRef.current, 
        { opacity: 0, x: -100, rotation: -5 },
        { opacity: 1, x: 0, rotation: 0, duration: 1 }
      )
      .fromTo(textRef.current, 
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 1 }, 
        "-=0.7"
      )
    }, sectionRef.current)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-purple-200 overflow-hidden"
    >
      <div className="container mx-auto px-6 h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          {/* Project Card */}
          <motion.div
            ref={cardRef}
            className="relative"
            initial={{ opacity: 0, x: -100, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Floating connection lines */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full">
                <defs>
                  <pattern id="collaboration-dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                    <circle cx="3" cy="3" r="1.5" fill="#8b5cf6" opacity="0.3"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#collaboration-dots)" />
                
                {/* Animated connection lines */}
                <motion.path
                  d="M 50 100 Q 200 50 350 150"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{ duration: 3, delay: 0.5 }}
                />
                <motion.path
                  d="M 100 300 Q 300 250 500 350"
                  stroke="#10b981"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{ duration: 3, delay: 1 }}
                />
              </svg>
            </div>

            {/* Main project card */}
            <div className="bg-white rounded-3xl shadow-xl p-6 relative z-10 max-w-md">
              {/* Card header with user avatars */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-white text-xs font-bold">A</span>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-white text-xs font-bold">B</span>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-white text-xs font-bold">C</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-200 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-gray-600 text-xs font-bold">+</span>
                  </div>
                </div>
                <span className="text-sm text-gray-500">17+</span>
              </div>

              {/* Project image */}
              <div className="relative h-48 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl mb-4 overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <Home className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium">Your Home</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Zap className="w-4 h-4 text-yellow-800" />
                    </div>
                    <span className="text-sm font-medium">Energy</span>
                  </div>
                </div>
              </div>

              {/* Project details */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Madrid Residents for Solar
              </h3>
              
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-gray-600" />
                </div>
                <span className="text-sm text-gray-600">Miri</span>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span className="text-sm text-gray-600">Climate Justice</span>
              </div>

              {/* Additional project cards in background */}
              <div className="absolute -top-4 -left-4 w-64 h-20 bg-lime-200 rounded-xl shadow-lg transform -rotate-3 opacity-80">
                <div className="p-3">
                  <div className="text-sm font-medium text-gray-800">Foxbury</div>
                </div>
              </div>
            </div>

            {/* Floating user avatars */}
            <motion.div
              className="absolute top-8 -right-4 w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full shadow-lg flex items-center justify-center"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="text-white font-bold text-sm">M</span>
            </motion.div>

            <motion.div
              className="absolute bottom-8 -left-6 w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-lg flex items-center justify-center"
              animate={{ 
                x: [0, -5, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <span className="text-white font-bold text-xs">J</span>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            ref={textRef}
            className="space-y-8"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Weaving collaboration
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                across silos
              </span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 max-w-lg">
              <p>
                Instead of one topic or issue area, Planet brings the entire universe of climate activists together in one place.
              </p>
              <p>
                You can focus on your climate goals while advancing the entire field and collaborating across projects and organizations.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 