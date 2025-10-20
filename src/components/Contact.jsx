import { MailIcon, GitHubIcon, GitLabIcon, LinkedInIcon } from "./ui/icons";


export default function Contact() {
    return (
        <section id="contacto" className="mx-auto max-w-6xl px-4 py-12 md:py-16 scroll-mt-24">
            <h2 className="reveal text-xl md:text-2xl font-bold">Contacto</h2>
            <p className="reveal mt-3 text-neutral-300">Contáctame en mis redes Sociales</p>


            <div className="reveal mt-6 flex flex-col sm:flex-row gap-3 text-neutral-300">
                <a href="mailto:hugoacosta7911@gmail.com" className="px-4 py-2 rounded-xl border border-neutral-700 hover:bg-neutral-800 flex items-center gap-2 justify-center">
                    <MailIcon className="w-4 h-4" /> Email
                </a>
                <a href="https://github.com/Ugo25" className="px-4 py-2 rounded-xl border border-neutral-700 hover:bg-neutral-800 flex items-center gap-2 justify-center">
                    <GitHubIcon className="w-4 h-4" /> GitHub
                </a>
                <a href="https://gitlab.com/Ugo25" className="px-4 py-2 rounded-xl border border-neutral-700 hover:bg-neutral-800 flex items-center gap-2 justify-center">
                    <GitLabIcon className="w-4 h-4" /> Gitlab
                </a>
                <a href="https://www.linkedin.com/in/tu-perfil" className="px-4 py-2 rounded-xl border border-neutral-700 hover:bg-neutral-800 flex items-center gap-2 justify-center">
                    <LinkedInIcon className="w-4 h-4" /> LinkedIn
                </a>
            </div>
        </section>
    );
}