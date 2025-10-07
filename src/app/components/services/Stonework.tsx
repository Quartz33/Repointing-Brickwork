import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function StoneWork() {
  return (
    <section className="w-full bg-main text-black px-6 lg:px-12 py-20">
      {/* Intro Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div className="space-y-6 text-left">
          <h4 className="text-off-red text-sm lg:text-lg tracking-wide uppercase">
            Traditional & Modern Masonry
          </h4>
          <h1 className="font-staatliches text-5xl lg:text-7xl mt-2">
            Stone Work & Masonry
          </h1>
          <p className="font-inter text-base lg:text-lg font-light leading-relaxed">
            From rustic garden walls to bespoke stone façades, our stonemasons bring timeless craftsmanship to every project. Each stone is hand-selected and expertly placed to create strong, beautiful, and enduring structures.
          </p>
          <a href="/contact-us">
            <button className="mt-6 inline-flex items-center bg-[#B72025] text-white py-3 px-7 rounded-lg font-barlow uppercase tracking-widest font-bold hover:bg-[#a51e20] transition-colors duration-300">
              Get a Free Quote <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </a>
        </div>

        <div className="relative w-full h-[420px] lg:h-[520px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/stonework-hero.jpg"
            alt="Expert stone masonry in progress"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Feature Block */}
      <div className="bg-[#f8f8f8] mt-24 py-20 rounded-3xl shadow-inner">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Left */}
          <div className="relative w-full h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-md">
            <Image
              src="/stonewall-finish.jpg"
              alt="Beautiful finished stone wall"
              fill
              className="object-cover"
            />
          </div>

          {/* Text Right */}
          <div className="space-y-6 px-4 lg:px-0">
            <h2 className="font-staatliches text-4xl lg:text-5xl text-[#B72025]">
              Built with Heritage, Finished with Precision
            </h2>
            <p className="font-inter text-base lg:text-lg font-light leading-relaxed">
              Our team works with both natural and engineered stone, combining age-old craftsmanship with modern techniques. From restoration to new builds, we deliver stonework that enhances your property’s strength and character.
            </p>
            <ul className="font-inter text-base lg:text-lg font-light space-y-2">
              <li>🪨 Stone walling and facing</li>
              <li>🏡 Garden features and retaining walls</li>
              <li>🏰 Heritage restoration and repair</li>
              <li>🎨 Custom-cut decorative details</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mid Banner / Quote Section */}
      <div className="relative max-w-6xl mx-auto mt-24 rounded-2xl overflow-hidden shadow-lg">
        <Image
          src="/stonework-banner.jpg"
          alt="Stonework detail close-up"
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white p-8">
          <h3 className="font-staatliches text-3xl lg:text-5xl mb-4">
            “Every Stone Tells a Story”
          </h3>
          <p className="font-inter text-lg font-light max-w-3xl mx-auto">
            Our goal is simple — to craft stonework that blends strength, beauty, and history. Each project is handled with pride, ensuring it stands the test of time.
          </p>
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-6xl mx-auto mt-24 text-center">
        <h2 className="font-staatliches text-3xl lg:text-5xl mb-10">
          Recent Stonework Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative h-[300px] rounded-lg overflow-hidden shadow-md">
            <Image
              src="/stonework-1.jpg"
              alt="Stonework project 1"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden shadow-md">
            <Image
              src="/stonework-2.jpg"
              alt="Stonework project 2"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden shadow-md">
            <Image
              src="/stonework-3.jpg"
              alt="Stonework project 3"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-28">
        <h3 className="font-staatliches text-3xl lg:text-4xl mb-4">
          Ready to Begin Your Stonework Project?
        </h3>
        <p className="font-inter text-lg font-light max-w-2xl mx-auto mb-8">
          Let our team of stonemasons transform your property with craftsmanship that lasts generations. Contact us today for a free consultation and quote.
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
