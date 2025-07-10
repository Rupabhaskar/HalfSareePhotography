// // // // import Link from "next/link";

// // // // export default function Plans() {
// // // //   return (
// // // //     <>
// // // //       <section id="packages" className="py-12 mt-[-40px] md:py-16 bg-[#fdecef]">
// // // //         <div className="mx-auto px-4 md:px-6 2xl:max-w-[1600px]">
// // // //           <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-extrabold text-[#9c0329] text-center mb-8 md:mb-12">
// // // //             Half Saree Photography Packages
// // // //           </h2>

// // // //           <p className="text-center text-[#9c0329] text-xs md:text-base 2xl:text-xl max-w-3xl mx-auto mb-8 md:mb-12">
// // // //             Affordable pricing options for every need. All packages include high-resolution edited images with print release.
// // // //           </p>

// // // //           <div className="max-w-6xl mx-auto">
// // // //             <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 items-stretch">
// // // //               {[
// // // //                 {
// // // //                   name: "Basic",
// // // //                   price: "£199",
// // // //                   popular: false,
// // // //                   color: "bg-[#fdecef]",
// // // //                   features: [
// // // //                     "1 hour photoshoot",
// // // //                     "15 high-resolution edited images",
// // // //                     "1 outfit change",
// // // //                     "Studio or outdoor location",
// // // //                     "makeup artist",
// // // //                     "printed photos",
// // // //                   ],
// // // //                 },
// // // //                 {
// // // //                   name: "Premium",
// // // //                   price: "£349",
// // // //                   popular: true,
// // // //                   color: "bg-gradient-to-br from-[#9c0329] to-[#61021b]",
// // // //                   textColor: "text-white",
// // // //                   features: [
// // // //                     "2 hour photoshoot",
// // // //                     "30 high-resolution edited images",
// // // //                     "2 outfit changes",
// // // //                     "Studio + outdoor locations",
// // // //                     "Professional makeup artist",
// // // //                     "5 printed 6x4 photos",
// // // //                   ],
// // // //                 },
// // // //                 {
// // // //                   name: "Deluxe",
// // // //                   price: "£499",
// // // //                   popular: false,
// // // //                   color: "bg-[#fdecef]",
// // // //                   features: [
// // // //                     "3 hour photoshoot",
// // // //                     "50 high-resolution edited images",
// // // //                     "3 outfit changes",
// // // //                     "Multiple locations",
// // // //                     "Professional makeup & hair styling",
// // // //                     "10 printed photos + 1 framed 8x10",
// // // //                     "Online gallery with shareable link",
// // // //                   ],
// // // //                 },
// // // //               ].map((plan, idx) => (
// // // //                 <div
// // // //                   key={idx}
// // // //                   className={`flex flex-col rounded-xl shadow-lg overflow-hidden transform transition duration-300 md:hover:-translate-y-1 ${
// // // //                     plan.popular ? "border-2 border-[#9c0329] relative" : ""
// // // //                   } bg-white`}
// // // //                 >
// // // //                   {plan.popular && (
// // // //                     <div className="absolute top-[1px] right-[2px] md:top-[10px] md:right-4 flex items-center justify-center z-10 w-8 h-8 md:w-18 md:h-18">
// // // //                       <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#FFD700] animate-spin-slow-reverse shadow-md shadow-[#9c0329]/30"></div>
// // // //                       <div className="w-[18px] h-[18px] md:w-[60px] md:h-[60px] rounded-full border-2 border-[#9c0329] animate-spin-slow shadow-[#9c0329]/30"></div>
// // // //                       <div className="absolute flex items-center justify-center inset-0 z-10 bg-[#9c0329] text-white font-bold text-[6px] md:text-[8px] px-1 md:px-2 py-[1px] md:py-1 rounded-full text-center animate-pulse leading-tight whitespace-nowrap">
// // // //                         Most Popular
// // // //                       </div>
// // // //                     </div>
// // // //                   )}

// // // //                   <div className={`${plan.color} py-4 px-5 md:py-6 md:px-8`}>
// // // //                     <h3
// // // //                       className={`text-lg md:text-xl 2xl:text-2xl font-bold text-center ${
// // // //                         plan.textColor || "text-[#9c0329]"
// // // //                       }`}
// // // //                     >
// // // //                       {plan.name}
// // // //                     </h3>
// // // //                     <div className="text-center mt-2 md:mt-4">
// // // //                       <span
// // // //                         className={`text-2xl md:text-4xl 2xl:text-5xl font-bold ${
// // // //                           plan.textColor || "text-black"
// // // //                         }`}
// // // //                       >
// // // //                         {plan.price}
// // // //                       </span>
// // // //                       <span
// // // //                         className={`text-xs md:text-base 2xl:text-lg ${
// // // //                           plan.textColor ? "text-white/70" : "text-[#9c0329]"
// // // //                         }`}
// // // //                       >
// // // //                         /session
// // // //                       </span>
// // // //                     </div>
// // // //                   </div>

// // // //                   <div className="p-4 md:p-8 2xl:p-10 flex flex-col flex-grow">
// // // //                     <ul className="space-y-2 md:space-y-4 2xl:space-y-5 flex-grow">
// // // //                       {plan.features.map((feature, i) => {
// // // //                         const isUnavailable =
// // // //                           plan.name === "Basic" &&
// // // //                           ["makeup artist", "printed photos"].includes(
// // // //                             feature.toLowerCase()
// // // //                           );

