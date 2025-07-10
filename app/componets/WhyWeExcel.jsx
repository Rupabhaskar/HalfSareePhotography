
// 'use client';
// import React from 'react';
// import { motion } from 'framer-motion';
// import {
//   StarIcon,
//   CameraIcon,
//   SparklesIcon,
//   HeartIcon,
//   UserGroupIcon,
//   BoltIcon,
//   FilmIcon,
//   ShieldCheckIcon,
//   GlobeAltIcon,
// } from '@heroicons/react/24/solid';

// const features = [
//   {
//     title: 'Award-Winning Creativity',
//     description: 'Blending cultural richness with editorial artistry for timeless portraits.',
//     icon: <StarIcon className="w-8 h-8 text-green-500" />,
//   },
//   {
//     title: 'Personalized Experience',
//     description: 'Outfit styling and storyboarding to reflect your personality.',
//     icon: <UserGroupIcon className="w-8 h-8 text-green-500" />,
//   },
//   {
//     title: 'Cultural Precision',
//     description: 'Capturing South Indian traditions with grace.',
//     icon: <SparklesIcon className="w-8 h-8 text-green-500" />,
//   },
//   {
//     title: 'Cinematic Finishing',
//     description: 'Dreamy magazine-style edits and 4K quality.',
//     icon: <FilmIcon className="w-8 h-8 text-green-500" />,
//   },
//   {
//     title: 'Fast Turnaround',
//     description: 'Get your edited photos quickly without quality loss.',
//     icon: <BoltIcon className="w-8 h-8 text-green-500" />,
//   },
//   {
//     title: 'Privacy & Comfort',
//     description: 'Female photographers & GDPR-compliant policies.',
//     icon: <ShieldCheckIcon className="w-8 h-8 text-green-500" />,
//   },
//   {
//     title: 'UK-Centric Styling',
//     description: 'Modern visuals blended with Indian tradition.',
//     icon: <GlobeAltIcon className="w-8 h-8 text-green-500" />,
//   },
//   {
//     title: 'Top-Tier Equipment',
//     description: 'Captured with premium cameras and lighting.',
//     icon: <CameraIcon className="w-8 h-8 text-green-500" />,
//   },
// ];

// export default function WhyWeExcel() {
//   return (
//     <section className=" bg-red-50 mt-[-50px] py-20 px-4 sm:px-8 lg:px-20 2xl:px-40 overflow-hidden relative">
//       <div className="text-center mt-[-40px] mb-12 max-w-4xl 2xl:max-w-7xl mx-auto">
//         <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-extrabold text-black mb-4 leading-tight">
//           Why We Excel in Half Saree Photography
//         </h2>
//         <p className="text-sm sm:text-base lg:text-lg 2xl:text-xl text-gray-700 flex items-center justify-center gap-2">
//           <SparklesIcon className="w-5 h-5 text-green-500" />
//           A beautiful chapter, captured forever.
//           <CameraIcon className="w-5 h-5 text-green-500" />
//           <HeartIcon className="w-5 h-5 text-green-500" />
//         </p>
//       </div>

//       {/* Scrolling feature cards */}
//       <div className="relative w-full overflow-hidden">
//         <motion.div
//           className="flex gap-6 w-max"
//           animate={{ x: ['0%', '-20%'] }}
//           transition={{
//             x: {
//               repeat: Infinity,
//               repeatType: 'loop',
//               duration: 40,
//               ease: 'linear',
//             },
//           }}
//           style={{ whiteSpace: 'nowrap' }}
//         >
//           {[...features, ...features].map((feature, index) => (
//             <AnimatedFeature key={index} feature={feature} />
//           ))}
//         </motion.div>
//       </div>

//       {/* Call-to-action */}
//       <div className="text-center mt-14">
//         <a
//           href="/#Contact"
//           className="inline-block bg-gradient-to-br from-red-400 to-rose-800  hover:bg-rose-200 hover:text-black text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md text-base lg:text-lg 2xl:text-xl"
//         >
//           Book Your Half Saree Session
//         </a>
//       </div>
//     </section>
//   );
// }

// function AnimatedFeature({ feature }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay: 0.1 }}
//       whileHover={{
//         scale: 1.05,
//         boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
//       }}
//       className="min-w-[240px] sm:min-w-[180px] lg:min-w-[340px] xl:min-w-[420px] 2xl:min-w-[480px] bg-white rounded-xl shadow-md p-4 sm:p-5 flex flex-col gap-2 sm:gap-3 hover:shadow-xl transition duration-300"
//     >
//       <motion.div
//         className="p-2 sm:p-3 bg-green-100 rounded-full w-fit"
//         whileHover={{ rotate: 10 }}
//         transition={{ type: 'spring', stiffness: 300 }}
//       >
//         {feature.icon}
//       </motion.div>
//       <h3 className="text-base sm:text-lg lg:text-xl 2xl:text-2xl font-semibold text-gray-800 leading-snug">
//         {feature.title}
//       </h3>
//       <p className="text-sm sm:text-base lg:text-lg 2xl:text-xl text-gray-600">
//         {feature.description}
//       </p>
//     </motion.div>
//   );
// }
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  StarIcon,
  CameraIcon,
  SparklesIcon,
  HeartIcon,
  UserGroupIcon,
  BoltIcon,
  FilmIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/solid';
