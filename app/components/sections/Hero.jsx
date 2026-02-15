

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

//   return (
//     <section className="relative w-full min-h-screen bg-[#E5E5E5] overflow-hidden">
//       {/* CLEAN BG */}
//       <div className="absolute inset-0 bg-[#E5E5E5]"></div>
      
//       {/* ANIMATED BACKGROUND ELEMENTS */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#FF8A5C]/5 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#FF8A5C]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
//       </div>
      
//       {/* CONTENT */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 w-full h-screen flex items-center justify-center">
//         <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-0 items-center w-full">
          
//           {/* LEFT SIDE - UROOJ TEXT */}
//           <div ref={textRef} className="relative w-full flex items-center justify-center lg:justify-start order-1">
//             <div className="relative flex flex-col items-center lg:items-start">
//               {/* MAIN TITLE - MOBILE PE BADA AUR CENTER */}
//               <h1 className="text-[140px] sm:text-[160px] md:text-[200px] lg:text-[280px] xl:text-[320px] 2xl:text-[360px] font-black leading-[0.7] text-[#FF8A5C]/90 tracking-[-0.05em] select-none text-center lg:text-left animate-fadeIn relative z-0 whitespace-nowrap">
//                 UROOJ
//               </h1>
              
//               {/* GLOW EFFECT */}
//               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] sm:w-[550px] md:w-[650px] lg:w-[700px] h-[160px] sm:h-[200px] md:h-[220px] lg:h-[250px] bg-[#FF8A5C]/20 blur-[100px] rounded-full -z-10"></div>
              
//               {/* SUBTITLE - CENTER AUR CLOSE */}
//               <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 lg:left-1 lg:-translate-x-0 animate-slideUp z-30 w-full">
//                 <span className="block text-[#333333] text-sm sm:text-base md:text-lg font-semibold tracking-[0.25em] uppercase text-center lg:text-left">
//                   FULL STACK DEVELOPER
//                 </span>
//                 <span className="block text-[#666666] text-xs sm:text-sm md:text-base font-medium tracking-[0.2em] uppercase mt-1 text-center lg:text-left">
//                   & WEB DESIGNER
//                 </span>
//               </div>
//             </div>
//           </div>
          
//           {/* RIGHT SIDE - IMAGE (UPAR KAR DIYA) */}
//           <div ref={imageRef} className="relative w-full flex items-center justify-center lg:justify-end z-20 order-2 -mt-10 lg:mt-0">
//             <div className="relative w-[240px] xs:w-[260px] sm:w-[300px] md:w-[350px] lg:w-[500px] xl:w-[550px] h-[300px] xs:h-[320px] sm:h-[360px] md:h-[400px] lg:h-[600px] xl:h-[650px] animate-float">
//               {/* IMAGE CONTAINER */}
//               <div className="absolute inset-0 flex items-center justify-center z-30">
//                 <Image 
//                   src="/freen2bg.png" 
//                   alt="Urooj Rasheed"
//                   width={600}
//                   height={700}
//                   className="object-contain object-center w-auto h-full drop-shadow-2xl"
//                   priority
//                 />
//               </div>
              
