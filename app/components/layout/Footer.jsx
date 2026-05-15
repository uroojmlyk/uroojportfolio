// "use client";

// import { Heart, Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react'
// import Link from 'next/link'

// export default function Footer() {
//   const currentYear = new Date().getFullYear()

//   return (
//     <footer className="relative w-full bg-[#E5E5E5] border-t border-[#CCCCCC]/30 py-16 overflow-hidden">
//       {/* MINIMAL BACKGROUND */}
//       <div className="absolute inset-0 bg-[#E5E5E5]"></div>
//       <div className="absolute inset-0" style={{
//         backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.02) 1px, transparent 0)`,
//         backgroundSize: '40px 40px'
//       }}></div>
      
//       <div className="relative z-20 max-w-7xl mx-auto px-6">
        
//         {/* ---------- MAIN FOOTER CONTENT ---------- */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          
//           {/* BRAND - lg:col-span-4 */}
//           <div className="lg:col-span-4 space-y-4">
//             <Link href="/" className="group inline-block">
//               <span className="text-3xl font-black text-[#333333] tracking-tight">
//                 UROOJ<span className="text-[#FF8A5C]">.</span>
//               </span>
//               <span className="block text-sm text-[#666666] mt-2 group-hover:text-[#FF8A5C] transition-colors">
//                 Full Stack Developer & Web Designer
//               </span>
//             </Link>
//             <p className="text-sm text-[#666666] leading-relaxed max-w-md pt-2">
//               Creating modern, responsive web experiences with clean code and thoughtful design.
//             </p>
            
//             {/* AVAILABLE BADGE - MINI */}
//             <div className="flex items-center gap-2 pt-2">
//               <span className="relative flex h-2 w-2">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
//               </span>
//               <span className="text-xs text-[#666666]">Available for freelance</span>
//             </div>
//           </div>
          
//           {/* QUICK LINKS - lg:col-span-2 */}
//           <div className="lg:col-span-2">
//             <h4 className="text-xs font-semibold tracking-[0.2em] text-[#999999] uppercase mb-5">
//               Navigate
//             </h4>
//             <ul className="space-y-3">
//               {['HOME', 'SERVICES', 'PROJECTS', 'EXPERIENCES', 'CASE STUDY', 'CONTACT'].map((item) => (
//                 <li key={item}>
//                   <Link 
//                     href={item === 'HOME' ? '/' : `#${item.toLowerCase().replace(' ', '')}`}
//                     className="text-sm text-[#666666] hover:text-[#FF8A5C] transition-colors duration-300"
//                   >
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
          
//           {/* CONTACT - lg:col-span-3 */}
//           <div className="lg:col-span-3">
//             <h4 className="text-xs font-semibold tracking-[0.2em] text-[#999999] uppercase mb-5">
//               Connect
//             </h4>
//             <ul className="space-y-4">
//               <li>
//                 <a 
//                   href="mailto:urooj.rasheed@email.com"
//                   className="flex items-center gap-3 text-sm text-[#666666] hover:text-[#FF8A5C] transition-colors group"
//                 >
//                   <span className="w-8 h-8 rounded-full bg-white/60 border border-[#CCCCCC]/30 flex items-center justify-center group-hover:bg-[#FF8A5C] group-hover:border-[#FF8A5C] transition-all duration-300">
//                     <Mail size={14} className="text-[#666666] group-hover:text-white" />
//                   </span>
//                   urooj.rasheed@email.com
//                 </a>
//               </li>
//               <li>
//                 <span className="flex items-center gap-3 text-sm text-[#666666]">
//                   <span className="w-8 h-8 rounded-full bg-white/60 border border-[#CCCCCC]/30 flex items-center justify-center">
//                     <span className="w-1.5 h-1.5 bg-[#FF8A5C] rounded-full"></span>
//                   </span>
//                   Okara, Pakistan
//                 </span>
//               </li>
//             </ul>
            
