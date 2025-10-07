import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function Repointing() {
  return (
    <section className="w-full bg-main text-black px-6 lg:px-12 py-16">
      {/* Intro Section */}
      <div className="max-w-6xl mx-auto text-center">
        <h4 className="text-off-red text-sm lg:text-lg tracking-wide uppercase">
          Expert Brickwork Services
        </h4>
        <h1 className="font-staatliches text-5xl lg:text-7xl mt-2">
          Repointing & Restoration
        </h1>
        <p className="mt-4 font-inter text-base lg:text-lg max-w-3xl mx-auto font-light">
          Over time, weathering and age can cause mortar joints to crumble and weaken — affecting both the look and strength of your brickwork. Our repointing service restores your walls to their former glory, using precision craftsmanship and durable materials designed to last.
        </p>
      </div>

      {/* Image + Text Split */}
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative w-full h-[400px] lg:h-[500px]">
          <Image
            src="/repointing.jpg"
            alt="Professional brick repointing service"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="space-y-6">
          <h2 className="font-staatliches text-4xl lg:text-5xl">
            What Is Repointing?
          </h2>
          <p className="font-inter text-base lg:text-lg font-light leading-relaxed">
            Repointing involves removing deteriorated mortar from the joints of brickwork and replacing it with fresh mortar. This process improves the wall’s strength, weather resistance, and overall appearance.
          </p>
          <ul className="list-disc list-inside text-base lg:text-lg font-inter space-y-2">
            <li>Prevents moisture penetration and structural damage</li>
            <li>Improves energy efficiency and insulation</li>
            <li>Enhances property value and kerb appeal</li>
            <li>Available for both modern and heritage buildings</li>
          </ul>
          <a href="/contact-us">
            <button className="mt-6 inline-flex items-center bg-[#B72025] text-white py-3 px-6 rounded-lg font-barlow uppercase tracking-widest font-bold hover:bg-[#a51e20] transition-colors duration-300">
              Get a Free Quote <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </a>
        </div>
      </div>

      {/* Before & After Section */}
      <div className="max-w-6xl mx-auto mt-20 text-center">
        <h2 className="font-staatliches text-3xl lg:text-5xl mb-8">
          Before & After Repointing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-[350px]">
            <Image
              src="/repointing-before.jpg"
              alt="Before repointing"
              fill
              className="object-cover rounded-lg shadow-md"
            />
            <p className="absolute bottom-3 left-3 bg-[#B72025] bg-opacity-70 text-white px-3 py-1 rounded-md text-sm uppercase tracking-wide">
              Before
            </p>
          </div>
          <div className="relative h-[350px]">
            <Image
              src="/repointing-after.jpg"
              alt="After repointing"
              fill
              className="object-cover rounded-lg shadow-md"
            />
            <p className="absolute bottom-3 left-3 bg-[#B72025] bg-opacity-70 text-white px-3 py-1 rounded-md text-sm uppercase tracking-wide">
              After
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-24">
        <h3 className="font-staatliches text-3xl lg:text-4xl mb-4">
          Ready to Restore Your Brickwork?
        </h3>
        <p className="font-inter text-lg font-light max-w-2xl mx-auto mb-8">
          Get in touch today to arrange a free inspection and no-obligation quote. We’ll assess your property and recommend the best repointing solution for long-lasting results.
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
