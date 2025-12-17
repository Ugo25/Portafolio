import React from 'react';
import { 
  Mail, 
  Github, 
  Gitlab, 
  Linkedin, 
  ArrowRight, 
  Terminal,
  Signal
} from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="mx-auto max-w-5xl px-4 py-24 scroll-mt-24 font-mono">
      
      {/* HEADER TIPO CONSOLA (Animación: 0ms) */}
      <div className="reveal flex items-center gap-2 text-emerald-500 mb-12 border-b border-neutral-800 pb-4" style={{ transitionDelay: "0ms" }}>
        <Terminal size={18} />
        <span className="text-sm tracking-wide">root@portfolio:~/open-channels#</span>
        <span className="animate-pulse">_</span>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* COLUMNA IZQUIERDA: MENSAJE */}
        <div className="space-y-6">
          {/* Título (Animación: 100ms) */}
          <h2 className="reveal text-3xl md:text-4xl font-bold text-white" style={{ transitionDelay: "100ms" }}>
            Contact <span className="text-emerald-500">Me</span>
          </h2>
          
          {/* Descripción (Animación: 200ms) */}
          <p className="reveal text-neutral-400 leading-relaxed text-sm md:text-base" style={{ transitionDelay: "200ms" }}>
            Actualmente estoy disponible para colaboraciones en desarrollo y seguridad.
            Si quieres hablar de código, vulnerabilidades o proyectos, establece conexión.
          </p>

          {/* Indicador de Estado (Animación: 300ms) */}
          <div className="reveal inline-flex items-center gap-3 px-4 py-2 bg-neutral-900/50 rounded border border-neutral-800 text-xs text-neutral-500" style={{ transitionDelay: "300ms" }}>
            <Signal size={14} className="text-emerald-500" />
            <span>Signal Strength: <span className="text-white">STRONG</span></span>
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse ml-2"></span>
          </div>
        </div>

        {/* COLUMNA DERECHA: ENLACES (Animación: 400ms) */}
        <div className="reveal flex flex-col gap-3" style={{ transitionDelay: "400ms" }}>
          <ContactLink 
            href="mailto:hugoacosta7911@gmail.com"
            icon={<Mail size={18} />}
            label="Email"
            sub="hugoacosta7911@gmail.com"
          />
          <ContactLink 
            href="https://github.com/Ugo25"
            icon={<Github size={18} />}
            label="GitHub Repos"
            sub="Explore Source Code"
          />
          <ContactLink 
            href="https://gitlab.com/Ugo25"
            icon={<Gitlab size={18} />}
            label="GitLab Profile"
            sub="CI/CD & Projects"
          />
          <ContactLink 
            href="https://www.linkedin.com/in/hugo-acosta-a9b5aa395"
            icon={<Linkedin size={18} />}
            label="LinkedIn Network"
            sub="Connect Professionally"
          />
        </div>

      </div>
    </section>
  );
}

// Componente de Enlace (Tarjeta Interactiva)
const ContactLink = ({ href, icon, label, sub }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer" 
    className="group flex items-center justify-between p-4 bg-[#0a0a0a] border border-neutral-800 rounded hover:border-emerald-500/40 hover:bg-neutral-900 transition-all duration-300"
  >
    <div className="flex items-center gap-4">
      {/* Icono con fondo */}
      <div className="p-2.5 bg-black border border-neutral-800 rounded text-neutral-400 group-hover:text-emerald-500 group-hover:border-emerald-500/20 transition-colors">
        {icon}
      </div>
      
      {/* Textos */}
      <div>
        <h3 className="text-white font-bold text-sm group-hover:text-emerald-400 transition-colors">
          {label}
        </h3>
        <p className="text-neutral-500 text-xs mt-0.5 font-mono">
          {sub}
        </p>
      </div>
    </div>

    {/* Flecha animada */}
    <ArrowRight 
      size={16} 
      className="text-neutral-700 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" 
    />
  </a>
);