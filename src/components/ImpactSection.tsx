'use client'

import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { Columns3, Users, Settings } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const impactCards = [
  {
    icon: Columns3,
    title: 'Join a critical mass of climate projects and activists converging in one place',
    description: 'Planet brings the expertise, passion, and vitality of the climate action movement together and accelerates our impact.',
    color: 'from-lime-400 to-green-500'
  },
  {
    icon: Users,
    title: 'Form, migrate or join environmental learning and action groups',
    description: 'Form a Pod out of an existing group or join groups of likeminded individuals and experts showing up to make meaningful progress on specific areas of climate action.',
    color: 'from-lime-400 to-green-500'
  },
  {
    icon: Settings,
    title: 'Find tools for making in one place',
    description: 'Ensure equitable and efficient participation as you forge a way forward, together. Use specialized tools for your discussion, progress tracking.',
    color: 'from-lime-400 to-green-500'
  }
]

export default function ImpactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

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

      // Animate cards
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(card,
            { opacity: 0, y: 100, scale: 0.9 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1,
              delay: index * 0.2,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                end: 'bottom 20%',
                scrub: 1
              }
            }
          )
        }
      })
    }, sectionRef.current)

    return () => ctx.revert()
  }, [])

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el)
    }
  }

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-purple-200 overflow-hidden"
    >
      <div className="container mx-auto px-6 h-screen flex flex-col justify-center">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
            PLANET&apos;S UNIQUE INTERFACE
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Designed to Amplify Your Impact
          </h2>
        </motion.div>

        {/* Impact cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {impactCards.map((card, index) => (
            <motion.div
              key={index}
              ref={addToRefs}
              className="relative"
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="h-full bg-gradient-to-br from-lime-200 to-green-300 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${card.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <card.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {card.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {card.description}
                </p>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-white/30 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-white/40 rounded-full"></div>
                <div className="absolute top-1/2 right-8 w-1 h-1 bg-white/50 rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-lime-200 rounded-full opacity-20"
            animate={{ 
              y: [0, -20, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
          
          <motion.div
            className="absolute top-40 right-20 w-24 h-24 bg-green-200 rounded-full opacity-30"
            animate={{ 
              y: [0, 20, 0],
              x: [0, -10, 0],
              scale: [1, 0.9, 1]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          ></motion.div>

          <motion.div
            className="absolute bottom-20 left-1/4 w-20 h-20 bg-blue-200 rounded-full opacity-25"
            animate={{ 
              x: [0, 15, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          ></motion.div>

          <motion.div
            className="absolute bottom-40 right-10 w-16 h-16 bg-purple-200 rounded-full opacity-20"
            animate={{ 
              y: [0, -15, 0],
              x: [0, 10, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          ></motion.div>
        </div>
      </div>
    </section>
  )
} 