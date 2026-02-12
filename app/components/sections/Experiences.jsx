

// "use client";

// import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react'

// export default function Experiences() {
//   const experiences = [
//     {
//       id: 1,
//       type: "work",
//       title: "Full Stack Developer",
//       company: "Freelance",
//       location: "Okara, Pakistan",
//       date: "2024 — Present",
//       description: "Developing modern web applications for local businesses. Built Cafe Janoshi ecommerce website with Next.js and Daim Marriage Hall with React + Vite.",
//       achievements: [
//         "Delivered 2 live production websites",
//         "Implemented cart functionality, WhatsApp API, Google Maps",
//         "Responsive designs with Tailwind CSS"
//       ]
//     },
//     {
//       id: 2,
//       type: "education",
//       title: "Web Development",
//       company: "Academy",
//       location: "Remote",
//       date: "2024 — 2025",
//       description: "Comprehensive web development program covering modern technologies and best practices.",
//       achievements: [
//         "Next.js & React specialization",
//         "Frontend development with Tailwind CSS",
//         "2 major projects completed"
//       ]
//     }
//   ]

//   return (
//     <section id="experiences" className="relative w-full py-32 bg-[#E5E5E5] overflow-hidden">
//       {/* CLEAN BG */}
//       <div className="absolute inset-0 bg-[#E5E5E5]"></div>
      
//       {/* SUBTLE BACKGROUND ORBS */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-60 right-20 w-80 h-80 bg-[#FF8A5C]/5 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-60 left-20 w-80 h-80 bg-[#FF8A5C]/5 rounded-full blur-3xl"></div>
//       </div>
      
//       <div className="relative z-20 max-w-6xl mx-auto px-6">
        
//         {/* ---------- SECTION HEADER - MODERN STYLE ---------- */}
//         <div className="text-center mb-20">
//           <span className="inline-block text-[#FF8A5C] text-sm font-light tracking-[0.4em] uppercase mb-6 font-['Inter']">
//             JOURNEY
//           </span>
          
//           <div className="flex items-center justify-center gap-3 mb-6">
//             <div className="w-12 h-[1px] bg-[#FF8A5C]/30"></div>
//             <span className="text-[#FF8A5C] text-xs font-light tracking-[0.3em]">✦</span>
//             <div className="w-12 h-[1px] bg-[#FF8A5C]/30"></div>
//           </div>
          
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#333333] mb-6 font-['Inter'] tracking-[-0.02em]">
//             Experience & Education
//           </h2>
          
//           <div className="flex items-center justify-center gap-2 mt-4">
//             <span className="w-2 h-2 rounded-full bg-[#FF8A5C]/40"></span>
//             <span className="w-12 h-[1px] bg-[#FF8A5C]/20"></span>
//             <span className="w-2 h-2 rounded-full bg-[#FF8A5C]/40"></span>
//           </div>
          
//           <p className="text-[#666666] text-lg max-w-2xl mx-auto mt-8 font-['Inter'] font-light leading-relaxed">
//             My professional journey so far — from learning to building real products.
//           </p>
//         </div>

//         {/* ---------- TIMELINE - LEFT/RIGHT ALTERNATING (MAT CHEDNA) ---------- */}
//         <div className="relative">
//           {/* CENTER LINE */}
//           <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-[#CCCCCC]/30 hidden lg:block"></div>
          
//           <div className="space-y-12 lg:space-y-16">
//             {experiences.map((exp, index) => (
//               <div
//                 key={exp.id}
//                 className={`relative flex flex-col lg:flex-row ${
//                   index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
//                 } items-center gap-8 lg:gap-16`}
//               >
//                 {/* TIMELINE DOT */}
//                 <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#FF8A5C] rounded-full border-4 border-[#E5E5E5] hidden lg:block z-10 animate-pulse-slow"></div>
                
//                 {/* CARD */}
//                 <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
//                   <div className="bg-white/60 backdrop-blur-sm border border-[#CCCCCC]/30 rounded-3xl p-8 hover:border-[#FF8A5C]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#FF8A5C]/5 group animate-fadeIn">
                    
