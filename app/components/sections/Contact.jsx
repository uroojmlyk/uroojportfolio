// "use client";

// import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, Sparkles } from 'lucide-react'
// import Link from 'next/link'
// import { useState } from 'react'

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   })

//   return (
//     <section id="contact" className="relative w-full py-32 bg-[#E5E5E5] overflow-hidden">
//       {/* CLEAN BG */}
//       <div className="absolute inset-0 bg-[#E5E5E5]"></div>
      
//       {/* ELEGANT BACKGROUND ELEMENTS */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-20 right-20 w-96 h-96 bg-[#FF8A5C]/5 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FF8A5C]/5 rounded-full blur-3xl"></div>
        
//         {/* MINIMAL GRID */}
//         <div className="absolute inset-0" style={{
//           backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.02) 1px, transparent 0)`,
//           backgroundSize: '50px 50px'
//         }}></div>
//       </div>
      
//       <div className="relative z-20 max-w-7xl mx-auto px-6">
        
//         {/* ---------- SECTION HEADER - CLEAN ---------- */}
//         <div className="text-center mb-16">
//           <span className="inline-block text-[#FF8A5C] text-sm font-semibold tracking-[0.3em] uppercase mb-4">
//             GET IN TOUCH
//           </span>
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#333333] mb-6">
//             Let's Work Together
//           </h2>
//           <div className="w-24 h-1 bg-[#FF8A5C]/30 mx-auto rounded-full"></div>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          
//           {/* ---------- LEFT SIDE - INFO ---------- */}
//           <div className="space-y-10">
            
//             {/* AVAILABLE BADGE */}
//             <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-sm border border-[#CCCCCC]/30 rounded-full">
//               <span className="relative flex h-2.5 w-2.5">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
//               </span>
//               <span className="text-sm font-medium text-[#333333]">Available for freelance</span>
//               <Sparkles size={14} className="text-[#FF8A5C]" />
//             </div>
            
//             {/* HEADLINE */}
//             <div>
//               <h3 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
//                 Have a project in mind?
//               </h3>
//               <p className="text-[#666666] text-lg leading-relaxed">
//                 I'm currently available for freelance work and full-time opportunities. 
//                 Let's create something exceptional together.
//               </p>
//             </div>
            
//             {/* CONTACT INFO CARDS */}
//             <div className="space-y-4">
//               <div className="flex items-center gap-4 p-5 bg-white/60 backdrop-blur-sm border border-[#CCCCCC]/30 rounded-2xl hover:border-[#FF8A5C]/30 transition-all duration-500 group">
//                 <div className="w-12 h-12 rounded-full bg-[#FF8A5C]/10 flex items-center justify-center group-hover:bg-[#FF8A5C] transition-all duration-500">
//                   <Mail size={20} className="text-[#FF8A5C] group-hover:text-white transition-colors" />
//                 </div>
//                 <div>
//                   <span className="text-xs text-[#999999] uppercase tracking-wider">Email</span>
//                   <a href="mailto:urooj.rasheed@email.com" className="block text-[#333333] font-medium hover:text-[#FF8A5C] transition-colors">
//                     urooj.rasheed@email.com
//                   </a>
//                 </div>
//               </div>
              
//               <div className="flex items-center gap-4 p-5 bg-white/60 backdrop-blur-sm border border-[#CCCCCC]/30 rounded-2xl hover:border-[#FF8A5C]/30 transition-all duration-500 group">
//                 <div className="w-12 h-12 rounded-full bg-[#FF8A5C]/10 flex items-center justify-center group-hover:bg-[#FF8A5C] transition-all duration-500">
//                   <MapPin size={20} className="text-[#FF8A5C] group-hover:text-white transition-colors" />
//                 </div>
//                 <div>
//                   <span className="text-xs text-[#999999] uppercase tracking-wider">Location</span>
//                   <p className="text-[#333333] font-medium">Okara, Pakistan</p>
//                 </div>
//               </div>
//             </div>
            
