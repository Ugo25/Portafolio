import React from 'react';
import { 
  Terminal, 
  ArrowRight, 
  Download, 
  Github, 
  Gitlab, 
  Linkedin,
  Shield,
  Network
} from 'lucide-react';
import fotoPerfil from "../assets/foto-perfil.jpg";
import { Typewriter, Cursor } from "./Typewriter"; 

export default function Hero() {
  return (
    <section id="inicio" className="min-h-[95vh] flex items-center justify-center relative overflow-hidden text-white scroll-mt-24">
        
        {/* --- 1. FONDO EXCLUSIVO DEL HERO --- */}
        {/* Grid Táctico */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#202020_1px,transparent_1px),linear-gradient(to_bottom,#202020_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 pointer-events-none"></div>
        
        {/* Luz Ambiental (Spotlight Verde) */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-20 left-[-100px] w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none"></div>

        {/* --- 2. EL DEGRADADO MÁGICO (FADE TO BLACK) --- */}
        {/* Este div crea la transición suave hacia el contenido de abajo */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#050505] pointer-events-none z-0"></div>


        {/* --- CONTENIDO --- */}
        <div className="max-w-6xl w-full mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10 py-20">
            
            {/* COLUMNA IZQUIERDA */}
            <div className="space-y-8">
                {/* Badge */}
                <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-800 bg-[#050505]/80 text-xs font-mono text-emerald-400 backdrop-blur-sm" style={{ transitionDelay: "0ms" }}>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    System Online • Open to Work
                </div>

                {/* Título */}
                <div className="reveal min-h-[80px]" style={{ transitionDelay: "100ms" }}>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight text-neutral-100 font-mono">
                        <Typewriter text="Hugo Acosta" start={true} speed={150} />
                        <Cursor />
                    </h1>
                    <h2 className="text-xl md:text-2xl mt-4 text-neutral-400 font-normal">
                        Full Stack Developer <span className="text-neutral-600 px-2">/</span> 
                        <span className="text-emerald-500 font-mono">Future Red Team</span>
                    </h2>
                </div>

                {/* Descripción */}
                <p className="reveal text-neutral-400 text-lg leading-relaxed max-w-lg" style={{ transitionDelay: "200ms" }}>
                    Construyo software eficiente mientras aprendo a romperlo. 
                    Especializado en <strong className="text-white font-medium">Desarrollo Web & Móvil</strong>, 
                    con un enfoque profundo en redes (CCNA) y ciberseguridad ofensiva.
                </p>

                {/* Botones */}
                <div className="reveal flex flex-wrap gap-4 pt-2" style={{ transitionDelay: "300ms" }}>
                    <a href="#proyectos" className="group flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-neutral-200 transition-all">
                        Ver Proyectos 
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                    </a>
                    <a href="/cv.pdf" className="flex items-center gap-2 px-6 py-3 rounded-lg border border-neutral-800 hover:border-emerald-500/50 hover:bg-neutral-900 transition-all text-neutral-300">
                        <Download size={18} /> Descargar CV
                    </a>
                </div>

                {/* Redes */}
                <div className="reveal flex gap-6 pt-4 border-t border-neutral-800/50" style={{ transitionDelay: "400ms" }}>
                    <SocialLink href="https://github.com/Ugo25"><Github size={20}/></SocialLink>
                    <SocialLink href="https://gitlab.com/Ugo25"><Gitlab size={20}/></SocialLink>
                    <SocialLink href="https://www.linkedin.com/in/hugo-acosta-a9b5aa395"><Linkedin size={20}/></SocialLink>
                </div>
            </div>

            {/* COLUMNA DERECHA */}
            <div className="flex flex-col items-center justify-center relative">
                <div className="relative w-64 h-64 md:w-80 md:h-80 group animate-fade-up delay-150">
                     <div className="absolute inset-[-10px] border border-dashed border-neutral-800 rounded-full animate-[spin_20s_linear_infinite]"></div>
                     <img 
                        src={fotoPerfil} 
                        alt="Hugo Acosta" 
                        className="w-full h-full object-cover rounded-full border-4 border-[#0a0a0a] shadow-2xl relative z-10 transition-all duration-500 protected" 
                        draggable="false"
                        onContextMenu={(e) => e.preventDefault()}
                     />
                     <div className="absolute bottom-2 right-4 bg-neutral-900 border border-neutral-700 p-2 rounded-full z-20 shadow-lg">
                        <Terminal size={20} className="text-emerald-500" />
                     </div>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-3 w-full max-w-sm animate-fade-up delay-300">
                    <SkillBadge icon={<Terminal size={14}/>} label="Java / Kotlin" />
                    <SkillBadge icon={<Shield size={14}/>} label="Cybersecurity" />
                    <SkillBadge icon={<Network size={14}/>} label="CCNA / Networks" />
                    <SkillBadge icon={<ArrowRight size={14}/>} label="HTML / CSS" />
                </div>
            </div>
        </div>
    </section>
  );
}

// Helpers
const SocialLink = ({ href, children }) => (
    <a href={href} target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-emerald-400 transition-colors">
        {children}
    </a>
);

const SkillBadge = ({ icon, label }) => (
    <div className="flex items-center gap-3 px-4 py-2 bg-neutral-900/50 border border-neutral-800 rounded-lg text-sm text-neutral-300 hover:border-emerald-500/30 transition-colors backdrop-blur-sm">
        <span className="text-emerald-500">{icon}</span>
        {label}
    </div>
);