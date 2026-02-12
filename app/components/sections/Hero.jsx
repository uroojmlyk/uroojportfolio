"use client";

import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const textRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    // PARALLAX EFFECT ON SCROLL
    const handleScroll = () => {
      const scrolled = window.scrollY
      if (textRef.current) {
        textRef.current.style.transform = `translateX(${scrolled * 0.1}px)`
      }
      if (imageRef.current) {
        imageRef.current.style.transform = `translateY(${scrolled * 0.05}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative w-full min-h-screen bg-[#E5E5E5] overflow-hidden">
      {/* CLEAN BG - LIGHT GRAY */}
      <div className="absolute inset-0 bg-[#E5E5E5]"></div>
      
      {/* ANIMATED BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FF8A5C]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#FF8A5C]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full h-screen flex items-center">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-0 items-center w-full h-full">
          
          {/* ---------- LEFT SIDE - UROOJ TEXT (BIG & PROMINENT) ---------- */}
          <div ref={textRef} className="relative w-full h-full flex items-center justify-center lg:justify-start">
            <div className="relative w-full">
              {/* MAIN TITLE - DESKTOP PE BOHOT BADA, FULL UROOJ DIKHEGA */}
              <h1 className="text-[140px] sm:text-[180px] md:text-[220px] lg:text-[300px] xl:text-[350px] font-black leading-[0.75] text-[#FF8A5C] tracking-[-0.07em] select-none text-center lg:text-left animate-fadeIn">
                UROOJ
              </h1>
              
              {/* GLOW EFFECT BEHIND TEXT */}
              <div className="absolute top-1/2 left-1/2 lg:left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-[#FF8A5C]/10 blur-[100px] rounded-full -z-10"></div>
              
              {/* SUBTITLE - WITH FADE IN ANIMATION */}
              <div className="absolute -bottom-20 left-1/2 lg:left-1 -translate-x-1/2 lg:-translate-x-0 animate-slideUp">
                <span className="block text-[#333333] text-sm sm:text-base md:text-lg font-semibold tracking-[0.3em] uppercase">
                  FULL STACK DEVELOPER
                </span>
                <span className="block text-[#666666] text-xs sm:text-sm md:text-base font-medium tracking-[0.25em] uppercase mt-2 text-center lg:text-left">
                  & WEB DESIGNER
                </span>
              </div>
            </div>
          </div>
          
          {/* ---------- RIGHT SIDE - IMAGE WITH SMOOTH ANIMATIONS ---------- */}
          <div ref={imageRef} className="relative w-full h-full flex items-center justify-center lg:justify-end">
            <div className="relative w-[350px] sm:w-[400px] md:w-[450px] lg:w-[550px] xl:w-[600px] h-[450px] sm:h-[500px] md:h-[550px] lg:h-[650px] xl:h-[700px] animate-float">
              {/* IMAGE CONTAINER */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image 
                  src="/freen2bg.png" 
                  alt="Urooj Rasheed"
                  width={600}
                  height={700}
                  className="object-contain object-center w-auto h-full drop-shadow-2xl"
                  priority
                />
              </div>
              
              {/* DECORATIVE DOTS WITH ANIMATIONS */}
              <div className="absolute -top-4 -right-4 w-3 h-3 bg-[#FF8A5C] rounded-full animate-ping"></div>
              <div className="absolute -bottom-4 -left-4 w-2 h-2 bg-[#A0A0A0] rounded-full animate-pulse"></div>
              <div className="absolute top-1/3 -right-6 w-2.5 h-2.5 border border-[#FF8A5C] rounded-full animate-spin-slow"></div>
              <div className="absolute bottom-1/3 -left-5 w-1.5 h-1.5 bg-[#FF8A5C]/60 rounded-full animate-bounce"></div>
              
              {/* ADDITIONAL DECORATIVE ELEMENTS */}
              <div className="absolute top-1/2 -right-8 w-1 h-20 bg-gradient-to-b from-[#FF8A5C]/30 to-transparent rotate-45"></div>
              <div className="absolute bottom-10 -left-8 w-1 h-16 bg-gradient-to-t from-[#FF8A5C]/30 to-transparent -rotate-12"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* ---------- BOTTOM NAVIGATION WITH HOVER ANIMATIONS ---------- */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-5xl px-6 z-30 animate-fadeInUp">
        <div className="flex flex-wrap justify-between items-center text-[11px] sm:text-xs md:text-sm font-medium tracking-[0.35em] text-[#666666] border-t border-[#CCCCCC] pt-6 uppercase">
          {['HOME', 'DESIGNING', 'ABOUT', 'PROJECT', 'EXPERIENCES', 'CASE STUDY'].map((item, index) => (
            <span 
              key={item}
              className="relative hover:text-[#FF8A5C] transition-all duration-300 cursor-pointer group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF8A5C] group-hover:w-full transition-all duration-300"></span>
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px) translateX(-50%); }
          to { opacity: 1; transform: translateY(0) translateX(-50%); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        
        .animate-fadeInUp {
          animation: fadeIn 0.8s ease-out 0.5s both;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  )
}