'use client';
import "./globals.css";
import SideBar from './SideBar';
import { RefsContext } from './context/refsContext';
import { useRef, useEffect, useState } from 'react';

export default function RootLayout({ children }) {
   const aboutRef = useRef(null);
   const experienceRef = useRef(null);
   const projectsRef = useRef(null);
   const [activeSection, setActiveSection] = useState('about');

   const sectionMap = {
      about: aboutRef,
      experience: experienceRef,
      projects: projectsRef,
   };
    
   const updateActiveSection = () => {
      const entries = Object.entries(sectionMap).map(([key, ref]) => {
        if (!ref.current) return null;
        const rect = ref.current.getBoundingClientRect();
        return {
          key,
          isVisible: rect.top < window.innerHeight * 0.7 && rect.bottom > window.innerHeight * 0.2,
          ratio: Math.max(0, 1 - Math.abs(rect.top) / window.innerHeight)
        };
      }).filter(Boolean);
    
      const bestMatch = entries
        .filter(e => e.isVisible)
        .sort((a, b) => b.ratio - a.ratio)[0];
    
      if (bestMatch) {
        setActiveSection(bestMatch.key);
      }
   };

   useEffect(() => {
      const observer = new IntersectionObserver(
        () => updateActiveSection(), // just call the same logic
        {
          root: null,
          threshold: 0.3,
          rootMargin: '0px 0px -20% 0px',
        }
      );
    
      Object.values(sectionMap).forEach((ref) => {
        if (ref.current) observer.observe(ref.current);
      });
    
      // 👇 force run on first mount (after scrollIntoView)
      setTimeout(() => {
        updateActiveSection();
      }, 800); // match your scroll delay
    
      return () => {
        observer.disconnect();
      };
   }, []);

   return (
      <html lang="en">
         <body className="bg-[#0a192f] text-slate-300 relative">
         <RefsContext.Provider
            value={{ aboutRef, experienceRef, projectsRef, activeSection, setActiveSection }}
         >
            <div className="relative z-10 flex flex-col md:flex-row h-screen overflow-hidden">

               {/* Mobile Topbar */}
               <header className="md:hidden w-full px-6 py-4 border-b border-slate-700 bg-[#0a192f] flex justify-between items-center">
               <h1 className="text-xl text-slate-100 font-semibold">Hi, I'm Nikhil</h1>
                  <a
                     href="/NikhlAkitiResumse.pdf"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-sm px-3 py-1 border border-white text-slate-100 rounded hover:bg-white hover:text-[#0a192f] transition"
                  >
                     Resume
                  </a>
               </header>

               {/* Desktop Sidebar */}
               <aside className="hidden md:block w-[280px] lg:w-[500px] border-r border-slate-700 flex-shrink-0">
               <div className="h-full overflow-y-auto">
                  <SideBar />
               </div>
               </aside>

               {/* Main Content */}
               <main className="bg-[#0a192f] flex-1 h-full overflow-y-auto px-6 sm:px-10 py-8 md:px-20 md:py-20">
                  <div className="flex flex-col gap-16">{children}</div>
               </main>
            </div>
         </RefsContext.Provider>
         </body>
      </html>
   );
}