// // // //                         return (
// // // //                           <li
// // // //                             key={i}
// // // //                             className={`flex items-start ${
// // // //                               isUnavailable ? "text-[#9c0329]/40" : ""
// // // //                             }`}
// // // //                           >
// // // //                             {!isUnavailable ? (
// // // //                               <svg
// // // //                                 className="w-4 h-4 md:w-5 md:h-5 2xl:w-6 2xl:h-6 text-[#9c0329] mr-2 mt-0.5 flex-shrink-0"
// // // //                                 fill="none"
// // // //                                 stroke="currentColor"
// // // //                                 viewBox="0 0 24 24"
// // // //                               >
// // // //                                 <path
// // // //                                   strokeLinecap="round"
// // // //                                   strokeLinejoin="round"
// // // //                                   strokeWidth="2"
// // // //                                   d="M5 13l4 4L19 7"
// // // //                                 />
// // // //                               </svg>
// // // //                             ) : (
// // // //                               <span className="w-4 h-4 md:w-5 md:h-5 2xl:w-6 2xl:h-6 mr-2 mt-0.5 flex-shrink-0"></span>
// // // //                             )}
// // // //                             <span className="text-xs md:text-sm 2xl:text-base">{feature}</span>
// // // //                           </li>
// // // //                         );
// // // //                       })}
// // // //                     </ul>
// // // //                     <div className="mt-4 md:mt-8 text-center">
// // // //                       <Link
// // // //                         href="#Contact"
// // // //                         className="inline-block bg-gradient-to-br from-[#9c0329] to-[#61021b] text-white font-bold py-2 px-3 md:py-3 md:px-6 2xl:py-4 2xl:px-8 rounded-lg hover:text-black hover:bg-rose-200 transition duration-300 w-full text-xs md:text-base 2xl:text-lg"
// // // //                       >
// // // //                         Book Now
// // // //                       </Link>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               ))}
// // // //             </div>

// // // //             <div className="mt-8 md:mt-12 2xl:mt-16 bg-white rounded-lg shadow-md p-4 md:p-8 2xl:p-12">
// // // //               <h3 className="text-lg md:text-2xl 2xl:text-3xl font-bold text-center text-[#9c0329] mb-4 md:mb-6">
// // // //                 Custom Packages Available
// // // //               </h3>
// // // //               <p className="text-[#9c0329] text-center text-xs md:text-base 2xl:text-lg mb-4 md:mb-6">
// // // //                 Have special requirements? We offer custom packages for large families, events, and commercial needs.
// // // //               </p>
// // // //               <div className="text-center">
// // // //                 <Link
// // // //                   href="#Contact"
// // // //                   className="inline-block bg-gradient-to-br from-[#9c0329] to-[#61021b] text-white font-bold py-2 px-3 md:py-3 md:px-6 2xl:py-4 2xl:px-8 rounded-lg hover:text-black hover:bg-rose-200 transition duration-300 text-xs md:text-base 2xl:text-lg"
// // // //                 >
// // // //                   Request Custom Package
// // // //                 </Link>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       <style jsx>{`
// // // //         @keyframes spin {
// // // //           0% {
// // // //             transform: rotate(0deg);
// // // //           }
// // // //           100% {
// // // //             transform: rotate(360deg);
// // // //           }
// // // //         }
// // // //         @keyframes spin-reverse {
// // // //           0% {
// // // //             transform: rotate(0deg);
// // // //           }
// // // //           100% {
// // // //             transform: rotate(-360deg);
// // // //           }
// // // //         }
// // // //         .animate-spin-slow {
// // // //           animation: spin 6s linear infinite;
// // // //         }
// // // //         .animate-spin-slow-reverse {
// // // //           animation: spin-reverse 10s linear infinite;
// // // //         }
// // // //       `}</style>
// // // //     </>
// // // //   );
// // // // }



// // // // 'use client';

// // // // import { useEffect, useState } from 'react';
// // // // import Link from 'next/link';
// // // // import { collection, getDocs, query, orderBy } from 'firebase/firestore';
// // // // import { dbB } from '../Admin/Firebase/configB';

// // // // export default function Plans() {
// // // //   const [plans, setPlans] = useState([]);
// // // //   const [expandedCard, setExpandedCard] = useState(null);

// // // //   useEffect(() => {
// // // //     const fetchPlans = async () => {
// // // //       try {
// // // //         const q = query(collection(dbB, 'packages'), orderBy('priority', 'asc'));
// // // //         const snap = await getDocs(q);
// // // //         setPlans(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
// // // //       } catch (error) {
// // // //         console.error('Error fetching plans:', error);
// // // //       }
// // // //     };

// // // //     fetchPlans();
// // // //   }, []);

// // // //   const expandedPlan = plans.find((p) => p.id === expandedCard);

// // // //   return (
// // // //     <section id="packages" className="bg-[#fdecef] py-10 relative">
// // // //       {/* Modal for Expanded Plan */}
// // // //       {expandedPlan && (
// // // //         <>
// // // //           {/* Dim Background */}
// // // //           <div
// // // //             className="fixed inset-0 bg-black bg-opacity-50 z-40"
// // // //             onClick={() => setExpandedCard(null)}
// // // //           />

// // // //           {/* Centered Modal Card */}
// // // //           <div className="fixed z-50 inset-0 flex items-center justify-center px-4">
// // // //             <div className="bg-white rounded-lg shadow-2xl max-w-xl w-full p-6 md:p-8 relative">
// // // //               <button
// // // //                 onClick={() => setExpandedCard(null)}
// // // //                 className="absolute top-2 right-2 text-gray-500 hover:text-[#9c0329] text-xl font-bold"
// // // //               >
// // // //                 &times;
// // // //               </button>

// // // //               <h3 className="text-2xl font-bold text-[#9c0329] mb-2">{expandedPlan.title}</h3>
// // // //               <p className="text-lg text-black font-semibold mb-4">
// // // //                 {expandedPlan.price.startsWith('£') ? expandedPlan.price : `£${expandedPlan.price}`} 
// // // //                 <span className="text-sm text-[#9c0329]"> /session</span>
// // // //               </p>

// // // //               <div className="mb-4">
// // // //                 <p className="text-sm font-semibold text-[#9c0329]">Features:</p>
// // // //                 <ul className="text-sm list-disc pl-5 text-gray-700">
// // // //                   {(expandedPlan.features || []).map((item, idx) => <li key={idx}>{item}</li>)}
// // // //                 </ul>
// // // //               </div>

