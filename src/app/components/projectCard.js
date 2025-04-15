import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const ProjectCard = ({title, imagePath, description, techStack, link}) => {
   return (
      <Link
         href={link}
         className="group flex flex-col sm:flex-row items-start md:gap-4 p-2 mb-10 hover:bg-[#112240] rounded-2xl transition-colors hover:shadow-lg"
  
     >
         {/* Left: Image Thumbnail */}
         <div className="flex-shrink-0 w-[220px] h-[130px] relative rounded-xl overflow-hidden text-white">
            <Image
               src={imagePath}
               alt="Build a Spotify Connected App"
               fill
               className="object-contain"
            />
         </div>
         {/* Right: Text Content */}
         <div className="flex-1 space-y-2">
            <h3 className="text-slate-100 font-semibold text-xl flex items-center gap-1">
               {title}
               <ArrowUpRight
                  size={18}
                  className="text-teal-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
               />
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
               {description}
            </p>
            <div className="flex flex-wrap gap-2 pt-1.5">
               {techStack.map((tech, index) => (
                  <span
                     key={index}
                     className="bg-[#1e293b] text-teal-300 px-3 py-1 text-xs rounded-full font-medium tracking-wide"
                  >
                     {tech}
                  </span>
               ))}
            </div>
         </div>
      </ Link>
   );
};

export default ProjectCard;
