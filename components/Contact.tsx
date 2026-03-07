import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Send, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });
    const contentY = useTransform(scrollYProgress, [0, 1], [50, -50]);

    const [formState, setFormState] = useState({
        name: '', email: '', phone: '', service: '', industry: '', goal: '', message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [displayEmail, setDisplayEmail] = useState('');
    const [displayPhone, setDisplayPhone] = useState('');

    useEffect(() => {
        const ePt1 = 'justinfeinman89'; const ePt2 = 'gmail.com';
        setDisplayEmail(`${ePt1}@${ePt2}`);
        const pPt1 = '631'; const pPt2 = '335'; const pPt3 = '5413';
        setDisplayPhone(`${pPt1}-${pPt2}-${pPt3}`);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormState({ name: '', email: '', phone: '', service: '', industry: '', goal: '', message: '' });
            setTimeout(() => setIsSubmitted(false), 5000);
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const inputClass =
        'w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/60 transition-all text-white placeholder-white/20 font-medium text-sm';

    return (
        <div ref={sectionRef} className="min-h-screen bg-[#030711] text-white font-sans flex items-center justify-center relative px-6 pt-20 pb-[260px]">

            {/* Dot-grid background */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
                    backgroundSize: '28px 28px',
                }}
            />
            {/* Radial vignette — fades grid toward edges, keeps center visible */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 75% 75% at 50% 50%, transparent 20%, #030711 100%)',
                }}
            />


            <motion.div style={{ y: contentY }} className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

                {/* ── LEFT PANEL ── */}
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-2 flex flex-col justify-center gap-8"
                >
                    {/* Heading */}
                    <div>
                        <p className="text-blue-400 text-xs font-bold uppercase tracking-[0.22em] mb-3">
                            Get in Touch
                        </p>
                        <h1 className="text-4xl xl:text-5xl font-black tracking-tight leading-[1.1] mb-4">
                            Let's build<br />
                            something{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                                great.
                            </span>
                        </h1>
                        <p className="text-blue-100/50 text-sm leading-relaxed max-w-xs">
                            Fill out the form and I'll get back to you within a few hours with a plan of action.
                        </p>
                    </div>

                    {/* Contact details */}
                    <div className="flex flex-col gap-4">
                        <a
                            href={displayEmail ? `mailto:${displayEmail}` : '#'}
                            className="flex items-center gap-4 group"
                        >
                            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all flex-shrink-0">
                                <Mail className="w-4 h-4" />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Email</p>
                                <p className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors">
                                    {displayEmail || '…'}
                                </p>
                            </div>
                        </a>

                        <a
                            href={displayPhone ? `tel:+1${displayPhone.replace(/-/g, '')}` : '#'}
                            className="flex items-center gap-4 group"
                        >
                            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all flex-shrink-0">
                                <Phone className="w-4 h-4" />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Phone</p>
                                <p className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors">
                                    {displayPhone
                                        ? `+1 (${displayPhone.split('-')[0]}) ${displayPhone.split('-').slice(1).join('-')}`
                                        : '…'}
                                </p>
                            </div>
                        </a>

                        <div className="flex items-center gap-4 group">
                            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white transition-all flex-shrink-0">
                                <MapPin className="w-4 h-4" />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Location</p>
                                <p className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors">Available Worldwide</p>
                            </div>
                        </div>
                    </div>

                    {/* Divider line decoration */}
                    <div className="hidden lg:block h-px w-full bg-gradient-to-r from-blue-500/30 via-white/10 to-transparent" />
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="lg:col-span-3"
                >
                    <div className="group relative p-[1px] rounded-[2rem] overflow-hidden shadow-2xl shadow-black/50">
                        {/* Shimmer Border Layer */}
                        <motion.div
                            initial={{ rotate: "0deg" }}
                            animate={{ rotate: "360deg" }}
                            transition={{
                                repeat: Infinity,
                                duration: 8,
                                ease: "linear",
                            }}
                            style={{
                                background: `conic-gradient(
                                    from 0deg, 
                                    ${'#3b82f6'} 0%, 
                                    transparent 15%, 
                                    transparent 50%, 
                                    ${'#3b82f6'} 50%, 
                                    transparent 65%, 
                                    transparent 100%
                                )`,
                            }}
                            className="absolute inset-[-250%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        />

                        {/* Inner Background Blocker */}
                        <div className="absolute inset-[1px] bg-[#030711] rounded-[calc(2rem-1px)] z-0" />

                        {/* Actual Form Container */}
                        <div className="relative z-10 bg-white/[0.01] border border-white/10 backdrop-blur-3xl rounded-[calc(2rem-1px)] p-6 md:p-8 overflow-hidden">

                            {/* Success state */}
                            <AnimatePresence>
                                {isSubmitted && (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="absolute inset-0 flex flex-col items-center justify-center bg-[#030711]/95 backdrop-blur-xl rounded-3xl p-10 text-center z-20"
                                    >
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: 'spring', stiffness: 220, delay: 0.1 }}
                                            className="w-16 h-16 bg-blue-600/20 border border-blue-400/30 rounded-full flex items-center justify-center mb-5 text-blue-400"
                                        >
                                            <CheckCircle className="w-8 h-8" />
                                        </motion.div>
                                        <h3 className="text-2xl font-black text-white mb-2">You're on the list!</h3>
                                        <p className="text-blue-100/50 text-sm">I'll be in touch soon — keep an eye on your inbox.</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-4">

                                {/* Row 1: Name + Email */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label htmlFor="name" className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Name</label>
                                        <input type="text" id="name" name="name" value={formState.name} onChange={handleChange} required placeholder="John Doe" className={inputClass} />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label htmlFor="email" className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Email</label>
                                        <input type="email" id="email" name="email" value={formState.email} onChange={handleChange} required placeholder="john@example.com" className={inputClass} />
                                    </div>
                                </div>

                                {/* Row 2: Package + Phone */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label htmlFor="service" className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Package</label>
                                        <select id="service" name="service" value={formState.service} onChange={handleChange} required className={inputClass + ' appearance-none cursor-pointer'}>
                                            <option value="" disabled className="bg-[#0c1f4a] text-white/40">Select a Package</option>
                                            <option value="The Single" className="bg-[#0c1f4a]">The Single (1 Page)</option>
                                            <option value="Standard 5" className="bg-[#0c1f4a]">Standard 5 (Up to 5 Pages)</option>
                                            <option value="The Partnership" className="bg-[#0c1f4a]">The Partnership (Monthly)</option>
                                            <option value="Custom/Other" className="bg-[#0c1f4a]">Custom / Not Sure</option>
                                        </select>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label htmlFor="phone" className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                                            Phone <span className="normal-case font-normal text-white/20">(optional)</span>
                                        </label>
                                        <input type="tel" id="phone" name="phone" value={formState.phone} onChange={handleChange} placeholder="(555) 123-4567" className={inputClass} />
                                    </div>
                                </div>

                                {/* Row 3: Industry + Goal */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label htmlFor="industry" className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Business / Industry</label>
                                        <input type="text" id="industry" name="industry" value={formState.industry} onChange={handleChange} required placeholder="e.g. Real Estate, Plumber" className={inputClass} />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label htmlFor="goal" className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Website Goal</label>
                                        <input type="text" id="goal" name="goal" value={formState.goal} onChange={handleChange} required placeholder="e.g. Get Leads, Sell Products" className={inputClass} />
                                    </div>
                                </div>

                                {/* Row 4: Message */}
                                <div className="space-y-1.5">
                                    <label htmlFor="message" className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Project Details</label>
                                    <textarea id="message" name="message" value={formState.message} onChange={handleChange} required rows={3} placeholder="Tell me more about your project..." className={inputClass + ' resize-none'} />
                                </div>

                                {/* Submit */}
                                <motion.button
                                    whileHover={{ scale: 1.015 }}
                                    whileTap={{ scale: 0.97 }}
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed border border-blue-400/20 text-sm mt-1"
                                >
                                    {isSubmitting ? (
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            <span>Submit Application</span>
                                            <Send className="w-3.5 h-3.5" />
                                        </>
                                    )}
                                </motion.button>

                            </form>
                        </div>
                    </div>
                </motion.div>

            </motion.div>

            {/* ── MOUNTAIN RANGE + FOOTER CURVE ── */}
            <div className="absolute -bottom-1 left-0 w-full pointer-events-none z-10">
                <svg
                    viewBox="0 0 1440 260"
                    preserveAspectRatio="none"
                    className="w-full block"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Layer 1 — Distant peaks (faintest) */}
                    <path
                        d="M0,210 L90,165 L180,195 L280,130 L370,170 L460,142 L560,178 L650,118 L740,158 L840,132 L920,165 L1010,138 L1100,172 L1190,125 L1290,162 L1380,140 L1440,170 L1440,260 L0,260 Z"
                        fill="#1A2E4C"
                        opacity="0.3"
                    />

                    {/* Layer 2 — Mid ridgeline */}
                    <path
                        d="M0,225 L80,188 L170,210 L250,160 L340,192 L430,168 L510,198 L600,148 L690,182 L780,155 L860,185 L950,160 L1040,190 L1130,158 L1220,182 L1320,162 L1410,188 L1440,172 L1440,260 L0,260 Z"
                        fill="#1A2E4C"
                        opacity="0.6"
                    />

                    {/* Layer 3 — Front range (full opacity, boldest) */}
                    <path
                        d="M0,245 L60,215 L130,235 L210,192 L290,222 L370,200 L450,228 L530,178 L620,212 L710,168 L800,205 L880,182 L960,218 L1050,188 L1140,215 L1220,195 L1310,225 L1390,205 L1440,228 L1440,260 L0,260 Z"
                        fill="#1A2E4C"
                    />
                </svg>
            </div>
        </div >
    );
};

export default Contact;

