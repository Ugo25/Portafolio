import React from 'react';
import { Terminal, ShieldCheck, Target, Network, Code, Unlock } from 'lucide-react';
import projectsData from '../data/projects.json';

export default function Projects() {
  return (
    <section id="proyectos" className="mx-auto max-w-7xl px-4 py-24 scroll-mt-24 font-mono text-sm">
      
      {/* HEADER (Se adapta solo con flex-col) */}
      <div className="reveal border-b border-neutral-800 pb-4 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4" style={{ transitionDelay: "0ms" }}>
        <div>
          <div className="flex items-center gap-2 text-emerald-500 mb-2">
            <Terminal size={18} />
            <span className="font-bold tracking-widest text-xs">ROOT@PORTFOLIO:~# ./scan_network.sh</span>
          </div>
          <h2 className="text-3xl font-bold text-white uppercase tracking-tighter">
            <span className="text-emerald-500">TARGET</span>_SYSTEMS
          </h2>
        </div>
        
        {/* Stats ocultos en móviles muy pequeños para limpiar visualmente */}
        <div className="hidden sm:flex gap-4 text-[10px] text-neutral-500 font-mono">
           {/* ... tus stats ... */}
        </div>
      </div>

      {/* GRID: 1 columna en móvil, 2 en tablet, 3 en PC */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <div 
             key={index} 
             className="reveal h-full" 
             style={{ transitionDelay: `${index * 150}ms` }} 
          >
             <SecOpsCard project={project} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
}

const SecOpsCard = ({ project, index }) => {
  const tags = project.tags.split('•').map(t => t.trim());
  const fakeIp = `10.10.11.${20 + index}`;

  return (
    <div className="group relative bg-[#0a0a0a] border border-neutral-800 
      /* INTERACCIÓN MÓVIL: */
      active:scale-[0.98] active:border-emerald-500/50 
      /* INTERACCIÓN PC: */
      hover:border-emerald-500/40 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] 
      transition-all duration-300 flex flex-col overflow-hidden rounded-lg h-full">
      
      {/* Scanline: En móvil la hacemos un poco visible siempre (opacity-20) para que se note el efecto */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-emerald-500 shadow-[0_0_10px_#10b981] 
        opacity-20 md:opacity-0 group-hover:opacity-100 
        animate-[scan_2.5s_linear_infinite] z-20 pointer-events-none">
      </div>

      {/* Cabecera */}
      <div className="bg-neutral-900/50 border-b border-neutral-800 p-3 flex justify-between items-center text-[10px] text-neutral-500 group-hover:text-emerald-400 transition-colors">
        <div className="flex items-center gap-2">
          <Target size={14} />
          <span>ID: 0x{index + 1}</span>
        </div>
        <div className="flex items-center gap-2 font-mono">
          <Network size={14} />
          <span>{fakeIp}</span>
        </div>
      </div>

      {/* Imagen */}
      <div className="relative h-44 overflow-hidden border-b border-neutral-800 group">
        <div className="absolute inset-0 bg-emerald-900/10 mix-blend-overlay z-10 pointer-events-none"></div>
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover 
            /* En móvil (por defecto) se ve a color un poco oscuro (brightness-90) */
            /* En PC (hover) se quita el filtro */
            filter brightness-90 md:grayscale md:brightness-90 
            group-hover:grayscale-0 group-hover:brightness-100 
            transition-all duration-500"
        />
        <div className="absolute top-2 right-2 bg-neutral-950/80 border border-red-500/50 text-red-400 text-[9px] font-bold px-2 py-0.5 backdrop-blur-md">
           VULNERABLE
        </div>
      </div>

      {/* Cuerpo */}
      <div className="p-5 flex flex-col flex-1 bg-[#0a0a0a]">
        <h3 className="text-lg font-bold text-neutral-200 mb-2 group-hover:text-emerald-400 flex items-center gap-2 transition-colors">
          <Unlock size={16} className="text-neutral-600 group-hover:text-emerald-500 transition-colors" />
          {project.title}
        </h3>
        
        {/* Descripción oculta en móbiles muy pequeños si es muy larga, o truncada */}
        <div className="text-xs text-neutral-500 font-mono mb-5 pl-2 border-l-2 border-neutral-800 ml-1">
          <span className="text-emerald-600">➜</span> status: <span className="text-white">exploited</span>
          <br/>
          <p className="mt-1 line-clamp-2">{project.desc}</p>
        </div>

        <div className="mt-auto mb-5">
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag, i) => (
              <span key={i} className="text-[10px] px-2 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-400">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Botones: Más grandes en móvil para el dedo */}
        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-neutral-800">
          <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-3 md:py-2 bg-emerald-500/10 active:bg-emerald-500/30 border border-emerald-500/20 text-emerald-500 text-xs font-bold rounded transition-all">
            <ShieldCheck size={14} /> EXPLOIT
          </a>
          <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-3 md:py-2 bg-transparent active:bg-neutral-800 border border-neutral-700 text-neutral-400 text-xs font-bold rounded transition-all">
            <Code size={14} /> SOURCE
          </a>
        </div>
      </div>
    </div>
  );
};