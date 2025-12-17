import React, { useState, useEffect, useRef } from 'react';
import { Terminal } from 'lucide-react';


import { Typewriter, Cursor } from './Typewriter';

export default function About() {
    const sectionRef = useRef(null);
    const [startAnimation, setStartAnimation] = useState(false);
    const [stage, setStage] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartAnimation(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const nextStage = () => setStage(prev => prev + 1);

    return (
        <section id="sobre" className="mx-auto max-w-4xl px-4 py-24 scroll-mt-24 font-mono text-sm md:text-base">
            <div ref={sectionRef} className="reveal w-full rounded-xl overflow-hidden bg-[#0a0a0a] border border-neutral-800 shadow-2xl">
                
                {/* BARRA DE TÍTULO */}
                <div className="bg-neutral-900/90 px-4 py-2 border-b border-neutral-800 flex items-center justify-between">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="text-xs text-neutral-500 flex items-center gap-2">
                        <Terminal size={12} /> root@portfolio: ~
                    </div>
                    <div className="w-10"></div>
                </div>

                {/* CONTENIDO */}
                <div className="p-6 md:p-10 min-h-[280px] flex flex-col justify-center">
                    
                    {/* COMANDO WHOAMI */}
                    <div className="flex flex-wrap items-center gap-2 text-lg mb-6">
                        <span className="text-emerald-400">➜</span>
                        <span className="text-blue-400">~</span>
                        <div className="text-white flex">
                            <Typewriter text="whoami" start={startAnimation} speed={80} onComplete={nextStage} />
                            {startAnimation && stage === 0 && <Cursor />}
                        </div>
                    </div>

                    {/* BIOGRAFÍA SECUENCIAL */}
                    {stage >= 1 && (
                        <div className="pl-4 border-l-2 border-neutral-800 ml-1 py-2 text-neutral-300 leading-relaxed text-lg max-w-3xl">
                            <span className="inline-block">
                                <Typewriter text="Apasionado por la tecnología. Me gusta crear proyectos que combinen " start={true} speed={30} onComplete={nextStage} />
                                {stage === 1 && <Cursor />}
                            </span>

                            {stage >= 2 && (
                                <span className="text-white font-semibold inline-block">
                                    <Typewriter text="diseño, funcionalidad y propósito. " start={true} speed={30} onComplete={nextStage} />
                                    {stage === 2 && <Cursor />}
                                </span>
                            )}

                            {stage >= 3 && (
                                <span className="inline-block">
                                    <Typewriter text="Actualmente estoy enfocado en crecer como desarrollador y fortalecer mis habilidades en " start={true} speed={30} onComplete={nextStage} />
                                    {stage === 3 && <Cursor />}
                                </span>
                            )}

                            {stage >= 4 && (
                                <span className="text-emerald-400 font-semibold inline-block">
                                    <Typewriter text="redes y seguridad informática." start={true} speed={30} onComplete={nextStage} />
                                    {stage === 4 && <Cursor />}
                                </span>
                            )}
                            
                            {stage >= 5 && (
                                <div className="mt-6 flex items-center gap-2 text-base">
                                    <span className="text-emerald-400">➜</span>
                                    <span className="text-blue-400">~</span>
                                    <Cursor />
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}