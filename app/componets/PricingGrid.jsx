// 'use client';

// import { motion } from 'framer-motion';
// import {
//   CameraIcon,
//   BriefcaseIcon,
//   LightBulbIcon,
//   ShieldCheckIcon,
//   SparklesIcon,
//   GlobeAltIcon,
// } from '@heroicons/react/24/outline';

// const sections = [
//   {
//     title: 'Experience & Expertise',
//     icon: CameraIcon,
//     items: [
//       '15+ years capturing cultural events with over 1,200 Half Saree ceremonies.',
//       'Dedicated, full-time team across India & UK.',
//       'Trusted services in London, Midlands, Yorkshire & Scotland.',
//       'Artistic storytelling blending tradition and elegance.',
//       'Fast turnaround and refined photojournalism.',
//     ],
//   },
//   {
//     title: 'Licenses & Equipment',
//     icon: BriefcaseIcon,
//     items: [
//       'Premium cameras, gimbals & drones for cinematic visuals.',
//       'Licensed drone operations across major UK regions.',
//       'Reliable gear for all venue types, indoor & outdoor.',
//       'Advanced lighting kits and stabilizers for sharp shots.',
//     ],
//   },
//   {
//     title: 'Post‑Production',
//     icon: LightBulbIcon,
//     items: [
//       'In-house editing on high‑performance Macs.',
//       'Adobe CC, Final Cut Pro & cinematic LUTs.',
//       'Color-graded for elegance and warmth.',
//       'Secure high-res delivery via encrypted galleries.',
//     ],
//   },
//   {
//     title: 'Data Management',
//     icon: ShieldCheckIcon,
//     items: [
//       'Secure cloud galleries with fast UK-wide uploads.',
//       'Daily backups protect your memories.',
//       'Custom album curation and family sharing tools.',
//     ],
//   },
//   {
//     title: 'Quality & Value',
//     icon: SparklesIcon,
//     items: [
//       'Luxury touch to reflect Half Saree energy.',
//       'Consistent skin tones and lighting.',
//       'Deliverables tailored to South Indian traditions.',
//       'Transparent pricing—no hidden costs.',
//     ],
//   },
//   {
//     title: 'Travel & Logistics',
//     icon: GlobeAltIcon,
//     items: [
//       'All travel, fuel & logistics covered UK-wide.',
//       'On-time setup and vendor coordination.',
//       'Accommodation included when needed.',
//     ],
//   },
// ];

// const containerVariants = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 30 },
//   show: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.5 } },
// };

// export default function PricingGrid() {
//   return (
//     <section className="bg-red-50 text-gray-800 py-20 px-6 sm:px-10 lg:px-24">
//       <div className="max-w-full mt-[-60px] mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, y: -40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-extrabold text-black text-center mb-6"
//         >
//           Understanding Our Pricing
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.7 }}
//           className="text-lg sm:text-xl text-center max-w-2xl mx-auto mb-14 text-gray-700"
//         >
//           A transparent breakdown of what makes our Half Saree Photography exceptional across the UK.
//         </motion.p>

//         <motion.div
//           className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           {sections.map(({ title, icon: Icon, items }) => (
//             <motion.div
//               key={title}
//               variants={cardVariants}
//               className="bg-white p-6 rounded-xl border border-transparent hover:border-[#9c0329] shadow-md hover:shadow-lg transition-all duration-300"
//             >
//               <div className="flex items-center gap-3 mb-4">
//                 <Icon className="w-6 h-6 text-[#9c0329]" />
//                 <h3 className="text-lg sm:text-xl font-semibold text-black">{title}</h3>
//               </div>
//               <ul className="space-y-3 text-sm sm:text-base text-gray-700">
//                 {items.map((item, idx) => (
//                   <li key={idx} className="flex items-start gap-2">
//                     <span className="mt-0.5 text-[#9c0329]">↳</span>
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }




'use client';

import { motion } from 'framer-motion';
import {
  CameraIcon,
  BriefcaseIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  SparklesIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

const sections = [
  {
    title: 'Experience & Expertise',
    icon: CameraIcon,
    items: [
      '15+ years capturing cultural events with over 1,200 Half Saree ceremonies.',
      'Dedicated, full-time team across India & UK.',
      'Trusted services in London, Midlands, Yorkshire & Scotland.',
      'Artistic storytelling blending tradition and elegance.',
      'Fast turnaround and refined photojournalism.',
    ],
  },
  {
    title: 'Licenses & Equipment',
    icon: BriefcaseIcon,
    items: [
      'Premium cameras, gimbals & drones for cinematic visuals.',
      'Licensed drone operations across major UK regions.',
      'Reliable gear for all venue types, indoor & outdoor.',
      'Advanced lighting kits and stabilizers for sharp shots.',
    ],
  },
  {
    title: 'Post‑Production',
    icon: LightBulbIcon,
    items: [
      'In-house editing on high‑performance Macs.',
      'Adobe CC, Final Cut Pro & cinematic LUTs.',
      'Color-graded for elegance and warmth.',
      'Secure high-res delivery via encrypted galleries.',
    ],
  },
  {
    title: 'Data Management',
    icon: ShieldCheckIcon,
    items: [
      'Secure cloud galleries with fast UK-wide uploads.',
      'Daily backups protect your memories.',
      'Custom album curation and family sharing tools.',
    ],
  },
  {
    title: 'Quality & Value',
    icon: SparklesIcon,
    items: [
      'Luxury touch to reflect Half Saree energy.',
      'Consistent skin tones and lighting.',
      'Deliverables tailored to South Indian traditions.',
      'Transparent pricing—no hidden costs.',
    ],
  },
  {
    title: 'Travel & Logistics',
    icon: GlobeAltIcon,
    items: [
      'All travel, fuel & logistics covered UK-wide.',
      'On-time setup and vendor coordination.',
      'Accommodation included when needed.',
    ],
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.5 } },
};

export default function PricingGrid() {
  return (
    <section className="bg-red-50 text-gray-800 py-16 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="max-w-full mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-black text-center mb-4"
        >
          Understanding Our Pricing
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-sm sm:text-base md:text-lg text-center max-w-2xl mx-auto mb-12 text-gray-700"
        >
          A transparent breakdown of what makes our Half Saree Photography exceptional across the UK.
        </motion.p>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {sections.map(({ title, icon: Icon, items }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              className="bg-white p-4 sm:p-6 rounded-xl border border-transparent hover:border-[#9c0329] shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-red-100 flex items-center justify-center">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#9c0329]" />
                </div>
                <h3 className="text-xs sm:text-lg md:text-xl font-semibold text-black">
                  {title}
                </h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm md:text-base text-gray-700">
                {items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-0.5 text-[#9c0329]">↳</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
