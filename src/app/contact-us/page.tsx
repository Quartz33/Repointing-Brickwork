'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CheckCircle, Loader2, AlertCircle } from 'lucide-react';

export default function ContactUs() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    howDidYouFindUs: '',
    serviceRequired: 'Repointing', // Default value to match your first option
    message: '',
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Convert React state to FormData for Web3Forms
    const formData = new FormData();
    formData.append("access_key", "cd17011c-83ee-48df-9dab-81620301c068");
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("howDidYouFindUs", form.howDidYouFindUs);
    formData.append("serviceRequired", form.serviceRequired);
    formData.append("message", form.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        console.error("Web3Forms Error:", data.message);
      }
    } catch (error) {
      setStatus("error");
      console.error("Form submission failed:", error);
    }
  };

  // Function to reset everything after a successful submission
  const resetForm = () => {
    setForm({
      name: '',
      email: '',
      phone: '',
      howDidYouFindUs: '',
      serviceRequired: 'Repointing',
      message: '',
    });
    setStatus("idle");
  };

  return (
    <section id="contactus" className="w-full bg-main text-black px-6 lg:px-12 py-20">
      <div className="max-w-4xl mx-auto flex flex-col justify-center min-h-[500px]">
        
        {status === "success" ? (
          /* --- SUCCESS STATE UI --- */
          <div className="flex flex-col items-center justify-center text-center py-12 animate-in fade-in duration-500">
            <CheckCircle className="w-24 h-24 text-green-500 mb-6" />
            <h3 className="font-staatliches text-4xl lg:text-5xl mb-4 text-gray-900 tracking-wide">
              Message Sent!
            </h3>
            <p className="font-inter text-lg text-gray-600 mb-8 max-w-md mx-auto">
              Thank you for reaching out. We have received your details and will be in touch with you shortly.
            </p>
            <button 
              onClick={resetForm}
              className="text-[#B72025] font-semibold font-inter hover:text-[#8a181c] underline underline-offset-4 transition-colors"
            >
              Send another message
            </button>
          </div>
        ) : (
          /* --- FORM UI --- */
          <div className="animate-in fade-in duration-500">
            {/* Heading */}
            <h2 className="font-staatliches text-5xl lg:text-6xl mb-4 text-center">
              Get in <span className="text-[#B72025]">Touch</span>
            </h2>
            <p className="font-inter text-lg lg:text-xl font-light mb-8 text-center max-w-2xl mx-auto">
              Have a project in mind or need expert advice? Fill out the form below and we’ll get back to you as soon as possible.
            </p>

            {/* Error Banner */}
            {status === "error" && (
              <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 flex items-center justify-center gap-3 font-inter">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <p>Something went wrong sending your message. Please try again.</p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 font-inter">
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
                className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-[#B72025] bg-white"
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
                className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-[#B72025] bg-white"
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
                placeholder="Your message (optional)"
                rows={4}
                className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-[#B72025] resize-y"
              />

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-[#B72025] text-white font-semibold py-4 rounded hover:bg-[#a51e20] transition-colors duration-300 disabled:opacity-70 flex justify-center items-center gap-2"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    SENDING...
                  </>
                ) : (
                  "SEND"
                )}
              </button>
            </form>
          </div>
        )}

        {/* Logo */}
        <div className="mt-12 flex justify-center">
          <Image 
            src="/logo.jpeg" 
            alt="RB Repointing Brickwork" 
            width={120} 
            height={48} 
            className="h-12 w-auto object-contain" 
          />
        </div>

      </div>
    </section>
  );
}