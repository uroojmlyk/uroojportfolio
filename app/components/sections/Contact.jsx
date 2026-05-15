



// "use client";

// import { Mail, MapPin, Send, Github, Linkedin, Twitter, Sparkles, Heart } from 'lucide-react'
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
      
//       {/* ELEGANT BACKGROUND ELEMENTS - ENHANCED */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-20 right-20 w-96 h-96 bg-[#FF8A5C]/10 rounded-full blur-3xl animate-pulse-slow"></div>
//         <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FF8A5C]/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF8A5C]/5 rounded-full blur-3xl"></div>
//       </div>
      
//       <div className="relative z-20 max-w-7xl mx-auto px-6">
        
//         {/* ---------- SECTION HEADER - MODERN STYLE ---------- */}
//         <div className="text-center mb-16 animate-fadeIn">
//           <span className="inline-block text-[#FF8A5C] text-sm font-light tracking-[0.4em] uppercase mb-6 font-['Inter']">
//             GET IN TOUCH
//           </span>
          
//           <div className="flex items-center justify-center gap-3 mb-6">
//             <div className="w-12 h-[1px] bg-[#FF8A5C]/30"></div>
//             <span className="text-[#FF8A5C] text-xs font-light tracking-[0.3em]">✦</span>
//             <div className="w-12 h-[1px] bg-[#FF8A5C]/30"></div>
//           </div>
          
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#333333] mb-6 font-['Inter'] tracking-[-0.02em]">
//             Let's Work Together
//           </h2>
          
//           <div className="flex items-center justify-center gap-2 mt-4">
//             <span className="w-2 h-2 rounded-full bg-[#FF8A5C]/40"></span>
//             <span className="w-12 h-[1px] bg-[#FF8A5C]/20"></span>
//             <span className="w-2 h-2 rounded-full bg-[#FF8A5C]/40"></span>
//           </div>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          
//           {/* ---------- LEFT SIDE - INFO (GLASSMORPHISM) ---------- */}
//           <div className="space-y-8 animate-slideInLeft">
            
//             {/* AVAILABLE BADGE - MODERN */}
//             <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/40 backdrop-blur-xl border border-white/50 rounded-full shadow-lg">
//               <span className="relative flex h-2.5 w-2.5">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
//               </span>
//               <span className="text-sm font-light text-[#333333] font-['Inter']">Available for freelance</span>
//               <Sparkles size={14} className="text-[#FF8A5C]" />
//             </div>
            
//             {/* HEADLINE */}
//             <div>
//               <h3 className="text-3xl md:text-4xl font-light text-[#333333] mb-4 font-['Inter'] tracking-[-0.02em]">
//                 Have a project in mind?
//               </h3>
//               <p className="text-[#666666] text-lg font-light leading-relaxed font-['Inter']">
//                 I'm currently available for freelance work and full-time opportunities. 
//                 Let's create something exceptional together.
//               </p>
//             </div>
            
//             {/* CONTACT INFO CARDS - ULTRA GLASSMORPHISM */}
//             <div className="space-y-4">
//               <div className="group flex items-center gap-4 p-5 bg-white/30 backdrop-blur-xl border border-white/50 rounded-2xl hover:border-[#FF8A5C]/30 hover:bg-white/40 transition-all duration-500 shadow-lg hover:shadow-xl">
//                 <div className="w-12 h-12 rounded-full bg-[#FF8A5C]/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#FF8A5C] transition-all duration-500">
//                   <Mail size={20} className="text-[#FF8A5C] group-hover:text-white transition-colors" />
//                 </div>
//                 <div>
//                   <span className="text-xs font-light text-[#999999] uppercase tracking-wider font-['Inter']">Email</span>
//                   <a href="mailto:urooj.rasheed@email.com" className="block text-[#333333] font-light hover:text-[#FF8A5C] transition-colors font-['Inter']">
//                     uroojr335@gmail.com
//                   </a>
//                 </div>
//               </div>
              