//             {/* SOCIAL LINKS */}
//             <div className="pt-6">
//               <span className="text-xs text-[#999999] uppercase tracking-wider block mb-4">Connect with me</span>
//               <div className="flex items-center gap-3">
//                 <a 
//                   href="https://github.com/urooj" 
//                   target="_blank"
//                   className="w-12 h-12 rounded-full bg-white/60 backdrop-blur-sm border border-[#CCCCCC]/30 flex items-center justify-center text-[#666666] hover:bg-[#FF8A5C] hover:text-white hover:border-[#FF8A5C] transition-all duration-500"
//                 >
//                   <Github size={20} />
//                 </a>
//                 <a 
//                   href="https://linkedin.com/in/urooj" 
//                   target="_blank"
//                   className="w-12 h-12 rounded-full bg-white/60 backdrop-blur-sm border border-[#CCCCCC]/30 flex items-center justify-center text-[#666666] hover:bg-[#FF8A5C] hover:text-white hover:border-[#FF8A5C] transition-all duration-500"
//                 >
//                   <Linkedin size={20} />
//                 </a>
//                 <a 
//                   href="https://twitter.com/urooj" 
//                   target="_blank"
//                   className="w-12 h-12 rounded-full bg-white/60 backdrop-blur-sm border border-[#CCCCCC]/30 flex items-center justify-center text-[#666666] hover:bg-[#FF8A5C] hover:text-white hover:border-[#FF8A5C] transition-all duration-500"
//                 >
//                   <Twitter size={20} />
//                 </a>
//               </div>
//             </div>
            
//             {/* QUOTE */}
//             <div className="pt-6">
//               <p className="text-sm text-[#999999] italic border-l-2 border-[#FF8A5C]/30 pl-4">
//                 "First, solve the problem. Then, write the code."
//               </p>
//               <span className="text-xs text-[#CCCCCC] mt-2 block">— Urooj Rasheed</span>
//             </div>
//           </div>
          
//           {/* ---------- RIGHT SIDE - CONTACT FORM (ELEGANT) ---------- */}
//           <div className="relative">
//             <div className="bg-white/70 backdrop-blur-xl border border-[#CCCCCC]/30 rounded-3xl p-8 md:p-10 shadow-2xl shadow-black/5">
              
//               {/* FORM HEADER */}
//               <div className="mb-8">
//                 <h4 className="text-2xl font-bold text-[#333333] mb-2">Send a message</h4>
//                 <p className="text-sm text-[#666666]">I'll get back to you within 24 hours</p>
//               </div>
              
//               {/* FORM */}
//               <form className="space-y-6">
//                 {/* NAME */}
//                 <div className="space-y-2">
//                   <label className="text-xs font-medium text-[#666666] uppercase tracking-wider">
//                     Your name
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="John Doe"
//                     className="w-full px-5 py-4 bg-white border border-[#CCCCCC]/50 rounded-2xl text-[#333333] placeholder:text-[#999999] focus:outline-none focus:border-[#FF8A5C] focus:ring-1 focus:ring-[#FF8A5C]/20 transition-all duration-300"
//                   />
//                 </div>
                
//                 {/* EMAIL */}
//                 <div className="space-y-2">
//                   <label className="text-xs font-medium text-[#666666] uppercase tracking-wider">
//                     Email address
//                   </label>
//                   <input
//                     type="email"
//                     placeholder="hello@example.com"
//                     className="w-full px-5 py-4 bg-white border border-[#CCCCCC]/50 rounded-2xl text-[#333333] placeholder:text-[#999999] focus:outline-none focus:border-[#FF8A5C] focus:ring-1 focus:ring-[#FF8A5C]/20 transition-all duration-300"
//                   />
//                 </div>
                
//                 {/* MESSAGE */}
//                 <div className="space-y-2">
//                   <label className="text-xs font-medium text-[#666666] uppercase tracking-wider">
//                     Your message
//                   </label>
//                   <textarea
//                     rows={5}
//                     placeholder="Tell me about your project..."
//                     className="w-full px-5 py-4 bg-white border border-[#CCCCCC]/50 rounded-2xl text-[#333333] placeholder:text-[#999999] focus:outline-none focus:border-[#FF8A5C] focus:ring-1 focus:ring-[#FF8A5C]/20 transition-all duration-300 resize-none"
//                   ></textarea>
//                 </div>
                
