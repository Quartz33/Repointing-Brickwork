'use client';

import { useState } from 'react';
// import Image from 'next/image'; // Optional: Use this to fix your image warning!

export default function ContactUs() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending..."); // Give the user immediate feedback

    // 1. Grab the form data
    const formData = new FormData(event.currentTarget);

    // 2. Append your Web3Forms access key
    formData.append("access_key", "cd17011c-83ee-48df-9dab-81620301c068");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully! We'll be in touch soon.");
        event.currentTarget.reset(); // Clear the form after success
      } else {
        setResult("Something went wrong. Please try again.");
        console.error("Error from Web3Forms:", data.message);
      }
    } catch (error) {
      setResult("Something went wrong. Please try again.");
      console.error("Form Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id='contactus'>
      <div className="min-h-screen bg-white flex flex-col md:flex-row text-black">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">
            Get in <span className="text-red-600">Touch</span>
          </h2>
          <p className="text-gray-700 mb-6">
            Have a project in mind or need expert advice? Fill out the form below and we’ll get back to you as soon as possible.
          </p>

          {/* ADDED: onSubmit handler */}
          <form onSubmit={submitForm} className="space-y-4">
            {/* ADDED: name="name" and required */}
            <input
              type="text"
              name="name"
              required
              placeholder="Name *"
              className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            {/* ADDED: name="email" */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            {/* ADDED: name="phone" and required */}
            <input
              type="tel"
              name="phone"
              required
              placeholder="Phone number *"
              className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            {/* ADDED: name="source" */}
            <select name="source" className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500">
              <option value="">How did you find us?</option>
              <option value="Google">Google</option>
              <option value="Facebook">Facebook</option>
              <option value="Recommendation">Recommendation</option>
            </select>
            {/* ADDED: name="service" */}
            <select name="service" className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500">
              <option value="">What service do you require?</option>
              <option value="Repointing">Repointing</option>
              <option value="Lintel Replacement">Lintel Replacement</option>
              <option value="Extensions">Extensions</option>
              <option value="Groundwork">Groundwork</option>
            </select>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-off-red text-white font-semibold py-3 rounded hover:bg-red-50 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? "SENDING..." : "SEND"}
            </button>

            {/* ADDED: Status message display */}
            {result && (
              <p className={`text-center font-medium mt-4 ${result.includes("successfully") ? "text-green-600" : "text-red-600"}`}>
                {result}
              </p>
            )}
          </form>

          <div className="mt-6">
            <img src="/logo.jpeg" alt="Repointing Brickwork" className="h-12" />
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
    </section>
  );
}