// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import ReviewSection from "./Reviews";

// const photos = [
//   { src: "/imag2.jpg", alt: "Traditional Half Saree Photography 1" },
//   { src: "/out.jpg", alt: "Traditional Half Saree Photography 2" },
//   { src: "/pic1.jpg", alt: "Traditional Half Saree Photography 3" },
//   { src: "/pic2.jpg", alt: "Traditional Half Saree Photography 4" },
// ];

// const floatingAnimation = {
//   animate: {
//     y: [0, -10, 0],
//     transition: {
//       repeat: Infinity,
//       duration: 6,
//       ease: "easeInOut",
//     },
//   },
// };

// const textLines = [
//   "Our half saree photography celebrates the timeless allure of Indian tradition, capturing the elegance of silk-draped heritage through masterful lenswork. Each photograph weaves a story of cultural pride, blending the vibrant hues of half sarees with the artistry of professional photography. Tailored for coming-of-age ceremonies or cultural portraits, our bespoke outdoor and studio sessions immortalize your unique journey.",
//   "Serving Indian families across the UK, we craft cherished memories that resonate across generations. With an eye for detail and a passion for heritage, every frame reflects the perfect harmony of tradition and contemporary finesse.",
// ];

// const fixedFirstLine = "Tradition meets the lens";

// const languageHeadings = [
//   "Camera Loves Culture",
//   "చీర అందం, ఫొటో జ్ఞాపకం!",
//   "கேமரா கலாசாரம்",
//   "ಕ್ಯಾಮೆರಾ ಸಂಸ್ಕೃತಿ",
//   "ക്യാമറക്ക് സംസ്കാരം",
// ];

// export default function HeroImageShow() {
//   const [current, setCurrent] = useState(0);
//   const [langIndex, setLangIndex] = useState(0);
//   const [timerPercent, setTimerPercent] = useState(0);
//   const intervalRef = useRef(null);

//   useEffect(() => {
//     setTimerPercent(0);
//     const startTime = Date.now();
//     if (intervalRef.current) clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(() => {
//       const elapsed = Date.now() - startTime;
//       setTimerPercent(Math.min(elapsed / 4000, 1));
//       if (elapsed >= 4000) {
//         setCurrent((prev) => (prev + 1) % photos.length);
//         setLangIndex((prev) => (prev + 1) % languageHeadings.length);
//       }
//     }, 30);

//     return () => {
//       if (intervalRef.current) clearInterval(intervalRef.current);
//     };
//   }, [current]);

//   const imageVariants = {
//     hidden: { opacity: 0, scale: 0.95, rotate: -5 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       rotate: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//     exit: {
//       opacity: 0,
//       scale: 1.05,
//       rotate: 5,
//       transition: { duration: 0.5, ease: "easeIn" },
//     },
//   };

//   const textVariants = {
//     hidden: { opacity: 0, y: 20, scale: 0.95 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
//     }),
//   };

//   return (
//     <>
//       <section id="about" className="py-10 pt-20 bg-[#ffeafd] select-none">
//         <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-4 md:px-10 lg:px-20 hero-section">
//           {/* IMAGE BLOCK */}
//           <AnimatePresence mode="wait" initial={false}>
//             <motion.div
//               key={photos[current].src}
//               variants={imageVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="w-full max-w-md lg:max-w-xl rounded-xl shadow-2xl overflow-hidden cursor-pointer hero-image flex-shrink-0"
//               {...floatingAnimation.animate}
//             >
//               <Image
//                 src={photos[current].src}
//                 alt={photos[current].alt}
//                 width={600}
//                 height={400}
//                 className="rounded-xl pointer-events-none select-none"
//                 priority
//                 draggable={false}
//                 sizes="(max-width: 768px) 90vw, (min-width: 1024px) 600px"
//                 style={{
//                   width: "100%",
//                   height: "auto",
//                   objectFit: "cover",
//                 }}
//               />
//             </motion.div>
//           </AnimatePresence>

//           {/* TEXT BLOCK */}
//           <div>
//             <div className="mb-6 drop-shadow-sm hero-4k" style={{ lineHeight: "1.2" }}>
//               <p className="font-extrabold text-gray-900 text-xl lg:text-3xl 2xl:text-5xl truncate">
//                 {fixedFirstLine}
//               </p>

//               <AnimatePresence mode="wait" initial={false}>
//                 <motion.p
//                   key={`line2-${langIndex}`}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   transition={{ duration: 0.6 }}
//                   className="font-extrabold text-rose-800 2xl:text-4xl truncate text-lg lg:text-2xl"
//                   style={{ whiteSpace: "nowrap" }}
//                 >
//                   {languageHeadings[langIndex]}
//                 </motion.p>
//               </AnimatePresence>
//             </div>

//             <div>
//               {textLines.map((line, idx) => (
//                 <motion.p
//                   key={idx}
//                   custom={idx}
//                   initial="hidden"
//                   animate="visible"
//                   variants={textVariants}
//                   className="text-gray-700 text-base 2xl:text-2xl md:text-lg leading-relaxed mb-4 min-h-[3.25rem]"
//                 >
//                   {line}
//                 </motion.p>
//               ))}
//             </div>