//               <div className="group flex items-center gap-4 p-5 bg-white/30 backdrop-blur-xl border border-white/50 rounded-2xl hover:border-[#FF8A5C]/30 hover:bg-white/40 transition-all duration-500 shadow-lg hover:shadow-xl">
//                 <div className="w-12 h-12 rounded-full bg-[#FF8A5C]/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#FF8A5C] transition-all duration-500">
//                   <MapPin size={20} className="text-[#FF8A5C] group-hover:text-white transition-colors" />
//                 </div>
//                 <div>
//                   <span className="text-xs font-light text-[#999999] uppercase tracking-wider font-['Inter']">Location</span>
//                   <p className="text-[#333333] font-light font-['Inter']">Okara, Pakistan</p>
//                 </div>
//               </div>
//             </div>
            
//             {/* SOCIAL LINKS - GLASSMORPHISM */}
//             <div className="pt-4">
//               <span className="text-xs font-light text-[#999999] uppercase tracking-wider block mb-4 font-['Inter']">Connect with me</span>
//               <div className="flex items-center gap-3">
//                 {[
//                   { icon: Github, href: 'https://github.com/urooj', label: 'GitHub' },
//                   { icon: Linkedin, href: 'https://linkedin.com/in/urooj', label: 'LinkedIn' },
//                   { icon: Twitter, href: 'https://twitter.com/urooj', label: 'Twitter' }
//                 ].map((social) => (
//                   <a 
//                     key={social.label}
//                     href={social.href}
//                     target="_blank"
//                     className="relative w-12 h-12 rounded-full bg-white/30 backdrop-blur-xl border border-white/50 flex items-center justify-center text-[#666666] hover:bg-[#FF8A5C] hover:text-white hover:border-[#FF8A5C] transition-all duration-500 group overflow-hidden"
//                   >
//                     <social.icon size={20} className="relative z-10" />
//                     <span className="absolute inset-0 bg-gradient-to-r from-[#FF8A5C] to-[#FF6B4A] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
//                   </a>
//                 ))}
//               </div>
//             </div>
            
//             {/* QUOTE - GLASSMORPHISM */}
//             <div className="pt-4">
//               <div className="bg-white/20 backdrop-blur-xl border border-white/50 rounded-2xl p-6 shadow-lg">
//                 <p className="text-sm text-[#666666] font-light italic leading-relaxed font-['Inter']">
//                   "First, solve the problem. Then, write the code."
//                 </p>
//                 <div className="flex items-center gap-2 mt-3">
//                   <Heart size={12} className="text-[#FF8A5C] fill-[#FF8A5C]" />
//                   <span className="text-xs font-light text-[#999999] font-['Inter']">— Urooj Rasheed</span>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* ---------- RIGHT SIDE - CONTACT FORM (OUTSTANDING GLASSMORPHISM) ---------- */}
//           <div className="relative animate-slideInRight">
//             {/* MAIN FORM CARD - ULTRA GLASSMORPHISM */}
//             <div className="relative bg-white/20 backdrop-blur-2xl border border-white/50 rounded-3xl p-8 md:p-10 shadow-2xl overflow-hidden group/form">
              
//               {/* ANIMATED GRADIENT BACKGROUND */}
//               <div className="absolute inset-0 bg-gradient-to-br from-[#FF8A5C]/5 via-transparent to-[#FF8A5C]/5 opacity-0 group-hover/form:opacity-100 transition-opacity duration-700"></div>
              
//               {/* FORM HEADER */}
//               <div className="relative z-10 mb-8">
//                 <h4 className="text-2xl md:text-3xl font-light text-[#333333] mb-2 font-['Inter'] tracking-[-0.02em]">
//                   Send a message
//                 </h4>
//                 <div className="flex items-center gap-2">
//                   <span className="w-8 h-[1px] bg-[#FF8A5C]/30"></span>
//                   <p className="text-sm font-light text-[#666666] font-['Inter']">I'll get back to you within 24 hours</p>
//                 </div>
//               </div>
              
