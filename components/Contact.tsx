import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        industry: '',
        goal: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [displayEmail, setDisplayEmail] = useState('');
    const [displayPhone, setDisplayPhone] = useState('');

    useEffect(() => {
        // Simple client-side de-obfuscation so bots scanning static files won't find it easily
        const ePt1 = "justinfeinman89";
        const ePt2 = "gmail.com";
        setDisplayEmail(`${ePt1}@${ePt2}`);

        const pPt1 = "631";
        const pPt2 = "335";
        const pPt3 = "5413";
        setDisplayPhone(`${pPt1}-${pPt2}-${pPt3}`);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormState({
                name: '', email: '', phone: '', service: '', industry: '', goal: '', message: ''
            });
            setTimeout(() => setIsSubmitted(false), 5000);
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen bg-yellow-50 pt-32 pb-20 px-6 sm:px-10 lg:px-24 flex flex-col items-center justify-center font-sans relative overflow-hidden">
            {/* Top Half Background - Curved Diagonal Split */}
            <div className="absolute top-0 left-0 w-full h-[1200px] lg:h-[85vh] bg-primary z-0">
                {/* This SVG creates a steep curved diagonal cut */}
                <div className="absolute bottom-[-1px] left-0 w-full leading-[0]">
                    <svg
                        viewBox="0 0 1440 320"
                        preserveAspectRatio="none"
                        className="relative block w-[calc(100%+1.3px)] h-[150px] md:h-[250px] fill-yellow-50"
                    >
                        <path d="M0,256L80,224C160,192,320,128,480,122.7C640,117,800,171,960,186.7C1120,203,1280,181,1360,170.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                    </svg>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="z-10 text-center max-w-3xl mb-16"
            >
                <h1 className="font-display text-4xl md:text-6xl font-black text-white tracking-tight leading-tight mb-6">
                    Ready to build your <span className="text-blue-400">future?</span>
                </h1>
                <p className="text-lg text-blue-100/80 max-w-2xl mx-auto">
                    Drop your project details below and I'll get back to you with a plan of action. Let's create something extraordinary together.
                </p>
            </motion.div>

            <div className="z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                {/* Contact Information */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="lg:col-span-4 flex flex-col justify-start pt-4 space-y-12"
                >
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-white tracking-tight">Direct Contact</h2>
                        <p className="text-blue-100/70 text-lg leading-relaxed">
                            I typically respond within a few hours. I'm excited to learn more about your goals.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <motion.div whileHover={{ x: 10 }} className="flex items-center space-x-6 cursor-pointer group">
                            <div className="w-14 h-14 rounded-[1.5rem] bg-white/10 backdrop-blur-md flex items-center justify-center text-blue-400 shadow-xl border border-white/10 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all duration-300">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-blue-200/50 uppercase tracking-widest mb-1">Email</p>
                                <a href={displayEmail ? `mailto:${displayEmail}` : '#'} className="text-lg font-bold text-white hover:text-blue-300 transition-colors">
                                    {displayEmail || "Loading..."}
                                </a>
                            </div>
                        </motion.div>

                        <motion.div whileHover={{ x: 10 }} className="flex items-center space-x-6 cursor-pointer group">
                            <div className="w-14 h-14 rounded-[1.5rem] bg-white/10 backdrop-blur-md flex items-center justify-center text-indigo-400 shadow-xl border border-white/10 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-500 transition-all duration-300">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-blue-200/50 uppercase tracking-widest mb-1">Phone</p>
                                <a href={displayPhone ? `tel:+1${displayPhone.replace(/-/g, '')}` : '#'} className="text-lg font-bold text-white hover:text-indigo-300 transition-colors">
                                    {displayPhone ? `+1 (${displayPhone.split('-')[0]}) ${displayPhone.split('-').slice(1).join('-')}` : "Loading..."}
                                </a>
                            </div>
                        </motion.div>

                        <motion.div whileHover={{ x: 10 }} className="flex items-center space-x-6 group">
                            <div className="w-14 h-14 rounded-[1.5rem] bg-white/10 backdrop-blur-md flex items-center justify-center text-cyan-400 shadow-xl border border-white/10 group-hover:bg-cyan-600 group-hover:text-white group-hover:border-cyan-500 transition-all duration-300">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-blue-200/50 uppercase tracking-widest mb-1">Location</p>
                                <p className="text-lg font-bold text-white">
                                    Available Worldwide
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="lg:col-span-8"
                >
                    <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden border border-white/20">
                        {isSubmitted && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="absolute inset-0 flex flex-col items-center justify-center bg-white/95 backdrop-blur-xl rounded-[3rem] p-10 text-center z-20"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                                    className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-8 text-blue-600 shadow-inner"
                                >
                                    <CheckCircle className="w-12 h-12" />
                                </motion.div>
                                <h3 className="text-3xl font-black text-slate-900 mb-4">You're on the list!</h3>
                                <p className="text-lg text-slate-600">
                                    Thanks for reaching out. Keep an eye on your inbox, I'll be in touch soon.
                                </p>
                            </motion.div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10 w-full">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-bold text-slate-700 ml-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formState.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-[2rem] focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm text-slate-900 placeholder-slate-400 font-medium"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-bold text-slate-700 ml-2">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-[2rem] focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm text-slate-900 placeholder-slate-400 font-medium"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="service" className="text-sm font-bold text-slate-700 ml-2">Service Requested</label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formState.service}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-[2rem] focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm text-slate-900 font-medium appearance-none cursor-pointer"
                                    >
                                        <option value="" disabled className="text-slate-400">Select a Package</option>
                                        <option value="The Single">The Single (1 Page)</option>
                                        <option value="Standard 5">Standard 5 (Up to 5 Pages)</option>
                                        <option value="The Partnership">The Partnership (Monthly)</option>
                                        <option value="Custom/Other">Custom / Not Sure</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-bold text-slate-700 ml-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formState.phone}
                                        onChange={handleChange}
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-[2rem] focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm text-slate-900 placeholder-slate-400 font-medium"
                                        placeholder="(555) 123-4567"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="industry" className="text-sm font-bold text-slate-700 ml-2">Business / Industry</label>
                                    <input
                                        type="text"
                                        id="industry"
                                        name="industry"
                                        value={formState.industry}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-[2rem] focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm text-slate-900 placeholder-slate-400 font-medium"
                                        placeholder="e.g. Real Estate, E-commerce, Plumber"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="goal" className="text-sm font-bold text-slate-700 ml-2">Main Website Goal</label>
                                    <input
                                        type="text"
                                        id="goal"
                                        name="goal"
                                        value={formState.goal}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-[2rem] focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm text-slate-900 placeholder-slate-400 font-medium"
                                        placeholder="e.g. Get Leads, Sell Products"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-bold text-slate-700 ml-2">Project Details</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-[2rem] focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm text-slate-900 placeholder-slate-400 resize-none font-medium"
                                    placeholder="Tell me more about your project and any specific requirements..."
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-5 rounded-[2rem] shadow-xl shadow-blue-500/30 flex items-center justify-center space-x-2 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed mt-4 border border-blue-400/20"
                            >
                                {isSubmitting ? (
                                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : (
                                    <>
                                        <span>Submit Application</span>
                                        <Send className="w-5 h-5 ml-2" />
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
