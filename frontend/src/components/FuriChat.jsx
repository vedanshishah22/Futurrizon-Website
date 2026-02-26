import React, { useState, useRef, useEffect, useCallback } from 'react';
import './FuriChat.css';
import { GROQ_API_KEY, GROQ_MODEL, GROQ_ENDPOINT, buildSystemPrompt } from '../data/furiData';

// ─── Interest detection patterns ──────────────────────────────────────────────
const INTEREST_PATTERNS = [
    /project/i, /collaborat/i, /service/i, /pric/i, /cost/i, /implement/i,
    /consult/i, /solution/i, /hire/i, /work with/i, /partner/i, /discuss/i,
    /proposal/i, /quote/i, /demo/i, /interested/i, /requir/i, /automat/i,
    /microsoft/i, /azure/i, /sharepoint/i, /power platform/i, /transform/i,
];

const detectInterest = (text) =>
    INTEREST_PATTERNS.some((p) => p.test(text));

// ─── Small helpers ────────────────────────────────────────────────────────────
const timeStr = () =>
    new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

const INITIAL_BOT_MESSAGE = {
    id: 'init',
    role: 'bot',
    type: 'text',
    text: "Hello! I'm **Furi** — Your Tech Buddy from Futurrizon. 👋\n\nBefore we begin, may I please have your **name** so I can assist you better?",
    time: timeStr(),
};

