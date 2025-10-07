import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function BrickLaying() {
  return (
    <section className="w-full bg-main text-black px-6 lg:px-12 py-20">
      {/* Intro */}
      <div className="max-w-6xl mx-auto text-center">
        <h4 className="text-off-red text-sm lg:text-lg tracking-wide uppercase">
          Skilled Brickwork You Can Trust
        </h4>
        <h1 className="font-staatliches text-5xl lg:text-7xl mt-2">
          Brick Laying & Construction
        </h1>
        <p className="mt-4 font-inter text-base lg:text-lg max-w-3xl mx-auto font-light">
          From boundary walls to complete builds, our expert bricklayers deliver precision, durability, and style in every project. We take pride in creating solid foundations and flawless finishes that stand the test of time.
        </p>
      </div>

      {/* Feature Section */}
      <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Text Section */}
        <div className="order-2 lg:order-1 space-y-6">
          <h2 className="font-staatliches text-4xl lg:text-5xl text-center">
            Attention to Detail in Every Layer
          </h2>
          <p className="font-inter text-base lg:text-lg font-light leading-relaxed">
            Every brick we lay is aligned with precision and care. Our team ensures clean lines, strong joints, and a consistent finish — no matter the size or complexity of your project.
          </p>
          <ul className="list-none space-y-3 font-inter text-base lg:text-lg font-light">
            <li>🧱 Garden and boundary walls</li>
            <li>🏡 Property extensions and garages</li>
            <li>🏗️ New builds and restoration work</li>
            <li>🎨 Decorative and patterned brickwork</li>
          </ul>
          <a href="/contact-us">
            <button className="mt-8 inline-flex items-center bg-[#B72025] text-white py-3 px-7 rounded-lg font-barlow uppercase tracking-widest font-bold hover:bg-[#a51e20] transition-colors duration-300">
              Get a Free Quote <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </a>
        </div>

        {/* Image */}
        <div className="order-1 lg:order-2 relative w-full h-[420px] lg:h-[520px]">
          <Image
            src="/bricklaying.jpg"
            alt="Bricklayers at work"
            fill
            className="object-cover rounded-2xl shadow-xl"
          />
        </div>
      </div>

      {/* Highlight Section */}
      <div className="bg-[#f5f5f5] mt-24 py-20 rounded-3xl shadow-inner">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 lg:px-0">
          <div className="relative w-full h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/brickwall-finish.jpg"
              alt="Completed brick wall finish"
              fill
              className="object-cover rounded-lg shadow-md"
            />
          </div>

          <div className="space-y-6 text-left">
            <h2 className="font-staatliches text-4xl lg:text-5xl text-[#B72025]">
              Built to Last — and Look Great
            </h2>
            <p className="font-inter text-base lg:text-lg font-light leading-relaxed">
              Our brickwork is not only structurally sound but also visually refined. We ensure every project complements your property’s character, using premium materials and modern methods for a finish that endures.
            </p>
            <div className="flex flex-col gap-3 font-inter text-base lg:text-lg font-light">
              <p>✅ Fully insured & guaranteed workmanship</p>
              <p>✅ Projects completed on time and within budget</p>
              <p>✅ Trusted by homeowners and developers alike</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-6xl mx-auto mt-24 text-center">
        <h2 className="font-staatliches text-3xl lg:text-5xl mb-10">
          Recent Brickwork Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative h-[300px] rounded-lg overflow-hidden shadow-md">
            <Image
              src="/brickwork-1.jpg"
              alt="Brickwork project 1"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden shadow-md">
            <Image
              src="/brickwork-2.jpg"
              alt="Brickwork project 2"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden shadow-md">
            <Image
              src="/brickwork-3.jpg"
              alt="Brickwork project 3"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-28">
        <h3 className="font-staatliches text-3xl lg:text-4xl mb-4">
          Thinking About Your Next Project?
        </h3>
        <p className="font-inter text-lg font-light max-w-2xl mx-auto mb-8">
          Let’s discuss your vision and bring it to life with craftsmanship that speaks for itself. We’re happy to provide a free, no-obligation quote for any brickwork needs.
        </p>
        <a href="/contact-us">
          <button className="bg-[#B72025] text-white py-3 px-8 rounded-lg font-barlow uppercase tracking-widest font-bold hover:bg-[#a51e20] transition-colors duration-300">
            Contact Us Today
          </button>
        </a>
      </div>
    </section>
  );
}
