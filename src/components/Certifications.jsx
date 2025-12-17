import React, { useState, useEffect, useRef } from 'react';
import { Server, Power, Activity, HardDrive } from 'lucide-react';
import certificationsData from '../data/certifications.json';

import badgeSwitching from "../assets/badges/CCNA.png";
import badgeIntro from "../assets/badges/Introredes.png";
import badgeCareer from "../assets/badges/carreraentecnico.png";
import badgeLearnathon from "../assets/badges/netgames.png";

const badgesMap = {
    "badgeSwitching": badgeSwitching,
    "badgeIntro": badgeIntro,
    "badgeCareer": badgeCareer,
    "badgeLearnathon": badgeLearnathon
};

export default function Certifications() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const serversData = certificationsData.map((server) => ({
        ...server,
        img: badgesMap[server.img]
    }));

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); 
                }
            },
            { threshold: 0.1 } 
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="certificaciones" className="mx-auto max-w-5xl px-4 py-24 scroll-mt-24 font-mono">
            
            <div ref={sectionRef} className="relative">
                
                {/* Header Rack (Animación suave de aparición) */}
                <div className={`flex flex-col md:flex-row md:items-center justify-between mb-8 border-b-2 border-neutral-800 pb-4 md:pb-2 gap-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                    <h2 className="text-2xl font-bold text-neutral-200 flex items-center gap-3">
                        <Server className="text-emerald-500" />
                        Certificados Rack 01
                    </h2>
                    <div className="flex gap-4 text-xs text-neutral-500 bg-neutral-900/50 p-2 rounded md:bg-transparent md:p-0">
                        <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div> SYSTEM OK</span>
                        <span className="text-neutral-700">|</span>
                        <span>TEMP: 24°C</span>
                    </div>
                </div>

                {/* Contenedor Rack */}
                <div className="bg-[#050505] border-x-2 md:border-x-4 border-y-2 md:border-y-4 border-neutral-800 rounded-lg p-1 md:p-2 shadow-2xl relative overflow-hidden">
                    
                    {/* Tornillos decorativos */}
                    <div className="hidden sm:flex absolute left-1 top-0 bottom-0 w-4 flex-col justify-between py-4 z-10">
                        {[...Array(8)].map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-neutral-700 mx-auto"></div>)}
                    </div>
                    <div className="hidden sm:flex absolute right-1 top-0 bottom-0 w-4 flex-col justify-between py-4 z-10">
                        {[...Array(8)].map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-neutral-700 mx-auto"></div>)}
                    </div>

                    {/* Lista de Servidores */}
                    <div className="space-y-2 md:space-y-3 px-1 sm:px-6 py-2 md:py-4">
                        {serversData.map((server, index) => (
                            <div 
                                key={server.name}
                                className={`transform transition-all duration-700 ease-out ${
                                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                                }`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <ServerUnit server={server} index={index} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Cables decorativos */}
                <div className="flex justify-center -mt-2 space-x-8 opacity-20">
                    <div className="w-1 h-12 bg-neutral-600"></div>
                    <div className="w-1 h-12 bg-neutral-600"></div>
                    <div className="w-1 h-12 bg-neutral-600"></div>
                </div>

            </div>
        </section>
    );
}

const ServerUnit = ({ server }) => {
    return (
        <a 
            href={server.url}
            target="_blank"
            rel="noreferrer"
            className="group relative block bg-[#111] border border-neutral-800 rounded transition-all duration-300 hover:bg-neutral-900 hover:border-neutral-600 hover:shadow-[0_0_15px_rgba(16,185,129,0.1)]"
        >
            <div className="flex items-center min-h-[5rem] px-2 md:px-4 gap-2 md:gap-8 py-2">
                
                {/* Panel LED */}
                <div className="flex flex-col gap-1.5 border-r border-neutral-800 pr-2 md:pr-6 flex-shrink-0">
                    <div className="flex gap-1">
                        {server.leds.map((color, i) => (
                            <div key={i} className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${color} ${i === 2 ? 'animate-pulse' : ''} shadow-[0_0_5px_currentColor]`}></div>
                        ))}
                    </div>
                    <div className="hidden sm:flex gap-2 text-neutral-600">
                        <HardDrive size={12} />
                        <Activity size={12} className="animate-pulse text-emerald-500/50" />
                    </div>
                </div>

                {/* Info */}
                <div className="flex-1 flex flex-col justify-center min-w-0">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-[9px] md:text-[10px] text-neutral-500 font-bold tracking-widest uppercase">
                            {server.name}
                        </span>
                        <span className={`text-[8px] md:text-[10px] px-1 rounded border ${
                            server.status === 'ONLINE' ? 'text-emerald-500 bg-emerald-950/30 border-emerald-900/50' :
                            server.status === 'ACTIVE' ? 'text-blue-400 bg-blue-950/30 border-blue-900/50' :
                            'text-neutral-400 bg-neutral-800 border-neutral-700'
                        }`}>
                            {server.status}
                        </span>
                    </div>
                    <h3 className="text-white font-bold text-xs md:text-lg group-hover:text-emerald-400 transition-colors line-clamp-2 leading-tight">
                        {server.title}
                    </h3>
                </div>

                {/* Imagen */}
                <div className="relative w-10 h-10 md:w-16 md:h-16 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <img 
                        src={server.img} 
                        alt={server.title} 
                        className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500" 
                    />
                </div>

                {/* Botón Power */}
                <div className="hidden md:flex border-l border-neutral-800 pl-6 items-center justify-center">
                    <div className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-600 group-hover:text-emerald-500 group-hover:border-emerald-500 transition-colors shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">
                        <Power size={14} />
                    </div>
                </div>
            </div>
        </a>
    );
};