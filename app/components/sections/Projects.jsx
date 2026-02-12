// "use client";

// import { ExternalLink, Github } from 'lucide-react'
// import Image from 'next/image'
// import Link from 'next/link'

// export default function Projects() {
//   const projects = [
//     {
//       id: 1,
//       title: "Cafe Janoshi",
//       role: "Full Stack Development - Next.js",
//       description: "A complete ecommerce website for Cafe Janoshi, Okara. Features dynamic cart, real-time price updates, product cards with HD images, WhatsApp integration, Google Maps location, and fully responsive menu display.",
//       image: "/janoshiss.png",
//       tags: ["Next.js", "Tailwind", "Cart Functionality", "WhatsApp API", "Google Maps"],
//       liveLink: "https://cafejanoshi.vercel.app",
//       accent: "#FF8A5C"
//     },
//     {
//       id: 2,
//       title: "Daim Marriage Hall",
//       role: "React Development - Vite",
//       description: "A modern, responsive website for Daim Marriage Hall & Marquee. Built with React + Vite for optimal performance. Features elegant UI, services showcase, gallery layout, and contact integration.",
//       image: "/daimss.png",
//       tags: ["React", "Vite", "Tailwind", "Responsive", "Modern UI"],
//       liveLink: "https://daim-marriage-hall-and-marquee.vercel.app",
//       accent: "#FF8A5C"
//     }
//   ]

//   return (
//     <section id="projects" className="relative w-full py-32 bg-[#E5E5E5] overflow-hidden">
//       {/* CLEAN BG - SAME AS HERO & SERVICES */}
//       <div className="absolute inset-0 bg-[#E5E5E5]"></div>
      
//       {/* SUBTLE BACKGROUND ELEMENTS - CONSISTENT */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-40 left-20 w-72 h-72 bg-[#FF8A5C]/5 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-40 right-20 w-72 h-72 bg-[#FF8A5C]/5 rounded-full blur-3xl"></div>
//       </div>
      
//       <div className="relative z-20 max-w-7xl mx-auto px-6">
        
//         {/* ---------- SECTION HEADER ---------- */}
//         <div className="text-center mb-20">
//           <span className="inline-block text-[#FF8A5C] text-sm font-semibold tracking-[0.3em] uppercase mb-4">
//             PORTFOLIO
//           </span>
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#333333] mb-6">
//             Live Projects
//           </h2>
//           <div className="w-24 h-1 bg-[#FF8A5C]/30 mx-auto rounded-full"></div>
//           <p className="text-[#666666] text-lg max-w-2xl mx-auto mt-8">
//             Real websites — deployed and running for actual businesses.
//           </p>
//         </div>

//         {/* ---------- PROJECTS GRID ---------- */}
//         <div className="space-y-24">
//           {projects.map((project, index) => (
//             <div
//               key={project.id}
//               className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center animate-fadeIn ${
//                 index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
//               }`}
//               style={{ animationDelay: `${index * 0.2}s` }}
//             >
              
//               {/* ---------- PROJECT IMAGE ---------- */}
//               <div className={`relative ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
//                 <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-white/50 backdrop-blur-sm border border-[#CCCCCC]/30 shadow-xl group">
//                   {/* IMAGE PLACEHOLDER - TU BADAL DEGI APNI SCREENSHOTS SE */}
//                   <div className="absolute inset-0 bg-gradient-to-br from-[#F5F5F5] to-[#E5E5E5] flex items-center justify-center">
//                     <div className="text-center">
//                       <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-[#FF8A5C]/10 flex items-center justify-center">
//                         <span className="text-3xl font-black text-[#FF8A5C]">{project.id}</span>
//                       </div>
//                       <span className="text-sm text-[#666666] font-medium">{project.title}</span>
//                       <span className="block text-xs text-[#FF8A5C] mt-2">✨ Live on Vercel</span>
//                     </div>
//                   </div>
                  
//                   {/* HOVER OVERLAY - DIRECT LIVE LINK */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/90 via-[#333333]/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-between p-8">
//                     <div>
//                       <span className="text-white text-sm font-medium bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">
//                         Live Project
//                       </span>
//                     </div>
//                     <Link 
//                       href={project.liveLink}
//                       target="_blank"
//                       className="w-14 h-14 rounded-full bg-[#FF8A5C] flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
//                     >
//                       <ExternalLink size={22} className="text-white" />
//                     </Link>
//                   </div>
//                 </div>
                
