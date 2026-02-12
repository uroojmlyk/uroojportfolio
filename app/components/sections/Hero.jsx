// "use client";

// import Image from 'next/image'
// import { useEffect, useRef } from 'react'

// export default function Hero() {
//   const textRef = useRef(null)
//   const imageRef = useRef(null)

//   useEffect(() => {
//     // SMOOTH PARALLAX
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
//       <div className="relative z-10 max-w-7xl mx-auto px-6 w-full h-screen flex items-center">
//         <div className="flex flex-col lg:grid lg:grid-cols-2 gap-0 items-center w-full h-full">
          
//           {/* LEFT SIDE - UROOJ TEXT (PIC K PEECHE) */}
//           <div ref={textRef} className="relative w-full h-full flex items-center justify-center lg:justify-start">
//             <div className="relative w-full">
//               {/* MAIN TITLE - Z-INDEX LOW TAKI PIC K PEECHE HO */}
//               <h1 className="text-[140px] sm:text-[180px] md:text-[220px] lg:text-[280px] xl:text-[320px] 2xl:text-[360px] font-black leading-[0.7] text-[#FF8A5C]/90 tracking-[-0.07em] select-none text-center lg:text-left animate-fadeIn relative z-0">
//                 UROOJ
//               </h1>
              
//               {/* GLOW EFFECT - PEECHE */}
//               <div className="absolute top-1/2 left-1/2 lg:left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] lg:w-[700px] h-[200px] lg:h-[250px] bg-[#FF8A5C]/20 blur-[100px] rounded-full -z-10 animate-pulse-slow"></div>
              
//               {/* SUBTITLE - PIC K AGE */}
//               <div className="absolute -bottom-20 left-1/2 lg:left-1 -translate-x-1/2 lg:-translate-x-0 animate-slideUp z-30">
//                 <span className="block text-[#333333] text-sm sm:text-base md:text-lg font-semibold tracking-[0.3em] uppercase">
//                   FULL STACK DEVELOPER
//                 </span>
//                 <span className="block text-[#666666] text-xs sm:text-sm md:text-base font-medium tracking-[0.25em] uppercase mt-2 text-center lg:text-left">
//                   & WEB DESIGNER
//                 </span>
//               </div>
//             </div>
//           </div>
          
//           {/* RIGHT SIDE - IMAGE (PIC K AGE) */}
//           <div ref={imageRef} className="relative w-full h-full flex items-center justify-center lg:justify-end z-20">
//             <div className="relative w-[320px] sm:w-[380px] md:w-[450px] lg:w-[500px] xl:w-[550px] 2xl:w-[600px] h-[420px] sm:h-[480px] md:h-[550px] lg:h-[600px] xl:h-[650px] 2xl:h-[700px] animate-float">
//               {/* IMAGE CONTAINER - Z-INDEX HIGH, PIC K AGE */}
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
              
//               {/* DECORATIVE DOTS - PIC K AGE */}
//               <div className="absolute -top-5 -right-5 w-3 h-3 bg-[#FF8A5C] rounded-full animate-ping z-40"></div>
//               <div className="absolute -bottom-5 -left-5 w-2.5 h-2.5 bg-[#A0A0A0] rounded-full animate-pulse z-40"></div>
//               <div className="absolute top-1/3 -right-7 w-3 h-3 border-2 border-[#FF8A5C]/50 rounded-full animate-spin-slow z-40"></div>
//               <div className="absolute bottom-1/3 -left-6 w-2 h-2 bg-[#FF8A5C]/40 rounded-full animate-bounce z-40"></div>
              
//               {/* DECORATIVE LINES */}
//               <div className="absolute top-1/2 -right-10 w-1 h-24 bg-gradient-to-b from-[#FF8A5C]/30 to-transparent rotate-45 animate-pulse-slow"></div>
//               <div className="absolute bottom-10 -left-10 w-1 h-20 bg-gradient-to-t from-[#FF8A5C]/30 to-transparent -rotate-12 animate-pulse-slow"></div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* BOTTOM NAVIGATION */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-6xl px-6 z-50 animate-fadeInUp">
//         <div className="flex flex-wrap justify-center lg:justify-between items-center gap-6 lg:gap-0 text-[10px] sm:text-xs font-medium tracking-[0.3em] text-[#666666] border-t border-[#CCCCCC]/50 pt-6 uppercase">
//           {['HOME', 'SERVICES', 'PROJECTS', 'EXPERIENCES', 'CASE STUDY', 'CONTACT'].map((item) => (
//             <span 
//               key={item}
//               className="relative hover:text-[#FF8A5C] transition-colors duration-300 cursor-pointer whitespace-nowrap group"
//             >
//               {item}
//               <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#FF8A5C] group-hover:w-4 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300"></span>
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
//           50% { transform: translateY(-12px); }
//         }
        
//         @keyframes pulse-slow {
//           0%, 100% { opacity: 0.4; }
//           50% { opacity: 0.7; }
//         }
        
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
        
//         .animate-fadeIn {
//           animation: fadeIn 1.2s ease-out;
//         }
        
