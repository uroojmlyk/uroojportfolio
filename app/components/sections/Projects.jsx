


// "use client";

// import { ExternalLink } from 'lucide-react'
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
//     },
   
//   ]

//   return (
//     <section id="projects" className="relative w-full py-32 bg-[#E5E5E5] overflow-hidden">
//       {/* CLEAN BG */}
//       <div className="absolute inset-0 bg-[#E5E5E5]"></div>
      
//       {/* SUBTLE BACKGROUND ELEMENTS */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-40 left-20 w-72 h-72 bg-[#FF8A5C]/5 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-40 right-20 w-72 h-72 bg-[#FF8A5C]/5 rounded-full blur-3xl"></div>
//       </div>
      
//       <div className="relative z-20 max-w-7xl mx-auto px-6">
        
//         {/* SECTION HEADER */}
//         <div className="text-center mb-20">
//           <span className="inline-block text-[#FF8A5C] text-sm font-light tracking-[0.4em] uppercase mb-6 font-['Inter']">
//             PORTFOLIO
//           </span>
          
//           <div className="flex items-center justify-center gap-3 mb-6">
//             <div className="w-12 h-[1px] bg-[#FF8A5C]/30"></div>
//             <span className="text-[#FF8A5C] text-xs font-light tracking-[0.3em]">✦</span>
//             <div className="w-12 h-[1px] bg-[#FF8A5C]/30"></div>
//           </div>
          
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#333333] mb-6 font-['Inter'] tracking-[-0.02em]">
//             Live Projects
//           </h2>
          
//           <div className="flex items-center justify-center gap-2 mt-4">
//             <span className="w-2 h-2 rounded-full bg-[#FF8A5C]/40"></span>
//             <span className="w-12 h-[1px] bg-[#FF8A5C]/20"></span>
//             <span className="w-2 h-2 rounded-full bg-[#FF8A5C]/40"></span>
//           </div>
          
//           <p className="text-[#666666] text-lg max-w-2xl mx-auto mt-8 font-['Inter'] font-light leading-relaxed">
//             Real websites — deployed and running for actual businesses.
//           </p>
//         </div>

//         {/* PROJECTS GRID - SEQUENCE WISE SAME ALIGNMENT */}
//         <div className="space-y-24">
//           {projects.map((project, index) => (
//             <div
//               key={project.id}
//               className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
//             >
              
//               {/* PROJECT IMAGE - LEFT SIDE FOR BOTH */}
//               <div className="relative group">
//                 <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-white border border-[#CCCCCC]/30 shadow-xl">
//                   <div className="absolute inset-0 bg-[#F5F5F5]">
//                     <Image 
//                       src={project.image}
//                       alt={project.title}
//                       fill
//                       className="object-cover object-top"
//                       priority
//                     />
//                   </div>
                  
//                   {/* HOVER OVERLAY */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/80 via-[#333333]/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-between p-6">
//                     <span className="text-white text-xs font-light tracking-[0.2em] bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
//                       LIVE PROJECT
//                     </span>
//                     <Link 
//                       href={project.liveLink}
//                       target="_blank"
//                       className="w-12 h-12 rounded-full bg-[#FF8A5C] flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
//                     >
//                       <ExternalLink size={18} className="text-white" />
//                     </Link>
//                   </div>
//                 </div>
                
//                 {/* DECORATIVE DOTS */}
//                 <div className="absolute -top-4 -right-4 w-3 h-3 bg-[#FF8A5C] rounded-full"></div>
//                 <div className="absolute -bottom-4 -left-4 w-2 h-2 bg-[#A0A0A0] rounded-full"></div>
//               </div>

//               {/* PROJECT INFO - RIGHT SIDE FOR BOTH */}
//               <div className="space-y-6">
//                 {/* ROLE BADGE */}
//                 <span className="inline-block px-5 py-2 bg-white/80 backdrop-blur-sm border border-[#CCCCCC]/30 rounded-full text-xs font-light tracking-[0.25em] text-[#FF8A5C] uppercase font-['Inter']">
//                   {project.role}
//                 </span>

