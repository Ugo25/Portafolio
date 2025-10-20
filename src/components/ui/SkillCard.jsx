export default function SkillCard({ name, level }) {
    return (
        <div className="rounded-2xl border border-neutral-800 p-4 bg-neutral-900/60">
            <div className="text-xs md:text-sm text-neutral-400">{level}</div>
            <div className="text-lg font-semibold">{name}</div>
        </div>
    );
}