// // // //               <div className="mb-4">
// // // //                 <p className="text-sm font-semibold text-[#9c0329]">Gear:</p>
// // // //                 <ul className="text-sm list-disc pl-5 text-gray-700">
// // // //                   {(expandedPlan.gear || []).map((item, idx) => <li key={idx}>{item}</li>)}
// // // //                 </ul>
// // // //               </div>

// // // //               <div className="mb-4">
// // // //                 <p className="text-sm font-semibold text-[#9c0329]">Deliverables:</p>
// // // //                 <ul className="text-sm list-disc pl-5 text-gray-700">
// // // //                   {(expandedPlan.deliverables || []).map((item, idx) => <li key={idx}>{item}</li>)}
// // // //                 </ul>
// // // //               </div>

// // // //               <div className="text-center mt-4">
// // // //                 <Link
// // // //                   href="#Contact"
// // // //                   className="bg-gradient-to-br from-[#9c0329] to-[#61021b] text-white text-sm font-bold py-2 px-6 rounded hover:bg-pink-300 hover:text-black inline-block"
// // // //                 >
// // // //                   Book Now
// // // //                 </Link>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </>
// // // //       )}

// // // //       {/* Section Content */}
// // // //       <div className="max-w-7xl mx-auto px-4">
// // // //         <h2 className="text-3xl font-bold text-center text-[#9c0329] mb-4">
// // // //           Half Saree Photography Packages
// // // //         </h2>
// // // //         <p className="text-center text-[#9c0329] text-sm md:text-base mb-8 max-w-2xl mx-auto">
// // // //           Affordable pricing options for every need. All packages include high-resolution edited images with print release.
// // // //         </p>

// // // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //           {plans.map((plan) => (
// // // //             <div
// // // //               key={plan.id}
// // // //               className="aspect-[1/1] bg-white rounded-lg shadow-md p-4 flex flex-col justify-between"
// // // //             >
// // // //               <div>
// // // //                 <h3 className="text-lg font-bold text-center text-[#9c0329]">{plan.title}</h3>
// // // //                 <h2 className="text-sm font-bold text-center text-[#9c0329]">{plan.tag}</h2>
// // // //                 <p className="text-center text-black text-xl font-semibold mb-2">
// // // //                   {plan.price.startsWith('£') ? plan.price : `£${plan.price}`} 
// // // //                   <span className="text-sm text-[#9c0329]"> /session</span>
// // // //                 </p>

// // // //                 <div className="mb-1">
// // // //                   <p className="text-sm font-semibold text-[#9c0329]">Features:</p>
// // // //                   <ul className="text-sm pl-4 list-disc text-gray-700">
// // // //                     {(plan.features || []).slice(0, 2).map((f, i) => <li key={i}>{f}</li>)}
// // // //                   </ul>
// // // //                 </div>

// // // //                 <div className="mb-1">
// // // //                   <p className="text-sm font-semibold text-[#9c0329]">Gear:</p>
// // // //                   <ul className="text-sm pl-4 list-disc text-gray-700">
// // // //                     {(plan.gear || []).slice(0, 2).map((g, i) => <li key={i}>{g}</li>)}
// // // //                   </ul>
// // // //                 </div>

// // // //                 <div className="mb-1">
// // // //                   <p className="text-sm font-semibold text-[#9c0329]">Deliverables:</p>
// // // //                   <ul className="text-sm pl-4 list-disc text-gray-700">
// // // //                     {(plan.deliverables || []).slice(0, 2).map((d, i) => <li key={i}>{d}</li>)}
// // // //                   </ul>
// // // //                 </div>

// // // //                 {(plan.features?.length > 2 || plan.gear?.length > 2 || plan.deliverables?.length > 2) && (
// // // //                   <button
// // // //                     onClick={() => setExpandedCard(plan.id)}
// // // //                     className="text-xs text-blue-600 hover:underline mt-1"
// // // //                   >
// // // //                     Read More
// // // //                   </button>
// // // //                 )}
// // // //               </div>

// // // //               <div className="mt-3 text-center">
// // // //                 <Link
// // // //                   href="#Contact"
// // // //                   className="inline-block bg-gradient-to-br from-[#9c0329] to-[#61021b] text-white text-sm font-bold py-2 px-4 rounded hover:bg-pink-300 hover:text-black"
// // // //                 >
// // // //                   Book Now
// // // //                 </Link>
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }



// // // // 'use client';

// // // // import { useEffect, useState } from 'react';
// // // // import Link from 'next/link';
// // // // import { collection, getDocs, query, orderBy } from 'firebase/firestore';
// // // // import { dbB } from '../Admin/Firebase/configB';

// // // // export default function Plans() {
// // // //   const [plans, setPlans] = useState([]);
// // // //   const [expandedCard, setExpandedCard] = useState(null);

// // // //   useEffect(() => {
// // // //     const fetchPlans = async () => {
// // // //       try {
// // // //         const q = query(collection(dbB, 'packages'), orderBy('priority', 'asc'));
// // // //         const snap = await getDocs(q);
// // // //         setPlans(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
// // // //       } catch (error) {
// // // //         console.error('Error fetching plans:', error);
// // // //       }
// // // //     };

// // // //     fetchPlans();
// // // //   }, []);

// // // //   const expandedPlan = plans.find(p => p.id === expandedCard);

// // // //   return (
// // // //     <section id="packages" className="bg-[#fdecef] py-10 relative">
// // // //       {/* Modal for Expanded Plan */}
// // // //       {expandedPlan && (
// // // //         <>
// // // //           <div
// // // //             className="fixed inset-0 bg-black bg-opacity-50 z-40"
// // // //             onClick={() => setExpandedCard(null)}
// // // //           />
// // // //           <div className="fixed z-50 inset-0 flex items-center justify-center px-4">
// // // //             <div
// // // //               className="bg-white rounded-lg shadow-2xl max-w-xl w-full p-6 md:p-8 relative"
// // // //               style={{
// // // //                 backgroundColor: expandedPlan.textBgColor || '#fff',
// // // //                 borderColor: expandedPlan.borderColor || '#ccc',
// // // //                 borderWidth: '2px',
// // // //                 borderStyle: 'solid',
// // // //                 color: expandedPlan.textFontColor || '#000',
// // // //               }}
// // // //             >
// // // //               <button
// // // //                 onClick={() => setExpandedCard(null)}
// // // //                 className="absolute top-2 right-2 text-gray-500 hover:text-[#9c0329] text-xl font-bold"
// // // //               >
// // // //                 &times;
// // // //               </button>

