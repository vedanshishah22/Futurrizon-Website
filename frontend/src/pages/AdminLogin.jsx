import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, User, Eye, EyeOff, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('http://127.0.0.1:8000/api/auth/login/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('adminToken', data.token);
                navigate('/admin-dashboard');
            } else {
                setError(data.error || 'Invalid credentials');
            }
        } catch (err) {
            setError('Connection error. Is the backend running?');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-navy flex items-center justify-center px-6 relative overflow-hidden">
            {/* Background Orbs */}


            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl relative z-10"
            >
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-orange/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-orange/30">
                        <Lock className="text-orange w-8 h-8" />
                    </div>
                    <h1 className="text-3xl font-display font-bold text-cream">Admin Access</h1>
                    <p className="text-cream/50 mt-2 text-sm uppercase tracking-widest">Futurrizon Terminal</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm text-center"
                        >
                            {error}
                        </motion.div>
                    )}

                    <div className="space-y-2">
                        <label className="text-cream/60 text-xs font-semibold uppercase tracking-wider ml-1">Username</label>
                        <div className="relative group">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cream/30 group-focus-within:text-orange transition-colors">
                                <User className="w-5 h-5" />
                            </span>
                            <input
                                type="text"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-cream placeholder:text-white/20 focus:outline-none focus:border-orange/50 focus:bg-white/10 transition-all font-medium"
                                placeholder="Admin ID"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-cream/60 text-xs font-semibold uppercase tracking-wider ml-1">Password</label>
                        <div className="relative group">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cream/30 group-focus-within:text-orange transition-colors">
                                <Lock className="w-5 h-5" />
                            </span>
                            <input
                                type={showPassword ? "text" : "password"}
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-12 text-cream placeholder:text-white/20 focus:outline-none focus:border-orange/50 focus:bg-white/10 transition-all font-medium"
                                placeholder="••••••••"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-cream/30 hover:text-orange transition-colors"
                            >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-orange hover:bg-orange/90 text-navy font-bold py-4 rounded-xl transition-all shadow-lg shadow-orange/20 active:scale-[0.98] flex items-center justify-center gap-2 group"
                    >
                        {loading ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                            <>
                                Authenticate
                                <Lock className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                            </>
                        )}
                    </button>
                </form>

                <div className="mt-8 pt-6 border-t border-white/5 text-center">
                    <button
                        onClick={() => navigate('/')}
                        className="text-cream/40 text-sm hover:text-orange transition-colors flex items-center justify-center gap-2 mx-auto"
                    >
                        ← Return to Website
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