//                 {/* SUBMIT BUTTON */}
//                 <button
//                   type="submit"
//                   className="group relative w-full px-8 py-5 bg-[#FF8A5C] text-white rounded-2xl font-semibold overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,138,92,0.3)] hover:scale-[1.02]"
//                 >
//                   <span className="relative z-10 flex items-center justify-center gap-3">
//                     Send Message
//                     <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
//                   </span>
//                   <div className="absolute inset-0 bg-gradient-to-r from-[#FF8A5C] to-[#FF6B4A] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                 </button>
                
//                 {/* PRIVACY NOTE */}
//                 <p className="text-xs text-center text-[#999999] mt-4">
//                   Your information is safe. I'll never share your details.
//                 </p>
//               </form>
//             </div>
            
//             {/* DECORATIVE ELEMENTS */}
//             <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#FF8A5C]/5 rounded-full blur-2xl -z-10"></div>
//             <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[#FF8A5C]/5 rounded-full blur-2xl -z-10"></div>
//           </div>
//         </div>
        
//         {/* ---------- FOOTER NOTE ---------- */}
//         <div className="mt-24 text-center">
//           <p className="text-sm text-[#999999]">
//             © {new Date().getFullYear()} Urooj Rasheed. All rights reserved.
//           </p>
//           <p className="text-xs text-[#CCCCCC] mt-2">
//             Designed & built with ❤️ using Next.js
//           </p>
//         </div>
//       </div>
//     </section>
//   )
// } 








"use client";

