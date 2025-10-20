export default function IconLink({ href, label, children }) {
    return (
        <a href={href} aria-label={label} className="hover:text-white" target="_blank" rel="noreferrer">
            {children}
        </a>
    );
}