import { ArrowUpRight } from 'lucide-react';

const ExperienceCard = ({date, title, company, description, techStack, link}) => {

   return (
      <div className="flex flex-col sm:flex-row md:gap-6 mb-10 hover:bg-[#112240] p-2 rounded-md">
         
         {/* Left: Date */}
         <div className="text-slate-300 text-sm min-w-[120px]">
         {date}
         </div>

         {/* Right: Job Content */}
         <div className="flex-1 space-y-2">
         {/* Title & Company */}
         <h3 className="text-slate-100 font-semibold text-lg flex items-center gap-1">
            {title} ·{' '}
            <a
               href={link}
               target="_blank"
               rel="noopener noreferrer"
               className="text-teal-400 hover:underline inline-flex items-center gap-1"
            >
               {company} <ArrowUpRight size={14} />
            </a>
         </h3>

         {/* Description */}
         <p className="text-slate-300 text-sm leading-relaxed">
            {description}
         </p>

         {/* Tech Stack */}
         <div className="flex flex-wrap gap-2 pt-2">
            {techStack && techStack.map((tech, index) => (
               <span
                  key={index}
                  className="bg-[#1e293b] text-teal-300 px-3 py-1 text-xs rounded-full font-medium"
               >
                  {tech}
               </span>
            ))}
         </div>
         </div>
      </div>
   );
};

export default ExperienceCard;
