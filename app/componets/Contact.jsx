// "use client";
// import { collection, addDoc } from "firebase/firestore";
// import { db } from "../Admin/Firebase/config"; 
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";
// import {
//   FaWhatsapp,
//   FaPhoneAlt,
//   FaUser,
//   FaFacebookF,
//   FaInstagram,
//   FaYoutube,
// } from "react-icons/fa";

// export default function Contact() {
//   const [loading, setLoading] = useState(false);
//   const [showFlash, setShowFlash] = useState(false);
//   const [showForm, setShowForm] = useState(true);
//   const [formSubmitted, setFormSubmitted] = useState(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     service: "",
//     location: "",
//     message: "",
//   });

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   setLoading(true);
//   setShowForm(false);

//   try {
//     // Save form data to Firestore
//     await addDoc(collection(db, "contacts"), {
//       ...formData,
//       createdAt: new Date(),
//     });

//     // Show success animation
//     setShowFlash(true);
//     setTimeout(() => setShowFlash(false), 500);
//     setFormSubmitted(true);

//     // Reset form
//     setTimeout(() => {
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         service: "",
//         location: "",
//         message: "",
//       });
//       setFormSubmitted(false);
//       setShowForm(true);
//     }, 3000);
//   } catch (err) {
//     alert("Something went wrong. Please try again.");
//     setShowForm(true);
//   } finally {
//     setLoading(false);
//   }
// };
//   const steps = [
//     "Initial Contact|You fill out our contact form and we'll respond within 24 hours.",
//     "Consultation|We'll schedule a call to understand your vision.",
//     "Custom Proposal|You'll receive a tailored package.",
//     "Booking Confirmation|Secure your date with a contract and deposit.",
//     "Pre-Event Planning|Finalize details like shot lists.",
//     "Event Day|We capture your moments beautifully.",
//     "Delivery|Receive edited high-resolution photos.",
//   ];

//   return (
//     <section id="Contact" className="py-12 md:py-16 bg-[#fff8f0] relative overflow-hidden font-sans">
//       <AnimatePresence>
//         {showFlash && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: [0, 1, 0] }}
//             transition={{ duration: 0.5 }}
//             className="absolute inset-0 bg-white z-20 pointer-events-none"
//           />
//         )}
//       </AnimatePresence>

