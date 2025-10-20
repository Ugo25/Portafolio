import fotoPerfil from "../assets/foto-perfil.jpg";
import Badge from "./ui/Badge";
import IconLink from "./ui/IconLink";
import { GitHubIcon, GitLabIcon, MailIcon } from "./ui/icons";


export default function Hero() {
    return (
        <section id="inicio" className="relative flex items-center justify-center min-h-[90vh] scroll-mt-24">
            <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_10%_10%,rgba(16,185,129,0.12),transparent),radial-gradient(500px_200px_at_90%_0%,rgba(16,185,129,0.08),transparent)]" />


            <div className="relative mx-auto max-w-6xl px-4 py-10 md:py-20 grid md:grid-cols-2 gap-10 items-center">
                {/* Texto */}
                <div className="space-y-5">
                    <h1 className="reveal text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight" style={{ transitionDelay: "0ms" }}>
                        Desarrollador Web & Móvil • Estudiante TI
                        <span className="block mt-2">
                            <span className="text-emerald-400">Rumbo a CCNA → </span>
                            <span className="text-red-500">Red Team</span>
                        </span>
                    </h1>


                    <p className="reveal mt-0 text-neutral-300 max-w-prose text-base md:text-lg" style={{ transitionDelay: "120ms" }}>
                        Construyo interfaces claras y herramientas útiles. Me especializo en
                        <b> HTML/CSS</b> y <b>Android (Kotlin)</b>, con base en <b>C</b>, <b>C++</b> y <b>Java</b>.
                        Profundizando en redes Cisco y ciberseguridad ofensiva.
                    </p>


                    <div className="reveal mt-0 flex flex-col sm:flex-row gap-3" style={{ transitionDelay: "240ms" }}>
                        <a href="#proyectos" className="inline-flex justify-center rounded-xl border border-emerald-500/60 text-emerald-300 hover:bg-emerald-500/10 px-4 py-2">Ver proyectos</a>
                        <a href="#contacto" className="inline-flex justify-center rounded-xl border border-neutral-700 hover:bg-neutral-800 px-4 py-2">Contacto</a>
                    </div>


                    <div className="reveal mt-0 flex gap-4 text-neutral-300" style={{ transitionDelay: "360ms" }}>
                        <IconLink href="https://github.com/Ugo25" label="GitHub"><GitHubIcon className="w-6 h-6" /></IconLink>
                        <IconLink href="https://gitlab.com/Ugo25" label="GitLab"><GitLabIcon className="w-6 h-6" /></IconLink>
                        <IconLink href="mailto:hugoacosta7911@gmail.com" label="Email"><MailIcon className="w-6 h-6" /></IconLink>
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
                            className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 rounded-full object-cover border-4 border-neutral-800 shadow-lg shadow-emerald-500/10 group-hover:shadow-emerald-500/30 transition duration-500 select-none"
                            loading="lazy"
                            decoding="async"
                            width="240"
                            height="240"
                            draggable="false"                         // 🚫 impide arrastrar
                            onContextMenu={(e) => e.preventDefault()} // 🚫 bloquea clic derecho directo
                        />
                    </div>


                    {/* Skills rápidas con animación */}
                    <div className="relative w-full max-w-[540px] animate-fade-up delay-300">
                        <div className="absolute -inset-1 bg-emerald-500/20 blur-2xl rounded-3xl" />
                        <div className="relative bg-neutral-900 border border-neutral-800 rounded-3xl p-5 sm:p-6 shadow-xl">
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {["HTML/CSS", "Android (Kotlin)", "Java", "C", "C++", "Cisco / CCNA"].map((b) => (
                                    <Badge key={b} label={b} />
                                ))}
                            </div>
                            <div className="mt-5 text-xs sm:text-sm text-neutral-400">* VLANs, DHCP, Routing, Subnetting, Wireshark y pentesting básico.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}