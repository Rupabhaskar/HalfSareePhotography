'use client';

import { useState, useEffect } from 'react';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../Firebase/config';
import CheckAuth from '../Firebase/CheckAuth';
import Image from 'next/image';

export default function YouTubeVideoManager() {
  const [form, setForm] = useState({
    videoId: '',
    title: '',
    description: '',
    tags: '',
    priority: '',
    category: '',
    publishedDate: '',
    duration: '',
    author: '',
    metaTitle: '',
    metaDescription: '',
    schemaMarkup: '',
  });

  const [videos, setVideos] = useState([]);
  const [editId, setEditId] = useState(null);

  // Auto-generate JSON-LD schema
  const generateSchema = (data) => {
    const {
      videoId,
      title,
      description,
      tags,
      publishedDate,
      duration,
      author,
    } = data;

    return JSON.stringify(
      {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: title,
        description,
        thumbnailUrl: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
        uploadDate: publishedDate,
        duration,
        author: {
          "@type": "Person",
          name: author,
        },
        keywords: tags,
        contentUrl: `https://www.youtube.com/watch?v=${videoId}`,
        embedUrl: `https://www.youtube.com/embed/${videoId}`,
      },
      null,
      2
    );
  };

  const getThumbnailUrl = (videoId) =>
    videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : '';

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedForm = { ...form, [name]: value };
    updatedForm.schemaMarkup = generateSchema(updatedForm);
    setForm(updatedForm);
  };

  // Fetch video documents
  const fetchVideos = async () => {
    const snapshot = await getDocs(collection(db, 'youtubeVideos'));
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setVideos(data.sort((a, b) => a.priority - b.priority));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      tags: form.tags.split(',').map((tag) => tag.trim()),
      priority: parseInt(form.priority),
      publishedDate: new Date(form.publishedDate),
    };

    try {
      if (editId) {
        await updateDoc(doc(db, 'youtubeVideos', editId), payload);
        setEditId(null);
      } else {
        await addDoc(collection(db, 'youtubeVideos'), payload);
      }

      setForm({
        videoId: '',
        title: '',
        description: '',
        tags: '',
        priority: '',
        category: '',
        publishedDate: '',
        duration: '',
        author: '',
        metaTitle: '',
        metaDescription: '',
        schemaMarkup: '',
      });

      fetchVideos();
    } catch (err) {
      console.error('Error saving video:', err);
    }
  };

  const handleEdit = (video) => {
    setEditId(video.id);
    setForm({
      ...video,
      tags: Array.isArray(video.tags) ? video.tags.join(', ') : video.tags,
      publishedDate: video.publishedDate
        ? new Date(video.publishedDate.seconds * 1000).toISOString().split('T')[0]
        : '',
      schemaMarkup: generateSchema(video),
    });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this video?')) {
      await deleteDoc(doc(db, 'youtubeVideos', id));
      fetchVideos();
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <CheckAuth>
      <main className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-6 text-indigo-700">
          YouTube Video Manager
        </h1>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-6 bg-white p-6 rounded-xl shadow max-w-6xl mx-auto"
        >
          {/* Video ID & Thumbnail */}
          <div className="md:col-span-2">
            <label className="block font-semibold mb-1">YouTube Video ID</label>
            <input
              type="text"
              name="videoId"
              value={form.videoId}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
              placeholder="e.g., dQw4w9WgXcQ"
              required
            />
            {form.videoId && (
              <Image
                src={getThumbnailUrl(form.videoId)}
                alt="Thumbnail"
                className="mt-3 w-[200px] rounded shadow"
              />
            )}
          </div>

          {/* Title */}
          <div>
            <label className="block font-semibold mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block font-semibold mb-1">Category</label>
            <input
              type="text"
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block font-semibold mb-1">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded h-24"
              required
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block font-semibold mb-1">Tags (comma separated)</label>
            <input
              type="text"
              name="tags"
              value={form.tags}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
          </div>

          {/* Priority */}
          <div>
            <label className="block font-semibold mb-1">Priority</label>
            <input
              type="number"
              name="priority"
              value={form.priority}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
          </div>

          {/* Published Date */}
          <div>
            <label className="block font-semibold mb-1">Published Date</label>
            <input
              type="date"
              name="publishedDate"
              value={form.publishedDate}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
          </div>

          {/* Duration */}
          <div>
            <label className="block font-semibold mb-1">Duration (ISO 8601)</label>
            <input
              type="text"
              name="duration"
              value={form.duration}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
              placeholder="e.g., PT3M45S"
            />
          </div>

          {/* Author */}
          <div>
            <label className="block font-semibold mb-1">Author</label>
            <input
              type="text"
              name="author"
              value={form.author}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
          </div>

          {/* Meta Title */}
          <div>
            <label className="block font-semibold mb-1">Meta Title</label>
            <input
              type="text"
              name="metaTitle"
              value={form.metaTitle}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
          </div>

          {/* Meta Description */}
          <div className="md:col-span-2">
            <label className="block font-semibold mb-1">Meta Description</label>
            <input
              type="text"
              name="metaDescription"
              value={form.metaDescription}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
          </div>

          {/* Schema Markup */}
          <div className="md:col-span-2">
            <label className="block font-semibold mb-1">
              Schema Markup (Auto-Generated)
            </label>
            <textarea
              value={form.schemaMarkup}
              className="w-full border px-4 py-2 rounded bg-gray-100 font-mono text-sm"
              rows={8}
              readOnly
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-indigo-600 text-white py-2 px-6 rounded hover:bg-indigo-700"
            >
              {editId ? 'Update Video' : 'Save Video'}
            </button>
          </div>
        </form>

        {/* VIDEO CARDS GRID */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="bg-white p-3 rounded-lg shadow">
              <Image
                src={getThumbnailUrl(video.videoId)}
                alt="SnapU Photography"
                width={480} 
                height={360}
                className="w-full h-28 object-cover rounded mb-2"
              />
              <h3 className="font-semibold text-sm truncate">{video.title}</h3>
              <p className="text-xs text-gray-500 mb-2">Priority: {video.priority}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(video)}
                  className="flex-1 bg-yellow-500 text-white text-xs py-1 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(video.id)}
                  className="flex-1 bg-red-500 text-white text-xs py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </CheckAuth>
  );
}
