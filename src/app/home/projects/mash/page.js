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

const MashPage = () => {
   const [index, setIndex] = useState(0);
   const intervalRef = useRef(null);
   const images = ["/mash-1.png", "/mash-2.png", "/mash-3.png", "/mash-4.png"];


   return (
      <div className="px-6 py-6 text-slate-100 bg-[#0a192f] min-h-screen">
         {/* Title */}
         <h1 className="text-4xl font-bold mb-6">Mash – Crowdsourced Ranking Site</h1>

         <ImageCarousel images={images}/>

         {/* GitHub Link */}
         <a
            href="https://github.com/nakiti/fundraising"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-teal-400 hover:underline text-lg mb-6"
         >
            <FaGithub size={20} />
            View on GitHub
         </a>

         {/* Description */}
         <p className="text-slate-300 max-w-3xl leading-relaxed mt-4 text-md whitespace-pre-line">
         {`I’ve always been curious about how NBA player rankings might look if they reflected the opinions of fans rather than just a handful of analysts. While exploring ways to bring this idea to life, I discovered the Elo ranking algorithm—commonly used to measure relative skill in competitive games. I realized it could be adapted for this purpose: users could repeatedly choose between two NBA players, with each choice updating their respective scores. As I began building the site, I saw potential far beyond basketball. The same concept could be applied to virtually any topic with a defined set of items. This led me to transform the project into a broader platform—one where anyone can upload a dataset and have it ranked by a community of users through simple, engaging comparisons.
         \n
         This was one of my first web projects, so to bring it to life, I chose a tech stack that balanced ease of use with flexibility. I used React.js for the frontend to build an interactive and responsive user interface, and Node.js with Express for the backend to handle API requests and game logic. To store user input and player data, I set up a MySQL database, which allowed for efficient querying and ranking calculations. As the project grew, I added features like real-time score updates, user-created datasets, and dynamic leaderboards. I also deployed the application using Heroku, making it accessible to users anywhere. Working on this project taught me not only how to connect a full-stack system but also how to design scalable features that evolve with user engagement. During it's liftetime, this application gathered over 50,000 unique visitors         
         `}
         </p>
      </div>
   );
};

export default MashPage;