//                 {/* DECORATIVE DOTS */}
//                 <div className="absolute -top-4 -right-4 w-3 h-3 bg-[#FF8A5C] rounded-full"></div>
//                 <div className="absolute -bottom-4 -left-4 w-2 h-2 bg-[#A0A0A0] rounded-full"></div>
//               </div>

//               {/* ---------- PROJECT INFO ---------- */}
//               <div className="space-y-6">
//                 {/* ROLE BADGE */}
//                 <span className="inline-block px-4 py-2 bg-white/60 backdrop-blur-sm border border-[#CCCCCC]/30 rounded-full text-xs font-semibold tracking-[0.2em] text-[#FF8A5C] uppercase">
//                   {project.role}
//                 </span>

//                 {/* TITLE WITH LIVE INDICATOR */}
//                 <div className="flex items-center gap-3">
//                   <h3 className="text-3xl md:text-4xl font-bold text-[#333333] leading-tight">
//                     {project.title}
//                   </h3>
//                   <span className="relative flex h-3 w-3">
//                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF8A5C] opacity-75"></span>
//                     <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF8A5C]"></span>
//                   </span>
//                 </div>

//                 {/* DESCRIPTION */}
//                 <p className="text-[#666666] text-lg leading-relaxed">
//                   {project.description}
//                 </p>

//                 {/* TECH TAGS */}
//                 <div className="flex flex-wrap gap-3">
//                   {project.tags.map((tag, tagIndex) => (
//                     <span
//                       key={tagIndex}
//                       className="px-4 py-2 bg-white/60 backdrop-blur-sm border border-[#CCCCCC]/30 rounded-full text-sm text-[#666666] font-medium hover:border-[#FF8A5C]/30 hover:bg-[#FF8A5C]/5 transition-all duration-300"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 {/* ACTION BUTTONS */}
//                 <div className="flex items-center gap-6 pt-4">
//                   <Link
//                     href={project.liveLink}
//                     target="_blank"
//                     className="group relative px-8 py-4 bg-[#FF8A5C] text-white rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,138,92,0.3)]"
//                   >
//                     <span className="relative z-10 flex items-center gap-2">
//                       Visit Website
//                       <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//                     </span>
//                     <div className="absolute inset-0 bg-gradient-to-r from-[#FF8A5C] to-[#FF6B4A] opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                   </Link>
                  
//                   <span className="flex items-center gap-2 text-[#666666]">
//                     <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
//                     <span className="text-sm font-medium">Live on Vercel</span>
//                   </span>
//                 </div>

//                 {/* PROJECT HIGHLIGHTS */}
//                 <div className="grid grid-cols-2 gap-4 pt-4">
//                   {project.id === 1 ? (
//                     <>
//                       <div className="flex items-center gap-2 text-sm text-[#666666]">
//                         <span className="w-1.5 h-1.5 bg-[#FF8A5C] rounded-full"></span>
//                         Cart Functionality
//                       </div>
//                       <div className="flex items-center gap-2 text-sm text-[#666666]">
//                         <span className="w-1.5 h-1.5 bg-[#FF8A5C] rounded-full"></span>
//                         WhatsApp Button
//                       </div>
//                       <div className="flex items-center gap-2 text-sm text-[#666666]">
//                         <span className="w-1.5 h-1.5 bg-[#FF8A5C] rounded-full"></span>
//                         Google Maps
//                       </div>
//                       <div className="flex items-center gap-2 text-sm text-[#666666]">
//                         <span className="w-1.5 h-1.5 bg-[#FF8A5C] rounded-full"></span>
//                         Menu Cards
//                       </div>
//                     </>
//                   ) : (
//                     <>
//                       <div className="flex items-center gap-2 text-sm text-[#666666]">
//                         <span className="w-1.5 h-1.5 bg-[#FF8A5C] rounded-full"></span>
//                         Vite + React
//                       </div>
//                       <div className="flex items-center gap-2 text-sm text-[#666666]">
//                         <span className="w-1.5 h-1.5 bg-[#FF8A5C] rounded-full"></span>
//                         Marquee Showcase
//                       </div>
//                       <div className="flex items-center gap-2 text-sm text-[#666666]">
//                         <span className="w-1.5 h-1.5 bg-[#FF8A5C] rounded-full"></span>
//                         Services Gallery
//                       </div>
//                       <div className="flex items-center gap-2 text-sm text-[#666666]">
//                         <span className="w-1.5 h-1.5 bg-[#FF8A5C] rounded-full"></span>
//                         Contact Integration
//                       </div>
//                     </>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* ---------- LIVE PROJECTS COUNTER ---------- */}
//         <div className="mt-24 text-center">
//           <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/60 backdrop-blur-sm border border-[#CCCCCC]/30 rounded-full">
//             <span className="relative flex h-3 w-3">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
//               <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
//             </span>
//             <span className="text-[#333333] font-medium">
//               <span className="text-[#FF8A5C] font-bold">2 Live Projects</span> deployed on Vercel
//             </span>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         .animate-fadeIn {
//           animation: fadeIn 0.8s ease-out forwards;
//           opacity: 0;
//         }
//       `}</style>
//     </section>
//   )
// } 






