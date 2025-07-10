// 'use client';

// import { useEffect, useState } from 'react';
// import {
//   collection,
//   getDocs,
//   addDoc,
//   updateDoc,
//   deleteDoc,
//   doc,
//   query,
//   orderBy,
//   serverTimestamp,
// } from 'firebase/firestore';
// import { db } from '../Firebase/config';

// export default function AdminPackageManager() {
//   const [packages, setPackages] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [editId, setEditId] = useState(null);

//   const [form, setForm] = useState({
//     title: '',
//     tagline: '',
//     description: '',
//     price: '',
//     features: [],
//     gear: [],
//     deliverables: [],
//     isPopular: false,
//   });

//   // Fetch packages from Firestore
//   const fetchPackages = async () => {
//     setLoading(true);
//     const q = query(collection(db, 'packages'), orderBy('createdAt', 'desc'));
//     const snap = await getDocs(q);
//     const data = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//     setPackages(data);
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchPackages();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setForm((prev) => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleTextarea = (field, e) => {
//     setForm((prev) => ({
//       ...prev,
//       [field]: e.target.value.split('\n').filter((line) => line.trim()),
//     }));
//   };

//   const resetForm = () => {
//     setForm({
//       title: '',
//       tagline: '',
//       description: '',
//       price: '',
//       features: [],
//       gear: [],
//       deliverables: [],
//       isPopular: false,
//     });
//     setEditId(null);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const payload = {
//       ...form,
//       price: parseFloat(form.price),
//     };

//     try {
//       if (editId) {
//         const docRef = doc(db, 'packages', editId);
//         await updateDoc(docRef, payload);
//         alert('Package updated!');
//       } else {
//         await addDoc(collection(db, 'packages'), {
//           ...payload,
//           createdAt: serverTimestamp(),
//         });
//         alert('Package added!');
//       }

//       resetForm();
//       fetchPackages();
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleEdit = (pkg) => {
//     setEditId(pkg.id);
//     setForm({
//       title: pkg.title || '',
//       tagline: pkg.tagline || '',
//       description: pkg.description || '',
//       price: pkg.price || '',
//       features: pkg.features || [],
//       gear: pkg.gear || [],
//       deliverables: pkg.deliverables || [],
//       isPopular: pkg.isPopular || false,
//     });
//   };

//   const handleDelete = async (id) => {
//     const confirmDelete = confirm('Are you sure you want to delete this package?');
//     if (!confirmDelete) return;

//     try {
//       await deleteDoc(doc(db, 'packages', id));
//       fetchPackages();
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h1 className="text-3xl font-bold text-center mb-6">
//         📦 Manage Photography Packages
//       </h1>

//       {/* Form */}
//       <form onSubmit={handleSubmit} className="bg-white rounded shadow p-6 space-y-4">
//         <input
//           name="title"
//           value={form.title}
//           onChange={handleChange}
//           required
//           placeholder="Title*"
//           className="w-full border border-gray-300 rounded p-2"
//         />
//         <input
//           name="tagline"
//           value={form.tagline}
//           onChange={handleChange}
//           placeholder="Tagline / Subtitle"
//           className="w-full border border-gray-300 rounded p-2"
//         />
//         <input
//           name="price"
//           type="text"
//           value={form.price}
//           onChange={handleChange}
//           required
//           placeholder="Price (£)*"
//           className="w-full border border-gray-300 rounded p-2"
//         />
//         <textarea
//           name="description"
//           value={form.description}
//           onChange={handleChange}
//           rows={2}
//           placeholder="Short Description"
//           className="w-full border border-gray-300 rounded p-2"
//         />

//         <div>
//           <label className="block font-medium mb-1">Features (one per line)</label>
//           <textarea
//             value={form.features.join('\n')}
//             onChange={(e) => handleTextarea('features', e)}
//             rows={4}
//             className="w-full border border-gray-300 rounded p-2"
//           />
//         </div>

//         <div>
//           <label className="block font-medium mb-1">Camera Gear (one per line)</label>
//           <textarea
//             value={form.gear.join('\n')}
//             onChange={(e) => handleTextarea('gear', e)}
//             rows={4}
//             className="w-full border border-gray-300 rounded p-2"
//           />
//         </div>

//         <div>
//           <label className="block font-medium mb-1">Deliverables (one per line)</label>
//           <textarea
//             value={form.deliverables.join('\n')}
//             onChange={(e) => handleTextarea('deliverables', e)}
//             rows={3}
//             className="w-full border border-gray-300 rounded p-2"
//           />
//         </div>

//         <div className="flex items-center">
//           <input
//             name="isPopular"
//             type="checkbox"
//             checked={form.isPopular}
//             onChange={handleChange}
//             id="popular"
//           />
//           <label htmlFor="popular" className="ml-2">
//             Most Popular
//           </label>
//         </div>

//         <div className="flex gap-2">
//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//           >
//             {editId ? 'Update Package' : 'Save Package'}
//           </button>
//           {editId && (
//             <button
//               type="button"
//               onClick={resetForm}
//               className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
//             >
//               Cancel
//             </button>
//           )}
//         </div>
//       </form>

//       {/* Display Packages */}
//       <div className="mt-10">
//         <h2 className="text-2xl font-semibold mb-4">Existing Packages</h2>
//         {loading ? (
//           <p className="text-center text-gray-500">Loading...</p>
//         ) : packages.length === 0 ? (
//           <p className="text-center text-gray-500">No packages yet.</p>
//         ) : (
//           <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//             {packages.map((pkg) => (
//               <div
//                 key={pkg.id}
//                 className="bg-white p-4 border rounded shadow space-y-2 relative"
//               >
//                 <div className="flex justify-between items-center">
//                   <h3 className="text-lg font-bold">{pkg.title}</h3>
//                   {pkg.isPopular && (
//                     <span className="inline-block bg-yellow-300 text-yellow-800 px-2 py-1 rounded text-xs">
//                       🌟 Most Popular
//                     </span>
//                   )}
//                 </div>
//                 {pkg.tagline && (
//                   <p className="italic text-sm text-gray-600">{pkg.tagline}</p>
//                 )}
//                 <p className="font-semibold text-green-600">£{pkg.price}</p>
//                 {pkg.description && <p>{pkg.description}</p>}
//                 {pkg.features?.length > 0 && (
//                   <ul className="list-disc list-inside text-sm">
//                     {pkg.features.map((f, i) => (
//                       <li key={i}>{f}</li>
//                     ))}
//                   </ul>
//                 )}

//                 <div className="flex gap-2 mt-3">
//                   <button
//                     onClick={() => handleEdit(pkg)}
//                     className="text-blue-600 hover:underline text-sm"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(pkg.id)}
//                     className="text-red-600 hover:underline text-sm"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
'use client';

import { useEffect, useState } from 'react';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  serverTimestamp,
} from 'firebase/firestore';
import { dbB } from '../Firebase/configB';

export default function AdminPackageManager() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    title: '',
    tag: '',
    price: '',
    priority: '',
    duration: '',
    coverage: '',
    color: '',
    description: '',
    extraDetails: '',
    notes: '',
    story: '',
    textFontColor: '',
    textBgColor: '',
    borderColor: '',
    badge: '',
    badgeName: '',
    badgeTextColor: '',
    badgeBackgroundColor: '',
    badgeBorderColor: '',
    image: '',
    image1: '',
    image2: '',
    image3: '',
    galleryUrl: '',
    features: [],
    gear: [],
    deliverables: [],
    alldelivarables: [],
    deliverablesNotes: [],
    complimentary: [],
    cameraGearNotes: [],
    seoKeywords: [],
    services: [],
    relatedBlogs: [],
    isPopular: false,
  });

  const fetchPackages = async () => {
    setLoading(true);
    const q = query(collection(dbB, 'packages'), orderBy('createdAt', 'desc'));
    const snap = await getDocs(q);
    setPackages(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    setLoading(false);
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((p) => ({ ...p, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleTextarea = (field, e) => {
    setForm((p) => ({
      ...p,
      [field]: e.target.value.split('\n').filter((l) => l.trim()),
    }));
  };

  const handleBlogField = (key, value) => {
    const updated = form.relatedBlogs.length ? [...form.relatedBlogs] : [{}];
    updated[0][key] = value;
    setForm((p) => ({ ...p, relatedBlogs: updated }));
  };

  const resetForm = () => {
    setForm({
      title: '',
      tag: '',
      price: '',
      priority: '',
      duration: '',
      coverage: '',
      color: '',
      description: '',
      extraDetails: '',
      notes: '',
      story: '',
      textFontColor: '',
      textBgColor: '',
      borderColor: '',
      badge: '',
      badgeName: '',
      badgeTextColor: '',
      badgeBackgroundColor: '',
      badgeBorderColor: '',
      image: '',
      image1: '',
      image2: '',
      image3: '',
      galleryUrl: '',
      features: [],
      gear: [],
      deliverables: [],
      alldelivarables: [],
      deliverablesNotes: [],
      complimentary: [],
      cameraGearNotes: [],
      seoKeywords: [],
      services: [],
      relatedBlogs: [],
      isPopular: false,
    });
    setEditId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { ...form };
    try {
      if (editId) {
        await updateDoc(doc(dbB, 'packages', editId), payload);
        alert('Package updated');
      } else {
        await addDoc(collection(dbB, 'packages'), { ...payload, createdAt: serverTimestamp() });
        alert('Package added');
      }
      resetForm();
      fetchPackages();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (pkg) => {
    setEditId(pkg.id);
    setForm({ ...pkg });
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this package?')) return;
    await deleteDoc(doc(db, 'packages', id));
    fetchPackages();
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">📦 Manage Photography Packages</h1>

      <form onSubmit={handleSubmit} className="bg-white rounded shadow p-6 space-y-4">
        {/* Render all simple text inputs */}
        {[
          'title', 'tag', 'price', 'priority', 'duration', 'coverage', 'color',
          'description', 'extraDetails', 'notes', 'story',
          'textFontColor', 'textBgColor', 'borderColor',
          'badge', 'badgeName', 'badgeTextColor', 'badgeBackgroundColor', 'badgeBorderColor',
          'image', 'image1', 'image2', 'image3', 'galleryUrl',
        ].map((f) => (
          <input
            key={f}
            name={f}
            value={form[f] || ''}
            onChange={handleChange}
            placeholder={f}
            className="w-full border border-gray-300 rounded p-2"
          />
        ))}

        {/* Render multi-line textareas */}
        {[
          'features', 'gear', 'deliverables', 'alldelivarables',
          'deliverablesNotes', 'complimentary', 'cameraGearNotes', 'seoKeywords', 'services',
        ].map((f) => (
          <div key={f}>
            <label className="block mb-1 font-medium">{f} (one per line)</label>
            <textarea
              name={f}
              value={(form[f] || []).join('\n')}
              onChange={(e) => handleTextarea(f, e)}
              rows={4}
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
        ))}

        {/* Related Blogs */}
        <div>
          <label className="block mb-1 font-medium">Related Blog</label>
          <input
            name="relatedBlogs[0].title"
            value={form.relatedBlogs[0]?.title || ''}
            onChange={(e) => handleBlogField('title', e.target.value)}
            placeholder="Blog Title"
            className="w-full border border-gray-300 rounded p-2 mb-2"
          />
          <input
            name="relatedBlogs[0].link"
            value={form.relatedBlogs[0]?.link || ''}
            onChange={(e) => handleBlogField('link', e.target.value)}
            placeholder="Blog Link"
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        {/* Popular Checkbox */}
        <div className="flex items-center">
          <input
            type="checkbox"
            name="isPopular"
            checked={form.isPopular}
            onChange={handleChange}
            id="popular"
          />
          <label htmlFor="popular" className="ml-2">Most Popular</label>
        </div>

        <div className="flex gap-2">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            {editId ? 'Update Package' : 'Save Package'}
          </button>
          {editId && (
            <button
              type="button"
              onClick={resetForm}
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Existing Packages</h2>
        {loading ? (
          <p className="text-center text-gray-500">Loading…</p>
        ) : !packages.length ? (
          <p className="text-center text-gray-500">No packages yet.</p>
        ) : (
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div key={pkg.id} className="bg-white p-4 border rounded shadow space-y-2 relative">
                <h3 className="text-lg font-bold">{pkg.title}</h3>
                <button onClick={() => handleEdit(pkg)} className="text-blue-600 hover:underline text-sm">Edit</button>
                <button onClick={() => handleDelete(pkg.id)} className="text-red-600 hover:underline text-sm">Delete</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
