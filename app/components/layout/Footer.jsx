"use client";

import { Heart, Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative w-full bg-[#E5E5E5] border-t border-[#CCCCCC]/30 py-16 overflow-hidden">
      {/* MINIMAL BACKGROUND */}
      <div className="absolute inset-0 bg-[#E5E5E5]"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.02) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-6">
        
        {/* ---------- MAIN FOOTER CONTENT ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          
          {/* BRAND - lg:col-span-4 */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="group inline-block">
              <span className="text-3xl font-black text-[#333333] tracking-tight">
                UROOJ<span className="text-[#FF8A5C]">.</span>
              </span>
              <span className="block text-sm text-[#666666] mt-2 group-hover:text-[#FF8A5C] transition-colors">
                Full Stack Developer & Web Designer
              </span>
            </Link>
            <p className="text-sm text-[#666666] leading-relaxed max-w-md pt-2">
              Creating modern, responsive web experiences with clean code and thoughtful design.
            </p>
            
            {/* AVAILABLE BADGE - MINI */}
            <div className="flex items-center gap-2 pt-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs text-[#666666]">Available for freelance</span>
            </div>
          </div>
          
          {/* QUICK LINKS - lg:col-span-2 */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold tracking-[0.2em] text-[#999999] uppercase mb-5">
              Navigate
            </h4>
            <ul className="space-y-3">
              {['HOME', 'SERVICES', 'PROJECTS', 'EXPERIENCES', 'CASE STUDY', 'CONTACT'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'HOME' ? '/' : `#${item.toLowerCase().replace(' ', '')}`}
                    className="text-sm text-[#666666] hover:text-[#FF8A5C] transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* CONTACT - lg:col-span-3 */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold tracking-[0.2em] text-[#999999] uppercase mb-5">
              Connect
            </h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:urooj.rasheed@email.com"
                  className="flex items-center gap-3 text-sm text-[#666666] hover:text-[#FF8A5C] transition-colors group"
                >
                  <span className="w-8 h-8 rounded-full bg-white/60 border border-[#CCCCCC]/30 flex items-center justify-center group-hover:bg-[#FF8A5C] group-hover:border-[#FF8A5C] transition-all duration-300">
                    <Mail size={14} className="text-[#666666] group-hover:text-white" />
                  </span>
                  urooj.rasheed@email.com
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-sm text-[#666666]">
                  <span className="w-8 h-8 rounded-full bg-white/60 border border-[#CCCCCC]/30 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-[#FF8A5C] rounded-full"></span>
                  </span>
                  Okara, Pakistan
                </span>
              </li>
            </ul>
            
            {/* SOCIAL LINKS */}
            <div className="flex items-center gap-3 mt-6">
              <a 
                href="#" 
                target="_blank"
                className="w-9 h-9 rounded-full bg-white/60 border border-[#CCCCCC]/30 flex items-center justify-center text-[#666666] hover:bg-[#FF8A5C] hover:text-white hover:border-[#FF8A5C] transition-all duration-300"
              >
                <Github size={16} />
              </a>
              <a 
                href="#" 
                target="_blank"
                className="w-9 h-9 rounded-full bg-white/60 border border-[#CCCCCC]/30 flex items-center justify-center text-[#666666] hover:bg-[#FF8A5C] hover:text-white hover:border-[#FF8A5C] transition-all duration-300"
              >
                <Linkedin size={16} />
              </a>
              <a 
                href="#" 
                target="_blank"
                className="w-9 h-9 rounded-full bg-white/60 border border-[#CCCCCC]/30 flex items-center justify-center text-[#666666] hover:bg-[#FF8A5C] hover:text-white hover:border-[#FF8A5C] transition-all duration-300"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>
          
          {/* QUOTE - lg:col-span-3 */}
          <div className="lg:col-span-3 bg-white/40 backdrop-blur-sm border border-[#CCCCCC]/30 rounded-2xl p-6">
            <h4 className="text-xs font-semibold tracking-[0.2em] text-[#999999] uppercase mb-3">
              Dev Quote
            </h4>
            <p className="text-sm text-[#666666] italic leading-relaxed">
              "First, solve the problem. Then, write the code."
            </p>
            <p className="text-xs text-[#999999] mt-3 flex items-center gap-1">
              <Heart size={12} className="text-[#FF8A5C]" />
              Urooj Rasheed
            </p>
          </div>
        </div>
        
        {/* ---------- BOTTOM BAR ---------- */}
        <div className="pt-8 mt-8 border-t border-[#CCCCCC]/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#999999]">
            © {currentYear} Urooj Rasheed. All rights reserved.
          </p>
          
          <p className="text-xs text-[#999999] flex items-center gap-2">
            <span>Designed & built with</span>
            <Heart size={12} className="text-[#FF8A5C] fill-[#FF8A5C] animate-pulse" />
            <span>using Next.js</span>
          </p>
          
          {/* BACK TO TOP */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-xs text-[#666666] hover:text-[#FF8A5C] transition-colors group"
          >
            <span>Back to top</span>
            <span className="w-7 h-7 rounded-full bg-white/60 border border-[#CCCCCC]/30 flex items-center justify-center group-hover:bg-[#FF8A5C] group-hover:border-[#FF8A5C] group-hover:text-white transition-all duration-300">
              <ArrowUp size={14} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}