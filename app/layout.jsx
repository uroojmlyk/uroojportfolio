// import { Inter } from 'next/font/google'
// import './globals.css'
// import Navbar from './components/layout/Navbar'
// import Footer from './components/layout/Footer'
// const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Urooj Rasheed - Full Stack Developer & Web Designer',
//   description: 'Creative Full Stack Developer specializing in modern web experiences',
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <Navbar />
//         <main>{children}</main>
//         <Footer />
//       </body>
//     </html>
//   )
// }







import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import GhostChatWidget from './components/GhostChatWidget'   // ✅ 1. IMPORT KARO

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Urooj Rasheed - Full Stack Developer & Web Designer',
  description: 'Creative Full Stack Developer specializing in modern web experiences',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <GhostChatWidget />   {/* ✅ 2. YAHAN ADD KARO — FOOTER K NEECHE */}
      </body>
    </html>
  )
}