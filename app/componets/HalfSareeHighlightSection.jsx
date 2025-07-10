// 'use client';

// import { useEffect, useState, useCallback } from 'react';
// import { collection, getDocs, orderBy, query } from 'firebase/firestore';
// import { db } from '../Admin/Firebase/config';
// import Link from 'next/link';

// export default function HalfSareeHighlightSection() {
//   const [videos, setVideos] = useState([]);
//   const [heroVideoId, setHeroVideoId] = useState('');
//   const [selectedVideoId, setSelectedVideoId] = useState('');
//   const [showVideoGrid, setShowVideoGrid] = useState(false);
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const q = query(collection(db, 'youtubeVideos'), orderBy('priority', 'asc'));
//         const snapshot = await getDocs(q);
//         const data = snapshot.docs.map(doc => doc.data());
//         setVideos(data);
//         if (data.length > 0) setHeroVideoId(data[0].videoId);
//       } catch (error) {
//         console.error('Error fetching videos:', error);
//       }
//     };
//     fetchVideos();
//   }, []);

//   const handleThumbnailClick = useCallback((videoId) => {
//     setSelectedVideoId(videoId);
//     setShowModal(true);
//   }, []);

//   const closeModal = useCallback(() => {
//     setSelectedVideoId('');
//     setShowModal(false);
//   }, []);

//   const heroVideoUrl = `https://www.youtube.com/embed/${heroVideoId}?autoplay=1&mute=1&loop=1&playlist=${heroVideoId}`;
//   const modalVideoUrl = `https://www.youtube.com/embed/${selectedVideoId}?autoplay=1&mute=0&loop=1&playlist=${selectedVideoId}`;

//   return (
//     <div className="w-full bg-black text-white relative ">
//       {/* === HERO VIDEO === */}
//       <div className="relative h-[90vh] mb-[50px] w-full overflow-hidden">
//         {heroVideoId && (
//           <div className="absolute inset-0 z-0 scale-[1.45] origin-center">
//             <iframe
//               src={heroVideoUrl}
//               title="Featured Hero Video"
//               frameBorder="0"
//               allow="autoplay; encrypted-media"
//               allowFullScreen
//               className="w-full h-full object-cover"
//             />
//           </div>
//         )}

//         {/* === HERO TEXT OVERLAY === */}
//         <div className="absolute inset-0 bg-black/40 z-10 flex flex-col justify-center items-center text-center px-4">
//           <h2 className="text-xl sm:text-3xl font-bold text-rose-300 mb-2">
//             Step into Grace and Heritage
//           </h2>
//           <h1 className="text-4xl sm:text-5xl font-extrabold text-white/50 mb-4">
//             Half Saree Photography Redefined
//           </h1>
//           <p className="max-w-2xl text-sm sm:text-lg text-white/70 mb-6">
//             Commemorate the milestone of womanhood with stunning half saree portraits.
//             Blending tradition with modern elegance—capturing over 800+ ceremonies across the UK.
//           </p>

//           {/* === TOGGLE BUTTON === */}
//           <button
//             onClick={() => setShowVideoGrid(prev => !prev)}
//             className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-2 px-6 rounded shadow transition"
//           >
//             {showVideoGrid ? 'Hide Videos' : 'View More Videos'}
//           </button>
//         </div>
//       </div>

//       {/* === VIDEO GRID === */}
//     {showVideoGrid && (
//   <div className="p-6 bg-[#f8cfd9] grid grid-cols-2 mb-44 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fadeIn">
//     {videos.map((video) => (
//       <Link
//         key={video.videoId}
//         href={`/video/${encodeURIComponent(video.metaTitle)}`}
//         className="group cursor-pointer transition-transform hover:scale-[1.02] text-left bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
//       >
//         {/* Embedded YouTube video instead of thumbnail */}
//         <div className="relative aspect-video w-full bg-black">
//           <iframe
//             className="absolute inset-0 w-full h-full"
//             src={`https://www.youtube.com/embed/${video.videoId}?rel=0&modestbranding=1`}
//             title={video.title}
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//         </div>

//         {/* Content */}
//         <div className="p-4 flex flex-col flex-grow">
//           <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">{video.title}</h3>

//           <p className="text-sm text-gray-600 mb-3 line-clamp-2">
//             {video.description || "Experience the tradition and elegance of Half Saree photography like never before."}
//           </p>

//           {/* Tags */}
//           <div className="mt-auto flex flex-wrap gap-2">
//             {(video.tags || ['Traditional', 'Elegant', 'Cultural']).slice(0, 3).map((tag, index) => (
//               <span
//                 key={index}
//                 className="text-xs bg-rose-100 text-rose-700 px-2 py-1 rounded-full"
//               >
//                 #{tag}
//               </span>
//             ))}
//           </div>
//         </div>
//       </Link>
//     ))}
//   </div>
// )}
//       {/* === ANIMATIONS === */}
//       <style jsx>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: scale(0.95);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.5s ease-in-out;
//         }
//       `}</style>
//     </div>
//   );
// }