//             <Link
//               href="/#Contact"
//               className="inline-block mt-6 bg-[#9c0329] text-white font-bold py-3 px-8 rounded-full hover:from-rose-800 hover:to-rose-900 hover:text-black transition duration-300"
//             >
//               Book Your Photoshoot
//             </Link>
//           </div>
//         </div>
//       </section>
//       <ReviewSection />
//     </>
//   );
// }



"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../Admin/Firebase/config.js"; 
import ReviewSection from "./Reviews";

const fixedFirstLine = "Tradition meets the lens";

const languageHeadings = [
  "Camera Loves Culture",
  "చీర అందం, ఫొటో జ్ఞాపకం!",
  "கேமரா கலாசாரம்",
  "ಕ್ಯಾಮೆರಾ ಸಂಸ್ಕೃತಿ",
  "ക്യാമറക്ക് സംസ്കാരം",
];

const textLines = [
  "Our half saree photography celebrates the timeless allure of Indian tradition, capturing the elegance of silk-draped heritage through masterful lenswork. Each photograph weaves a story of cultural pride, blending the vibrant hues of half sarees with the artistry of professional photography. Tailored for coming-of-age ceremonies or cultural portraits, our bespoke outdoor and studio sessions immortalize your unique journey.",
  "Serving Indian families across the UK, we craft cherished memories that resonate across generations. With an eye for detail and a passion for heritage, every frame reflects the perfect harmony of tradition and contemporary finesse.",
];

const floatingAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      repeat: Infinity,
      duration: 6,
      ease: "easeInOut",
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95, rotate: -5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 1.05,
    rotate: 5,
    transition: { duration: 0.5, ease: "easeIn" },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function HeroImageShow() {
  const [photos, setPhotos] = useState([]);
  const [current, setCurrent] = useState(0);
  const [langIndex, setLangIndex] = useState(0);
  const [timerPercent, setTimerPercent] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const q = query(collection(db, "heroImages"), orderBy("priority", "asc"));
        const querySnapshot = await getDocs(q);
        const imageList = querySnapshot.docs.map((doc) => ({
          src: doc.data().imageUrl,
          alt: doc.data().altText || "Half Saree Image",
        }));
        setPhotos(imageList);
      } catch (error) {
        console.error("Error fetching hero images:", error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    if (photos.length === 0) return;

    setTimerPercent(0);
    const startTime = Date.now();
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      setTimerPercent(Math.min(elapsed / 4000, 1));
      if (elapsed >= 4000) {
        setCurrent((prev) => (prev + 1) % photos.length);
        setLangIndex((prev) => (prev + 1) % languageHeadings.length);
      }
    }, 30);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [current, photos]);

  if (photos.length === 0) {
    return <p className="text-center py-10">Loading images...</p>;
  }

  return (
    <>
      <section id="about" className="py-10 pt-20 bg-[#ffeafd] select-none">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-4 md:px-10 lg:px-20 hero-section">
          {/* IMAGE BLOCK */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={photos[current].src}
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full max-w-md lg:max-w-xl rounded-xl shadow-2xl overflow-hidden cursor-pointer hero-image flex-shrink-0"
              {...floatingAnimation.animate}
            >
              <Image src={photos[current].src}
                alt={photos[current].alt}
                width={600}
                height={400}
                className="rounded-xl pointer-events-none select-none"
                priority
                draggable={false}
                sizes="(max-width: 768px) 90vw, (min-width: 1024px) 600px"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </motion.div>
          </AnimatePresence>

          {/* TEXT BLOCK */}
          <div>
            <div className="mb-6 drop-shadow-sm hero-4k" style={{ lineHeight: "1.2" }}>
              <p className="font-extrabold text-gray-900 text-xl lg:text-3xl 2xl:text-5xl truncate">
                {fixedFirstLine}
              </p>

              <AnimatePresence mode="wait" initial={false}>
                <motion.p
                  key={`line2-${langIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="font-extrabold text-rose-800 2xl:text-4xl truncate text-lg lg:text-2xl"
                  style={{ whiteSpace: "nowrap" }}
                >
                  {languageHeadings[langIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            <div>
              {textLines.map((line, idx) => (
                <motion.p
                  key={idx}
                  custom={idx}
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                  className="text-gray-700 text-base 2xl:text-2xl md:text-lg leading-relaxed mb-4 min-h-[3.25rem]"
                >
                  {line}
                </motion.p>
              ))}
            </div>

            <Link
              href="/#Contact"
              className="inline-block mt-6 bg-[#9c0329] text-white font-bold py-3 px-8 rounded-full hover:from-rose-800 hover:to-rose-900 hover:text-black transition duration-300"
            >
              Book Your Photoshoot
            </Link>
          </div>
        </div>
      </section>

      <ReviewSection />
    </>
  );
}
