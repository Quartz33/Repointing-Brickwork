"use client";

import React, { useState, ReactNode } from "react";
import { motion } from "framer-motion";
import { MessagesSquare } from "lucide-react";
import { Carousel, Card } from "./ui/apple-cards-carousel";

/* -------------------------------------------------------------------------- */
/* TYPES                                    */
/* -------------------------------------------------------------------------- */

interface ServiceCardData {
  category: string;
  title: string;
  description: string;
  src: string;
  content: ReactNode;
}

interface ServiceInfoCardProps {
  title: string;
  children: ReactNode;
}

/* -------------------------------------------------------------------------- */
/* REUSABLE SERVICE CARD                           */
/* -------------------------------------------------------------------------- */

function ServiceInfoCard({ title, children }: ServiceInfoCardProps) {
  return (
    <section className="bg-main px-8 py-12 md:px-16 md:py-16 rounded-3xl max-w-5xl mx-auto mt-12 shadow-xl border border-gray-200">
      <h2 className="text-3xl md:text-4xl font-staatliches text-off-red text-center mb-6 tracking-wider drop-shadow-sm">
        {title}
      </h2>

      <div className="space-y-4 text-center text-gray-800 text-base md:text-lg leading-relaxed font-inter">
        {children}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* INDIVIDUAL SERVICE CONTENT SECTIONS                    */
/* -------------------------------------------------------------------------- */

const RepointingInfo = () => (
  <ServiceInfoCard title="Repointing">
    <p>
      Our repointing service restores strength, appearance, and weather protection
      by expertly removing and renewing damaged mortar joints.
    </p>
    <p>
      We provide neat, long-lasting results that protect your home and maintain its
      character.
    </p>
  </ServiceInfoCard>
);

const GroundWorkInfo = () => (
  <ServiceInfoCard title="Ground Work">
    <p>
      From excavation to drainage and site preparation, our groundwork service ensures
      your project starts with a safe, reliable foundation.
    </p>
    <p>
      Every stage is completed with strict attention to quality and safety.
    </p>
  </ServiceInfoCard>
);

const LintelReplacementInfo = () => (
  <ServiceInfoCard title="Lintel Replacement">
    <p>
      We replace and upgrade lintels safely and professionally to maintain your
      property’s structural integrity.
    </p>
    <p>
      Whether repairing a failed arch or upgrading materials, we ensure durable
      long-term results.
    </p>
  </ServiceInfoCard>
);

const CavityWorkInfo = () => (
  <ServiceInfoCard title="Cavity Work">
    <p>
      Improve moisture protection and insulation with expert cavity wall construction
      and repairs.
    </p>
    <p>
      Our precision work enhances comfort, weather resistance, and long-term efficiency.
    </p>
  </ServiceInfoCard>
);

const StoneworkInfo = () => (
  <ServiceInfoCard title="Stonework">
    <p>
      Our skilled masons deliver beautiful and durable stonework, from decorative features
      to full structural builds.
    </p>
    <p>
      We create timeless stone structures crafted with expert attention to detail.
    </p>
  </ServiceInfoCard>
);

const OtherServicesInfo = () => (
  <ServiceInfoCard title="Other Services">
    <p>
      From general repairs to bespoke bricklaying projects, we offer a full range
      of masonry services tailored to your needs.
    </p>
    <p>
      Get in touch to discuss your project and how we can help.
    </p>
  </ServiceInfoCard>
);

/* -------------------------------------------------------------------------- */
/* SERVICES DATA                               */
/* -------------------------------------------------------------------------- */

const data: ServiceCardData[] = [
  {
    category: "Repointing",
    title: "Brickwork Repointing",
    description: "Dust-controlled grinding, lime mortar specialists, and expert repointing for brick and stone properties.",
    src: "/repointing-service.jpg",
    content: <RepointingInfo />,
  },
  {
    category: "Lintel Replacement",
    title: "Professional Lintel Replacement",
    description: "Safe lintel replacement for structural stability. Fully insured and experienced with arches and crack repairs.",
    src: "/lintel-replacement.jpg",
    content: <LintelReplacementInfo />,
  },
  {
    category: "Cavity Tray Installation",
    title: "Expert Cavity Tray Installation",
    description: "Prevent water ingress and damp with precision-installed cavity trays made from high-quality materials.",
    src: "/cavitywall-2.png",
    content: <CavityWorkInfo />,
  },
  {
    category: "Extensions",
    title: "Home Extensions",
    description: "Full-service external building including groundwork, drainage, and brickwork — backed by 25+ years of experience.",
    src: "/Extension-service.jpg",
    content: <GroundWorkInfo />,
  },
  {
    category: "Stonework",
    title: "Skilled Stonework",
    description: "Beautiful, durable stonework crafted by experienced masons for decorative or structural projects.",
    src: "/stonework-service.jpg",
    content: <StoneworkInfo />,
  },
  {
    category: "Other Services",
    title: "Additional Masonry Services",
    description: "Custom masonry, bricklaying, and repair services tailored to your project requirements.",
    src: "/img1.jpg",
    content: <OtherServicesInfo />,
  },
];

/* -------------------------------------------------------------------------- */
/* MAP SECTION                                */
/* -------------------------------------------------------------------------- */

export function Map() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="relative py-20">
      <div className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-black font-staat text-4xl sm:text-5xl lg:text-6xl tracking-wide"
        >
          Our Services
        </motion.h1>

        <p className="text-gray-700 mt-2 max-w-xl mx-auto text-sm sm:text-base">
          High-quality brickwork and masonry services carried out by experienced professionals.
        </p>
      </div>

      <Carousel items={cards} />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* MAIN EXPORT: SERVICES                           */
/* -------------------------------------------------------------------------- */

export default function Services() {
  return (
    <>
      {/* CTA SECTION */}
      <div className="w-full bg-white py-12 px-4 border-b border-gray-200">
        <div className="flex flex-col md:flex-row items-center gap-6 max-w-5xl mx-auto justify-center">
          <div className="w-20 h-20 rounded-full border border-gray-600 flex items-center justify-center shrink-0">
            <MessagesSquare className="text-red-600 w-8 h-8" />
          </div>

          <div className="text-center md:text-left md:flex-1 text-black">
            <h2 className="text-xl font-bold uppercase tracking-wider">Free Quotations</h2>
            <p className="text-sm mt-1 text-gray-700">
              Contact us today for a fast & free quotation on your next project.
            </p>
          </div>

          <div>
            <a href="#contactus">
              <button className="bg-off-red hover:bg-red-700 text-white font-semibold rounded-md px-7 py-3 shadow-md transition">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* DARK SECTION: SERVICES CAROUSEL */}
      <div className="w-full bg-main">
        <Map />
      </div>
    </>
  );
}