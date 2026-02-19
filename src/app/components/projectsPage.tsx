"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

/* -------------------------------------------------------------------------- */
/*                              TYPES & INTERFACES                            */
/* -------------------------------------------------------------------------- */

export type ProjectCategory = "residential" | "commercial" | "restoration";

export interface ProjectSpecs {
  bond: string;
  material: string;
  time: string;
}

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  location: string;
  image: string;
  description: string;
  specs: ProjectSpecs;
}

/* -------------------------------------------------------------------------- */
/*                                 PROJECT DATA                               */
/* -------------------------------------------------------------------------- */

export const projectsData: Project[] = [
  {
    id: 1,
    title: "The Oakwood Extension",
    category: "residential",
    location: "Surrey, UK",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    description:
      "A double-storey extension utilizing reclaimed red bricks to match the existing Victorian property.",
    specs: {
      bond: "Flemish",
      material: "Reclaimed Red",
      time: "8 Weeks",
    },
  },
  {
    id: 2,
    title: "Metro Office Complex",
    category: "commercial",
    location: "Manchester, UK",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    description:
      "Structural blockwork and facing brickwork for a 5-story office complex with engineering brick plinths.",
    specs: {
      bond: "Stretcher",
      material: "Blue Engineering",
      time: "6 Months",
    },
  },
  {
    id: 3,
    title: "St. Jude's Heritage Wall",
    category: "restoration",
    location: "Bath, UK",
    image:
      "https://images.unsplash.com/photo-1599839572645-36777174db75?auto=format&fit=crop&q=80&w=800",
    description:
      "Complete repointing using traditional lime mortar. Replacement of damaged stone and cleaning.",
    specs: {
      bond: "Heritage",
      material: "Lime Putty",
      time: "3 Weeks",
    },
  },
  {
    id: 4,
    title: "Riverside Garden Walls",
    category: "residential",
    location: "Oxford, UK",
    image:
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=800",
    description:
      "Decorative retaining garden walls with capping stones and integrated lighting channels.",
    specs: {
      bond: "English Garden",
      material: "Buff Stock",
      time: "2 Weeks",
    },
  },
];

/* -------------------------------------------------------------------------- */
/*                               PROJECTS PAGE                                */
/* -------------------------------------------------------------------------- */

type FilterType = ProjectCategory | "all";

const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2 },
    },
  };

  const categories: FilterType[] = [
    "all",
    "residential",
    "commercial",
    "restoration",
  ];

  return (
    <div className="bg-gradient-to-b from-main to-gray-50 py-20 px-4 lg:px-10">

      {/* Page Container */}
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <header className="text-center max-w-3xl mx-auto">
          <h4 className="text-off-red text-xs sm:text-sm font-semibold tracking-widest uppercase">
            OUR CRAFTSMANSHIP
          </h4>

          <h1 className="font-staatliches text-black text-4xl sm:text-5xl lg:text-6xl tracking-wide mt-2">
            RECENT PROJECTS
          </h1>

          <p className="text-black font-inter mt-6 text-base lg:text-xl">
            From heritage restoration to commercial builds — every brick, joint,
            and finish is completed with expert precision and care.
          </p>
        </header>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full border font-inter tracking-wide transition ${
                filter === cat
                  ? "bg-[#B72025] text-white border-[#B72025]"
                  : "bg-white text-black border-black hover:bg-gray-200"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                exit="exit"
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all"
              >
                {/* IMAGE */}
                <div className="relative">
                  <span className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs tracking-widest uppercase">
                    {project.category}
                  </span>

                  <img
                    src={project.image}
                    className="w-full h-56 object-cover"
                    alt={project.title}
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6 font-inter">
                  <h3 className="text-xl font-bold text-black">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mt-1 text-sm">
                    📍 {project.location}
                  </p>

                  <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* SPECS GRID (Matches Hero Stats) */}
                  <div className="grid grid-cols-3 gap-3 mt-6">
                    {[
                      { label: "Bond", value: project.specs.bond },
                      { label: "Material", value: project.specs.material },
                      { label: "Time", value: project.specs.time },
                    ].map((spec, i) => (
                      <div
                        key={i}
                        className="bg-white/90 border border-gray-200 shadow-sm rounded-lg py-3 px-2 text-center"
                      >
                        <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider">
                          {spec.label}
                        </p>
                        <p className="text-black font-bold mt-1">{spec.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-24">
          <h2 className="font-staatliches text-4xl lg:text-5xl text-black tracking-wide">
            Ready To Build Something That Lasts?
          </h2>

          <a href="#contactus">
            <button className="mt-8 text-white lg:text-2xl uppercase tracking-widest font-bold font-barlow bg-[#B72025] py-3 px-10 rounded-lg hover:bg-[#a51e20] transition-colors duration-300">
              GET A QUOTE
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
