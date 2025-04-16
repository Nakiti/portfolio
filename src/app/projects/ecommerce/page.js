"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ImageCarousel from "@/app/components/imageCaraousel";

const images = [
   "/mash-1.png",
   "/mash-2.png",
   "/mash-3.png",
   "/mash-4.png",
];

const EcommercePage = () => {
   const [index, setIndex] = useState(0);
   const intervalRef = useRef(null);
   const images = ["/ecommerce-1.png"];

   return (
      <div className="px-6 py-6 text-slate-100 bg-[#0a192f] min-h-screen">
         {/* Title */}
         <h1 className="text-4xl font-bold mb-6">Ecommerce Aggregation Website</h1>

         <ImageCarousel images={images}/>

         {/* GitHub Link */}
         <a
            href="https://github.com/Nakiti/shopping"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-teal-400 hover:underline text-lg mb-6"
         >
            <FaGithub size={20} />
            View on GitHub
         </a>

         {/* Description */}
         <p className="text-slate-300 max-w-3xl leading-relaxed  text-md whitespace-pre-line">
            {`I built a full-stack web platform that consolidates clothing items from multiple brands, giving users a centralized place to browse, save, and manage their favorite pieces. To keep the product data fresh, I wrote a custom web scraper in Python that pulls up-to-date listings from various brand websites.

            While I understand that relying on web scraping isn’t scalable for production, this project was a valuable learning experience. It gave me the chance to deepen my comfort with Python for scripting and data extraction, and it helped me think critically about data structure and scheduling when automating these scrapes.

            On the frontend, I used Next.js to build a responsive, fast-loading interface with server-side rendering for performance. I took full advantage of API routes in Next.js to handle backend logic directly within the app, streamlining the flow between data retrieval, storage, and UI. This project helped me understand how to manage state across components, structure pages cleanly, and connect asynchronous data sources to a dynamic frontend—all within a single cohesive stack.
            `}
         </p>
      </div>
   );
};

export default EcommercePage;
