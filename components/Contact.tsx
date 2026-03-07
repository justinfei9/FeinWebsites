import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Send, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
const AnimatedInput = ({ label, type = "text", name, value, onChange, required = false, placeholder = "" }: any) => {
    // We check if value exists to keep the label 'floated'
    const hasValue = value !== undefined && value !== null && value !== "";
    // Faster animation for longer labels to not keep the user waiting
    const isLongLabel = label.length > 15;
    const delayStep = isLongLabel ? 15 : 50;

    return (
        <div className="relative my-2 w-full group/input">
            <input
                type={type}
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                required={required}
                className="block w-full bg-transparent border-0 border-b-2 border-white/20 pt-[15px] pb-[10px] text-base text-white focus:outline-none focus:border-blue-500 transition-colors duration-300"
            />
            <label
                htmlFor={name}
                className="absolute top-[15px] left-0 flex pointer-events-none"
            >
                {label.split('').map((char: string, index: number) => (
                    <span
                        key={index}
                        className={`inline-block min-w-[2px] sm:min-w-[5px] font-bold uppercase tracking-[0.05em] sm:tracking-[0.1em] transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] ${hasValue
                            ? 'text-blue-400 -translate-y-[25px] text-[8px] sm:text-[10px]'
                            : 'text-white/40 text-[10px] sm:text-[14px] group-focus-within/input:text-blue-400 group-focus-within/input:-translate-y-[25px] group-focus-within/input:text-[8px] sm:group-focus-within/input:text-[10px]'
                            }`}
                        style={{ transitionDelay: `${index * delayStep}ms` }}
                    >
                        {char === ' ' ? '\u00A0' : char}
                    </span>
                ))}
            </label>
        </div>
    );
};

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
    const [submitError, setSubmitError] = useState('');
    const [displayEmail, setDisplayEmail] = useState('');
    const [displayPhone, setDisplayPhone] = useState('');

    useEffect(() => {
        const ePt1 = 'justinfeinman89'; const ePt2 = 'gmail.com';
        setDisplayEmail(`${ePt1}@${ePt2}`);
        const pPt1 = '631'; const pPt2 = '335'; const pPt3 = '5413';
        setDisplayPhone(`${pPt1}-${pPt2}-${pPt3}`);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError('');

        try {
            const formData = new FormData();
            formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

            // Add all form fields to FormData
            Object.entries(formState).forEach(([key, value]) => {
                formData.append(key, value);
            });

            // Optional: Web3Forms config
            formData.append("subject", `New Contact Form Submission from ${formState.name}`);
            formData.append("from_name", formState.name);
            // formData.append("redirect", "https://web3forms.com/success"); // if you want visual redirect, otherwise api is better

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setIsSubmitted(true);
                setFormState({ name: '', email: '', phone: '', service: '', industry: '', goal: '', message: '' });
                setTimeout(() => setIsSubmitted(false), 5000);
            } else {
                console.error("Web3Forms error:", data);
                setSubmitError(data.message || "Failed to send message. Please try again or email directly.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            setSubmitError("An unexpected error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const inputClass =
        'w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/60 transition-all text-white placeholder-white/20 font-medium text-sm';

    return (
        <div ref={sectionRef} className="min-h-screen bg-[#030711] text-white font-sans flex items-center justify-center relative px-6 pt-20 pb-[26px]">

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
                        <p className="text-blue-500 font-bold uppercase tracking-[0.15em] mb-4 text-sm">
                            Start a Project
                        </p>
                        <h1 className="text-4xl xl:text-6xl font-black tracking-tighter leading-[1.05] mb-6 text-white">
                            Ready to work<br />
                            together?
                        </h1>
                        <p className="text-slate-400 text-base leading-relaxed max-w-sm">
                            Drop your details below. I'll review your project and get back to you with a clear plan of action.
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
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="lg:col-span-3"
                >
                    <div className="group relative p-[1px] rounded-[2rem] shadow-2xl shadow-black/50">
                        {/* Glow Border Layer - Outside/Around */}
                        <div className="absolute inset-[-20px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0">
                            <div className="absolute inset-0 bg-blue-500/10 blur-[40px] rounded-[3rem]" />
                        </div>

                        {/* Border Glow */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10">
                            <div className="absolute inset-[-1px] rounded-[2rem] border border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.3)]" />
                        </div>

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

                            {/* Error Message */}
                            <AnimatePresence>
                                {submitError && !isSubmitted && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="relative z-10 mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-xl text-red-200 text-sm text-center"
                                    >
                                        {submitError}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-4">

                                {/* Row 1: Name + Email */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                                    <AnimatedInput
                                        label="Name"
                                        name="name"
                                        value={formState.name}
                                        onChange={handleChange}
                                        required
                                    />
                                    <AnimatedInput
                                        label="Email"
                                        type="email"
                                        name="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Row 2: Package + Phone */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                                    <div className="relative my-2 w-full group/input">
                                        <select
                                            id="service"
                                            name="service"
                                            value={formState.service}
                                            onChange={handleChange}
                                            required
                                            className="block w-full bg-transparent border-0 border-b-2 border-white/20 pt-[15px] pb-[10px] text-base text-white focus:outline-none focus:border-blue-500 transition-colors duration-300 appearance-none cursor-pointer"
                                        >
                                            <option value="" disabled className="hidden text-white/40"></option>
                                            <option value="The Single" className="bg-[#030711] text-white">The Single (1 Page)</option>
                                            <option value="Standard 5" className="bg-[#030711] text-white">Standard 5 (Up to 5 Pages)</option>
                                            <option value="The Partnership" className="bg-[#030711] text-white">The Partnership (Monthly)</option>
                                            <option value="Custom/Other" className="bg-[#030711] text-white">Custom / Not Sure</option>
                                        </select>
                                        <label htmlFor="service" className="absolute top-[15px] left-0 flex pointer-events-none">
                                            {"Package".split('').map((char: string, index: number) => (
                                                <span
                                                    key={index}
                                                    className={`inline-block min-w-[5px] font-bold uppercase tracking-[0.1em] transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] ${formState.service !== ""
                                                        ? 'text-blue-400 -translate-y-[25px] text-[10px]'
                                                        : 'text-white/40 text-[14px] group-focus-within/input:text-blue-400 group-focus-within/input:-translate-y-[25px] group-focus-within/input:text-[10px]'
                                                        }`}
                                                    style={{ transitionDelay: `${index * 50}ms` }}
                                                >
                                                    {char === ' ' ? '\u00A0' : char}
                                                </span>
                                            ))}
                                        </label>
                                    </div>
                                    <AnimatedInput
                                        label="Phone"
                                        type="tel"
                                        name="phone"
                                        value={formState.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Row 3: Industry + Goal */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                                    <AnimatedInput
                                        label="Industry"
                                        name="industry"
                                        value={formState.industry}
                                        onChange={handleChange}
                                        required
                                    />
                                    <AnimatedInput
                                        label="How did you hear about us?"
                                        name="goal"
                                        value={formState.goal}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Row 4: Message */}
                                <div className="relative my-2 w-full mb-8 group/input">
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formState.message}
                                        onChange={handleChange}
                                        required
                                        rows={3}
                                        className="block w-full bg-transparent border-0 border-b-2 border-white/20 pt-[15px] pb-[10px] text-base text-white focus:outline-none focus:border-blue-500 transition-colors duration-300 resize-none"
                                    />
                                    <label htmlFor="message" className="absolute top-[15px] left-0 flex pointer-events-none">
                                        {"Tell us about your business".split('').map((char: string, index: number) => (
                                            <span
                                                key={index}
                                                className={`inline-block min-w-[5px] font-bold uppercase tracking-[0.1em] transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] ${formState.message !== ""
                                                    ? 'text-blue-400 -translate-y-[25px] text-[8px] sm:text-[10px]'
                                                    : 'text-white/40 text-[10px] sm:text-[14px] group-focus-within/input:text-blue-400 group-focus-within/input:-translate-y-[25px] group-focus-within/input:text-[8px] sm:group-focus-within/input:text-[10px]'
                                                    }`}
                                                style={{ transitionDelay: `${index * 15}ms` }}
                                            >
                                                {char === ' ' ? '\u00A0' : char}
                                            </span>
                                        ))}
                                    </label>
                                </div>

                                {/* Submit */}
                                <motion.button
                                    whileHover="hover"
                                    whileTap={{ scale: 0.95 }}
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="group relative flex w-full items-center justify-center overflow-hidden rounded-2xl bg-blue-600 px-[1em] py-[0.8em] text-lg font-bold text-white shadow-lg shadow-blue-600/20 transition-colors duration-200 hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60 border border-blue-400/20 cursor-pointer mt-2"
                                >
                                    {isSubmitting ? (
                                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                                    ) : (
                                        <>
                                            <motion.div
                                                variants={{
                                                    hover: { y: ["0.15em", "-0.15em"], transition: { repeat: Infinity, duration: 0.6, repeatType: "mirror", ease: "easeInOut" } }
                                                }}
                                                className="flex items-center justify-center"
                                            >
                                                <motion.svg
                                                    variants={{ hover: { x: "2.5em", rotate: 45, scale: 1.1, transition: { duration: 0.3 } } }}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                    className="block origin-center"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                                    <path
                                                        fill="currentColor"
                                                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                                    ></path>
                                                </motion.svg>
                                            </motion.div>
                                            <motion.span
                                                variants={{ hover: { x: "10em", opacity: 0, transition: { duration: 0.3 } } }}
                                                className="block ml-2 whitespace-nowrap"
                                            >
                                                Send Application
                                            </motion.span>
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

