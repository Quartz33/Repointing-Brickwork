import Link from 'next/link';
import { AlertTriangle, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    // 'min-h-[calc(100vh-100px)]' accounts for your header so it doesn't force a scrollbar
    <main className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-center bg-white text-center px-6 py-8 overflow-y-hidden">
      
      {/* Icon */}
      <div className="bg-red-50 p-5 rounded-full mb-6 border border-red-100 shadow-sm animate-in zoom-in duration-500">
        <AlertTriangle className="w-12 h-12 text-[#B72025]" />
      </div>

      {/* 404 Header - Slightly scaled down */}
      <h1 className="font-staatliches text-7xl md:text-8xl text-gray-900 tracking-widest mb-2 leading-none">
        404
      </h1>
      
      {/* Clever Thematic Message */}
      <h2 className="text-2xl md:text-3xl font-bold mb-3 text-black">
        Looks like we hit a <span className="text-[#B72025]">brick wall.</span>
      </h2>
      
      <p className="font-inter text-base md:text-lg text-gray-600 max-w-md mx-auto mb-8 leading-relaxed">
        The page you are looking for has been moved, deleted, or never existed in the first place.
      </p>

      {/* Call to Action */}
      <Link 
        href="/"
        className="inline-flex items-center gap-2 bg-[#B72025] text-white font-bold font-inter text-base md:text-lg py-3 px-6 rounded-xl hover:bg-[#a51e20] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Homepage
      </Link>
      
    </main>
  );
}