//                     {/* ICON + TYPE */}
//                     <div className={`flex items-center gap-3 mb-5 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
//                       <div className={`w-12 h-12 rounded-2xl bg-[#FF8A5C]/10 flex items-center justify-center group-hover:bg-[#FF8A5C] transition-all duration-500 ${
//                         index % 2 === 0 ? 'lg:ml-auto' : ''
//                       }`}>
//                         {exp.type === "work" ? (
//                           <Briefcase size={24} className="text-[#FF8A5C] group-hover:text-white transition-colors duration-500" />
//                         ) : (
//                           <GraduationCap size={24} className="text-[#FF8A5C] group-hover:text-white transition-colors duration-500" />
//                         )}
//                       </div>
//                       <span className="px-4 py-1.5 bg-[#FF8A5C]/10 rounded-full text-xs font-light tracking-[0.2em] text-[#FF8A5C] uppercase font-['Inter']">
//                         {exp.type === "work" ? "Work" : "Education"}
//                       </span>
//                     </div>

//                     {/* TITLE - SEQUENCE FIXED */}
//                     <h3 className={`text-2xl md:text-3xl font-light text-[#333333] mb-2 font-['Inter'] tracking-[-0.02em] ${
//                       index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
//                     }`}>
//                       {exp.title}
//                     </h3>
                    
//                     {/* COMPANY & DATE - SEQUENCE FIXED */}
//                     <div className={`flex items-center gap-4 text-[#666666] text-sm mb-4 font-light font-['Inter'] ${
//                       index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
//                     }`}>
//                       <span className="font-normal text-[#FF8A5C]">{exp.company}</span>
//                       <span className="w-1 h-1 bg-[#CCCCCC] rounded-full"></span>
//                       <div className="flex items-center gap-1">
//                         <Calendar size={14} className="text-[#999999]" />
//                         <span>{exp.date}</span>
//                       </div>
//                     </div>
                    
//                     {/* LOCATION */}
//                     <div className={`flex items-center gap-1 text-[#666666] text-sm mb-5 font-light font-['Inter'] ${
//                       index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
//                     }`}>
//                       <MapPin size={14} className="text-[#999999]" />
//                       <span>{exp.location}</span>
//                     </div>

//                     {/* DESCRIPTION */}
//                     <p className={`text-[#666666] text-base font-light leading-relaxed mb-6 font-['Inter'] ${
//                       index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
//                     }`}>
//                       {exp.description}
//                     </p>

//                     {/* ACHIEVEMENTS - SEQUENCE FIXED */}
//                     <ul className={`space-y-3 ${index % 2 === 0 ? 'lg:items-end' : 'lg:items-start'}`}>
//                       {exp.achievements.map((item, i) => (
//                         <li 
//                           key={i}
//                           className={`flex items-start gap-3 text-sm text-[#666666] font-light font-['Inter'] ${
//                             index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
//                           }`}
//                         >
//                           <span className="min-w-1.5 h-1.5 mt-1.5 rounded-full bg-[#FF8A5C] group-hover:scale-125 transition-transform duration-300"></span>
//                           <span className={index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}>
//                             {item}
//                           </span>
//                         </li>
//                       ))}
//                     </ul>

//                     {/* DECORATIVE BOTTOM LINE */}
//                     <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#FF8A5C] group-hover:w-16 transition-all duration-500 rounded-full ${
//                       index % 2 === 0 ? 'lg:left-auto lg:right-8' : 'lg:left-8'
//                     }`}></div>
//                   </div>
//                 </div>
                
//                 {/* EMPTY SPACE */}
//                 <div className="hidden lg:block lg:w-1/2"></div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ---------- CURRENT STATUS - MODERN ---------- */}
//         <div className="mt-24 text-center animate-fadeIn">
//           <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-6 bg-white/60 backdrop-blur-sm border border-[#CCCCCC]/30 rounded-2xl hover:border-[#FF8A5C]/30 transition-all duration-500">
//             <div className="relative">
//               <span className="relative flex h-3 w-3">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
//               </span>
//             </div>
//             <div>
//               <span className="text-[#333333] font-light font-['Inter']">
//                 <span className="text-[#FF8A5C] font-normal">Available for freelance</span> — Let's build something great together
//               </span>
//             </div>
//           </div>
//         </div>
        
//         {/* BOTTOM DECORATIVE LINE */}
//         <div className="flex items-center justify-center gap-4 mt-20">
//           <div className="w-16 h-[1px] bg-[#FF8A5C]/20"></div>
//           <span className="text-[#FF8A5C] text-xs font-light tracking-[0.3em]">◈</span>
//           <div className="w-16 h-[1px] bg-[#FF8A5C]/20"></div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
        
//         @keyframes pulse-slow {
//           0%, 100% { opacity: 1; transform: scale(1); }
//           50% { opacity: 0.8; transform: scale(1.1); }
//         }
        
