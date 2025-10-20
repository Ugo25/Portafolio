export default function Footer() {
    return (
        <footer className="border-t border-neutral-800 py-8 text-center text-neutral-500 text-xs md:text-sm">
            © {new Date().getFullYear()} Hugo Acosta · Build • Secure • Repeat
        </footer>
    );
}