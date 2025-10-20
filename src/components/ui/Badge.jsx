import { CodeIcon } from "./icons";


export default function Badge({ label }) {
    return (
        <div className="flex items-center gap-2 rounded-xl bg-neutral-800/60 border border-neutral-700 px-3 py-2 text-sm">
            <CodeIcon className="w-4 h-4 text-neutral-300" />
            <span>{label}</span>
        </div>
    );
}