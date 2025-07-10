// 'use client';

// import { useState, useEffect } from 'react';
// import { db } from '../Firebase/config';
// import {
//   collection,
//   addDoc,
//   getDocs,
//   deleteDoc,
//   doc,
//   updateDoc,
//   query,
//   orderBy,
// } from 'firebase/firestore';
// import CheckAuth from '../Firebase/CheckAuth';
// import Image from 'next/image';

// export default function GalleryManager() {
//   const [gallery, setGallery] = useState([]);
//   const [form, setForm] = useState({ imageUrl: '', priority: '' });
//   const [editingId, setEditingId] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const fetchGallery = async () => {
//     const q = query(collection(db, 'galleryImages'), orderBy('priority', 'asc'));
//     const snapshot = await getDocs(q);
//     const data = snapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));
//     setGallery(data);
//   };

//   useEffect(() => {
//     fetchGallery();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const resetForm = () => {
//     setForm({ imageUrl: '', priority: '' });
//     setEditingId(null);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { imageUrl, priority } = form;

//     if (!imageUrl || priority === '') {
//       alert('Both fields are required.');
//       return;
//     }

//     setLoading(true);

//     try {
//       if (editingId) {
//         await updateDoc(doc(db, 'galleryImages', editingId), {
//           imageUrl,
//           priority: Number(priority),
//         });
//       } else {
//         await addDoc(collection(db, 'galleryImages'), {
//           imageUrl,
//           priority: Number(priority),
//           createdAt: new Date(),
//         });
//       }

//       resetForm();
//       await fetchGallery();
//     } catch (err) {
//       console.error('Error saving image:', err);
//       alert('Error saving image.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleEdit = (item) => {
//     setForm({
//       imageUrl: item.imageUrl,
//       priority: item.priority,
//     });
//     setEditingId(item.id);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const handleDelete = async (id) => {
//     if (confirm('Are you sure you want to delete this image?')) {
//       await deleteDoc(doc(db, 'galleryImages', id));
//       setGallery((prev) => prev.filter((img) => img.id !== id));
//     }
//   };

//   return (
//     <CheckAuth>
//     <div className="p-6 max-w-6xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6 text-center text-purple-700">Gallery Manager</h1>

//       {/* === Form Section === */}
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-6 rounded shadow space-y-4 mb-10 border"
//       >
//         <div>
//           <label className="block font-semibold mb-1">Image URL</label>
//           <input
//             type="url"
//             name="imageUrl"
//             value={form.imageUrl}
//             onChange={handleChange}
//             placeholder="https://example.com/image.jpg"
//             className="w-full border border-gray-300 rounded px-3 py-2"
//             required
//           />
//         </div>

//         <div>
//           <label className="block font-semibold mb-1">Priority</label>
//           <input
//             type="number"
//             name="priority"
//             value={form.priority}
//             onChange={handleChange}
//             placeholder="e.g. 1"
//             className="w-full border border-gray-300 rounded px-3 py-2"
//             required
//           />
//         </div>

//         <div className="flex gap-4">
//           <button
//             type="submit"
//             disabled={loading}
//             className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded"
//           >
//             {loading ? 'Saving...' : editingId ? 'Update Image' : 'Add Image'}
//           </button>

//           {editingId && (
//             <button
//               type="button"
//               onClick={resetForm}
//               className="bg-gray-300 text-gray-800 px-6 py-2 rounded hover:bg-gray-400"
//             >
//               Cancel
//             </button>
//           )}
//         </div>
//       </form>

//       {/* === Gallery Display === */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
//         {gallery.map((item) => (
//           <div
//             key={item.id}
//             className="bg-white rounded shadow border overflow-hidden flex flex-col"
//           >
//             <Image
//               src={item.imageUrl}
//               height={200}
//               width={300}
//               alt="gallery image"
//               className="w-full h-40 object-cover"
//             />
//             <div className="p-3 flex flex-col flex-grow justify-between">
//               <p className="text-xs text-gray-500">Priority: {item.priority}</p>
//               <div className="flex justify-end mt-3 gap-2">
//                 <button
//                   onClick={() => handleEdit(item)}
//                   className="text-sm text-blue-600 hover:underline"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(item.id)}
//                   className="text-sm text-red-600 hover:underline"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     </CheckAuth>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import { db } from '../Firebase/config';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  query,
  orderBy,
} from 'firebase/firestore';
import CheckAuth from '../Firebase/CheckAuth';
import Image from 'next/image';

export default function GalleryManager() {
  const [gallery, setGallery] = useState([]);
  const [form, setForm] = useState({ imageUrl: '', priority: '' });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchGallery = async () => {
    const q = query(collection(db, 'galleryImages'), orderBy('priority', 'asc'));
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setGallery(data);
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setForm({ imageUrl: '', priority: '' });
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { imageUrl, priority } = form;

    if (!imageUrl || priority === '') {
      alert('Both fields are required.');
      return;
    }

    setLoading(true);

    try {
      if (editingId) {
        await updateDoc(doc(db, 'galleryImages', editingId), {
          imageUrl,
          priority: Number(priority),
        });
      } else {
        await addDoc(collection(db, 'galleryImages'), {
          imageUrl,
          priority: Number(priority),
          createdAt: new Date(),
        });
      }

      resetForm();
      await fetchGallery();
    } catch (err) {
      console.error('Error saving image:', err);
      alert('Error saving image.');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (item) => {
    setForm({ imageUrl: item.imageUrl, priority: item.priority });
    setEditingId(item.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this image?')) {
      await deleteDoc(doc(db, 'galleryImages', id));
      setGallery((prev) => prev.filter((img) => img.id !== id));
    }
  };

  return (
    <CheckAuth>
      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-purple-700">Gallery Manager</h1>

        {/* === Form Section === */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow space-y-4 mb-10 border"
        >
          <div>
            <label className="block font-semibold mb-1">Image URL</label>
            <input
              type="url"
              name="imageUrl"
              value={form.imageUrl}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Priority</label>
            <input
              type="number"
              name="priority"
              value={form.priority}
              onChange={handleChange}
              placeholder="e.g. 1"
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded"
            >
              {loading ? 'Saving...' : editingId ? 'Update Image' : 'Add Image'}
            </button>

            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                className="bg-gray-300 text-gray-800 px-6 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        {/* === Gallery Display === */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {gallery.map((item) => (
            <div
              key={item.id}
              className="relative bg-white rounded shadow border overflow-hidden flex flex-col"
            >
              {/* Priority Badge */}
              <div className="absolute top-2 left-2 bg-[hsl(0,100%,58%)] text-white text-xs font-bold rounded-full w-7 h-7 flex items-center justify-center z-10 shadow">
                {item.priority}
              </div>

              {/* Image */}
              <Image
                src={item.imageUrl}
                height={200}
                width={300}
                alt="gallery image"
                className="w-full h-40 object-cover"
              />

              {/* Controls */}
              <div className="p-3  flex flex-col flex-grow justify-end">
                <div className="flex justify-end gap-2 mt-[-10px]">
                  <button
                    onClick={() => handleEdit(item)}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-sm text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CheckAuth>
  );
}
