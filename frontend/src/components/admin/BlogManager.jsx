import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, X, Save, Image as ImageIcon, Loader2 } from 'lucide-react';

export default function BlogManager() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingBlog, setEditingBlog] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        author: '',
        publish_date: new Date().toISOString().split('T')[0],
        image: null
    });
    const [submitting, setSubmitting] = useState(false);

    const fetchBlogs = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/blogs/');
            const data = await response.json();
            setBlogs(data);
        } catch (error) {
            console.error('Error fetching blogs:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    const handleOpenModal = (blog = null) => {
        if (blog) {
            setEditingBlog(blog);
            setFormData({
                title: blog.title,
                content: blog.content,
                author: blog.author,
                publish_date: blog.publish_date,
                image: null // Don't reset image unless user picks a new one
            });
        } else {
            setEditingBlog(null);
            setFormData({
                title: '',
                content: '',
                author: '',
                publish_date: new Date().toISOString().split('T')[0],
                image: null
            });
        }
        setIsModalOpen(true);
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this blog?')) return;

        try {
            const response = await fetch(`http://127.0.0.1:8000/api/blogs/${id}/`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Token ${localStorage.getItem('adminToken')}`
                }
            });
            if (response.ok) fetchBlogs();
        } catch (error) {
            alert('Delete failed');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        const uploadData = new FormData();
        uploadData.append('title', formData.title);
        uploadData.append('content', formData.content);
        uploadData.append('author', formData.author);
        uploadData.append('publish_date', formData.publish_date);
        if (formData.image) {
            uploadData.append('image', formData.image);
        }

        const url = editingBlog
            ? `http://127.0.0.1:8000/api/blogs/${editingBlog.id}/`
            : 'http://127.0.0.1:8000/api/blogs/';

        const method = editingBlog ? 'PATCH' : 'POST';

        try {
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Authorization': `Token ${localStorage.getItem('adminToken')}`
                },
                body: uploadData
            });

            if (response.ok) {
                setIsModalOpen(false);
                fetchBlogs();
            } else {
                const errData = await response.json();
                alert('Error saving blog: ' + JSON.stringify(errData));
            }
        } catch (error) {
            alert('Request failed');
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) return <div className="flex justify-center p-10"><Loader2 className="animate-spin text-orange" /></div>;

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-display font-bold text-navy">Manage Blogs</h2>
                    <p className="text-gray-500 text-sm">Create and edit articles for the Futurrizon website.</p>
                </div>
                <button
                    onClick={() => handleOpenModal()}
                    className="bg-orange hover:bg-orange/90 text-navy font-bold px-4 py-2 rounded-lg flex items-center gap-2 transition-all"
                >
                    <Plus className="w-5 h-5" />
                    New Blog
                </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 text-gray-400 text-xs uppercase tracking-wider">
                        <tr>
                            <th className="px-6 py-4 font-semibold">Blog</th>
                            <th className="px-6 py-4 font-semibold">Author</th>
                            <th className="px-6 py-4 font-semibold">Date</th>
                            <th className="px-6 py-4 font-semibold text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {blogs.map((blog) => (
                            <tr key={blog.id} className="hover:bg-gray-50 transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-gray-100 overflow-hidden flex-shrink-0 border border-gray-200">
                                            {blog.image ? (
                                                <img src={blog.image} alt="" className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-gray-300">
                                                    <ImageIcon className="w-5 h-5" />
                                                </div>
                                            )}
                                        </div>
                                        <div className="font-semibold text-navy truncate max-w-xs">{blog.title}</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-gray-600 text-sm">{blog.author}</td>
                                <td className="px-6 py-4 text-gray-600 text-sm">{blog.publish_date}</td>
                                <td className="px-6 py-4 text-right space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button onClick={() => handleOpenModal(blog)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                        <Edit2 className="w-4 h-4" />
                                    </button>
                                    <button onClick={() => handleDelete(blog.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {blogs.length === 0 && (
                    <div className="py-20 text-center text-gray-400">
                        No blogs found. Create your first post!
                    </div>
                )}
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-navy/60 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl"
                    >
                        <div className="px-8 py-6 border-b border-gray-100 flex justify-between items-center">
                            <h3 className="text-xl font-display font-bold text-navy">
                                {editingBlog ? 'Edit Blog' : 'Create New Blog'}
                            </h3>
                            <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-all">
                                <X className="w-5 h-5 text-gray-400" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-8 space-y-6 max-h-[70vh] overflow-y-auto">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Title</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-orange transition-all font-medium"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Author</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-orange transition-all font-medium"
                                        value={formData.author}
                                        onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Publish Date</label>
                                    <input
                                        type="date"
                                        required
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-orange transition-all font-medium"
                                        value={formData.publish_date}
                                        onChange={(e) => setFormData({ ...formData, publish_date: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Featured Image</label>
                                <div className="flex items-center gap-4">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
                                        className="hidden"
                                        id="blog-image"
                                    />
                                    <label
                                        htmlFor="blog-image"
                                        className="flex-1 flex items-center justify-center gap-3 border-2 border-dashed border-gray-200 rounded-xl py-8 px-4 font-semibold text-gray-500 hover:border-orange hover:text-orange cursor-pointer transition-all"
                                    >
                                        <ImageIcon className="w-6 h-6" />
                                        {formData.image ? formData.image.name : 'Click to upload image'}
                                    </label>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Content</label>
                                <textarea
                                    required
                                    rows={6}
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-orange transition-all font-medium"
                                    value={formData.content}
                                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                />
                            </div>

                            <div className="pt-4 flex gap-3">
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="flex-1 bg-navy text-white font-bold py-4 rounded-xl shadow-lg shadow-navy/10 hover:bg-navy/90 transition-all flex items-center justify-center gap-2"
                                >
                                    {submitting ? <Loader2 className="animate-spin" /> : <Save className="w-5 h-5" />}
                                    {editingBlog ? 'Update Blog' : 'Publish Blog'}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="flex-1 bg-gray-100 text-gray-600 font-bold py-4 rounded-xl hover:bg-gray-200 transition-all"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}
        </div>
    );
}