//               {/* FORM - ULTRA MODERN */}
//               <form className="relative z-10 space-y-6">
//                 {/* NAME - GLASS INPUT */}
//                 <div className="space-y-2">
//                   <label className="text-xs font-light text-[#666666] uppercase tracking-wider font-['Inter'] ml-1">
//                     Your name
//                   </label>
//                   <div className="relative group/input">
//                     <input
//                       type="text"
//                       placeholder="John Doe"
//                       className="w-full px-6 py-4 bg-white/30 backdrop-blur-md border border-white/50 rounded-2xl text-[#333333] placeholder:text-[#999999] font-light font-['Inter'] focus:outline-none focus:border-[#FF8A5C] focus:bg-white/40 focus:ring-2 focus:ring-[#FF8A5C]/20 transition-all duration-500"
//                     />
//                     <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#FF8A5C] to-[#FF6B4A] scale-x-0 group-focus-within/input:scale-x-100 transition-transform duration-500 rounded-full"></span>
//                   </div>
//                 </div>
                
//                 {/* EMAIL - GLASS INPUT */}
//                 <div className="space-y-2">
//                   <label className="text-xs font-light text-[#666666] uppercase tracking-wider font-['Inter'] ml-1">
//                     Email address
//                   </label>
//                   <div className="relative group/input">
//                     <input
//                       type="email"
//                       placeholder="hello@example.com"
//                       className="w-full px-6 py-4 bg-white/30 backdrop-blur-md border border-white/50 rounded-2xl text-[#333333] placeholder:text-[#999999] font-light font-['Inter'] focus:outline-none focus:border-[#FF8A5C] focus:bg-white/40 focus:ring-2 focus:ring-[#FF8A5C]/20 transition-all duration-500"
//                     />
//                     <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#FF8A5C] to-[#FF6B4A] scale-x-0 group-focus-within/input:scale-x-100 transition-transform duration-500 rounded-full"></span>
//                   </div>
//                 </div>
                
//                 {/* MESSAGE - GLASS TEXTAREA */}
//                 <div className="space-y-2">
//                   <label className="text-xs font-light text-[#666666] uppercase tracking-wider font-['Inter'] ml-1">
//                     Your message
//                   </label>
//                   <div className="relative group/input">
//                     <textarea
//                       rows={5}
//                       placeholder="Tell me about your project..."
//                       className="w-full px-6 py-4 bg-white/30 backdrop-blur-md border border-white/50 rounded-2xl text-[#333333] placeholder:text-[#999999] font-light font-['Inter'] focus:outline-none focus:border-[#FF8A5C] focus:bg-white/40 focus:ring-2 focus:ring-[#FF8A5C]/20 transition-all duration-500 resize-none"
//                     ></textarea>
//                     <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#FF8A5C] to-[#FF6B4A] scale-x-0 group-focus-within/input:scale-x-100 transition-transform duration-500 rounded-full"></span>
//                   </div>
//                 </div>
                
//                 {/* SUBMIT BUTTON - ULTRA MODERN */}
//                 <div className="pt-4">
//                   <button
//                     type="submit"
//                     className="group/btn relative w-full px-8 py-5 bg-gradient-to-r from-[#FF8A5C] to-[#FF6B4A] text-white rounded-2xl font-light tracking-[0.05em] overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,138,92,0.5)] hover:scale-[1.02] font-['Inter']"
//                   >
//                     <span className="relative z-10 flex items-center justify-center gap-3">
//                       Send Message
//                       <Send size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
//                     </span>
//                     <span className="absolute inset-0 bg-gradient-to-r from-[#FF6B4A] to-[#FF8A5C] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></span>
//                     <span className="absolute inset-0 bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></span>
//                   </button>
//                 </div>
                
//                 {/* PRIVACY NOTE */}
//                 <p className="text-xs text-center text-[#999999] font-light font-['Inter'] mt-6">
//                   Your information is safe. I'll never share your details.
//                 </p>
//               </form>
              
//               {/* DECORATIVE CORNER ELEMENTS */}
//               <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-[#FF8A5C]/20 to-transparent rounded-tl-3xl"></div>
//               <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#FF8A5C]/20 to-transparent rounded-br-3xl"></div>
//             </div>
            
//             {/* FLOATING DECORATIVE ELEMENTS */}
//             <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#FF8A5C]/10 rounded-full blur-2xl animate-pulse-slow"></div>
//             <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-[#FF8A5C]/10 rounded-full blur-2xl animate-pulse-slow delay-700"></div>
//           </div>
//         </div>
        
