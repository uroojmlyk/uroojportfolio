// "use client";

// import { useEffect } from 'react';

// export default function GhostChatWidget() {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = "https://api.thechatwidget.com/widget.js?v=7";
//     script.setAttribute('data-site', 'cl9024b77ad6cd49d5a095bfd6');
//     script.defer = true;
//     document.body.appendChild(script);
//   }, []);
//   return null;
// } 




"use client";

import { useEffect } from 'react';

export default function GhostChatWidget() {
  useEffect(() => {
    // Script load kar
    const script = document.createElement('script');
    script.src = "https://api.thechatwidget.com/widget.js?v=7";
    script.setAttribute('data-site', 'cl9024b77ad6cd49d5a095bfd6');
    script.defer = true;
    document.body.appendChild(script);

    // 🟠 ORANGE COLOR FORCE KARNE KA TAREEKA:
    const style = document.createElement('style');
    style.innerHTML = `
      #ghostchat-bubble, 
      #ghostchat-header,
      #ghostchat-send,
      [style*="background: #2563eb"],
      [style*="background: rgb(37, 99, 235)"] {
        background-color: #FF8A5C !important;
      }
    `;
    document.head.appendChild(style);
    
  }, []);
  return null;
}