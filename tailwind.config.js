/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        // Planet-specific colors
        planet: {
          blue: {
            50: '#f0f9ff',
            100: '#e0f2fe',
            200: '#bae6fd',
            300: '#7dd3fc',
            400: '#38bdf8',
            500: '#0ea5e9',
            600: '#0284c7',
            700: '#0369a1',
            800: '#075985',
            900: '#0c4a6e',
          },
          teal: {
            50: '#f0fdfa',
            100: '#ccfbf1',
            200: '#99f6e4',
            300: '#5eead4',
            400: '#2dd4bf',
            500: '#14b8a6',
            600: '#0d9488',
            700: '#0f766e',
            800: '#115e59',
            900: '#134e4a',
          },
          purple: {
            50: '#faf5ff',
            100: '#f3e8ff',
            200: '#e9d5ff',
            300: '#d8b4fe',
            400: '#c084fc',
            500: '#a855f7',
            600: '#9333ea',
            700: '#7c3aed',
            800: '#6b21a8',
            900: '#581c87',
          },
          dark: {
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a',
            950: '#020617',
          }
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'float-slow': 'float 8s ease-in-out infinite 4s',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'particle-float': 'particleFloat 15s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'text-reveal': 'textReveal 1s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'rotate-slow': 'rotateSlow 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(30px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        },
        slideInLeft: {
          '0%': { 
            opacity: '0', 
            transform: 'translateX(-100px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateX(0)' 
          },
        },
        slideInRight: {
          '0%': { 
            opacity: '0', 
            transform: 'translateX(100px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateX(0)' 
          },
        },
        float: {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg)' 
          },
          '33%': { 
            transform: 'translateY(-10px) rotate(1deg)' 
          },
          '66%': { 
            transform: 'translateY(5px) rotate(-1deg)' 
          },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        particleFloat: {
          '0%': { 
            transform: 'translateY(100vh) translateX(0px) rotate(0deg)', 
            opacity: '0' 
          },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { 
            transform: 'translateY(-100px) translateX(100px) rotate(360deg)', 
            opacity: '0' 
          },
        },
        glow: {
          '0%': { 
            boxShadow: '0 0 20px rgba(0, 212, 170, 0.3)' 
          },
          '100%': { 
            boxShadow: '0 0 40px rgba(0, 212, 170, 0.6)' 
          },
        },
        textReveal: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(100%) rotateX(-90deg)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0) rotateX(0deg)' 
          },
        },
        scaleIn: {
          '0%': { 
            opacity: '0', 
            transform: 'scale(0.5)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'scale(1)' 
          },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'planet-mesh': `
          radial-gradient(circle at 25% 25%, rgba(120, 119, 198, 0.3) 0%, transparent 25%), 
          radial-gradient(circle at 75% 75%, rgba(0, 212, 170, 0.2) 0%, transparent 25%),
          radial-gradient(circle at 75% 25%, rgba(79, 172, 254, 0.2) 0%, transparent 25%),
          radial-gradient(circle at 25% 75%, rgba(116, 75, 162, 0.3) 0%, transparent 25%),
          linear-gradient(135deg, #0f0f23 0%, #1a1b3a 25%, #2d1b4e 50%, #1a1b3a 75%, #0f0f23 100%)
        `,
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(0, 212, 170, 0.3)',
        'glow': '0 0 20px rgba(0, 212, 170, 0.3)',
        'glow-lg': '0 0 40px rgba(0, 212, 170, 0.4)',
        'glow-purple': '0 0 20px rgba(116, 75, 162, 0.3)',
        'glow-blue': '0 0 20px rgba(79, 172, 254, 0.3)',
        'planet': '0 20px 40px rgba(0, 0, 0, 0.3)',
      },
      backdropBlur: {
        xs: '2px',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      }
    },
  },
  plugins: [],
} 