//                 {/* TITLE - BOTH LEFT ALIGNED */}
//                 <h3 className="text-3xl md:text-4xl font-light text-[#333333] leading-tight font-['Inter'] tracking-[-0.02em] text-left">
//                   {project.title}
//                 </h3>

//                 {/* DESCRIPTION - BOTH LEFT ALIGNED */}
//                 <p className="text-[#666666] text-lg font-light leading-relaxed font-['Inter'] text-left">
//                   {project.description}
//                 </p>

//                 {/* TECH TAGS - BOTH LEFT ALIGNED */}
//                 <div className="flex flex-wrap gap-2 justify-start">
//                   {project.tags.map((tag, tagIndex) => (
//                     <span
//                       key={tagIndex}
//                       className="px-4 py-1.5 bg-white/80 backdrop-blur-sm border border-[#CCCCCC]/30 rounded-full text-xs font-light text-[#666666] font-['Inter'] tracking-[-0.01em] hover:border-[#FF8A5C]/30 hover:bg-[#FF8A5C]/5 transition-all duration-300"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 {/* VISIT BUTTON - BOTH LEFT ALIGNED */}
//                 <div className="pt-4 text-left">
//                   <Link
//                     href={project.liveLink}
//                     target="_blank"
//                     className="group inline-flex items-center gap-3 px-7 py-3.5 bg-[#FF8A5C] text-white rounded-full font-light tracking-[0.05em] hover:bg-[#FF7A4A] transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,138,92,0.3)] font-['Inter']"
//                   >
//                     <span>Visit Website</span>
//                     <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
//                   </Link>
//                 </div>
                
//                 {/* DECORATIVE LINE - BOTH LEFT ALIGNED */}
//                 <div className="w-16 h-[1px] bg-[#FF8A5C]/30 mt-4"></div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* LIVE PROJECTS COUNTER */}
//         <div className="mt-24 text-center">
//           <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/80 backdrop-blur-sm border border-[#CCCCCC]/30 rounded-full">
//             <span className="relative flex h-2.5 w-2.5">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
//               <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
//             </span>
//             <span className="text-[#333333] text-sm font-light font-['Inter']">
//               <span className="text-[#FF8A5C] font-normal">2 Live Projects</span> deployed on Vercel
//             </span>
//           </div>
//         </div>
        