// // // //               {expandedPlan.badge && (
// // // //                 <span
// // // //                   className="absolute top-2 left-2 text-xs font-semibold px-3 py-1 rounded-full shadow"
// // // //                   style={{
// // // //                     backgroundColor: expandedPlan.badgeBackgroundColor || '#ffe0e0',
// // // //                     borderColor: expandedPlan.badgeBorderColor || '#ffb3b3',
// // // //                     borderWidth: '1px',
// // // //                     borderStyle: 'solid',
// // // //                     color: expandedPlan.color || '#9c0329',
// // // //                   }}
// // // //                 >
// // // //                   {expandedPlan.badgeName}
// // // //                 </span>
// // // //               )}

// // // //               <h3 className="text-2xl font-bold mb-2" style={{ color: expandedPlan.color }}>
// // // //                 {expandedPlan.title}
// // // //               </h3>
// // // //               <p className="text-lg font-semibold mb-4">
// // // //                 {expandedPlan.price.startsWith('£') ? expandedPlan.price : `£${expandedPlan.price}`}
// // // //                 <span className="text-sm" style={{ color: expandedPlan.color }}> /session</span>
// // // //               </p>

// // // //               <div className="mb-4">
// // // //                 <p className="text-sm font-semibold" style={{ color: expandedPlan.color }}>Features:</p>
// // // //                 <ul className="text-sm list-disc pl-5" style={{ color: expandedPlan.textFontColor }}>
// // // //                   {(expandedPlan.features || []).map((item, idx) => <li key={idx}>{item}</li>)}
// // // //                 </ul>
// // // //               </div>

// // // //               <div className="mb-4">
// // // //                 <p className="text-sm font-semibold" style={{ color: expandedPlan.color }}>Gear:</p>
// // // //                 <ul className="text-sm list-disc pl-5" style={{ color: expandedPlan.textFontColor }}>
// // // //                   {(expandedPlan.gear || []).map((item, idx) => <li key={idx}>{item}</li>)}
// // // //                 </ul>
// // // //               </div>

// // // //               <div className="mb-4">
// // // //                 <p className="text-sm font-semibold" style={{ color: expandedPlan.color }}>Deliverables:</p>
// // // //                 <ul className="text-sm list-disc pl-5" style={{ color: expandedPlan.textFontColor }}>
// // // //                   {(expandedPlan.deliverables || []).map((item, idx) => <li key={idx}>{item}</li>)}
// // // //                 </ul>
// // // //               </div>

// // // //               <div className="text-center mt-4">
// // // //                 <Link
// // // //                   href="#Contact"
// // // //                   className="text-white text-sm font-bold py-2 px-6 rounded inline-block"
// // // //                   style={{
// // // //                     background: `linear-gradient(to bottom right, ${expandedPlan.color || '#9c0329'}, ${expandedPlan.borderColor || '#61021b'})`,
// // // //                   }}
// // // //                 >
// // // //                   Book Now
// // // //                 </Link>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </>
// // // //       )}

// // // //       {/* Cards */}
// // // //       <div className="max-w-7xl mx-auto px-4">
// // // //         <h2 className="text-3xl font-bold text-center text-[#9c0329] mb-4">
// // // //           Half Saree Photography Packages
// // // //         </h2>
// // // //         <p className="text-center text-[#9c0329] text-sm md:text-base mb-8 max-w-2xl mx-auto">
// // // //           Affordable pricing options for every need. All packages include high-resolution edited images with print release.
// // // //         </p>

// // // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //           {plans.map(plan => {
// // // //             const {
// // // //               badge,
// // // //               badgeName,
// // // //               badgeBackgroundColor,
// // // //               badgeBorderColor,
// // // //               borderColor,
// // // //               color,
// // // //               textFontColor,
// // // //               textBgColor,
// // // //             } = plan;

// // // //             return (
// // // //               <div
// // // //                 key={plan.id}
// // // //                 className="aspect-[1/1] rounded-lg shadow-md p-4 flex flex-col justify-between relative"
// // // //                 style={{
// // // //                   backgroundColor: textBgColor || '#fff',
// // // //                   borderColor: borderColor || '#ccc',
// // // //                   borderWidth: '2px',
// // // //                   borderStyle: 'solid',
// // // //                   color: textFontColor || '#000',
// // // //                 }}
// // // //               >
// // // //                 {/* Badge */}
// // // //                 {badge && (
// // // //                   <span
// // // //                     className="absolute top-2 left-2 text-xs font-semibold px-3 py-1 rounded-full shadow"
// // // //                     style={{
// // // //                       backgroundColor: badgeBackgroundColor || '#ffe0e0',
// // // //                       borderColor: badgeBorderColor || '#ffb3b3',
// // // //                       borderWidth: '1px',
// // // //                       borderStyle: 'solid',
// // // //                       color: color || '#9c0329',
// // // //                     }}
// // // //                   >
// // // //                     {badgeName}
// // // //                   </span>
// // // //                 )}

// // // //                 <div>
// // // //                   <h3 className="text-lg font-bold text-center" style={{ color }}>{plan.title}</h3>
// // // //                   <h2 className="text-sm font-bold text-center" style={{ color }}>{plan.tag}</h2>
// // // //                   <p className="text-center text-xl font-semibold mb-2" style={{ color }}>
// // // //                     {plan.price.startsWith('£') ? plan.price : `£${plan.price}`}
// // // //                     <span className="text-sm" style={{ color }}> /session</span>
// // // //                   </p>

// // // //                   <div className="mb-1">
// // // //                     <p className="text-sm font-semibold" style={{ color }}>Features:</p>
// // // //                     <ul className="text-sm pl-4 list-disc" style={{ color: textFontColor }}>
// // // //                       {(plan.features || []).slice(0, 2).map((f, i) => <li key={i}>{f}</li>)}
// // // //                     </ul>
// // // //                   </div>

