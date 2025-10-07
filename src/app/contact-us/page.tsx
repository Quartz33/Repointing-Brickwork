'use client';

import { useState } from 'react';

export default function ContactUs() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    howDidYouFindUs: '',
    serviceRequired: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle submission logic here (API, email, etc.)
    console.log('Form submitted', form);
  };

  return (
    <section id="contactus" className="w-full bg-main text-black px-6 lg:px-12 py-20">
      <div className="max-w-4xl mx-auto flex flex-col justify-center">
        {/* Heading */}
        <h2 className="font-staatliches text-5xl lg:text-6xl mb-4 text-center">
          Get in <span className="text-[#B72025]">Touch</span>
        </h2>
        <p className="font-inter text-lg lg:text-xl font-light mb-8 text-center">
          Have a project in mind or need expert advice? Fill out the form below and we’ll get back to you as soon as possible.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name *"
            className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-[#B72025]"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-[#B72025]"
          />
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone number *"
            className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-[#B72025]"
            required
          />
          <select
            name="howDidYouFindUs"
            value={form.howDidYouFindUs}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-[#B72025]"
          >
            <option value="">How did you find us?</option>
            <option value="Google">Google</option>
            <option value="Facebook">Facebook</option>
            <option value="Recommendation">Recommendation</option>
          </select>
          <select
            name="serviceRequired"
            value={form.serviceRequired}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-[#B72025]"
          >
            <option value="Repointing">Repointing</option>
            <option value="Lintel Replacement">Lintel Replacement</option>
            <option value="Extensions">Extensions</option>
            <option value="Groundwork">Groundwork</option>
            <option value="Other">Other</option>
          </select>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your message"
            rows={4}
            className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-[#B72025]"
          />

          <button
            type="submit"
            className="w-full bg-[#B72025] text-white font-semibold py-3 rounded hover:bg-[#a51e20] transition-colors duration-300"
          >
            SEND
          </button>
        </form>

        {/* Logo */}
        <div className="mt-8 text-center">
          <img src="/rb-logo.png" alt="RB Repointing Brickwork" className="h-12 mx-auto" />
        </div>
      </div>
    </section>
  );
}
