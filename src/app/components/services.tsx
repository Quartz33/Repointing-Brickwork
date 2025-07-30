'use client';

import { MessagesSquare } from 'lucide-react';
import { Carousel, Card } from './ui/apple-cards-carousel';
import { useState } from 'react';



export function Map() {
  

  const cards = data.map((card, index) => (
    <Card key={index} card={card} index={index} />
  ));

  return (
    <div className="relative">
      <div className={`w-full h-full pt-20 transition-all duration-300 : ''}`}>
        <h1 className='text-black font-staat text-4xl text-center'>Our Services</h1>
        <Carousel items={cards} />
      </div>
    </div>
  );
}


const ExtensionsInfo = () => {
  return (
    <section className="bg-main px-6 py-10 md:px-14 md:py-16 rounded-3xl max-w-4xl mx-auto mt-12 shadow-md">
      <h2 className="text-2xl md:text-3xl font-staatliches text-[#8B0000] text-center mb-4 tracking-wider">
        Property Extensions
      </h2>
      <p className="text-neutral-800 text-base md:text-lg font-inter leading-relaxed text-center">
        Thinking of adding more space to your home? Our brickwork extensions are carefully built to complement the style and structure of your property — whether it’s a rear extension, side return, or new room entirely.
      </p>
      <p className="text-neutral-700 text-base md:text-lg font-inter leading-relaxed mt-4 text-center">
        With over 25 years of experience in quality masonry, we deliver solid results that are built to last. Every extension is handled with care, precision, and honest craftsmanship from start to finish.
      </p>
    </section>
  );
};
const GroundWorkInfo = () => {
  return (
    <section className="bg-main px-6 py-10 md:px-14 md:py-16 rounded-3xl max-w-4xl mx-auto mt-12 shadow-md">
      <h2 className="text-2xl md:text-3xl font-staatliches text-[#8B0000] text-center mb-4 tracking-wider">
        Ground Work
      </h2>
      <p className="text-neutral-800 text-base md:text-lg font-inter leading-relaxed text-center">
        Our expert ground work services provide a solid foundation for your project. From site preparation to drainage and excavation, we ensure every step meets strict quality and safety standards.
      </p>
      <p className="text-neutral-700 text-base md:text-lg font-inter leading-relaxed mt-4 text-center">
        Trust our experienced team to handle your groundwork efficiently, so your build starts on the right foot.
      </p>
    </section>
  );
};