// // // //                   <div className="mb-1">
// // // //                     <p className="text-sm font-semibold" style={{ color }}>Gear:</p>
// // // //                     <ul className="text-sm pl-4 list-disc" style={{ color: textFontColor }}>
// // // //                       {(plan.gear || []).slice(0, 2).map((g, i) => <li key={i}>{g}</li>)}
// // // //                     </ul>
// // // //                   </div>

// // // //                   <div className="mb-1">
// // // //                     <p className="text-sm font-semibold" style={{ color }}>Deliverables:</p>
// // // //                     <ul className="text-sm pl-4 list-disc" style={{ color: textFontColor }}>
// // // //                       {(plan.deliverables || []).slice(0, 2).map((d, i) => <li key={i}>{d}</li>)}
// // // //                     </ul>
// // // //                   </div>

// // // //                   {(plan.features?.length > 2 || plan.gear?.length > 2 || plan.deliverables?.length > 2) && (
// // // //                     <button
// // // //                       onClick={() => setExpandedCard(plan.id)}
// // // //                       className="text-xs underline mt-1"
// // // //                       style={{ color: color || '#0070f3' }}
// // // //                     >
// // // //                       Read More
// // // //                     </button>
// // // //                   )}
// // // //                 </div>

// // // //                 <div className="mt-3 text-center">
// // // //                   <Link
// // // //                     href="#Contact"
// // // //                     className="inline-block text-white text-sm font-bold py-2 px-4 rounded"
// // // //                     style={{
// // // //                       background: `linear-gradient(to bottom right, ${color || '#9c0329'}, ${borderColor || '#61021b'})`,
// // // //                     }}
// // // //                   >
// // // //                     Book Now
// // // //                   </Link>
// // // //                 </div>
// // // //               </div>
// // // //             );
// // // //           })}
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }


// // 'use client';

// // import { useEffect, useState } from 'react';
// // import Link from 'next/link';
// // import { collection, getDocs, query, orderBy } from 'firebase/firestore';
// // import { dbB } from '../Admin/Firebase/configB';

// // export default function Plans() {
// //   const [plans, setPlans] = useState([]);
// //   const [expandedCard, setExpandedCard] = useState(null);

// //   useEffect(() => {
// //     const fetchPlans = async () => {
// //       try {
// //         const q = query(collection(dbB, 'packages'), orderBy('priority', 'asc'));
// //         const snap = await getDocs(q);
// //         setPlans(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
// //       } catch (error) {
// //         console.error('Error fetching plans:', error);
// //       }
// //     };

// //     fetchPlans();
// //   }, []);

// //   const expandedPlan = plans.find(p => p.id === expandedCard);

// //   return (
// //     <section id="packages" className="py-12 bg-[#fff5f7] font-sans">
// //       {/* Modal */}
// //       {expandedPlan && (
// //         <>
// //           <div
// //             className="fixed inset-0 z-40 bg-black bg-opacity-60"
// //             onClick={() => setExpandedCard(null)}
// //           />
// //           <div
// //             className="fixed inset-0 z-50 flex items-center justify-center px-4"
// //             onClick={() => setExpandedCard(null)}
// //           >
// //             <div
// //               className="relative w-full max-w-lg p-6 bg-white rounded-xl shadow-2xl border-2"
// //               style={{
// //                 backgroundColor: expandedPlan.textBgColor || '#fff',
// //                 borderColor: expandedPlan.borderColor || '#ccc',
// //                 color: expandedPlan.textFontColor || '#000',
// //               }}
// //               onClick={(e) => e.stopPropagation()}
// //             >
// //               {/* Close Button */}
// //               <button
// //                 onClick={() => setExpandedCard(null)}
// //                 className="absolute top-3 right-4 text-2xl font-bold text-gray-500 hover:text-[#9c0329]"
// //               >
// //                 &times;
// //               </button>

// //               {/* Badge */}
// //               {expandedPlan.badge && (
// //                 <span
// //                   className="absolute top-3 left-4 text-xs font-semibold px-3 py-1 rounded-full shadow border"
// //                   style={{
// //                     backgroundColor: expandedPlan.badgeBackgroundColor || '#ffe0e0',
// //                     borderColor: expandedPlan.badgeBorderColor || '#ffb3b3',
// //                     color: expandedPlan.color || '#9c0329',
// //                   }}
// //                 >
// //                   {expandedPlan.badgeName}
// //                 </span>
// //               )}

// //               {/* Title */}
// //               <h3 className="text-2xl font-extrabold mb-1 text-center" style={{ color: expandedPlan.color }}>
// //                 {expandedPlan.title}
// //               </h3>

// //               {/* Price */}
// //               <p className="text-xl font-bold text-center text-black mb-4">
// //                 {expandedPlan.price.startsWith('£') ? expandedPlan.price : `£${expandedPlan.price}`}
// //                 <span className="text-sm text-gray-700"> /session</span>
// //               </p>

// //               {/* Sections */}
// //               {['features', 'gear', 'deliverables'].map((section, idx) => (
// //                 <div key={idx} className="mb-3">
// //                   <p className="text-sm font-semibold uppercase mb-1" style={{ color: expandedPlan.color }}>
// //                     {section}
// //                   </p>
// //                   <ul className="list-disc pl-5 text-sm" style={{ color: expandedPlan.textFontColor }}>
// //                     {(expandedPlan[section] || []).map((item, i) => (
// //                       <li key={i}>{item}</li>
// //                     ))}
// //                   </ul>
// //                 </div>
// //               ))}

// //               {/* CTA */}
// //               <div className="mt-4 text-center">
// //                 <Link
// //                   href="#Contact"
// //                   className="inline-block px-6 py-2 text-sm font-semibold text-white rounded shadow bg-gradient-to-br from-[#f5075a] to-[#61021b] hover:opacity-90 transition"
// //                   onClick={() => setExpandedCard(null)}
// //                 >
// //                   Book Now
// //                 </Link>
// //               </div>
// //             </div>
// //           </div>
// //         </>
// //       )}