//         .animate-slideUp {
//           animation: slideUp 0.9s ease-out forwards;
//           opacity: 0;
//         }
        
//         .animate-float {
//           animation: float 5s ease-in-out infinite;
//         }
        
//         .animate-pulse-slow {
//           animation: pulse-slow 3s ease-in-out infinite;
//         }
        
//         .animate-spin-slow {
//           animation: spin-slow 10s linear infinite;
//         }
        
//         .animate-fadeInUp {
//           animation: fadeIn 0.8s ease-out 0.4s both;
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

  return (
    <section className="relative w-full min-h-screen bg-[#E5E5E5] overflow-hidden">
      {/* CLEAN BG */}
      <div className="absolute inset-0 bg-[#E5E5E5]"></div>
      
      {/* ANIMATED BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#FF8A5C]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#FF8A5C]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full h-screen flex items-center justify-center">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-0 items-center w-full">
          
          {/* LEFT SIDE - UROOJ TEXT */}
          <div ref={textRef} className="relative w-full flex items-center justify-center lg:justify-start order-1">
            <div className="relative flex flex-col items-center lg:items-start">
              {/* MAIN TITLE - MOBILE PE BADA AUR CENTER */}
              <h1 className="text-[140px] sm:text-[160px] md:text-[200px] lg:text-[280px] xl:text-[320px] 2xl:text-[360px] font-black leading-[0.7] text-[#FF8A5C]/90 tracking-[-0.05em] select-none text-center lg:text-left animate-fadeIn relative z-0 whitespace-nowrap">
                UROOJ
              </h1>
              
              {/* GLOW EFFECT */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] sm:w-[550px] md:w-[650px] lg:w-[700px] h-[160px] sm:h-[200px] md:h-[220px] lg:h-[250px] bg-[#FF8A5C]/20 blur-[100px] rounded-full -z-10"></div>
              
              {/* SUBTITLE - CENTER AUR CLOSE */}
              <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 lg:left-1 lg:-translate-x-0 animate-slideUp z-30 w-full">
                <span className="block text-[#333333] text-sm sm:text-base md:text-lg font-semibold tracking-[0.25em] uppercase text-center lg:text-left">
                  FULL STACK DEVELOPER
                </span>
                <span className="block text-[#666666] text-xs sm:text-sm md:text-base font-medium tracking-[0.2em] uppercase mt-1 text-center lg:text-left">
                  & WEB DESIGNER
                </span>
              </div>
            </div>
          </div>
          
          {/* RIGHT SIDE - IMAGE (UPAR KAR DIYA) */}
          <div ref={imageRef} className="relative w-full flex items-center justify-center lg:justify-end z-20 order-2 -mt-10 lg:mt-0">
            <div className="relative w-[240px] xs:w-[260px] sm:w-[300px] md:w-[350px] lg:w-[500px] xl:w-[550px] h-[300px] xs:h-[320px] sm:h-[360px] md:h-[400px] lg:h-[600px] xl:h-[650px] animate-float">
              {/* IMAGE CONTAINER */}
              <div className="absolute inset-0 flex items-center justify-center z-30">
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
              <div className="absolute -top-3 -right-3 w-2 h-2 lg:w-3 lg:h-3 bg-[#FF8A5C] rounded-full animate-ping z-40"></div>
              <div className="absolute -bottom-3 -left-3 w-1.5 h-1.5 lg:w-2.5 lg:h-2.5 bg-[#A0A0A0] rounded-full animate-pulse z-40"></div>
              <div className="absolute top-1/3 -right-4 w-2 h-2 lg:w-3 lg:h-3 border-2 border-[#FF8A5C]/50 rounded-full animate-spin-slow z-40"></div>
              <div className="absolute bottom-1/3 -left-4 w-1.5 h-1.5 lg:w-2 lg:h-2 bg-[#FF8A5C]/40 rounded-full animate-bounce z-40"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* BOTTOM NAVIGATION */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full max-w-6xl px-4 z-50">
        <div className="flex flex-wrap justify-center items-center gap-4 text-[10px] sm:text-xs font-medium tracking-[0.25em] text-[#666666] border-t border-[#CCCCCC]/50 pt-4 uppercase">
          {['HOME', 'SERVICES', 'PROJECTS', 'EXPERIENCES', 'CASE STUDY', 'CONTACT'].map((item) => (
            <span key={item} className="relative hover:text-[#FF8A5C] transition-colors cursor-pointer whitespace-nowrap group">
              {item}
              <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#FF8A5C] group-hover:w-4 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all"></span>
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(50px) translateX(-50%); }
          to { opacity: 1; transform: translateY(0) translateX(-50%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-fadeIn { animation: fadeIn 1.2s ease-out; }
        .animate-slideUp { animation: slideUp 0.9s ease-out forwards; opacity: 0; }
        .animate-float { animation: float 5s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 10s linear infinite; }
        @media (min-width: 320px) {
          .xs\\:w-[260px] { width: 260px; }
          .xs\\:h-[320px] { height: 320px; }
        }
      `}</style>
    </section>
  )
}