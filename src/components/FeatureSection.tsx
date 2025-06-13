'use client'

import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { Users, FileText, MessageSquare, BarChart3, Target } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function FeatureSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
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

      // Parallax animations
      gsap.to(textRef.current, {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      })

      gsap.to(imageRef.current, {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      })
    }, sectionRef.current)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-orange-100 via-yellow-50 to-orange-200 overflow-hidden"
    >
      <div className="container mx-auto px-6 h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Text Content */}
          <motion.div
            ref={textRef}
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="max-w-xl">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Bringing your environmental
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                  action, into one place
                </span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  How much of our energy gets spent moving from one tool or app to another - messages on one platform, tasks on another, groups on yet another.
                </p>
                <p>
                  Planet brings community and project management together so that we can make progress, faster and more effectively.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Interactive Image/Illustration */}
          <motion.div
            ref={imageRef}
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Main image container */}
              <div className="w-full h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl overflow-hidden relative">
                {/* Simulated people working together */}
                <div className="absolute inset-0 p-8">
                  <div className="grid grid-cols-2 gap-4 h-full">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 flex flex-col items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                        <Users className="w-8 h-8 text-blue-600" />
                      </div>
                      <div className="text-white text-center">
                        <div className="w-8 h-2 bg-white/50 rounded mb-2"></div>
                        <div className="w-12 h-2 bg-white/30 rounded"></div>
                      </div>
                    </div>
                    
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 flex flex-col items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                        <FileText className="w-8 h-8 text-green-600" />
                      </div>
                      <div className="text-white text-center">
                        <div className="w-10 h-2 bg-white/50 rounded mb-2"></div>
                        <div className="w-8 h-2 bg-white/30 rounded"></div>
                      </div>
                    </div>
                    
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 flex flex-col items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                        <MessageSquare className="w-8 h-8 text-purple-600" />
                      </div>
                      <div className="text-white text-center">
                        <div className="w-6 h-2 bg-white/50 rounded mb-2"></div>
                        <div className="w-10 h-2 bg-white/30 rounded"></div>
                      </div>
                    </div>
                    
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 flex flex-col items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                        <BarChart3 className="w-8 h-8 text-orange-600" />
                      </div>
                      <div className="text-white text-center">
                        <div className="w-12 h-2 bg-white/50 rounded mb-2"></div>
                        <div className="w-6 h-2 bg-white/30 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating icons */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center"
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
                <Users className="w-8 h-8 text-blue-500" />
              </motion.div>

              <motion.div
                className="absolute top-1/2 -left-4 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center"
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
                <FileText className="w-7 h-7 text-green-500" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 left-1/4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ 
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <MessageSquare className="w-6 h-6 text-purple-500" />
              </motion.div>

              <motion.div
                className="absolute top-8 left-8 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 15, 0]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
              >
                <Target className="w-5 h-5 text-red-500" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 