//       <div className="container mx-auto px-4 md:px-6 relative z-10">
        // <div className="max-w-5xl mx-auto text-center mb-16">
        //   <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#4B0082] mb-4 font-serif">
        //     Contact Our Half-Saree Photographers
        //   </h1>
        //   <p className="text-gray-700 text-lg">
        //     Fill out the form below to book your Half-Saree photoshoot or ask any questions. We proudly serve all regions across the UK, including London.
        //   </p>
        // </div>

        // <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
        //   {/* LEFT: FORM */}
        //   <div className="relative">
        //     <motion.div
        //       initial={{ opacity: 0, y: 50 }}
        //       animate={{ opacity: 1, y: 0 }}
        //       transition={{ delay: 0.2, duration: 0.5 }}
        //       className="bg-[#fffaf5] rounded-lg shadow-md p-6 md:p-8 min-h-[400px] flex items-center justify-center"
        //     >
        //       <AnimatePresence mode="wait">
        //         {showForm ? (
        //           <motion.form
        //             key="form"
        //             initial={{ opacity: 1 }}
        //             exit={{ opacity: 0, scale: 0.95 }}
        //             transition={{ duration: 0.3 }}
        //             onSubmit={handleSubmit}
        //             className="space-y-4 w-full"
        //           >
        //             <div className="flex items-center gap-3 mb-4">
        //               <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 bg-[#ffe4e1] p-1.5 rounded-full shadow-lg text-[#8b0000]" fill="currentColor" viewBox="0 0 24 24">
        //                 <path d="M17 10.5V6c0-1.1-.9-2-2-2H3C1.9 4 1 4.9 1 6v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4.5l5 5v-13l-5 5z" />
        //               </svg>
        //               <h2 className="text-2xl md:text-3xl font-bold text-[#8b0000] font-serif">Capture Your Moment</h2>
        //             </div>

        //             {[
        //               { id: "name", label: "Your Name", type: "text", required: true },
        //               { id: "email", label: "Email Address", type: "email", required: true },
        //               { id: "phone", label: "Phone Number", type: "tel" },
        //               { id: "location", label: "Post code", type: "text", placeholder: "e.g. PO16 7GZ" },
        //             ].map(({ id, label, ...props }) => (
        //               <div key={id}>
        //                 <label htmlFor={id} className="text-xs text-gray-700">{label}</label>
        //                 <input id={id}
        //                   value={formData[id]}
        //                   onChange={handleChange}
        //                   className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:ring-[#8b0000] focus:outline-none"
        //                   {...props}
        //                 />
        //               </div>
        //             ))}

        //             <div>
        //               <label htmlFor="service" className="text-xs text-gray-700">Service Interested In</label>
        //               <select
        //                 id="service"
        //                 value={formData.service}
        //                 onChange={handleChange}
        //                 className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:ring-[#8b0000] focus:outline-none"
        //               >
        //                 <option value="">Select a service</option>
        //                 <option value="half-saree">Half Saree Photography</option>
        //                 <option value="family">Family Photography</option>
        //                 <option value="traditional">Traditional Indian Photography</option>
        //                 <option value="event">Event Photography</option>
        //                 <option value="other">Other</option>
        //               </select>
        //             </div>

        //             <div>
        //               <label htmlFor="message" className="text-xs text-gray-700">Your Message</label>
        //               <textarea
        //                 id="message"
        //                 rows="4"
        //                 value={formData.message}
        //                 onChange={handleChange}
        //                 required
        //                 className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:ring-[#8b0000] focus:outline-none"
        //               />
        //             </div>

        //             <motion.button
        //               type="submit"
        //               disabled={loading}
        //               className={`w-full bg-[#8b0000] text-white font-bold py-2 px-6 rounded-lg transition ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-[#600000]"}`}
        //               whileHover={!loading ? { scale: 1.05 } : {}}
        //               whileTap={!loading ? { scale: 0.98 } : {}}
        //             >
        //               {loading ? "Capturing..." : "Click to Capture"}
        //             </motion.button>
        //           </motion.form>
        //         ) : (
        //           <motion.div
        //             key="success"
        //             initial={{ opacity: 0, scale: 0.9 }}
        //             animate={{ opacity: 1, scale: 1 }}
        //             exit={{ opacity: 0, scale: 0.9 }}
        //             transition={{ duration: 0.5 }}
        //             className="flex flex-col items-center justify-center text-center p-6 w-full"
        //           >
        //             <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 300 }} className="flex flex-col items-center">
        //               <svg className="w-20 h-20 text-[#8b0000] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        //                 <motion.path
        //                   initial={{ pathLength: 0 }}
        //                   animate={{ pathLength: 1 }}
        //                   transition={{ duration: 1 }}
        //                   strokeLinecap="round"
        //                   strokeLinejoin="round"
        //                   strokeWidth="2"
        //                   d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        //                 />
        //               </svg>
        //               <h3 className="text-xl font-bold text-gray-800 mb-2">Successfully Captured!</h3>
        //               <p className="text-gray-600 text-sm">We've received your details and will contact you soon.</p>
        //             </motion.div>
        //           </motion.div>
        //         )}
        //       </AnimatePresence>
        //     </motion.div>

        //     {/* Direct Contact Section */}
        //     <section className="bg-[#fffaf5] mt-3 py-4 px-4">
        //       <div className="bg-[#fce8e6] rounded-lg p-6 text-center">
        //         <h3 className="text-xl text-[#8b0000] sm:text-2xl font-semibold mb-3">Prefer Direct Contact?</h3>
        //         <p className="mb-6 text-sm text-gray-700">We're always available for a friendly chat—reach out anytime!</p>
        //         <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        //            <Link
        //             href="https://wa.me/447933223422"
        //             target="_blank"
        //             className="inline-flex items-center gap-2 bg-[#008b1e] hover:bg-[#136000] text-white font-semibold py-2 px-4 rounded-lg transition"
        //           >
        //             <FaWhatsapp className="text-lg" />
        //             WhatsApp Us
        //           </Link>
        //           <Link href="https://wa.me/447933223422" target="_blank" className="text-white bg-blue-500 hover:bg-blue-700 font-semibold py-2 px-4 rounded-lg inline-flex items-center gap-2">
        //             <FaPhoneAlt className="text-sm" />
        //             Call Us
        //           </Link>
        //         </div>
        //       </div>
        //     </section>
        //   </div>

        //   {/* RIGHT: STEPS + SOCIAL ICONS */}
        //   <div>
        //     <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-2xl md:text-3xl font-bold text-[#8b0000] mb-4 font-serif">
        //       Your Photography Journey
        //     </motion.h2>

        //     <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }} className="text-sm text-gray-600 mb-6">
        //       Here's what to expect when you work with us for your half saree photoshoot in the UK.
        //     </motion.p>

        //     <div className="space-y-3 md:space-y-4">
        //       {steps.map((step, index) => {
        //         const [title, desc] = step.split("|");
        //         return (
        //           <motion.div
        //             key={index}
        //             initial={{ opacity: 0, x: -20 }}
        //             animate={{ opacity: 1, x: 0 }}
        //             transition={{ delay: index * 0.1 + 0.3 }}
        //             className={`flex gap-4 ${index === 0 ? "bg-[#fce8e6] border-l-4 border-[#8b0000] rounded-lg p-4" : "bg-white rounded-lg p-4 shadow-md"}`}
        //           >
        //             <div className="w-10 h-10 rounded-full bg-[#ffe4e1] flex items-center justify-center">
        //               <span className="text-[#8b0000] font-bold text-sm">{index + 1}</span>
        //             </div>
        //             <div>
        //               <h3 className="font-semibold text-sm md:text-base text-gray-800">{title}</h3>
        //               {index === 0 && (
        //                 <motion.span initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.6 }} className="inline-flex items-center gap-1 bg-[#ffafcc] text-[#8b0000] text-[10px] font-semibold px-2 py-0.5 rounded-full mt-1">
        //                   <FaUser className="text-xs" />
        //                   Start Here
        //                 </motion.span>
        //               )}
        //               <p className="text-xs text-gray-600 mt-1">{desc}</p>
        //             </div>
        //           </motion.div>
        //         );
        //       })}
        //     </div>

        //     <div className="mt-8 text-center">
        //       <h2 className="font-bold text-[#8b0000] font-serif mb-2">Connect With Us</h2>
        //       <div className="flex justify-center gap-6 text-xl">
        //         <Link href="https://www.instagram.com/snapuphotography/?hl=en" target="_blank">
        //           <FaInstagram className="text-pink-600 hover:scale-110 transition-transform" />
        //         </Link>
        //         <Link href="https://www.youtube.com/@snapuphotography" target="_blank">
        //           <FaYoutube className="text-red-600 hover:scale-110 transition-transform" />
        //         </Link>
        //         <Link href="https://www.facebook.com/snapuphotography1/" target="_blank">
        //           <FaFacebookF className="text-blue-600 hover:scale-110 transition-transform" />
        //         </Link>
        //       </div>
        //     </div>
        //   </div>
        // </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../Admin/Firebase/config";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaUser,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [showFlash, setShowFlash] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    location: "",
    message: "",
  });

  // ✅ Missing function (now added)
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setShowForm(false);

    try {
      // Save form data to Firestore
      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: new Date(),
      });

       await fetch("/Admin/ContactManager/sendEmail", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.firstName,
            email: formData.email,
          }),
        });

      // Show success animation
      setShowFlash(true);
      setTimeout(() => setShowFlash(false), 500);
      setFormSubmitted(true);

      // Reset form
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          location: "",
          message: "",
        });
        setFormSubmitted(false);
        setShowForm(true);
      }, 3000);
    } catch (err) {
      alert("Something went wrong. Please try again.");
      setShowForm(true);
    } finally {
      setLoading(false);
    }
  };

  const steps = [
    "Initial Contact|You fill out our contact form and we'll respond within 24 hours.",
    "Consultation|We'll schedule a call to understand your vision.",
    "Custom Proposal|You'll receive a tailored package.",
    "Booking Confirmation|Secure your date with a contract and deposit.",
    "Pre-Event Planning|Finalize details like shot lists.",
    "Event Day|We capture your moments beautifully.",
    "Delivery|Receive edited high-resolution photos.",
  ];

  return (
    <section id="Contact" className="py-12 md:py-16 bg-[#fff8f0] relative overflow-hidden font-sans">
      <AnimatePresence>
        {showFlash && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-white z-20 pointer-events-none"
          />
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
         <div className="max-w-5xl mx-auto text-center mb-16">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#4B0082] mb-4 font-serif">
            Contact Our Half-Saree Photographers
          </h1>
          <p className="text-gray-700 text-lg">
            Fill out the form below to book your Half-Saree photoshoot or ask any questions. We proudly serve all regions across the UK, including London.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {/* LEFT: FORM */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-[#fffaf5] rounded-lg shadow-md p-6 md:p-8 min-h-[400px] flex items-center justify-center"
            >
              <AnimatePresence mode="wait">
                {showForm ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSubmit}
                    className="space-y-4 w-full"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 bg-[#ffe4e1] p-1.5 rounded-full shadow-lg text-[#8b0000]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17 10.5V6c0-1.1-.9-2-2-2H3C1.9 4 1 4.9 1 6v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4.5l5 5v-13l-5 5z" />
                      </svg>
                      <h2 className="text-2xl md:text-3xl font-bold text-[#8b0000] font-serif">Capture Your Moment</h2>
                    </div>

                    {[
                      { id: "name", label: "Your Name", type: "text", required: true },
                      { id: "email", label: "Email Address", type: "email", required: true },
                      { id: "phone", label: "Phone Number", type: "tel" },
                      { id: "location", label: "Post code", type: "text", placeholder: "e.g. PO16 7GZ" },
                    ].map(({ id, label, ...props }) => (
                      <div key={id}>
                        <label htmlFor={id} className="text-xs text-gray-700">{label}</label>
                        <input id={id}
                          value={formData[id]}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:ring-[#8b0000] focus:outline-none"
                          {...props}
                        />
                      </div>
                    ))}

                    <div>
                      <label htmlFor="service" className="text-xs text-gray-700">Service Interested In</label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:ring-[#8b0000] focus:outline-none"
                      >
                        <option value="">Select a service</option>
                        <option value="half-saree">Half Saree Photography</option>
                        <option value="family">Family Photography</option>
                        <option value="traditional">Traditional Indian Photography</option>
                        <option value="event">Event Photography</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="text-xs text-gray-700">Your Message</label>
                      <textarea
                        id="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:ring-[#8b0000] focus:outline-none"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={loading}
                      className={`w-full bg-[#8b0000] text-white font-bold py-2 px-6 rounded-lg transition ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-[#600000]"}`}
                      whileHover={!loading ? { scale: 1.05 } : {}}
                      whileTap={!loading ? { scale: 0.98 } : {}}
                    >
                      {loading ? "Capturing..." : "Click to Capture"}
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center text-center p-6 w-full"
                  >
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 300 }} className="flex flex-col items-center">
                      <svg className="w-20 h-20 text-[#8b0000] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <motion.path
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1 }}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Successfully Captured!</h3>
                      <p className="text-gray-600 text-sm">We&apos;ve received your details and will contact you soon.</p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Direct Contact Section */}
            <section className="bg-[#fffaf5] mt-3 py-4 px-4">
              <div className="bg-[#fce8e6] rounded-lg p-6 text-center">
                <h3 className="text-xl text-[#8b0000] sm:text-2xl font-semibold mb-3">Prefer Direct Contact?</h3>
                <p className="mb-6 text-sm text-gray-700">We&apos;re always available for a friendly chat—reach out anytime!</p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                   <Link
                    href="https://wa.me/447933223422"
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-[#008b1e] hover:bg-[#136000] text-white font-semibold py-2 px-4 rounded-lg transition"
                  >
                    <FaWhatsapp className="text-lg" />
                    WhatsApp Us
                  </Link>
                  <Link href="https://wa.me/447933223422" target="_blank" className="text-white bg-blue-500 hover:bg-blue-700 font-semibold py-2 px-4 rounded-lg inline-flex items-center gap-2">
                    <FaPhoneAlt className="text-sm" />
                    Call Us
                  </Link>
                </div>
              </div>
            </section>
          </div>

          {/* RIGHT: STEPS + SOCIAL ICONS */}
          <div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-2xl md:text-3xl font-bold text-[#8b0000] mb-4 font-serif">
              Your Photography Journey
            </motion.h2>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }} className="text-sm text-gray-600 mb-6">
              Here&apos;s what to expect when you work with us for your half saree photoshoot in the UK.
            </motion.p>

            <div className="space-y-3 md:space-y-4">
              {steps.map((step, index) => {
                const [title, desc] = step.split("|");
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className={`flex gap-4 ${index === 0 ? "bg-[#fce8e6] border-l-4 border-[#8b0000] rounded-lg p-4" : "bg-white rounded-lg p-4 shadow-md"}`}
                  >
                    <div className="w-10 h-10 rounded-full bg-[#ffe4e1] flex items-center justify-center">
                      <span className="text-[#8b0000] font-bold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm md:text-base text-gray-800">{title}</h3>
                      {index === 0 && (
                        <motion.span initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.6 }} className="inline-flex items-center gap-1 bg-[#ffafcc] text-[#8b0000] text-[10px] font-semibold px-2 py-0.5 rounded-full mt-1">
                          <FaUser className="text-xs" />
                          Start Here
                        </motion.span>
                      )}
                      <p className="text-xs text-gray-600 mt-1">{desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-8 text-center">
              <h2 className="font-bold text-[#8b0000] font-serif mb-2">Connect With Us</h2>
              <div className="flex justify-center gap-6 text-xl">
                <Link href="https://www.instagram.com/snapuphotography/?hl=en" target="_blank">
                  <FaInstagram className="text-pink-600 hover:scale-110 transition-transform" />
                </Link>
                <Link href="https://www.youtube.com/@snapuphotography" target="_blank">
                  <FaYoutube className="text-red-600 hover:scale-110 transition-transform" />
                </Link>
                <Link href="https://www.facebook.com/snapuphotography1/" target="_blank">
                  <FaFacebookF className="text-blue-600 hover:scale-110 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