//             {/* SOCIAL LINKS */}
//             <div className="flex items-center gap-3 mt-6">
//               <a 
//                 href="#" 
//                 target="_blank"
//                 className="w-9 h-9 rounded-full bg-white/60 border border-[#CCCCCC]/30 flex items-center justify-center text-[#666666] hover:bg-[#FF8A5C] hover:text-white hover:border-[#FF8A5C] transition-all duration-300"
//               >
//                 <Github size={16} />
//               </a>
//               <a 
//                 href="#" 
//                 target="_blank"
//                 className="w-9 h-9 rounded-full bg-white/60 border border-[#CCCCCC]/30 flex items-center justify-center text-[#666666] hover:bg-[#FF8A5C] hover:text-white hover:border-[#FF8A5C] transition-all duration-300"
//               >
//                 <Linkedin size={16} />
//               </a>
//               <a 
//                 href="#" 
//                 target="_blank"
//                 className="w-9 h-9 rounded-full bg-white/60 border border-[#CCCCCC]/30 flex items-center justify-center text-[#666666] hover:bg-[#FF8A5C] hover:text-white hover:border-[#FF8A5C] transition-all duration-300"
//               >
//                 <Twitter size={16} />
//               </a>
//             </div>
//           </div>
          
//           {/* QUOTE - lg:col-span-3 */}
//           <div className="lg:col-span-3 bg-white/40 backdrop-blur-sm border border-[#CCCCCC]/30 rounded-2xl p-6">
//             <h4 className="text-xs font-semibold tracking-[0.2em] text-[#999999] uppercase mb-3">
//               Dev Quote
//             </h4>
//             <p className="text-sm text-[#666666] italic leading-relaxed">
//               "First, solve the problem. Then, write the code."
//             </p>
//             <p className="text-xs text-[#999999] mt-3 flex items-center gap-1">
//               <Heart size={12} className="text-[#FF8A5C]" />
//               Urooj Rasheed
//             </p>
//           </div>
//         </div>
        
//         {/* ---------- BOTTOM BAR ---------- */}
//         <div className="pt-8 mt-8 border-t border-[#CCCCCC]/30 flex flex-col md:flex-row justify-between items-center gap-4">
//           <p className="text-xs text-[#999999]">
//             © {currentYear} Urooj Rasheed. All rights reserved.
//           </p>
          
//           <p className="text-xs text-[#999999] flex items-center gap-2">
//             <span>Designed & built with</span>
//             <Heart size={12} className="text-[#FF8A5C] fill-[#FF8A5C] animate-pulse" />
//             <span>using Next.js</span>
//           </p>
          
//           {/* BACK TO TOP */}
//           <button 
//             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//             className="flex items-center gap-2 text-xs text-[#666666] hover:text-[#FF8A5C] transition-colors group"
//           >
//             <span>Back to top</span>
//             <span className="w-7 h-7 rounded-full bg-white/60 border border-[#CCCCCC]/30 flex items-center justify-center group-hover:bg-[#FF8A5C] group-hover:border-[#FF8A5C] group-hover:text-white transition-all duration-300">
//               <ArrowUp size={14} />
//             </span>
//           </button>
//         </div>
//       </div>
//     </footer>
//   )
// }









"use client";

