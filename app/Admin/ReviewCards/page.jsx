'use client';

import { useEffect, useState } from 'react';
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
} from 'firebase/firestore';
import { db } from '../Firebase/config';
import CheckAuth from '../Firebase/CheckAuth';
import { FaStar, FaRegStar, FaEdit, FaTrash } from 'react-icons/fa';

export default function ReviewCardsPage() {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [stars, setStars] = useState(0);
  const [priority, setPriority] = useState(1);
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [limit, setLimit] = useState(10);

  const fetchReviews = async () => {
    const q = query(collection(db, 'reviews'), orderBy('priorityRanking', 'asc'));
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setReviews(data);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const resetForm = () => {
    setEditingId(null);
    setName('');
    setReview('');
    setStars(0);
    setPriority(1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !review.trim() || stars === 0 || priority < 1) {
      alert('⚠️ Please fill out all fields.');
      return;
    }

    setLoading(true);
    try {
      if (editingId) {
        const ref = doc(db, 'reviews', editingId);
        await updateDoc(ref, { name, review, stars, priorityRanking: priority });
        alert('✅ Review updated!');
      } else {
        await addDoc(collection(db, 'reviews'), {
          name,
          review,
          stars,
          priorityRanking: priority,
          createdAt: new Date(),
        });
        alert('✅ Review submitted!');
      }

      resetForm();
      fetchReviews();
    } catch (error) {
      console.error('Error saving review:', error);
      alert('❌ Failed to submit review.');
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this review?')) {
      try {
        await deleteDoc(doc(db, 'reviews', id));
        alert('🗑️ Review deleted.');
        fetchReviews();
      } catch (error) {
        console.error('Delete error:', error);
        alert('❌ Failed to delete review.');
      }
    }
  };

  return (
    <CheckAuth>
      <main className="w-full px-4 py-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Snapu Review Panel</h1>

        <div className="flex flex-col md:flex-row gap-6 w-full">
          {/* === Review Form === */}
          <form
            onSubmit={handleSubmit}
            className="md:w-1/3 w-full p-4 border border-gray-300 bg-white rounded shadow"
          >
            <h2 className="text-lg font-semibold mb-4">Write a Review</h2>

            {editingId && (
              <div className="mb-2 text-sm text-red-500">
                Editing...
                <button
                  type="button"
                  className="ml-2 underline text-blue-600"
                  onClick={resetForm}
                >
                  Cancel
                </button>
              </div>
            )}

            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border px-3 py-2 mb-2 rounded"
            />
            <textarea
              placeholder="Write your review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="w-full border px-3 py-2 mb-2 rounded"
              rows={3}
            />
            <input
              type="number"
              min={1}
              value={priority}
              onChange={(e) => setPriority(Number(e.target.value))}
              className="w-full border px-3 py-2 mb-2 rounded"
              placeholder="Priority (1 = high)"
            />

            {/* Star rating input */}
            <div className="flex mb-3">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setStars(n)}
                  aria-label={`Rate ${n} star${n > 1 ? 's' : ''}`}
                  className="text-xl mr-1"
                >
                  {stars >= n ? <FaStar className="text-yellow-400" /> : <FaRegStar className="text-gray-400" />}
                </button>
              ))}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
              {loading ? 'Saving...' : editingId ? 'Update Review' : 'Submit Review'}
            </button>
          </form>

          {/* === Review Cards === */}
          <div className="w-full">
            {/* Limit selector */}
            <div className="mb-4 flex items-center gap-2 text-sm">
              <span>Show:</span>
              {[10, 20, 50, 100].map((n) => (
                <button
                  key={n}
                  onClick={() => setLimit(n)}
                  className={`px-2 py-1 border rounded ${
                    limit === n ? 'bg-blue-500 text-white' : 'bg-gray-100'
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {reviews.slice(0, limit).map((r) => (
                <div
                  key={r.id}
                  className="border rounded p-4 bg-white shadow hover:shadow-md transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-center text-sm mb-2">
                      <strong className="text-gray-800">{r.name}</strong>
                      <span className="text-gray-500">
                        {r.createdAt?.seconds
                          ? new Date(r.createdAt.seconds * 1000).toLocaleDateString()
                          : '—'}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-2">{r.review}</p>
                    <div className="flex text-yellow-400 text-lg">
                      {[1, 2, 3, 4, 5].map((i) =>
                        r.stars >= i ? <FaStar key={i} /> : <FaRegStar key={i} className="text-gray-300" />
                      )}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Priority: {r.priorityRanking}
                    </div>
                  </div>

                  <div className="flex justify-between mt-4 text-sm">
                    <button
                      onClick={() => {
                        setEditingId(r.id);
                        setName(r.name);
                        setReview(r.review);
                        setStars(r.stars);
                        setPriority(r.priorityRanking);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                    >
                      <FaEdit /> Edit
                    </button>

                    <button
                      onClick={() => handleDelete(r.id)}
                      className="text-red-500 hover:text-red-700 flex items-center gap-1"
                    >
                      <FaTrash /> Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </CheckAuth>
  );
}