// //       {/* Section Heading */}
// //       <div className="max-w-6xl px-4 mx-auto text-center mb-12">
// //         <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-br from-[#f5075a] to-[#61021b] bg-clip-text text-transparent mb-3">
// //           Half Saree Photography Packages
// //         </h2>
// //         <p className="text-[#9c0329] text-sm md:text-base max-w-2xl mx-auto">
// //           Beautifully captured memories with our budget-friendly packages — all include high-resolution edited images with print release.
// //         </p>
// //       </div>

// //       {/* Cards */}
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4  mx-auto">
// //         {plans.map(plan => (
// //           <div
// //             key={plan.id}
// //             onClick={() => setExpandedCard(plan.id)}
// //             className="relative p-4 rounded-xl border-2 shadow-md hover:shadow-lg cursor-pointer transition-all hover:scale-[1.02]"
// //             style={{
// //               backgroundColor: plan.textBgColor || '#fff',
// //               borderColor: plan.borderColor || '#ccc',
// //               color: plan.textFontColor || '#000',
// //             }}
// //           >
// //             {/* Badge */}
// //             {plan.badge && (
// //               <span
// //                 className="absolute top-2 left-2 px-3 py-1 text-xs font-semibold rounded-full border shadow"
// //                 style={{
// //                   backgroundColor: plan.badgeBackgroundColor || '#ffe0e0',
// //                   borderColor: plan.badgeBorderColor || '#ffb3b3',
// //                   color: plan.color || '#9c0329',
// //                 }}
// //               >
// //                 {plan.badgeName}
// //               </span>
// //             )}

// //             {/* Title */}
// //             <h3 className="text-lg font-bold text-center uppercase mb-1" style={{ color: plan.color || 'black' }}>
// //               ✨ {plan.title} ✨
// //             </h3>

// //             {/* Tag */}
// //             <p className="text-xs text-center font-medium mb-2" style={{ color: plan.color }}>{plan.tag}</p>

// //             {/* Notes */}
// //             {plan.notes && (
// //               <p className="text-xs text-center bg-[#ecdada] text-[#5c1a1a] px-2 py-1 rounded mb-3">
// //                 {plan.notes}
// //               </p>
// //             )}

// //             {/* Price */}
// //             <p className="text-xl font-bold text-center text-black mb-2">
// //               {plan.price.startsWith('£') ? plan.price : `£${plan.price}`}
// //               <span className="text-sm text-gray-700"> /session</span>
// //             </p>

// //             {/* Short List */}
// //             {['features', 'gear', 'deliverables'].map((section, idx) => (
// //               <div key={idx} className="mb-2">
// //                 <p className="text-xs font-semibold uppercase" style={{ color: plan.color }}>
// //                   {section}
// //                 </p>
// //                 <ul className="text-xs list-disc pl-4" style={{ color: plan.textFontColor }}>
// //                   {(plan[section] || []).slice(0, 2).map((item, i) => (
// //                     <li key={i}>{item}</li>
// //                   ))}
// //                 </ul>
// //               </div>
// //             ))}

// //             {/* Read More */}
// //             {(plan.features?.length > 2 || plan.gear?.length > 2 || plan.deliverables?.length > 2) && (
// //               <p className="text-xs underline mt-2 text-left" style={{ color: plan.color }}>
// //                 Read More
// //               </p>
// //             )}

// //             {/* CTA */}
// //             <div className="mt-4 text-center">
// //               <Link
// //                 href="#Contact"
// //                 onClick={(e) => e.stopPropagation()}
// //                 className="inline-block px-4 py-2 text-xs font-semibold text-white rounded-full bg-gradient-to-br from-[#f5075a] to-[#61021b] hover:opacity-90 transition"
// //               >
// //                 Book Now
// //               </Link>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }




// 'use client';

// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { collection, getDocs, query, orderBy } from 'firebase/firestore';
// import { dbB } from '../Admin/Firebase/configB';

// export default function Plans() {
//   const [plans, setPlans] = useState([]);
//   const [expandedCard, setExpandedCard] = useState(null);

//   useEffect(() => {
//     const fetchPlans = async () => {
//       try {
//         const q = query(collection(dbB, 'packages'), orderBy('priority', 'asc'));
//         const snap = await getDocs(q);
//         setPlans(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
//       } catch (error) {
//         console.error('Error fetching plans:', error);
//       }
//     };

//     fetchPlans();
//   }, []);

//   const expandedPlan = plans.find(p => p.id === expandedCard);

//   return (
//     <section id="packages" className="py-12 bg-[#fff5f7] font-sans">
//       {/* Modal */}
//       {expandedPlan && (
//         <>
//           <div
//             className="fixed inset-0 z-40 bg-white/70 bg-opacity-60"
//             onClick={() => setExpandedCard(null)}
//           />
//           <div
//             className="fixed inset-0 z-50 flex items-center justify-center px-4"
//             onClick={() => setExpandedCard(null)}
//           >
//             <div
//               className="relative w-full max-w-lg p-6 bg-white rounded-xl shadow-2xl border-2"
//               style={{
//                 backgroundColor: expandedPlan.textBgColor || '#fff',
//                 borderColor: expandedPlan.borderColor || '#ccc',
//                 color: expandedPlan.textFontColor || '#000',
//               }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Close Button */}
//               <button
//                 onClick={() => setExpandedCard(null)}
//                 className="absolute top-3 right-4 text-2xl font-bold text-gray-500 hover:text-[#9c0329]"
//               >
//                 &times;
//               </button>