import Link from 'next/link';

const features = [
  {
    title: 'Award-Winning Creativity',
    description: 'Blending cultural richness with editorial artistry for timeless portraits.',
    icon: <StarIcon className="w-8 h-8 text-[#9c0329]" />,
  },
  {
    title: 'Personalized Experience',
    description: 'Outfit styling and storyboarding to reflect your personality.',
    icon: <UserGroupIcon className="w-8 h-8 text-[#9c0329]" />,
  },
  {
    title: 'Cultural Precision',
    description: 'Capturing South Indian traditions with grace.',
    icon: <SparklesIcon className="w-8 h-8 text-[#9c0329]" />,
  },
  {
    title: 'Cinematic Finishing',
    description: 'Dreamy magazine-style edits and 4K quality.',
    icon: <FilmIcon className="w-8 h-8 text-[#9c0329]" />,
  },
  {
    title: 'Fast Turnaround',
    description: 'Get your edited photos quickly without quality loss.',
    icon: <BoltIcon className="w-8 h-8 text-[#9c0329]" />,
  },
  {
    title: 'Privacy & Comfort',
    description: 'Female photographers & GDPR-compliant policies.',
    icon: <ShieldCheckIcon className="w-8 h-8 text-[#9c0329]" />,
  },
  {
    title: 'UK-Centric Styling',
    description: 'Modern visuals blended with Indian tradition.',
    icon: <GlobeAltIcon className="w-8 h-8 text-[#9c0329]" />,
  },
  {
    title: 'Top-Tier Equipment',
    description: 'Captured with premium cameras and lighting.',
    icon: <CameraIcon className="w-8 h-8 text-[#9c0329]" />,
  },
];

export default function WhyWeExcel() {
  return (
    <section className="bg-[#ffeafd] mt-[-50px] py-20 px-4 sm:px-8 lg:px-20 2xl:px-40 overflow-hidden relative">
      <div className="text-center mt-[-40px] mb-12 max-w-4xl 2xl:max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-extrabold text-black mb-4 leading-tight">
          Why We Excel in Half Saree Photography
        </h2>
        <p className="text-sm sm:text-base lg:text-lg 2xl:text-xl text-gray-700 flex items-center justify-center gap-2">
          <SparklesIcon className="w-5 h-5 text-[#9c0329]" />
          A beautiful chapter, captured forever.
          <CameraIcon className="w-5 h-5 text-[#9c0329]" />
          <HeartIcon className="w-5 h-5 text-[#9c0329]" />
        </p>
      </div>

      {/* Scrolling feature cards */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ['0%', '-20%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 40,
              ease: 'linear',
            },
          }}
          style={{ whiteSpace: 'nowrap' }}
        >
          {[...features, ...features].map((feature, index) => (
            <AnimatedFeature key={index} feature={feature} />
          ))}
        </motion.div>
      </div>

      {/* Call-to-action */}
      <div className="text-center mt-14">
        <Link
          href="/#Contact"
          className="inline-block bg-gradient-to-br from-[#9c0329] to-rose-800 hover:bg-rose-200 hover:text-black text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md text-base lg:text-lg 2xl:text-xl"
        >
          Book Your Half Saree Session
        </Link>
      </div>
    </section>
  );
}

function AnimatedFeature({ feature }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      whileHover={{
        scale: 1.05,
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
      }}
      className="min-w-[240px] sm:min-w-[180px] lg:min-w-[340px] xl:min-w-[420px] 2xl:min-w-[480px] bg-white rounded-xl shadow-md p-4 sm:p-5 flex flex-col gap-2 sm:gap-3 hover:shadow-xl transition duration-300"
    >
      <motion.div
        className="p-2 sm:p-3 bg-[#fce6eb] rounded-full w-fit"
        whileHover={{ rotate: 10 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {feature.icon}
      </motion.div>
      <h3 className="text-base sm:text-lg lg:text-xl 2xl:text-2xl font-semibold text-black leading-snug">
        {feature.title}
      </h3>
      <p className="text-sm sm:text-base lg:text-lg 2xl:text-xl text-gray-600">
        {feature.description}
      </p>
    </motion.div>
  );
}
