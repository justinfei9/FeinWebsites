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
            accent: "bg-white/5 hover:bg-white/10",
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
            accent: "bg-white/5 text-white hover:bg-white/10",
            cta: "Get Started"
        }
    ];

    return (
        <div className="min-h-screen bg-[#030711] text-white font-sans relative pt-32 pb-[260px] px-6 ">
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

            <div className="max-w-7xl mx-auto relative z-10">

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
                    <p className="text-blue-100/50 font-medium text-lg max-w-2xl mx-auto leading-relaxed">
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

            {/* ── MOUNTAIN RANGE + FOOTER CURVE ── */}
            <div className="absolute bottom-0 left-0 w-full pointer-events-none z-10">
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
        </div>
    );
};

export default Pricing;