//               {/* Badge */}
//               {(expandedPlan.badge || expandedPlan.isLagent) && (
//                 <span
//                   className="absolute top-3 left-4 text-xs font-semibold px-3 py-1 rounded-full shadow border"
//                   style={{
//                     backgroundColor: expandedPlan.badge
//                       ? expandedPlan.badgeBackgroundColor || '#ffe0e0'
//                       : '#e0f0ff',
//                     borderColor: expandedPlan.badge
//                       ? expandedPlan.badgeBorderColor || '#ffb3b3'
//                       : '#7bbef7',
//                     color: expandedPlan.badge
//                       ? expandedPlan.color || '#9c0329'
//                       : '#0056b3',
//                   }}
//                 >
//                   {expandedPlan.badge ? expandedPlan.badgeName : 'Lagent'}
//                 </span>
//               )}

//               {/* Title */}
//               <h3 className="text-2xl font-extrabold mb-1 text-center" style={{ color: expandedPlan.color }}>
//                 {expandedPlan.title}
//               </h3>

//               {/* Price */}
//               <p className="text-xl font-bold text-center text-black mb-4">
//                 {expandedPlan.price.startsWith('£') ? expandedPlan.price : `£${expandedPlan.price}`}
//                 <span className="text-sm text-gray-700"> /session</span>
//               </p>

//               {/* Sections */}
//               {['features', 'gear', 'deliverables'].map((section, idx) => (
//                 <div key={idx} className="mb-3">
//                   <p className="text-sm font-semibold uppercase mb-1" style={{ color: expandedPlan.color }}>
//                     {section}
//                   </p>
//                   <ul className="list-disc pl-5 text-sm" style={{ color: expandedPlan.textFontColor }}>
//                     {(expandedPlan[section] || []).map((item, i) => (
//                       <li key={i}>{item}</li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}

//               {/* CTA */}
//               <div className="mt-4 text-center">
//                 <Link
//                   href="#Contact"
//                   className="inline-block px-6 py-2 text-sm font-semibold text-white rounded shadow bg-gradient-to-br from-[#f5075a] to-[#61021b] hover:opacity-90 transition"
//                   onClick={() => setExpandedCard(null)}
//                 >
//                   Book Now
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </>
//       )}

//       {/* Section Heading */}
//       <div className="max-w-6xl px-4 mx-auto text-center mb-12">
//         <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-br from-[#f5075a] to-[#61021b] bg-clip-text text-transparent mb-3">
//           Half Saree Photography Packages
//         </h2>
//         <p className="text-[#9c0329] text-sm md:text-base max-w-2xl mx-auto">
//           Beautifully captured memories with our budget-friendly packages — all include high-resolution edited images with print release.
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6  mx-auto">
//         {plans.map(plan => (
//           <div
//             key={plan.id}
//             onClick={() => setExpandedCard(plan.id)}
//             className="relative p-4 rounded-xl border-2 shadow-md hover:shadow-lg cursor-pointer transition-all hover:scale-[1.02]"
//             style={{
//               backgroundColor: plan.textBgColor || '#fff',
//               borderColor: plan.borderColor || '#ccc',
//               color: plan.textFontColor || '#000',
//             }}
//           >
//             {/* Badge */}
//             {(plan.badge || plan.isLagent) && (
//               <span
//                 className="absolute top-2 left-2 px-3 py-1 text-xs font-semibold rounded-full border shadow"
//                 style={{
//                   backgroundColor: plan.badge
//                     ? plan.badgeBackgroundColor || '#ffe0e0'
//                     : '#e0f0ff',
//                   borderColor: plan.badge
//                     ? plan.badgeBorderColor || '#ffb3b3'
//                     : '#7bbef7',
//                   color: plan.badge
//                     ? plan.color || '#9c0329'
//                     : '#0056b3',
//                 }}
//               >
//                 {plan.badge ? plan.badgeName : 'Lagent'}
//               </span>
//             )}

//             {/* Title */}
//             <h3 className="text-lg font-bold text-center uppercase mb-1" style={{ color: plan.color || 'black' }}>
//               ✨ {plan.title} ✨
//             </h3>

//             {/* Tag */}
//             <p className="text-xs text-center font-medium mb-2" style={{ color: plan.color }}>
//               {plan.tag}
//             </p>

//             {/* Notes */}
//             {plan.notes && (
//               <p className="text-xs text-center bg-[#ecdada] text-[#5c1a1a] px-2 py-1 rounded mb-3">
//                 {plan.notes}
//               </p>
//             )}

//             {/* Price */}
//             <p className="text-xl font-bold text-center text-black mb-2">
//               {plan.price.startsWith('£') ? plan.price : `£${plan.price}`}
//               <span className="text-sm text-gray-700"> /session</span>
//             </p>

//             {/* Short List */}
//             {['features', 'gear', 'deliverables'].map((section, idx) => (
//               <div key={idx} className="mb-2">
//                 <p className="text-xs font-semibold uppercase" style={{ color: plan.color }}>
//                   {section}
//                 </p>
//                 <ul className="text-xs list-disc pl-4" style={{ color: plan.textFontColor }}>
//                   {(plan[section] || []).slice(0, 2).map((item, i) => (
//                     <li key={i}>{item}</li>
//                   ))}
//                 </ul>
//               </div>
//             ))}

//             {/* Read More */}
//             {(plan.features?.length > 2 || plan.gear?.length > 2 || plan.deliverables?.length > 2) && (
//               <p className="text-xs underline mt-2 text-left" style={{ color: plan.color }}>
//                 Read More
//               </p>
//             )}

//             {/* CTA */}
//             <div className="mb-2 text-center">
//               <Link
//                 href="#Contact"
//                 onClick={(e) => e.stopPropagation()}
//                 className="inline-block  px-4 py-2 text-xs font-semibold text-white rounded-full bg-gradient-to-br from-[#f5075a] to-[#61021b] hover:opacity-90 transition"
//               >
//                 Book Now
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { dbB } from '../Admin/Firebase/configB';

