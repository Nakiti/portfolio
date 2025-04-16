"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ImageCarousel from "@/app/components/imageCaraousel";

const FundraiserPage = () => {
   const images = ["/fundraising-1.png", "/fundraising-2.png", "/fundraising-3.png", "/fundraising-4.png", "/fundraising-5.png", "/fundraising-6.png"];

   return (
      <div className="px-6 py-6 text-slate-100 bg-[#0a192f] min-h-screen">
         {/* Title */}
         <h1 className="text-4xl font-bold mb-6">Fundraising Content Management System</h1>

         <ImageCarousel images={images}/>

         {/* GitHub Link */}
         <a
            href="https://github.com/nakiti/fundraising"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-teal-400 hover:underline text-lg mb-4"
         >
            <FaGithub size={20} />
            View on GitHub
         </a>

         {/* Description */}
         <p className="text-slate-300 max-w-3xl leading-relaxed text-md whitespace-pre-line">
            {`
               While exploring different ways technology can support meaningful causes, I was inspired to build a fundraising platform that empowers users to create their own campaigns and donation pages—drawing inspiration from platforms like Classy.org. I wanted to make the process simple, customizable, and visually engaging, so users could focus more on their cause and less on technical barriers.

               To achieve this, I designed a system where users could choose from a variety of professionally styled templates to quickly launch their own fundraising pages. They could personalize everything from the campaign story to goal trackers and donation tiers. I built the frontend using React.js and Next.js for its component-based flexibility and responsive design capabilities, and used Node.js and Express on the backend to manage user data, campaign logic, and transactions. For data storage, I used MySQL with Azure to track user accounts, campaign progress, and donation records. This project taught me how to build user-focused experiences while managing critical backend services like authentication and authorization.
            `}
         </p>
      </div>
   );
};

export default FundraiserPage;
