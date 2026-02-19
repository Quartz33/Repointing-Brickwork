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
      <div className="min-h-screen bg-white flex flex-col md:flex-row text-black">
        
        {/* Left Side - Form Area */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
          
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
              <h2 className="text-4xl font-bold mb-4">
                Get in <span className="text-red-600">Touch</span>
              </h2>
              <p className="text-gray-700 mb-6">
                Have a project in mind or need expert advice? Fill out the form below and we’ll get back to you as soon as possible.
              </p>

              {result === "error" && (
                <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 flex items-center gap-3">
                  <AlertCircle className="w-5 h-5" />
                  <p>Something went wrong sending your message. Please try again.</p>
                </div>
              )}

              <form onSubmit={submitForm} className="space-y-4">
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
                  placeholder="Email"
                  className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Phone number *"
                  className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                />
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

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#B72025] text-white font-semibold py-3.5 rounded hover:bg-[#a51e20] transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
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

          {/* Logo - Fixed Next.js Image Warning */}
          <div className="mt-8">
            <Image 
              src="/logo.jpeg" 
              alt="Repointing Brickwork" 
              width={200} 
              height={48} 
              className="h-12 w-auto object-contain" 
            />
          </div>
        </div>

        {/* Right Side - Map */}
        <div className="w-full md:w-1/2 h-96 md:h-auto bg-gray-100">
          <iframe
            title="Location Map"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d161048.8778335359!2d-1.4286419736802492!3d50.6796939524673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487461230e588fbd%3A0xcfd64a4b27f272b2!2sIsle%20of%20Wight!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}