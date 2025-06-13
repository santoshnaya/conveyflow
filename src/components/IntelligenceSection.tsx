'use client'

import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { Brain } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function IntelligenceSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const circlesRef = useRef<HTMLDivElement>(null)
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

      // Animate concentric circles
      gsap.set('.circle', { scale: 0, opacity: 0 })
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1
        }
      })

      tl.to('.circle-1', { scale: 1, opacity: 0.8, duration: 1 })
        .to('.circle-2', { scale: 1, opacity: 0.6, duration: 1 }, "-=0.5")
        .to('.circle-3', { scale: 1, opacity: 0.4, duration: 1 }, "-=0.5")
        .to('.circle-4', { scale: 1, opacity: 0.2, duration: 1 }, "-=0.5")
        .fromTo(textRef.current, 
          { opacity: 0, x: 100 },
          { opacity: 1, x: 0, duration: 1 }, 
          "-=1"
        )
    }, sectionRef.current)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-lime-100 via-green-50 to-lime-200 overflow-hidden"
    >
      <div className="container mx-auto px-6 h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          {/* Concentric Circles Animation */}
          <motion.div
            ref={circlesRef}
            className="relative flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative w-96 h-96">
              {/* Center character */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-teal-400 to-green-500 rounded-full flex items-center justify-center z-20"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Brain className="w-10 h-10 text-white" />
              </motion.div>

              {/* Concentric circles */}
              <div className="circle circle-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-lime-400 rounded-full"></div>
              <div className="circle circle-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-4 border-green-400 rounded-full"></div>
              <div className="circle circle-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-4 border-teal-400 rounded-full"></div>
              <div className="circle circle-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-4 border-blue-400 rounded-full"></div>

              {/* Floating user avatars */}
              <motion.div
                className="absolute top-8 right-16 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-lg flex items-center justify-center"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 360]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <span className="text-white font-bold text-sm">A</span>
              </motion.div>

              <motion.div
                className="absolute bottom-8 left-16 w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full shadow-lg flex items-center justify-center"
                animate={{ 
                  x: [0, 15, 0],
                  rotate: [0, -360]
                }}
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <span className="text-white font-bold text-sm">B</span>
              </motion.div>

              <motion.div
                className="absolute top-16 left-8 w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-lg flex items-center justify-center"
                animate={{ 
                  x: [0, -10, 0],
                  y: [0, 10, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <span className="text-white font-bold text-xs">C</span>
              </motion.div>

              <motion.div
                className="absolute bottom-16 right-8 w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full shadow-lg flex items-center justify-center"
                animate={{ 
                  x: [0, 10, 0],
                  y: [0, -10, 0],
                  rotate: [0, -180, -360]
                }}
                transition={{ 
                  duration: 14,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <span className="text-white font-bold text-xs">D</span>
              </motion.div>

              {/* Connecting dots */}
              <motion.div
                className="absolute top-20 right-20 w-3 h-3 bg-lime-400 rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>

              <motion.div
                className="absolute bottom-20 left-20 w-3 h-3 bg-teal-400 rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              ></motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            ref={textRef}
            className="space-y-8"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Evolving climate
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-green-500">
                intelligence
              </span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 max-w-lg">
              <p>
                Planet is optimized to sow connections, recommend collaborations, and cross-pollinate knowledge within and across groups.
              </p>
              <p>
                Your experiences are magnified and mirrored throughout the global network for the greater good.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 