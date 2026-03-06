import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, X, Save, Image as ImageIcon, Linkedin, Loader2 } from 'lucide-react';

export default function TeamManager() {
    const [team, setTeam] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingMember, setEditingMember] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        role: '',
        bio: '',
        linkedin: '',
        photo: null
    });
    const [submitting, setSubmitting] = useState(false);

    const fetchTeam = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/team/');
            const data = await response.json();
            setTeam(data);
        } catch (error) {
            console.error('Error fetching team:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTeam();
    }, []);

    const handleOpenModal = (member = null) => {
        if (member) {
            setEditingMember(member);
            setFormData({
                name: member.name,
                role: member.role,
                bio: member.bio,
                linkedin: member.linkedin || '',
                photo: null
            });
        } else {
            setEditingMember(null);
            setFormData({
                name: '',
                role: '',
                bio: '',
                linkedin: '',
                photo: null
            });
        }
        setIsModalOpen(true);
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this team member?')) return;

        try {
            const response = await fetch(`http://127.0.0.1:8000/api/team/${id}/`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Token ${localStorage.getItem('adminToken')}`
                }
            });
            if (response.ok) fetchTeam();
        } catch (error) {
            alert('Delete failed');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        const uploadData = new FormData();
        uploadData.append('name', formData.name);
        uploadData.append('role', formData.role);
        uploadData.append('bio', formData.bio);
        if (formData.linkedin) uploadData.append('linkedin', formData.linkedin);
        if (formData.photo) {
            uploadData.append('photo', formData.photo);
        }

        const url = editingMember
            ? `http://127.0.0.1:8000/api/team/${editingMember.id}/`
            : 'http://127.0.0.1:8000/api/team/';

        const method = editingMember ? 'PATCH' : 'POST';

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
                fetchTeam();
            } else {
                const errData = await response.json();
                alert('Error saving member: ' + JSON.stringify(errData));
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
                    <h2 className="text-2xl font-display font-bold text-navy">Our Team</h2>
                    <p className="text-gray-500 text-sm">Update Futurrizon's leadership and core team members.</p>
                </div>
                <button
                    onClick={() => handleOpenModal()}
                    className="bg-orange hover:bg-orange/90 text-navy font-bold px-4 py-2 rounded-lg flex items-center gap-2 transition-all"
                >
                    <Plus className="w-5 h-5" />
                    Add Member
                </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 text-gray-400 text-xs uppercase tracking-wider">
                        <tr>
                            <th className="px-6 py-4 font-semibold">Member</th>
                            <th className="px-6 py-4 font-semibold">Role</th>
                            <th className="px-6 py-4 font-semibold">Social</th>
                            <th className="px-6 py-4 font-semibold text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {team.map((member) => (
                            <tr key={member.id} className="hover:bg-gray-50 transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden flex-shrink-0 border border-gray-200">
                                            {member.photo ? (
                                                <img src={member.photo} alt="" className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-gray-300">
                                                    <Users className="w-4 h-4" />
                                                </div>
                                            )}
                                        </div>
                                        <div className="font-semibold text-navy">{member.name}</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-gray-600 text-sm">{member.role}</td>
                                <td className="px-6 py-4">
                                    {member.linkedin ? (
                                        <a href={member.linkedin} target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-800">
                                            <Linkedin className="w-4 h-4" />
                                        </a>
                                    ) : (
                                        <span className="text-gray-300">—</span>
                                    )}
                                </td>
                                <td className="px-6 py-4 text-right space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button onClick={() => handleOpenModal(member)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                        <Edit2 className="w-4 h-4" />
                                    </button>
                                    <button onClick={() => handleDelete(member.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {team.length === 0 && (
                    <div className="py-20 text-center text-gray-400">
                        No team members found.
                    </div>
                )}
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-navy/60 backdrop-blur-sm">
                    <div className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl">
                        <div className="px-8 py-6 border-b border-gray-100 flex justify-between items-center">
                            <h3 className="text-xl font-display font-bold text-navy">
                                {editingMember ? 'Edit Profile' : 'New Team Member'}
                            </h3>
                            <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-all">
                                <X className="w-5 h-5 text-gray-400" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-8 space-y-6 max-h-[70vh] overflow-y-auto">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-orange transition-all font-medium"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="e.g. Yashesh Nagori"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Designation</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-orange transition-all font-medium"
                                        value={formData.role}
                                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                        placeholder="e.g. Founder & CEO"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Profile Photo</label>
                                <div className="flex items-center gap-4">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => setFormData({ ...formData, photo: e.target.files[0] })}
                                        className="hidden"
                                        id="member-photo"
                                    />
                                    <label
                                        htmlFor="member-photo"
                                        className="flex-1 flex items-center justify-center gap-3 border-2 border-dashed border-gray-200 rounded-xl py-8 px-4 font-semibold text-gray-500 hover:border-orange hover:text-orange cursor-pointer transition-all"
                                    >
                                        <ImageIcon className="w-6 h-6" />
                                        {formData.photo ? formData.photo.name : 'Click to upload photo'}
                                    </label>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">LinkedIn Profile</label>
                                <input
                                    type="url"
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-orange transition-all font-medium"
                                    value={formData.linkedin}
                                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                                    placeholder="https://linkedin.com/in/..."
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Bio</label>
                                <textarea
                                    required
                                    rows={3}
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-orange transition-all font-medium"
                                    value={formData.bio}
                                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                                    placeholder="Brief introduction..."
                                />
                            </div>

                            <div className="pt-4 flex gap-3">
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="flex-1 bg-navy text-white font-bold py-4 rounded-xl shadow-lg shadow-navy/10 hover:bg-navy/90 transition-all flex items-center justify-center gap-2"
                                >
                                    {submitting ? <Loader2 className="animate-spin" /> : <Save className="w-5 h-5" />}
                                    {editingMember ? 'Update Profile' : 'Add to Team'}
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
                    </div>
                </div>
            )}
        </div>
    );
}
