import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogs } from '../data/projects';
import {
    Clock,
    Calendar,
    User,
    ArrowLeft,
    Share2,
    Bookmark,
    Twitter,
    Linkedin,
    Mail,
    ChevronRight
} from 'lucide-react';

const BlogDetail = () => {
    const { blogId } = useParams();
    const blog = blogs.find(b => b.id === blogId);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [blogId]);

    if (!blog) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-cream p-6 text-center">
                <h2 className="text-3xl font-bold text-navy mb-4">Blog Post Not Found</h2>
                <p className="text-gray-500 mb-8">The article you are looking for does not exist or has been moved.</p>
                <Link to="/" className="px-6 py-3 bg-navy text-white rounded-full font-bold hover:bg-navy/90 transition-colors">
                    Back to Home
                </Link>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-cream min-h-screen"
        >
            {/* ── PROGRESS BAR ── */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-orange z-50 origin-left"
                style={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
            />

            {/* ── HERO SECTION ── */}
            <header className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden bg-navy text-white">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <img
                        src={blog.image}
                        alt=""
                        className="w-full h-full object-cover blur-sm scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/80 to-navy" />
                </div>

                <div className="max-w-[900px] mx-auto px-6 relative z-10">
                    <Link
                        to="/"
                        className="inline-flex items-center text-white/60 hover:text-orange font-semibold mb-8 transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                        Back to Insights
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="flex flex-wrap items-center gap-6 text-sm text-white/60 mb-6 font-medium">
                            <span className="flex items-center">
                                <Calendar className="w-4 h-4 mr-2 text-orange" />
                                {blog.date}
                            </span>
                            <span className="flex items-center">
                                <Clock className="w-4 h-4 mr-2 text-orange" />
                                {blog.readTime}
                            </span>
                            <span className="flex items-center">
                                <User className="w-4 h-4 mr-2 text-orange" />
                                {blog.author}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                            {blog.title}
                        </h1>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full border-2 border-orange/30 overflow-hidden p-0.5">
                                <div className="w-full h-full rounded-full bg-orange/20 flex items-center justify-center">
                                    <User className="w-6 h-6 text-orange" />
                                </div>
                            </div>
                            <div>
                                <p className="font-bold text-white">{blog.author}</p>
                                <p className="text-xs text-white/50 uppercase tracking-widest font-bold">Industry Expert</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* ── CONTENT SECTION ── */}
            <main className="max-w-[1200px] mx-auto px-6 py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Sidebar / Left */}
                    <aside className="lg:col-span-1 hidden lg:block">
                        <div className="sticky top-32 flex flex-col items-center gap-6">
                            <button className="w-12 h-12 rounded-full bg-white border border-navy/5 flex items-center justify-center text-navy/40 hover:text-orange hover:border-orange/20 transition-all shadow-sm group">
                                <Share2 className="w-5 h-5" />
                            </button>
                            <div className="w-px h-12 bg-navy/10" />
                            <a href="#" className="w-10 h-10 rounded-full bg-white border border-navy/5 flex items-center justify-center text-navy/40 hover:text-[#1DA1F2] transition-colors shadow-sm">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white border border-navy/5 flex items-center justify-center text-navy/40 hover:text-[#0A66C2] transition-colors shadow-sm">
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white border border-navy/5 flex items-center justify-center text-navy/40 hover:text-orange transition-colors shadow-sm">
                                <Mail className="w-4 h-4" />
                            </a>
                        </div>
                    </aside>

                    {/* Blog Body */}
                    <article className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="prose prose-lg max-w-none"
                        >
                            <p className="text-xl md:text-2xl text-navy/80 font-medium leading-relaxed mb-12 italic border-l-4 border-orange pl-8 py-2">
                                {blog.summary}
                            </p>

                            <div className="rounded-[32px] overflow-hidden mb-16 shadow-2xl border border-navy/5">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover aspect-video"
                                />
                            </div>

                            <div className="space-y-12">
                                {blog.content.map((block, idx) => (
                                    <div key={idx}>
                                        {block.type === 'heading' ? (
                                            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">
                                                {block.text}
                                            </h2>
                                        ) : (
                                            <p className="text-lg text-navy/70 leading-relaxed">
                                                {block.text}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Tags or Category Footnote */}
                            <div className="mt-16 pt-16 border-t border-navy/10">
                                <div className="flex flex-wrap items-center gap-4">
                                    <span className="text-navy/40 font-bold uppercase tracking-widest text-xs">Category:</span>
                                    <span className="px-4 py-1.5 rounded-full bg-navy/5 text-navy font-bold text-sm">Enterprise Tech</span>
                                    <span className="px-4 py-1.5 rounded-full bg-navy/5 text-navy font-bold text-sm">Operations</span>
                                    <span className="px-4 py-1.5 rounded-full bg-navy/5 text-navy font-bold text-sm">AI Innovation</span>
                                </div>
                            </div>
                        </motion.div>
                    </article>

                    {/* Sidebar / Right (Featured / CTA) */}
                    <aside className="lg:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div className="p-8 bg-navy rounded-[32px] text-white overflow-hidden relative group">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-orange opacity-10 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-150" />
                                <h4 className="text-xl font-bold mb-4 relative z-10">Need a similar solution?</h4>
                                <p className="text-white/60 text-sm mb-6 relative z-10 leading-relaxed">
                                    Our experts specialize in the technologies discussed in this article.
                                </p>
                                <Link
                                    to="/"
                                    className="inline-flex items-center text-orange font-bold text-sm hover:gap-3 transition-all"
                                >
                                    Get a Free Consultation
                                    <ChevronRight className="w-4 h-4 ml-1" />
                                </Link>
                            </div>

                            <div className="p-8 bg-white rounded-[32px] border border-navy/5 shadow-sm">
                                <h4 className="text-lg font-bold text-navy mb-6">Related Project</h4>
                                {blog.image && (
                                    <div className="rounded-2xl overflow-hidden mb-4 aspect-video">
                                        <img src={blog.image} alt="" className="w-full h-full object-cover grayscale opacity-50" />
                                    </div>
                                )}
                                <p className="text-navy/60 text-sm mb-4 leading-relaxed font-medium">
                                    Check out the case study that inspired this article.
                                </p>
                                <Link
                                    to="/"
                                    className="text-navy font-bold text-sm hover:text-orange transition-colors"
                                >
                                    View Project Detail
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>

            {/* ── CTA SECTION ── */}
            <section className="py-20 bg-white border-t border-navy/5">
                <div className="max-w-[900px] mx-auto px-6 text-center">
                    <div className="w-16 h-16 bg-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-8 text-orange">
                        <Bookmark className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Stay ahead of the curve</h2>
                    <p className="text-lg text-navy/60 mb-10 max-w-2xl mx-auto">
                        Sign up for our newsletter to receive the latest insights on enterprise automation and AI innovation directly in your inbox.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-6 py-4 rounded-full bg-cream border border-navy/10 focus:outline-none focus:border-orange/50 font-medium"
                        />
                        <button className="px-8 py-4 bg-navy text-white rounded-full font-bold hover:bg-navy/90 transition-colors shadow-lg shadow-navy/20">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default BlogDetail;