//               {/* DECORATIVE DOTS */}
//               <div className="absolute -top-3 -right-3 w-2 h-2 lg:w-3 lg:h-3 bg-[#FF8A5C] rounded-full animate-ping z-40"></div>
//               <div className="absolute -bottom-3 -left-3 w-1.5 h-1.5 lg:w-2.5 lg:h-2.5 bg-[#A0A0A0] rounded-full animate-pulse z-40"></div>
//               <div className="absolute top-1/3 -right-4 w-2 h-2 lg:w-3 lg:h-3 border-2 border-[#FF8A5C]/50 rounded-full animate-spin-slow z-40"></div>
//               <div className="absolute bottom-1/3 -left-4 w-1.5 h-1.5 lg:w-2 lg:h-2 bg-[#FF8A5C]/40 rounded-full animate-bounce z-40"></div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* BOTTOM NAVIGATION */}
//       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full max-w-6xl px-4 z-50">
//         <div className="flex flex-wrap justify-center items-center gap-4 text-[10px] sm:text-xs font-medium tracking-[0.25em] text-[#666666] border-t border-[#CCCCCC]/50 pt-4 uppercase">
//           {['HOME', 'SERVICES', 'PROJECTS', 'EXPERIENCES', 'CASE STUDY', 'CONTACT'].map((item) => (
//             <span key={item} className="relative hover:text-[#FF8A5C] transition-colors cursor-pointer whitespace-nowrap group">
//               {item}
//               <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#FF8A5C] group-hover:w-4 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all"></span>
//             </span>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes slideUp {
//           from { opacity: 0; transform: translateY(50px) translateX(-50%); }
//           to { opacity: 1; transform: translateY(0) translateX(-50%); }
//         }
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-8px); }
//         }
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         .animate-fadeIn { animation: fadeIn 1.2s ease-out; }
//         .animate-slideUp { animation: slideUp 0.9s ease-out forwards; opacity: 0; }
//         .animate-float { animation: float 5s ease-in-out infinite; }
//         .animate-spin-slow { animation: spin-slow 10s linear infinite; }
//         @media (min-width: 320px) {
//           .xs\\:w-[260px] { width: 260px; }
//           .xs\\:h-[320px] { height: 320px; }
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
        textRef.current.style.transform = `translateX(${scrolled * 0.08}px)`
      }
      if (imageRef.current) {
        imageRef.current.style.transform = `translateY(${scrolled * 0.04}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase().replace(' ', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative w-full min-h-screen bg-[#E5E5E5] overflow-hidden">
      {/* BACKGROUND - FIXED */}
      <div className="absolute inset-0 bg-[#E5E5E5]"></div>
      
      {/* ANIMATED BACKGROUND - PROPERLY SIZED */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] md:w-96 md:h-96 bg-[#FF8A5C]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] md:w-96 md:h-96 bg-[#FF8A5C]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* MAIN CONTENT - PERFECTLY CENTERED */}
      <div className="relative z-10 w-full h-screen flex flex-col items-center justify-center px-4">
        {/* TEXT & IMAGE CONTAINER */}
        <div className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto">
          
          {/* TEXT SECTION - BADA AUR BOLD */}
          <div ref={textRef} className="w-full text-center mb-4 md:mb-0 md:text-left md:w-1/2 md:absolute md:left-8 lg:left-16 xl:left-24">
            <h1 className="text-[120px] sm:text-[160px] md:text-[200px] lg:text-[280px] xl:text-[320px] font-black leading-[0.7] text-[#FF8A5C]/90 tracking-[-0.05em] select-none animate-fadeIn">
              UROOJ
            </h1>
            
            {/* GLOW EFFECT - BEHIND TEXT */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[500px] md:w-[600px] lg:w-[700px] h-[150px] sm:h-[180px] md:h-[200px] lg:h-[220px] bg-[#FF8A5C]/20 blur-[100px] rounded-full -z-10 md:hidden"></div>
            
            {/* SUBTITLE - CENTERED ON MOBILE, LEFT ON DESKTOP */}
            <div className="mt-4 md:absolute md:-bottom-14 md:left-1 animate-slideUp">
              <span className="block text-[#333333] text-sm sm:text-base md:text-lg font-semibold tracking-[0.25em] uppercase">
                FULL STACK DEVELOPER
              </span>
              <span className="block text-[#666666] text-xs sm:text-sm md:text-base font-medium tracking-[0.2em] uppercase mt-1">
                & WEB DESIGNER
              </span>
            </div>
          </div>
          
          {/* IMAGE SECTION - BADI AUR PROPER */}
          <div ref={imageRef} className="w-full flex justify-center mt-8 md:absolute md:right-8 lg:right-16 xl:right-24 md:top-1/2 md:-translate-y-1/2">
            <div className="relative w-[300px] sm:w-[350px] md:w-[400px] lg:w-[500px] xl:w-[600px] h-[350px] sm:h-[400px] md:h-[450px] lg:h-[550px] xl:h-[650px] animate-float">
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
              
              {/* DECORATIVE DOTS */}
              <div className="absolute -top-3 -right-3 w-3 h-3 bg-[#FF8A5C] rounded-full animate-ping"></div>
              <div className="absolute -bottom-3 -left-3 w-2.5 h-2.5 bg-[#A0A0A0] rounded-full animate-pulse"></div>
              <div className="absolute top-1/3 -right-4 w-3 h-3 border-2 border-[#FF8A5C]/50 rounded-full animate-spin-slow"></div>
              <div className="absolute bottom-1/3 -left-4 w-2 h-2 bg-[#FF8A5C]/40 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
        
        {/* BOTTOM NAVIGATION */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full max-w-6xl px-4">
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 text-[10px] sm:text-xs font-medium tracking-[0.25em] text-[#666666] border-t border-[#CCCCCC]/50 pt-4 uppercase">
            {['HOME', 'SERVICES', 'PROJECTS', 'EXPERIENCES', 'CASE STUDY', 'CONTACT'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="relative hover:text-[#FF8A5C] transition-colors duration-300 group px-1 py-2"
              >
                {item}
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#FF8A5C] group-hover:w-4 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300"></span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-fadeIn { animation: fadeIn 1.2s ease-out; }
        .animate-slideUp { animation: slideUp 0.9s ease-out forwards; opacity: 0; }
        .animate-float { animation: float 5s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 10s linear infinite; }
        
        /* Mobile specific adjustments */
        @media (max-width: 768px) {
          h1 {
            font-size: 120px;
            line-height: 0.7;
          }
          .relative.w-\\[300px\\] {
            width: 280px;
            height: 330px;
          }
        }
        @media (max-width: 640px) {
          h1 {
            font-size: 100px;
          }
          .relative.w-\\[300px\\] {
            width: 250px;
            height: 300px;
          }
        }
        @media (max-width: 480px) {
          h1 {
            font-size: 85px;
          }
          .relative.w-\\[300px\\] {
            width: 220px;
            height: 270px;
          }
          .text-sm {
            font-size: 12px;
          }
          .text-xs {
            font-size: 10px;
          }
        }
        @media (max-width: 360px) {
          h1 {
            font-size: 70px;
          }
          .relative.w-\\[300px\\] {
            width: 190px;
            height: 240px;
          }
        }
      `}</style>
    </section>
  )
}