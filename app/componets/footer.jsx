// import Link from "next/link";

// export default function Footer() {
//   return (
//     <footer className="bg-gray-200 shadow-xl rounded-lg text-black py-8 md:py-5">
//       <div className="mx-auto px-4 md:px-6">
//         {/* Grid: 1 col on mobile for branding, 2 cols on sm/md for the other three sections */}
//         <div className="grid grid-cols-1 text-black sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
//           {/* Brand Info (always single column) */}
//           <div>
//             <h3 className="text-lg text-black md:text-xl font-semibold mb-3">Your Photography</h3>
//             <p className=" text-black text-sm md:text-base">
//               Capturing life’s precious moments with artistic excellence across the UK.
//             </p>
//           </div>

//           {/* Quick Links (grid-cols-2 on mobile, back to 1 col on md) */}
//           <div>
//             <h3 className="text-lg text-black md:text-xl font-semibold mb-3">Quick Links</h3>
//             <ul className="grid grid-cols-2 text-black md:grid-cols-1 gap-x-4 gap-y-2">
//               <li>
//                 <Link href="/" className="text-black text-sm hover:text-green-800 transition">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/#services" className="text-black text-sm hover:text-green-800 transition">
//                   Services
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/#gallery" className="text-black text-sm hover:text-green-800 transition">
//                   Gallery
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/#packages" className="text-black text-sm hover:text-green-800 transition">
//                   Packages
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Services Links (grid-cols-2 on mobile, 1 col on md) */}
//           <div>
//             <h3 className="text-lg md:text-xl font-semibold mb-3 text-black">Services</h3>
//             <ul className="grid grid-cols-2 md:grid-cols-1 text-black gap-x-4 gap-y-2">
//               <li>
//                 <Link
//                   href="/#half-saree-photography"
//                   className="text-black text-sm hover:text-green-800 transition"
//                 >
//                   Half Saree Photography
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/#family-photography"
//                   className="text-black text-sm hover:text-green-800 transition"
//                 >
//                   Family Photography
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/#traditional-photography"
//                   className="text-black text-sm hover:text-green-800 transition"
//                 >
//                   Traditional Photography
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/#event-photography"
//                   className="text-black text-sm hover:text-green-800 transition"
//                 >
//                   Event Photography
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Info (grid-cols-2 on mobile, 1 col on md) */}
//           <div>
//             <h3 className="text-lg md:text-xl font-semibold mb-3">Contact</h3>
//             <address className="not-italic grid grid-cols-2 md:grid-cols-1 gap-y-1 gap-x-4 text-black text-sm md:text-base">
//               <p>123 Photography Studio</p>
//               <p>London, UK</p>
//               <p>Phone: +44 123 456 7890</p>
//               <p>Email: info@yourphotography.com</p>
//             </address>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-gray-700 mt-8 pt-6 text-center">
//           <p className="text-black text-xs md:text-sm">
//             &copy; {new Date().getFullYear()} Your Photography. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }


import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f7d1d1] shadow-xl rounded-t-2xl text-black py-4 md:py-6">
      <div className="mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {/* Brand Info */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#8b0000] font-serif">
              SnapU Photography
            </h3>
            <p className="text-sm md:text-base leading-relaxed">
              Capturing life’s precious moments with artistic excellence across the UK.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-3 text-[#8b0000] font-serif">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-[#8b0000] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-sm hover:text-[#8b0000] transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="text-sm hover:text-[#8b0000] transition">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/#packages" className="text-sm hover:text-[#8b0000] transition">
                  Packages
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-3 text-[#8b0000] font-serif">
              Services
            </h3>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-2">
              <li>
                <Link href="/#half-saree-photography" className="text-sm hover:text-[#8b0000] transition">
                  Half Saree Photography
                </Link>
              </li>
              <li>
                <Link href="/#family-photography" className="text-sm hover:text-[#8b0000] transition">
                  Family Photography
                </Link>
              </li>
              <li>
                <Link href="/#traditional-photography" className="text-sm hover:text-[#8b0000] transition">
                  Traditional Photography
                </Link>
              </li>
              <li>
                <Link href="/#event-photography" className="text-sm hover:text-[#8b0000] transition">
                  Event Photography
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-3 text-[#8b0000] font-serif">
              Contact
            </h3>
            <address className="not-italic grid grid-cols-2 md:grid-cols-1 gap-y-1 gap-x-4 text-sm md:text-base">
              <p>Snapu Photography Studio</p>
              <p>London, UK</p>
              <p>Phone: +44 123 456 7890</p>
              <p>Email: info@snapuphotography.com</p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#ccc] mt-6 pt-4 text-center">
          <p className="text-xs md:text-sm">
            &copy; {new Date().getFullYear()} SnapU Photography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
