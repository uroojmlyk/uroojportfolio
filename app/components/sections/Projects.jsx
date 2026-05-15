



// "use client";

// import { ExternalLink, Github } from 'lucide-react'
// import Image from 'next/image'
// import Link from 'next/link'

// export default function Projects() {
//   const projects = [
//     {
//       id: 1,
//       title: "QuizForge",
//       role: "AI Quiz Platform",
//       year: "2026",
//       description: "AI-powered quiz platform with dynamic question generation, real-time scoring, and comprehensive analytics dashboard.",
//       image: "/quizforge.png",
//       tags: ["Next.js", "TypeScript", "MongoDB", "OpenAI API", "JWT Auth"],
//       features: [
//         "AI-generated quizzes",
//         "Real-time scoring system",
//         "User authentication",
//         "Analytics dashboard"
//       ],
//       liveLink: "https://quizplatform-7dh5.vercel.app",
//       githubLink: "https://github.com/uroojmlyk/quizforge"
//     },
//     {
//       id: 2,
//       title: "Cafe Janoshi",
//       role: "Restaurant Ordering Experience",
//       year: "2026",
//       description: "Modern restaurant e-commerce platform with interactive menu browsing and WhatsApp ordering integration.",
//       image: "/janoshiss.png",
//       tags: ["Next.js", "Tailwind CSS", "WhatsApp API", "Google Maps"],
//       features: [
//         "WhatsApp ordering",
//         "Interactive cart",
//         "Mobile optimized UI",
//         "Location integration"
//       ],
//       liveLink: "https://cafejanoshi.vercel.app",
//       githubLink: "https://github.com/uroojmlyk/cafejanoshi"
//     }
//   ]

//   return (
//     <section id="projects" className="relative w-full min-h-screen bg-[#E5E5E5] overflow-x-hidden">
//       {/* CLEAN BG */}
//       <div className="absolute inset-0 bg-[#E5E5E5]"></div>
      
//       {/* SINGLE SUBTLE BACKGROUND - MINIMAL */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-40 right-20 w-96 h-96 bg-[#FF8A5C]/5 rounded-full blur-3xl"></div>
//       </div>
      
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-28">
        
//         {/* SECTION HEADER - CLEAN */}
//         <div className="text-center mb-12 sm:mb-16 md:mb-20">
//           <span className="inline-block text-[#FF8A5C] text-xs sm:text-sm font-medium tracking-[0.3em] uppercase mb-4">
//             FEATURED WORK
//           </span>
          
//           <div className="w-12 h-[1px] bg-[#FF8A5C]/40 mx-auto mb-6"></div>
          
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#333333] mb-4 tracking-[-0.02em]">
//             Live Projects
//           </h2>
          
//           <p className="text-[#666666] text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
//             Production-level applications deployed and running for real businesses
//           </p>
//         </div>

//         {/* PROJECTS */}
//         <div className="space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-28">
//           {projects.map((project, index) => (
//             <div
//               key={project.id}
//               className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start"
//             >
              
//               {/* PROJECT IMAGE - WITH BROWSER FRAME & SCALE HOVER */}
//               <div className="w-full lg:order-1 overflow-hidden rounded-xl">
//                 <div className="relative group">
//                   {/* Browser Chrome */}
//                   <div className="relative rounded-t-xl bg-[#1A1A1A] px-3 py-2 sm:px-4 sm:py-2.5 flex items-center gap-1.5 sm:gap-2">
//                     <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5F56]"></div>
//                     <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFBD2E]"></div>
//                     <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27C93F]"></div>
//                     <div className="flex-1 text-center">
//                       <span className="text-[10px] sm:text-xs text-[#666666] font-mono">{project.liveLink.replace('https://', '')}</span>
//                     </div>
//                   </div>
                  
//                   {/* Screenshot with object-contain to avoid cropping */}
//                   <div className="relative aspect-[16/10] bg-[#F5F5F5] rounded-b-xl overflow-hidden border border-t-0 border-[#E0E0E0]">
//                     <div className="absolute inset-0 flex items-center justify-center p-4">
//                       <div className="relative w-full h-full">
//                         <Image 
//                           src={project.image}
//                           alt={project.title}
//                           fill
//                           className="object-contain transition-transform duration-700 group-hover:scale-105"
//                           priority
//                           sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* PROJECT INFO */}
//               <div className="w-full lg:order-2 space-y-4 sm:space-y-5">
//                 {/* ROLE BADGE + YEAR */}
//                 <div className="flex flex-wrap items-center gap-3">
//                   <span className="inline-block px-4 py-1.5 bg-white border border-[#E0E0E0] rounded-full text-xs font-medium text-[#FF8A5C] uppercase tracking-wider">
//                     {project.role}
//                   </span>
//                   <span className="inline-block px-3 py-1.5 bg-white border border-[#E0E0E0] rounded-full text-xs font-normal text-[#666666]">
//                     {project.year}
//                   </span>
//                 </div>

