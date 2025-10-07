import Image from "next/image";
import { ChevronRight, Home, Shield, Thermometer } from "lucide-react";

export default function CavityWalls() {
  return (
    <section className="w-full bg-main text-black px-6 lg:px-12 py-20">
      {/* Intro */}
      <div className="max-w-6xl mx-auto text-center">
        <h4 className="text-off-red text-sm lg:text-lg tracking-wide uppercase">
          Professional Wall Construction
        </h4>
        <h1 className="font-staatliches text-5xl lg:text-7xl mt-2">
          Cavity Wall Installation
        </h1>
        <p className="mt-4 font-inter text-base lg:text-lg max-w-3xl mx-auto font-light">
          Cavity walls are a modern standard in construction — combining
          strength, insulation, and protection from damp. We specialise in
          building and upgrading walls that last for generations.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-all duration-300">
          <Home className="mx-auto text-[#B72025] w-12 h-12 mb-4" />
          <h3 className="font-staatliches text-2xl mb-2">Energy Efficient</h3>
          <p className="font-inter text-base font-light leading-relaxed">
            Reduce heat loss and lower your energy bills with expertly
            constructed cavity walls that keep warmth inside all year round.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-all duration-300">
          <Shield className="mx-auto text-[#B72025] w-12 h-12 mb-4" />
          <h3 className="font-staatliches text-2xl mb-2">Weather Resistant</h3>
          <p className="font-inter text-base font-light leading-relaxed">
            Our cavity walls are built to resist rain penetration, preventing
            damp and improving your property’s structural health.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-all duration-300">
          <Thermometer className="mx-auto text-[#B72025] w-12 h-12 mb-4" />
          <h3 className="font-staatliches text-2xl mb-2">Built to Last</h3>
          <p className="font-inter text-base font-light leading-relaxed">
            Using only premium materials and precise craftsmanship, we ensure
            each wall meets the highest standards for longevity and durability.
          </p>
        </div>
      </div>

      {/* Image + Text Section */}
      <div className="max-w-6xl mx-auto mt-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/cavity-walls-hero.webp"
            alt="Cavity wall insulation"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="font-staatliches text-4xl lg:text-5xl mb-4">
            Insulation That Makes a Difference
          </h2>
          <p className="font-inter text-base lg:text-lg font-light leading-relaxed mb-6">
            Cavity walls consist of two layers of brickwork separated by an air
            gap, often filled with insulation. This design keeps homes warmer,
            reduces condensation, and enhances energy performance.
          </p>
          <ul className="list-disc list-inside font-inter text-base lg:text-lg font-light space-y-2">
            <li>Reduced heat loss and improved comfort</li>
            <li>Lower carbon footprint</li>
            <li>Suitable for new builds and renovations</li>
            <li>Compliant with modern building standards</li>
          </ul>
        </div>
      </div>

      {/* Highlight Banner */}
      <div className="bg-[#f5f5f5] mt-28 py-20 rounded-3xl shadow-inner text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="font-staatliches text-3xl lg:text-5xl mb-4">
            “Building Walls That Protect, Insulate, and Endure”
          </h3>
          <p className="font-inter text-lg font-light leading-relaxed max-w-3xl mx-auto mb-10">
            Our cavity wall installations offer the perfect balance between
            efficiency and strength — ensuring your property stays dry, warm,
            and structurally sound for decades to come.
          </p>
          <a href="/contact-us">
            <button className="bg-[#B72025] text-white py-3 px-8 rounded-lg font-barlow uppercase tracking-widest font-bold hover:bg-[#a51e20] transition-colors duration-300">
              Get a Free Quote <ChevronRight className="ml-2 inline w-5 h-5" />
            </button>
          </a>
        </div>
      </div>

      {/* Small Gallery Row */}
      <div className="max-w-6xl mx-auto mt-24 text-center">
        <h2 className="font-staatliches text-3xl lg:text-5xl mb-10">
          Our Recent Work
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {["cavitywall-1.jpg", "cavitywall-2.png"].map((img, i) => (
            <div
              key={i}
              className="relative h-[280px] w-[320px] rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src={`/${img}`}
                alt={`Cavity wall example ${i + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-28">
        <h3 className="font-staatliches text-3xl lg:text-4xl mb-4">
          Let’s Build Something Solid
        </h3>
        <p className="font-inter text-lg font-light max-w-2xl mx-auto mb-8">
          Whether you’re constructing a new property or improving your current
          walls, our experienced team is here to deliver precision, quality, and
          reliability from start to finish.
        </p>
        <a href="/contact-us">
          <button className="bg-[#B72025] text-white py-3 px-8 rounded-lg font-barlow uppercase tracking-widest font-bold hover:bg-[#a51e20] transition-colors duration-300">
            Contact Us
          </button>
        </a>
      </div>
    </section>
  );
}
