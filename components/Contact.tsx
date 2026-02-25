import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        service: '',
        industry: '',
        goal: '',
        budget: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormState({
                name: '', email: '', service: '', industry: '', goal: '', budget: '', message: ''
            });
            setTimeout(() => setIsSubmitted(false), 5000);
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen bg-slate-950 pt-32 pb-20 px-6 sm:px-10 lg:px-24 flex flex-col items-center justify-center font-sans relative overflow-hidden text-slate-100">
            {/* Background gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px]" />
                <div className="absolute top-[20%] -right-[10%] w-[30%] h-[50%] rounded-full bg-slate-700/10 blur-[100px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="z-10 text-center max-w-3xl mb-16"
            >
                <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight mb-6">
                    Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Extraordinary</span>
                </h1>
                <p className="text-lg text-slate-400">
                    Ready to elevate your online presence? Drop me a message below and let's discuss how we can bring your vision to life.
                </p>
            </motion.div>

            <div className="z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                {/* Contact Information */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="lg:col-span-5 flex flex-col justify-start pt-8 space-y-12"
                >
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-white">Get in Touch</h2>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            I'm currently accepting new projects. Whether you need a high-converting landing page or a complex web application, I'm here to build it.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <motion.div whileHover={{ x: 10 }} className="flex items-center space-x-6 cursor-pointer group">
                            <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center text-blue-500 shadow-xl shadow-blue-500/10 border border-slate-800 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all duration-300">
                                <Mail className="w-7 h-7" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Email</p>
                                <a href="mailto:hello@feinwebsites.com" className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
                                    hello@feinwebsites.com
                                </a>
                            </div>
                        </motion.div>

                        <motion.div whileHover={{ x: 10 }} className="flex items-center space-x-6 cursor-pointer group">
                            <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center text-indigo-400 shadow-xl shadow-indigo-500/10 border border-slate-800 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-500 transition-all duration-300">
                                <Phone className="w-7 h-7" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Phone</p>
                                <a href="tel:+1234567890" className="text-xl font-bold text-white hover:text-indigo-400 transition-colors">
                                    +1 (555) 123-4567
                                </a>
                            </div>
                        </motion.div>

                        <motion.div whileHover={{ x: 10 }} className="flex items-center space-x-6 group">
                            <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center text-cyan-400 shadow-xl shadow-cyan-500/10 border border-slate-800 group-hover:bg-cyan-600 group-hover:text-white group-hover:border-cyan-500 transition-all duration-300">
                                <MapPin className="w-7 h-7" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Location</p>
                                <p className="text-xl font-bold text-white">
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
                    className="lg:col-span-7"
                >
                    <div className="bg-slate-900/60 backdrop-blur-3xl p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-slate-800 relative overflow-hidden">
                        {isSubmitted && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/95 backdrop-blur-xl rounded-[2.5rem] p-10 text-center z-20"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                                    className="w-24 h-24 bg-green-900/30 rounded-full flex items-center justify-center mb-8 text-green-400 shadow-lg shadow-green-500/20 shadow-inner border border-green-500/30"
                                >
                                    <CheckCircle className="w-12 h-12" />
                                </motion.div>
                                <h3 className="text-3xl font-black text-white mb-4">Message Sent!</h3>
                                <p className="text-lg text-slate-400">
                                    Thank you for reaching out. I'll get back to you within 24 hours.
                                </p>
                            </motion.div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-bold text-slate-300 ml-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formState.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-3.5 bg-slate-950 border border-slate-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm text-white placeholder-slate-600 font-medium"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-bold text-slate-300 ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-3.5 bg-slate-950 border border-slate-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm text-white placeholder-slate-600 font-medium"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="service" className="text-sm font-bold text-slate-300 ml-1">Service Requested</label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formState.service}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-3.5 bg-slate-950 border border-slate-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm text-white placeholder-slate-600 font-medium appearance-none"
                                    >
                                        <option value="" disabled className="text-slate-500">Select a Package</option>
                                        <option value="The Single">The Single (1 Page)</option>
                                        <option value="Standard 5">Standard 5 (Up to 5 Pages)</option>
                                        <option value="The Partnership">The Partnership (Monthly)</option>
                                        <option value="Custom/Other">Custom / Not Sure</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="budget" className="text-sm font-bold text-slate-300 ml-1">Estimated Budget</label>
                                    <select
                                        id="budget"
                                        name="budget"
                                        value={formState.budget}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-3.5 bg-slate-950 border border-slate-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm text-white placeholder-slate-600 font-medium appearance-none"
                                    >
                                        <option value="" disabled className="text-slate-500">Select Timeline / Budget</option>
                                        <option value="Under $1,000">Under $1,000</option>
                                        <option value="$1,000 - $2,500">$1,000 - $2,500</option>
                                        <option value="$2,500+">$2,500+</option>
                                        <option value="Monthly Subscription">Monthly Subscription</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="industry" className="text-sm font-bold text-slate-300 ml-1">Business / Industry</label>
                                    <input
                                        type="text"
                                        id="industry"
                                        name="industry"
                                        value={formState.industry}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-3.5 bg-slate-950 border border-slate-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm text-white placeholder-slate-600 font-medium"
                                        placeholder="e.g. Real Estate, E-commerce, Plumber"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="goal" className="text-sm font-bold text-slate-300 ml-1">Main Website Goal</label>
                                    <input
                                        type="text"
                                        id="goal"
                                        name="goal"
                                        value={formState.goal}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-3.5 bg-slate-950 border border-slate-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm text-white placeholder-slate-600 font-medium"
                                        placeholder="e.g. Get Leads, Sell Products"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-bold text-slate-300 ml-1">Project Details</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-5 py-3.5 bg-slate-950 border border-slate-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm text-white placeholder-slate-600 resize-none font-medium"
                                    placeholder="Tell me more about your project and any specific requirements..."
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg py-4 rounded-2xl shadow-xl shadow-blue-500/20 flex items-center justify-center space-x-2 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed mt-4 border border-blue-500/50"
                            >
                                {isSubmitting ? (
                                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : (
                                    <>
                                        <span>Send Application</span>
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
