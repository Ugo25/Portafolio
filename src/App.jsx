import { useEffect, useState } from "react";
import fotoPerfil from "./assets/foto-perfil.jpg";
import badgeSwitching from "./assets/badges/CCNA.png";
import badgeIntro from "./assets/badges/Introredes.png";
import badgeCareer from "./assets/badges/carreraentecnico.png";
import badgeLearnathon from "./assets/badges/netgames.png";


export default function App() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(v => !v);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const links = [
    { label: "Inicio", href: "#inicio" },
    { label: "Sobre mí", href: "#sobre" },
    { label: "Skills", href: "#skills" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Contacto", href: "#contacto" },
  ];

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-neutral-800/60 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2">
            <ShieldIcon className="w-5 h-5 text-emerald-400" />
            <span className="font-semibold">Hugo Acosta</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-2">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 rounded-lg text-sm hover:bg-neutral-800 transition"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Hamburger (mobile) */}
          <button
            onClick={toggle}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-neutral-800 transition"
            aria-label="Abrir menú"
            aria-expanded={open}
          >
            {open ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile drawer */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${open ? "max-h-96" : "max-h-0"
            }`}
        >
          <nav className="px-4 pb-4 pt-1 space-y-1 bg-neutral-950/95">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-lg hover:bg-neutral-800"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="relative flex items-center justify-center min-h-[90vh] scroll-mt-24"
      >
        <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_10%_10%,rgba(16,185,129,0.12),transparent),radial-gradient(500px_200px_at_90%_0%,rgba(16,185,129,0.08),transparent)]" />

        <div className="relative mx-auto max-w-6xl px-4 py-10 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          {/* Texto */}
          <div className="space-y-5">
            <h1
              className="reveal text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight"
              style={{ transitionDelay: "0ms" }}
            >
              Desarrollador Web & Móvil • Estudiante TI
              <span className="block mt-2">
                <span className="text-emerald-400">Rumbo a CCNA → </span>
                <span className="text-red-500">Red Team</span>
              </span>
            </h1>

            <p
              className="reveal mt-0 text-neutral-300 max-w-prose text-base md:text-lg"
              style={{ transitionDelay: "120ms" }}
            >
              Construyo interfaces claras y herramientas útiles. Me especializo en
              <b> HTML/CSS</b> y <b>Android (Kotlin)</b>, con base en <b>C</b>, <b>C++</b> y <b>Java</b>.
              Profundizando en redes Cisco y ciberseguridad ofensiva.
            </p>

            <div
              className="reveal mt-0 flex flex-col sm:flex-row gap-3"
              style={{ transitionDelay: "240ms" }}
            >
              <a
                href="#proyectos"
                className="inline-flex justify-center rounded-xl border border-emerald-500/60 text-emerald-300 hover:bg-emerald-500/10 px-4 py-2"
              >
                Ver proyectos
              </a>
              <a
                href="#contacto"
                className="inline-flex justify-center rounded-xl border border-neutral-700 hover:bg-neutral-800 px-4 py-2"
              >
                Contacto
              </a>
            </div>

            <div
              className="reveal mt-0 flex gap-4 text-neutral-300"
              style={{ transitionDelay: "360ms" }}
            >
              <IconLink href="https://github.com/Ugo25" label="GitHub">
                <GitHubIcon className="w-6 h-6" />
              </IconLink>
              <IconLink href="mailto:hugoacosta7911@gmail.com" label="Email">
                <MailIcon className="w-6 h-6" />
              </IconLink>
              <IconLink href="https://www.instagram.com/Ugowaos" label="Instagram">
                <InstagramIcon className="w-6 h-6" />
              </IconLink>
            </div>
          </div>


          {/* Imagen + Skills */}
          <div className="md:order-none order-last flex flex-col items-center justify-center gap-6 text-center">
            {/* Imagen con animación */}
            <div className="relative animate-fade-up delay-150">
              <div className="absolute -inset-1 bg-emerald-500/20 blur-2xl rounded-full" />
              <img
                src={fotoPerfil}
                alt="Hugo Acosta"
                className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 rounded-full object-cover border-4 border-neutral-800 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/30 transition duration-500"
              />
            </div>

            {/* Skills rápidas con animación */}
            <div className="relative w-full max-w-[540px] animate-fade-up delay-300">
              <div className="absolute -inset-1 bg-emerald-500/20 blur-2xl rounded-3xl" />
              <div className="relative bg-neutral-900 border border-neutral-800 rounded-3xl p-5 sm:p-6 shadow-xl">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {["HTML/CSS", "Android (Kotlin)", "Java", "C", "C++", "Cisco / CCNA"].map(b => (
                    <Badge key={b} label={b} />
                  ))}
                </div>
                <div className="mt-5 text-xs sm:text-sm text-neutral-400">
                  * VLANs, DHCP, Routing, Subnetting, Wireshark y pentesting básico.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* SOBRE MI */}
      <section id="sobre" className="mx-auto max-w-6xl px-4 py-12 md:py-16 scroll-mt-24">
        <h2
          className="reveal text-xl md:text-2xl font-bold"
          style={{ transitionDelay: "0ms" }}
        >
          Sobre mí
        </h2>

        <p
          className="reveal mt-3 md:mt-4 text-neutral-300 max-w-3xl text-base md:text-lg"
          style={{ transitionDelay: "120ms" }}
        >
          Apasionado por la tecnología y el aprendizaje continuo.
          Me gusta crear proyectos que combinen diseño, funcionalidad y propósito.
          Estoy enfocado en crecer como desarrollador y fortalecer mis habilidades en redes y seguridad informática.
        </p>

        {/* Opcional: 3 highlights rápidos con stagger */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            ["Dev Web & Móvil", "HTML/CSS, React, Android (Kotlin)"],
            ["Base sólida", "C, C++, Java"],
            ["Enfocado a redes", "Rumbo a CCNA y Red Team"],
          ].map(([title, desc], i) => (
            <div
              key={title}
              className="reveal rounded-2xl border border-neutral-800 bg-neutral-900/60 p-4"
              style={{ transitionDelay: `${200 + i * 120}ms` }}
            >
              <div className="text-sm font-semibold">{title}</div>
              <div className="text-xs text-neutral-400 mt-1">{desc}</div>
            </div>
          ))}
        </div>
      </section>


      {/* SKILLS */}
      <section id="skills" className="mx-auto max-w-6xl px-4 py-12 md:py-16 scroll-mt-24">
        <h2 className="reveal text-xl md:text-2xl font-bold" style={{ transitionDelay: "0ms" }}>
          Skills
        </h2>
        <div
          className="reveal mt-3 text-neutral-300 text-base md:text-lg"
          style={{ transitionDelay: "120ms" }}
        >
          Tecnologías y lenguajes con los que trabajo actualmente:
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            ["HTML", "Avanzado"],
            ["CSS", "Avanzado"],
            ["Kotlin (Android)", "Intermedio"],
            ["Java", "Intermedio"],
            ["C", "Intermedio"],
            ["C++", "Intermedio"],
            ["Redes (CCNA)", "En curso"],
            ["Wireshark", "En curso"],
          ].map(([name, level], i) => (
            <div
              key={name}
              className="reveal rounded-2xl border border-neutral-800 p-4 bg-neutral-900/60"
              style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="text-xs md:text-sm text-neutral-400">{level}</div>
              <div className="text-lg font-semibold">{name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="mx-auto max-w-6xl px-4 py-12 md:py-16 scroll-mt-24">
        <h2 className="text-xl md:text-2xl font-bold">Proyectos</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {[
            {
              title: "Files-to-PDF",
              tags: "Java Swing • PDFBox • Desktop",
              desc: "App de escritorio para convertir, unir, dividir y marcar PDFs con vista previa.",
              link: "https://github.com/Ugo25/Files-to-PDF",
            },
            {
              title: "AppMovil043",
              tags: "Android • Kotlin • UI",
              desc: "Utilidades móviles: IMC, conversores y cotizaciones.",
              link: "https://gitlab.com/desarrollo-de-aplicaciones-moviles1/mi-aplicacion-movil",
            },
            {
              title: "Proyecto Web / Cenaduria Chayito",
              tags: "HTML • CSS",
              desc: "Landing con fondo animado y estructura modular.",
              link: "https://github.com/Ugo25/CenaduriaChayito",
            },
          ].map((p, i) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="reveal group rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 hover:border-emerald-600 transition shadow-sm block"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="flex items-center gap-2 text-neutral-300 text-sm">
                <GlobeIcon className="w-4 h-4" />
                <span>{p.tags}</span>
              </div>
              <h3 className="mt-2 text-lg md:text-xl font-semibold group-hover:text-emerald-300">
                {p.title}
              </h3>
              <p className="mt-2 text-neutral-400 text-sm">{p.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* CERTIFICACIONES */}
      <section
        id="certificaciones"
        className="mx-auto max-w-6xl px-4 py-12 md:py-16 scroll-mt-24"
      >
        <h2 className="text-xl md:text-2xl font-bold text-center md:text-left">
          Certificaciones Cisco
        </h2>
        <p className="mt-3 text-neutral-300 text-sm md:text-base text-center md:text-left">
          Acreditaciones obtenidas a través de Cisco Networking Academy
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
          {[
            {
              title: "CCNA: Switching, Routing, and Wireless Essentials",
              img: badgeSwitching,
              url: "https://www.credly.com/badges/07a42402-760d-4310-b4ea-39a0354d6169/public_url",
              issuer: "Cisco",
              date: "Abr 1, 2025",
            },
            {
              title: "CCNA: Introduction to Networks",
              img: badgeIntro,
              url: "https://www.credly.com/badges/856b0349-bbff-4697-83e9-a33d35cebf56/public_url",
              issuer: "Cisco",
              date: "Dic 7, 2024",
            },
            {
              title: "Network Technician Career Path",
              img: badgeCareer,
              url: "https://www.credly.com/badges/62802231-51ee-4ffc-8d02-e8432af3ccb9/public_url",
              issuer: "Cisco",
              date: "Abr 21, 2025",
            },
            {
              title: "Networking Academy Learn-A-Thon 2025",
              img: badgeLearnathon,
              url: "https://www.credly.com/badges/5d386eca-b7d5-488d-b5d3-a76bc1bbc02d/public_url",
              issuer: "Cisco",
              date: "Jun 27, 2025",
            },
          ].map((b, i) => (
            <a
              key={b.title}
              href={b.url}
              target="_blank"
              rel="noreferrer"
              className="reveal group rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 hover:border-emerald-600 transition shadow-sm w-full max-w-[230px]"
              style={{ transitionDelay: `${i * 10}ms` }}
            >
              <img
                src={b.img}
                alt={b.title}
                className="w-28 h-28 mx-auto object-contain drop-shadow-md group-hover:scale-[1.05] transition"
              />
              <div className="mt-3 text-center">
                <div className="text-sm font-semibold text-neutral-100 line-clamp-2">
                  {b.title}
                </div>
                <div className="text-xs text-neutral-400 mt-1">{b.issuer}</div>
                <div className="text-xs text-neutral-500">{b.date}</div>
              </div>
            </a>
          ))}
        </div>
      </section>


      {/* CONTACTO */}
      <section id="contacto" className="mx-auto max-w-6xl px-4 py-12 md:py-16 scroll-mt-24">
        <h2 className="reveal text-xl md:text-2xl font-bold">Contacto</h2>
        <p className="reveal mt-3 text-neutral-300">
          Contáctame en mis redes Sociales
        </p>

        <div className="reveal mt-6 flex flex-col sm:flex-row gap-3 text-neutral-300">
          <a href="mailto:hugoacosta7911@gmail.com" className="px-4 py-2 rounded-xl border border-neutral-700 hover:bg-neutral-800 flex items-center gap-2 justify-center">
            <MailIcon className="w-4 h-4" /> Email
          </a>
          <a href="https://github.com/Ugo25" className="px-4 py-2 rounded-xl border border-neutral-700 hover:bg-neutral-800 flex items-center gap-2 justify-center">
            <GitHubIcon className="w-4 h-4" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/tu-perfil" className="px-4 py-2 rounded-xl border border-neutral-700 hover:bg-neutral-800 flex items-center gap-2 justify-center">
            <LinkedInIcon className="w-4 h-4" /> LinkedIn
          </a>
        </div>
      </section>

      <footer className="border-t border-neutral-800 py-8 text-center text-neutral-500 text-xs md:text-sm">
        © {new Date().getFullYear()} Hugo Acosta · Build • Secure • Repeat
      </footer>
    </div>
  );
}

/* --- Helpers --- */
function Badge({ label }) {
  return (
    <div className="flex items-center gap-2 rounded-xl bg-neutral-800/60 border border-neutral-700 px-3 py-2 text-sm">
      <CodeIcon className="w-4 h-4 text-neutral-300" />
      <span>{label}</span>
    </div>
  );
}

function IconLink({ href, label, children }) {
  return (
    <a href={href} aria-label={label} className="hover:text-white" target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}


function ShieldIcon(props) { return (<svg viewBox="0 0 24 24" fill="none" {...props}><path d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z" className="fill-emerald-500/20 stroke-emerald-400" strokeWidth="1.2" /></svg>) }
function MenuIcon(props) { return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}><path strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" /></svg>) }
function CloseIcon(props) { return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}><path strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M18 6L6 18" /></svg>) }
function GitHubIcon(props) { return (<svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 .5A11.5 11.5 0 0 0 .5 12.3c0 5.23 3.4 9.66 8.12 11.23.6.11.82-.26.82-.58v-2.02c-3.3.73-4-1.43-4-1.43-.55-1.43-1.35-1.8-1.35-1.8-1.1-.78.08-.76.08-.76 1.22.09 1.86 1.27 1.86 1.27 1.08 1.88 2.84 1.33 3.53 1.01.11-.8.42-1.34.76-1.65-2.63-.3-5.4-1.36-5.4-6.06 0-1.34.47-2.44 1.25-3.3-.13-.31-.54-1.56.12-3.26 0 0 1.01-.33 3.3 1.26a11.36 11.36 0 0 1 6 0c2.28-1.59 3.29-1.26 3.29-1.26.66 1.7.25 2.95.13 3.26.78.86 1.25 1.96 1.25 3.3 0 4.71-2.77 5.75-5.42 6.05.43.38.81 1.12.81 2.26v3.35c0 .32.21.7.82.58A11.5 11.5 0 0 0 23.5 12.3 11.5 11.5 0 0 0 12 .5Z" /></svg>) }
function MailIcon(props) { return (<svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M20 4H4a2 2 0 0 0-2 2v.4l10 6.25L22 6.4V6a2 2 0 0 0-2-2Zm2 4.1-9.38 5.86a1 1 0 0 1-1.24 0L2 8.1V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z" /></svg>) }
function InstagramIcon(props) { return (<svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5-2.2a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6Z" /></svg>); }
function LinkedInIcon(props) { return (<svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5 2.5 2.5 0 0 1 4.98 3.5ZM.5 8.5h4.95V24H.5V8.5Zm7.5 0h4.74v2.1h.07c.66-1.25 2.28-2.57 4.7-2.57 5.02 0 5.94 3.3 5.94 7.6V24h-4.95v-6.9c0-1.65-.03-3.78-2.3-3.78-2.3 0-2.65 1.79-2.65 3.65V24H8V8.5Z" /></svg>); }
function GlobeIcon(props) { return (<svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2Zm7.93 9h-3.2a15.7 15.7 0 0 0-1.03-5.06 8 8 0 0 1 4.23 5.06ZM12 4c.93 1.2 2.18 3.64 2.5 7H9.5c.32-3.36 1.57-5.8 2.5-7ZM6.3 6.94A15.7 15.7 0 0 0 5.27 11h-3.2a8 8 0 0 1 4.23-5.06Zm-4.23 6.06h3.2c.23 1.81.73 3.57 1.46 5.06A8 8 0 0 1 2.07 13ZM12 20c-.93-1.2-2.18-3.64-2.5-7h5c-.32 3.36-1.57 5.8-2.5 7Zm3.7-2.94c.73-1.49 1.23-3.25 1.46-5.06h3.2a8 8 0 0 1-4.23 5.06Z" /></svg>); }
function CodeIcon(props) { return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></svg>); }