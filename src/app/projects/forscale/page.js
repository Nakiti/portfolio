"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ImageCarousel from "@/app/components/imageCaraousel";

const FundraiserPage = () => {
   const images = ["/forscale-1.jpg", "/forscale-2.jpg"];

   return (
      <div className="px-6 py-6 text-slate-100 bg-[#0a192f] min-h-screen">
         {/* Title */}
         <h1 className="text-4xl font-bold mb-6">ForScale - Chrome Extension</h1>

         <ImageCarousel images={images}/>

         {/* GitHub Link */}
         <a
            href="https://github.com/nakiti/forscale"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-teal-400 hover:underline text-lg mb-4"
         >
            <FaGithub size={20} />
            View on GitHub
         </a>

         {/* Description */}
         <p className="text-slate-300 max-w-3xl leading-relaxed text-md whitespace-pre-line">
            {`I built For Scale, a browser extension that helps users make sense of obscure measurements by    translating them into everyday objects—like bananas, Starbucks coffee cups, dogs, and more. Whether it's meters, gallons, or tons, users can simply highlight any measurement on a webpage, right-click, and instantly convert it into something much more relatable.

               This project was both fun and technically rewarding. It pushed me to understand how browser extensions work under the hood, from setting up context menus and injecting scripts into active tabs, to handling cross-origin requests. I used JavaScript for the extension logic and Chrome’s extension APIs to manage interaction flow and background tasks.

               Along the way, I learned how to package, test, and deploy a Chrome extension while refining my understanding of event-based programming and DOM manipulation. It was a playful but impactful way to improve my JavaScript skills and think about how small tools can make the web more accessible and intuitive.
            `}
         </p>
      </div>
   );
};

export default FundraiserPage;
