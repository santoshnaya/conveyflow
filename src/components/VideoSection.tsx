'use client'

import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { Play, TreePine, Globe, Zap, Sparkles, ArrowRight } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const floatingElements = [
  { icon: TreePine, position: { top: '15%', left: '8%' }, color: 'text-emerald-400', delay: 0 },
  { icon: Globe, position: { top: '20%', right: '12%' }, color: 'text-blue-400', delay: 1 },
  { icon: Zap, position: { bottom: '25%', left: '10%' }, color: 'text-yellow-400', delay: 2 },
  { icon: Sparkles, position: { bottom: '15%', right: '15%' }, color: 'text-purple-400', delay: 3 }
]

export default function VideoSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Enhanced scroll-triggered animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1.5,
          anticipatePin: 1
        }
      })

      // Staggered entrance animations
      tl.fromTo(titleRef.current, 
        { opacity: 0, y: 80, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: 'power4.out' }
      )
      .fromTo(subtitleRef.current, 
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, 
        "-=0.8"
      )
      .fromTo(videoRef.current, 
        { opacity: 0, scale: 0.8, rotateY: -15 },
        { opacity: 1, scale: 1, rotateY: 0, duration: 1.2, ease: 'back.out(1.7)' }, 
        "-=0.6"
      )

      // Parallax effect for background elements
      gsap.to('.floating-bg-element', {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2
        }
      })
    }, sectionRef.current)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen mesh-gradient flex items-center overflow-hidden py-20"
    >
      {/* Enhanced background orbs */}
      <div className="absolute inset-0">
        <motion.div 
          className="floating-bg-element absolute top-32 left-16 w-80 h-80 planet-gradient-2 rounded-full opacity-10 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="floating-bg-element absolute top-20 right-24 w-96 h-96 planet-gradient rounded-full opacity-8 blur-3xl"
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.08, 0.12, 0.08]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        <motion.div 
          className="floating-bg-element absolute bottom-32 left-1/3 w-64 h-64 planet-gradient-3 rounded-full opacity-12 blur-2xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.12, 0.18, 0.12]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
        />
      </div>

      {/* Floating environmental icons */}
      {floatingElements.map((element, index) => {
        const Icon = element.icon
        return (
          <motion.div
            key={index}
            className={`absolute w-16 h-16 flex items-center justify-center ${element.color} opacity-20`}
            style={element.position}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ 
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.1, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              delay: element.delay,
              ease: "easeInOut"
            }}
          >
            <Icon className="w-10 h-10" />
          </motion.div>
        )
      })}

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 170, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 170, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-20 max-w-7xl">
        {/* Section badge */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full glass text-sm font-medium text-cyan-400 border border-cyan-400/20">
            <Play className="w-4 h-4 mr-2" />
            Platform Preview
          </span>
        </motion.div>

        <motion.h2
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 font-space-grotesk"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
          viewport={{ once: true }}
        >
          <span className="block text-white">The Next Step in</span>
          <span className="block gradient-text-teal">Climate Action</span>
        </motion.h2>
        
        <motion.p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed font-light"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Experience Planet&apos;s revolutionary platform designed to unite environmental 
          leaders worldwide and accelerate meaningful climate solutions.
        </motion.p>

        {/* Enhanced Video Player */}
        <motion.div
          ref={videoRef}
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
          viewport={{ once: true }}
        >
          {/* Floating decorative elements */}
          <motion.div 
            className="absolute -top-8 -left-8 w-20 h-20 glass rounded-3xl flex items-center justify-center border border-emerald-400/20 glow-teal"
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <TreePine className="w-10 h-10 text-emerald-400" />
          </motion.div>
          
          <motion.div 
            className="absolute -top-8 -right-8 w-20 h-20 glass rounded-3xl flex items-center justify-center border border-blue-400/20 glow-blue"
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <Globe className="w-10 h-10 text-blue-400" />
          </motion.div>
          
          <motion.div 
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-20 h-20 glass rounded-3xl flex items-center justify-center border border-yellow-400/20"
            animate={{ 
              y: [0, -12, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ 
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            <Zap className="w-10 h-10 text-yellow-400" />
          </motion.div>

          {/* Main video container */}
          <div className="relative glass-dark rounded-3xl p-8 border border-white/10 glow-teal backdrop-blur-xl">
            {/* Video content */}
            <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-16 min-h-96 flex items-center justify-center overflow-hidden">
              {/* Animated background pattern */}
              <motion.div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `
                    radial-gradient(circle at 20% 20%, rgba(0, 212, 170, 0.3) 0%, transparent 50%),
                    radial-gradient(circle at 80% 80%, rgba(79, 172, 254, 0.3) 0%, transparent 50%)
                  `
                }}
                animate={{
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              {/* Planet logo and content */}
              <div className="text-center relative z-10">
                <motion.div 
                  className="w-32 h-32 planet-gradient-2 rounded-3xl flex items-center justify-center mb-8 mx-auto glow-teal"
                  whileHover={{ scale: 1.05, rotateY: 10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <Globe className="w-16 h-16 text-white" />
                </motion.div>
                
                <h3 className="text-4xl font-bold gradient-text mb-6 font-space-grotesk">
                  Planet
                </h3>
                
                <p className="text-gray-300 mb-8 text-lg max-w-md mx-auto">
                  Watch how our platform transforms environmental collaboration
                </p>
                
                {/* Enhanced play button */}
                <motion.button
                  className="group relative w-24 h-24 btn-planet rounded-full flex items-center justify-center text-white shadow-2xl overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                >
                  <Play className="w-10 h-10 ml-1 relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 opacity-75 group-hover:opacity-100 transition-opacity" />
                </motion.button>
              </div>

              {/* Decorative floating particles */}
              <motion.div 
                className="absolute top-12 left-12 w-3 h-3 bg-teal-400 rounded-full"
                animate={{ 
                  y: [0, -20, 0],
                  opacity: [1, 0.3, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute top-20 right-16 w-4 h-4 bg-purple-400 rounded-full"
                animate={{ 
                  y: [0, -15, 0],
                  opacity: [0.8, 0.2, 0.8]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              <motion.div 
                className="absolute bottom-16 left-20 w-2 h-2 bg-yellow-400 rounded-full"
                animate={{ 
                  y: [0, -25, 0],
                  opacity: [1, 0.4, 1]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              <motion.div 
                className="absolute bottom-12 right-12 w-5 h-5 bg-blue-400 rounded-full"
                animate={{ 
                  y: [0, -18, 0],
                  opacity: [0.9, 0.3, 0.9]
                }}
                transition={{ 
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="glass px-8 py-4 rounded-full font-medium text-white border border-white/20 hover-lift group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center">
              Learn More About Planet
              <motion.div
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 