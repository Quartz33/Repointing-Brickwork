'use client';

import { useState } from 'react';

export default function ContactUs() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    howDidYouFindUs: '',
    serviceRequired: '',
  });

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row text-black">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-4">
          Get in <span className="text-red-600">Touch</span>
        </h2>
        <p className="text-gray-700 mb-6">
          Have a project in mind or need expert advice? Fill out the form below and we’ll get back to you as soon as possible.
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name *"
            className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="tel"
            placeholder="Phone number *"
            className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <select className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500">
            <option>How did you find us?</option>
            <option>Google</option>
            <option>Facebook</option>
            <option>Recommendation</option>
          </select>
          <select className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500">
            <option>What service do you require?</option>
            <option>Repointing</option>
            <option>Lintel Replacement</option>
            <option>Extensions</option>
            <option>Groundwork</option>
          </select>

          <button
            type="submit"
            className="w-full bg-off-red text-white font-semibold py-3 rounded hover:bg-red-50 transition-colors"
          >
            SEND
          </button>
        </form>

        <div className="mt-6">
          <img src="/rb-logo.png" alt="RB Repointing Brickwork" className="h-12" />
        </div>
      </div>

      {/* Right Side - Map */}
      <div className="w-full md:w-1/2 h-96 md:h-auto">
        <iframe
          title="Isle of Wight Map"
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10635.145014036398!2d-1.2140!3d50.6952!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48742cd054c4ae07%3A0xeecaaeb5e643dcdf!2sIsle%20of%20Wight!5e0!3m2!1sen!2suk!4v1592321712104!5m2!1sen!2suk"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
