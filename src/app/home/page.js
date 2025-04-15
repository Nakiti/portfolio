"use client"
import ExperienceCard from "../components/experienceCard";
import ProjectCard from "../components/projectCard";
import { useRefs } from "../context/refsContext";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const projectData = [
   {
      title: "Fundraising CMS",
      imagePath: "/fundraising-1.png",
      description: `
         Developed a fundraising platform allowing for users to create campaigns and donation pages from a variety of templates. Similar to the Classy.org Platform
      `,
      techStack: ["React JS", "Next JS", "Node JS", "Express JS", "Azure RDS", "MySQL", "TailwindCSS", "Axios"],
      link: "/home/projects/fundraiser"
   },
   {
      title: "Mash",
      imagePath: "/mash-1.png",
      description: `
         Developed a full-stack web application (gaining over 50,000 visits) that uses the Elo ranking algorithm to generate crowdsourced rankings across hundreds of datasets. Users repeatedly choose between two options, and their input contributes to a dynamic, community-driven leaderboard.
      `,
      techStack: ["React JS", "Node JS", "Express JS", "MySQL", "Heroku", "TailwindCSS"],
      link: "/home/projects/mash"
   },
   {
      title: "Note-ify",
      imagePath: "/noteify-1.png",
      description: `
         Created a cross-platform mobile app that helps users study with custom flashcards delivered via notifications on a personalized schedule. 
      `,
      techStack: ["React Native", "Expo API"],
      link: "/home/projects/noteify"
   },
   {
      title: "Ecommerce Aggregator",
      imagePath: "/ecommerce-1.png",
      description: `
         Built a full-stack web platform that consolidates clothing from multiple brands, allowing users to browse, save, and manage favorites in one place. Designed a web scraper in python to get up-to-date data.
      `,
      techStack: ["React JS", "Next JS", "Express JS", "Node JS", "Express JS", "MySQL", "Heroku", "Python", "Beautiful Soup"],
      link: "/home/projects/ecommerce"
   },
   {
      title: "For Scale Extension",
      imagePath: "/forscale-1.jpg",
      description: `
         Developed a chrome extension to simplify obscure measurements by representing them in terms of familiar objects/concepts
      `,
      techStack: ["Javascript", "HTML", "CSS", "Google Chrome Extension API"],
      link: "/home/projects/forscale"
   }
]

const experienceData = [
   {
      title: "Computer Support Assistant",
      company: "UCSD",
      date: "MAR 2025 - PRESENT",
      description: "I provided front-line user support for production computing facilities. I also installed and maintained hardware and software, such as application software and peripheral devices (printers, scanners, handheld devices), while troubleshooting network and system issues.",
      techStack: ["Problem Solving", "Communication", "IT skills"],
      link: "https://cse.ucsd.edu/"
   },
   {
      title: "Undergraduate Research Assistant",
      company: "UCSD",
      date: "OCT 2023 - JUN 2024",
      description: "I contributed to the implementation and debugging of a modified Rust object-relational mapping (ORM) library with generic refinements to enforce data invariants and detect errors at compile time. Published in a paper.",
      techStack: ["Rust", "Haskell", "Diesel ORM", "Rocket.rs", "PostgreSQL"],
      link: "https://dl.acm.org/doi/10.1145/3704885"
   },
   {
      title: "Summer Intern",
      company: "Los Angeles Metro",
      date: "JUN 2022 - AUG 2022",
      description: "Collaborated on a preliminary renovation design for an LA Metro train station, contributing research on structural elements and design principles. Co-presented the proposal to interns and LA Metro staff, earning the highest project score among all teams for clarity, creativity, and feasibility.",
      // techStack: ["Rust", "Haskell", "Diesel ORM", "Rocket.rs", "PostgeSQL"]
      link: "https://www.metro.net/about/careers/tcap/"
   },
]


export default function Home() {
   const searchParams = useSearchParams();
   const section = searchParams.get("section");

   const { aboutRef, experienceRef, projectsRef, setActiveSection } = useRefs();

   useEffect(() => {
      const sectionMap = {
         about: aboutRef,
         experience: experienceRef,
         projects: projectsRef,
      };
   
      const targetRef = sectionMap[section];
   
      // Check every 100ms until the target ref exists, then scroll
      if (section && targetRef) {
         const interval = setInterval(() => {
            if (targetRef.current) {
               targetRef.current.scrollIntoView({ behavior: "smooth" });
               clearInterval(interval);
            }
         }, 100);
   
         // optional safety timeout
         // setTimeout(() => clearInterval(interval), 3000);
      }
   }, [section, aboutRef.current, experienceRef.current, projectsRef.current]);

   return (
      <div>
         <section className="md:mb-30" id="about" ref={aboutRef}>
            <h1 className="text-xl font-bold text-slate-100 mb-4">About Me</h1>
            <p className="text-slate-200 leading-relaxed text-md whitespace-pre-line">
               {`Hi, My name is Nikhil Akiti and I'm a second-year student at the University of California, San Diego studying computer science. I'm passionate the application of software engineering principles to the solution of problems that afflict our society, and hope to work towards resolving issues throughout my career. \n
               Through the combination of my coursework and personal projects I have a strong foundation in computer programming and am equipped with the skills encessary to bring an immediate impact to real-world projects. I am proficient coding in Java, JavaScript, C, and Python allowing me to effectively contribute to a variety of applications. I'm also versed in full-stack development, particulary creating web applications with React JS, Next JS, Node JS, TailWindCSS, and MySQL. In addition to my technical knowledge, I have experience working in service/support positions, giving me the soft skills necessary to be a valuable team member. \n
               In my free time, you can find me playing basketball, running, or playing guitar! Thanks for reading and I hope you enjoyed getting to know me!
               `}
            </p>

         </section>
         <section id="experience" ref={experienceRef} className="md:mb-30">
            <h1 className="text-xl font-bold text-slate-100 mb-4 mt-8">Experience</h1>
            {experienceData.map((item, index) => {
               return <ExperienceCard key={index} title={item.title} company={item.company} date={item.date} description={item.description} techStack={item.techStack} link={item.link}/>
            })}
         </section>
         <section id="projects" ref={projectsRef} className="">
            <h1 className="text-xl font-bold text-slate-100 mb-4 mt-8">Projects</h1>
            {projectData.map((item, index) => {
               return <ProjectCard key={index} title={item.title} imagePath={item.imagePath} description={item.description} techStack={item.techStack} link={item.link}/>
            })}
         </section>

      </div>
   );
}
