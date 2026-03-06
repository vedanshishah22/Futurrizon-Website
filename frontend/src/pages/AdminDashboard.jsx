import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    LayoutDashboard, FileText, Briefcase, Users, LogOut,
    Plus, ChevronRight, Menu, X, Loader2
} from 'lucide-react';
import BlogManager from '../components/admin/BlogManager';
import JobManager from '../components/admin/JobManager';
import TeamManager from '../components/admin/TeamManager';

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState('blogs');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isVerifying, setIsVerifying] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        if (!token) {
            navigate('/admin-login');
        } else {
            setIsVerifying(false);
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        navigate('/admin-login');
    };

    if (isVerifying) {
        return (
            <div className="min-h-screen bg-navy flex items-center justify-center">
                <Loader2 className="w-10 h-10 text-orange animate-spin" />
            </div>
        );
    }

    const navigation = [
        { id: 'blogs', name: 'Blog Posts', icon: <FileText className="w-5 h-5" /> },
        { id: 'jobs', name: 'Career / Jobs', icon: <Briefcase className="w-5 h-5" /> },
        { id: 'team', name: 'Our Team', icon: <Users className="w-5 h-5" /> },
    ];

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex">
            {/* Sidebar */}
            <aside className={`bg-navy text-cream w-64 fixed lg:static inset-y-0 left-0 z-50 transition-transform duration-300 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
                <div className="p-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-orange rounded-lg flex items-center justify-center">
                            <LayoutDashboard className="text-navy w-5 h-5" />
                        </div>
                        <span className="font-display font-bold text-xl">Admin Panel</span>
                    </div>
                </div>

                <nav className="mt-6 px-4 space-y-2">
                    {navigation.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${activeTab === item.id ? 'bg-orange text-navy font-bold' : 'text-cream/60 hover:text-cream hover:bg-white/5'}`}
                        >
                            <div className="flex items-center gap-3">
                                {item.icon}
                                <span>{item.name}</span>
                            </div>
                            {activeTab === item.id && <ChevronRight className="w-4 h-4" />}
                        </button>
                    ))}
                </nav>

                <div className="absolute bottom-0 w-64 p-6 border-t border-white/5">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 text-cream/60 hover:text-red-400 hover:bg-red-500/5 rounded-xl transition-all"
                    >
                        <LogOut className="w-5 h-5" />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-h-screen relative">
                {/* Mobile Header */}
                <header className="lg:hidden bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                    <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                        <Menu className="w-6 h-6 text-navy" />
                    </button>
                    <span className="font-display font-bold text-navy">Futurrizon Admin</span>
                    <div className="w-6" />
                </header>

                <div className="p-6 lg:p-10 max-w-7xl mx-auto w-full">
                    {activeTab === 'blogs' && <BlogManager />}
                    {activeTab === 'jobs' && <JobManager />}
                    {activeTab === 'team' && <TeamManager />}
                </div>
            </main>
        </div>
    );
}