import { Heart, Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'SERVICES', href: '#services' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'EXPERIENCES', href: '#experiences' },
    { name: 'CASE STUDY', href: '#casestudy' },
    { name: 'CONTACT', href: '#contact' }
  ]

  return (
    <footer className="relative w-full bg-[#E5E5E5] border-t border-[#CCCCCC]/30 py-12 sm:py-16 overflow-x-hidden">
      {/* MINIMAL BACKGROUND */}
      <div className="absolute inset-0 bg-[#E5E5E5]"></div>
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.02) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* MAIN FOOTER CONTENT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-10 lg:mb-12">
          
          {/* BRAND */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-3 sm:space-y-4">
            <Link href="/" className="group inline-block">
              <span className="text-2xl sm:text-3xl font-black text-[#333333] tracking-tight">
                UROOJ<span className="text-[#FF8A5C]">.</span>
              </span>
              <span className="block text-xs sm:text-sm text-[#666666] mt-1 sm:mt-2 group-hover:text-[#FF8A5C] transition-colors">
                Full Stack Developer
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-[#666666] leading-relaxed max-w-md">
              Creating modern, responsive web experiences with clean code and thoughtful design.
            </p>
            
            <div className="flex items-center gap-2 pt-1 sm:pt-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs text-[#666666]">Available for freelance</span>
            </div>
          </div>
          
          {/* QUICK LINKS */}
          <div className="sm:col-span-1 lg:col-span-2">
            <h4 className="text-xs font-semibold tracking-[0.2em] text-[#999999] uppercase mb-4 sm:mb-5">
              Navigate
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-xs sm:text-sm text-[#666666] hover:text-[#FF8A5C] transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* CONTACT */}
          <div className="sm:col-span-2 lg:col-span-3">
            <h4 className="text-xs font-semibold tracking-[0.2em] text-[#999999] uppercase mb-4 sm:mb-5">
              Connect
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a 
                  href="mailto:uroojr335@gmail.com"
                  className="flex items-center gap-3 text-xs sm:text-sm text-[#666666] hover:text-[#FF8A5C] transition-colors group"
                  aria-label="Email me"
                >
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-[#CCCCCC]/30 flex items-center justify-center group-hover:bg-[#FF8A5C] group-hover:border-[#FF8A5C] transition-all duration-300">
                    <Mail size={14} className="text-[#666666] group-hover:text-white" />
                  </span>
                  uroojr335@gmail.com
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-xs sm:text-sm text-[#666666]">
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-[#CCCCCC]/30 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-[#FF8A5C] rounded-full"></span>
                  </span>
                  Okara, Pakistan
                </span>
              </li>
            </ul>
            
            {/* SOCIAL LINKS - REAL LINKS */}
            <div className="flex items-center gap-3 mt-5 sm:mt-6">
              <a 
                href="https://github.com/uroojmlyk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border border-[#CCCCCC]/30 flex items-center justify-center text-[#666666] hover:bg-[#FF8A5C] hover:text-white hover:border-[#FF8A5C] transition-all duration-300"
              >
                <Github size={15} />
              </a>
              <a 
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border border-[#CCCCCC]/30 flex items-center justify-center text-[#666666] hover:bg-[#FF8A5C] hover:text-white hover:border-[#FF8A5C] transition-all duration-300"
              >
                <Linkedin size={15} />
              </a>
              <a 
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter Profile"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border border-[#CCCCCC]/30 flex items-center justify-center text-[#666666] hover:bg-[#FF8A5C] hover:text-white hover:border-[#FF8A5C] transition-all duration-300"
              >
                <Twitter size={15} />
              </a>
            </div>
            <p className="text-xs text-[#999999] mt-2">GitHub: @uroojmlyk</p>
          </div>
          
          {/* QUOTE */}
          <div className="sm:col-span-2 lg:col-span-3 bg-white border border-[#CCCCCC]/30 rounded-xl sm:rounded-2xl p-4 sm:p-6">
            <h4 className="text-xs font-semibold tracking-[0.2em] text-[#999999] uppercase mb-2 sm:mb-3">
              Dev Quote
            </h4>
            <p className="text-xs sm:text-sm text-[#666666] italic leading-relaxed">
              "First, solve the problem. Then, write the code."
            </p>
            <p className="text-xs text-[#999999] mt-2 sm:mt-3 flex items-center gap-1">
              <Heart size={10} className="text-[#FF8A5C]" />
              John Johnson
            </p>
          </div>
        </div>
        
        {/* BOTTOM BAR */}
        <div className="pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-[#CCCCCC]/30 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-xs text-[#999999] order-2 sm:order-1">
            © {currentYear} Urooj Rasheed. All rights reserved.
          </p>
          
          <p className="text-xs text-[#999999] flex items-center gap-2 order-1 sm:order-2">
            <span>Built with</span>
            <Heart size={10} className="text-[#FF8A5C] fill-[#FF8A5C]" />
            <span>Next.js & Tailwind</span>
          </p>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-xs text-[#666666] hover:text-[#FF8A5C] transition-colors group order-3"
            aria-label="Back to top"
          >
            <span className="hidden sm:inline">Back to top</span>
            <span className="w-7 h-7 rounded-full bg-white border border-[#CCCCCC]/30 flex items-center justify-center group-hover:bg-[#FF8A5C] group-hover:border-[#FF8A5C] group-hover:text-white transition-all duration-300">
              <ArrowUp size={14} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}