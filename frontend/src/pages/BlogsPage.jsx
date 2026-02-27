import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp = {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

function AnimatedSection({ children, className = '' }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-60px' });
    return (
        <motion.div ref={ref} variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'} className={className}>
            {children}
        </motion.div>
    );
}

/* ─── Blog Data ─────────────────────────────────────── */
const categories = ['All', 'SharePoint', 'Power Platform', 'Microsoft 365', 'Azure', 'AI & GPT', 'Migration', 'Analytics'];

const blogs = [
    {
        id: 1,
        category: 'SharePoint',
        title: 'Why SharePoint Online Is Still the #1 Enterprise Intranet Solution in 2026',
        excerpt: 'Despite newer tools entering the market, SharePoint Online continues to dominate enterprise intranets. Here\'s why organizations choose SharePoint for document management, collaboration, and governance — and how to build a modern intranet that employees actually love.',
        readTime: '7 min read',
        date: 'Feb 20, 2026',
        emoji: '🏗️',
        content: [
            'SharePoint Online has evolved from a simple document library into a full-fledged digital workplace platform. With deep integration into Microsoft 365, Teams, and Power Platform, it offers unmatched flexibility for enterprise content management.',
            'Modern SharePoint sites offer beautiful, responsive layouts out of the box. Combined with SPFx (SharePoint Framework), developers can create custom web parts that deliver app-like experiences directly within the intranet.',
            'Key advantages include: role-based access control, automated workflows via Power Automate, advanced metadata and taxonomy, compliance features for regulated industries, and seamless mobile experiences.',
            'Organizations we\'ve worked with have seen 60% improvement in document findability and 40% reduction in email-based approvals after migrating to a well-designed SharePoint intranet.',
        ],
    },
    {
        id: 2,
        category: 'Power Platform',
        title: 'How Power Apps Is Replacing Custom Software for Mid-Size Enterprises',
        excerpt: 'Power Apps enables business users and developers alike to build production-grade applications without traditional codebases. Learn how enterprises are cutting development timelines by 70% while delivering better user experiences.',
        readTime: '6 min read',
        date: 'Feb 15, 2026',
        emoji: '⚡',
        content: [
            'The traditional approach to building enterprise apps — hiring a dev team, writing code from scratch, and deploying on custom infrastructure — is being disrupted by Power Apps.',
            'Canvas Apps provide pixel-perfect UI control, while Model-driven Apps offer structured data management out of the box. Together with Dataverse as the backend, Power Apps delivers a full-stack app development experience.',
            'Power Automate integration means every app can trigger automated workflows — from approval chains to data synchronization across systems. This eliminates the need for middleware.',
            'We\'ve helped clients build inspection apps, inventory trackers, leave management systems, and customer portals — all deployed within weeks instead of months.',
        ],
    },
    {
        id: 3,
        category: 'AI & GPT',
        title: 'Building Enterprise AI Chatbots: From GPT Integration to Production Deployment',
        excerpt: 'AI-powered chatbots are transforming IT support, customer service, and internal knowledge management. Here\'s our practical guide to building and deploying enterprise chatbots using GPT, Microsoft Teams, and SharePoint.',
        readTime: '9 min read',
        date: 'Feb 10, 2026',
        emoji: '🤖',
        content: [
            'Enterprise chatbots powered by GPT aren\'t just answering FAQs — they\'re resolving tickets, searching knowledge bases, generating reports, and even helping with code reviews.',
            'The key to a successful enterprise chatbot is grounding — connecting GPT to your organization\'s actual data. By integrating with SharePoint document libraries and Dataverse, you ensure the bot answers with verified, company-specific information.',
            'Our approach: We build chatbots that integrate directly into Microsoft Teams, use Retrieval Augmented Generation (RAG) for accuracy, and include fallback mechanisms for questions outside the knowledge base.',
            'Results from deployments: 45% reduction in IT ticket volume, first-response times reduced to seconds, and measurably higher employee satisfaction with internal support.',
        ],
    },
    {
        id: 4,
        category: 'Microsoft 365',
        title: 'Microsoft 365 Governance: The 10 Policies Every Organization Needs',
        excerpt: 'Without proper governance, Microsoft 365 becomes a sprawl of unmanaged Teams, SharePoint sites, and shared drives. Here are the 10 essential policies that keep your tenant secure, organized, and compliant.',
        readTime: '8 min read',
        date: 'Feb 5, 2026',
        emoji: '🛡️',
        content: [
            'Microsoft 365 governance isn\'t about restricting users — it\'s about creating guardrails that enable productivity while maintaining security and compliance.',
            'Essential policies include: Group naming conventions, Teams creation policies, SharePoint site lifecycle management, external sharing controls, data loss prevention (DLP) rules, and sensitivity labeling.',
            'Automated governance using Power Automate can enforce policies without manual intervention. For example, auto-archiving inactive Teams after 90 days, or sending reminders for document retention reviews.',
            'Organizations with strong governance see 50% fewer security incidents, 35% less IT overhead for tenant management, and significantly better adoption metrics across the platform.',
        ],
    },
    {
        id: 5,
        category: 'Azure',
        title: 'Cloud Migration Done Right: Moving from On-Prem to Azure Without Downtime',
        excerpt: 'Migrating on-premises infrastructure to Azure is one of the most impactful decisions an enterprise can make. But a poorly planned migration can lead to downtime, data loss, and cost overruns. Here\'s how to do it right.',
        readTime: '8 min read',
        date: 'Jan 28, 2026',
        emoji: '☁️',
        content: [
            'Azure migration isn\'t a single event — it\'s a strategy. The right approach depends on your workload type: lift-and-shift for quick wins, re-architecture for long-term optimization, or hybrid for a phased transition.',
            'Assessment is critical. Tools like Azure Migrate help you discover on-prem workloads, assess dependencies, and calculate TCO before you move anything. This prevents surprises during migration.',
            'Security and compliance must be baked in from day one. Azure Policy, Network Security Groups, and Azure AD Conditional Access ensure your cloud environment is at least as secure as your on-prem setup.',
            'Our clients have achieved 40% infrastructure cost savings, 99.99% uptime SLAs, and gained the ability to run AI and analytics workloads that were impossible on-prem.',
        ],
    },
    {
        id: 6,
        category: 'Analytics',
        title: 'Power BI Best Practices: Building Dashboards That Actually Drive Decisions',
        excerpt: 'Most Power BI dashboards look impressive but fail to drive action. Here\'s how to build dashboards that executives actually use — with the right KPIs, data modeling, and visual design principles.',
        readTime: '7 min read',
        date: 'Jan 22, 2026',
        emoji: '📊',
        content: [
            'The biggest mistake in dashboard design is showing too much data. Effective dashboards focus on 3-5 KPIs that directly map to business objectives — not every metric available in the dataset.',
            'Data modeling is where most projects fail. A proper star schema with clean fact and dimension tables ensures fast query performance and accurate calculations, even with millions of rows.',
            'DAX measures should be well-documented and reusable. Avoid complex calculated columns when measures can do the job. Use variables in DAX for readability and performance.',
            'Visual design matters: Use consistent color coding, minimize chart junk, add context through conditional formatting, and always include filters that let users drill into segments relevant to their role.',
        ],
    },
    {
        id: 7,
        category: 'Migration',
        title: 'Google Workspace to Microsoft 365: The Complete Migration Playbook',
        excerpt: 'Switching from Google Workspace to Microsoft 365? It\'s more than just moving emails. Here\'s our battle-tested playbook covering email migration, file transfers, identity management, and user adoption.',
        readTime: '10 min read',
        date: 'Jan 15, 2026',
        emoji: '🔄',
        content: [
            'Migrating from Google Workspace to Microsoft 365 requires careful planning across five dimensions: email, files, identity, collaboration tools, and user training.',
            'Email migration using dual delivery ensures zero downtime — users continue receiving emails on both platforms during the transition period. This is critical for companies that can\'t afford even minutes of email downtime.',
            'Google Drive to SharePoint/OneDrive migration requires permission mapping, folder restructuring, and handling of Google-native formats (Docs, Sheets, Slides) that need conversion.',
            'The biggest challenge isn\'t technical — it\'s adoption. Training programs, quick-start guides, and champion programs are essential for ensuring users embrace Microsoft 365 instead of reverting to old habits.',
        ],
    },
    {
        id: 8,
        category: 'Power Platform',
        title: 'Power Automate Flows That Save 20+ Hours Per Week: Real Examples',
        excerpt: 'Stop doing manually what Power Automate can handle in seconds. Here are 8 real-world automation flows we\'ve built for clients — from approval routing to data sync — that save significant time every week.',
        readTime: '6 min read',
        date: 'Jan 8, 2026',
        emoji: '🔧',
        content: [
            'Power Automate\'s strength lies in connecting systems that don\'t natively talk to each other. With 500+ connectors, it bridges the gap between Microsoft apps, third-party SaaS, and custom APIs.',
            'High-impact flows we\'ve built: automated document approval chains (saves 5 hrs/week), expense report processing with Power Apps submission (3 hrs/week), client onboarding workflows (4 hrs/week), and scheduled report generation and distribution (8 hrs/week).',
            'Pro tips: Use error handling (try-catch scopes), implement retry policies for external API calls, and always add run-after configurations for graceful failure handling.',
            'Cloud flows work well for API-driven triggers, while Desktop flows (RPA) handle legacy systems without APIs. Combining both creates end-to-end automation across modern and legacy infrastructure.',
        ],
    },
    {
        id: 9,
        category: 'SharePoint',
        title: 'Document Management in 2026: Building a Zero-Paper Office with SharePoint',
        excerpt: 'The path to a paperless office runs through SharePoint. Metadata-driven document management, automated retention policies, and AI-powered search make SharePoint the ultimate document hub.',
        readTime: '7 min read',
        date: 'Jan 2, 2026',
        emoji: '📁',
        content: [
            'Traditional folder structures fail at scale. SharePoint\'s metadata-driven approach — using content types, managed metadata, and custom columns — lets you categorize, find, and manage documents without deep folder nesting.',
            'Automated workflows handle document lifecycle: creation triggers, approval routing, version control, retention scheduling, and archival. Power Automate integrates seamlessly for complex multi-step workflows.',
            'AI capabilities in SharePoint Premium (formerly Syntex) enable automatic metadata extraction, document classification, and content assembly — reducing manual tagging effort by up to 80%.',
            'Compliance features like sensitivity labels, DLP policies, and audit logs ensure your document management meets GDPR, HIPAA, and industry-specific regulations without additional tooling.',
        ],
    },
];

const categoryColors = {
    'SharePoint': 'bg-blue-500/10 text-blue-600 border-blue-500/15',
    'Power Platform': 'bg-purple-500/10 text-purple-600 border-purple-500/15',
    'Microsoft 365': 'bg-indigo-500/10 text-indigo-600 border-indigo-500/15',
    'Azure': 'bg-cyan-500/10 text-cyan-600 border-cyan-500/15',
    'AI & GPT': 'bg-orange/10 text-orange border-orange/15',
    'Migration': 'bg-green-500/10 text-green-600 border-green-500/15',
    'Analytics': 'bg-pink-500/10 text-pink-600 border-pink-500/15',
};

/* ─── Page ──────────────────────────────────────────── */
export default function BlogsPage() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [expandedBlog, setExpandedBlog] = useState(null);

    const filtered = activeCategory === 'All' ? blogs : blogs.filter(b => b.category === activeCategory);

    return (
        <div className="overflow-x-hidden">

            {/* ── HERO ──────────────────────────────────────── */}
            <section className="relative min-h-[65vh] flex items-center bg-primary overflow-hidden">
                <div className="absolute inset-0 opacity-8"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255,95,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,95,0,0.3) 1px, transparent 1px)',
                        backgroundSize: '50px 50px',
                    }}
                />
                <div className="absolute top-10 -left-28 w-[500px] h-[500px] bg-orange/12 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange/8 rounded-full blur-3xl pointer-events-none" />

                <div className="container mx-auto px-6 pt-32 pb-24 relative z-10">
                    <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
                        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange/40 bg-orange/10 mb-6">
                            <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
                            <span className="text-orange text-xs font-semibold uppercase tracking-widest">Insights & Articles</span>
                        </motion.div>

                        <motion.h1 variants={fadeUp} className="text-5xl lg:text-7xl font-display font-bold text-cream leading-tight">
                            The Futurrizon
                            <span className="block text-orange mt-1">Blog</span>
                        </motion.h1>

                        <motion.p variants={fadeUp} className="mt-6 text-cream/60 text-lg max-w-xl leading-relaxed">
                            Expert insights, best practices, and real-world stories from our journey of transforming businesses with Microsoft technologies.
                        </motion.p>
                    </motion.div>
                </div>

                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                    <svg viewBox="0 0 1200 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12">
                        <path d="M0 60 L0 30 Q300 0 600 30 Q900 60 1200 30 L1200 60 Z" fill="#FFFAE6" />
                    </svg>
                </div>
            </section>

            {/* ── BLOG POSTS ────────────────────────────────── */}
            <section className="bg-cream py-20">
                <div className="container mx-auto px-6">

                    {/* Category filters */}
                    <AnimatedSection className="mb-12">
                        <motion.div variants={fadeUp} className="flex flex-wrap gap-2 justify-center">
                            {categories.map(c => (
                                <button
                                    key={c}
                                    onClick={() => { setActiveCategory(c); setExpandedBlog(null); }}
                                    className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-200 ${activeCategory === c
                                            ? 'bg-orange text-white border-orange shadow-md shadow-orange/20'
                                            : 'bg-white text-primary/50 border-primary/10 hover:border-orange/30 hover:text-orange'
                                        }`}
                                >
                                    {c}
                                </button>
                            ))}
                        </motion.div>
                    </AnimatedSection>

                    {/* Blog grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {filtered.map((blog) => (
                            <AnimatedSection key={blog.id}>
                                <motion.div
                                    variants={fadeUp}
                                    whileHover={{ y: -4, boxShadow: '0 16px 32px -8px rgba(255,95,0,0.1)' }}
                                    className="bg-white rounded-2xl border border-primary/6 overflow-hidden group hover:border-orange/20 transition-all duration-300 h-full flex flex-col"
                                >
                                    {/* Colored top bar */}
                                    <div className="h-1 bg-gradient-to-r from-orange to-peach" />

                                    <div className="p-6 flex-1 flex flex-col">
                                        {/* Meta */}
                                        <div className="flex items-center justify-between mb-4">
                                            <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${categoryColors[blog.category]}`}>
                                                {blog.category}
                                            </span>
                                            <span className="text-primary/30 text-xs">{blog.date}</span>
                                        </div>

                                        {/* Emoji */}
                                        <div className="text-3xl mb-3">{blog.emoji}</div>

                                        {/* Title */}
                                        <h3 className="font-display font-bold text-primary text-base leading-snug mb-3 group-hover:text-orange transition-colors">
                                            {blog.title}
                                        </h3>

                                        {/* Excerpt */}
                                        <p className="text-primary/50 text-sm leading-relaxed mb-4 flex-1">
                                            {blog.excerpt}
                                        </p>

                                        {/* Footer */}
                                        <div className="flex items-center justify-between pt-4 border-t border-primary/6">
                                            <span className="text-primary/30 text-xs">⏱ {blog.readTime}</span>
                                            <button
                                                onClick={() => setExpandedBlog(expandedBlog === blog.id ? null : blog.id)}
                                                className="text-orange font-semibold text-xs hover:underline inline-flex items-center gap-1"
                                            >
                                                {expandedBlog === blog.id ? 'Show Less' : 'Read More'}
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Expanded content */}
                                    {expandedBlog === blog.id && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            className="px-6 pb-6 border-t border-primary/6"
                                        >
                                            <div className="pt-5 space-y-3">
                                                {blog.content.map((p, i) => (
                                                    <p key={i} className="text-primary/55 text-sm leading-relaxed">{p}</p>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </motion.div>
                            </AnimatedSection>
                        ))}
                    </div>

                    {filtered.length === 0 && (
                        <div className="text-center py-20">
                            <div className="text-4xl mb-4">📝</div>
                            <p className="text-primary/40 text-base">No articles in this category yet. Check back soon!</p>
                        </div>
                    )}
                </div>
            </section>

            {/* ── NEWSLETTER CTA ─────────────────────────────── */}
            <section className="bg-primary py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(255,95,0,0.6) 1px, transparent 1px)',
                        backgroundSize: '36px 36px',
                    }}
                />
                <div className="absolute top-0 left-1/4 w-80 h-80 bg-orange/10 rounded-full blur-3xl pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10">
                    <AnimatedSection>
                        <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto">
                            <div className="text-5xl mb-5">📬</div>
                            <h2 className="text-3xl lg:text-5xl font-display font-bold text-cream leading-tight">
                                Stay Ahead of the
                                <span className="text-orange block mt-1">Tech Curve</span>
                            </h2>
                            <p className="mt-5 text-cream/55 text-base leading-relaxed">
                                Get our latest insights, case studies, and Microsoft technology updates delivered straight to your inbox.
                            </p>
                            <a
                                href="/#contact"
                                className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-orange text-white font-semibold text-sm hover:bg-orange/90 shadow-lg shadow-orange/20 transition-all duration-200 hover:-translate-y-0.5"
                            >
                                Get in Touch
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </motion.div>
                    </AnimatedSection>
                </div>
            </section>

        </div>
    );
}
