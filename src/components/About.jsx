export default function About() {
    return (
        <section id="sobre" className="mx-auto max-w-6xl px-4 py-12 md:py-16 scroll-mt-24">
            <h2 className="reveal text-xl md:text-2xl font-bold" style={{ transitionDelay: "0ms" }}>Sobre mí</h2>


            <p className="reveal mt-3 md:mt-4 text-neutral-300 max-w-3xl text-base md:text-lg" style={{ transitionDelay: "120ms" }}>
                Apasionado por la tecnología y el aprendizaje continuo. Me gusta crear proyectos que combinen diseño, funcionalidad y propósito. Estoy enfocado en crecer como desarrollador y fortalecer mis habilidades en redes y seguridad informática.
            </p>


            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                    ["Dev Web & Móvil", "HTML/CSS, React, Android (Kotlin)"],
                    ["Base sólida", "C, C++, Java"],
                    ["Enfocado a redes", "Rumbo a CCNA y Red Team"],
                ].map(([title, desc], i) => (
                    <div key={title} className="reveal rounded-2xl border border-neutral-800 bg-neutral-900/60 p-4" style={{ transitionDelay: `${200 + i * 120}ms` }}>
                        <div className="text-sm font-semibold">{title}</div>
                        <div className="text-xs text-neutral-400 mt-1">{desc}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}