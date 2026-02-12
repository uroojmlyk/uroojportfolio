"use client";

import { ExternalLink, Quote, Star, Users, Target, Zap } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function CaseStudy() {
  const caseStudies = [
    {
      id: 1,
      title: "Cafe Janoshi — Ecommerce Transformation",
      client: "Cafe Janoshi, Okara",
      category: "Ecommerce Website",
      duration: "2 Weeks",
      role: "Full Stack Developer",
      challenge: "Cafe Janoshi needed a modern website to showcase their menu and allow customers to easily place orders. They wanted a seamless cart experience, WhatsApp integration for orders, and Google Maps for location discovery.",
      solution: "Built a Next.js ecommerce platform with dynamic cart functionality, real-time price updates, and responsive menu cards. Integrated WhatsApp API for direct orders and Google Maps for store location.",
      results: [
        "✅ Live production website deployed on Vercel",
        "✅ Fully responsive menu display with HD images",
        "✅ Seamless cart and order flow",
        "✅ Easy-to-update product management"
      ],
      image: "/janoshiss.png",
      tags: ["Next.js", "Tailwind", "Cart", "WhatsApp API", "Maps"],
      liveLink: "https://cafejanoshi.vercel.app",
      accent: "#FF8A5C"
    },
    {
      id: 2,
      title: "Daim Marriage Hall — Digital Presence",
      client: "Daim Marriage Hall & Marquee",
      category: "Business Website",
      duration: "1.5 Weeks",
      role: "React Developer",
      challenge: "Daim Marriage Hall required an elegant website to showcase their venue, services, and gallery. They wanted a modern, trustworthy online presence that reflects their premium service quality.",
      solution: "Developed a high-performance React + Vite website with clean UI, services showcase, and gallery layout. Focused on fast load times and smooth user experience across all devices.",
      results: [
        "✅ Modern, responsive business website",
        "✅ Services and gallery showcase",
        "✅ Optimized performance with Vite",
        "✅ Contact integration for inquiries"
      ],
      image: "/daimss.png",
      tags: ["React", "Vite", "Tailwind", "Responsive", "UI/UX"],
      liveLink: "https://daim-marriage-hall-and-marquee.vercel.app",
      accent: "#FF8A5C"
    }
  ]

  const testimonials = [
    {
      id: 1,
      name: "Cafe Janoshi",
      role: "Business Owner",
      content: "Urooj developed our complete ecommerce website. The cart system works perfectly and our customers love the easy ordering process. Professional work!",
      rating: 5,
      project: "Cafe Janoshi"
    },
    {
      id: 2,
      name: "Daim Marriage Hall",
      role: "Management",
      content: "Very satisfied with the website. Clean design, fast loading, and exactly what we needed. Great communication and timely delivery.",
      rating: 5,
      project: "Daim Marriage Hall"
    }
  ]

  return (
    <section id="casestudy" className="relative w-full py-32 bg-[#E5E5E5] overflow-hidden">
      {/* CLEAN BG - SAME AS ALL SECTIONS */}
      <div className="absolute inset-0 bg-[#E5E5E5]"></div>
      
      {/* SUBTLE BACKGROUND ORBS */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-40 w-96 h-96 bg-[#FF8A5C]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-40 w-96 h-96 bg-[#FF8A5C]/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-6">
        
        {/* ---------- SECTION HEADER - EXACT SAME STYLE ---------- */}
        <div className="text-center mb-20">
          <span className="inline-block text-[#FF8A5C] text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            CASE STUDIES
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#333333] mb-6">
            Real Problems, Real Solutions
          </h2>
          <div className="w-24 h-1 bg-[#FF8A5C]/30 mx-auto rounded-full"></div>
          <p className="text-[#666666] text-lg max-w-2xl mx-auto mt-8">
            How I transformed requirements into successful live websites.
          </p>
        </div>

        {/* ---------- CASE STUDIES GRID ---------- */}
        <div className="space-y-20">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className="group relative bg-white/60 backdrop-blur-sm border border-[#CCCCCC]/30 rounded-3xl p-8 lg:p-12 hover:border-[#FF8A5C]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#FF8A5C]/5"
            >
              {/* DECORATIVE LINE */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#FF8A5C] group-hover:w-32 transition-all duration-500 rounded-full"></div>
              
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                
                {/* LEFT SIDE - PROJECT INFO */}
                <div className="space-y-6">
                  {/* CATEGORY BADGE */}
                  <div className="flex items-center gap-3">
                    <span className="px-4 py-2 bg-[#FF8A5C]/10 rounded-full text-xs font-semibold tracking-[0.2em] text-[#FF8A5C] uppercase">
                      {study.category}
                    </span>
                    <span className="px-4 py-2 bg-white border border-[#CCCCCC]/30 rounded-full text-xs text-[#666666]">
                      ⏱️ {study.duration}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-3xl lg:text-4xl font-bold text-[#333333] leading-tight">
                    {study.title}
                  </h3>

                  {/* CLIENT & ROLE */}
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <span className="flex items-center gap-1 text-[#666666]">
                      <Users size={16} className="text-[#999999]" />
                      {study.client}
                    </span>
                    <span className="w-1 h-1 bg-[#CCCCCC] rounded-full"></span>
                    <span className="flex items-center gap-1 text-[#666666]">
                      <Target size={16} className="text-[#999999]" />
                      {study.role}
                    </span>
                  </div>

                  {/* CHALLENGE */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold tracking-[0.2em] text-[#FF8A5C] uppercase">
                      Challenge
                    </h4>
                    <p className="text-[#666666] text-base leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  {/* SOLUTION */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold tracking-[0.2em] text-[#FF8A5C] uppercase">
                      Solution
                    </h4>
                    <p className="text-[#666666] text-base leading-relaxed">
                      {study.solution}
                    </p>
                  </div>

                  {/* RESULTS */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold tracking-[0.2em] text-[#FF8A5C] uppercase">
                      Results
                    </h4>
                    <ul className="space-y-2">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-[#666666]">
                          <span className="text-[#FF8A5C] font-bold">→</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {study.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-white border border-[#CCCCCC]/30 rounded-full text-xs text-[#666666]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* LIVE LINK */}
                  <div className="pt-4">
                    <Link
                      href={study.liveLink}
                      target="_blank"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF8A5C] text-white rounded-full font-medium hover:bg-[#FF7A4A] transition-all duration-300 group/btn"
                    >
                      View Live Project
                      <ExternalLink size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* RIGHT SIDE - PROJECT IMAGE */}
                <div className="relative lg:sticky lg:top-28">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#CCCCCC]/30 shadow-xl group/image">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/50 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* DECORATIVE DOTS */}
                  <div className="absolute -top-4 -right-4 w-3 h-3 bg-[#FF8A5C] rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-2 h-2 bg-[#A0A0A0] rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ---------- TESTIMONIALS SECTION ---------- */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <span className="inline-block text-[#FF8A5C] text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              TESTIMONIALS
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
              What Clients Say
            </h3>
            <div className="w-16 h-1 bg-[#FF8A5C]/30 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="relative bg-white/60 backdrop-blur-sm border border-[#CCCCCC]/30 rounded-2xl p-8 hover:border-[#FF8A5C]/30 transition-all duration-500 group"
              >
                {/* QUOTE ICON */}
                <Quote size={32} className="absolute top-6 right-6 text-[#FF8A5C]/20 group-hover:text-[#FF8A5C]/30 transition-colors" />
                
                {/* RATING */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-[#FF8A5C] text-[#FF8A5C]" />
                  ))}
                </div>

                {/* CONTENT */}
                <p className="text-[#666666] text-base leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* AUTHOR */}
                <div>
                  <h4 className="text-[#333333] font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-[#999999]">{testimonial.role}</p>
                  <span className="inline-block mt-2 text-xs text-[#FF8A5C] font-medium">
                    {testimonial.project}
                  </span>
                </div>

                {/* DECORATIVE DOT */}
                <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-[#FF8A5C]/30 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- CTA - LET'S WORK TOGETHER ---------- */}
        <div className="mt-32 text-center">
          <div className="relative max-w-3xl mx-auto bg-white/60 backdrop-blur-sm border border-[#CCCCCC]/30 rounded-3xl p-12 hover:border-[#FF8A5C]/30 transition-all duration-500">
            <Zap size={40} className="mx-auto mb-6 text-[#FF8A5C]" />
            <h3 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-[#666666] text-lg mb-8 max-w-xl mx-auto">
              Let's create something amazing together. I'm currently available for freelance work.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF8A5C] text-white rounded-full font-semibold hover:bg-[#FF7A4A] transition-all duration-300 group"
            >
              Let's Talk
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}