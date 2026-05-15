


// "use client";

// import Image from 'next/image'
// import { useEffect, useRef } from 'react'

// export default function Hero() {
//   const textRef = useRef(null)
//   const imageRef = useRef(null)

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrolled = window.scrollY
//       if (textRef.current) {
//         textRef.current.style.transform = `translateX(${scrolled * 0.08}px)`
//       }
//       if (imageRef.current) {
//         imageRef.current.style.transform = `translateY(${scrolled * 0.04}px)`
//       }
//     }

//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId.toLowerCase().replace(' ', ''))
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' })
//     }
//   }

//   return (
//     <section className="relative w-full min-h-screen bg-[#E5E5E5] overflow-x-hidden">
//       {/* BACKGROUND - ORIGINAL */}
//       <div className="absolute inset-0 bg-[#E5E5E5]"></div>
      
//       {/* ANIMATED BACKGROUND */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-[500px] h-[500px] md:w-96 md:h-96 bg-[#FF8A5C]/5 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] md:w-96 md:h-96 bg-[#FF8A5C]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
//       </div>
      
//       {/* MAIN CONTENT - LEFT TEXT | RIGHT CIRCLE IMAGE */}
//       <div className="relative z-10 w-full min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-12">
//         <div className="w-full max-w-7xl mx-auto">
//           <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            
//             {/* LEFT SIDE - TEXT */}
//             <div ref={textRef} className="w-full lg:w-1/2 text-center lg:text-left">
//               <h1 className="text-[70px] sm:text-[90px] md:text-[120px] lg:text-[160px] xl:text-[180px] font-black leading-[0.8] text-[#FF8A5C]/90 tracking-[-0.03em] select-none">
//                 UROOJ
//               </h1>
              
//               <div className="mt-4">
//                 <span className="block text-[#333333] text-sm sm:text-base md:text-lg font-semibold tracking-[0.25em] uppercase">
//                   FULL STACK DEVELOPER
//                 </span>
//                 <div className="flex flex-wrap gap-2 justify-center lg:justify-start mt-3">
//                   {['React', 'Next.js', 'Node.js', 'TypeScript', 'JavaScript', 'MongoDB', 'PostgreSQL'].map((tech) => (
//                     <span key={tech} className="text-[#666666] text-xs font-mono border border-[#FF8A5C]/30 px-2 py-1 rounded">
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* STATS */}
//               <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 mt-8 pt-6 border-t border-[#CCCCCC]/50">
//                 <div>
//                   <div className="text-2xl sm:text-3xl font-bold text-[#FF8A5C]">2+</div>
//                   <div className="text-[#666666] text-xs">Years Experience</div>
//                 </div>
//                 <div>
//                   <div className="text-2xl sm:text-3xl font-bold text-[#FF8A5C]">5+</div>
//                   <div className="text-[#666666] text-xs">Projects Done</div>
//                 </div>
//                 <div>
//                   <div className="text-2xl sm:text-3xl font-bold text-[#FF8A5C]">100%</div>
//                   <div className="text-[#666666] text-xs">Satisfaction</div>
//                 </div>
//               </div>

//               {/* BUTTONS */}
//               <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
//                 <button 
//                   onClick={() => scrollToSection('projects')}
//                   className="px-6 py-2.5 bg-[#FF8A5C] text-white font-semibold rounded-lg hover:bg-[#FF6B3A] transition-all duration-300 text-sm"
//                 >
//                   View Projects →
//                 </button>
//                 <button 
//                   onClick={() => scrollToSection('contact')}
//                   className="px-6 py-2.5 border-2 border-[#FF8A5C] text-[#FF8A5C] font-semibold rounded-lg hover:bg-[#FF8A5C] hover:text-white transition-all duration-300 text-sm"
//                 >
//                   Contact Me
//                 </button>
//               </div>
//             </div>
            
//             {/* RIGHT SIDE - CIRCLE IMAGE WITH ORANGE SHADOW & TECH ICONS */}
//             <div ref={imageRef} className="w-full lg:w-1/2 flex justify-center lg:justify-end">
//               <div className="relative">
//                 {/* Circle Glow */}
//                 <div className="absolute inset-0 bg-[#FF8A5C]/20 rounded-full blur-3xl animate-pulse"></div>
                
//                 {/* Main Circle Container - BLACK BACKGROUND WITH ORANGE SHADOW */}
//                 <div className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 border-[#FF8A5C]/60 shadow-[0_0_50px_rgba(255,138,92,0.5)] bg-black">
//                   <Image 
//                     src="/uroojrasheed.png" 
//                     alt="Urooj Rasheed"
//                     fill
//                     className="object-cover object-center"
//                     priority
//                     sizes="(max-width: 640px) 260px, (max-width: 768px) 300px, (max-width: 1024px) 350px, 400px"
//                   />
//                 </div>
                