import { Mail, MapPin, Send, Github, Linkedin, Twitter, Sparkles, Heart } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  return (
    <section id="contact" className="relative w-full py-32 bg-[#E5E5E5] overflow-hidden">
      {/* CLEAN BG */}
      <div className="absolute inset-0 bg-[#E5E5E5]"></div>
      
      {/* ELEGANT BACKGROUND ELEMENTS - ENHANCED */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#FF8A5C]/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FF8A5C]/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF8A5C]/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-6">
        
        {/* ---------- SECTION HEADER - MODERN STYLE ---------- */}
        <div className="text-center mb-16 animate-fadeIn">
          <span className="inline-block text-[#FF8A5C] text-sm font-light tracking-[0.4em] uppercase mb-6 font-['Inter']">
            GET IN TOUCH
          </span>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-[#FF8A5C]/30"></div>
            <span className="text-[#FF8A5C] text-xs font-light tracking-[0.3em]">✦</span>
            <div className="w-12 h-[1px] bg-[#FF8A5C]/30"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#333333] mb-6 font-['Inter'] tracking-[-0.02em]">
            Let's Work Together
          </h2>
          
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="w-2 h-2 rounded-full bg-[#FF8A5C]/40"></span>
            <span className="w-12 h-[1px] bg-[#FF8A5C]/20"></span>
            <span className="w-2 h-2 rounded-full bg-[#FF8A5C]/40"></span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          
          {/* ---------- LEFT SIDE - INFO (GLASSMORPHISM) ---------- */}
          <div className="space-y-8 animate-slideInLeft">
            
            {/* AVAILABLE BADGE - MODERN */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/40 backdrop-blur-xl border border-white/50 rounded-full shadow-lg">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-sm font-light text-[#333333] font-['Inter']">Available for freelance</span>
              <Sparkles size={14} className="text-[#FF8A5C]" />
            </div>
            
            {/* HEADLINE */}
            <div>
              <h3 className="text-3xl md:text-4xl font-light text-[#333333] mb-4 font-['Inter'] tracking-[-0.02em]">
                Have a project in mind?
              </h3>
              <p className="text-[#666666] text-lg font-light leading-relaxed font-['Inter']">
                I'm currently available for freelance work and full-time opportunities. 
                Let's create something exceptional together.
              </p>
            </div>
            
            {/* CONTACT INFO CARDS - ULTRA GLASSMORPHISM */}
            <div className="space-y-4">
              <div className="group flex items-center gap-4 p-5 bg-white/30 backdrop-blur-xl border border-white/50 rounded-2xl hover:border-[#FF8A5C]/30 hover:bg-white/40 transition-all duration-500 shadow-lg hover:shadow-xl">
                <div className="w-12 h-12 rounded-full bg-[#FF8A5C]/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#FF8A5C] transition-all duration-500">
                  <Mail size={20} className="text-[#FF8A5C] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="text-xs font-light text-[#999999] uppercase tracking-wider font-['Inter']">Email</span>
                  <a href="mailto:urooj.rasheed@email.com" className="block text-[#333333] font-light hover:text-[#FF8A5C] transition-colors font-['Inter']">
                    uroojr335@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="group flex items-center gap-4 p-5 bg-white/30 backdrop-blur-xl border border-white/50 rounded-2xl hover:border-[#FF8A5C]/30 hover:bg-white/40 transition-all duration-500 shadow-lg hover:shadow-xl">
                <div className="w-12 h-12 rounded-full bg-[#FF8A5C]/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#FF8A5C] transition-all duration-500">
                  <MapPin size={20} className="text-[#FF8A5C] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="text-xs font-light text-[#999999] uppercase tracking-wider font-['Inter']">Location</span>
                  <p className="text-[#333333] font-light font-['Inter']">Okara, Pakistan</p>
                </div>
              </div>
            </div>
            
            {/* SOCIAL LINKS - GLASSMORPHISM */}
            <div className="pt-4">
              <span className="text-xs font-light text-[#999999] uppercase tracking-wider block mb-4 font-['Inter']">Connect with me</span>
              <div className="flex items-center gap-3">
                {[
                  { icon: Github, href: 'https://github.com/urooj', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://linkedin.com/in/urooj', label: 'LinkedIn' },
                  { icon: Twitter, href: 'https://twitter.com/urooj', label: 'Twitter' }
                ].map((social) => (
                  <a 
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    className="relative w-12 h-12 rounded-full bg-white/30 backdrop-blur-xl border border-white/50 flex items-center justify-center text-[#666666] hover:bg-[#FF8A5C] hover:text-white hover:border-[#FF8A5C] transition-all duration-500 group overflow-hidden"
                  >
                    <social.icon size={20} className="relative z-10" />
                    <span className="absolute inset-0 bg-gradient-to-r from-[#FF8A5C] to-[#FF6B4A] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                  </a>
                ))}
              </div>
            </div>
            
            {/* QUOTE - GLASSMORPHISM */}
            <div className="pt-4">
              <div className="bg-white/20 backdrop-blur-xl border border-white/50 rounded-2xl p-6 shadow-lg">
                <p className="text-sm text-[#666666] font-light italic leading-relaxed font-['Inter']">
                  "First, solve the problem. Then, write the code."
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <Heart size={12} className="text-[#FF8A5C] fill-[#FF8A5C]" />
                  <span className="text-xs font-light text-[#999999] font-['Inter']">— Urooj Rasheed</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* ---------- RIGHT SIDE - CONTACT FORM (OUTSTANDING GLASSMORPHISM) ---------- */}
          <div className="relative animate-slideInRight">
            {/* MAIN FORM CARD - ULTRA GLASSMORPHISM */}
            <div className="relative bg-white/20 backdrop-blur-2xl border border-white/50 rounded-3xl p-8 md:p-10 shadow-2xl overflow-hidden group/form">
              
              {/* ANIMATED GRADIENT BACKGROUND */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF8A5C]/5 via-transparent to-[#FF8A5C]/5 opacity-0 group-hover/form:opacity-100 transition-opacity duration-700"></div>
              
              {/* FORM HEADER */}
              <div className="relative z-10 mb-8">
                <h4 className="text-2xl md:text-3xl font-light text-[#333333] mb-2 font-['Inter'] tracking-[-0.02em]">
                  Send a message
                </h4>
                <div className="flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-[#FF8A5C]/30"></span>
                  <p className="text-sm font-light text-[#666666] font-['Inter']">I'll get back to you within 24 hours</p>
                </div>
              </div>
              
              {/* FORM - ULTRA MODERN */}
              <form className="relative z-10 space-y-6">
                {/* NAME - GLASS INPUT */}
                <div className="space-y-2">
                  <label className="text-xs font-light text-[#666666] uppercase tracking-wider font-['Inter'] ml-1">
                    Your name
                  </label>
                  <div className="relative group/input">
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-6 py-4 bg-white/30 backdrop-blur-md border border-white/50 rounded-2xl text-[#333333] placeholder:text-[#999999] font-light font-['Inter'] focus:outline-none focus:border-[#FF8A5C] focus:bg-white/40 focus:ring-2 focus:ring-[#FF8A5C]/20 transition-all duration-500"
                    />
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#FF8A5C] to-[#FF6B4A] scale-x-0 group-focus-within/input:scale-x-100 transition-transform duration-500 rounded-full"></span>
                  </div>
                </div>
                
                {/* EMAIL - GLASS INPUT */}
                <div className="space-y-2">
                  <label className="text-xs font-light text-[#666666] uppercase tracking-wider font-['Inter'] ml-1">
                    Email address
                  </label>
                  <div className="relative group/input">
                    <input
                      type="email"
                      placeholder="hello@example.com"
                      className="w-full px-6 py-4 bg-white/30 backdrop-blur-md border border-white/50 rounded-2xl text-[#333333] placeholder:text-[#999999] font-light font-['Inter'] focus:outline-none focus:border-[#FF8A5C] focus:bg-white/40 focus:ring-2 focus:ring-[#FF8A5C]/20 transition-all duration-500"
                    />
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#FF8A5C] to-[#FF6B4A] scale-x-0 group-focus-within/input:scale-x-100 transition-transform duration-500 rounded-full"></span>
                  </div>
                </div>
                
                {/* MESSAGE - GLASS TEXTAREA */}
                <div className="space-y-2">
                  <label className="text-xs font-light text-[#666666] uppercase tracking-wider font-['Inter'] ml-1">
                    Your message
                  </label>
                  <div className="relative group/input">
                    <textarea
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="w-full px-6 py-4 bg-white/30 backdrop-blur-md border border-white/50 rounded-2xl text-[#333333] placeholder:text-[#999999] font-light font-['Inter'] focus:outline-none focus:border-[#FF8A5C] focus:bg-white/40 focus:ring-2 focus:ring-[#FF8A5C]/20 transition-all duration-500 resize-none"
                    ></textarea>
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#FF8A5C] to-[#FF6B4A] scale-x-0 group-focus-within/input:scale-x-100 transition-transform duration-500 rounded-full"></span>
                  </div>
                </div>
                
                {/* SUBMIT BUTTON - ULTRA MODERN */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="group/btn relative w-full px-8 py-5 bg-gradient-to-r from-[#FF8A5C] to-[#FF6B4A] text-white rounded-2xl font-light tracking-[0.05em] overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,138,92,0.5)] hover:scale-[1.02] font-['Inter']"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Send Message
                      <Send size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-[#FF6B4A] to-[#FF8A5C] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></span>
                    <span className="absolute inset-0 bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></span>
                  </button>
                </div>
                
                {/* PRIVACY NOTE */}
                <p className="text-xs text-center text-[#999999] font-light font-['Inter'] mt-6">
                  Your information is safe. I'll never share your details.
                </p>
              </form>
              
              {/* DECORATIVE CORNER ELEMENTS */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-[#FF8A5C]/20 to-transparent rounded-tl-3xl"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#FF8A5C]/20 to-transparent rounded-br-3xl"></div>
            </div>
            
            {/* FLOATING DECORATIVE ELEMENTS */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#FF8A5C]/10 rounded-full blur-2xl animate-pulse-slow"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-[#FF8A5C]/10 rounded-full blur-2xl animate-pulse-slow delay-700"></div>
          </div>
        </div>
        
        {/* ---------- FOOTER NOTE - MODERN ---------- */}
        <div className="mt-24 text-center animate-fadeIn">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-xl border border-white/50 rounded-full">
            <span className="text-sm font-light text-[#666666] font-['Inter']">
              © {new Date().getFullYear()} Urooj Rasheed. All rights reserved.
            </span>
          </div>
          <p className="text-xs font-light text-[#999999] mt-4 font-['Inter'] flex items-center justify-center gap-2">
            <span>Designed & built with</span>
            <Heart size={12} className="text-[#FF8A5C] fill-[#FF8A5C] animate-pulse" />
            <span>using Next.js</span>
          </p>
        </div>
        
        {/* BOTTOM DECORATIVE LINE */}
        <div className="flex items-center justify-center gap-4 mt-16">
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
        
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .delay-700 {
          animation-delay: 0.7s;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  )
}