



"use client";

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Scroll effect for transparency
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'HOME', hash: '/' },
    { name: 'SERVICES', hash: '#services' },
    { name: 'PROJECTS', hash: '#projects' },
    { name: 'EXPERIENCES', hash: '#experiences' },
    { name: 'CASE STUDY', hash: '#casestudy' },
    { name: 'CONTACT', hash: '#contact' }  
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-[#E5E5E5]/90 backdrop-blur-md shadow-lg' 
        : 'bg-[#E5E5E5]/30 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          
          {/* ---------- LOGO - LEFT SIDE ---------- */}
          <Link href="/" className="group relative">
            <span className="text-2xl lg:text-3xl font-bold tracking-tight text-[#333333]">
              UROOJ<span className="text-[#FF8A5C]">.</span>
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF8A5C] group-hover:w-full transition-all duration-300"></span>
          </Link>

          {/* ---------- MENU ICON - RIGHT SIDE ---------- */}
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-[#CCCCCC]/30 flex items-center justify-center hover:bg-[#FF8A5C]/10 hover:border-[#FF8A5C]/50 transition-all duration-300 group"
            >
              <Menu size={20} className="text-[#4A4A4A] group-hover:text-[#FF8A5C] transition-colors" />
            </button>

            {/* DROPDOWN MENU - RIGHT SIDE */}
            {isOpen && (
              <div className="absolute top-14 right-0 w-64 bg-[#E5E5E5]/95 backdrop-blur-xl rounded-2xl border border-[#CCCCCC]/30 shadow-xl overflow-hidden animate-fadeIn">
                <div className="p-2">
                  <div className="px-4 py-3 border-b border-[#CCCCCC]/20">
                    <span className="text-xs font-medium tracking-[0.2em] text-[#666666] uppercase">Navigation</span>
                  </div>
                  <div className="py-2">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.hash}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center px-4 py-3 text-sm text-[#4A4A4A] hover:text-[#FF8A5C] hover:bg-white/30 rounded-xl transition-all duration-200 group"
                      >
                        <span className="w-1 h-1 bg-[#CCCCCC] rounded-full group-hover:bg-[#FF8A5C] group-hover:w-2 transition-all duration-300 mr-3"></span>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="px-4 py-3 bg-white/20 rounded-xl mt-2">
                    <span className="text-xs text-[#666666] block">Available for freelance</span>
                    <span className="text-[10px] text-[#FF8A5C] font-medium">Let's work together →</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </nav>
  )
}