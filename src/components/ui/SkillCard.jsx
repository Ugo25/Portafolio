// src/components/ui/SkillCard.jsx
export default function SkillCard({ name, level, delay = 0 }) {
    return (
        <div
            className="reveal rounded-2xl border border-neutral-800 p-4 bg-neutral-900/60"
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="text-xs md:text-sm text-neutral-400">{level}</div>
            <div className="text-lg font-semibold">{name}</div>
        </div>
    );
}
