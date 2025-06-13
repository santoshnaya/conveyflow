'use client'

import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { ArrowRight, Leaf, Globe, Zap } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)

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

      // Animate CTA
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1
        }
      })

      tl.fromTo(ctaRef.current, 
        { opacity: 0, y: 100, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1 }
      )
      .fromTo(footerRef.current, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }, 
        "-=0.5"
      )
    }, sectionRef.current)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-teal-500 via-green-600 to-teal-700 overflow-hidden flex flex-col justify-between"
    >
      {/* Floating background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full"
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        
        <motion.div
          className="absolute top-1/3 right-20 w-24 h-24 bg-white/15 rounded-full"
          animate={{ 
            y: [0, 25, 0],
            x: [0, -15, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        ></motion.div>

        <motion.div
          className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-white/20 rounded-full"
          animate={{ 
            x: [0, 30, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        ></motion.div>

        {/* Floating icons */}
        <motion.div
          className="absolute top-32 right-32 text-white/20"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Leaf className="w-16 h-16" />
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-32 text-white/20"
          animate={{ 
            rotate: [0, -360],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Globe className="w-20 h-20" />
        </motion.div>

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white/10"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Zap className="w-32 h-32" />
        </motion.div>
      </div>

      {/* Main CTA Content */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <motion.div
          ref={ctaRef}
          className="text-center text-white max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Transform climate action,
            <br />
            <span className="text-lime-300">for good.</span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 leading-relaxed opacity-90">
            Join changemakers around the world in a powerful new community
            <br />
            transforming our efforts into a cascade of impact
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <motion.button
              className="px-10 py-4 bg-lime-400 text-gray-900 rounded-full font-bold text-lg hover:bg-lime-300 transition-all shadow-lg hover:shadow-xl flex items-center space-x-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Sign Up</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <div className="text-white/80">
              <span>Or, </span>
              <motion.a
                href="#"
                className="underline hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                contact us
              </motion.a>
              <span> for help migrating your group to Planet</span>
            </div>
          </div>

          {/* Quote */}
          <motion.div
            className="border-l-4 border-lime-400 pl-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-lime-200 text-lg italic mb-2">
              &ldquo;If you want to sit under a shade in your old age
              <br />
              plant a tree now.&rdquo;
            </p>
            <p className="text-lime-300 font-semibold uppercase tracking-wider text-sm">
              AFRICAN PROVERB
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        ref={footerRef}
        className="relative z-10 border-t border-white/20 bg-black/20 backdrop-blur-sm"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-lime-400 to-green-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <span className="text-white font-bold text-2xl">Planet</span>
              </div>
              <p className="text-white/70 max-w-md leading-relaxed">
                © 2022 OurPlanetApp. All right reserved.
              </p>
            </div>

            {/* App Store Links */}
            <div className="space-y-4">
              <div className="flex space-x-4">
                <motion.div
                  className="bg-black rounded-lg px-4 py-2 flex items-center space-x-2 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-6 h-6 bg-white rounded"></div>
                  <div>
                    <div className="text-xs text-white/70">GET IT ON</div>
                    <div className="text-sm text-white font-semibold">Google Play</div>
                  </div>
                </motion.div>
                
                <motion.div
                  className="bg-black rounded-lg px-4 py-2 flex items-center space-x-2 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-6 h-6 bg-white rounded"></div>
                  <div>
                    <div className="text-xs text-white/70">Download on the</div>
                    <div className="text-sm text-white font-semibold">App Store</div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-col sm:flex-row gap-8 text-white/70">
              <div className="space-y-2">
                <motion.a 
                  href="#" 
                  className="block hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Fund Planet
                </motion.a>
                <motion.a 
                  href="#" 
                  className="block hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Privacy Policy
                </motion.a>
              </div>
              <div className="space-y-2">
                <motion.a 
                  href="#" 
                  className="block hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Terms of Service
                </motion.a>
                <motion.a 
                  href="#" 
                  className="block hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Website by Verticalloop
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.footer>
    </section>
  )
} 