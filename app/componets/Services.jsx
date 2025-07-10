import Image from "next/image";

export default function Services() {
  return (
    <section id="services" className="py-12 mt-[-40px] md:py-16 bg-rose-50">
      <div className="container mt-[-40px] mx-auto px-4 md:px-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-extrabold text-black text-center mb-10 md:mb-12">
          Our Half Saree Photography Services
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {[
            {
              title: "Studio Photoshoot",
              img: "/pic.jpg",
              alt: "Studio Half Saree Photography",
              features: [
                "Professional studio setup with traditional Indian props",
                "Multiple backdrop options (plain, themed, cultural)",
                "Perfect for all weather conditions",
                "Available across UK locations",
              ],
            },
            {
              title: "Outdoor Photoshoot",
              img: "/out.jpg",
              alt: "Outdoor Half Saree Photoshoot",
              features: [
                "Scenic locations across UK (parks, landmarks, urban)",
                "Golden hour photography for magical lighting",
                "Natural poses with traditional elements",
                "Perfect for cultural events and celebrations",
              ],
            },
            {
              title: "Family Photoshoot",
              img: "/family.jpg",
              alt: "Family Half Saree Photography",
              features: [
                "Combine half saree with family portraits",
                "Traditional and contemporary poses",
                "Black & white options available",
                "Perfect for Christmas and special occasions",
              ],
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white border border-rose-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:border-rose-300 transition duration-300"
            >
              <div className="h-36 md:h-48 relative">
                <Image
                  src={service.img}
                  alt={service.alt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-3 text-rose-700">
                  {service.title}
                </h3>
                <ul className="space-y-1 md:space-y-2 text-gray-600 text-xs md:text-sm">
                  {service.features.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5 text-rose-500 mr-2 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// import Image from "next/image";

// export default function Services() {
//   return (
//     <section id="services" className="py-12 mt-[-40px] md:py-16 bg-red-50">
//       <div className="container mt-[-40px] mx-auto px-4 md:px-6">
//         <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-extrabold text-black text-center mb-10 md:mb-12">
//           Our Half Saree Photography Services
//         </h2>

//         <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
//           {[
//             {
//               title: "Studio Photoshoot",
//               img: "/pic.jpg",
//               alt: "Studio Half Saree Photography",
//               features: [
//                 "Professional studio setup with traditional Indian props",
//                 "Multiple backdrop options (plain, themed, cultural)",
//                 "Perfect for all weather conditions",
//                 "Available across UK locations",
//               ],
//             },
//             {
//               title: "Outdoor Photoshoot",
//               img: "/out.jpg",
//               alt: "Outdoor Half Saree Photoshoot",
//               features: [
//                 "Scenic locations across UK (parks, landmarks, urban)",
//                 "Golden hour photography for magical lighting",
//                 "Natural poses with traditional elements",
//                 "Perfect for cultural events and celebrations",
//               ],
//             },
//             {
//               title: "Family Photoshoot",
//               img: "/family.jpg",
//               alt: "Family Half Saree Photography",
//               features: [
//                 "Combine half saree with family portraits",
//                 "Traditional and contemporary poses",
//                 "Black & white options available",
//                 "Perfect for Christmas and special occasions",
//               ],
//             },
//           ].map((service, index) => (
//             <div
//               key={index}
//               className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
//             >
//               <div className="h-36 md:h-48 relative">
//                 <Image
//                   src={service.img}
//                   alt={service.alt}
//                   layout="fill"
//                   objectFit="cover"
//                   className="transition-transform duration-500 hover:scale-105"
//                 />
//               </div>
//               <div className="p-4 md:p-6">
//                 <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-3 text-green-700">
//                   {service.title}
//                 </h3>
//                 <ul className="space-y-1 md:space-y-2 text-gray-600 text-xs md:text-sm">
//                   {service.features.map((item, i) => (
//                     <li key={i} className="flex items-start">
//                       <svg
//                         className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M5 13l4 4L19 7"
//                         ></path>
//                       </svg>
//                       <span>{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

