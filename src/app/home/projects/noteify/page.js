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

const NoteifyPage = () => {
   const images = ["/noteify-1.png"];


   return (
      <div className="px-6 py-6 text-slate-100 bg-[#0a192f] min-h-screen">
         {/* Title */}
         <h1 className="text-4xl font-bold mb-6">Note-ify</h1>

         <ImageCarousel images={images}/>

         {/* GitHub Link */}
         <a
            href="https://github.com/nakiti/notify"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-teal-400 hover:underline text-lg mb-4"
         >
            <FaGithub size={20} />
            View on GitHub
         </a>

         {/* Description */}
         <p className="text-slate-300 max-w-3xl leading-relaxed  text-md whitespace-pre-line">
            {`
            I wanted to find a better way to study—one that fit naturally into a busy routine. That idea led me to develop a cross-platform mobile app that helps users retain information through custom flashcards delivered via scheduled notifications. Instead of cramming, users receive bite-sized study prompts at optimal times, making learning more consistent and less overwhelming.

            I built the app using React Native to ensure it worked smoothly on both iOS and Android devices. Users can create their own flashcard decks, set personalized study schedules, and receive notifications at times that suit their habits. I implemented local storage using AsyncStorage to manage flashcard data offline, and used Expo Notifications to handle the scheduled push reminders.

            Through this project, I learned how to integrate mobile-specific features like background notifications and local persistence, while also designing an intuitive interface that keeps users engaged with minimal friction. This was also the very first project I deployed. 
            
            `}
         </p>
      </div>
   );
};

export default NoteifyPage;