// ─── CTA Card component ───────────────────────────────────────────────────────
function CTACard() {
    return (
        <div className="mt-2 rounded-2xl overflow-hidden border border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50 shadow-sm">
            <div className="bg-gradient-to-r from-[#002379] to-[#003a9e] px-4 py-3">
                <p className="text-white font-semibold text-sm">Let's Connect Further 🚀</p>
                <p className="text-blue-100 text-xs mt-0.5">We'd love to explore this with you.</p>
            </div>
            <div className="p-3 space-y-2">
                <a
                    href="https://forms.office.com/r/ZLRhtSxcdG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="furi-cta-link flex items-center gap-2 px-3 py-2 rounded-xl bg-[#002379] text-white text-xs font-medium"
                >
                    <span className="text-base">📋</span>
                    <span>Fill out our quick form</span>
                    <span className="ml-auto opacity-60">→</span>
                </a>
                <a
                    href="https://calendly.com/futurrizon/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="furi-cta-link flex items-center gap-2 px-3 py-2 rounded-xl bg-[#FF5F00] text-white text-xs font-medium"
                >
                    <span className="text-base">📅</span>
                    <span>Schedule a 30-min meeting</span>
                    <span className="ml-auto opacity-60">→</span>
                </a>
                <p className="text-center text-[10px] text-gray-400 pt-1">We typically respond within 24 hours</p>
            </div>
        </div>
    );
}

// ─── Typing Indicator ─────────────────────────────────────────────────────────
function TypingIndicator() {
    return (
        <div className="flex items-end gap-2 mb-3">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#002379] to-[#003a9e] flex items-center justify-center flex-shrink-0 shadow-sm">
                <span className="text-white text-xs font-bold">F</span>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                <div className="flex items-center gap-1.5">
                    <span className="furi-dot w-1.5 h-1.5 bg-[#002379] rounded-full block" />
                    <span className="furi-dot w-1.5 h-1.5 bg-[#002379] rounded-full block" />
                    <span className="furi-dot w-1.5 h-1.5 bg-[#002379] rounded-full block" />
                </div>
            </div>
        </div>
    );
}

// ─── Message Bubble ───────────────────────────────────────────────────────────
function MessageBubble({ msg }) {
    const isUser = msg.role === 'user';

    // Render markdown: bold (**text**), URLs → clickable links, bullet lines (* / -)
    const formatText = (text) => {
        const URL_RE = /(https?:\/\/[^\s,]+)/g;

        // Tokenise a single segment (no newlines) into bold + URL inline elements
        const renderSegment = (seg, baseKey) => {
            // Split on URLs first
            const urlParts = seg.split(URL_RE);
            return urlParts.map((part, ui) => {
                if (URL_RE.test(part)) {
                    // Reset lastIndex after test()
                    URL_RE.lastIndex = 0;
                    return (
                        <a
                            key={`${baseKey}-u${ui}`}
                            href={part}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[#002379] underline underline-offset-2 font-medium break-all hover:text-[#FF5F00] transition-colors"
                        >
                            {part}
                        </a>
                    );
                }
                // Apply bold (**word**) inside the non-URL segment
                URL_RE.lastIndex = 0;
                const boldParts = part.split(/\*\*(.+?)\*\*/g);
                return boldParts.map((bp, bi) =>
                    bi % 2 === 1
                        ? <strong key={`${baseKey}-b${bi}`}>{bp}</strong>
                        : bp
                );
            });
        };

        const lines = text.split('\n');
        return lines.map((line, li) => {
            // Strip leading bullet chars (* or -) to render as a soft bullet row
            const isBullet = /^[*\-]\s+/.test(line);
            const content = isBullet ? line.replace(/^[*\-]\s+/, '') : line;

            return (
                <span key={li} className={isBullet ? 'flex gap-1.5 mt-0.5' : ''}>
                    {isBullet && <span className="mt-0.5 text-[#FF5F00] flex-shrink-0">•</span>}
                    <span>{renderSegment(content, `${li}`)}</span>
                    {li < lines.length - 1 && !isBullet && <br />}
                </span>
            );
        });
    };

    if (isUser) {
        return (
            <div className="flex justify-end mb-3">
                <div className="max-w-[78%]">
                    <div className="bg-gradient-to-br from-[#FF5F00] to-[#ff7a2e] text-white rounded-2xl rounded-br-sm px-4 py-2.5 shadow-sm text-sm leading-relaxed">
                        {msg.text}
                    </div>
                    <p className="text-right text-[10px] text-gray-400 mt-1 pr-1">{msg.time}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex items-end gap-2 mb-3">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#002379] to-[#003a9e] flex items-center justify-center flex-shrink-0 shadow-sm">
                <span className="text-white text-xs font-bold">F</span>
            </div>
            <div className="max-w-[82%]">
                <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-sm px-4 py-2.5 shadow-sm text-sm text-gray-800 leading-relaxed">
                    {formatText(msg.text)}
                    {msg.showCTA && <CTACard />}
                </div>
                <p className="text-[10px] text-gray-400 mt-1 pl-1">{msg.time}</p>
            </div>
        </div>
    );
}

// ─── Main FuriChat Component ──────────────────────────────────────────────────
export default function FuriChat() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([INITIAL_BOT_MESSAGE]);
    const [inputVal, setInputVal] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [collectPhase, setCollectPhase] = useState('name'); // 'name' | 'email' | 'done'
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [ctaShown, setCtaShown] = useState(false);
    const [hasUnread, setHasUnread] = useState(false);

    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);
    // Keep a ref to history for Groq context (only after collection phase)
    const historyRef = useRef([]);

    // Scroll to bottom on new messages
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    // Focus input when chat opens
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 150);
            setHasUnread(false);
        }
    }, [isOpen]);

    const addBotMessage = useCallback((text, extra = {}) => {
        const msg = { id: Date.now(), role: 'bot', type: 'text', text, time: timeStr(), ...extra };
        setMessages((prev) => [...prev, msg]);
        if (!isOpen) setHasUnread(true);
        return msg;
    }, [isOpen]);

    const addUserMessage = useCallback((text) => {
        const msg = { id: Date.now(), role: 'user', type: 'text', text, time: timeStr() };
        setMessages((prev) => [...prev, msg]);
        return msg;
    }, []);

    // ── Call Groq API ──────────────────────────────────────────────────────────
    const callGroq = useCallback(async (userText) => {
        historyRef.current.push({ role: 'user', content: userText });

        const body = {
            model: GROQ_MODEL,
            messages: [
                { role: 'system', content: buildSystemPrompt(userName) },
                ...historyRef.current,
            ],
            temperature: 0.4,
            max_tokens: 600,
        };

        const res = await fetch(GROQ_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${GROQ_API_KEY}`,
            },
            body: JSON.stringify(body),
        });

        if (!res.ok) throw new Error(`Groq error ${res.status}`);
        const data = await res.json();
        const reply = data.choices?.[0]?.message?.content?.trim() ||
            "I'm sorry, I couldn't process that. Please try again or contact our team directly.";

        historyRef.current.push({ role: 'assistant', content: reply });
        return reply;
    }, [userName]);

    // ── Handle submission ──────────────────────────────────────────────────────
    const handleSend = useCallback(async () => {
        const text = inputVal.trim();
        if (!text || isTyping) return;
        setInputVal('');
        addUserMessage(text);

        // ── Phase: collecting name ─────────────────────────────────────────────
        if (collectPhase === 'name') {
            const name = text.trim();
            setUserName(name);
            setCollectPhase('email');
            setTimeout(() => {
                addBotMessage(
                    `Nice to meet you, **${name}**! 😊\n\nCould you also share your **email address** so I can assist you better?`
                );
            }, 400);
            return;
        }

        // ── Phase: collecting email ────────────────────────────────────────────
        if (collectPhase === 'email') {
            if (!isValidEmail(text)) {
                setTimeout(() => {
                    addBotMessage("That doesn't look like a valid email address. Please enter a valid email (e.g. name@example.com).");
                }, 300);
                return;
            }
            setUserEmail(text);
            setCollectPhase('done');
            setTimeout(() => {
                addBotMessage(
                    `Thank you, **${userName}**! I appreciate it. 🎉\n\nHow can I assist you today? Feel free to ask about our services, company, HR policies, or anything else.`
                );
            }, 400);
            return;
        }

        // ── Phase: Q&A with Groq ──────────────────────────────────────────────
        setIsTyping(true);

        // Detect interest for CTA
        const interested = detectInterest(text);

        try {
            const reply = await callGroq(text);
            const shouldShowCTA = interested && !ctaShown;
            if (shouldShowCTA) setCtaShown(true);
            addBotMessage(reply, { showCTA: shouldShowCTA });
        } catch (err) {
            console.error('Groq API error:', err);
            addBotMessage(
                "I'm currently experiencing a connection issue. Please try again in a moment, or contact our team directly at **info@futurrizon.com** or **+91 9825148533**."
            );
        } finally {
            setIsTyping(false);
        }
    }, [inputVal, isTyping, collectPhase, userName, ctaShown, addUserMessage, addBotMessage, callGroq]);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const inputPlaceholder =
        collectPhase === 'name' ? 'Type your name…' :
            collectPhase === 'email' ? 'Type your email address…' :
                'Ask me anything about Futurrizon…';

    // ─── Render ────────────────────────────────────────────────────────────────
    return (
        <>
            {/* ── Floating Chat Panel ── */}
            {isOpen && (
                <div
                    className="furi-panel fixed bottom-24 right-5 z-[9999] flex flex-col"
                    style={{
                        width: 'min(380px, calc(100vw - 24px))',
                        height: 'min(560px, calc(100vh - 130px))',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        boxShadow: '0 24px 64px rgba(0,35,121,0.18), 0 4px 16px rgba(0,0,0,0.08)',
                        background: '#f8f9fc',
                    }}
                >
                    {/* Header */}
                    <div className="flex-shrink-0 bg-gradient-to-r from-[#002379] to-[#003a9e] px-4 py-3 flex items-center gap-3">
                        {/* Avatar */}
                        <div className="relative">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border-2 border-white/30">
                                <span className="text-white font-bold text-lg">F</span>
                            </div>
                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-[#002379]" />
                        </div>
                        {/* Info */}
                        <div className="flex-1 min-w-0">
                            <p className="text-white font-semibold text-sm leading-tight">Furi</p>
                            <p className="text-blue-200 text-xs">Your Tech Buddy · Online</p>
                        </div>
                        {/* Powered by */}
                        <div className="hidden sm:flex items-center gap-1 bg-white/10 rounded-full px-2 py-1">
                            <span className="text-blue-200 text-[9px]">Futurrizon</span>
                        </div>
                        {/* Close */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="ml-1 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                            aria-label="Close chat"
                        >
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>

                    {/* Progress indicator for data collection */}
                    {collectPhase !== 'done' && (
                        <div className="flex-shrink-0 bg-amber-50 border-b border-amber-100 px-4 py-2 flex items-center gap-2">
                            <div className="flex gap-1">
                                {['name', 'email', 'done'].map((p, i) => (
                                    <div
                                        key={p}
                                        className="h-1.5 w-6 rounded-full transition-colors duration-300"
                                        style={{
                                            background:
                                                (p === 'name' && ['name', 'email', 'done'].indexOf(collectPhase) >= 0) ||
                                                    (p === 'email' && ['email', 'done'].indexOf(collectPhase) >= 0) ||
                                                    (p === 'done' && collectPhase === 'done')
                                                    ? '#002379'
                                                    : '#e5e7eb',
                                        }}
                                    />
                                ))}
                            </div>
                            <p className="text-[10px] text-amber-700">
                                {collectPhase === 'name' ? 'Step 1 of 2 — Share your name' :
                                    collectPhase === 'email' ? 'Step 2 of 2 — Share your email' : ''}
                            </p>
                        </div>
                    )}

                    {/* Messages */}
                    <div className="furi-messages flex-1 overflow-y-auto px-4 py-4">
                        {messages.map((msg) => (
                            <MessageBubble key={msg.id} msg={msg} />
                        ))}
                        {isTyping && <TypingIndicator />}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="flex-shrink-0 bg-white border-t border-gray-100 p-3">
                        <div className="flex items-end gap-2">
                            <textarea
                                ref={inputRef}
                                value={inputVal}
                                onChange={(e) => setInputVal(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder={inputPlaceholder}
                                rows={1}
                                className="furi-input flex-1 resize-none rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm text-gray-800 placeholder-gray-400 transition-all"
                                style={{ maxHeight: '100px', overflowY: 'auto' }}
                            />
                            <button
                                onClick={handleSend}
                                disabled={!inputVal.trim() || isTyping}
                                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                                style={{ background: 'linear-gradient(135deg, #002379, #003a9e)' }}
                                aria-label="Send message"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="22" y1="2" x2="11" y2="13" />
                                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                </svg>
                            </button>
                        </div>
                        <p className="text-center text-[10px] text-gray-400 mt-2">
                            Powered by <span className="font-semibold text-[#002379]">Futurrizon</span>
                        </p>
                    </div>
                </div>
            )}

            {/* ── Launcher Button ── */}
            <button
                onClick={() => setIsOpen((o) => !o)}
                aria-label={isOpen ? 'Close Furi chat' : 'Open Furi chat'}
                className="fixed bottom-5 right-5 z-[9999] w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-transform duration-200 hover:scale-110 active:scale-95"
                style={{
                    background: isOpen
                        ? 'linear-gradient(135deg, #333, #555)'
                        : 'linear-gradient(135deg, #002379, #003a9e)',
                }}
            >
                {/* Pulse ring – shown only when closed */}
                {!isOpen && (
                    <span
                        className="furi-launcher-ring absolute inset-0 rounded-full"
                        style={{ background: 'rgba(0,35,121,0.35)' }}
                    />
                )}

                {/* Unread badge */}
                {hasUnread && !isOpen && (
                    <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-[#FF5F00] rounded-full flex items-center justify-center text-white text-[9px] font-bold shadow">
                        1
                    </span>
                )}

                {/* Icon */}
                {isOpen ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                ) : (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                        <path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
                    </svg>
                )}
            </button>
        </>
    );
}