//                 {/* FLOATING TECH ICONS - LIKE BEFORE */}
//                 {/* React Icon */}
//                 <div className="absolute -top-6 -right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-[#FF8A5C] animate-bounce-slow">
//                   <span className="text-2xl">⚛️</span>
//                 </div>
                
//                 {/* JavaScript Icon */}
//                 <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-[#FF8A5C] animate-bounce-slow delay-150">
//                   <span className="text-2xl">JS</span>
//                 </div>
                
//                 {/* Node.js Icon */}
//                 <div className="absolute top-1/2 -right-8 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-[#FF8A5C] animate-pulse-slow">
//                   <span className="text-xl">💚</span>
//                 </div>
                
//                 {/* Next.js Icon */}
//                 <div className="absolute top-1/3 -left-8 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-[#FF8A5C] animate-float-slow">
//                   <span className="text-xl">▲</span>
//                 </div>
                
//                 {/* MongoDB Icon */}
//                 <div className="absolute bottom-1/3 -right-7 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-[#FF8A5C] animate-pulse-slow delay-300">
//                   <span className="text-lg">🍃</span>
//                 </div>
                
//                 {/* TypeScript Icon */}
//                 <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-[#FF8A5C] animate-bounce-slow delay-300">
//                   <span className="text-xl">TS</span>
//                 </div>
                
//                 {/* Original Decorative Dots - Kept */}
//                 <div className="absolute -top-3 -right-3 w-3 h-3 bg-[#FF8A5C] rounded-full animate-ping"></div>
//                 <div className="absolute -bottom-3 -left-3 w-2.5 h-2.5 bg-[#A0A0A0] rounded-full animate-pulse"></div>
//                 <div className="absolute top-1/3 -right-5 w-3 h-3 border-2 border-[#FF8A5C]/50 rounded-full animate-spin-slow"></div>
//                 <div className="absolute bottom-1/3 -left-5 w-2 h-2 bg-[#FF8A5C]/40 rounded-full animate-bounce"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         @keyframes bounce-slow {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-8px); }
//         }
//         @keyframes pulse-slow {
//           0%, 100% { opacity: 1; transform: scale(1); }
//           50% { opacity: 0.7; transform: scale(1.05); }
//         }
//         @keyframes float-slow {
//           0%, 100% { transform: translateY(0px) translateX(0px); }
//           50% { transform: translateY(-5px) translateX(5px); }
//         }
//         .animate-spin-slow {
//           animation: spin-slow 10s linear infinite;
//         }
//         .animate-bounce-slow {
//           animation: bounce-slow 3s ease-in-out infinite;
//         }
//         .animate-pulse-slow {
//           animation: pulse-slow 2s ease-in-out infinite;
//         }
//         .animate-float-slow {
//           animation: float-slow 4s ease-in-out infinite;
//         }
//         .delay-150 {
//           animation-delay: 0.5s;
//         }
//         .delay-300 {
//           animation-delay: 1s;
//         }
//       `}</style>
//     </section>
//   )
// }








"use client";

