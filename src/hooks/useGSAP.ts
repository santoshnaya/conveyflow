import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export const useGSAP = () => {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const ctx = gsap.context(() => {
      // Animation context will be set up by individual components
    }, element)

    return () => ctx.revert()
  }, [])

  return ref
}

export const useScrollTrigger = (
  animation: () => void,
  dependencies: React.DependencyList = []
) => {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const ctx = gsap.context(() => {
      animation()
    }, ref.current)

    return () => ctx.revert()
  }, [animation, ...dependencies])

  return ref
} 