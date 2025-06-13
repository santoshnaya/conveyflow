'use client'

import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { Lightbulb, Users, MessageSquare, BarChart3, Megaphone, ClipboardList, Plus } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const collaborationItems = [
  { icon: Lightbulb, label: 'Suggest an initiative', color: 'bg-blue-500' },
  { icon: Users, label: 'Decide together', color: 'bg-green-500' },
  { icon: MessageSquare, label: 'Collect feedback', color: 'bg-purple-500' },
  { icon: Megaphone, label: 'Announcement', color: 'bg-orange-500' },
  { icon: ClipboardList, label: 'External Poll', color: 'bg-red-500' },
  { icon: BarChart3, label: 'External Survey', color: 'bg-teal-500' }
]

export default function CollaborationToolsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const phoneRef = useRef<HTMLDivElement>(null)
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

      tl.fromTo(phoneRef.current, 
        { opacity: 0, x: -100, rotationY: -15 },
        { opacity: 1, x: 0, rotationY: 0, duration: 1 }
      )
      .fromTo(textRef.current, 
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 1 }, 
        "-=0.7"
      )

      // Animate collaboration items
      collaborationItems.forEach((_, index) => {
        tl.fromTo(`.collab-item-${index}`, 
          { opacity: 0, y: 30, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5 }, 
          `-=${0.8 - index * 0.1}`
        )
      })
    }, sectionRef.current)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-teal-100 via-cyan-50 to-teal-200 overflow-hidden"
    >
      <div className="container mx-auto px-6 h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          {/* Mobile Interface Mockup */}
          <motion.div
            ref={phoneRef}
            className="relative"
            initial={{ opacity: 0, x: -100, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative max-w-sm mx-auto">
              {/* Phone frame */}
              <div className="bg-gradient-to-br from-purple-500 to-blue-600 p-8 rounded-3xl shadow-2xl">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  {/* Collaboration items list */}
                  <div className="space-y-4">
                    {collaborationItems.map((item, index) => (
                      <motion.div
                        key={index}
                        className={`collab-item-${index} flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all cursor-pointer`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center shadow-sm`}>
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="font-medium text-gray-800 flex-1">
                          {item.label}
                        </span>
                        {index === collaborationItems.length - 1 && (
                          <Plus className="w-5 h-5 text-gray-400" />
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating elements around phone */}
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
                <Lightbulb className="w-8 h-8 text-blue-500" />
              </motion.div>

              <motion.div
                className="absolute top-1/2 -left-6 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center"
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
                <Users className="w-7 h-7 text-green-500" />
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

              {/* Dotted connecting lines */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full">
                  <motion.path
                    d="M 100 50 Q 200 100 300 150"
                    stroke="#10b981"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.4 }}
                    transition={{ duration: 3, delay: 1 }}
                  />
                  <motion.path
                    d="M 50 200 Q 150 250 250 300"
                    stroke="#8b5cf6"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.4 }}
                    transition={{ duration: 3, delay: 1.5 }}
                  />
                </svg>
              </div>
            </div>
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
              Advancing collaboration tools
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">
                for action
              </span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 max-w-lg">
              <p>
                Whether you&apos;re a small local group or a vast global network, Planet gives you the tools to vote, poll, and decide on what&apos;s next.
              </p>
              <p>
                Keep people feeling engaged as they see their project advancing with collective input and inspire others to act.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 