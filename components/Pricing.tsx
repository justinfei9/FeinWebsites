"use client"
import React, { useRef, useEffect } from 'react'
import { motion, animate } from 'framer-motion'

const cn = (...classes: any[]) => classes.filter(Boolean).join(' ');

const Counter = ({ from, to }: { from: number; to: number }) => {
    const nodeRef = useRef<HTMLSpanElement>(null);
    useEffect(() => {
        const node = nodeRef.current;
        if (!node) return;
        const controls = animate(from, to, {
            duration: 1.5,
            ease: "easeOut",
            onUpdate(value) { node.textContent = Math.round(value).toLocaleString(); },
        });
        return () => controls.stop();
    }, [from, to]);
    return <span ref={nodeRef} />;
};

const Pricing: React.FC = () => {
    const comparisonFeatures = [
        "Mobile-First Responsive Design",
        "Contact Form Integration",
        "Lightning Fast Performance",
        "Advanced SEO & Schema",
        "Google Analytics Integration",
        "Google Business Map Setup",
        "Social Media Link Previews",
        "Custom Scroll Animations",
        "Unlimited Content Edits",
        "Zero Upfront Build Cost",
        "Monthly Analytics Reports",
        "Priority Direct-Text Support"
    ];

    const plans = [
        {
            name: "The Single",
            pageCount: "1 Custom Hand-Coded Page",
            description: "A high-conversion one-page site. Fast, sleek, and focused on your primary goal.",
            price: 500,
            billing: "One-Time Payment",
            recurringFee: 30, 
            included: [
                "Mobile-First Responsive Design",
                "Contact Form Integration",
                "Lightning Fast Performance",
                "Advanced SEO & Schema"
            ],
            accent: "bg-slate-800 hover:bg-slate-700",
            cta: "Get Started"
        },
        {
            name: "Standard 5",
            pageCount: "Up to 5 Custom Pages",
            description: "The complete business package. Enough room to showcase all your services.",
            price: 1000,
            billing: "One-Time Payment",
            recurringFee: 50, 
            included: [
                "Mobile-First Responsive Design",
                "Contact Form Integration",
                "Lightning Fast Performance",
                "Advanced SEO & Schema",
                "Google Analytics Integration",
                "Google Business Map Setup",
                "Social Media Link Previews",
                "Custom Scroll Animations"
            ],
            isPopular: true,
            accent: "bg-blue-600 hover:bg-blue-500",
            cta: "Get Started"
        },
        {
            name: "The Partnership",
            pageCount: "Unlimited Page Requests",
            description: "Custom amount of pages with ongoing support and zero upfront risk.",
            price: null, 
            billing: "Monthly Subscription",
            included: [
                "Mobile-First Responsive Design",
                "Contact Form Integration",
                "Lightning Fast Performance",
                "Advanced SEO & Schema",
                "Google Analytics Integration",
                "Google Business Map Setup",
                "Social Media Link Previews",
                "Custom Scroll Animations",
                "Unlimited Content Edits",
                "Zero Upfront Build Cost",
                "Monthly Analytics Reports",
                "Priority Direct-Text Support"
            ],
            accent: "bg-slate-800 text-white hover:bg-slate-700",
            cta: "Get Started" 
        }
    ];

    return (
        <div className="min-h-screen bg-slate-950 pt-32 pb-20 px-6 font-sans text-slate-100">
            <div className="max-w-7xl mx-auto">
                
                {/* --- NEW HEADER SECTION --- */}
                <div className="text-center mb-20">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6"
                    >
                        Transparent <span className="text-blue-500">Pricing</span>
                    </motion.h1>
                    <p className="text-slate-400 font-medium text-lg max-w-2xl mx-auto leading-relaxed">
                        No hidden fees, no surprise invoices. Choose the package that fits your business goals, and let's get to work.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={cn(
                                "relative flex flex-col p-8 rounded-[2.5rem] border transition-all duration-500",
                                plan.isPopular 
                                    ? "bg-slate-900 border-blue-500/50 shadow-2xl shadow-blue-500/10 z-10" 
                                    : "bg-slate-900/40 border-slate-800 hover:border-slate-700"
                            )}
                        >
                            {plan.isPopular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8 text-center">
                                <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">{plan.name}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed px-4">
                                    {plan.description}
                                </p>
                            </div>

                            <div className="mb-8 text-center">
                                <div className="flex items-baseline justify-center gap-1 text-white">
                                    {plan.price !== null ? (
                                        <>
                                            <span className="text-5xl font-black tracking-tighter italic">
                                                $<Counter from={0} to={plan.price} />
                                            </span>
                                            <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest ml-1">
                                                {plan.billing}
                                            </span>
                                        </>
                                    ) : (
                                        <span className="text-5xl font-black tracking-tighter italic">Custom</span>
                                    )}
                                </div>
                                
                                <div className="mt-2 min-h-[24px] flex justify-center items-center gap-2">
                                    {plan.recurringFee && (
                                        <>
                                            <span className="bg-slate-800 text-slate-300 text-[10px] font-bold px-2 py-0.5 rounded-md border border-slate-700">
                                                +${plan.recurringFee}/mo
                                            </span>
                                            <span className="text-slate-500 text-[10px] uppercase font-bold tracking-tight">
                                                Maintenance
                                            </span>
                                        </>
                                    )}
                                </div>
                            </div>

                            <button className={cn(
                                "w-full py-4 rounded-2xl font-bold transition-all active:scale-95 mb-10 shadow-lg",
                                plan.accent,
                                plan.name === "The Partnership" ? "text-slate-950" : "text-white"
                            )}>
                                {plan.cta}
                            </button>

                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-slate-200 mb-2">
                                    <svg className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-sm font-bold tracking-tight">
                                        {plan.pageCount}
                                    </span>
                                </li>

                                {comparisonFeatures.map((feature, j) => {
                                    const isIncluded = plan.included.includes(feature);
                                    return (
                                        <li key={j} className={cn(
                                            "flex items-start gap-3 transition-opacity duration-300",
                                            isIncluded ? "text-slate-200" : "text-slate-600 opacity-40"
                                        )}>
                                            {isIncluded ? (
                                                <svg className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            ) : (
                                                <svg className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            )}
                                            <span className="text-sm font-medium leading-tight">
                                                {feature}
                                            </span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Pricing;