// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";

// const BookGallery = ({ pages }) => {
//   const [currentPage, setCurrentPage] = useState(0);

//   // Auto-rotate every 2 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentPage((prev) =>
//         prev < pages.length - 1 ? prev + 1 : 0
//       );
//     }, 2000);
//     return () => clearInterval(interval);
//   }, [pages.length]);

//   const goNext = () => {
//     if (currentPage < pages.length - 1) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const goPrev = () => {
//     if (currentPage > 0) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const current = pages[currentPage];

//   return (
//     <div id="gallery" style={styles.container}>
//       <h2 style={styles.title}>{current.title}</h2>
//       <div style={styles.carousel}>
//         {pages.map((page, index) => {
//           // Determine relative position to current page
//           const offset = index - currentPage;

//           // Transform for semi-circle effect:
//           const translateX = offset * 150; // adjust spacing
//           const rotateY = offset * 30; // curve
//           const scale = offset === 0 ? 1 : 0.8;
//           const blur = offset === 0 ? "0px" : "4px";
//           const zIndex = offset === 0 ? 10 : 1;

//           return (
//             <div
//               key={index}
//               style={{
//                 ...styles.imageWrapper,
//                 transform: `translateX(${translateX}px) rotateY(${rotateY}deg) scale(${scale})`,
//                 filter: `blur(${blur})`,
//                 zIndex,
//               }}
//             >
//               <Image
//                 src={
//                   Array.isArray(page.images)
//                     ? page.images[0].src
//                     : page.images.src
//                 }
//                 alt={
//                   Array.isArray(page.images)
//                     ? page.images[0].alt || ""
//                     : page.images.alt || ""
//                 }
//                 width={200}
//                 height={300}
//                 style={styles.image}
//               />
//             </div>
//           );
//         })}
//       </div>
//       <p style={styles.caption}>{current.caption}</p>
//       <div style={styles.controls}>
//         <button onClick={goPrev} style={styles.button}>Previous</button>
//         <button onClick={goNext} style={styles.button}>Next</button>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     textAlign: "center",
//     padding: "40px",
//     fontFamily: "sans-serif",
//   },
//   title: {
//     marginBottom: "20px",
//     fontSize: "24px",
//   },
//   carousel: {
//     position: "relative",
//     height: "350px",
//     perspective: "1000px",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   imageWrapper: {
//     position: "absolute",
//     transition: "transform 0.5s ease, filter 0.5s ease",
//   },
//   image: {
//     borderRadius: "8px",
//     objectFit: "cover",
//   },
//   caption: {
//     marginTop: "20px",
//     fontStyle: "italic",
//   },
//   controls: {
//     marginTop: "20px",
//   },
//   button: {
//     margin: "0 10px",
//     padding: "10px 20px",
//     fontSize: "16px",
//     cursor: "pointer",
//   },
// };

// export default BookGallery;


'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { db } from '../Admin/Firebase/config'; // Adjust the path if needed
import {
  collection,
  getDocs,
  orderBy,
  query,
} from 'firebase/firestore';

export default function BookGallery() {
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  // Fetch gallery images from Firebase
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const q = query(collection(db, 'galleryImages'), orderBy('priority', 'asc'));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          imageUrl: doc.data().imageUrl,
          priority: doc.data().priority,
        }));
        setPages(data);
      } catch (error) {
        console.error('Error fetching gallery images:', error);
      }
    };

    fetchImages();
  }, []);

  // Auto-rotate every 2 seconds
  useEffect(() => {
    if (pages.length === 0) return;
    const interval = setInterval(() => {
      setCurrentPage(prev => (prev < pages.length - 1 ? prev + 1 : 0));
    }, 2000);
    return () => clearInterval(interval);
  }, [pages]);

  const goNext = () => {
    setCurrentPage((prev) => (prev < pages.length - 1 ? prev + 1 : 0));
  };

  const goPrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : pages.length - 1));
  };

  if (pages.length === 0) {
    return <div className="text-center py-10 text-gray-500">Loading gallery...</div>;
  }

  return (
    <div id="gallery" style={styles.container}>
      <h2 style={styles.title}>Gallery Highlights</h2>

      <div style={styles.carousel}>
        {pages.map((page, index) => {
          const offset = index - currentPage;
          const translateX = offset * 150;
          const rotateY = offset * 30;
          const scale = offset === 0 ? 1 : 0.8;
          const blur = offset === 0 ? '0px' : '4px';
          const zIndex = offset === 0 ? 10 : 1;

          return (
            <div
              key={page.id}
              style={{
                ...styles.imageWrapper,
                transform: `translateX(${translateX}px) rotateY(${rotateY}deg) scale(${scale})`,
                filter: `blur(${blur})`,
                zIndex,
              }}
            >
              <Image
                src={page.imageUrl}
                alt={`Gallery image ${index + 1}`}
                width={200}
                height={300}
                style={styles.image}
              />
            </div>
          );
        })}
      </div>

      <div style={styles.controls}>
        <button onClick={goPrev} style={styles.button}>Previous</button>
        <button onClick={goNext} style={styles.button}>Next</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '40px',
    fontFamily: 'sans-serif',
  },
  title: {
    marginBottom: '20px',
    fontSize: '24px',
  },
  carousel: {
    position: 'relative',
    height: '350px',
    perspective: '1000px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    position: 'absolute',
    transition: 'transform 0.5s ease, filter 0.5s ease',
  },
  image: {
    borderRadius: '8px',
    objectFit: 'cover',
  },
  controls: {
    marginTop: '20px',
  },
  button: {
    margin: '0 10px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};
