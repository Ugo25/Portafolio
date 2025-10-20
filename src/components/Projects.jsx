import projects from "../data/projects.json";
import { GlobeIcon } from "./ui/icons";


export default function Projects() {
    return (
        <section id="proyectos" className="mx-auto max-w-6xl px-4 py-12 md:py-16 scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold">Proyectos</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {projects.map((p, i) => (
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
                        <h3 className="mt-2 text-lg md:text-xl font-semibold group-hover:text-emerald-300">{p.title}</h3>
                        <p className="mt-2 text-neutral-400 text-sm">{p.desc}</p>
                    </a>
                ))}
            </div>
        </section>
    );
}