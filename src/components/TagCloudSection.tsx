'use client'

import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const climateTags = [
  { text: 'Honoring Indigenous Cultures', color: 'bg-purple-200', size: 'text-sm' },
  { text: 'Buildings', color: 'bg-yellow-200', size: 'text-base' },
  { text: 'Electric Vehicles (EVs)', color: 'bg-blue-200', size: 'text-lg' },
  { text: 'Empowerment', color: 'bg-orange-200', size: 'text-sm' },
  { text: 'Industry', color: 'bg-green-200', size: 'text-base' },
  { text: 'Biodiversity Hotspots', color: 'bg-lime-200', size: 'text-lg' },
  { text: 'Tropical Forests', color: 'bg-emerald-200', size: 'text-sm' },
  { text: 'Urban Farming', color: 'bg-amber-200', size: 'text-base' },
  { text: 'Renewable Energy', color: 'bg-yellow-200', size: 'text-lg' },
  { text: 'Endangered Species', color: 'bg-cyan-200', size: 'text-sm' },
  { text: 'Regenerative Agriculture', color: 'bg-orange-200', size: 'text-base' },
  { text: 'Integrating Nature into Cities', color: 'bg-purple-200', size: 'text-lg' },
  { text: 'Applying Pressure', color: 'bg-green-200', size: 'text-sm' },
  { text: 'Consumer Education', color: 'bg-lime-200', size: 'text-base' },
  { text: 'Community Energy', color: 'bg-yellow-200', size: 'text-sm' },
  { text: 'Plastic Reduction', color: 'bg-red-200', size: 'text-base' },
  { text: 'Cities', color: 'bg-blue-200', size: 'text-lg' },
  { text: 'Applying Pressure', color: 'bg-green-200', size: 'text-sm' },
  { text: 'Pollinators', color: 'bg-pink-200', size: 'text-base' },
  { text: 'Making Nature Accessible', color: 'bg-indigo-200', size: 'text-sm' },
  { text: 'Keystone Species', color: 'bg-teal-200', size: 'text-base' },
  { text: 'Economic Growth', color: 'bg-slate-200', size: 'text-sm' },
  { text: 'Sustainable Land Use', color: 'bg-orange-200', size: 'text-lg' },
  { text: 'Food Systems', color: 'bg-amber-200', size: 'text-base' },
  { text: 'Community-Supported Agriculture (CSA)', color: 'bg-lime-200', size: 'text-sm' },
  { text: 'Pollution Biology', color: 'bg-green-200', size: 'text-base' },
  { text: 'Improving Climate Policies', color: 'bg-lime-200', size: 'text-lg' },
  { text: 'Soil Health', color: 'bg-amber-200', size: 'text-sm' },
  { text: 'Gender Equity', color: 'bg-pink-200', size: 'text-base' },
  { text: 'Circular Economy', color: 'bg-cyan-200', size: 'text-lg' },
  { text: 'Local Food Systems', color: 'bg-green-200', size: 'text-sm' },
  { text: 'Climate Change Adaptation', color: 'bg-blue-200', size: 'text-base' },
  { text: 'Carbon Taxation', color: 'bg-gray-200', size: 'text-sm' },
  { text: 'Reducing Consumption', color: 'bg-blue-200', size: 'text-base' },
  { text: 'Wetlands', color: 'bg-teal-200', size: 'text-sm' },
  { text: 'Educating Girls', color: 'bg-pink-200', size: 'text-base' },
  { text: 'Native Foods', color: 'bg-yellow-200', size: 'text-sm' },
  { text: 'Forests', color: 'bg-green-200', size: 'text-lg' },
  { text: 'Tree Planting', color: 'bg-emerald-200', size: 'text-base' },
  { text: 'Zero Waste', color: 'bg-gray-200', size: 'text-sm' },
  { text: 'Regenerative Agriculture', color: 'bg-lime-200', size: 'text-lg' },
  { text: 'Rethinking Economic Growth', color: 'bg-purple-200', size: 'text-base' },
  { text: 'Workplace Sustainability', color: 'bg-blue-200', size: 'text-sm' },
  { text: 'Consumer Behaviors', color: 'bg-orange-200', size: 'text-base' },
  { text: 'Organic Farming', color: 'bg-green-200', size: 'text-lg' },
  { text: 'Microgrids', color: 'bg-yellow-200', size: 'text-sm' },
  { text: 'Insects', color: 'bg-amber-200', size: 'text-base' },
  { text: 'Regenerative Agriculture', color: 'bg-lime-200', size: 'text-sm' },
  { text: 'Clean Energy', color: 'bg-yellow-200', size: 'text-lg' }
]

export default function TagCloudSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

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

      // Animate title and subtitle
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1
        }
      })

      tl.fromTo(titleRef.current, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
      )
      .fromTo(subtitleRef.current, 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 }, 
        "-=0.5"
      )

      // Animate tags with stagger
      climateTags.forEach((_, index) => {
        tl.fromTo(`.tag-${index}`, 
          { opacity: 0, scale: 0.8, y: 20 },
          { 
            opacity: 1, 
            scale: 1, 
            y: 0, 
            duration: 0.3,
            ease: 'power2.out'
          }, 
          `-=${0.9 - index * 0.02}`
        )
      })
    }, sectionRef.current)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-white overflow-hidden flex items-center"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            ref={titleRef}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            What makes Planet unique?
          </motion.h2>
          <motion.p
            ref={subtitleRef}
            className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Like nature, Planet&apos;s network intelligence expands to make meaningful connections,
            <br />
            spark new conversations, and forge new collaborations.
          </motion.p>
        </div>

        {/* Tag Cloud */}
        <div className="relative max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
            {climateTags.map((tag, index) => (
              <motion.div
                key={index}
                className={`tag-${index} inline-block px-4 py-2 rounded-full ${tag.color} ${tag.size} font-medium text-gray-800 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer hover:scale-105`}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tag.text}
                {/* User avatars for some tags */}
                {index % 7 === 0 && (
                  <div className="inline-flex -space-x-1 ml-2">
                    <div className="w-5 h-5 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border border-white"></div>
                    <div className="w-5 h-5 bg-gradient-to-br from-green-400 to-green-600 rounded-full border border-white"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Bottom text */}
          <motion.p
            className="text-center text-xl font-semibold text-gray-900 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Operate your projects in an emergent ecosystem that evolves as you engage with it.
          </motion.p>
        </div>
      </div>

      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-green-100 rounded-full opacity-30"
          animate={{ 
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        
        <motion.div
          className="absolute top-1/3 right-20 w-24 h-24 bg-blue-100 rounded-full opacity-40"
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
          className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-yellow-100 rounded-full opacity-35"
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
      </div>
    </section>
  )
} 