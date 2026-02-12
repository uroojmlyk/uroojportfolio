"use client";

import { Code2, Palette, Layout, Smartphone, Globe, Figma } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: <Code2 size={32} />,
      title: "Web Development",
      description: "Building modern, responsive websites with Next.js, React, and cutting-edge technologies.",
      tags: ["Next.js", "React", "Tailwind"]
    },
    {
      icon: <Palette size={32} />,
      title: "UI/UX Design",
      description: "Creating intuitive, beautiful interfaces that users love to interact with.",
      tags: ["Figma", "Adobe XD", "Prototyping"]
    },
    {
      icon: <Layout size={32} />,
      title: "Responsive Design",
      description: "Pixel-perfect layouts that look stunning on every device — mobile to desktop.",
      tags: ["Mobile First", "Fluid", "Adaptive"]
    },
    {
      icon: <Smartphone size={32} />,
      title: "Frontend Architecture",
      description: "Scalable, maintainable code structures for long-term project success.",
      tags: ["Component Based", "Reusable", "Optimized"]
    },
    {
      icon: <Globe size={32} />,
      title: "Performance Optimization",
      description: "Lightning-fast load times and smooth interactions for better user experience.",
      tags: ["SEO", "Core Web Vitals", "Lazy Loading"]
    },
    {
      icon: <Figma size={32} />,
      title: "Design to Code",
      description: "Converting creative designs into fully functional, interactive websites.",
      tags: ["Pixel Perfect", "Figma to React", "Interactive"]
    }
  ]

  return (
    <section id="services" className="relative w-full py-32 bg-[#E5E5E5] overflow-hidden">
      {/* CLEAN BG - SAME AS HERO */}
      <div className="absolute inset-0 bg-[#E5E5E5]"></div>
      
      {/* SUBTLE BACKGROUND ELEMENTS - MATCHES HERO */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FF8A5C]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#FF8A5C]/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-6">
        
        {/* SECTION HEADER - MATCHES HERO STYLE */}
        <div className="text-center mb-20">
          <span className="inline-block text-[#FF8A5C] text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            WHAT I DO
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#333333] mb-6">
            Services & Expertise
          </h2>
          <div className="w-24 h-1 bg-[#FF8A5C]/30 mx-auto rounded-full"></div>
          <p className="text-[#666666] text-lg max-w-2xl mx-auto mt-8">
            Crafting digital experiences that combine stunning design with flawless functionality.
          </p>
        </div>

        {/* SERVICES GRID - CLEAN CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-[#CCCCCC]/30 hover:border-[#FF8A5C]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#FF8A5C]/5 animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* ICON - ORANGE ACCENT */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-[#FF8A5C]/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative w-16 h-16 bg-white rounded-2xl border border-[#CCCCCC]/30 flex items-center justify-center text-[#FF8A5C] group-hover:bg-[#FF8A5C] group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
              </div>

              {/* CONTENT */}
              <h3 className="text-2xl font-bold text-[#333333] mb-3 group-hover:text-[#FF8A5C] transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-[#666666] text-base leading-relaxed mb-6">
                {service.description}
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1.5 bg-[#F5F5F5] text-[#666666] text-xs font-medium rounded-full border border-[#CCCCCC]/20 group-hover:border-[#FF8A5C]/20 group-hover:bg-[#FF8A5C]/5 transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* DECORATIVE LINE - BOTTOM */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#FF8A5C] group-hover:w-16 transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* STATS / CONFIDENCE BUILDER */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black text-[#333333]">2+</div>
            <div className="text-sm text-[#666666] font-medium tracking-wide mt-2">Live Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black text-[#333333]">6+</div>
            <div className="text-sm text-[#666666] font-medium tracking-wide mt-2">Services</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black text-[#333333]">100%</div>
            <div className="text-sm text-[#666666] font-medium tracking-wide mt-2">Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black text-[#333333]">24/7</div>
            <div className="text-sm text-[#666666] font-medium tracking-wide mt-2">Support</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}