'use client';

import { useEffect, useState, useCallback } from 'react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../Admin/Firebase/config';
import Link from 'next/link';

export default function HalfSareeHighlightSection() {
  const [videos, setVideos] = useState([]);
  const [heroVideoId, setHeroVideoId] = useState('');
  const [showVideoGrid, setShowVideoGrid] = useState(false);

  useEffect(() => {
  const hash = window.location.hash;
  if (hash === '#gridOpen') {
    setShowVideoGrid(true);
    // Delay scroll to allow the grid to render
    setTimeout(() => {
      const el = document.getElementById('gridOpen');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }); 
  }
    const fetchVideos = async () => {
      try {
        const q = query(collection(db, 'youtubeVideos'), orderBy('priority', 'asc'));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map(doc => doc.data());
        setVideos(data);
        if (data.length > 0) setHeroVideoId(data[0].videoId);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };
    fetchVideos();
  }, []);

  const heroVideoUrl = `https://www.youtube.com/embed/${heroVideoId}?autoplay=1&mute=1&loop=1&playlist=${heroVideoId}`;

  return (
    <div id='HigVideo' className="w-full bg-black text-white relative">
      {/* === HERO VIDEO === */}
      <div className="relative h-[70vh] sm:h-[90vh] mb-10 w-full overflow-hidden">
        {heroVideoId && (
          <div className="absolute inset-0 z-0 scale-[1.4] origin-center">
            <iframe
              src={heroVideoUrl}
              title="Featured Hero Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* === HERO TEXT OVERLAY === */}
        <div className="absolute inset-0 bg-black/50 z-10 flex flex-col justify-center items-center text-center px-4">
          <h2 className="text-base sm:text-2xl font-semibold text-rose-300 mb-2">
            Step into Grace & Heritage
          </h2>
          <h1 className="text-2xl sm:text-5xl font-extrabold text-white/70 mb-4">
            Half Saree Moments
          </h1>
          <p className="max-w-sm sm:max-w-xl text-xs sm:text-lg text-white/60 mb-4">
            Celebrate womanhood with stunning portraits — blending elegance and tradition across the UK.
          </p>

          <button
            onClick={() => setShowVideoGrid(prev => !prev)}
            className="bg-rose-600 hover:bg-rose-700 text-white text-sm sm:text-base font-semibold py-2 px-5 rounded shadow transition"
          >
            {showVideoGrid ? 'Hide Videos' : 'View More Videos'}
          </button>
        </div>
      </div>

      {/* === VIDEO GRID === */}
      {showVideoGrid && (
        <div id='gridOpen' className="p-4 sm:p-6 bg-[#f8cfd9] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 animate-fadeIn mb-20">
          {videos.map((video) => (
            <Link
              key={video.videoId}
              href={`/video/${encodeURIComponent(video.metaTitle)}`}
              className="group cursor-pointer transition-transform hover:scale-[1.02] bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
            >
              {/* Embedded Video */}
              <div className="relative aspect-video bg-black">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.videoId}?rel=0&modestbranding=1`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Content */}
              <div className="p-3 sm:p-4 flex flex-col flex-grow">
                <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-1 line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 line-clamp-2">
                  {video.description || "Traditional Half Saree photography captured with elegance and emotion."}
                </p>

                {/* Tags */}
                <div className="mt-auto flex flex-wrap gap-1 sm:gap-2">
                  {(video.tags || ['Traditional', 'Elegant', 'Cultural']).slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="text-[10px] sm:text-xs bg-rose-100 text-rose-700 px-2 py-[2px] rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* === ANIMATIONS === */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}





{/* {showVideoGrid && (
  <div className="p-6 bg-[#f8cfd9] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fadeIn">
    {videos.map((video) => (
      <div
  key={video.videoId}
  className="group cursor-pointer transition-transform hover:scale-105 text-left"
>
  <div className="relative overflow-hidden rounded shadow">
    <Image
      src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
      alt="SnapU Photography"
      width={200}
      height={200}
      className="w-full h-auto transform transition-transform duration-300 ease-in-out group-hover:scale-110"
      loading="lazy"
    />

    {/* Play Button Overlay */}
    {/* <div className="absolute inset-0 flex items-center justify-center">
      <button
        onClick={(e) => {
          e.stopPropagation(); // prevent bubbling
          handleThumbnailClick(video.videoId);
        }}
        aria-label="Play video"
        className="bg-white bg-opacity-70 hover:bg-opacity-90 transition duration-200 rounded-full p-4"
      >
        <svg
          className="w-8 h-8 text-black"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
        </svg>
      </button>
    </div>
  </div>

  <h3 className="mt-2 text-sm font-semibold">{video.title}</h3>
</div>

    ))}
  </div>
)} */} 