//         {/* BOTTOM DECORATIVE LINE */}
//         <div className="flex items-center justify-center gap-4 mt-20">
//           <div className="w-16 h-[1px] bg-[#FF8A5C]/20"></div>
//           <span className="text-[#FF8A5C] text-xs font-light tracking-[0.3em]">◈</span>
//           <div className="w-16 h-[1px] bg-[#FF8A5C]/20"></div>
//         </div>
//       </div>
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
    },
    {
      id: 3,
      title: "Karchi Software House",
      role: "Full Stack Development - Next.js",
      description: "A professional software house website for Karchi. Features modern UI, services showcase, portfolio display, client testimonials, and complete business information with contact integration.",
      image: "/karchiss.png",
      tags: ["Next.js", "Tailwind", "Responsive", "Modern UI", "Business Website"],
      liveLink: "https://softwarehouse-bop9.vercel.app",
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
          <span className="inline-block text-[#FF8A5C] text-sm font-light tracking-[0.4em] uppercase mb-6 font-['Inter']">
            PORTFOLIO
          </span>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-[#FF8A5C]/30"></div>
            <span className="text-[#FF8A5C] text-xs font-light tracking-[0.3em]">✦</span>
            <div className="w-12 h-[1px] bg-[#FF8A5C]/30"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#333333] mb-6 font-['Inter'] tracking-[-0.02em]">
            Live Projects
          </h2>
          
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="w-2 h-2 rounded-full bg-[#FF8A5C]/40"></span>
            <span className="w-12 h-[1px] bg-[#FF8A5C]/20"></span>
            <span className="w-2 h-2 rounded-full bg-[#FF8A5C]/40"></span>
          </div>
          
          <p className="text-[#666666] text-lg max-w-2xl mx-auto mt-8 font-['Inter'] font-light leading-relaxed">
            Real websites — deployed and running for actual businesses.
          </p>
        </div>

        {/* PROJECTS GRID - SEQUENCE WISE SAME ALIGNMENT */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            >
              
              {/* PROJECT IMAGE - LEFT SIDE FOR BOTH */}
              <div className="relative group">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-white border border-[#CCCCCC]/30 shadow-xl">
                  <div className="absolute inset-0 bg-[#F5F5F5] flex items-center justify-center">
                    {project.image ? (
                      <Image 
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top"
                        priority
                      />
                    ) : (
                      <div className="text-[#999999] text-sm">Image coming soon</div>
                    )}
                  </div>
                  
                  {/* HOVER OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/80 via-[#333333]/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-between p-6">
                    <span className="text-white text-xs font-light tracking-[0.2em] bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                      LIVE PROJECT
                    </span>
                    <Link 
                      href={project.liveLink}
                      target="_blank"
                      className="w-12 h-12 rounded-full bg-[#FF8A5C] flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
                    >
                      <ExternalLink size={18} className="text-white" />
                    </Link>
                  </div>
                </div>
                
                {/* DECORATIVE DOTS */}
                <div className="absolute -top-4 -right-4 w-3 h-3 bg-[#FF8A5C] rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-2 h-2 bg-[#A0A0A0] rounded-full"></div>
              </div>

              {/* PROJECT INFO - RIGHT SIDE FOR BOTH */}
              <div className="space-y-6">
                {/* ROLE BADGE */}
                <span className="inline-block px-5 py-2 bg-white/80 backdrop-blur-sm border border-[#CCCCCC]/30 rounded-full text-xs font-light tracking-[0.25em] text-[#FF8A5C] uppercase font-['Inter']">
                  {project.role}
                </span>

                {/* TITLE - BOTH LEFT ALIGNED */}
                <h3 className="text-3xl md:text-4xl font-light text-[#333333] leading-tight font-['Inter'] tracking-[-0.02em] text-left">
                  {project.title}
                </h3>

                {/* DESCRIPTION - BOTH LEFT ALIGNED */}
                <p className="text-[#666666] text-lg font-light leading-relaxed font-['Inter'] text-left">
                  {project.description}
                </p>

                {/* TECH TAGS - BOTH LEFT ALIGNED */}
                <div className="flex flex-wrap gap-2 justify-start">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-1.5 bg-white/80 backdrop-blur-sm border border-[#CCCCCC]/30 rounded-full text-xs font-light text-[#666666] font-['Inter'] tracking-[-0.01em] hover:border-[#FF8A5C]/30 hover:bg-[#FF8A5C]/5 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* VISIT BUTTON - BOTH LEFT ALIGNED */}
                <div className="pt-4 text-left">
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    className="group inline-flex items-center gap-3 px-7 py-3.5 bg-[#FF8A5C] text-white rounded-full font-light tracking-[0.05em] hover:bg-[#FF7A4A] transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,138,92,0.3)] font-['Inter']"
                  >
                    <span>Visit Website</span>
                    <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </Link>
                </div>
                
                {/* DECORATIVE LINE - BOTH LEFT ALIGNED */}
                <div className="w-16 h-[1px] bg-[#FF8A5C]/30 mt-4"></div>
              </div>
            </div>
          ))}
        </div>

        {/* LIVE PROJECTS COUNTER */}
        <div className="mt-24 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/80 backdrop-blur-sm border border-[#CCCCCC]/30 rounded-full">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-[#333333] text-sm font-light font-['Inter']">
              <span className="text-[#FF8A5C] font-normal">3 Live Projects</span> deployed on Vercel
            </span>
          </div>
        </div>
        
        {/* BOTTOM DECORATIVE LINE */}
        <div className="flex items-center justify-center gap-4 mt-20">
          <div className="w-16 h-[1px] bg-[#FF8A5C]/20"></div>
          <span className="text-[#FF8A5C] text-xs font-light tracking-[0.3em]">◈</span>
          <div className="w-16 h-[1px] bg-[#FF8A5C]/20"></div>
        </div>
      </div>
    </section>
  )
}