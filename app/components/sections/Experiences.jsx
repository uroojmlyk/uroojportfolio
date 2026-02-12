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
      {/* CLEAN BG - SAME AS HERO */}
      <div className="absolute inset-0 bg-[#E5E5E5]"></div>
      
      {/* SUBTLE BACKGROUND ORBS */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-60 right-20 w-80 h-80 bg-[#FF8A5C]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-60 left-20 w-80 h-80 bg-[#FF8A5C]/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-20 max-w-6xl mx-auto px-6">
        
        {/* ---------- SECTION HEADER - EXACT SAME STYLE ---------- */}
        <div className="text-center mb-20">
          <span className="inline-block text-[#FF8A5C] text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            JOURNEY
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#333333] mb-6">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-[#FF8A5C]/30 mx-auto rounded-full"></div>
          <p className="text-[#666666] text-lg max-w-2xl mx-auto mt-8">
            My professional journey so far — from learning to building real products.
          </p>
        </div>

        {/* ---------- TIMELINE ---------- */}
        <div className="relative">
          {/* CENTER LINE - DECORATIVE */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-[#CCCCCC]/30 hidden lg:block"></div>
          
          <div className="space-y-12 lg:space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col lg:flex-row ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center gap-8 lg:gap-16`}
              >
                {/* TIMELINE DOT - DESKTOP */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#FF8A5C] rounded-full border-4 border-[#E5E5E5] hidden lg:block z-10"></div>
                
                {/* CARD */}
                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="bg-white/60 backdrop-blur-sm border border-[#CCCCCC]/30 rounded-3xl p-8 hover:border-[#FF8A5C]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#FF8A5C]/5 group">
                    
                    {/* ICON + TYPE */}
                    <div className={`flex items-center gap-3 mb-5 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                      <div className={`w-12 h-12 rounded-2xl bg-[#FF8A5C]/10 flex items-center justify-center group-hover:bg-[#FF8A5C] transition-all duration-500 ${
                        index % 2 === 0 ? 'lg:ml-auto' : ''
                      }`}>
                        {exp.type === "work" ? (
                          <Briefcase size={24} className="text-[#FF8A5C] group-hover:text-white transition-colors duration-500" />
                        ) : (
                          <GraduationCap size={24} className="text-[#FF8A5C] group-hover:text-white transition-colors duration-500" />
                        )}
                      </div>
                      <span className="px-4 py-1.5 bg-[#FF8A5C]/10 rounded-full text-xs font-semibold tracking-[0.15em] text-[#FF8A5C] uppercase">
                        {exp.type === "work" ? "Work" : "Education"}
                      </span>
                    </div>

                    {/* TITLE & COMPANY */}
                    <h3 className="text-2xl md:text-3xl font-bold text-[#333333] mb-2">
                      {exp.title}
                    </h3>
                    <div className={`flex items-center gap-4 text-[#666666] text-sm mb-4 ${
                      index % 2 === 0 ? 'lg:justify-end' : ''
                    }`}>
                      <span className="font-semibold text-[#FF8A5C]">{exp.company}</span>
                      <span className="w-1 h-1 bg-[#CCCCCC] rounded-full"></span>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} className="text-[#999999]" />
                        <span>{exp.date}</span>
                      </div>
                    </div>
                    
                    {/* LOCATION */}
                    <div className={`flex items-center gap-1 text-[#666666] text-sm mb-5 ${
                      index % 2 === 0 ? 'lg:justify-end' : ''
                    }`}>
                      <MapPin size={14} className="text-[#999999]" />
                      <span>{exp.location}</span>
                    </div>

                    {/* DESCRIPTION */}
                    <p className="text-[#666666] text-base leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* ACHIEVEMENTS */}
                    <ul className={`space-y-3 ${index % 2 === 0 ? 'lg:items-end' : ''}`}>
                      {exp.achievements.map((item, i) => (
                        <li 
                          key={i}
                          className={`flex items-start gap-3 text-sm text-[#666666] ${
                            index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                          }`}
                        >
                          <span className="min-w-1.5 h-1.5 mt-1.5 rounded-full bg-[#FF8A5C]"></span>
                          <span className={index % 2 === 0 ? 'lg:text-right' : ''}>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* DECORATIVE BOTTOM LINE */}
                    <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#FF8A5C] group-hover:w-16 transition-all duration-500 rounded-full ${
                      index % 2 === 0 ? 'lg:left-auto lg:right-8' : 'lg:left-8'
                    }`}></div>
                  </div>
                </div>
                
                {/* EMPTY SPACE FOR DESKTOP LAYOUT */}
                <div className="hidden lg:block lg:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- CURRENT STATUS ---------- */}
        <div className="mt-24 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-6 bg-white/60 backdrop-blur-sm border border-[#CCCCCC]/30 rounded-2xl">
            <div className="relative">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
            </div>
            <div>
              <span className="text-[#333333] font-medium">
                🚀 <span className="text-[#FF8A5C] font-bold">Available for freelance</span> — Let's build something great together
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}