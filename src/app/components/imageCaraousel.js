"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageCarousel = ({ images, height = 250, width = 1000 }) => {
   const [index, setIndex] = useState(0);
   const intervalRef = useRef(null);

   const nextImage = () => {
      setIndex((prev) => (prev + 1) % images.length);
      resetInterval();
   };

   const prevImage = () => {
      setIndex((prev) => (prev - 1 + images.length) % images.length);
      resetInterval();
   };

   const resetInterval = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
         setIndex((prev) => (prev + 1) % images.length);
      }, 5000);
   };

   useEffect(() => {
      resetInterval();
      return () => {
         if (intervalRef.current) clearInterval(intervalRef.current);
      };
   }, []);

   return (
      <div className="relative w-full max-w-4xl mx-auto mb-4" style={{ height }}>
         <Image
            src={images[index]}
            alt={`Slide ${index + 1}`}
            width={width}
            height={height}
            className="rounded-md border border-slate-700 object-cover w-full h-full transition-all duration-500"
         />

         {/* Controls */}
         <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-slate-800/50 p-1 rounded-full hover:bg-slate-700"
         >
            <ChevronLeft size={16} />
         </button>
         <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-slate-800/50 p-1 rounded-full hover:bg-slate-700"
         >
            <ChevronRight size={16} />
         </button>
      </div>
   );
};

export default ImageCarousel;