export default function PlansMobile() {
  const [plans, setPlans] = useState([]);
  const [expandedCard, setExpandedCard] = useState(null);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const q = query(collection(dbB, 'packages'), orderBy('priority', 'asc'));
        const snap = await getDocs(q);
        setPlans(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (error) {
        console.error('Error fetching plans:', error);
      }
    };

    fetchPlans();
  }, []);

  const expandedPlan = plans.find(p => p.id === expandedCard);

  return (
    <section id="packages" className="py-10 bg-[#fff5f7] font-sans">
      {/* Modal */}
      {expandedPlan && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/30"
            onClick={() => setExpandedCard(null)}
          />
          <div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            onClick={() => setExpandedCard(null)}
          >
            <div
              className="relative w-full max-w-md max-h-[90vh] overflow-y-auto p-5 bg-white rounded-xl shadow-xl border"
              style={{
                backgroundColor: expandedPlan.textBgColor || '#fff',
                borderColor: expandedPlan.borderColor || '#ccc',
                color: expandedPlan.textFontColor || '#000',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setExpandedCard(null)}
                className="absolute top-3 right-4 text-2xl font-bold text-gray-500 hover:text-[#9c0329]"
              >
                &times;
              </button>

              {(expandedPlan.badge || expandedPlan.isLagent) && (
                <span
                  className="absolute top-3 left-4 text-xs font-semibold px-3 py-1 rounded-full shadow border"
                  style={{
                    backgroundColor: expandedPlan.badgeBackgroundColor || '#ffe0e0',
                    borderColor: expandedPlan.badgeBorderColor || '#ffb3b3',
                    color: expandedPlan.color || '#9c0329',
                  }}
                >
                  {expandedPlan.badgeName || 'Lagent'}
                </span>
              )}

              <h3 className="text-xl font-bold text-center mb-2" style={{ color: expandedPlan.color }}>
                {expandedPlan.title}
              </h3>
              <p className="text-xs text-center font-medium mb-2" style={{ color: expandedPlan.color }}>
                {expandedPlan.tag}
              </p>

              {expandedPlan.notes && (
                <p className="text-xs text-center bg-[#ecdada] text-[#5c1a1a] px-2 py-1 rounded mb-3">
                  {expandedPlan.notes}
                </p>
              )}
              <p className="text-lg font-semibold text-center text-black mb-3">
                {expandedPlan.price.startsWith('£') ? expandedPlan.price : `£${expandedPlan.price}`}
                <span className="text-sm text-gray-700"> /session</span>
              </p>

              {['features', 'gear', 'deliverables'].map((section, idx) => (
                <div key={idx} className="mb-3">
                  <p className="text-sm font-semibold uppercase mb-1" style={{ color: expandedPlan.color }}>
                    {section}
                  </p>
                  <ul className="list-disc pl-5 text-sm" style={{ color: expandedPlan.textFontColor }}>
                    {(expandedPlan[section] || []).map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="mt-4 text-center">
                <Link
                  href="#Contact"
                  className="inline-block px-5 py-2 text-sm font-semibold text-white rounded bg-gradient-to-br from-[#f5075a] to-[#61021b] hover:opacity-90 transition"
                  onClick={() => setExpandedCard(null)}
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Section Heading */}
      <div className="text-center px-4 mb-8">
        <h2 className="text-2xl font-extrabold bg-gradient-to-br from-[#f5075a] to-[#61021b] bg-clip-text text-transparent mb-2">
          Half Saree Photography Packages
        </h2>
        <p className="text-[#9c0329] text-sm">
          Capture your precious memories with elegance — choose a package that fits your style and budget.
        </p>
      </div>

      {/* Plan Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {plans.map(plan => (
          <div
            key={plan.id}
            onClick={() => setExpandedCard(plan.id)}
            className="p-4 rounded-xl border shadow-md hover:shadow-lg cursor-pointer transition-all hover:scale-[1.01] flex flex-col justify-between min-h-[380px]"
            style={{
              backgroundColor: plan.textBgColor || '#fff',
              borderColor: plan.borderColor || '#ccc',
              color: plan.textFontColor || '#000',
            }}
          >
            <div>
              {(plan.badge || plan.isLagent) && (
                <span
                  className="inline-block mb-2 px-3 py-1 text-xs font-semibold rounded-full border shadow"
                  style={{
                    backgroundColor: plan.badge ? plan.badgeBackgroundColor || '#ffe0e0' : '#e0f0ff',
                    borderColor: plan.badge ? plan.badgeBorderColor || '#ffb3b3' : '#7bbef7',
                    color: plan.badge ? plan.color || '#9c0329' : '#0056b3',
                  }}
                >
                  {plan.badge ? plan.badgeName : 'Lagent'}
                </span>
              )}

              <h3 className="text-lg font-bold text-center uppercase mb-1" style={{ color: plan.color || 'black' }}>
                ✨ {plan.title} ✨
              </h3>

              <p className="text-xs text-center font-medium mb-2" style={{ color: plan.color }}>
                {plan.tag}
              </p>

              {plan.notes && (
                <p className="text-xs text-center bg-[#ecdada] text-[#5c1a1a] px-2 py-1 rounded mb-3">
                  {plan.notes}
                </p>
              )}

              <p className="text-lg font-bold text-center text-black mb-2">
                {plan.price.startsWith('£') ? plan.price : `£${plan.price}`}
                <span className="text-sm text-gray-700"> /session</span>
              </p>

              {['features', 'gear', 'deliverables'].map((section, idx) => (
                <div key={idx} className="mb-2">
                  <p className="text-xs font-semibold uppercase" style={{ color: plan.color }}>
                    {section}
                  </p>
                  <ul className="text-xs list-disc pl-4" style={{ color: plan.textFontColor }}>
                    {(plan[section] || []).slice(0, 2).map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}

              {(plan.features?.length > 2 || plan.gear?.length > 2 || plan.deliverables?.length > 2) && (
                <p className="text-xs underline mt-2 text-left" style={{ color: plan.color }}>
                  Read More
                </p>
              )}
            </div>

            {/* CTA Button Always at Bottom */}
            <div className="mt-4 text-center">
              <Link
                href="#Contact"
                onClick={(e) => e.stopPropagation()}
                className="inline-block w-full text-center px-4 py-2 text-xs font-semibold text-white rounded-full bg-gradient-to-br from-[#f5075a] to-[#61021b] hover:opacity-90 transition"
              >
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
