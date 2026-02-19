"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

/* -------------------------------------------------------------------------- */
/* TYPES & DATA                                                               */
/* -------------------------------------------------------------------------- */

export type ProjectCategory = "residential" | "commercial" | "restoration";

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  location: string;
  image: string;
  description: string;
  specs: {
    bond: string;
    material: string;
    time: string;
  };
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "The Oakwood Extension",
    category: "residential",
    location: "Surrey, UK",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    description: "A double-storey extension utilizing reclaimed red bricks to match the existing Victorian property.",
    specs: { bond: "Flemish", material: "Reclaimed Red", time: "8 Weeks" },
  },
  {
    id: 2,
    title: "Metro Office Complex",
    category: "commercial",
    location: "Manchester, UK",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    description: "Structural blockwork and facing brickwork for a 5-story office complex with engineering brick plinths.",
    specs: { bond: "Stretcher", material: "Blue Engineering", time: "6 Months" },
  },
  {
    id: 3,
    title: "St. Jude's Heritage Wall",
    category: "restoration",
    location: "Bath, UK",
    image: "https://images.unsplash.com/photo-1599839572645-36777174db75?auto=format&fit=crop&q=80&w=800",
    description: "Complete repointing using traditional lime mortar. Replacement of damaged stone and cleaning.",
    specs: { bond: "Heritage", material: "Lime Putty", time: "3 Weeks" },
  },
  {
    id: 4,
    title: "Riverside Garden Walls",
    category: "residential",
    location: "Oxford, UK",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=800",
    description: "Decorative retaining garden walls with capping stones and integrated lighting channels.",
    specs: { bond: "English Garden", material: "Buff Stock", time: "2 Weeks" },
  },
];

/* -------------------------------------------------------------------------- */
/* SUB-COMPONENTS                                                             */
/* -------------------------------------------------------------------------- */

// Extracting the card makes the main component much cleaner!
const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group bg-white rounded-2xl shadow-md hover:shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300"
    >
      {/* IMAGE CONTAINER */}
      <div className="relative overflow-hidden">
        <span className="absolute top-4 left-4 z-10 bg-black/80 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm">
          {project.category}
        </span>
        
        <div className="relative w-full h-64 overflow-hidden">
          <Image
            src={project.image}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
            alt={project.title}
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 font-heading mb-2">
          {project.title}
        </h3>
        <p className="text-[#D4AF37] font-medium text-sm mb-4 flex items-center gap-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
          {project.location}
        </p>
        <p className="text-gray-600 text-base leading-relaxed mb-6">
          {project.description}
        </p>

        {/* SPECS GRID */}
        <div className="grid grid-cols-3 gap-2 border-t border-gray-100 pt-6">
          {Object.entries(project.specs).map(([key, value]) => (
            <div key={key} className="flex flex-col items-center justify-center p-2 bg-gray-50 rounded-xl">
              <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mb-1">
                {key}
              </span>
              <span className="text-sm font-bold text-gray-800 text-center">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

/* -------------------------------------------------------------------------- */
/* MAIN PAGE                                                                  */
/* -------------------------------------------------------------------------- */

export default function ProjectsPage() {
  const [filter, setFilter] = useState<FilterType>("all");
  type FilterType = ProjectCategory | "all";
  
  const categories: FilterType[] = ["all", "residential", "commercial", "restoration"];

  const filteredProjects = filter === "all"
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  return (
    <div className="bg-[#FDFBF7] min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#D4AF37] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
            Our Portfolio
          </span>
          <h1 className="font-heading font-black text-5xl md:text-6xl text-gray-900 mb-6">
            Craftsmanship in <br className="hidden md:block" /> Every Detail.
          </h1>
          <p className="text-gray-600 text-lg md:text-xl font-body">
            From heritage restoration to modern commercial builds — explore our recent projects and see our dedication to quality firsthand.
          </p>
        </div>

        {/* FILTER NAVIGATION */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${
                filter === cat
                  ? "bg-[#244528] text-white shadow-lg scale-105"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-[#D4AF37] hover:text-[#244528]"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* PROJECT GRID (With Framer Motion Layout) */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CALL TO ACTION */}
        <div className="mt-32 text-center bg-[#244528] rounded-[3rem] p-12 md:p-20 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#D4AF37]/20 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="font-heading font-black text-4xl md:text-5xl text-white mb-6">
              Ready to start your project?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Our team of experts is ready to bring your vision to life. Get in touch today for a free consultation and quote.
            </p>
            <Link 
              href="/#contact" 
              className="inline-block bg-[#D4AF37] hover:bg-[#b5932a] text-[#244528] font-bold text-lg py-4 px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}