"use client";

import Reviews from "./reviews";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative w-full bg-gradient-to-b from-main to-gray-50 overflow-hidden mx-auto py-10 px-4 lg:px-10">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto gap-10">
        {/* Left Content */}
        <div className="lg:w-1/2 w-full text-center">
          <h4 className="text-off-red text-md lg:pt-10 lg:text-lg font-semibold">
            Bricklaying Contractors you can count on
          </h4>
          <h1 className="font-staatliches text-black pt-1 text-4xl lg:text-6xl">
            REPOINTING BRICKWORK
          </h1>
          <p className="text-black tracking-wide pt-10 text-base lg:text-xl font-normal font-inter">
            Proudly serving the Isle of Wight since 2010, we specialise in
            Restoration, Renovation, and Damp Works. We’re a local team you can
            trust—offering free, no-obligation quotes and a reliable, honest
            service every time.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 pt-16">
            <a href="#contactus">
              <button className="w-full sm:w-auto text-white lg:text-3xl uppercase tracking-widest font-bold font-barlow bg-[#B72025] py-3 px-6 rounded-lg hover:bg-[#a51e20] transition-colors duration-300">
                GET IN TOUCH TODAY
              </button>
            </a>

            <p className="text-black mt-3 font-medium">
              Or call us directly at{" "}
              <a
                href="tel:01983234567"
                className="text-off-red font-semibold hover:underline"
              >
                07841582767
              </a>
            </p>

            <button className="lg:text-xl lg:mt-6 btn btn-outline text-black border-black bg-white hover:bg-gray-300 transition-colors duration-300">
              VIEW OUR WORK <ChevronRight className="w-4 ml-1" />
            </button>
          </div>

          {/* Reviews */}
          <div className="mt-8 flex flex-col items-center justify-center">
            <Reviews />
            <p className="text-sm text-gray-600 mt-4 italic">
              “Rated 5 stars by homeowners across the Isle of Wight”
            </p>
          </div>

          {/* Trust Logos */}
          <div className="flex justify-center items-center gap-6 pt-10 opacity-80">
            <Image
              src="/checkatrade.png"
              alt="Checkatrade"
              width={100}
              height={40}
            />
            <Image
              src="/trustmark.png"
              alt="TrustMark"
              width={100}
              height={40}
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 lg:ml-20 flex items-center justify-center">
          <Image
            alt="Brickwork project"
            src="/brick-hero.jpg"
            width={1000}
            height={600}
            className="rounded-lg object-cover w-full sm:w-[500px] md:w-[600px] lg:w-[1200px] xl:w-[1200px]"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-black text-center pt-16 max-w-5xl mx-auto">
        {[
          { value: "150+", label: "Houses Repointed" },
          { value: "99%", label: "Customer Satisfaction" },
          { value: "300+", label: "Projects Completed" },
          { value: "25+", label: "Years of Experience" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{once:true, amount: 0.8}}
            className="bg-box py-6 rounded-md shadow-sm"
          >
            <p className="text-3xl text-off-red font-semibold">{stat.value}</p>
            <p className="text-black mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Scroll Cue */}
      <div className="flex justify-center mt-10">
        <ChevronRight className="w-6 h-6 text-off-red rotate-90 animate-bounce" />
      </div>
    </div>
  );
}