//         {/* ---------- FOOTER NOTE - MODERN ---------- */}
//         <div className="mt-24 text-center animate-fadeIn">
//           <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-xl border border-white/50 rounded-full">
//             <span className="text-sm font-light text-[#666666] font-['Inter']">
//               © {new Date().getFullYear()} Urooj Rasheed. All rights reserved.
//             </span>
//           </div>
//           <p className="text-xs font-light text-[#999999] mt-4 font-['Inter'] flex items-center justify-center gap-2">
//             <span>Designed & built with</span>
//             <Heart size={12} className="text-[#FF8A5C] fill-[#FF8A5C] animate-pulse" />
//             <span>using Next.js</span>
//           </p>
//         </div>
        
//         {/* BOTTOM DECORATIVE LINE */}
//         <div className="flex items-center justify-center gap-4 mt-16">
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
        
//         @keyframes slideInLeft {
//           from { opacity: 0; transform: translateX(-30px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
        
//         @keyframes slideInRight {
//           from { opacity: 0; transform: translateX(30px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
        
//         @keyframes pulse-slow {
//           0%, 100% { opacity: 0.5; transform: scale(1); }
//           50% { opacity: 0.8; transform: scale(1.1); }
//         }
        
//         .animate-fadeIn {
//           animation: fadeIn 0.8s ease-out forwards;
//         }
        
//         .animate-slideInLeft {
//           animation: slideInLeft 0.8s ease-out forwards;
//         }
        
//         .animate-slideInRight {
//           animation: slideInRight 0.8s ease-out forwards;
//         }
        
//         .animate-pulse-slow {
//           animation: pulse-slow 3s ease-in-out infinite;
//         }
        
//         .delay-700 {
//           animation-delay: 0.7s;
//         }
        
