import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Code2, Server, ShieldCheck } from 'lucide-react';

// Importamos tus datos reales (subiendo 2 niveles)
import skillsData from '../data/skills.json';

export default function Skills() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [titleFinished, setTitleFinished] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    // Mapeamos las llaves de tu JSON a la vista visual
    const categories = [
        {
            key: 'advanced',
            title: 'Frontend / Advanced',
            icon: <Code2 size={18} />,
            color: 'text-cyan-400',
            items: skillsData.advanced // HTML, CSS
        },
        {
            key: 'intermediate',
            title: 'Backend / Core',
            icon: <Server size={18} />,
            color: 'text-purple-400',
            items: skillsData.intermediate // Kotlin, Java, C, C++
        },
        {
            key: 'inProgress',
            title: 'Sec & Ops / Learning',
            icon: <ShieldCheck size={18} />,
            color: 'text-emerald-400',
            items: skillsData.inProgress // Redes (CCNA), Pentester
        }
    ];

    return (
        <section id="skills" className="mx-auto max-w-6xl px-4 py-24 scroll-mt-24 font-mono">
            
            <div 
                ref={sectionRef}
                className={`w-full rounded-xl overflow-hidden bg-[#0a0a0a] border border-neutral-800 shadow-2xl transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
                {/* Header Terminal */}
                <div className="bg-neutral-900/90 px-4 py-2 border-b border-neutral-800 flex items-center justify-between">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="text-xs text-neutral-500 flex items-center gap-2">
                        <Terminal size={12} /> root@portfolio: ~/skills-json
                    </div>
                    <div className="w-10"></div>
                </div>

                {/* Contenido */}
                <div className="p-6 md:p-10 min-h-[400px]">
                    <div className="mb-8 flex items-center gap-3 text-xl md:text-2xl border-b border-neutral-800 pb-4">
                        <span className="text-emerald-500">➜</span>
                        <div className="flex text-white font-bold">
                            <Typewriter text="cat skills.json | grep --color=always" start={isVisible} speed={40} onComplete={() => setTitleFinished(true)} />
                            {isVisible && !titleFinished && <Cursor />}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {categories.map((cat, index) => (
                            <div key={index} className={`transition-all duration-700 ease-out ${titleFinished ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 200}ms` }}>
                                <h3 className={`text-sm mb-4 flex items-center gap-2 font-bold ${cat.color}`}>
                                    {cat.icon} {cat.title}
                                </h3>
                                <div className="space-y-3">
                                    {cat.items.map((skill, i) => (
                                        <div key={i} className="group flex items-center justify-between p-3 rounded bg-neutral-900/40 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700 transition-all duration-300 hover:-translate-x-1">
                                            <span className="text-neutral-300 text-sm group-hover:text-white font-medium">{skill}</span>
                                            <span className="text-[10px] font-mono text-neutral-600 border border-neutral-800 px-1.5 py-0.5 rounded bg-neutral-950">{cat.key.toUpperCase().slice(0, 3)}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// Componentes Auxiliares
const Typewriter = ({ text, start, speed = 50, onComplete }) => {
    const [displayedText, setDisplayedText] = useState("");
    const onCompleteRef = useRef(onComplete);
    useEffect(() => { onCompleteRef.current = onComplete; }, [onComplete]);

    useEffect(() => {
        if (!start) return;
        let i = 0;
        let timer;
        const type = () => {
            if (i < text.length) {
                setDisplayedText(text.slice(0, i + 1));
                i++;
                timer = setTimeout(type, speed);
            } else {
                if (onCompleteRef.current) onCompleteRef.current();
            }
        };
        type();
        return () => clearTimeout(timer);
    }, [start, text, speed]);

    return <span>{displayedText}</span>;
};

const Cursor = () => <span className="inline-block w-2.5 h-6 bg-emerald-500 ml-1 align-middle animate-pulse"></span>;