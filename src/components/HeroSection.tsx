'use client'

import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { TreePine, Leaf, Zap, Waves, Users, Building, Heart, Target } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const projectCards = [
  {
    id: 1,
    title: 'Conserving Kings Canyon Trees',
    author: 'Ines Chen',
    tag: 'Forest Protection',
    icon: TreePine,
    category: 'Defending Resources',
    members: 234,
    gradient: 'from-emerald-500 to-green-600',
    position: { top: '15%', left: '8%' },
    delay: 0.2
  },
  {
    id: 2,
    title: 'Ban Single-Use Plastics Initiative',
    author: 'Joshua Rivera',
    tag: 'Policy Change',
    icon: Leaf,
    category: 'Applying Pressure',
    members: 1256,
    gradient: 'from-teal-500 to-cyan-600',
    position: { top: '25%', right: '12%' },
    delay: 0.4
  },
  {
    id: 3,
    title: 'Houston Public Transport Revolution',
    author: 'Transportation Alliance',
    tag: 'Mobility',
    icon: Building,
    category: 'Urban Planning',
    members: 892,
    gradient: 'from-blue-500 to-indigo-600',
    position: { top: '55%', left: '15%' },
    delay: 0.6
  },
  {
    id: 4,
    title: 'Madrid Solar Energy Network',
    author: 'Felix Santos',
    tag: 'Renewable Energy',
    icon: Zap,
    category: 'Clean Energy',
    members: 567,
    gradient: 'from-yellow-500 to-orange-600',
    position: { top: '45%', right: '8%' },
    delay: 0.8
  },
  {
    id: 5,
    title: 'Ocean Conservation Project',
    author: 'Marine Alliance',
    tag: 'Ocean Protection',
    icon: Waves,
    category: 'Blue Economy',
    members: 445,
    gradient: 'from-cyan-500 to-blue-600',
    position: { top: '75%', right: '20%' },
    delay: 1.0
  },
  {
    id: 6,
    title: 'Community Garden Initiative',
    author: 'Local Heroes',
    tag: 'Community',
    icon: Heart,
    category: 'Local Action',
    members: 123,
    gradient: 'from-pink-500 to-rose-600',
    position: { top: '85%', left: '25%' },
    delay: 1.2
  }
]

const floatingElements = [
  { icon: TreePine, delay: 0, position: { top: '10%', left: '5%' } },
  { icon: Leaf, delay: 2, position: { top: '20%', right: '5%' } },
  { icon: Waves, delay: 4, position: { bottom: '10%', left: '10%' } },
  { icon: Zap, delay: 6, position: { bottom: '20%', right: '15%' } }
]

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current) return

    const ctx = gsap.context(() => {
      // Create timeline for hero entrance
      const tl = gsap.timeline()

      // Animate title with stagger effect
      tl.fromTo(titleRef.current, 
        { 
          opacity: 0, 
          y: 80,
          scale: 0.9
        },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 1.5,
          ease: 'power4.out'
        }
      )

      // Animate subtitle
      if (subtitleRef.current) {
        tl.fromTo(subtitleRef.current,
          {
            opacity: 0,
            y: 40
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out'
          },
          '-=0.8'
        )
      }

      // Animate floating cards with improved timing
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(card,
            {
              opacity: 0,
              scale: 0.6,
              y: 150,
              rotation: Math.random() * 30 - 15
            },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              rotation: 0,
              duration: 1.2,
              delay: 1 + projectCards[index]?.delay || 0,
              ease: 'back.out(1.7)'
            }
          )

          // Enhanced floating animation
          gsap.to(card, {
            y: '+=15',
            rotation: '+=2',
            duration: 4 + Math.random() * 2,
            yoyo: true,
            repeat: -1,
            ease: 'power2.inOut',
            delay: Math.random() * 2
          })
        }
      })

      // Parallax effect with smoother scroll
      gsap.set(sectionRef.current, { transformOrigin: 'center center' })
      gsap.to(sectionRef.current, {
        yPercent: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
          anticipatePin: 1
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
      className="relative min-h-screen mesh-gradient overflow-hidden flex items-center justify-center"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-96 h-96 planet-gradient rounded-full opacity-10 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-80 h-80 planet-gradient-2 rounded-full opacity-15 blur-2xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/3 w-72 h-72 planet-gradient-3 rounded-full opacity-10 blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      {/* Floating environmental icons */}
      {floatingElements.map((element, index) => {
        const Icon = element.icon
        return (
          <motion.div
            key={index}
            className="absolute w-16 h-16 flex items-center justify-center text-teal-400/30"
            style={element.position}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
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
            <Icon className="w-8 h-8" />
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
          backgroundSize: '100px 100px'
        }} />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 text-center relative z-20 max-w-6xl">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full glass text-sm font-medium text-teal-400 border border-teal-400/20">
            <Target className="w-4 h-4 mr-2" />
            Climate Action Network
          </span>
        </motion.div>

        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 font-space-grotesk"
        >
          <span className="block text-white">Finally, a global hub</span>
          <span className="block text-white">for changemakers</span>
          <span className="block gradient-text mt-2">
            advancing climate action
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
        >
          Connect with environmental leaders worldwide. Share resources, amplify impact, 
          and build the sustainable future our planet needs.
        </p>

        <motion.div
          className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.button
            className="btn-planet px-10 py-4 rounded-full font-semibold text-lg tracking-wide hover-lift group relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center">
              Start Your Climate Journey
              <motion.div
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </span>
          </motion.button>
          
          <motion.button
            className="glass px-8 py-4 rounded-full font-medium text-white border border-white/20 hover-lift group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Explore Community
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Floating project cards */}
      {projectCards.map((card) => {
        const Icon = card.icon
        return (
          <motion.div
            key={card.id}
            ref={addToRefs}
            className="absolute w-80 glass-dark rounded-3xl p-6 hover-lift cursor-pointer group border border-white/10"
            style={card.position}
            whileHover={{ scale: 1.02, rotateY: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="relative">
              <div className={`w-full h-44 bg-gradient-to-br ${card.gradient} rounded-2xl mb-4 flex items-center justify-center relative overflow-hidden`}>
                <Icon className="w-16 h-16 text-white/90 relative z-10" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.8 }}
                />
              </div>
              
              <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full">
                <span className="text-xs font-medium text-white">{card.tag}</span>
              </div>

              <div className="absolute top-4 right-4 glass rounded-full p-2">
                <Users className="w-4 h-4 text-white" />
              </div>
            </div>

            <h3 className="font-semibold text-white text-lg mb-3 line-clamp-2 group-hover:text-teal-400 transition-colors">
              {card.title}
            </h3>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-white">
                    {card.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{card.author}</p>
                  <p className="text-xs text-gray-400">{card.category}</p>
                </div>
              </div>
              
              <div className="text-right">
                <p className="text-lg font-bold text-teal-400">{card.members}</p>
                <p className="text-xs text-gray-400">members</p>
              </div>
            </div>
          </motion.div>
        )
      })}

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <p className="text-sm text-gray-400 mb-4">Scroll to explore</p>
        <motion.div
          className="w-6 h-10 border-2 border-teal-400/50 rounded-full flex justify-center"
          animate={{ 
            borderColor: ['rgba(45, 212, 191, 0.5)', 'rgba(45, 212, 191, 1)', 'rgba(45, 212, 191, 0.5)']
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-teal-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
} 