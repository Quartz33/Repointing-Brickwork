'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CheckCircle, Loader2, AlertCircle } from 'lucide-react';

export default function ContactUs() {
  const [result, setResult] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("idle"); 

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
        setResult("success");
      } else {
        setResult("error");
        console.error("Error from Web3Forms:", data.message);
      }
    } catch (error) {
      setResult("error");
      console.error("Form Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id='contactus'>
      {/* Centered the container now that the map is gone */}
      <div className="min-h-screen bg-white flex flex-col items-center justify-center text-black py-12 px-4">
        
        {/* Adjusted width to max-w-3xl so it looks great centered */}
        <div className="w-full max-w-3xl p-8 md:p-12 flex flex-col justify-center">
          
          {result === "success" ? (
            /* --- SUCCESS STATE UI --- */
            <div className="flex flex-col items-center justify-center text-center py-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <CheckCircle className="w-20 h-20 text-green-500 mb-6" />
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Message Sent!</h3>
              <p className="text-gray-600 mb-8 max-w-sm">
                Thank you for reaching out. We have received your enquiry and will be in touch with you as soon as possible.
              </p>
              <button 
                onClick={() => setResult("idle")}
                className="text-red-600 font-semibold hover:text-red-700 underline underline-offset-4"
              >
                Send another message
              </button>
            </div>
          ) : (
            /* --- FORM UI --- */
            <div className="animate-in fade-in duration-500">
              <div className="text-center mb-10">
                <h2 className="text-4xl font-bold mb-4">
                  Get in <span className="text-red-600">Touch</span>
                </h2>
                <p className="text-gray-700 max-w-2xl mx-auto">
                  Have a project in mind or need expert advice? Fill out the form below and we’ll get back to you as soon as possible.
                </p>
              </div>

              {result === "error" && (
                <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p>Something went wrong sending your message. Please try again.</p>
                </div>
              )}

              <form onSubmit={submitForm} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Name *"
                    className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Phone number *"
                  className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <select name="source" className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500 bg-white">
                    <option value="">How did you find us?</option>
                    <option value="Google">Google</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Recommendation">Recommendation</option>
                  </select>
                  <select name="service" className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500 bg-white">
                    <option value="">What service do you require?</option>
                    <option value="Repointing">Repointing</option>
                    <option value="Lintel Replacement">Lintel Replacement</option>
                    <option value="Extensions">Extensions</option>
                    <option value="Groundwork">Groundwork</option>
                  </select>
                </div>

                {/* ADDED: Message Field */}
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Your message..."
                  className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500 resize-y"
                ></textarea>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#B72025] text-white font-semibold py-4 rounded hover:bg-[#a51e20] transition-colors disabled:opacity-70 flex items-center justify-center gap-2 mt-4"
                >
                  {isSubmitting ? (
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
              alt="Repointing Brickwork" 
              width={200} 
              height={48} 
              className="h-12 w-auto object-contain" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}