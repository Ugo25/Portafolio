import { useEffect, useState } from "react";
import { ShieldIcon, MenuIcon, CloseIcon } from "./ui/icons";


const links = [
    { label: "Inicio", href: "#inicio" },
    { label: "Sobre mí", href: "#sobre" },
    { label: "Skills", href: "#skills" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Contacto", href: "#contacto" },
];


export default function Navbar() {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen((v) => !v);


    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
    }, [open]);


    return (
        <header className="sticky top-0 z-50 border-b border-neutral-800/60 bg-neutral-950/80 backdrop-blur">
            <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
                <a href="#inicio" className="flex items-center gap-2">
                    <ShieldIcon className="w-5 h-5 text-emerald-400" />
                    <span className="font-semibold">Hugo Acosta</span>
                </a>


                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-2">
                    {links.map((l) => (
                        <a key={l.href} href={l.href} className="px-3 py-2 rounded-lg text-sm hover:bg-neutral-800 transition">
                            {l.label}
                        </a>
                    ))}
                </nav>


                {/* Hamburger (mobile) */}
                <button onClick={toggle} className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-neutral-800 transition" aria-label="Abrir menú" aria-expanded={open}>
                    {open ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                </button>
            </div>


            {/* Mobile drawer */}
            <div className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${open ? "max-h-96" : "max-h-0"}`}>
                <nav className="px-4 pb-4 pt-1 space-y-1 bg-neutral-950/95">
                    {links.map((l) => (
                        <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-neutral-800">
                            {l.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}