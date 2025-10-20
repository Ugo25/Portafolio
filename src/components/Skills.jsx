import SkillCard from "./ui/SkillCard.jsx";
import skills from "../data/skills.json";

export default function Skills() {
    return (
        <section id="skills" className="mx-auto max-w-6xl px-4 py-12 md:py-16 scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold">Skills</h2>
            <p className="mt-3 text-neutral-300 text-base md:text-lg">Tecnologías y lenguajes con los que trabajo actualmente:</p>


            {/* Avanzado */}
            <div className="mt-8">
                <h3 className="text-lg font-semibold text-emerald-400 mb-3">Avanzado</h3>
                <div className="grid grid-cols-1 gap-4 w-full md:w-1/2">
                    {skills.advanced.map((name) => (
                        <SkillCard key={name} name={name} level="Avanzado" />
                    ))}
                </div>
            </div>


            {/* Intermedio */}
            <div className="mt-10">
                <h3 className="text-lg font-semibold text-yellow-400 mb-3">Intermedio</h3>
                <div className="grid grid-cols-1 gap-4 w-full md:w-1/2">
                    {skills.intermediate.map((name) => (
                        <SkillCard key={name} name={name} level="Intermedio" />
                    ))}
                </div>
            </div>


            {/* En curso */}
            <div className="mt-10">
                <h3 className="text-lg font-semibold text-blue-400 mb-3">En curso</h3>
                <div className="grid grid-cols-1 gap-4 w-full md:w-1/2">
                    {skills.inProgress.map((name) => (
                        <SkillCard key={name} name={name} level="En curso" />
                    ))}
                </div>
            </div>
        </section>
    );
}