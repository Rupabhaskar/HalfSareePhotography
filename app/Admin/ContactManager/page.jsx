// "use client";

// import { useEffect, useState } from "react";
// import { db } from "../Firebase/config";
// import { collection, getDocs, orderBy, query } from "firebase/firestore";
// import CheckAuth from "../Firebase/CheckAuth";

// export default function ContactSubmissions() {
//   const [submissions, setSubmissions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchSubmissions = async () => {
//       try {
//         const q = query(collection(db, "contacts"), orderBy("createdAt", "desc"));
//         const snapshot = await getDocs(q);
//         const data = snapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setSubmissions(data);
//       } catch (err) {
//         console.error("Error fetching contact messages:", err);
//         setError("Failed to load submissions. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSubmissions();
//   }, []);

//   return (
//     <CheckAuth>
//       <div className="p-4 sm:p-6 max-w-5xl mx-auto">
//         <h1 className="text-2xl sm:text-3xl font-bold text-center text-[#8b0000] mb-6 sm:mb-8">
//           Contact Form Submissions
//         </h1>

//         {loading && <p className="text-center text-gray-500">Loading submissions...</p>}
//         {error && <p className="text-center text-red-500">{error}</p>}
//         {!loading && submissions.length === 0 && !error && (
//           <p className="text-center text-gray-600">No submissions found.</p>
//         )}

//         {!loading && submissions.length > 0 && (
//           <div className="grid grid-cols-1 gap-4 sm:gap-6">
//             {submissions.map((msg) => (
//               <div
//                 key={msg.id}
//                 className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition text-sm sm:text-base"
//               >
//                 <p><strong>Name:</strong> {msg.name || "-"}</p>
//                 <p><strong>Email:</strong> {msg.email || "-"}</p>
//                 <p>
//                   <strong>Phone:</strong>{" "}
//                   {msg.phone ? (
//                     <a
//                       href={`tel:${msg.phone}`}
//                       className="text-blue-600 underline hover:text-blue-800"
//                     >
//                       {msg.phone}
//                     </a>
//                   ) : (
//                     "-"
//                   )}
//                 </p>
//                 <p><strong>Location:</strong> {msg.location || "-"}</p>
//                 <p><strong>Service:</strong> {msg.service || "-"}</p>
//                 <p><strong>Message:</strong> {msg.message?.trim() || "-"}</p>
//                 <p className="text-xs text-gray-500 mt-2">
//                   Submitted on:{" "}
//                   {msg.createdAt?.toDate?.()
//                     ? msg.createdAt.toDate().toLocaleString()
//                     : "Unknown"}
//                 </p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </CheckAuth>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import { db } from "../Firebase/config";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import CheckAuth from "../Firebase/CheckAuth";

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaServicestack,
  FaCommentDots,
  FaClock,
} from "react-icons/fa";

export default function ContactSubmissions() {
  const [submissions, setSubmissions] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const q = query(collection(db, "contacts"), orderBy("createdAt", "desc"));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSubmissions(data);
        setFiltered(data);
      } catch (err) {
        console.error("Error fetching contact messages:", err);
        setError("Failed to load submissions. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, []);

  useEffect(() => {
    const keyword = search.trim().toLowerCase();
    setFiltered(
      submissions.filter((s) => s.name?.toLowerCase().includes(keyword))
    );
  }, [search, submissions]);

  return (
    <CheckAuth>
      <div className="p-4 sm:p-6 max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-rose-700 mb-6">
          Contact Form Submissions
        </h1>

        {/* Search Bar */}
        <div className="flex justify-end mb-4">
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-72 px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-rose-400"
          />
        </div>

        {loading && (
          <p className="text-center text-gray-500 text-sm">Loading submissions...</p>
        )}
        {error && (
          <p className="text-center text-red-600 text-sm">{error}</p>
        )}
        {!loading && filtered.length === 0 && !error && (
          <p className="text-center text-gray-600 text-sm">No submissions found.</p>
        )}

        {!loading && filtered.length > 0 && (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left border border-gray-300 bg-white shadow-md rounded-md">
              <thead className="bg-rose-100 text-rose-800 font-semibold text-xs sm:text-sm">
                <tr>
                  <th className="px-4 py-2 border flex items-center gap-1"><FaUser /> Name</th>
                  <th className="px-4 py-2 border"><FaEnvelope className="inline mr-1" /> Email</th>
                  <th className="px-4 py-2 border"><FaPhone className="inline mr-1" /> Phone</th>
                  <th className="px-4 py-2 border"><FaMapMarkerAlt className="inline mr-1" /> Location</th>
                  <th className="px-4 py-2 border"><FaServicestack className="inline mr-1" /> Service</th>
                  <th className="px-4 py-2 border"><FaCommentDots className="inline mr-1" /> Message</th>
                  <th className="px-4 py-2 border"><FaClock className="inline mr-1" /> Submitted</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((msg) => (
                  <tr key={msg.id} className="hover:bg-gray-50 transition duration-150">
                    <td className="px-4 py-2 border">{msg.name || "-"}</td>
                    <td className="px-4 py-2 border">{msg.email || "-"}</td>
                    <td className="px-4 py-2 border">
                      {msg.phone ? (
                        <a
                          href={`tel:${msg.phone}`}
                          className="text-blue-600 hover:underline"
                        >
                          {msg.phone}
                        </a>
                      ) : (
                        "-"
                      )}
                    </td>
                    <td className="px-4 py-2 border">{msg.location || "-"}</td>
                    <td className="px-4 py-2 border">{msg.service || "-"}</td>
                    <td className="px-4 py-2 border whitespace-pre-line">{msg.message?.trim() || "-"}</td>
                    <td className="px-4 py-2 border text-xs text-gray-500">
                      {msg.createdAt?.toDate?.()
                        ? msg.createdAt.toDate().toLocaleString()
                        : "Unknown"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </CheckAuth>
  );
}
