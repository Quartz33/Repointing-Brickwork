'use client';

import { MessagesSquare } from 'lucide-react';

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

      {/* Carousel Section */}
      <div className="mt-16 max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold text-center mb-6">Our Services</h3>
        <div className="carousel carousel-center space-x-6 px-4 md:px-0">
          {/* Card 1 */}
          <div className="carousel-item w-80">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
              <h4 className="text-xl font-bold text-black mb-2">Extensions</h4>
              <p className="text-sm text-gray-600">From single rooms to full-house extensions built to last.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="carousel-item w-80">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
              <h4 className="text-xl font-bold text-black mb-2">Lintel Replacement</h4>
              <p className="text-sm text-gray-600">We safely replace failing lintels to restore structural strength.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="carousel-item w-80">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
              <h4 className="text-xl font-bold text-black mb-2">Groundwork</h4>
              <p className="text-sm text-gray-600">Foundations, drainage, and prep done professionally.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
