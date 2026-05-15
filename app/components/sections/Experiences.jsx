"use client";

import { Briefcase, GraduationCap, ExternalLink, Zap, Database, Shield } from 'lucide-react'
import Link from 'next/link'

export default function Experiences() {
  const experiences = [
    {
      id: 1,
      type: "work",
      title: "Full Stack Developer (Freelance)",
      company: "Self-employed",
      date: "2024 — Present",
      summary: "Built and deployed 2 production full-stack applications with authentication, third-party APIs, and AI integration.",
      architecture: {
        frontend: "Next.js 14 (App Router)",
        backend: "API Routes + Serverless",
        database: "MongoDB Atlas",
        auth: "JWT-based session management"
      },
      engineeringHighlights: [
        "Reduced UI build time ~35% via reusable atomic component system (Button/Input/Form primitives)",
        "Improved Lighthouse performance from ~80 → 95+ through image optimization + code splitting",
        "Integrated OpenAI API for dynamic question generation with prompt engineering",
        "Implemented WhatsApp API for order placement without traditional checkout flow"
      ],
      constraints: [
        "Optimized for low-bandwidth users in Pakistan (3G/4G networks)",
        "Mobile-first UI design due to 70%+ mobile traffic"
      ],
      coreTech: ["Next.js", "React", "MongoDB", "Tailwind CSS"],
      otherTech: ["Node.js", "TypeScript", "JWT", "OpenAI API", "WhatsApp API"],
      projectLinks: [
        { name: "QuizForge →", url: "https://quizplatform-7dh5.vercel.app" },
        { name: "Cafe Janoshi →", url: "https://cafejanoshi.vercel.app" }
      ]
    },
    {
      id: 2,
      type: "education",
      title: "Frontend Engineering Focus",
      company: "Project-based Learning",
      date: "2024 — 2025",
      summary: "Built production-ready React/Next.js applications with authentication and API integrations alongside freelance work.",
      engineeringHighlights: [
        "Mastered Next.js App Router, SSR, ISR patterns through 2 production apps",
        "Implemented REST API consumption with error handling + loading states",
        "Built reusable component library used across multiple projects"
      ],
      coreTech: ["React", "Next.js", "Tailwind CSS"],
      otherTech: ["TypeScript", "Git", "REST APIs"],
      projectLinks: []
    }
  ]

  return (
    <section id="experiences" className="relative w-full min-h-screen bg-[#E5E5E5] overflow-x-hidden">
      {/* CLEAN BG */}
      <div className="absolute inset-0 bg-[#E5E5E5]"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
        
        {/* SECTION HEADER - MINIMAL */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-[#FF8A5C] text-xs sm:text-sm font-medium tracking-[0.3em] uppercase mb-4">
            ENGINEERING EXPERIENCE
          </span>
          
          <div className="w-12 h-[1px] bg-[#FF8A5C]/40 mx-auto mb-6"></div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#333333] mb-4 tracking-[-0.02em]">
            Experience
          </h2>
          
          <p className="text-[#666666] text-base max-w-2xl mx-auto font-normal">
            Production applications with real users and technical constraints
          </p>
        </div>

        {/* EXPERIENCE CARDS */}
        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="group bg-white rounded-xl border-l-4 border-l-[#FF8A5C] border border-[#E0E0E0] hover:border-[#FF8A5C]/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="p-6 sm:p-7">
                
                {/* HEADER */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {exp.type === "work" ? (
                        <Briefcase size={18} className="text-[#FF8A5C]" />
                      ) : (
                        <GraduationCap size={18} className="text-[#FF8A5C]" />
                      )}
                      <h3 className="text-xl font-medium text-[#333333]">
                        {exp.title}
                      </h3>
                    </div>
                    <p className="text-[#FF8A5C] font-medium text-sm">
                      {exp.company}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-sm text-[#666666]">
                    <span className="text-xs">{exp.date}</span>
                  </div>
                </div>

                {/* ENGINEERING SUMMARY */}
                <p className="text-[#666666] text-sm leading-relaxed mb-5 pb-3 border-b border-[#E0E0E0]">
                  {exp.summary}
                </p>

                {/* ARCHITECTURE SIGNAL - SENIOR LEVEL */}
                {exp.architecture && (
                  <div className="mb-5 pb-3 border-b border-[#E0E0E0]">
                    <h4 className="text-xs font-semibold text-[#333333] uppercase tracking-wider mb-2 flex items-center gap-1">
                      <Database size={12} />
                      Architecture
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                      <div>
                        <span className="text-[#999999]">Frontend:</span>
                        <p className="text-[#333333] font-mono text-xs">{exp.architecture.frontend}</p>
                      </div>
                      <div>
                        <span className="text-[#999999]">Backend:</span>
                        <p className="text-[#333333] font-mono text-xs">{exp.architecture.backend}</p>
                      </div>
                      <div>
                        <span className="text-[#999999]">Database:</span>
                        <p className="text-[#333333] font-mono text-xs">{exp.architecture.database}</p>
                      </div>
                      <div>
                        <span className="text-[#999999]">Auth:</span>
                        <p className="text-[#333333] font-mono text-xs">{exp.architecture.auth}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* ENGINEERING HIGHLIGHTS - REPLACES IMPACT */}
                <div className="mb-5">
                  <h4 className="text-xs font-semibold text-[#333333] uppercase tracking-wider mb-2 flex items-center gap-1">
                    <Zap size={12} />
                    Engineering Highlights
                  </h4>
                  <ul className="space-y-1.5">
                    {exp.engineeringHighlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#666666]">
                        <span className="w-1 h-1 bg-[#FF8A5C] rounded-full flex-shrink-0 mt-1.5"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CONSTRAINTS AWARENESS - SENIOR SIGNAL */}
                {exp.constraints && (
                  <div className="mb-5 p-3 bg-[#F8F8F8] rounded-lg">
                    <h4 className="text-xs font-semibold text-[#333333] uppercase tracking-wider mb-2 flex items-center gap-1">
                      <Shield size={12} />
                      Real-world Constraints
                    </h4>
                    <ul className="space-y-1">
                      {exp.constraints.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#666666]">
                          <span className="w-1 h-1 bg-[#FF8A5C] rounded-full flex-shrink-0 mt-1"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* TECH STACK - SIMPLIFIED */}
                <div className="mb-5">
                  <h4 className="text-xs font-semibold text-[#333333] uppercase tracking-wider mb-2">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.coreTech.map((tech, i) => (
                      <span key={i} className="px-2 py-0.5 bg-white border border-[#FF8A5C]/30 rounded text-xs font-mono text-[#FF8A5C]">
                        {tech}
                      </span>
                    ))}
                    <span className="text-xs text-[#999999] font-mono self-center">+</span>
                    {exp.otherTech.slice(0, 3).map((tech, i) => (
                      <span key={i} className="px-2 py-0.5 bg-[#F5F5F5] border border-[#E0E0E0] rounded text-xs font-mono text-[#666666]">
                        {tech}
                      </span>
                    ))}
                    {exp.otherTech.length > 3 && (
                      <span className="text-xs text-[#999999] font-mono self-center">
                        +{exp.otherTech.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* PROJECT LINKS */}
                {exp.projectLinks.length > 0 && (
                  <div className="pt-3 border-t border-[#E0E0E0]">
                    <div className="flex flex-wrap gap-4">
                      {exp.projectLinks.map((project, i) => (
                        <Link
                          key={i}
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-[#FF8A5C] hover:underline font-medium"
                        >
                          {project.name}
                          <ExternalLink size={12} />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* AVAILABILITY */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white border border-[#E0E0E0] rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[#666666] text-sm">
              <span className="text-[#FF8A5C] font-medium">Open to opportunities</span> — 2+ years experience
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}