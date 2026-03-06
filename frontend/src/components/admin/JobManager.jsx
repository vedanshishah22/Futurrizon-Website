import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, X, Save, MapPin, Loader2 } from 'lucide-react';

const inputCls = "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange/30 focus:border-orange transition-all text-sm font-medium";

function Field({ label, children }) {
    return (
        <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider ml-0.5">{label}</label>
            {children}
        </div>
    );
}

export default function JobManager() {

    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingJob, setEditingJob] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        department: '',
        location: '',
        employment_type: 'Full-time',
        experience: '',
        salary_range: '',
        skills: '',
        description: '',
        requirements: '',
        is_active: true,
    });
    const [submitting, setSubmitting] = useState(false);

    const fetchJobs = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/jobs/');
            const data = await response.json();
            setJobs(data);
        } catch (error) {
            console.error('Error fetching jobs:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchJobs(); }, []);

    const handleOpenModal = (job = null) => {
        if (job) {
            setEditingJob(job);
            setFormData({
                title: job.title,
                department: job.department || '',
                location: job.location,
                employment_type: job.employment_type,
                experience: job.experience || '',
                salary_range: job.salary_range || '',
                skills: job.skills || '',
                description: job.description,
                requirements: job.requirements || '',
                is_active: job.is_active !== undefined ? job.is_active : true,
            });
        } else {
            setEditingJob(null);
            setFormData({
                title: '',
                department: '',
                location: 'Ahmedabad, Gujarat (On-site)',
                employment_type: 'Full-time',
                experience: '',
                salary_range: '',
                skills: '',
                description: '',
                requirements: '',
                is_active: true,
            });
        }
        setIsModalOpen(true);
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Delete this job post?')) return;
        try {
            const res = await fetch(`http://127.0.0.1:8000/api/jobs/${id}/`, {
                method: 'DELETE',
                headers: { 'Authorization': `Token ${localStorage.getItem('adminToken')}` }
            });
            if (res.ok) fetchJobs();
        } catch { alert('Delete failed'); }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        const url = editingJob
            ? `http://127.0.0.1:8000/api/jobs/${editingJob.id}/`
            : 'http://127.0.0.1:8000/api/jobs/';
        try {
            const res = await fetch(url, {
                method: editingJob ? 'PATCH' : 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${localStorage.getItem('adminToken')}`
                },
                body: JSON.stringify(formData)
            });
            if (res.ok) { setIsModalOpen(false); fetchJobs(); }
            else { const err = await res.json(); alert('Error: ' + JSON.stringify(err)); }
        } catch { alert('Request failed'); }
        finally { setSubmitting(false); }
    };

    const set = (key) => (e) => setFormData(f => ({ ...f, [key]: e.target.value }));


    if (loading) return <div className="flex justify-center p-10"><Loader2 className="animate-spin text-orange" /></div>;

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-display font-bold text-navy">Manage Careers</h2>
                    <p className="text-gray-500 text-sm">Post new job openings and hire top talent.</p>
                </div>
                <button onClick={() => handleOpenModal()}
                    className="bg-orange hover:bg-orange/90 text-white font-bold px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all shadow-md shadow-orange/20">
                    <Plus className="w-4 h-4" /> Add Job
                </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 text-gray-400 text-xs uppercase tracking-wider">
                        <tr>
                            <th className="px-6 py-4">Job Title</th>
                            <th className="px-6 py-4">Department</th>
                            <th className="px-6 py-4">Location</th>
                            <th className="px-6 py-4">Type</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {jobs.map(job => (
                            <tr key={job.id} className="hover:bg-gray-50/70 transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="font-semibold text-navy text-sm">{job.title}</div>
                                    {job.experience && <div className="text-gray-400 text-xs mt-0.5">{job.experience}</div>}
                                    {job.salary_range && <div className="text-orange text-xs mt-0.5 font-medium">{job.salary_range}</div>}
                                </td>
                                <td className="px-6 py-4 text-gray-600 text-sm">{job.department || '—'}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-1.5 text-gray-600 text-sm">
                                        <MapPin className="w-3.5 h-3.5 shrink-0" />{job.location}
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider">
                                        {job.employment_type}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${job.is_active ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                                        {job.is_active ? 'Active' : 'Hidden'}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button onClick={() => handleOpenModal(job)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                        <Edit2 className="w-4 h-4" />
                                    </button>
                                    <button onClick={() => handleDelete(job.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {jobs.length === 0 && <div className="py-20 text-center text-gray-400 text-sm">No job postings yet.</div>}
            </div>

            {/* ── Modal ── */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden">
                        <div className="px-8 py-5 border-b border-gray-100 flex justify-between items-center">
                            <h3 className="text-lg font-display font-bold text-navy">
                                {editingJob ? 'Edit Job Posting' : 'New Job Opening'}
                            </h3>
                            <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                                <X className="w-5 h-5 text-gray-400" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-8 space-y-5 max-h-[78vh] overflow-y-auto">
                            {/* Title + Department */}
                            <div className="grid grid-cols-2 gap-4">
                                <Field label="Job Title">
                                    <input className={inputCls} type="text" required placeholder="e.g. Power Platform Developer"
                                        value={formData.title} onChange={set('title')} />
                                </Field>
                                <Field label="Department">
                                    <input className={inputCls} type="text" placeholder="e.g. Engineering"
                                        value={formData.department} onChange={set('department')} />
                                </Field>
                            </div>

                            {/* Employment Type + Experience */}
                            <div className="grid grid-cols-2 gap-4">
                                <Field label="Employment Type">
                                    <select className={inputCls} value={formData.employment_type} onChange={set('employment_type')}>
                                        <option>Full-time</option>
                                        <option>Part-time</option>
                                        <option>Contract</option>
                                        <option>Internship</option>
                                        <option>Freelance</option>
                                    </select>
                                </Field>
                                <Field label="Experience Required">
                                    <input className={inputCls} type="text" placeholder="e.g. 2–4 Years"
                                        value={formData.experience} onChange={set('experience')} />
                                </Field>
                            </div>

                            {/* Location + Salary */}
                            <div className="grid grid-cols-2 gap-4">
                                <Field label="Location">
                                    <input className={inputCls} type="text" required placeholder="e.g. Ahmedabad, India (Remote)"
                                        value={formData.location} onChange={set('location')} />
                                </Field>
                                <Field label="Salary Range (Optional)">
                                    <input className={inputCls} type="text" placeholder="e.g. ₹6–10 LPA or Competitive"
                                        value={formData.salary_range} onChange={set('salary_range')} />
                                </Field>
                            </div>

                            {/* Skills */}
                            <Field label="Required Skills (comma-separated)">
                                <input className={inputCls} type="text" placeholder="e.g. Power Apps, SharePoint, Azure AD"
                                    value={formData.skills} onChange={set('skills')} />
                            </Field>

                            {/* Description */}
                            <Field label="Job Description">
                                <textarea className={inputCls} rows={4} required placeholder="Describe the role and day-to-day responsibilities..."
                                    value={formData.description} onChange={set('description')} />
                            </Field>

                            {/* Requirements */}
                            <Field label="Requirements / Qualifications">
                                <textarea className={inputCls} rows={4} placeholder="List specific qualifications, education, certifications expected..."
                                    value={formData.requirements} onChange={set('requirements')} />
                            </Field>

                            {/* Active toggle */}
                            <label className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl cursor-pointer">
                                <input type="checkbox" className="w-4 h-4 accent-orange"
                                    checked={formData.is_active}
                                    onChange={e => setFormData(f => ({ ...f, is_active: e.target.checked }))} />
                                <span className="text-sm font-semibold text-gray-700">
                                    Post is <span className={formData.is_active ? 'text-green-600' : 'text-gray-400'}>
                                        {formData.is_active ? 'Active' : 'Hidden'}
                                    </span> — {formData.is_active ? 'visible on the website' : 'not shown to visitors'}
                                </span>
                            </label>

                            <div className="flex gap-3 pt-1">
                                <button type="submit" disabled={submitting}
                                    className="flex-1 bg-navy text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-navy/90 transition-all shadow-lg shadow-navy/10">
                                    {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                                    {editingJob ? 'Update Job' : 'Post Job'}
                                </button>
                                <button type="button" onClick={() => setIsModalOpen(false)}
                                    className="flex-1 bg-gray-100 text-gray-600 font-bold py-3.5 rounded-xl hover:bg-gray-200 transition-all">
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