//                 {/* TITLE */}
//                 <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#333333] tracking-[-0.02em]">
//                   {project.title}
//                 </h3>

//                 {/* DESCRIPTION */}
//                 <p className="text-[#666666] text-sm sm:text-base font-normal leading-relaxed">
//                   {project.description}
//                 </p>

//                 {/* FEATURE BULLETS - RESPONSIVE */}
//                 <div className="space-y-2 pt-2">
//                   <h4 className="text-xs font-semibold text-[#333333] uppercase tracking-wider">Key Features</h4>
//                   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//                     {project.features.map((feature, idx) => (
//                       <li key={idx} className="flex items-center gap-2 text-sm text-[#666666]">
//                         <span className="w-1 h-1 bg-[#FF8A5C] rounded-full"></span>
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* TECH TAGS */}
//                 <div className="flex flex-wrap gap-2 pt-2">
//                   {project.tags.map((tag, tagIndex) => (
//                     <span
//                       key={tagIndex}
//                       className="px-3 py-1 bg-white border border-[#E0E0E0] rounded-md text-xs font-normal text-[#666666]"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 {/* CTA BUTTONS - CONSISTENT SIZING */}
//                 <div className="flex flex-wrap gap-3 pt-4">
//                   <Link
//                     href={project.liveLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#FF8A5C] text-white text-sm font-medium rounded-xl hover:bg-[#FF6B3A] transition-all duration-300 hover:-translate-y-0.5 shadow-md min-w-[120px]"
//                   >
//                     <ExternalLink size={16} />
//                     Live Demo
//                   </Link>
//                   <Link
//                     href={project.githubLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-[#E0E0E0] text-[#333333] text-sm font-medium rounded-xl hover:border-[#FF8A5C] hover:text-[#FF8A5C] transition-all duration-300 hover:-translate-y-0.5 min-w-[120px]"
//                   >
//                     <Github size={16} />
//                     GitHub
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* PROJECT COUNTER - MINIMAL */}
//         <div className="mt-16 sm:mt-20 md:mt-24 text-center">
//           <div className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-[#E0E0E0] rounded-full">
//             <span className="relative flex h-2 w-2">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
//               <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
//             </span>
//             <span className="text-[#666666] text-sm font-normal">
//               <span className="text-[#FF8A5C] font-medium">2 Featured Projects</span> — More on GitHub
//             </span>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }









"use client";