const LintelReplacementInfo = () => {
  return (
    <section className="bg-[#FCFBF9] px-6 py-10 md:px-14 md:py-16 rounded-3xl max-w-4xl mx-auto mt-12 shadow-md">
      <h2 className="text-2xl md:text-3xl font-staatliches text-[#8B0000] text-center mb-4 tracking-wider">
        Lintel Replacement
      </h2>
      <p className="text-neutral-800 text-base md:text-lg font-inter leading-relaxed text-center">
        We provide professional lintel replacement services to ensure the structural integrity of your building. Whether repairing or upgrading, we use quality materials suited to your property’s needs.
      </p>
      <p className="text-neutral-700 text-base md:text-lg font-inter leading-relaxed mt-4 text-center">
        Safety and durability are our priorities for every lintel replacement project.
      </p>
    </section>
  );
};
const RepointingInfo = () => {
  return (
    <section className="bg-main px-6 py-10 md:px-14 md:py-16 rounded-3xl max-w-4xl mx-auto mt-12 shadow-md">
      <h2 className="text-2xl md:text-3xl font-staatliches text-[#8B0000] text-center mb-4 tracking-wider">
        Repointing
      </h2>
      <p className="text-neutral-800 text-base md:text-lg font-inter leading-relaxed text-center">
        Our repointing service restores the beauty and strength of your brickwork by carefully removing and replacing damaged mortar joints, helping to protect your property from the elements.
      </p>
      <p className="text-neutral-700 text-base md:text-lg font-inter leading-relaxed mt-4 text-center">
        We deliver neat, long-lasting results that maintain your home’s character and value.
      </p>
    </section>
  );
}
const CavityWorkInfo = () => {
  return (
    <section className="bg-main px-6 py-10 md:px-14 md:py-16 rounded-3xl max-w-4xl mx-auto mt-12 shadow-md">
      <h2 className="text-2xl md:text-3xl font-staatliches text-[#8B0000] text-center mb-4 tracking-wider">
        Cavity Work
      </h2>
      <p className="text-neutral-800 text-base md:text-lg font-inter leading-relaxed text-center">
        We specialise in cavity wall construction and repairs, ensuring your property benefits from improved insulation and moisture protection.
      </p>
      <p className="text-neutral-700 text-base md:text-lg font-inter leading-relaxed mt-4 text-center">
        Our cavity work is done with precision and care to enhance comfort and efficiency.
      </p>
    </section>
  );
};
const StoneworkInfo = () => {
  return (
    <section className="bg-main px-6 py-10 md:px-14 md:py-16 rounded-3xl max-w-4xl mx-auto mt-12 shadow-md">
      <h2 className="text-2xl md:text-3xl font-staatliches text-[#8B0000] text-center mb-4 tracking-wider">
        Stonework
      </h2>
      <p className="text-neutral-800 text-base md:text-lg font-inter leading-relaxed text-center">
        Our skilled masons provide expert stonework services, from decorative features to structural walls, blending craftsmanship with durability.
      </p>
      <p className="text-neutral-700 text-base md:text-lg font-inter leading-relaxed mt-4 text-center">
        We take pride in creating timeless stone structures that complement your property.
      </p>
    </section>
  );
};
const OtherServicesInfo = () => {
  return (
    <section className="bg-main px-6 py-10 md:px-14 md:py-16 rounded-3xl max-w-4xl mx-auto mt-12 shadow-md">
      <h2 className="text-2xl md:text-3xl font-staatliches text-[#8B0000] text-center mb-4 tracking-wider">
        Other Services
      </h2>
      <p className="text-neutral-800 text-base md:text-lg font-inter leading-relaxed text-center">
        We offer a wide range of additional masonry and bricklaying services tailored to your needs. From repairs to custom builds, our team is ready to deliver quality craftsmanship.
      </p>
      <p className="text-neutral-700 text-base md:text-lg font-inter leading-relaxed mt-4 text-center">
        Contact us to discuss your project and find out how we can help.
      </p>
    </section>
  );
};
const data = [
  {
    category: "Extensions",
    title: "Expertly built brick extensions that blend seamlessly with your home, adding space and value.",
    src: "/img1.jpg",
    content: <ExtensionsInfo />,
  },
  {
    category: "Ground Work",
    title: "Relax and restore with expert therapeutic touch.",
    src: "/img2.jpg",
    content: < GroundWorkInfo />,
  },
  {
    category: "Lintel Replacement",
    title: "Boost your glow from the inside out.",
    src: "/img3.png",
    content: <LintelReplacementInfo />,
  },
  {
    category: "Repointing",
    title: "Enhance natural volume and smooth fine lines.",
    src: "/img4.png",
    content: <RepointingInfo />,
  },
  {
    category: "Cavity Work",
    title: "Curated treatment bundles for ultimate self-care.",
    src: "/img5.jpg",
    content: <CavityWorkInfo />,
  },
  {
    category: "Stonework",
    title: "A quick escape to reset and unwind.",
    src: "/img1.jpg",
    content: <StoneworkInfo />,
  },
  {
    category: "Other Services",
    title: "Softens lines for a youthful, refreshed look.",
    src: "/img1.jpg",
    content: <OtherServicesInfo />,
  },
];

export default function Services() {
  return (
    <div className="bg-[#FAF9F6] py-12 px-4">
      {/* Contact Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 max-w-5xl w-full mx-auto justify-center">
        {/* Icon Circle */}
        <div className="w-20 h-20 rounded-full border border-gray-600 flex items-center justify-center shrink-0">
          <MessagesSquare className="text-red-600 w-8 h-8" />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left md:flex-1 text-black">
          <h2 className="text-lg font-bold uppercase">Free Quotations</h2>
          <p className="text-sm mt-1">
            Get in touch with us today for a free & quick quotation on your next brickwork project
          </p>
        </div>

        {/* Button */}
        <div className="mt-4 md:mt-0">
          <button className="bg-[#B72025] hover:bg-red-700 text-white font-semibold rounded-md px-6 py-3 shadow-md transition">
            CONTACT US
          </button>
        </div>
      </div>

      <Map />
      <div className="">
        <button className="btn btn-outline text-black border-black bg-white hover:bg-[#d3d3d3] transition-colors duration-300">
          View all our services
        </button>
      </div>
    </div>
  );
}