import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const textRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      if (textRef.current) {
        textRef.current.style.transform = `translateX(${scrolled * 0.05}px)`
      }
      if (imageRef.current) {
        imageRef.current.style.transform = `translateY(${scrolled * 0.03}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase().replace(/\s+/g, ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative w-full min-h-screen bg-[#E5E5E5] overflow-x-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#E5E5E5]"></div>
      
      {/* ANIMATED BACKGROUND - REDUCED FOR PERFORMANCE */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[400px] h-[400px] md:w-80 md:h-80 bg-[#FF8A5C]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] md:w-80 md:h-80 bg-[#FF8A5C]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* MAIN CONTENT */}
      <div className="relative z-10 w-full min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12">
            
            {/* LEFT SIDE - TEXT */}
            <div ref={textRef} className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-[55px] sm:text-[75px] md:text-[100px] lg:text-[130px] xl:text-[160px] font-black leading-[0.85] text-[#FF8A5C]/90 tracking-[-0.03em] select-none">
                UROOJ
              </h1>
              
              <div className="mt-3 sm:mt-4">
                <span className="block text-[#333333] text-xs sm:text-sm md:text-base font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase">
                  FULL STACK DEVELOPER
                </span>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center lg:justify-start mt-2 sm:mt-3">
                  {['React', 'Next.js', 'Node.js', 'TypeScript', 'JavaScript', 'MongoDB', 'PostgreSQL'].map((tech) => (
                    <span key={tech} className="text-[#666666] text-[10px] sm:text-xs font-mono border border-[#FF8A5C]/30 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* STATS */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#CCCCCC]/50">
                <div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FF8A5C]">2+</div>
                  <div className="text-[#666666] text-[10px] sm:text-xs">Years Experience</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FF8A5C]">5+</div>
                  <div className="text-[#666666] text-[10px] sm:text-xs">Projects Done</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FF8A5C]">100%</div>
                  <div className="text-[#666666] text-[10px] sm:text-xs">Satisfaction</div>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mt-6 sm:mt-8">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="px-5 sm:px-6 py-2 sm:py-2.5 bg-[#FF8A5C] text-white font-semibold rounded-lg hover:bg-[#FF6B3A] transition-all duration-300 text-xs sm:text-sm"
                >
                  View Projects →
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-5 sm:px-6 py-2 sm:py-2.5 border-2 border-[#FF8A5C] text-[#FF8A5C] font-semibold rounded-lg hover:bg-[#FF8A5C] hover:text-white transition-all duration-300 text-xs sm:text-sm"
                >
                  Contact Me
                </button>
              </div>
            </div>
            
            {/* RIGHT SIDE - CIRCLE IMAGE */}
            <div ref={imageRef} className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 sm:mt-8 lg:mt-0">
              <div className="relative">
                <div className="absolute inset-0 bg-[#FF8A5C]/20 rounded-full blur-3xl animate-pulse"></div>
                
                <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden border-4 border-[#FF8A5C]/60 shadow-[0_0_40px_rgba(255,138,92,0.4)] bg-black">
                  <Image 
                    src="/uroojrasheed.png" 
                    alt="Urooj Rasheed - Full Stack Developer"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 640px) 220px, (max-width: 768px) 260px, (max-width: 1024px) 300px, 350px"
                  />
                </div>
                
                {/* WEB DEVELOPMENT FLOATING ICONS - REPLACED */}
                {/* React - Frontend */}
                <div className="absolute -top-5 -right-5 sm:-top-6 sm:-right-6 w-9 h-9 sm:w-11 sm:h-11 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-[#FF8A5C] animate-bounce-slow">
                  <span className="text-lg sm:text-2xl">⚛️</span>
                </div>
                
                {/* JavaScript - Core Language */}
                <div className="absolute -bottom-5 -left-5 sm:-bottom-6 sm:-left-6 w-9 h-9 sm:w-11 sm:h-11 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-[#FF8A5C] animate-bounce-slow delay-150">
                  <span className="text-sm sm:text-xl font-bold text-[#F7DF1E]">JS</span>
                </div>
                
                {/* Node.js - Backend */}
                <div className="absolute top-1/2 -right-6 sm:-right-7 w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-[#FF8A5C] animate-pulse-slow">
                  <span className="text-sm sm:text-lg">💚</span>
                </div>
                
                {/* Git - Version Control */}
                <div className="absolute top-1/3 -left-6 sm:-left-7 w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-[#FF8A5C] animate-float-slow">
                  <span className="text-sm sm:text-lg">📦</span>
                </div>
                
                {/* Database - MongoDB */}
                <div className="absolute bottom-1/3 -right-5 sm:-right-6 w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-[#FF8A5C] animate-pulse-slow delay-300">
                  <span className="text-xs sm:text-base">🍃</span>
                </div>
                
                {/* TypeScript - Type Safety */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-[#FF8A5C] animate-bounce-slow delay-300">
                  <span className="text-xs sm:text-base font-bold text-[#3178C6]">TS</span>
                </div>

                {/* HTML/CSS Icons */}
                <div className="absolute top-0 -left-4 sm:-left-5 w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-[#FF8A5C] animate-float-slow delay-150">
                  <span className="text-xs sm:text-base">🌐</span>
                </div>
                
                {/* Decorative Dots - Minimal */}
                <div className="absolute -top-2 -right-2 w-2 h-2 bg-[#FF8A5C] rounded-full animate-ping"></div>
                <div className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-[#A0A0A0] rounded-full animate-pulse"></div>
                <div className="absolute top-1/3 -right-4 w-2 h-2 border border-[#FF8A5C]/50 rounded-full animate-spin-slow"></div>
                <div className="absolute bottom-1/3 -left-4 w-1.5 h-1.5 bg-[#FF8A5C]/40 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-4px) translateX(3px); }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }
        .delay-150 {
          animation-delay: 0.5s;
        }
        .delay-300 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  )
}