//         .animate-fadeIn {
//           animation: fadeIn 0.8s ease-out forwards;
//         }
        
//         .animate-pulse-slow {
//           animation: pulse-slow 2s ease-in-out infinite;
//         }
        
//         .group:hover .group-hover\\:scale-125 {
//           transform: scale(1.25);
//         }
//       `}</style>
//     </section>
//   )
// } 






"use client";

import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react'

export default function Experiences() {
  const experiences = [
    {
      id: 1,
      type: "work",
      title: "Full Stack Developer",
      company: "Freelance",
      location: "Okara, Pakistan",
      date: "2024 — Present",
      description: "Developing modern web applications for local businesses. Built Cafe Janoshi ecommerce website with Next.js and Daim Marriage Hall with React + Vite.",
      achievements: [
        "Delivered 2 live production websites",
        "Implemented cart functionality, WhatsApp API, Google Maps",
        "Responsive designs with Tailwind CSS"
      ]
    },
    {
      id: 2,
      type: "education",
      title: "Web Development",
      company: "Academy",
      location: "Remote",
      date: "2024 — 2025",
      description: "Comprehensive web development program covering modern technologies and best practices.",
      achievements: [
        "Next.js & React specialization",
        "Frontend development with Tailwind CSS",
        "2 major projects completed"
      ]
    }
  ]

  return (
    <section id="experiences" className="relative w-full py-32 bg-[#E5E5E5] overflow-hidden">
      {/* CLEAN BG */}
      <div className="absolute inset-0 bg-[#E5E5E5]"></div>
      
      {/* SUBTLE BACKGROUND ORBS */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-60 right-20 w-80 h-80 bg-[#FF8A5C]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-60 left-20 w-80 h-80 bg-[#FF8A5C]/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-20 max-w-6xl mx-auto px-6">
        
        {/* ---------- SECTION HEADER - MODERN STYLE ---------- */}
        <div className="text-center mb-20 animate-fadeIn">
          <span className="inline-block text-[#FF8A5C] text-sm font-light tracking-[0.4em] uppercase mb-6 font-['Inter']">
            JOURNEY
          </span>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-[#FF8A5C]/30"></div>
            <span className="text-[#FF8A5C] text-xs font-light tracking-[0.3em]">✦</span>
            <div className="w-12 h-[1px] bg-[#FF8A5C]/30"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#333333] mb-6 font-['Inter'] tracking-[-0.02em]">
            Experience & Education
          </h2>
          
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="w-2 h-2 rounded-full bg-[#FF8A5C]/40"></span>
            <span className="w-12 h-[1px] bg-[#FF8A5C]/20"></span>
            <span className="w-2 h-2 rounded-full bg-[#FF8A5C]/40"></span>
          </div>
          
          <p className="text-[#666666] text-lg max-w-2xl mx-auto mt-8 font-['Inter'] font-light leading-relaxed">
            My professional journey so far — from learning to building real products.
          </p>
        </div>

        {/* ---------- TIMELINE - LEFT/RIGHT ALTERNATING ---------- */}
        <div className="relative">
          {/* CENTER LINE */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-[#CCCCCC]/30 hidden lg:block"></div>
          
          <div className="space-y-12 lg:space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col lg:flex-row ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center gap-8 lg:gap-16`}
              >
                {/* TIMELINE DOT */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#FF8A5C] rounded-full border-4 border-[#E5E5E5] hidden lg:block z-10 animate-pulse-slow"></div>
                
                {/* CARD */}
                <div className={`w-full lg:w-1/2 ${
                  index === 0 ? 'lg:text-left' : (index % 2 === 0 ? 'lg:text-right' : 'lg:text-left')
                }`}>
                  <div className="bg-white/60 backdrop-blur-sm border border-[#CCCCCC]/30 rounded-3xl p-8 hover:border-[#FF8A5C]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#FF8A5C]/5 group animate-slideUp">
                    
                    {/* ICON + TYPE */}
                    <div className={`flex items-center gap-3 mb-5 ${
                      index === 0 ? '' : (index % 2 === 0 ? 'lg:flex-row-reverse' : '')
                    }`}>
                      <div className={`w-12 h-12 rounded-2xl bg-[#FF8A5C]/10 flex items-center justify-center group-hover:bg-[#FF8A5C] transition-all duration-500 ${
                        index === 0 ? '' : (index % 2 === 0 ? 'lg:ml-auto' : '')
                      }`}>
                        {exp.type === "work" ? (
                          <Briefcase size={24} className="text-[#FF8A5C] group-hover:text-white transition-colors duration-500" />
                        ) : (
                          <GraduationCap size={24} className="text-[#FF8A5C] group-hover:text-white transition-colors duration-500" />
                        )}
                      </div>
                      <span className="px-4 py-1.5 bg-[#FF8A5C]/10 rounded-full text-xs font-light tracking-[0.2em] text-[#FF8A5C] uppercase font-['Inter']">
                        {exp.type === "work" ? "Work" : "Education"}
                      </span>
                    </div>

                    {/* TITLE */}
                    <h3 className={`text-2xl md:text-3xl font-light text-[#333333] mb-2 font-['Inter'] tracking-[-0.02em] ${
                      index === 0 ? '' : (index % 2 === 0 ? 'lg:text-right' : 'lg:text-left')
                    }`}>
                      {exp.title}
                    </h3>
                    
                    {/* COMPANY & DATE */}
                    <div className={`flex items-center gap-4 text-[#666666] text-sm mb-4 font-light font-['Inter'] ${
                      index === 0 ? 'lg:justify-start' : (index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start')
                    }`}>
                      <span className="font-normal text-[#FF8A5C]">{exp.company}</span>
                      <span className="w-1 h-1 bg-[#CCCCCC] rounded-full"></span>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} className="text-[#999999]" />
                        <span>{exp.date}</span>
                      </div>
                    </div>
                    
                    {/* LOCATION */}
                    <div className={`flex items-center gap-1 text-[#666666] text-sm mb-5 font-light font-['Inter'] ${
                      index === 0 ? 'lg:justify-start' : (index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start')
                    }`}>
                      <MapPin size={14} className="text-[#999999]" />
                      <span>{exp.location}</span>
                    </div>

                    {/* DESCRIPTION */}
                    <p className={`text-[#666666] text-base font-light leading-relaxed mb-6 font-['Inter'] ${
                      index === 0 ? '' : (index % 2 === 0 ? 'lg:text-right' : 'lg:text-left')
                    }`}>
                      {exp.description}
                    </p>

                    {/* ACHIEVEMENTS */}
                    <ul className={`space-y-3 ${
                      index === 0 ? 'lg:items-start' : (index % 2 === 0 ? 'lg:items-end' : 'lg:items-start')
                    }`}>
                      {exp.achievements.map((item, i) => (
                        <li 
                          key={i}
                          className={`flex items-start gap-3 text-sm text-[#666666] font-light font-['Inter'] ${
                            index === 0 ? '' : (index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row')
                          }`}
                        >
                          <span className="min-w-1.5 h-1.5 mt-1.5 rounded-full bg-[#FF8A5C] group-hover:scale-125 transition-transform duration-300"></span>
                          <span className={index === 0 ? '' : (index % 2 === 0 ? 'lg:text-right' : 'lg:text-left')}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* DECORATIVE BOTTOM LINE */}
                    <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#FF8A5C] group-hover:w-16 transition-all duration-500 rounded-full ${
                      index === 0 ? 'lg:left-8' : (index % 2 === 0 ? 'lg:left-auto lg:right-8' : 'lg:left-8')
                    }`}></div>
                  </div>
                </div>
                
                {/* EMPTY SPACE */}
                <div className="hidden lg:block lg:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- CURRENT STATUS - MODERN ---------- */}
        <div className="mt-24 text-center animate-fadeIn">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-6 bg-white/60 backdrop-blur-sm border border-[#CCCCCC]/30 rounded-2xl hover:border-[#FF8A5C]/30 transition-all duration-500">
            <div className="relative">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
            </div>
            <div>
              <span className="text-[#333333] font-light font-['Inter']">
                <span className="text-[#FF8A5C] font-normal">Available for freelance</span> — Let's build something great together
              </span>
            </div>
          </div>
        </div>
        
        {/* BOTTOM DECORATIVE LINE */}
        <div className="flex items-center justify-center gap-4 mt-20">
          <div className="w-16 h-[1px] bg-[#FF8A5C]/20"></div>
          <span className="text-[#FF8A5C] text-xs font-light tracking-[0.3em]">◈</span>
          <div className="w-16 h-[1px] bg-[#FF8A5C]/20"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        
        .group:hover .group-hover\\:scale-125 {
          transform: scale(1.25);
        }
      `}</style>
    </section>
  )
}