import { ExternalLink, Github, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "QuizForge",
      role: "AI Quiz Platform",
      featured: true,
      year: "2026",
      description: "AI-powered quiz platform with dynamic question generation, real-time scoring, and comprehensive analytics dashboard.",
      image: "/quizforge.png",
      tags: ["Next.js", "TypeScript", "MongoDB", "OpenAI API"],
      features: [
        "AI-generated quizzes",
        "Real-time scoring",
        "JWT authentication",
        "Analytics dashboard"
      ],
      liveLink: "https://quizplatform-7dh5.vercel.app",
      githubLink: "https://github.com/uroojmlyk/quizforge"
    },
    {
      id: 2,
      title: "Cafe Janoshi",
      role: "Restaurant Ordering Experience",
      featured: false,
      year: "2026",
      description: "Modern restaurant e-commerce platform with interactive menu browsing and WhatsApp ordering integration.",
      image: "/janoshiss.png",
      tags: ["Next.js", "Tailwind CSS", "WhatsApp API", "Google Maps"],
      features: [
        "WhatsApp ordering",
        "Interactive cart",
        "Mobile optimized",
        "Location integration"
      ],
      liveLink: "https://cafejanoshi.vercel.app",
      githubLink: "https://github.com/uroojmlyk/cafejanoshi"
    }
  ]

  return (
    <section id="projects" className="relative w-full min-h-screen bg-[#E5E5E5] overflow-x-hidden">
      {/* CLEAN BG */}
      <div className="absolute inset-0 bg-[#E5E5E5]"></div>
      
      {/* SINGLE SUBTLE BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 bg-[#FF8A5C]/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-28">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <span className="inline-block text-[#FF8A5C] text-xs sm:text-sm font-medium tracking-[0.3em] uppercase mb-4">
            FEATURED WORK
          </span>
          
          <div className="w-12 h-[1px] bg-[#FF8A5C]/40 mx-auto mb-6"></div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#333333] mb-4 tracking-[-0.02em]">
            Live Projects
          </h2>
          
          <p className="text-[#666666] text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            Deployed full-stack applications with real-world impact
          </p>
        </div>

        {/* PROJECTS */}
        <div className="space-y-20 sm:space-y-24 md:space-y-28 lg:space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start ${
                project.featured ? 'lg:gap-20' : ''
              }`}
            >
              
              {/* PROJECT IMAGE - WITH CLEANER BROWSER FRAME */}
              <div className={`w-full lg:order-1 ${project.featured ? 'lg:order-2' : ''}`}>
                <div className="relative group">
                  {/* Cleaner Browser Chrome - Lighter & Minimal */}
                  <div className="relative rounded-t-lg bg-[#F8F8F8] px-3 py-1.5 sm:px-4 sm:py-2 flex items-center gap-1.5 sm:gap-2 border border-b-0 border-[#E0E0E0]">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27C93F]"></div>
                    <div className="flex-1 text-center">
                      <span className="text-[9px] sm:text-xs text-[#888888] font-mono truncate block px-2">
                        {project.liveLink.replace('https://', '').replace('www.', '')}
                      </span>
                    </div>
                  </div>
                  
                  {/* Screenshot - Fixed aspect ratio with object-cover */}
                  <div className="relative aspect-[16/9] bg-[#F5F5F5] rounded-b-lg overflow-hidden border border-t-0 border-[#E0E0E0] shadow-md group-hover:shadow-xl transition-all duration-500">
                    <Image 
                      src={project.image}
                      alt={`${project.title} screenshot - ${project.role}`}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      priority={index === 0}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                    />
                  </div>
                </div>
              </div>

              {/* PROJECT INFO - WITH FEATURED BADGE */}
              <div className="w-full lg:order-2 space-y-4 sm:space-y-5">
                {/* ROLE BADGE + YEAR + FEATURED */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#FF8A5C]/10 border border-[#FF8A5C]/20 rounded-full text-xs font-medium text-[#FF8A5C]">
                      <Star size={12} />
                      Featured
                    </span>
                  )}
                  <span className="inline-block px-3 py-1 bg-white border border-[#E0E0E0] rounded-full text-xs font-medium text-[#FF8A5C] uppercase tracking-wider">
                    {project.role}
                  </span>
                  <span className="inline-block px-3 py-1 bg-white border border-[#E0E0E0] rounded-full text-xs font-normal text-[#666666]">
                    {project.year}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#333333] tracking-[-0.02em]">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-[#666666] text-sm sm:text-base font-normal leading-relaxed">
                  {project.description}
                </p>

                {/* FEATURE BULLETS - ONLY FEATURES, NO REDUNDANCY */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-semibold text-[#333333] uppercase tracking-wider">Key Features</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-[#666666]">
                        <span className="w-1 h-1 bg-[#FF8A5C] rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* TECH TAGS - CLEAN & MINIMAL */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-white border border-[#E0E0E0] rounded-md text-xs font-normal text-[#666666] hover:border-[#FF8A5C]/30 hover:bg-[#FF8A5C]/5 transition-all duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA BUTTONS - WITH SAFE HANDLING */}
                <div className="flex flex-wrap gap-3 pt-4">
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} live demo`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#FF8A5C] text-white text-sm font-medium rounded-lg hover:bg-[#FF6B3A] transition-all duration-300 hover:-translate-y-0.5 shadow-md min-w-[120px]"
                  >
                    <ExternalLink size={16} aria-hidden="true" />
                    Live Demo
                  </Link>
                  
                  {/* Safe GitHub link handling */}
                  {project.githubLink && project.githubLink !== "#" && (
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code on GitHub`}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-[#E0E0E0] text-[#333333] text-sm font-medium rounded-lg hover:border-[#FF8A5C] hover:text-[#FF8A5C] transition-all duration-300 hover:-translate-y-0.5 min-w-[120px]"
                    >
                      <Github size={16} aria-hidden="true" />
                      GitHub
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PROJECT COUNTER - MINIMAL & CREDIBLE */}
        <div className="mt-16 sm:mt-20 md:mt-24 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-[#E0E0E0] rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[#666666] text-sm font-normal">
              <span className="text-[#FF8A5C] font-medium">2 Production Projects</span> — More on GitHub
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}