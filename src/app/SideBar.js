'use client';
import { useRefs } from "./context/refsContext";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const SideBar = () => {
   const { aboutRef, experienceRef, projectsRef, activeSection, setActiveSection } = useRefs();
   const pathname = usePathname();
   const router = useRouter();

   const scrollTo = (ref) => {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
   };

   const handleNavClick = (id, ref) => {
      if (pathname === "/home") {
         scrollTo(ref);
      } else {
         router.push(`/home`);
      }
   };

   const linkClass = (id) =>
      `block text-left w-full pl-3 transition-all duration-200 uppercase ${
         activeSection === id && pathname == "/home"
            ? 'text-white border-l-2 border-slate-100 font-semibold tracking-wider'
            : 'text-slate-400 hover:text-white'
      }`;

   return (
      <div className="flex flex-col justify-between h-full px-8 py-12 text-slate-300 bg-[#0a192f]">
         <div>
            <Link href="/home">
               <h1 className="text-5xl font-bold text-slate-100 mb-2 mt-16">
                  Hello, I'm Nikhil
               </h1>
            </Link>
            <h2 className="text-2xl font-bold mb-6">Software Engineer</h2>
            <p className="text-md text-slate-200 mb-12">
               I'm a rising junior studying computer science at the University of California, San Diego with a passion for
               problem solving!
            </p>

            <nav>
               <ul className="space-y-4 text-md tracking-wide">
                  <li>
                     <button onClick={() => handleNavClick('about', aboutRef)} className={linkClass('about')}>
                        About
                     </button>
                  </li>
                  <li>
                     <button onClick={() => handleNavClick('experience', experienceRef)} className={linkClass('experience')}>
                        Experience
                     </button>
                  </li>
                  <li>
                     <button onClick={() => handleNavClick('projects', projectsRef)} className={linkClass('projects')}>
                        Projects
                     </button>
                  </li>
               </ul>
            </nav>

            <a
               href="/NikhilAkitiResume.pdf"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-block px-4 py-2 border border-white rounded-md mt-16 hover:bg-white hover:text-[#0a192f] transition"
            >
               Resume
            </a>
            <div className="mt-12 flex gap-6 items-center text-xl text-slate-400">
               <a href="https://www.linkedin.com/in/nikhil-akiti-445bb6242/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <FaLinkedin />
               </a>
               <a href="mailto:nikhilakiti91@gmail.com" className="hover:text-white transition-colors">
                  <FaEnvelope />
               </a>
               <a href="https://github.com/nakiti" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <FaGithub />
               </a>
            </div>
         </div>
      </div>
   );
};

export default SideBar;