"use client";

import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Cafe Janoshi",
      role: "Full Stack Development - Next.js",
      description: "A complete ecommerce website for Cafe Janoshi, Okara. Features dynamic cart, real-time price updates, product cards with HD images, WhatsApp integration, Google Maps location, and fully responsive menu display.",
      image: "/janoshiss.png",
      tags: ["Next.js", "Tailwind", "Cart Functionality", "WhatsApp API", "Google Maps"],
      liveLink: "https://cafejanoshi.vercel.app",
      accent: "#FF8A5C"
    },
    {
      id: 2,
      title: "Daim Marriage Hall",
      role: "React Development - Vite",
      description: "A modern, responsive website for Daim Marriage Hall & Marquee. Built with React + Vite for optimal performance. Features elegant UI, services showcase, gallery layout, and contact integration.",
      image: "/daimss.png",
      tags: ["React", "Vite", "Tailwind", "Responsive", "Modern UI"],
      liveLink: "https://daim-marriage-hall-and-marquee.vercel.app",
      accent: "#FF8A5C"
    }
  ]

  return (
    <section id="projects" className="relative w-full py-32 bg-[#E5E5E5] overflow-hidden">
      {/* CLEAN BG */}
      <div className="absolute inset-0 bg-[#E5E5E5]"></div>
      
      {/* SUBTLE BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-20 w-72 h-72 bg-[#FF8A5C]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-[#FF8A5C]/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-6">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-20">
          <span className="inline-block text-[#FF8A5C] text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            PORTFOLIO
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#333333] mb-6">
            Live Projects
          </h2>
          <div className="w-24 h-1 bg-[#FF8A5C]/30 mx-auto rounded-full"></div>
          <p className="text-[#666666] text-lg max-w-2xl mx-auto mt-8">
            Real websites — deployed and running for actual businesses.
          </p>
        </div>

        {/* PROJECTS GRID */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              
              {/* PROJECT IMAGE - WITH ACTUAL SCREENSHOT */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-last' : ''} group`}>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-white border border-[#CCCCCC]/30 shadow-xl">
                  {/* ACTUAL SCREENSHOT - TERI IMAGE */}
                  <div className="absolute inset-0 bg-[#F5F5F5]">
                    <Image 
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </div>
                  
                  {/* HOVER OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/90 via-[#333333]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-between p-6">
                    <span className="text-white text-sm font-medium bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">
                      Live Project
                    </span>
                    <Link 
                      href={project.liveLink}
                      target="_blank"
                      className="w-12 h-12 rounded-full bg-[#FF8A5C] flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
                    >
                      <ExternalLink size={20} className="text-white" />
                    </Link>
                  </div>
                </div>
                
                {/* DECORATIVE DOTS */}
                <div className="absolute -top-4 -right-4 w-3 h-3 bg-[#FF8A5C] rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-2 h-2 bg-[#A0A0A0] rounded-full"></div>
              </div>

              {/* PROJECT INFO */}
              <div className="space-y-5">
                {/* ROLE BADGE */}
                <span className="inline-block px-4 py-2 bg-white border border-[#CCCCCC]/30 rounded-full text-xs font-semibold tracking-[0.2em] text-[#FF8A5C] uppercase">
                  {project.role}
                </span>

                {/* TITLE */}
                <h3 className="text-3xl md:text-4xl font-bold text-[#333333] leading-tight">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-[#666666] text-lg leading-relaxed">
                  {project.description}
                </p>

                {/* TECH TAGS */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1.5 bg-white border border-[#CCCCCC]/30 rounded-full text-sm text-[#666666]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* VISIT BUTTON */}
                <div className="pt-2">
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF8A5C] text-white rounded-full font-medium hover:bg-[#FF7A4A] transition-all duration-300"
                  >
                    Visit Website
                    <ExternalLink size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* LIVE PROJECTS COUNTER */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-[#CCCCCC]/30 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[#333333] text-sm">
              <span className="text-[#FF8A5C] font-bold">2 Live Projects</span> deployed on Vercel
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}