//         .delay-1000 {
//           animation-delay: 1s;
//         }
//       `}</style>
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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitting(false)
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 1000)
  }

  return (
    <section id="contact" className="relative w-full min-h-screen bg-[#E5E5E5] overflow-x-hidden">
      {/* CLEAN BG */}
      <div className="absolute inset-0 bg-[#E5E5E5]"></div>
      
      {/* REDUCED BACKGROUND ORBS - ONLY ONE */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-80 h-80 bg-[#FF8A5C]/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
        
        {/* SECTION HEADER - MINIMAL */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-[#FF8A5C] text-xs sm:text-sm font-medium tracking-[0.3em] uppercase mb-4">
            GET IN TOUCH
          </span>
          
          <div className="w-12 h-[1px] bg-[#FF8A5C]/40 mx-auto mb-6"></div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#333333] mb-4 tracking-[-0.02em]">
            Let's Work Together
          </h2>
          
          <p className="text-[#666666] text-base max-w-2xl mx-auto font-normal">
            Available for freelance work and full-time opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          
          {/* LEFT SIDE - INFO (SIMPLIFIED) */}
          <div className="space-y-6">
            
            {/* AVAILABLE BADGE */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#E0E0E0] rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium text-[#333333]">Available for freelance</span>
              <Sparkles size={12} className="text-[#FF8A5C]" />
            </div>
            
            {/* HEADLINE */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-medium text-[#333333] mb-3 tracking-[-0.02em]">
                Have a project in mind?
              </h3>
              <p className="text-[#666666] text-base leading-relaxed">
                I build modern full-stack web applications focused on performance, usability, and clean UI.
              </p>
            </div>
            
            {/* CONTACT INFO - CLEAN CARDS */}
            <div className="space-y-3">
              <div className="flex items-center gap-4 p-4 bg-white border border-[#E0E0E0] rounded-xl hover:border-[#FF8A5C]/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-[#FF8A5C]/10 flex items-center justify-center">
                  <Mail size={18} className="text-[#FF8A5C]" />
                </div>
                <div>
                  <span className="text-xs text-[#999999] uppercase tracking-wider">Email</span>
                  <a href="mailto:uroojr335@gmail.com" className="block text-[#333333] text-sm hover:text-[#FF8A5C] transition-colors">
                    uroojr335@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-white border border-[#E0E0E0] rounded-xl hover:border-[#FF8A5C]/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-[#FF8A5C]/10 flex items-center justify-center">
                  <MapPin size={18} className="text-[#FF8A5C]" />
                </div>
                <div>
                  <span className="text-xs text-[#999999] uppercase tracking-wider">Location</span>
                  <p className="text-[#333333] text-sm">Okara, Pakistan</p>
                </div>
              </div>
            </div>
            
            {/* SOCIAL LINKS - REAL LINKS NEEDED */}
            <div className="pt-2">
              <span className="text-xs text-[#999999] uppercase tracking-wider block mb-3">Connect</span>
              <div className="flex items-center gap-2">
                <a 
                  href="https://github.com/uroojmlyk"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="w-10 h-10 rounded-lg bg-white border border-[#E0E0E0] flex items-center justify-center text-[#666666] hover:bg-[#FF8A5C] hover:text-white hover:border-[#FF8A5C] transition-all duration-300"
                >
                  <Github size={18} />
                </a>
                <a 
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-10 h-10 rounded-lg bg-white border border-[#E0E0E0] flex items-center justify-center text-[#666666] hover:bg-[#FF8A5C] hover:text-white hover:border-[#FF8A5C] transition-all duration-300"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter Profile"
                  className="w-10 h-10 rounded-lg bg-white border border-[#E0E0E0] flex items-center justify-center text-[#666666] hover:bg-[#FF8A5C] hover:text-white hover:border-[#FF8A5C] transition-all duration-300"
                >
                  <Twitter size={18} />
                </a>
              </div>
              <p className="text-xs text-[#999999] mt-2">GitHub: @uroojmlyk • More links coming soon</p>
            </div>
            
            {/* QUOTE - SIMPLIFIED */}
            <div className="pt-4">
              <div className="border-l-2 border-[#FF8A5C] pl-4 py-2">
                <p className="text-sm text-[#666666] italic leading-relaxed">
                  "First, solve the problem. Then, write the code."
                </p>
                <p className="text-xs text-[#999999] mt-2">— John Johnson</p>
              </div>
            </div>
          </div>
          
          {/* RIGHT SIDE - CONTACT FORM (SIMPLIFIED) */}
          <div>
            <div className="bg-white border border-[#E0E0E0] rounded-xl p-6 sm:p-8">
              
              <div className="mb-6">
                <h4 className="text-xl font-medium text-[#333333] mb-2">Send a message</h4>
                <div className="w-8 h-[1px] bg-[#FF8A5C]/40 mb-2"></div>
                <p className="text-sm text-[#666666]">I'll get back to you within 24 hours</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-xs font-medium text-[#666666] block mb-1">Your name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-[#E0E0E0] rounded-lg text-[#333333] placeholder:text-[#999999] focus:outline-none focus:border-[#FF8A5C] focus:ring-1 focus:ring-[#FF8A5C]/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="text-xs font-medium text-[#666666] block mb-1">Email address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-[#E0E0E0] rounded-lg text-[#333333] placeholder:text-[#999999] focus:outline-none focus:border-[#FF8A5C] focus:ring-1 focus:ring-[#FF8A5C]/20 transition-all"
                    placeholder="hello@example.com"
                  />
                </div>
                
                <div>
                  <label className="text-xs font-medium text-[#666666] block mb-1">Your message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-[#E0E0E0] rounded-lg text-[#333333] placeholder:text-[#999999] focus:outline-none focus:border-[#FF8A5C] focus:ring-1 focus:ring-[#FF8A5C]/20 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                {submitStatus === 'success' && (
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-sm text-green-700">✓ Message sent! I'll get back to you soon.</p>
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-[#FF8A5C] text-white font-medium rounded-lg hover:bg-[#FF6B3A] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <Send size={16} className="inline ml-2" />}
                </button>
                
                <p className="text-xs text-center text-[#999999]">
                  Your information is safe. I'll never share your details.
                </p>
              </form>
            </div>
          </div>
        </div>
        
        {/* FOOTER - SIMPLIFIED */}
        <div className="mt-16 text-center">
          <div className="pt-6 border-t border-[#E0E0E0]">
            <p className="text-xs text-[#999999]">
              © {new Date().getFullYear()} Urooj Rasheed. Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}